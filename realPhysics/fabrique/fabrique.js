My = {

	Spring : function ( pId0, pId1, pVertices ) {

		this.i0 = pId0;
		this.i1 = pId1;
		this.l  = ( pVertices[ pId1 ].clone ( ).sub ( pVertices[ pId1 ] ) ).length( );
	},

	Mass : function ( pX, pY, pZ ) {

		THREE.Vector3.call ( this, pX, pY,pZ );
		this.vel = new THREE.Vector3 ( 0, 0, 0 );
		this.acc = new THREE.Vector3 ( 0, 0, 0 );
	},

	Fabrique : function ( pWidth = 100, pSpringConstant = 1., pMaterial = new THREE.MeshPhongMaterial ( { color: 0xff8040, side: THREE.DoubleSide, shading: THREE.SmoothShading } ) ) {

		this.mesh           = new THREE.Mesh ( new THREE.Geometry ( ), pMaterial );
		this.springConstant = pSpringConstant;
		this.width          = pWidth;
		this.springs        = [ ];

		var
		area = this.width * this.width,
		offs = this.width >> 1;

		for ( var z = 0; z < this.width; ++z ) {

			for ( var x = 0; x < this.width; ++x ) {

				this.mesh.geometry.vertices.push ( new My.Mass ( x - offs, .1 * Math.random ( ) - .05, z - offs ) );
			}
		}

		for ( var z = 0; z < this.width; ++z ) {

			this.springs.push ( new My.Spring ( z, z + this.width, this.mesh.geometry.vertices ) );
		}

		for ( var x = 0; x < this.width; ++x ) {

			this.springs.push ( new My.Spring ( x * this.width, x * this.width + 1, this.mesh.geometry.vertices ) );
		}

		for ( var z = 0; z < this.width - 1; ++z ) {

			for ( var x = 0; x < this.width - 1; ++x ) {

				this.springs.push ( new My.Spring ( x * this.width + z, ( x + 1 ) * this.width + z + 1, this.mesh.geometry.vertices ) );
			}
		}

		for ( var x = 0; x < this.width - 1; ++x ) {

			for ( var z = 0; z < this.width - 1; ++z ) {

				var
				i0 = x * this.width + z,
				i1 = x * this.width + z + 1,
				i2 = ( x + 1 ) * this.width + z,
				i3 = ( x + 1 ) * this.width + z + 1;

				this.mesh.geometry.faces.push ( new THREE.Face3( i2, i0, i1 ) );
				this.mesh.geometry.faces.push ( new THREE.Face3( i1, i3, i2 ) );
			}
		}

		this.mesh.geometry.verticesNeedUpdate = true;
		this.mesh.geometry.normalsNeedUpdate  = true;
		this.mesh.geometry.colorsNeedUpdate   = true;
		this.mesh.geometry.dynamic            = true;

		this.mesh.geometry.computeFaceNormals ( );
		this.mesh.geometry.computeVertexNormals ( );
	}
}

My.Mass.prototype = new THREE.Vector3;

My.Mass.constructor = My.Mass;

My.Mass.prototype.clone = function ( ) {

	return new this.constructor( this.x, this.y, this.z );
}

My.Mass.prototype.__proto__ = new THREE.Vector3( );

My.Spring.prototype = {

	constructor : My.Spring
}

My.Fabrique.prototype = {

	constructor   : My.Fabrique,

	live : function ( pDt ) {

		for ( var i = 0; i < this.springs.length; ++i ) {

			var
			s  = this.springs[ i ],
			v0 = this.mesh.geometry.vertices[ s.i0 ],
			v1 = this.mesh.geometry.vertices[ s.i1 ].clone( ),
			d  = v1.sub ( v0 ),
			l  = d.length( ),
			f  = this.springConstant / l * ( s.l - d.length ( ) );

			v0.acc.add ( f );
			v1.acc.add ( f.clone ( ).multiplyScalar ( -1 ) );
		}

		for ( var i = 0; i < vs.length; ++i ) {

			var
			mass = this.mesh.geometry.vertices[ i ];

			mass.add( mass.vel.clone ( ).multiplyScalar( pDt ) );
			mass.vel.add( mass.acc.clone ( ).multiplyScalar( pDt ) );
			mass.acc.copy ( new THREE.Vector3 ( 0, 0, 0 ) );
		}
	}
}
