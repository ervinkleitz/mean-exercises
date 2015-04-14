var fibonacci = function ( n ) {
	
	var firstF = 0;
	var secondF = 1;
	var sum = 0;
	var sequence = [];

	sequence.push(firshF);
	sequence.push(secondF);

	//Creates Fibonacci sequence to n
	for ( i = 2; i <= n; i++ ) {
		var nextF = parseFloat( sequence[i-2] + sequence[i-1] );
		sequence.push(nextF);
	}

	console.log( sequence.join(' ') );

	for ( j = 0; j < sequence.length; j++ ) {
		sum = sum + sequence[j];
	}

	console.log( 'The sum is ' + sum );
}