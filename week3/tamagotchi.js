var ask = require('readline-sync');
console.log('--------------------------');

var eggType = Math.ceil( Math.random() * 5 );

switch ( eggType ) {

	case 1: eggType = 'Hairy Egg'; break;
	case 2: eggType = 'Moldy Egg'; break;
	case 3: eggType = 'Egg with eyeballs'; break;
	case 4: eggType = 'Snoring Egg'; break;
	case 5: eggType = 'Egg with Teeth'; break;

}

console.log( '\nProfessor Tree gave you a/an ' + eggType + '.  Look! It\'s hatching!' );
var tamaName = ask.question( 'Your ' + eggType + ' hatched into a squirrel!\nGive your squirrel a name: ' );

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

var keepGoing = setInterval(everyFiveSeconds, 5000);

function everyFiveSeconds() {
	if ( monster.hp > 0 ) {
		console.log( '\n' + tamaName + monster['emotions'][Math.floor(Math.random() * 3)] );
		console.log( '\nWhat do you want to do?' );
		var action = ask.question( 'Choose one (a - Feed him, b - pet him, c - kick him in the shin): ' ).toLowerCase().trim();

		if ( action === 'a' ) { 
			monster.feed(); 
			console.log( 'You chose to feed ' + tamaName + '.' );
			console.log( tamaName + monster.emotions[3] ); 
		} else if ( action === 'b' ) { 
			console.log( 'You chose to pet ' + tamaName + '.' );
			console.log( tamaName + monster.emotions[2] ); 
			monster.starve();
		} else { 
			console.log( 'You chose to kick ' + tamaName + ' in the shin.' );
			console.log( tamaName + monster.emotions[1] ); 
			monster.starve();
		}

		console.log( '\n' + tamaName + ' is at ' + monster.hp + '% heath.');

	} else { 
		clearInterval(keepGoing); 
		monster.die();
	}
}
