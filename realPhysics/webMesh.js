function Particle ( pPos ) {

	this.pos = pPos;
	this.vel = THREE.Vector3 ( );
	this.acc = THREE.Vector3 ( );
}

function Spring ( pParticle1, pParticle2 ) {

	this.p1 = pParticle1;
	this.p2 = pParticle2;
	this.l  = this.p2.pos.clone ( ).sub( this.p1.pos ).length ( );
}

Spring.prototype = {

	constructor : Spring,
	
	diff        : function ( ) {

		var 
		d = this.p2.pos.clone ( ).sub( this.p1.pos ),
		l = d.length ( ),
		a = 1. * ( l - this.l );
		
		d.multiplyScalar ( a / l );
		
		this.p1.acc.add ( d ); 	
		this.p2.acc.sub ( d ); 	
	}

	intg       : function ( dt ) {

		this.p1.a.add ( d ); 	
		this.p2.a.sub ( d ); 	
	}
}

function SpringMesh ( ) {

	this.s = [ ];
	this.p = [ ];
}

SpringMesh.prototype = {

	constructor : SpringMesh;
	
	addParticle : function ( pPos ) {

		this.p.push( new Particle ( pPos ) );	
	}
	
	addSpring   : function ( pParticle1, pParticle2 ) {

		this.s.push ( new Spring ( pParticle1, pParticle2 ) );	
	}
} 


var
objGm = new THREE.Geometry ( ),
wt    = 100,
wh    = wt / 2,
f     = 10;

for ( var i = 0; i < wt; ++i ) {

	for ( var j = 0; j < wt; ++j ) {

		for ( var x = 0; x < 2; ++x ) {
	
			for ( var z = 0; z < 2; ++z ) {
		
				objGm.vertices.push ( new THREE.Vector3 ( f * ( i + x - wh ), 0, f * ( j + z - wh ) ) );
			}
		}

		var
		vi = objGm.vertices.length - 4;
		
		fc = new THREE.Face3 ( vi + 0, vi + 1, vi + 3 );
		fc.color = new THREE.Color ( ( i + j ) % 2 == 0 ? 0xffe0c0 : 0x102030 );
		fc.normal = new THREE.Vector3 ( 0, 1, 0 );
		objGm.faces.push ( fc );			

		fc = new THREE.Face3 ( vi + 3, vi + 2, vi + 0 );
		fc.color = new THREE.Color ( ( i + j ) % 2 == 0 ? 0xffe0c0 : 0x102030 );
		fc.normal = new THREE.Vector3 ( 0, 1, 0 );
		objGm.faces.push ( fc );			
	}
}

var
objMt = new THREE.MeshPhongMaterial ( { vertexColors: THREE.FaceColors } ),
obj   = new THREE.Mesh ( objGm, objMt );
	