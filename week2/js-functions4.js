function clipper ( string ) {
	if ( string.length <= 20 ) {
		return string + string;
	} else {
		var stringHalf = [];
		for ( i = 0; i <= Math.round(string.length/2); i++ ) {
			stringHalf.push(string[i]);			
		}
		return stringHalf.join('');
	}
}