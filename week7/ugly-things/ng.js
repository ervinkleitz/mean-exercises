var app = angular.module( 'myApp', [] );

app.controller( 'myController', function( $scope ){
	$scope.uglyThings = [];
	$scope.uglyThing = {};
	$scope.submit = function(){
		$scope.uglyThings.push($scope.uglyThing);
		$scope.uglyThing = {};
		}
});

