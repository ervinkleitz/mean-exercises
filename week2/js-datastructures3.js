var reverseString = function ( string ) {
	
	var array = [];

	for ( var i = string.length -1 ; i >= 0; i-- ) {
		
		array.push(string[i]);

	}

	return array.join('');

};
