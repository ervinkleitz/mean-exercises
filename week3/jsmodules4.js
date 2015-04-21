var simpleMath = {
	getAverage: function( array ) {
		var average = 0;

		for ( var index = 0; index < array.length; index++ ) {
			average += array[index];
		}

		return average/array.length;
	},

	getMatrixSum: function( firstMatrix, secondMatrix ) {
		var matrix = [];

		for ( var x = 0; x < firstMatrix.length; x++ ) {
			var row = [];

			for ( var y = 0; y < firstMatrix.length; y++ ) {
				row.push(parseInt( firstMatrix[x][y] + secondMatrix[x][y] ) );
			}

			matrix.push(row);
		}
		return matrix;
	},
	getQuadraticFactors: function(a, b, c) {
		var xValues = [];

		var valueOne = ( -b + Math.sqrt( Math.pow(b,2) - ( 4 * a * c ) ) ) / ( 2 * a);
		var valueTwo = ( -b - Math.sqrt( Math.pow(b,2) - ( 4 * a * c ) ) ) / ( 2 * a);
		
		xValues.push( valueOne );
		xValues.push( valueTwo );

		return xValues;
	},
	getFactorial: function rFact(num) {
	    if (num === 0)
	      { return 1; }
	    else
	      { return num * rFact( num - 1 ); }
	}
};

module.exports = simpleMath;