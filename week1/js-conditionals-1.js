var ask = require('readline-sync');

var firstNum = ask.question( 'Enter first number: ' );
var secondNum = ask.question( 'Enter second number: ' );


//Prints out the lower number
if ( firstNum < secondNum ) {
	console.log( firstNum + ' is the lower number.' );
} else {
	console.log( secondNUm + ' is the lower number.' );
}