var app = angular.module( 'myApp', [] );

app.controller( 'sumController', function( $scope ){
	
	$scope.getSum = function(){

		var numOne = parseInt(document.getElementById( 'num_one' ).value),
			numTwo = parseInt(document.getElementById( 'num_two' ).value),
			sum = numOne + numTwo;

		$scope.sum = sum;
	}
});

app.controller( 'prodController', function( $scope ){
	$scope.getProd = function(){

		var numOne = parseInt(document.getElementById( 'mult_one' ).value),
			numTwo = parseInt(document.getElementById( 'mult_two' ).value),
			product = numOne * numTwo;

		$scope.product = product;
	}
});