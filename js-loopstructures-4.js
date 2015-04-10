var ask = require('readline-sync');

var array = [];

var lowest = 0;

//Accepts numbers and pushes them into 'array'
for ( var i = 1; i <= 10; i++ ) {
	var input = ask.question( 'Enter a number: ' );
	array.push(input);
}

// Checks each number in 'array' against the others
	for (var k = 0; k < array.length; k++ ) {

		if ( array[k] < array[lowest]) {
			lowest = k;
		}
	}

// Prints out the lowest number
console.log( 'The lowest number in the list is: ' + array[lowest]);