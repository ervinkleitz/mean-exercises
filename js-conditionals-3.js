var ask = require('readline-sync');

var d = new Date();
var n = d.getHours();

if (n > 6 && n < 12) {
	console.log( 'It is about ' + n + '00 hours. Good morning!' );
} else if ( n > 12 && n < 18) {
	console.log( 'It is about ' + n + '00 hours. Good afternoon!' )
} else {
	console.log ( 'It is about ' + n + '00 hours. Good evening!' )
}
