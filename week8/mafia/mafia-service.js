app.service('mafiaService', function( $http ){
	var bounties = [];
	
	this.getHitList = function(){
		$http.get('http://mean.codingcamp.us:6543/hitlist.json')
			.success( function( data ){
				data.forEach(function(bounty){
					bounties.push(bounty);
				});
		});
		return bounties;
	};
	
	this.removeBounty = function(index){
		bounties.splice(index,1);
	};
	
});