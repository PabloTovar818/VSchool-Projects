const xhr = new XMLHttpRequest();

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-species?limit=151", true);
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const pokemonArr = data.results;
        console.log(pokemonArr);

        for (var i = 0; i < pokemonArr.length; i++) {
            displayName(pokemonArr[i]);
        }
    }
}

function displayName(pokemon) {
    const h3 = document.createElement("h3");
    h3.textContent = pokemon.name;
    document.body.appendChild(h3);
}