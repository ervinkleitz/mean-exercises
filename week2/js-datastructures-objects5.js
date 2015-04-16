var people = [
  {
    name: 'Chewy',
    city: 'Provo',
    age: 10
  },
  {
    name: 'Obiwan',
    city: 'Tucson'
  },
  {
    name: 'Luke',
    city: 'Tatooine'
  },
  {
    name: 'Vader',
    city: 'Provo'
  },
  {
    name: 'Leia',
    city: 'Provo'
  }
];
// Function to return an array of people from Provo
var listProvoPeeps = function ( arrayOfObjects ) {

  var provoPeeps = [];
  // Loop to iterate through array
  for ( var index = 0; index < arrayOfObjects.length; index++ ) {
    // Loop to iterate through each object
    for ( var key in arrayOfObjects[index] ) {
      
      if ( arrayOfObjects[index]['city'] === 'Provo' ) {
        provoPeeps.push( arrayOfObjects[index]['name'] );
        break;
      }

    }
  }

  return provoPeeps;

};

