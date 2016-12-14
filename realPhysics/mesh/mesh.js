My = {

	CNST : {

		RNDM   : 0,
		SQR    : 1,
		XPLSN  : 2,
		CLNDR  : 3,
		SPHR   : 4,
		STCK   : 5,
		CN     : 6
	},

	Itv : function ( pFirst, pLast ) {

		this.f = pFirst;
		this.l = pLast;
		this.s = pLast - pFirst + 1;
	},

	Gmtr : function ( pNumOfFaces ) {

		this.v = [ ];
		this.f = [ ];

		var
		nOFR = 1. / ( pNumOfFaces - 1 );

		for ( var i = 0; i < pNumOfFaces; ++i ) {

			this.v.push ( new THREE.Vector3 ( -.5, -.5, -.5 + nOFR * i ) );
			this.v.push ( new THREE.Vector3 ( +.5, -.5, -.5 + nOFR * i ) );
			this.v.push ( new THREE.Vector3 ( +.0, +.5, -.5 + nOFR * i ) );

			this.f.push ( new THREE.Face3( 3 * i, 3 * i + 1, 3 * i + 2 ) );
		}
	},

	Colors : function ( pNumOfFaces ) {

		this.c = [ ];
	},

	Shape : function ( pMyGmtr ) {

		this.g = pMyGmtr
		this.v = [ ];
		this.f = [ ];
		this.d = .1;

		for ( var i = 0; i < pMyGmtr.v.length; ++i )

			this.v.push ( pMyGmtr.v[ i ].clone( ) );

		for ( var i = 0; i < pMyGmtr.f.length; ++i )

			this.f.push ( pMyGmtr.f[ i ].clone( ) );
	},

	Anim : function ( pMesh ) {

		this.mesh   = pMesh;
		this.shapes = [ ];
		this.tm = 0;
		this.s0 = 0;
		this.s1 = 1;
	}
}
My.Itv.prototype = {

	constructor : My.Itv
}

My.Gmtr.prototype = {

	constructor	: this.Gmtr,
	move		: function ( pFcsItv, pX, pY, pZ ) {

		var
		d = new THREE.Vector3 ( pX, pY, pZ );

		for ( var i = pFcsItv.f; i <= pFcsItv.t; ++i ) {

			this.v[ this.f[ i ].a ].add( d );
			this.v[ this.f[ i ].b ].add( d );
			this.v[ this.f[ i ].c ].add( d );
		}
	}
}

My.Colors.prototype = {

	constructor : My.Colors,
	add         : function ( pColor ) {

		this.c.push ( pColor );
	}
}

