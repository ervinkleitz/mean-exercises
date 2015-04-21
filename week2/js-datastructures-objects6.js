var Person = function ( name, age, friends ) {
	this.name = name;
	this.age = age;
	this.friends = friends;
};
// Method to add one year to birthday
Person.prototype.birthday = function () {
	this.age++;
};
// Method to add another friend to Person
Person.prototype.addFriend = function ( friend ) {
	this.friends[this.friends.length] = friend;
	this.friends;
};
// Five Person instances
var Mike = new Person( 'Mike', 11, ['Mark', 'John']);
var Vin = new Person( 'Vin', 10, ['Sean', 'Chris']);
var Catherine = new Person( 'Catherine', 12, ['Zeta', 'Jones']);
var May = new Person( 'May', 100, ['June', 'July']);
var Robert = new Person( 'Robert', 20, ['Downey', 'Junior']);
// Putting all the Person instances in an array
var people = [ Mike, Vin, Catherine, May, Robert ];
// Looping through the array to call the birthday and addFriend method
// to each Person element
for ( var index = 0; index < people.length; index ++) {
	people[index].birthday();
	people[index].addFriend( 'Casper' );
}