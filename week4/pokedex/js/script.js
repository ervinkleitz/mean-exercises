$(document).ready(function(){ 
    
    var pokemonName, pokemonData, pokemonType, pokemonMoves, masterPokemonList, dataId, dataIdForSprite;
    var pokemonList = '';
    
    $.ajax('http://pokeapi.co/api/v1/pokedex/1/', {
      method: 'GET'
    })
    .done( populateDropdown )
    .fail( function () {
      console.log('Populate Dropdown list fail');
    });
	
    //Default Pokemon
    populatePokemon('mankey');
	
    //Event listener when clicking pokemon
    $( '#pokemon-list' ).click( function(event) {
        var pokemon = ( event.target.id );
        populatePokemon( pokemon );
    });
        
//************** Functions *****************//
    
    
    //Function to populate dropdown list
    function populateDropdown ( data ){
        masterPokemonList = data;
        for ( var index = 0; index < data[ 'pokemon' ].length; index++ ){
            pokemonName = data[ 'pokemon' ][index][ 'name' ];
            //Uses Pokemon's name as target for href
            pokemonList += '<li><a id="' + pokemonName + '" href="#">' + uppercaseFirstLetter(pokemonName) + '</a></li>';
        }
        //Populates dropdown list and first pokemon
        document.getElementById( 'pokemon-list' ).innerHTML = pokemonList;
    } //End of PopulateDropdown
    
    //Function to Populate info about chosen pokemon
    function populatePokemon( pokemon ) {
        
        $.ajax('http://pokeapi.co/api/v1/pokedex/1/', {
          method: 'GET'
        })
        .done( getMasterPokemonList )
        .fail( function () {
          console.log('Pokedex List fail');
        });
        
        function getMasterPokemonList(data) {
            masterPokemonList = data;
            
            for ( var i = 0; i < masterPokemonList['pokemon'].length; i++ ) {
                if ( masterPokemonList['pokemon'][i]['name'] === pokemon )
                    dataId = masterPokemonList['pokemon'][i]['resource_uri'];        
            }
            //Pokemon ID to be used to pull Images
            //Note: Image IDs are higher from Pokemon IDs by 1
            dataIdForSprite = parseInt( dataId.substring(15, dataId.length-1) ) + 1;
            
            $.ajax('http://pokeapi.co/' + dataId, {
              method: 'GET'
            })
            .done( populatePokemonData )
            .fail( function () {
              console.log('Default Pokemon fail');
            });
        }//End of getMasterPokemonList
        
    }//End of populatePokemon

    //Function to populate the chosen Pokemon's data (abilities, image, etc.)
    function populatePokemonData ( data ) {

        $.ajax('http://pokeapi.co/api/v1/sprite/'+ dataIdForSprite + '/', {
          method: 'GET'
        })
        .done( populatePic )
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

        //Lists down Pokemon data
        pokemonData = '<h7>Name: ' + data['name'] + '<br><br></h7>';
        pokemonData += '<h7>Type(s): ' + pokemonType.join(', ') + '<br><br></h7>';
        pokemonData += '<h7>HP: ' + data['hp'] + '<br><br></h7>';
        pokemonData += '<h7>Moves (via Level up): ' + pokemonMoves.join(', ') + '<br><br></h7>';
        document.getElementById( 'pokemon-data-area' ).innerHTML = pokemonData;
        document.getElementById( 'pokemon-dropdown' ).innerHTML = pokemonName + ' <span class="caret"></span>';

    }//Ernf of populatePokemonData
     
    //Sets the default image
    function populatePic ( data ) {
        document.getElementById( 'pokemon-pic-area' ).src = 'http://pokeapi.co' + data[ 'image' ];
    }
    //Function to capitalize first letter of a string
    function uppercaseFirstLetter( string ) {
        return string[0].toUpperCase() + string.substr(1);
    }

    
});

