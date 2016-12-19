My = {

	Spring : function ( pId0, pId1, pVertices ) {

		this.i0 = pId0;
		this.i1 = pId1;
		var
		d = pVertices[ pId1 ].clone ( ).sub ( pVertices[ pId0 ] );
		d.y = 0;
		this.l  = d.length( );
	},

	Fabrique : function ( pWidth = 100, pSpringConstant = 1, pMaterial = new THREE.MeshPhongMaterial ( { color: 0xff8040, side: THREE.DoubleSide, shading: THREE.SmoothShading } ) ) {

		this.mesh           = new THREE.Mesh ( new THREE.Geometry ( ), pMaterial );
		this.springConstant = pSpringConstant;
		this.width          = pWidth;
		this.springs        = [ ];
		this.vel			= [ ];
		this.acc			= [ ];
		this.lnks			= [ ];

		var
		area = this.width * this.width,
		offs = this.width >> 1;

		for ( var z = 0; z < this.width; ++z ) {

			for ( var x = 0; x < this.width; ++x ) {

				this.mesh.geometry.vertices.push ( new THREE.Vector3 ( x - offs, 0. * ( 2 * Math.random ( ) - 1 ), z - offs ) );
				this.acc.push( new THREE.Vector3 ( ) );
				this.vel.push( new THREE.Vector3 ( ) );
				this.lnk.push ( 0 );
			}
		}

		for ( var x = 0; x < this.width; ++x ) {

			for ( var z = 0; z < this.width - 1; ++z ) {

				var
				from = x * this.width + z,
				to   = x * this.width + z + 1;

				++this.lnks[ from ];
				++this.lnks[ to ];

				this.springs.push ( new My.Spring ( from, to, this.mesh.geometry.vertices ) );
			}
		}

		for ( var z = 0; z < this.width; ++z ) {

			for ( var x = 0; x < this.width - 1; ++x ) {

				var
				from = x * this.width + z,
				to   = ( x + 1 ) * this.width + z;

				++this.lnks[ from ];
				++this.lnks[ to ];

				this.springs.push ( new My.Spring ( from, to, this.mesh.geometry.vertices ) );
			}
		}

		for ( var z = 0; z < this.width - 1; ++z ) {

			for ( var x = 0; x < this.width - 1; ++x ) {

				var
				from = x * this.width + z,
				to   = ( x + 1 ) * this.width + z + 1;

				++this.lnks[ from ];
				++this.lnks[ to ];

				this.springs.push ( new My.Spring ( from, to, this.mesh.geometry.vertices ) );

				from = x * this.width + z + 1;
				to   = ( x + 1 ) * this.width + z;

				++this.lnks[ from ];
				++this.lnks[ to ];

				this.springs.push ( new My.Spring ( from, to, this.mesh.geometry.vertices ) );
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
*
		this.mesh.geometry.verticesNeedUpdate = true;
		this.mesh.geometry.normalsNeedUpdate  = true;
		this.mesh.geometry.colorsNeedUpdate   = true;
		this.mesh.geometry.dynamic            = true;

		this.mesh.geometry.computeFaceNormals ( );
		this.mesh.geometry.computeVertexNormals ( );
		*/
	}
}

My.Spring.prototype = {

	constructor : My.Spring
}

My.Fabrique.prototype = {

	constructor   : My.Fabrique,
	sigmoid       : function ( pV, pLen = 1., pDX = .2, pDY = 1. ) {

		var
		s = new THREE.Vector3 ( 0, 0, 0 );

		for ( var i = 0; i < this.lnk[ pId ].length; ++i ) {

			s.add( this.vertices[ pId ].this.lnk[ pId ][ i ] );
		}

		s.divideScalar( this.lnk[ pId ].length );

		var
		v = this.mesh.geometry.vertices[ pId ]. clone ( ),
		l = s.sub ( v ).length ( ),
		l2 = pDY * ( 2.  / ( 1. + Math.exp( -l / pDX )  ) - 1. );

		return v.multiplyScalar( l2 / l )
	},

	sigmoIt       : function ( pDX = 1., pDY = 1. ) {

		var
		s = new THREE.Vector3 ( 0, 0, 0 );

		for ( var i = 0; i < this.lnk[ pId ].length; ++i ) {

			s.add( this.vertices[ pId ].this.lnk[ pId ][ i ] );
		}

		s.divideScalar( this.lnk[ pId ].length );

		var
		v = this.mesh.geometry.vertices[ pId ]. clone ( ),
		l = s.sub ( v ).length ( ),
		l2 = pDY * ( 2.  / ( 1. + Math.exp( -l / pDX )  ) - 1. );

		return v.multiplyScalar( l2 / l )
	},

	live : function ( pDt ) {

		for ( var i = 0; i < this.springs.length; ++i ) {

			var
			s  = this.springs[ i ],
			v0 = this.mesh.geometry.vertices[ s.i0 ].clone( ),
			v1 = this.mesh.geometry.vertices[ s.i1 ].clone( ),
			a0 = this.acc[ s.i0 ],
			a1 = this.acc[ s.i1 ],
			d  = v1.sub ( v0 ),
			l  = d.length( ),
			f  = this.springConstant * ( 1 - s.l / l );

			d.multiplyScalar( f );
			a0.add ( d.clone( ) );
			a1.sub ( d.clone( ) );
		}

		for ( var i = this.width; i < this.mesh.geometry.vertices.length; ++i ) {

			var
			mass = this.mesh.geometry.vertices[ i ];

			this.acc[ i ].y -= 9.81;
			mass.add( this.vel[ i ].clone ( ).multiplyScalar( pDt ) );
			this.vel[ i ].add( this.acc[ i ].clone ( ).multiplyScalar( pDt ).sub( this.vel[ i ].clone ( ).multiplyScalar( .1 ) ) );
//			this.vel[ i ].add( this.acc[ i ].clone ( ).multiplyScalar( pDt ) );
			this.acc[ i ].set ( 0, 0, 0 );
		}
		this.sigmoid( .1, 1. );
	}
}
