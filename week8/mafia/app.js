var app = angular.module( 'MafiaApp', ['ui.bootstrap'] );

app.controller( 'Ctrl', function( $scope, mafiaService ){

	$scope.hitList = mafiaService.getHitList();
	
});