function BinTree ( pVal ) {

	this.val = pVal || false;
	this.lft = false;
	this.rgt = false;
}

BinTree.prototype = {

	constructor    : BinTree,
	getByAddr      : function ( pAddr, pChLft='0', pChRgt='1' ) {

		var
		ret = false,
		run = this;

		for ( var i = 0; i < pAddr.length; ++i ) {

			if ( pAddr[ i ] == pChLft ) {

				if ( run.lft ) {

					run = run.lft;
				}
				else {

					return false;
				}
			}
			else {

				if ( pAddr[ i ] == pChRgt ) {

					if ( run.rgt ) {

						run = run.rgt;
					}
					else {

						return false;
					}
				}
			}
		}
		return run;
	},
	find           : function ( pVal ) {

		if ( !this.val )

			return false;

		if ( pVal == this.val )

			return this;

		if ( pVal < this.val && this.lft )

			return this.lft.find ( pVal );

		if ( this.val < pVal && this.rgt )

			return this.rgt.find ( pVal );

		return false;
	},
	insert         : function ( pVal ) {

		if ( !this.val ) {

			this.val = pVal;
			this.lft = false;
			this.rgt = false;

			return false;
		}

		if ( pVal == this.val )

			return this;

		if ( pVal < this.val )

			if ( this.lft )

				return this.lft.insert ( pVal );

			else {

				this.lft = new BinTree ( pVal );

				return this.lft;
			}

		if ( this.rgt )

			return this.rgt.insert ( pVal );

		this.rgt = new BinTree ( pVal );

		return this.rgt;
	},
	depth ( ) {

		if( !this.val )

			return 0;

		var
		dL = this.lft ? this.lft.depth ( ) + 1 : 0,
		dR = this.rgt ? this.rgt.depth ( ) + 1 : 0;

		return dR < dL ? dL : dR;
	},
	spc ( pTxt, pCnt ) {

		var
		ret = "";

		while ( 0 <= --pCnt ) {

			ret += pTxt;
		}
		return ret;
	},
	_txt_ ( pPreStr ) {

//		return pPreStr + this.val + "\n" + ( this.lft ? this.lft._txt_ ( pPreStr + this.val + " > " ) : "" ) + ( this.rgt ? this.rgt._txt_ ( pPreStr + this.val + " < " ) : "" );
		return "\[ " + pPreStr + "\] " + this.val + "\n" + ( this.lft ? this.lft._txt_ ( pPreStr + "0 " ) : "" ) + ( this.rgt ? this.rgt._txt_ ( pPreStr + "1 " ) : "" );
//		return "\[ " + pPreStr + " \] " + this.val + "\n" + ( this.rgt ? this.rgt._txt_ ( this.val + ">" + pPreStr ) : "" ) + ( this.lft ? this.lft._txt_ ( pPreStr + ">" + this.val ) : "" );
	},
	txt ( ) {

		return this._txt_ ( "" );
	},
	_toArr_ ( ) {

		var
		lArr = [ ],
		mArr = [ ],
		rArr = [ ];

		if ( this.lft ) {

			lArr = this.lft._toArr_ ( );
		}
		if ( this.val ) {

			mArr.push ( this.val );
		}
		if ( this.rgt ) {

			rArr = this.rgt._toArr_ ( );
		}

		return lArr.concat ( mArr.concat ( rArr ) );
	},
	toArr ( ) {

		return this._toArr_ ( );
	},
	_fromArr_ ( pArr, pFromId, pToId ) {

		if ( pFromId == pToId ) {

			this.val = pArr[ pFromId ];
			this.lft = false;
			this.rgt = false;

			return;
		}

		if ( pFromId + 1 == pToId ) {

			this.val = pArr[ pToId ];
			this.lft = new BinTree ( pArr[ pFromId ] );
			this.rgt = false;

			return;
		}

		var
		m = ( pFromId + pToId ) >> 1;

		this.val = pArr[ m ];

		this.lft = new BinTree ( );
		this.lft._fromArr_ ( pArr, pFromId, m - 1 );

		this.rgt = new BinTree ( );
		this.rgt._fromArr_ ( pArr, m + 1, pToId );
	},
	fromArr ( pArr ) {

		return this._fromArr_ ( pArr, 0, pArr.length - 1 );
	}
}
