(var running = false;

var then = ( new Date( ) ).getTime( );

var PhysicalWrapper = function ( object ) { 

	this.obj   = object;
	this.mss   = 1.;  
	this.moi   = new THREE.Matrix3( );  
	this.vel   = new THREE.Vector3( 0, 0, 0 );
	this.acc   = new THREE.Vector3( 0, 0, 0 );
	this.phi   = new THREE.Vector3( 0, 0, 0 );
	this.dphi  = new THREE.Vector3( 0, 0, 0 );
	this.ddphi = new THREE.Vector3( 0, 0, 0 );
}

PhysicalWrapper.prototype = {
	
	constructor : function ( object ) { 
	
		PhysicalWrapper.call( this, object );		
	},
							
	initPhysics : function ( mass, momentOfInertia, pos, vel, acc, phi, dphi, ddphi ) {

		this.mss = mass;  
		this.moi = new THREE.Matrix3( );  
		this.obj.position.copy( pos );
		this.vel.copy( vel );
		this.acc.copy( acc );
		this.phi.copy( phi );
		this.dphi.copy( dphi );
		this.ddphi.copy( ddphi );

		if ( .001 < this.phi.dot( this.phi ) ) {
			
			rotateAroundWorldAxis( this.obj, this.phi, this.phi.length( ) );
		}
	},
	
	accl        : function ( dt ) {

		this.acc = new THREE.Vector3( 0., -9.81, 0. );
	},
	
	move        : function ( dt ) {
	
		var
		dpos = this.prototype.clone( ).multiplyScalar( dt ),
		dvel = this.prototype.acc.clone( ).multiplyScalar( dt );
	
		this.prototype.obj.position.add( dpos );
	//		this.obj.matrix.setPosition( dpos );
		this.prototype.vel.add( dvel );	
	}
}

PWSphere = function ( ) { }

PWSphere.prototype = {

	constructor : PhysicalWrapper
}
	
rotateAroundWorldAxis = function ( object, axis, radians ) {

    var rotationMatrix = new THREE.Matrix4( );

    rotationMatrix.makeRotationAxis( axis.normalize( ), radians );
    rotationMatrix.multiply( object.matrix );                       // pre-multiply
    object.matrix = rotationMatrix;
    object.rotation.setEulerFromRotationMatrix( object.matrix );
}
)