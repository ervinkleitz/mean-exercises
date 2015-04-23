$('#namepage').hide();

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

var start = function() {

		document.getElementById("output").innerHTML = print;
		$('#start').hide();
		$('#namepage').show();

};

