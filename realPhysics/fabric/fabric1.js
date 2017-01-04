My = {

	copyMass2Verts ( pVertices, pMasses ) {

		for ( var i = 0; i < pVertices.length; ++i ) {

			pVertices[ i ].copy ( pMasses[ i ].pos );
		}
	},

	copyVerts2Masses ( pMasses, pVertices ) {

		for ( var i = 0; i < pMasses.length; ++i ) {

			pMasses[ i ].pos.copy ( pVertices[ i ] );
		}
	},

	sigmoid : function ( pX ) {

		return 2. / ( 1. + Math.exp ( -2. * pX ) ) - 1.
	},

	Mass   : function ( pX, pY, pZ, pFix = false ) {

		this.fix = pFix;
		this.pos = new THREE.Vector3 ( pX, pY, pZ );
		this.vel = new THREE.Vector3 ( 0, 0, 0 );
		this.acc = new THREE.Vector3 ( 0, 0, 0 );
		this.tmp = this.pos.clone ( );
		this.sum = 0;
	},

	Spring : function ( pId0, pId1, pMasses ) {

		this.i0 = pId0;
		this.i1 = pId1;

		var
		d = pMasses[ pId1 ].pos.clone ( ).sub ( pMasses[ pId0 ].pos );

		d.y = 0;

		this.l  = d.length( );

		++pMasses[ pId0 ].sum;
		++pMasses[ pId1 ].sum;
	},

	Fabrique : function ( pWidth = 32, pSpringConstant = 1e3, pColor = 0xFF3020, pSmoothShading = true, pStruts = true ) {

		this.mesh           = null;
		this.springConstant = pSpringConstant;
		this.width          = pWidth;
		this.springs        = [ ];
		this.masses			= [ ];

		this.init( pWidth, pSpringConstant, pColor, pSmoothShading, pStruts );
	}
}

My.Spring.prototype = {

	constructor : My.Spring,

	sigmoIt     : function ( pVerts, pMasses ) {

		var
		v0 = pMasses[ this.i0 ].pos,
		v1 = pMasses[ this.i1 ].pos,
		dV = v1.clone ( ).sub ( v0 ),
		d  = dV.length ( ),
		l  = ( d - this.l ) / this.l,
		l2 = .5 * ( 1. + .001 * My.sigmoid ( l ) ) * this.l;

		dV.multiplyScalar( l2 / d );

		var
		dC = ( v0.clone ( ).add ( v1 ) ).multiplyScalar ( .5 ),
		dV0 = dC.clone ( ).sub ( dV ),
		dV1 = dC.clone ( ).add ( dV );

		if ( !pMasses[ this.i0 ].fix )

			pVerts[ this.i0 ].add ( dV0 );

		if ( !pMasses[ this.i1 ].fix )

			pVerts[ this.i1 ].add ( dV1 );
	}
}

