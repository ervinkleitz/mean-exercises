var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var bounty = [{
	firstname: "Obi wan",
	lastname: "Kenobi",
	living: false,
	bounty: 0,
	type: "Jedi"
	},
	{
	firstname: "Anakin",
	lastname: "Skywalker",
	living: true,
	bounty: 5000000,
	type: "Sith"
	}
	];

var sendToHtml = '';

app.post('/bounty', function(request, response){
	bounty.push(request.body);
	response.send('Data Saved');
});

app.get('/bounty', function(request, response){
	var sendToHtml = '';
	sendToHtml += '<h1 style="text-align: center; color: red; font-family: sans-serif;">Wanted!</h1>';
	for ( var numberOfBounties = 0; numberOfBounties < bounty.length ; numberOfBounties++ ){
		sendToHtml += '<hr style="width: 10em;"><p style="text-align: center; color: lightblue; font-family: sans-serif;">Bounty number: ';
		sendToHtml += ( numberOfBounties + 1 ) + '</p><hr style="width: 10em;"><ul style="list-style-type: none">';
		for ( var key in bounty[numberOfBounties] ) {
			sendToHtml += '<li style="text-align: center; color: grey; text-transform: capitalize;">' + key + ': <b>' 
			sendToHtml += bounty[numberOfBounties][key] + '</b></li>';
		}
		sendToHtml += '</ul>';
	}
	
	response.send(sendToHtml);
});

app.listen(5000);
console.log('I feel the force on port 5000.');

