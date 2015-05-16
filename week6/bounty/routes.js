var express = require('express');
var Bounty = require('./bounty-model');

var router = express.Router();
module.exports = exports = router;
//get
router.get('/', function(req, res, next){
	Bounty.find({}, function(err, data){
		console.log('Yay!');
		res.json(data);
	});
});
//get specific bounty
router.get('/:id', function(req, res, next){
	Bounty.find({_id: req.params.id}, function(err, data){
		if (err)
			res.error = err;
		next();
		if ( !data ){
			req.error = 'NOT FOUND';
			next();
		} else {
			res.json(data);
		}
	});
});
//add new bounty
router.post('/', function(req, res, next){
	var bounty = new Bounty (req.body);
	bounty.save(function(err, newBounty){
		if (err) {
			res.error = err;
			next();
		}
		res.json(newBounty);
	});
});
//update bounty
router.put('/:id', function( req, res, next ){
	Bounty.findOne({_id: req.body.id}, function( err, bounty ){
		if ( err ){
			res.error = error;
			next();
		}
		if ( !bounty ){
			req.error = 'NOT FOUND';
			next();
		} else {
			for ( var key in req.body ){
				if ( req.body.hasOwnProperty( key ) ){
					bounty[ key ] = req.body[ key ];
				}
			}
			bounty.save( function ( err, savedBounty ){
				res.send( savedBounty );
			});
		}
	});
});
//delete bounty
router.delete('/:id', function ( req, res, next ) {
	Bounty.findOne({_id: req.body.id}, function( err, bounty ){
		if ( err ){
			res.error = error;
			next();
		}
		if ( bounty ){
			bounty.remove( function( err ){
				res.send('Success');
			});
		} else {
			req.error = 'NOT FOUND';
			next();
		}
	});
});








