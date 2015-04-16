var sampleTournament =[ 
  {
    'Aaron': 3,
    'Jaquelin': 4,
    'Denise': 7.6,
    'Blake:': 3.01,
    'O\'Shaughnessy': undefined,
    'Timothy': 11
  }];

// Function returns the second placer in an array of objects
// while removing undefined values
var takeSecondPlace = function ( array ) {

	var newArray = [];
	// Loop to iterate through the array
	for ( var name = 0; name < tournament.length; name++ ){
	  var newLine = [];
	  // Loop to iterate through each object in array
	  for ( var key in tournament[name] ){
	  	// Condition to take only values that are not undefined
	    if( tournament[name][key] != undefined ) {

	    newArray.push( [key, tournament[name][key]] );
	    console.log( tournament[name][key] );
	  }

	 }
	  
	}
	// Sorts values in descending order
	newArray.sort(function(a, b) {return b[1] - a[1];});

	return newArray[1];

}

