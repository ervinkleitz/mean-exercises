var app = angular.module( 'cartoonApp', ['ui.bootstrap'] );

app.controller('myCtrl', function( $scope, manager ){

	$scope.cartoon = {};

	$scope.saveCartoon = function(){
		$scope.cartoons = manager.addCartoon($scope.cartoon);
		$scope.cartoon = {};
	};
});

app.service('manager', function( cartoonService ){
	
	this.addCartoon = function( input ){
		if ( input.title && input.img && input.description ) {
			return cartoonService.pushCartoon(input);
		} else {
			alert('Complete fields');
		}
	};
	
	this.getCartoon = function(){
		return cartoonService.pullCartoon();
	};
	
});