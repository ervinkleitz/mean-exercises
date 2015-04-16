var sampleObject = {
	name: 'Vin',
	age: 10,
	city: 'San Francisco'
};

var convertIndex = function( object ){
	var newIndex = 1;
	for ( var property in object ) {
		object[newIndex] = object[property];
		delete object[property];
		newIndex++;
	}
};

convertIndex( sampleObject );

for (var newProperty in sampleObject) {
	console.log(newProperty + ': ' + sampleObject[newProperty]);
}