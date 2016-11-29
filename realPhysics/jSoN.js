function JsOn ( pData ) {

}

JsOn.prototype = {

	constructor : JsOn,
	print       : function ( pData, pAddr ) {
	},
	Addr        : function ( ) {
		
		this.id = [ 0 ];
		this.sz = 0;
	},
	Tree        : function ( ) {
		
		this.val = '';
		this.nxt = [ ];
	}		
}

JsOn.Tree.prototype = {

	constructor : JsOn.prototype.Tree;
}
