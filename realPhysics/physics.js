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
	
	frN : .55,
	frT : .999, 

	reflect: function ( pM1, pV1, pMobile1, pM2, pV2, pMobile2, pN ) {
		
		this.refl = function ( pM, pV, pN  ) {

			var
			vN   = prjAOnB( pV, pN ),
			vT   = pV.clone ( ).sub ( vN );
			
			pV.copy ( vT.multiplyScalar( this.frT ).sub( vN.multiplyScalar( this.frN ) ) );
		}
		
		if ( !pMobile1 ) {
			
			if ( pMobile2 )
			
				this.refl( pM2, pV2, pN );
			
			return;
		
		}
		
		if ( !pMobile2 ) {
			
			this.refl( pM1, pV1, pN );
			
			return;
		}
		
		var
		v1N   = prjAOnB( pV1, pN ),
		v2N   = prjAOnB( pV2, pN ),
		v1T   = ( pV1.clone ( ).sub ( v1N ) ).multiplyScalar ( this.frT ),
		v2T   = ( pV2.clone ( ).sub ( v2N ) ).multiplyScalar ( this.frT ),
		mT    = 1. / ( pM1 + pM2 ),
		mD    = pM2 - pM1,
		v1    = v1N.clone ( ).multiplyScalar ( -this.frN * mD * mT ).add ( v2N.clone ( ).multiplyScalar ( 2. * this.frN * pM2 * mT ) ),
		v2    = v2N.clone ( ).multiplyScalar ( +this.frN * mD * mT ).add ( v1N.clone ( ).multiplyScalar ( 2. * this.frN * pM1 * mT ) );
		
		pV1.copy ( v1T.add( v1 ) );
		pV2.copy ( v2T.add( v2 ) );
	},

	sphereAndSphere: function ( pS1, pMobile1, pS2, pMobile2 ) {
		
		var
		r  = pS2.mesh.position.clone ( ).sub( pS1.mesh.position ),
		d2 = r.dot ( r ),
		m  = pS1.radius + pS2.radius,
		m2 = m * m;
		
		if ( m2 < d2 ) return;
		
		var
		d1 = pS1.vel.dot ( r ),
		d2 = pS2.vel.dot ( r );		
		
//		pMobile1 &= d1 < 0;
//		pMobile2 &= 0 < d2;

		if ( d1 - d2 < 0 ) return;
		
		this.reflect( pS1.mass, pS1.vel, pMobile1, pS2.mass, pS2.vel, pMobile2, r.normalize( ) );		  		
	},
	
	sphereAndPlane: function ( pS, pMobile1, pP, pMobile2 ) {

		var
		r = pS.mesh.position.clone ( ).sub ( pP.mesh.position ),
		n = pP.n( ),
		d = n.dot ( r ),
		m = pS.radius;
		
		if ( m < d ) return;
		
		var
		d1 = pP.vel.dot ( n ),
		d2 = pS.vel.dot ( n );		
		
//		pMobile1 &= 0 < d1;
//		pMobile2 &= d2 < 0;
			
		if ( d1 - d2 < 0 ) return;

		this.reflect( pS.mass, pS.vel, pMobile1, pP.mass, pP.vel, pMobile2, n );		  		
	},
	
	planeAndPlane: function ( p1, pMobile1, p2, pMobile2 ) {
	},

	objAndObj: function ( pO1, pMobile1, pO2, pMobile2 ) {
	
		if ( pO1.mesh.geometry.type == "PlaneGeometry" )

			if ( pO2.mesh.geometry.type == "PlaneGeometry" )
			
				return this.planeAndPlane( pO1, pMobile1, pO2, pMobile2 );

			else 
		
				return this.sphereAndPlane( pO2, pMobile1, pO1, pMobile2 );
		else 

			if ( pO2.mesh.geometry.type == "PlaneGeometry" )
			
				return this.sphereAndPlane( pO1, pMobile1, pO2, pMobile2 );

			else 
		
				return this.sphereAndSphere( pO1, pMobile1, pO2, pMobile2 );
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
 		
 	for ( var i = 0; i < this.objs.length; ++i )

		this.objs[ i ].accl( dt ); 				

 	for ( var i = 0; i < this.objs.length; ++i )

		this.objs[ i ].move( dt );
		
	for ( var i = 0; i < this.objs.length - 1; ++i )
		
		for ( var j = i + 1; j < this.objs.length; ++j )
			
			fixCollisionBetween.objAndObj( this.objs[ i ], true, this.objs[ j ], true );

	for ( var i = 0; i < this.objs.length; ++i )
		
		for ( var j = 0; j < this.envm.length; ++j )
		
			fixCollisionBetween.objAndObj( this.objs[ i ], true, this.envm[ j ], false );
}