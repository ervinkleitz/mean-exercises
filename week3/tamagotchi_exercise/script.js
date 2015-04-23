var print = '';

print += 'Egg hunter! You found nest of 5 eggs! <br><br>';

print += '(Hairy Egg, Moldy Egg, Egg with eyeballs, Snoring Egg, Egg with Teeth) <br><br>';

var eggType = Math.ceil( Math.random() * 5 );

	switch ( eggType ) {

		case 1: eggType = 'Hairy Egg'; break;
		case 2: eggType = 'Moldy Egg'; break;
		case 3: eggType = 'Egg with eyeballs'; break;
		case 4: eggType = 'Snoring Egg'; break;
		case 5: eggType = 'Egg with Teeth'; break;

	}

print += "For some reason, the " + eggType + " calls out to you and you put it in your bag.";
print += "<br><br>A few days later, your egg hatches!";

$('#namepage').hide();

var start = function() {

		document.getElementById("output").innerHTML = print;

		$('#start').hide();
		$('#namepage').show();

};

var getTamaName = function(){
	var tamaName = document.getElementById('tamaName').value;

};

var monster = {
	hp: 30,
	emotions: [' is seething.', ' ate a cat.', ' is hungry.'],
	reactions: [' broke your arm.',' cuddled your feet.',' licked your toes.'],
	feed: function(){
		this.hp = 100;
	},
	die: function(){
		console.log('\nYour squirrel, ' + tamaName + ' passed away peacefully underneath your pillow.');
	},
	starve: function(){
		this.hp -= 10;
		console.log('\n' + tamaName + ' has died a little.')
	}
};

