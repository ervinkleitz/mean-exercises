function quadraticEquation (a, b, c) {

	var xValues = [];

	var valueOne = ( -b + Math.sqrt( Math.pow(b,2) - ( 4 * a * c ) ) ) / ( 2 * a);
	var valueTwo = ( -b - Math.sqrt( Math.pow(b,2) - ( 4 * a * c ) ) ) / ( 2 * a);
	
	xValues.push( valueOne );
	xValues.push( valueTwo );

	return xValues;

}