var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var bounty = [{
	id: "0",
	firstname: "Obi wan",
	lastname: "Kenobi",
	living: false,
	bounty: 0,
	type: "Jedi"
	},
	{
	id: "1",
	firstname: "Anakin",
	lastname: "Skywalker",
	living: true,
	bounty: 5000000,
	type: "Sith"
	}
	];

app.post('/bounty', function(request, response){
	bounty.push(request.body);
	response.send('Data Saved');
});

app.get('/bounty', function(request, response){
	var sendToHtml = '';
	sendToHtml += '<img src="http://web.redding.com/images/misc/wanted-responsive.png" style="display: block; margin: 0 auto;';
	sendToHtml += 'height: 5em;">';
	//Loops through all the Bounties
	for ( var numberOfBounties = 0; numberOfBounties < bounty.length ; numberOfBounties++ ){
		sendToHtml += '<hr style="width: 10em;"><p style="text-align: center; color: lightblue; font-family: sans-serif;">Bounty number: ';
		sendToHtml += ( numberOfBounties + 1 ) + '</p><hr style="width: 10em;">';
		//Bounty (listed)
		sendToHtml += '<ul style="list-style-position:inside;width: 13em; display:block;margin: 0 auto;">';
		sendToHtml += '<li style="font-family:sans-serif;">First Name: <b>' + bounty[numberOfBounties]['firstname'] + '</b></li>';
		sendToHtml += '<li style="font-family:sans-serif;">Last Name: <b>' + bounty[numberOfBounties]['lastname'] + '</b></li>';
		sendToHtml += '<li style="font-family:sans-serif;">Living: <b>' + bounty[numberOfBounties]['living'] + '</b></li>';
		sendToHtml += '<li style="font-family:sans-serif;">Bounty: <b>' + bounty[numberOfBounties]['bounty'] + '</b></li>';
		sendToHtml += '<li style="font-family:sans-serif;">Type: <b>' + bounty[numberOfBounties]['type'] + '</b></li>';
		sendToHtml += '</ul>';
	}
	
	response.send(sendToHtml);
});

app.listen(5000);
console.log('The force is strong on port 5000.');

