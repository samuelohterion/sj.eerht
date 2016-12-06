My = {

	Itv : function ( pFirst, pLast ) {

		this.f = pFirst;
		this.l = pLast;
	},

	Gmtr : function ( pNumOfFaces ) {

		this.v = [ ];
		this.f = [ ];
		this.i = [ ];

		var
		nOFR = 1. / ( pNumOfFaces - 1 );

		for ( var i = 0; i < pNumOfFaces; ++i ) {

			this.v.push ( new THREE.Vector3 ( -.5, -.5, -.5 + nOFR * i ) );
			this.v.push ( new THREE.Vector3 ( +.5, -.5, -.5 + nOFR * i ) );
			this.v.push ( new THREE.Vector3 ( +.0, +.5, -.5 + nOFR * i ) );

			this.f.push ( new THREE.Face3( 3 * i, 3 * i + 1, 3 * i + 2 ) );
		}

		this.i.push( new My.Itv ( 0, this.f.length - 1 ) );
	}
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
