var ask = require('readline-sync');

console.log('Hey! Jessie the Jameson here, let me get to know you!\n');

var firstName = ask.question('Okay, Your first name? ');
var lastName = ask.question('Last name? ');

// Changes the first letter of the first and last names to Upper case letters
var newFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1,firstName.length);
var newLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1,lastName.length);

console.log( 'Awesome, ' + firstName.toUpperCase() + '! Now for the fun parts!\n');

var age = ask.question( 'And what is your age (don\'t worry, we won\'t tell)?: ' );

console.log( '\nWhat?! No! You make me feel like the crypt keeper!' );

var randomQ = ask.question( 'Now, if you could change your last name, what would it be? ' );
var newRandomQ = randomQ.charAt(0).toUpperCase() + randomQ.slice(1,randomQ.length);

console.log( '\nAlright, ' + age + ' year old ' + newFirstName + ' ' + newLastName + '(' + newRandomQ + ')' + '.\n');


var message = ask.question( 'Tell me a little bit more about yourself: ' );

// Checks to see if message is greater than 20 characters
if (message.length > 20) {
	
	var newMessage = message.slice( Math.round(message.length / 2), message.length );
	console.log( 'Your bio was too long, ' + message.length + ' to be exact. This was your last half: \n' + newMessage );

}

var input = ask.question( 'Would you like to edit this? Y or N: ' ).toLowerCase();

if (input == 'y') {

	var newIndex = ask.question( 'From what index would you want your message to start at [0 to ' + message.length +']' );
	
	console.log( '\nHere is your new bio: ' + message.slice(newIndex, message.length) );
}