My.Shape.prototype = {

	constructor	: My.Shape,

	targetExplosion  : function ( ) {

		var
		i    = 0;

		while ( i < this.v.length ) {

			var
			p1 = new THREE.Vector3 ( 200. * Math.random ( ) - 100., 200. * Math.random ( ) - 100., 200. * Math.random ( ) - 100. ),
			p2 = new THREE.Vector3 ( 200. * Math.random ( ) - 100., 200. * Math.random ( ) - 100., 200. * Math.random ( ) - 100. ),
			p3 = new THREE.Vector3 ( 200. * Math.random ( ) - 100., 200. * Math.random ( ) - 100., 200. * Math.random ( ) - 100. ),
			p4 = new THREE.Vector3 ( ),
			d12 = ( p2.clone ( ).sub ( p1 ) ).normalize ( ),
			d13 = ( p3.clone ( ).sub ( p1 ) ).normalize ( );

			p2.copy( p1.clone ( ).add ( d12 ) );
			p3.copy( p1.clone ( ).add ( d13 ) );
			p4.copy( p1.clone ( ).add ( d12.add ( d13 ) ) );

			this.v[ i + 0 ].copy ( p1 );
			this.v[ i + 1 ].copy ( p2 );
			this.v[ i + 2 ].copy ( p3 );

			this.v[ i + 3 ].copy ( p2 );
			this.v[ i + 4 ].copy ( p4 );
			this.v[ i + 5 ].copy ( p3 );

			i += 6;
		}
	},

	targetStack  : function ( ) {

		var
		w2   = WDTH / 2,
		nOFR = 2. / ( this.v.length - 1 ),
		i    = 0;

		while ( i < this.v.length ) {

			var
			z = WDTH * ( this.v.length - 1 - i ) * nOFR;

			this.v[ i + 0 ].copy ( ( new THREE.Vector3 ( -100. / ( 5 + z ), z, -100 / ( 5 + z ) ) ).sub ( new THREE.Vector3 ( 0, WDTH, 0 ) ) );
			this.v[ i + 1 ].copy ( ( new THREE.Vector3 ( -100. / ( 5 + z ), z, +100 / ( 5 + z ) ) ).sub ( new THREE.Vector3 ( 0, WDTH, 0 ) ) );
			this.v[ i + 2 ].copy ( ( new THREE.Vector3 ( +100. / ( 5 + z ), z, -100 / ( 5 + z ) ) ).sub ( new THREE.Vector3 ( 0, WDTH, 0 ) ) );

			this.v[ i + 3 ].copy ( ( new THREE.Vector3 ( -100. / ( 5 + z ), z, +100 / ( 5 + z ) ) ).sub ( new THREE.Vector3 ( 0, WDTH, 0 ) ) );
			this.v[ i + 4 ].copy ( ( new THREE.Vector3 ( +100. / ( 5 + z ), z, +100 / ( 5 + z ) ) ).sub ( new THREE.Vector3 ( 0, WDTH, 0 ) ) );
			this.v[ i + 5 ].copy ( ( new THREE.Vector3 ( +100. / ( 5 + z ), z, -100 / ( 5 + z ) ) ).sub ( new THREE.Vector3 ( 0, WDTH, 0 ) ) );

			i += 6;
		}
	},

	targetSquare  : function ( ) {

		var
		i   = 0;

		for ( var y = 0; y < WDTH; ++y ) {

			var
			y_  = 2. * ( y - .5 * WDTH - .5 );

			for ( var x = 0; x < WDTH; ++x ) {

				var
				x_ = 2. * ( x - .5 * WDTH - .5 );

				this.v[ i++ ].set ( x_,     -WDTH, y_ );
				this.v[ i++ ].set ( x_ + 2, -WDTH, y_ );
				this.v[ i++ ].set ( x_,     -WDTH, y_ + 2 );

				this.v[ i++ ].set ( x_ + 2, -WDTH, y_ );
				this.v[ i++ ].set ( x_ + 2, -WDTH, y_ + 2 );
				this.v[ i++ ].set ( x_,     -WDTH, y_ + 2 );
			}
		}
	},

	targetSphere  : function ( pRd = WDTH ) {

		var
		i   = 0,
		dTheta = Math.PI / WDTH,
		dPhi   = 2. * dTheta;

		for ( var y = 0; y < WDTH; ++y ) {

			var
			theta = dTheta * y - .5 * Math.PI,
			ct0   = Math.cos ( theta ),
			st0   = Math.sin ( theta ),
			ct1   = Math.cos ( theta + 1 * dTheta ),
			st1   = Math.sin ( theta + 1 * dTheta );

			for ( var x = 0; x < WDTH; ++x ) {

				var
				phi = dPhi * x - 1. * Math.PI,
				cp0 = Math.cos ( phi ),
				sp0 = Math.sin ( phi ),
				cp1 = Math.cos ( phi + 1 * dPhi ),
				sp1 = Math.sin ( phi + 1 * dPhi );

				this.v[ i++ ].set ( sp0 * st0, cp0, sp0 * ct0 ).multiplyScalar ( pRd );
				this.v[ i++ ].set ( sp1 * st0, cp1, sp1 * ct0 ).multiplyScalar ( pRd );
				this.v[ i++ ].set ( sp0 * st1, cp0, sp0 * ct1 ).multiplyScalar ( pRd );

				this.v[ i++ ].set ( sp1 * st0, cp1, sp1 * ct0 ).multiplyScalar ( pRd );
				this.v[ i++ ].set ( sp1 * st1, cp1, sp1 * ct1 ).multiplyScalar ( pRd );
				this.v[ i++ ].set ( sp0 * st1, cp0, sp0 * ct1 ).multiplyScalar ( pRd );

/*
				this.v[ i++ ].set ( cp0, sp0 * ct0, sp0 * st0 ).multiplyScalar ( pRd );
				this.v[ i++ ].set ( cp1, sp1 * ct0, sp1 * st0 ).multiplyScalar ( pRd );
				this.v[ i++ ].set ( cp0, sp0 * ct1, sp0 * st1 ).multiplyScalar ( pRd );

				this.v[ i++ ].set ( cp1, sp1 * ct0, sp1 * st0 ).multiplyScalar ( pRd );
				this.v[ i++ ].set ( cp1, sp1 * ct1, sp1 * st1 ).multiplyScalar ( pRd );
				this.v[ i++ ].set ( cp0, sp0 * ct1, sp0 * st1 ).multiplyScalar ( pRd );
*/			}
		}
	},

	targetCylinder  : function ( pRd = WDTH ) {

		var
		i    = 0,
		dPhi = 2. * Math.PI / WDTH,
		dX   = 2. / pRd;

		for ( var y = 0; y < WDTH; ++y ) {

			var
			y1 = y + 1.,
			cp0 = pRd * Math.cos ( y * dPhi - .5 * Math.PI ),
			sp0 = pRd * Math.sin ( y * dPhi - .5 * Math.PI ),
			cp1 = pRd * Math.cos ( y1 * dPhi - .5 * Math.PI),
			sp1 = pRd * Math.sin ( y1 * dPhi - .5 * Math.PI );

			for ( var x = 0; x < WDTH; ++x ) {

				var
				x0 = 2. * ( x - .5 - ( WDTH >> 1 ) ),
				x1 = 2. * ( x + .5 - ( WDTH >> 1 ) );

				this.v[ i++ ].set ( sp0, x0, cp0 );
				this.v[ i++ ].set ( sp1, x0, cp1 );
				this.v[ i++ ].set ( sp0, x1, cp0 );

				this.v[ i++ ].set ( sp1, x0, cp1 );
				this.v[ i++ ].set ( sp1, x1, cp1 );
				this.v[ i++ ].set ( sp0, x1, cp0 );
			}
		}
	},

	targetCone  : function ( pRd = WDTH ) {

		var
		i    = 0,
		dPhi = 2. * Math.PI / WDTH,
		dX   = 2. / pRd;

		for ( var x = 0; x < WDTH; ++x ) {

			var
			d0  = ( WDTH - x ) / ( WDTH ),
			d1  = ( WDTH - x - 1 ) / ( WDTH  ),
			x0 = 2. * ( x - .5 - ( WDTH >> 1 ) ),
			x1 = 2. * ( x + .5 - ( WDTH >> 1 ) );

			for ( var y = 0; y < WDTH; ++y ) {

				var
				y1 = y + 1.,
				cp0 = pRd * Math.cos ( y * dPhi - .5 * Math.PI ),
				sp0 = pRd * Math.sin ( y * dPhi - .5 * Math.PI ),
				cp1 = pRd * Math.cos ( y1 * dPhi - .5 * Math.PI),
				sp1 = pRd * Math.sin ( y1 * dPhi - .5 * Math.PI );


				this.v[ i++ ].set ( d0 * sp0, x0, d0 * cp0 );
				this.v[ i++ ].set ( d0 * sp1, x0, d0 * cp1 );
				this.v[ i++ ].set ( d1 * sp0, x1, d1 * cp0 );

				this.v[ i++ ].set ( d0 * sp1, x0, d0 * cp1 );
				this.v[ i++ ].set ( d1 * sp1, x1, d1 * cp1 );
				this.v[ i++ ].set ( d1 * sp0, x1, d1 * cp0 );
			}
		}
	}
}

