
//***** Declarations *****//
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var uuid = require( 'uuid' );
var gameArray = [];
var createNewGame = true;
var gameIndex = 0;
//***** *****//

app.use(express.static(__dirname + '/www')); //Don't worry about this!

app.use(bodyParser.json());

app.post( '/joingame', joingame );

app.post( '/turn', turn );

//***** Functions *****//
function joingame ( req, res ) {

	var playerId = req.body.id;
	var minNumPlayers = req.body.min_players;

	//Creates a new game and checks if minimum players has been met
	if ( createNewGame ) {
		gameArray.push( new game() );
		createNewGame = gameArray[ gameArray.length - 1 ].addPlayer( playerId, minNumPlayers, res );
	} else {
		createNewGame = gameArray[ gameArray.length - 1 ].addPlayer( playerId, minNumPlayers, res );
	}

	console.log( gameArray );
	// if ( createNewGame ) {

	// }
	res.send( 'added player' );
}

function turn( req, res ){

}
//game object constructor
function game () {

	this.minNum = 2;
	this.id = uuid.v1();
	this.players = [];
	//method that adds a new player containing fields id, turn, and points
	this.addPlayer = function( id, minPlayers, res ) {

		this.players.push( new player( id, res ) );

		if ( minPlayers > this.minNum ) {
			this.minNum = minPlayers;
		}
		if ( this.players.length >= this.minNum || this.players.length === 5 ){
			return true;
		}

		return false;
	};
	this.startGame = function() {

	};

	this.prototype.toString = function (){
		var string = '';
		string += '[' + this.minNum + '\n';
	};
}


function player ( id, response ) {

	this.id = id;
	this.response = response;
	this.turn = '';
	this.points = 0;

}

//Listening on port 4242
app.listen(4242);
console.log( 'The meaning of LIFE!' );