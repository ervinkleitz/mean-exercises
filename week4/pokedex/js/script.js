$(document).ready(function(){ 

    $.ajax('http://pokeapi.co/api/v1/pokedex/1/', {
      method: 'GET'
    })
    .done(handle_request)
    .fail( function () {
      console.log('fail');
    });

    function handle_request( data ){
        var pokemonList = '';
        var firstPokemon = data[ 'pokemon' ][0][ 'name' ]
        for ( var index = 0; index < data[ 'pokemon' ].length; index++ ){
            pokemonName = data[ 'pokemon' ][index][ 'name' ];
            pokemonList += '<li><a href="#">' + pokemonName + '</a></li>';
        }
        console.log( data );
        document.getElementById( 'pokemon-dropdown' ).innerHTML = firstPokemon + '  <span class="caret"></span>';
        document.getElementById( 'pokemon-list' ).innerHTML = pokemonList;
        
    }

});