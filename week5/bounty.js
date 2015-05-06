var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid');

app.use(bodyParser.json());

var bounty = [{
	id: "0990saog900912ljlknds",
	firstname: "Obi wan",
	lastname: "Kenobi",
	living: false,
	bounty: 0,
	type: "Jedi"
	},
	{
	id: "8923572895792asdg8945",
	firstname: "Anakin",
	lastname: "Skywalker",
	living: true,
	bounty: 5000000,
	type: "Sith"
	}
	];

app.post('/bounty', function(request, response){
	request.body.id = uuid.v1();
	bounty.push(request.body);
	response.send('Data Saved');
});

app.get('/bounty/:bountyId', function(request, response) {
	var sendToHtml = '';
    for ( var numberOfBounties = 0; numberOfBounties < bounty.length; numberOfBounties++ ){
		
        if (bounty[numberOfBounties]['id'] === request.params.bountyId) {
			
		sendToHtml += '<img src="http://web.redding.com/images/misc/wanted-responsive.png" style="display: block; margin: 0 auto;';
		sendToHtml += 'height: 5em;"><h1 style="text-align: center;">Bounty Found!</h1>';
		sendToHtml += '<body style="font-family: sans-serif;"><div id="post-form">';
		sendToHtml += '<hr style="width: 15em;"><p style="text-align: center; color: lightblue;">Bounty number: ';
		sendToHtml += ( numberOfBounties + 1 ) + '</p><hr style="width: 15em;">';
		//Bounty (listed)
		sendToHtml += '<ul style="list-style-position: inside; width: 13em; display: block; margin: 0 auto;">';
		sendToHtml += '<li>ID: ' + bounty[numberOfBounties]['id'] + '</li>';
		sendToHtml += '<li>First Name: <b>' + bounty[numberOfBounties]['firstname'] + '</b></li>';
		sendToHtml += '<li>Last Name: <b>' + bounty[numberOfBounties]['lastname'] + '</b></li>';
		sendToHtml += '<li>Living: <b>' + bounty[numberOfBounties]['living'] + '</b></li>';
		sendToHtml += '<li>Bounty: <b>' + bounty[numberOfBounties]['bounty'] + '</b></li>';
		sendToHtml += '<li>Type: <b>' + bounty[numberOfBounties]['type'] + '</b></li>';
		sendToHtml += '</ul></div></body>';
		response.send(sendToHtml);   
			}
		sendToHtml += '<img src="http://web.redding.com/images/misc/wanted-responsive.png" style="display: block; margin: 0 auto;';
		sendToHtml += 'height: 5em;"><body style="font-family: sans-serif;">';
		sendToHtml += '<h1 style="text-align: center;">Bounty ID ' +  request.params.bountyId;
		sendToHtml += 'Not Found!</h1></body>';
		}

    response.send(sendToHtml);
});

app.get('/bounty/', function(request, response){
	
	var sendToHtml = '';
	
	//Wanted img
	sendToHtml += '<img src="http://web.redding.com/images/misc/wanted-responsive.png" style="display: block; margin: 0 auto;';
	sendToHtml += 'height: 5em;"><button style="background-color: black; color: white; display: block; margin: 0 auto;"';
	sendToHtml += 'id="add">Add Bounty</button>';
	
	//Loops through all the Bounties
	for ( var numberOfBounties = 0; numberOfBounties < bounty.length ; numberOfBounties++ ){
		
		sendToHtml += '<body style="font-family: sans-serif;"><div id="post-form">';
		sendToHtml += '<hr style="width: 15em;"><p style="text-align: center; color: lightblue;">Bounty number: ';
		sendToHtml += ( numberOfBounties + 1 ) + '</p><hr style="width: 15em;">';
		//Bounty (listed)
		sendToHtml += '<ul style="list-style-position: inside; width: 13em; display: block; margin: 0 auto;">';
		sendToHtml += '<li>ID: ' + bounty[numberOfBounties]['id'] + '</li>';
		sendToHtml += '<li>First Name: <b>' + bounty[numberOfBounties]['firstname'] + '</b></li>';
		sendToHtml += '<li>Last Name: <b>' + bounty[numberOfBounties]['lastname'] + '</b></li>';
		sendToHtml += '<li>Living: <b>' + bounty[numberOfBounties]['living'] + '</b></li>';
		sendToHtml += '<li>Bounty: <b>' + bounty[numberOfBounties]['bounty'] + '</b></li>';
		sendToHtml += '<li>Type: <b>' + bounty[numberOfBounties]['type'] + '</b></li>';
		sendToHtml += '</ul></div></body>';
		
	}//End of loop
	
	response.send(sendToHtml);
});

app.put('/bounty', function(request, response){
	var data = request.body;
	for ( var bountyIndex = 0; bountyIndex < bounty.length; bountyIndex++ ){
		var currentBounty = bounty[bountyIndex];
		if ( currentBounty['bountyId'] === data.bountyId ) {
			for (var key in currentBounty){
				currentBounty[key] = data[key];
				response.send(currentBounty);
			}
		}
	}	
});

app.delete('/bounty/:bountyId', function(request, response) {
	var bountyToBeDeleted = request.params.bountyId;
	for ( var numberOfBounties = 0; numberOfBounties < bounty.length; numberOfBounties++ ) {
		var currentBounty = bounty[numberOfBounties];
		if ( bounty[numberOfBounties]['id'] === bountyToBeDeleted ){
			bounty.splice( numberOfBounties, 1 );
			response.send(currentBounty + ' has been eliminated!');
		} else {
			response.send('Elimination unsuccessful');
		}
		break;
	}
});

app.listen(5000);
console.log('The force is strong on port 5000.');

