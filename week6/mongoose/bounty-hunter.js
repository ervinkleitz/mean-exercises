var mongoose = require('mongoose');
mongoose.connect('localhost', 'bounty-hunter');

var Schema = mongoose.Schema;

var bountySchema = new Schema({
	firstName: String,
	lastName: String,
	living: Boolean,
	bountyAmt: Number,
	type: String
});

var Bounty = mongoose.model( 'Bounty', bountySchema );


//Deleting bounty
//****************************
// Bounty.findOne({firstName: 'John'}, function(error,data){
// 	data.remove( function(error, data){
// 		console.log(data.firstName + ' is removed.');
// 	});
// });

//Updating bounty
//****************************
// Bounty.findOne({firstName: 'Darth'}, function(error,data){
// 	data.bountyAmt--;
// 	data.save(function(error, data){
// 		console.log(data);
// 	});
// });

//Finding bounty (one instance)
//*****************************
// Bounty.findOne({firstName: 'Darth'}, function(error, data){
// 	console.log(data);
// });

//Saving new bouty
//*****************************
// var newBounty = new Bounty({
// 	firstName: 'John',
// 	lastName: 'Wayne',
// 	living: false,
// 	bountyAmt: 100,
// 	type: 'Sith'
// });
// newBounty.save();