Cnst = {
		
	LFT : 1,
	RGT : 2,
	DWN : 3,
	UP  : 4		
};	
function JsoN ( pData ) {
	
	this.Addr = function ( ) {
		
		this.l = 0;
		this.r = 0;
		this.i = [ ];
		this.gId = function ( ) { 
			
			return this.i[ this.i.length - 1 ]; 
		};
		this.sId = function ( pId ) { 
			
			this.i[ this.i.length - 1 ] = pId; 
		};
		this.newInterval = function ( pSz ) { 
			
			this.l = 0;
			this.r = pSz - 1;
			this.i.push( ( this.r + this.l ) >> 1 );
		};
		this.goLft = function ( ) { 
			
			var
			s = this.r - this.l;

			if ( s < 1 )

				return Cnst.DWN;

			this.r = s < 2 ? this.l : ( this.r + this.l ) >> 1;
			
			this.sId( ( this.r + this.l ) >> 1 );
			
			return Cnst.LFT;
		};
		this.goRgt = function ( ) { 
			
			var
			s = this.r - this.l;

			if ( s < 1 )

				return Cnst.DWN;

			this.l = s < 2 ? this.r : ( this.r + this.l ) >> 1;
			
			this.sId( ( this.r + this.l ) >> 1 );
			
			return Cnst.LFT;
		};
	};
	this.data = pData;
	this.cDta;
	this.addr;
	this.cTxt;
	this.reset = function ( ) {
		
		this.cDta = this.data;
		this.addr = new this.Addr ( );
		this.addr.newInterval( this.cDta.nxt.length );	
		this.cTxt = '';
	}
	this.reset ( pData );
	this.col = 0;
	this.row = 0;
}

JsoN.prototype = {

	constructor : JsoN,
	left       : function ( ) {
		
		var
		rsp = this.addr.goLft ( );
		
		if( rsp == Cnst.DWN ) {
			
			if ( this.cDta.nxt != null ) {
				
				this.addr.newInterval( this.cDta.nxt.length );
				this.cDta = this.cDta.nxt[ this.addr.gId ( ) ];
			}
		}
	},
	right       : function ( ) {
		
		var
		rsp = this.addr.goRgt ( );
		
		if( rsp == Cnst.DWN ) {
			
			if ( this.cDta.nxt != null ) {
				
				this.addr.newInterval( this.cDta.nxt.length );
				this.cDta = this.cDta.nxt[ this.addr.gId ( ) ];
			}
		}
	},
	p_rint  : function ( pData, row, col ) {
		
		this.cTxt += "<br>" + "_".repeat( col ) + pData.val;
		
		if ( pData.nxt == null ) return;

		col += 2;
		
		for ( var i = 0; i < pData.nxt.length; ++i ) {

			 ++row;

			if ( pData.nxt[ i ] != null )
			
				this.p_rint( pData.nxt[ i ], row, col );
		}		
		col -= 2;
	},
	getText : function ( ) {
		
		this.cTxt = '';
		 
		var
		col = 0,
		row = 0;
		
		this.p_rint ( this.cDta, row, col );
		
		return this.cTxt;		
	}
}
