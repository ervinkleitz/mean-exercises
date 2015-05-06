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
	request.body.id = bounty.length + 1;
	bounty.push(request.body);
	response.send('Data Saved');
});

app.get('/bounty', function(request, response){
	var sendToHtml = '';
	
	
	//Wanted img
	sendToHtml += '<img src="http://web.redding.com/images/misc/wanted-responsive.png" style="display: block; margin: 0 auto;';
	sendToHtml += 'height: 5em;"><button style="background-color: black; color: white; display: block; margin: 0 auto;"';
	sendToHtml += 'id="add">Add Bounty</button>';
	//Loops through all the Bounties
	for ( var numberOfBounties = 0; numberOfBounties < bounty.length ; numberOfBounties++ ){
		sendToHtml += '<body style="font-family: sans-serif; background-color: lightred;"><div id="post-form">';
		sendToHtml += '<hr style="width: 10em;"><p style="text-align: center; color: lightblue;">Bounty number: ';
		sendToHtml += ( numberOfBounties + 1 ) + '</p><hr style="width: 10em;">';
		//Bounty (listed)
		sendToHtml += '<ul style="list-style-position: inside; width: 13em; display: block; margin: 0 auto;">';
		sendToHtml += '<li>First Name: <b>' + bounty[numberOfBounties]['firstname'] + '</b></li>';
		sendToHtml += '<li>Last Name: <b>' + bounty[numberOfBounties]['lastname'] + '</b></li>';
		sendToHtml += '<li>Living: <b>' + bounty[numberOfBounties]['living'] + '</b></li>';
		sendToHtml += '<li>Bounty: <b>' + bounty[numberOfBounties]['bounty'] + '</b></li>';
		sendToHtml += '<li>Type: <b>' + bounty[numberOfBounties]['type'] + '</b></li>';
		sendToHtml += '</ul></div></body>';
	}//End of loop
	
	response.send(sendToHtml);
	document.getElementById( 'add' ).addEventListener( 'click', postToServer );
	
	function postToServer(){
	}
});

app.listen(5000);
console.log('The force is strong on port 5000.');

