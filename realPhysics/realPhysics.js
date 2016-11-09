var running = false;

var then = ( new Date( ) ).getTime( );

function PhysicalWrapper( object, mass, momentOfInertia ) {

	this.obj   = object;
	this.mss   = 1.;  
	this.moi   = 2. / 3. ;  
	this.vel   = new THREE.Vector3( 0, 0, 0 );
	this.acc   = new THREE.Vector3( 0, 0, 0 );
	this.phi   = new THREE.Vector3( 0, 0, 0 );
	this.dphi  = new THREE.Vector3( 0, 0, 0 );
	this.ddphi = new THREE.Vector3( 0, 0, 0 );

	this.initPhysics = function( pos, vel, acc, phi, dphi, ddphi, coordSystem ) {

		this.obj.matrix.copy( coordSystem );
		this.obj.position.copy( pos );
		this.vel.copy( vel );
		this.acc.copy( acc );
		this.phi.copy( phi );
		this.dphi.copy( dphi );
		this.ddphi.copy( ddphi );
	
		if ( .001 < this.phi.dot( this.phi ) ) {
			
			rotateAroundWorldAxis( this.obj, this.phi, this.phi.length( ) );
		}
	}

	this.accl  = function ( dt ) {
		
		this.acc = new THREE.Vector3( 0., -9.81, 0. );
	}

	this.move  = function ( dt ) {
		
		var
		dpos = this.vel.clone( ).multiplyScalar( dt ),
		dvel = this.acc.clone( ).multiplyScalar( dt );

		this.obj.position.add( dpos );
//		this.obj.matrix.setPosition( dpos );
		this.vel.add( dvel );
	}
}


function rotateAroundWorldAxis( object, axis, radians ) {

    var rotationMatrix = new THREE.Matrix4( );

    rotationMatrix.makeRotationAxis( axis.normalize( ), radians );
    rotationMatrix.multiply( object.matrix );                       // pre-multiply
    object.matrix = rotationMatrix;
    object.rotation.setEulerFromRotationMatrix( object.matrix );
}
