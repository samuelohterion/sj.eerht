function prjAOnB ( pV3A, pV3B ) {
	
	return pV3B.clone( ).multiplyScalar( pV3B.dot( pV3A ) / pV3B.dot( pV3B ) );	
}

function aPrjAOnB ( pV3A, pV3B ) {
	
	return pV3B.clone( ).sub( prjAonB( pV3A, pV3B ) );
}

rotateAroundWorldAxis = function ( object, axis, radians ) {

    var rotationMatrix = new THREE.Matrix4( );

    rotationMatrix.makeRotationAxis( axis.normalize( ), radians );
    rotationMatrix.multiply( object.matrix );                       // pre-multiply
    object.matrix = rotationMatrix;
//    object.rotation.setEulerFromRotationMatrix( object.matrix );
    object.rotation.setFromRotationMatrix( object.matrix );
}

function mat4TimesVec3( pM4, pV3 ) {

	var 
	m3 = pM4.elements; 	
	
	return new THREE.Vector3( 
	
		m3[ 0 ] * pV3.x + m3[ 4 ] * pV3.y + m3[  8 ] * pV3.z,
		m3[ 1 ] * pV3.x + m3[ 5 ] * pV3.y + m3[  9 ] * pV3.z,
		m3[ 2 ] * pV3.x + m3[ 6 ] * pV3.y + m3[ 10 ] * pV3.z
	);	
}

fixCollisionBetween = {
	
	frN : .95,
	frT : .999, 

	reflect: function ( pO1, pMobile1, pO2, pMobile2, pN, dt ) {
		
		this.refl = function ( pObj, pN, dt ) {

			var
			vN   = prjAOnB( pObj.vel, pN ),
			vT   = pObj.vel.clone ( ).sub ( vN );
			
			pObj.mesh.position.sub (  vN.multiplyScalar ( 2. * dt ) );

			pObj.vel.copy ( vT.multiplyScalar( this.frT ).sub( vN.multiplyScalar( this.frN ) ) );
		}
		
		if ( !pMobile1 ) {
			
			if ( pMobile2 )
			
				this.refl( pO2, pN, dt );
			
			return;
		
		}
		
		if ( !pMobile2 ) {
			
			this.refl( pO1, pN, dt );
			
			return;
		}
		
		var
		v1N   = prjAOnB( pO1.vel, pN ),
		v2N   = prjAOnB( pO2.vel, pN ),
		v1T   = ( pO1.vel.clone ( ).sub ( v1N ) ).multiplyScalar ( this.frT ),
		v2T   = ( pO2.vel.clone ( ).sub ( v2N ) ).multiplyScalar ( this.frT ),
		mT    = 1. / ( pO1.mass + pO2.mass ),
		mD    = pO2.mass - pO1.mass,
		v1    = v1N.clone ( ).multiplyScalar ( -this.frN * mD * mT ).add ( v2N.clone ( ).multiplyScalar ( 2. * this.frN * pO2.mass * mT ) ),
		v2    = v2N.clone ( ).multiplyScalar ( +this.frN * mD * mT ).add ( v1N.clone ( ).multiplyScalar ( 2. * this.frN * pO1.mass * mT ) );
		
		pO1.mesh.position.sub (  pO1.vel.clone( ).multiplyScalar ( 2. * dt ) );
		pO2.mesh.position.sub (  pO2.vel.clone( ).multiplyScalar ( 2. * dt ) );

		pO1.vel.copy ( v1T.add( v1 ) );
		pO2.vel.copy ( v2T.add( v2 ) );
	},

	sphereAndSphere: function ( pS1, pMobile1, pS2, pMobile2, dt ) {
		
		var
		dist = pS2.mesh.position.clone ( ).sub( pS1.mesh.position ),
		n    = dist.clone( ).normalize( ),
		d2   = dist.dot ( dist ),
		r    = pS1.radius + pS2.radius,
		r2   = r * r;
		
		if ( r2 < d2 ) return false;
		
		var
		dS1 = pS1.vel.dot ( n ),
		dS2 = pS2.vel.dot ( n );		
		
//		pMobile1 &= d1 < 0;
//		pMobile2 &= 0 < d2;

		if ( dS1 - dS2 < 0 ) return false;
		
		this.reflect( pS1, pMobile1, pS2, pMobile2, n, dt );		  		

		return true;
	},
	
	sphereAndPlane: function ( pS, pMobile1, pP, pMobile2, dt ) {

		var
		r = pS.mesh.position.clone ( ).sub ( pP.mesh.position ),
		n = pP.n( ),
		d = n.dot ( r ),
		m = pS.radius;
		
		if ( m < d ) return false;
		
		var
		d1 = pP.vel.dot ( n ),
		d2 = pS.vel.dot ( n ),
		d3 = m - d;		
		
//		pMobile1 &= 0 < d1;
//		pMobile2 &= d2 < 0;
			
		if ( d1 - d2 < 0 ) return false;

		this.reflect( pS, pMobile1, pP, pMobile2, n, dt );

		return true;
	},
	
	planeAndPlane: function ( p1, pMobile1, p2, pMobile2, dt ) {
		
		return false;
	},

	objAndObj: function ( pO1, pMobile1, pO2, pMobile2, dt ) {
	
		if ( pO1.mesh.geometry.type == "PlaneGeometry" )

			if ( pO2.mesh.geometry.type == "PlaneGeometry" )
			
				return this.planeAndPlane( pO1, pMobile1, pO2, pMobile2, dt );

			else 
		
				return this.sphereAndPlane( pO2, pMobile1, pO1, pMobile2, dt );
		else 

			if ( pO2.mesh.geometry.type == "PlaneGeometry" )
			
				return this.sphereAndPlane( pO1, pMobile1, pO2, pMobile2, dt );

			else 
		
				return this.sphereAndSphere( pO1, pMobile1, pO2, pMobile2, dt );
				
		return false;
	}	
}
/*
function Bounding ( pRadius, pBox ) {
	
	this.rad  = pRadius || 0;
	this.box  = pBox || new THREE.Vector3( );
	this.isIn = function ( r ) {
		
		var
		d  = r.clone.sub ( this.mesh.position );
		
		return	
			d.dot ( d ) <= this.rad * this.rad &&	
			abs ( d.x ) <= box.x && 
			abs ( d.y ) <= box.y && 
			abs ( d.z ) <= box.z;
	}
}

Bounding.prototype.fromMesh = function ( pMesh ) {

	var
	rm = 0,
	vs = pMesh.geometry.vertices,
	bx = new THREE.Vector3 ( );

	for ( var i = 0; i < v.length; ++i ) {
		
		var
		v = vs[ i ],
		r = u.x * u.x + u.y * u.y + u.z * u.z;		
		
		if ( rm < r ) rm = r;
		if ( b.x < Math.abs( v[ i ].x ) ) b.x = Math.abs( v[ i ].x );
		if ( b.y < Math.abs( v[ i ].y ) ) b.y = Math.abs( v[ i ].y );
		if ( b.z < Math.abs( v[ i ].z ) ) b.z = Math.abs( v[ i ].z );
	}
	
	this.rad = Math.sqrt ( rm );
	this.box = bx;
	
	return this;
}
*/