My.Anim.prototype = {

	constructor : My.Anim,

	add         : function ( pShape ) {

		this.shapes.push ( pShape );
	},

	addShape    : function ( pMyGmtr, pShapeCode ) {

		var
		shp = new My.Shape ( pMyGmtr );

		this.add ( shp );

		switch ( pShapeCode ) {

			case My.CNST.CLNDR : shp.targetCylinder ( ); break;
			case My.CNST.XPLSN : shp.targetExplosion ( ); break;
			case My.CNST.SPHR  : shp.targetSphere ( ); break;
			case My.CNST.STCK  : shp.targetStack ( ); break;
			case My.CNST.CN    : shp.targetCone ( ); break;
//			case My.CNST.SQR   : shp.targetSquare ( ); break;
			default            : shp.targetSquare ( );
		}
	},

	work ( pItv, pDT ) {

		this.tm += 1. / 60.

		if( 10 < this.tm - pItv.l * pDT ) {

			this.tm = 0;

			this.s0 = this.s1;
			this.s1 = parseInt ( this.shapes.length * Math.random ( ) );

			while( this.s1 == this.s0 )

				this.s1 = parseInt ( this.shapes.length * Math.random ( ) );
		}

		var
		v  = this.mesh.geometry.vertices,
		s1 = this.shapes[ this.s0 ].v,
		s2 = this.shapes[ this.s1 ].v;

		for ( var i = pItv.f; i <= pItv.l; ++i ) {

			var
			t = .1 * this.tm + ( i - pItv.l ) * pDT;

			t = t < 0 ? 0 : 1 < t ? 1 : t;

			v[ i ].copy( s2[ i ].clone ( ).multiplyScalar( t ).add ( s1[ i ].clone ( ).multiplyScalar( 1. - t ) ) );
		}
	}
}
