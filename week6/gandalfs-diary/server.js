var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var model = require('.model.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.get('/save', function(req,res){
	journalEntry.findOne({}, function(err,data){
		response.send(data);
	});
});

app.post('/save', function(req,res){
	journalEntry.findOne({}, function(err,data){
		data.entry = request.body.clientEntry;
		data.save();
		response.send();
	});
});

app.listen(PORT);
console.log('Listening on port ' + PORT);