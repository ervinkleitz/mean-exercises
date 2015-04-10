var ask = require('readline-sync');

var check = true;

// Checks if the user enters 42
while (check) {

	var input = ask.question( 'Please enter a number: ' );

	if (input === '42') {
		break;
	}

}