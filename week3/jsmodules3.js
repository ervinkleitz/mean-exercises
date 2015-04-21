var newObject = {
	reverse: function( string ) {
		return string.split('').reverse().join('');
	},
	removeLowerCase: function( string ) {
		return string.replace(/[^a-z]/g, '');
	},
	removeConsecutive: function( string ) {
		var newString = [];
		for ( var index = 0; index < string.length; ) {
			if ( string[index] === string[index + 1] ) {
				newString.push( string[index] );
				index += 2;
			} else { 
				newString.push( string[index] )
				index++;
			}
		}
		return newString.join('');
	},
	isPalindrome: function( string ) {
		var isPalindromeString = string.replace(/ /g,'').trim();

		if ( isPalindromeString.length % 2 != 0 ) {

			var center = ( isPalindromeString.length - 1 ) / 2; 

			for ( var i = 1; i <= center; ) {
				if ( isPalindromeString.charAt( center + 1 ) === isPalindromeString.charAt( center - 1 ) ) {
					i++;
				} else {
					return false;
				}
			}
			return true;

		} else {
			return false;
		}
	}
};

module.exports = newObject;