// Given that string is a String
var frequent = function ( string ) {

	var newString = [];
	// Loops through the string for duplicate characters and counts them
	for ( var i = 0; i < string.length; i++ ) {
		
		var occurences = 0;

		for ( var j = 0; j < string.length; j++ ) {

			if ( string[i] === string[j] ) {
				occurences++;
			}
		}

		newString.push( occurences );

	}

	var index =  newString.indexOf( Math.max( parseInt( newString.join() ) ) );
	return string[index];

};

