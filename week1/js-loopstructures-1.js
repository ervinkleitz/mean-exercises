var ask = require('readline-sync');

var input = ask.question( 'Please enter string: ' );

// Prints out each individual letter in the string
for (var i = 0; i < input.length; i++ ) {
	console.log(input[i]);
}