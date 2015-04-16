var myObject = {
	name: 'Vin',
	city: 'San Francisco'
};

var newObject = {};

var copyObject = function ( object, variable ) {
	for ( var key in object ) {
		variable[key] = variable[key];
	}
};

copyObject(myObject,newObject);

console.log(newObject);