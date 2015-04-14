// Given that parameter string is a String
function clipper ( string ) {

	if ( string.length <= 20 ) {
		// Returns the string concatenated with itself
		return string + string;

	} else {
		var stringHalf = [];

		for ( i = 0; i <= Math.round(string.length/2); i++ ) {
			stringHalf.push(string[i]);			
		}
		//Returns the joined half of the string
		return stringHalf.join('');

	}

}