My.Fabrique.prototype = {

	constructor   : My.Fabrique,

	sigmoIt       : function ( pDt ) {

		for ( var i = 0; i < this.mesh.geometry.vertices.length; ++i ) {

			if ( !this.masses[ i ].fix )

				this.mesh.geometry.vertices[ i ].set ( 0, 0, 0 );
		}

		for ( var i = 0; i < this.springs.length; ++i ) {

			this.springs[ i ].sigmoIt ( this.mesh.geometry.vertices, this.masses );
		}

		for ( var i = 0; i < this.mesh.geometry.vertices.length; ++i ) {

			if ( !this.masses[ i ].fix ) {

				this.mesh.geometry.vertices[ i ].divideScalar ( this.masses[ i ].sum );
				this.masses[ i ].vel.copy ( ( ( this.mesh.geometry.vertices[ i ].clone ( ).sub ( this.masses[ i ].tmp ) ).divideScalar ( 1.0005 * pDt ) ).add ( this.masses[ i ].acc.clone ( ).multiplyScalar ( pDt ) ) );
				this.masses[ i ].tmp.copy( this.mesh.geometry.vertices[ i ] );
//				this.masses[ i ].pos.set( 0, 0, 0 );
			}
		}
	},

	live : function ( pDt ) {

		var
		v  = this.mesh.geometry.vertices,
		m  = this.masses;

		for ( var i = 0; i < m.length; ++i ) {

			m[ i ].acc.set( 0, -98.1, 0 );
		}

		for ( var i = 0; i < this.springs.length; ++i ) {

			var
			s  = this.springs[ i ],
			m0 = m[ s.i0 ],
			m1 = m[ s.i1 ],
			v0 = v[ s.i0 ],
			v1 = v[ s.i1 ].clone( ),
			d  = v1.sub ( v0 ),
			l  = d.length( ),
			f  = this.springConstant * ( 1 - s.l / l );

			d.multiplyScalar( f );
			m0.acc.add ( d.clone( ) );
			m1.acc.sub ( d.clone( ) );
		}

		for ( var i = 0; i < m.length; ++i ) {

			var
			mi = m[ i ];

			if ( !mi.fix ) {

				mi.pos.add ( mi.vel.clone ( ).multiplyScalar ( pDt ) );
//				mi.vel.add( ( mi.acc.clone ( ).multiplyScalar( pDt ) ).sub ( mi.vel.clone ( ).multiplyScalar( 0.5 ) ) );
			}
		}

		this.sigmoIt( pDt );
	},

	init : function ( pWidth, pSpringConstant, pColor = 0xFF3020, pSmoothShading = true, pStruts = true ) {

		this.mesh           = new THREE.Mesh ( new THREE.Geometry ( ), new THREE.MeshPhongMaterial ( { color: pColor, side: THREE.DoubleSide, shading : ( pSmoothShading ? THREE.SmoothShading : THREE.FlatShading ) } ) );
		this.springConstant = pSpringConstant;
		this.width          = pWidth;
		this.springs.length = 0;
		this.masses.length = 0;

		var
		area = this.width * this.width,
		offs = .5 * ( this.width - 1 );

		for ( var z = 0; z < this.width; ++z ) {

			for ( var x = 0; x < this.width; ++x ) {

				this.masses.push ( new My.Mass( x - offs, .6 * this.width + ( z == 0 ? 0 : 0.5 * ( 2 * Math.random ( ) - 1 ) ), z - offs, z == 0 ) );
				this.mesh.geometry.vertices.push( this.masses[ this.masses.length - 1 ].pos.clone ( ) );
			}
		}

		for ( var x = 0; x < this.width; ++x ) {

			for ( var z = 0; z < this.width - 1; ++z ) {

				var
				from = x * this.width + z,
				to   = x * this.width + z + 1;

				this.springs.push ( new My.Spring ( from, to, this.masses ) );
			}
		}

		for ( var z = 0; z < this.width; ++z ) {

			for ( var x = 0; x < this.width - 1; ++x ) {

				var
				from = x * this.width + z,
				to   = ( x + 1 ) * this.width + z;

				this.springs.push ( new My.Spring ( from, to, this.masses ) );
			}
		}

		if ( pStruts ) {

			for ( var z = 0; z < this.width - 1; ++z ) {

				for ( var x = 0; x < this.width - 1; ++x ) {

					var
					from = x * this.width + z,
					to   = ( x + 1 ) * this.width + z + 1;

					this.springs.push ( new My.Spring ( from, to, this.masses ) );

					from = x * this.width + z + 1;
					to   = ( x + 1 ) * this.width + z;

					this.springs.push ( new My.Spring ( from, to, this.masses ) );
				}
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
/*
		this.mesh.geometry.verticesNeedUpdate = true;
		this.mesh.geometry.normalsNeedUpdate  = true;
		this.mesh.geometry.colorsNeedUpdate   = true;
		this.mesh.geometry.dynamic            = true;

		this.mesh.geometry.computeFaceNormals ( );
		this.mesh.geometry.computeVertexNormals ( );
		*/
	}
}
