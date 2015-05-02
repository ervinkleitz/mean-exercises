$(document).ready(function(){ 
    
    var pokemonName, pokemonData, pokemonType, pokemonMoves, masterPokemonList;
    var pokemonList = '';
    
    $.ajax('http://pokeapi.co/api/v1/pokedex/1/', {
      method: 'GET'
    })
    .done( populateDropdown )
    .fail( function () {
      console.log('Populate Dropdown list fail');
    });
    
    populatePokemon(35);
    
//    document.getElementById( 'pokemon-list' ).addEventListener( 'change', populatePokemon(17) );
    
    //Function to populate dropdown list
    function populateDropdown ( data ){
        masterPokemonList = data;
        for ( var index = 0; index < data[ 'pokemon' ].length; index++ ){
            pokemonName = data[ 'pokemon' ][index][ 'name' ];
            //Uses Pokemon's name as target for href
            pokemonList += '<li><a href="#" value="' + pokemonName+'">' + uppercaseFirstLetter(pokemonName) + '</a></li>';
        }
        
        //Populates dropdown list and first pokemon
        document.getElementById( 'pokemon-list' ).innerHTML = pokemonList;
    }
    
    function populatePokemon( pokedexId ) {
        
        $.ajax('http://pokeapi.co/api/v1/pokemon/' + pokedexId + '/', {
          method: 'GET'
        })
        .done( populatePokemonData )
        .fail( function () {
          console.log('Default Pokemon fail');
        });
    
        function populatePokemonData ( data ) {

            $.ajax('http://pokeapi.co/api/v1/sprite/'+ pokedexId + '/', {
              method: 'GET'
            })
            .done( populateDefaultPic )
            .fail( function () {
              console.log('Default Pic fail');
            });

            pokemonName = data['name'];
            pokemonType = [];
            pokemonMoves = [];
            //Loop to get the Type(s) for Pokemon
            for ( var numOfTypes = 0; numOfTypes < data['types'].length; numOfTypes++ ) {
                //Gets Pokemon type from data retrieved and capitalizes the first letter
                pokemonType.push( uppercaseFirstLetter(data['types'][numOfTypes]['name']) );
            }

            //Loop to get the Moves learned from Leveling up
            for ( var numMoves = 0; numMoves < data['moves'].length; numMoves++ ) {
                if ( data['moves'][numMoves]['learn_type'] === 'level up' ) 
                    pokemonMoves.push( data['moves'][numMoves]['name'] );
            }

            //Lists down Pokemon data in the DOM
            pokemonData = '<h7>Name: ' + data['name'] + '<br></h7>';
            pokemonData += '<h7>Type(s): ' + pokemonType.join(', ') + '<br></h7>';
            pokemonData += '<h7>HP: ' + data['hp'] + '<br></h7>';
            pokemonData += '<h7>Moves : ' + pokemonMoves.join(', ') + '<br></h7>';
            document.getElementById( 'pokemon-data-area' ).innerHTML = pokemonData;
            document.getElementById( 'pokemon-dropdown' ).innerHTML = pokemonName + ' <span class="caret"></span>';

        }
        
    }
    
    //Sets the default image
    function populateDefaultPic ( data ) {
        document.getElementById( 'pokemon-pic-area' ).src = 'http://pokeapi.co' + data[ 'image' ];
    }
    //Function to capitalize first letter of a string
    function uppercaseFirstLetter( string ) {
        return string[0].toUpperCase() + string.substr(1);
    }
    
});