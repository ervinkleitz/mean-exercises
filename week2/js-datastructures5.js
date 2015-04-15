var printMatrix = function ( dimensions ) {

	var matrix = [];

	for ( i = 0; i < dimensions; i++ ){
		var line = [];
		// Traversing rows
		for (var j = 0; j < dimensions; j++) {
			line.push([i,j]);
		}
		
		console.log(line);
	}
	
};