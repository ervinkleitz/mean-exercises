var multiplyScalar = function ( n, array ) { 

	for (var index = 0; index < array.length; index++ ) {
		array[index] *= n;
	}

	return array;

}