function PhysicalObject ( pMesh, pMass, pMomentOfInertia ) {
	
	this.mesh     = pMesh;
//	this.bounding = ( new Bounding( 0, new THREE.Vector3( ) ) ).fromMesh ( this.mesh );	
	this.mass = pMass;
	this.moi  = pMomentOfInertia;
	this.vel  = new THREE.Vector3 ( );
	this.acc  = new THREE.Vector3 ( );
	this.dphi = new THREE.Vector3 ( );
	this.ddph = new THREE.Vector3 ( );
}

PhysicalObject.prototype = {
	
	constructor : PhysicalObject,
	
	pos         : function ( ) { 
	
		return PhysicalObject.mesh.geometrie.position; 
	},
	
	accl        : function ( dt ) {

//		this.acc.set ( 0, -981., 0 );

		var
		m = oCtl.object.matrix.elements,
		v = ( new THREE.Vector3( m[ 4 ], m[ 5 ], m[ 6 ] ) );
		this.acc.copy( v.normalize ( ).multiplyScalar ( -981. ) );
	},

	move        : function ( dt ) {
	
		var
		vel = this.vel.clone ( );
		
		this.vel.add ( this.acc.clone ( ).multiplyScalar ( dt ) );
		this.mesh.position.add (  vel.multiplyScalar ( dt ) );
	}
}

function Wall ( pMesh, pMass, pMomentOfInertia ) {

	PhysicalObject.call ( this, pMesh, pMass, pMomentOfInertia );
	this.width  = pMesh.geometry.parameters.width;
	this.height = pMesh.geometry.parameters.height;
}

Wall.prototype = new PhysicalObject;
Wall.prototype.constructor = Wall;
Wall.prototype.n = function ( ) {
	
	var
	n3 = this.mesh.geometry.faces[ 0 ].normal.clone ( ),

	n3 = mat4TimesVec3 ( this.mesh.matrix, n3 );

	return n3.normalize ( );
}

function Ball ( pMesh, pMass, pMomentOfInertia ) {

	PhysicalObject.call ( this, pMesh, pMass, pMomentOfInertia );
	this.radius = pMesh.geometry.parameters.radius;
}

Ball.prototype = new PhysicalObject;
Ball.prototype.constructor = Ball;

function Physics ( ) {
	
	this.objs = [ ];
	this.envm = [ ];
}

Physics.prototype.add = function ( pMesh, pMass, pMomentOfInertia, pNotAsEnvironment ) {
		
	var
	arr = pNotAsEnvironment ? this.objs : this.envm;

	arr.push ( 
		pMesh.geometry.type == "PlaneGeometry"
			? new Wall ( pMesh, pMass, pMomentOfInertia )
			: new Ball ( pMesh, pMass, pMomentOfInertia ) );
}
 	 	
Physics.prototype.work = function ( dt ) {
 		
 	var
 	refl = [ ];	
 	
 	for ( var i = 0; i < this.objs.length; ++i )

		this.objs[ i ].accl( dt ); 				

 	for ( var i = 0; i < this.objs.length; ++i )

		this.objs[ i ].move( dt );
		
 	for ( var i = 0; i < this.objs.length; ++i ) {

		refl.push( false );
		
		for ( var j = i + 1; j < this.objs.length; ++j )
			
			refl[ i ] |= fixCollisionBetween.objAndObj( this.objs[ i ], true, this.objs[ j ], true, dt );

		for ( var j = 0; j < this.envm.length; ++j )
		
			refl[ i ] |= fixCollisionBetween.objAndObj( this.objs[ i ], true, this.envm[ j ], false, dt );
	}
			
 	for ( var i = 0; i < this.objs.length; ++i )

		if ( refl[ i ] ) {
			
			this.objs[ i ].mesh.position.add ( this.objs[ i ].vel.clone( ).multiplyScalar ( ( 2.01 - fixCollisionBetween.frN ) * dt ) );
		}
	
}