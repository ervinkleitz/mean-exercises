var ask = require('readline-sync');

var address = {};

var name = ask.question( 'Name: ' );
var street = ask.question( 'Street: ' );
var city = ask.question( 'ZIP: ' );

address.name = name;
address.street = street;
address.city = city;

console.log(address);