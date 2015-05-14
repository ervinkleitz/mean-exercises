var mongoose = require('mongoose');
mongoose.connect('localhost', 'mydb');

var Schema = mongoose.Schema; //mongoose has a property called Schema

var friendSchema = new Schema({
	name: String,
	age: Number,
	interests: [String],
	friends: [String]
});

var Friend = mongoose.model( 'Friend', friendSchema );

Friend.findOne({name: 'David'}, function(err, friend){
	friend.age--;
	friend.save(function(err,data){
		console.log(data);
	})
});

// var newFriend = new Friend({
// 	name: 'David',
// 	age: 19,
// 	interests: ['unicorn riding', 'bounty hunting']
// });

// newFriend.save();//save is a method for every mongoose model