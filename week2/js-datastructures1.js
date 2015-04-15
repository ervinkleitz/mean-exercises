var myArray = [ 1,2,3,4,5 ]

var secondNumber = function( array ) {

	return array[1];
};

secondNumber(myArray);

// A function that iterates over the array and prints it
function printArray ( array ) {

	for ( var i = 0; i < array.length; i++ ) {
		
		console.log( array[i] );

	};

}
// A function that adds all the elements in the array
var getSum = function ( array ) {

	var sum = 0;

	for ( var i = 0; i < array.length; i++ ) {
		
		sum += array[i];

	}

};
// A function that removes the largest number in the array
var removeLargest = function ( array ) {

	var largest = Math.max( array );

	array.splice( indexOf(largest) ,1 );

};
