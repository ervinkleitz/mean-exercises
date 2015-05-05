var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var bounty = [{
	firstName: "Obi wan",
	lastName: "Kenobi",
	living: true,
	bounty: 5000000,
	type: "jedi"
}];

console.log

app.post('/bounty', function(request, response){
	bounty.push(request.body);
	response.send('Added bounty firstName: ' + request.body.firstName + 'lastName: ' + request.body.lastName + 'Living: ' + request.body.living);
});

app.get('/bounty', function(request, response){
	response.json(bounty);
});

app.listen(5000);
console.log('Server running and listening on port 5000.');