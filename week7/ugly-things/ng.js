var app = angular.module( 'myApp', [] );

app.controller( 'myController', function( $scope ){
	$scope.uglyThings = [{
		imgUrl: 'http://1000uglypeople.com/wp-content/uploads/Yellow-Teeth-Ugly-Man-With-Bad-Teeth.jpg',
		title: 'Ugly',
		description: 'Yellow Teeth'
	}];
	$scope.submit = function(){
	$scope.uglyThing = {
		imgUrl: document.getElementById('img_url').value,
		title: document.getElementById('title').value,
		description: document.getElementById('description').value
	};
	$scope.uglyThings.push($scope.uglyThing);
}
});

