var makeMatrix = function ( n ) {
// n is the size of Matrix (height and width)
	var array = [];
	// Function to create random number from 0-9
	function makeRandomNumber() {
		return Math.floor( Math.random() * 9 );
	}

	for (var xCoordinates = 0; xCoordinates < n; xCoordinates++) {
		var arrayLine = [];

		for (var yCoordinates = 0; yCoordinates < n ; yCoordinates++) {
			line.push( makeRandomNumber() );

		}

		array.push(arrayLine);

	}

	return array;

};