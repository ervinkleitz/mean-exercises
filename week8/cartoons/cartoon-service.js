app.service('cartoonService', function(){
	
	var cartoons = [];
	
	this.pushCartoon = function( cartoonObj ){
		cartoons.push(cartoonObj);
		console.log(cartoons);
		return cartoons;
	};
	
	this.pullCartoon = function(){
		return cartoons;
	};
	
});