var ask = require('readline-sync');

var inputString = ask.question( 'Please input string: ' );
var inputChar = ask.question( 'Please type what character to search for: ' );

var testing = true;
var found = 0;

// Tests if character is present in inputString
while (testing) {

	for (var i = 0; i < inputString.length; i++) {

		if ( inputString[i] === inputChar) {
			console.log( 'Found it at index ' + i );
			found ++;
			break;
		} 

	}

	break;

}

console.log ( 'Found your character ' + found + ' times.' )