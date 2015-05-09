
//***** Declarations *****//
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var uuid = require( 'uuid' );
var gameArray = [];
var createNewGame = true;
var gameIndex = 0;
//***** Declarations *****//

app.use(express.static(__dirname + '/www')); //Don't worry about this!

app.use( bodyParser.json() );

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

	if ( createNewGame ) {
		gameArray[ gameArray.length - 1 ].startGame();
	}
}

function turn ( req, res ) {

	var data = req.body;
	var gameObject = getGame( data[ 'game_id' ] );
	var roundCompleted = gameObject.setPlayerTurn( data[ 'id' ], data[ 'move' ], res );

	if ( roundCompleted === true ) {
		scoring( gameObject );
	}

}

//Function that gets the game object
function getGame ( gameId ) {

	for ( var i = 0; i < gameArray.length; i++ ) {
		if ( gameId === gameArray[ i ][ 'id' ] ) {
			return gameArray[ i ];
		}
	}
}

//game object class constructor
function game () {

	this.numPlayerTurns = 0;
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

		var listOfPlayers = [];
		var responseData = {};

		for ( var playerIndex = 0; playerIndex < this.players.length; playerIndex++ ) {
			listOfPlayers.push( this.players[ playerIndex ][ 'id' ] );
		}

		responseData[ 'game_id' ] = this.id;
		responseData[ 'players' ] = listOfPlayers;

		for ( var playerIdIndex = 0; playerIdIndex < this.players.length; playerIdIndex++ ){
			this.players[ playerIdIndex ][ 'response' ].send( responseData );
		}

	};//end of startGame

	this.setPlayerTurn = function( playerId, move, res ) {
		var round = false; //when players have all made a move
		for ( var j = 0; j < this.players.length; j++ ) {

			var person = this.players[ j ];

			if ( person[ 'id' ] === playerId ) {
				person[ 'move' ] = move;
				person[ 'response' ] = res;
				this.numPlayerTurns++;

				if ( this.numPlayerTurns === this.players.length ){
					round = true;
					this.numPlayerTurns = 0;
				}

				break;
			}

		} //end of for loop

		return round;

	};//end of setPlayerTurn
}


function player ( id, response ) {

	this.id = id;
	this.response = response;
	this.points = 0;
	this.move = '';

}

function scoring ( gameObject ) {



}

function resolveRPSChoices( user1, user2 ) {

	var choices = [ 'paper', 'rock', 'scissors' ];
    var choice1Index = choices.indexOf( user1.move );
    var choice2Index = choices.indexOf( user2.move );
    
    if ( Math.abs ( choice1Index - choice2Index ) === choices.length - 1) {
        return choice1Index > choice2Index ? user1.name : user2.name;
    }
    else if(choice1Index === choice2Index) {
        return "Tie";
    } else {
        return choice1Index > choice2Index ? user2.name : user1.name;
    }
}

//Listening on port 4242
app.listen(4242);
console.log( 'The meaning of LIFE!' );