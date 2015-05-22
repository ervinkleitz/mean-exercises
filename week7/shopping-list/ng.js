var app = angular.module('myApp', []);

app.controller('ctrl', function($scope){

	$scope.shoppingList = [];

	$scope.addItem = function(){
		$scope.shoppingList.push($scope.myItem);
		$scope.myItem = '';
	}

	$scope.delete = function(item){
		var index = $scope.shoppingList.indexOf( item );
		$scope.shoppingList.splice( index, 1 );
	}

});