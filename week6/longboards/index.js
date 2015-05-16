var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Longboard = require('./model.js');

app.use(express.static(__dirname + '/frontend'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){

});

pp.listen(8080);