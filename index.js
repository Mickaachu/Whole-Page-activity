const pokedexInp = document.getElementById('pokedexInp');
const pokedexSubmit = document.getElementById('pokedex-btn');
const pokedexOutput = document.getElementById('pokedexOutput');

pokedexSubmit.addEventListener('click', () => {
    finalUrl = `https://pokeapi.co/api/v2/pokemon/${pokedexInp.value.toLowerCase()}`;
    fetch(finalUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        pokedexOutput.innerHTML = `
        <h2 id='pokemon-name' >${data.name}</h1>
        <img src="${data.sprites.front_default}">
        <p>Type: ${data.types[0].type.name}</p>
        <div>
            <h3>Status:</h3>
            </br>
            <p>HP : ${data.stats[0].base_stat}</p>
            <p>Attack : ${data.stats[1].base_stat}</p>
            <p>Defense : ${data.stats[2].base_stat}</p>
            <p>Speed : ${data.stats[5].base_stat}</p>
        </div>
        <br/>
        <h3>Abilities:</h3>
        <ul>  
            ${
                data.abilities.map(ability => {
                    return `<li>${ability.ability.name}</li>`
                }).join('')
            }
        </ul>
        

        `
            
        
    })
    .catch(err => {
        pokedexOutput.innerHTML = `
            
            <p class='error'>Invalid Pokemon, Please try again</p>
        `
    });
   

});