var printMatrix = function ( dimensions ) {

	var matrix = [];

	for ( var xCoordinates = 0; xCoordinates < dimensions; xCoordinates++ ){
		var line = [];
		// Traversing rows
		for (var yCoordinates = 0; yCoordinates < dimensions; yCoordinates++) {
			line.push( [xCoordinates, yCoordinates] );
		}
		
		console.log(line);
	}
	
};