var ask = require('readline-sync');

var candidates = [ 'John Johnson', 'Rey Reynolds', 'Simon Simons' ];

var choice = ask.question( 'Please choose among the three candidates: \n' + candidates.join(', ') + '\n');