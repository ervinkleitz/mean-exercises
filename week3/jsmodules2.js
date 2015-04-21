var getMonth = function( index ) {
	
	var monthArray = 
	['January','February','March','April','May','June','July','August','September','October','November','December'];

	return monthArray[index - 1];

};

module.exports = getMonth;