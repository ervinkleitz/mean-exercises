var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fs = require('fs');

app.use(cookieParser());
app.use(bodyParser.urlencoded());

app.get('/', function ( req, res ) {
	if (req.cookies.email){
		fs.readFile('./thankyou.html', function(error, data){
			data = data.toString();
			res.header('content-type', 'text/html');
			res.send(data.replace('*email*', req.cookies.email));
		});
	} else {
		fs.readFile('./signup.html', function( error, data ){
			data = data.toString();
			res.header( 'content-type', 'text/html' );
			res.send(data);
		});
	}
});

app.post('/mailingList', function (req, res){
	res.cookie('email', req.body.email);
	res.redirect('/');
});

app.listen(8080);