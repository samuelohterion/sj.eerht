function V3( x, y, z ) {

	if ( x instanceof V3 ) {

		this.x = x.x;
		this.y = x.y;
		this.z = x.z;
		
	} else {
	
		if( isNaN( x ) ) {
	
			this.x = 0.;	
			this.y = 0.;	
			this.z = 0.;
		}
		else { 
	
			this.x = x;
			this.y = y;
			this.z = z;
		}
	}	

	this.set = function ( v3 ) {

		this.x = v3.x;
		this.y = v3.y;
		this.z = v3.z;
			
		return this;
	} 
	
	this.add = function ( v3 ) {
	
		return new V3( this.x + v3.x, this.y + v3.y, this.z + v3.z );
	}

	this.sub = function ( v3 ) {
	
		return new V3( this.x - v3.x, this.y - v3.y, this.z - v3.z );
	}
	
	this.mul = function ( scalar ) {
	
		return new V3( this.x * scalar, this.y * scalar, this.z * scalar );
	}
	
	this.div = function ( scalar ) {
	
		return new V3( this.x / scalar, this.y / scalar, this.z / scalar );
	}
	
	this.dot = function ( v3 ) {
		
		return this.x * v3.x + this.y * v3.y + this.z * v3.z;
	}
}