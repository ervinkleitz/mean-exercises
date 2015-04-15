var makeMatrix = function ( n ) {
// n is the size of Matrix (height and width)
	var array = [];
	// Function to create random number from 0-9
	function makeRandomNumber() {
		return Math.floor( Math.random() * 9 );
	}

	for (var i = 0; i < n; i++) {
		
		var arrayLine = [];

		for (var j = 0; j < n ; j++) {
		
			line.push( makeRandomNumber() );

		}

		array.push(arrayLine);

	}

	return array;

};