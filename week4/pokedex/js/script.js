$(document).ready(function(){ 

    $.ajax('http://pokeapi.co/api/v1/pokedex/1/', {
      method: 'GET'
    })
    .done( populateDropdown )
    .fail( function () {
      console.log('fail');
    });
    
    $.ajax('http://pokeapi.co/api/v1/pokemon/1/', {
      method: 'GET'
    })
    .done(populateFirstPokemon)
    .fail( function () {
      console.log('fail');
    });
    
    var pokemonName, firstPokemon, pokemonFirstLetter;
    
    //Function to populate dropdown list
    function populateDropdown ( data ){
        console.log(data);
        var pokemonList = '';
        
        for ( var index = 0; index < data[ 'pokemon' ].length; index++ ){
            pokemonName = data[ 'pokemon' ][index][ 'name' ];
            pokemonNameFirstLetter = pokemonName[0].toUpperCase();
            pokemonName = pokemonNameFirstLetter + pokemonName.substr(1);
            pokemonList += '<li><a href="#">' + pokemonName + '</a></li>';
        }
        
        //Populates dropdown list and first pokemon
        document.getElementById( 'pokemon-dropdown' ).innerHTML = firstPokemon + '  <span class="caret"></span>';
        document.getElementById( 'pokemon-list' ).innerHTML = pokemonList;
    }
    
    function populateFirstPokemon ( data ) {
        pokemonName = data['name'];
        document.getElementById( 'name' ).innerHTML = 'Name: ' + pokemonName + '<br>';
        document.getElementById( 'pokemon-dropdown' ).innerHTML = pokemonName + ' <span class="caret"></span>';
    }


});