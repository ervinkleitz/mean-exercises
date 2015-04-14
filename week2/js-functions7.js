
var frequent = function ( string ) {

	var newString = [];

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

