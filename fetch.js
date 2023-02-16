fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
.then((resp) => resp.json())
.then((data) => {
    const pokedexKanto = data.results.map(async (pokemon) => {
        const pokeData = await fetch(pokemon.url).then(res => res.json())
        return {
            name: pokemon.name,
            id: pokeData.id,
            front_default: pokeData.sprites.front_default
        }
    })
    Promise.all(pokedexKanto)
        .then(completePokedex => {
            crear_pokemon(completePokedex)
            MostrarPokedex(completePokedex)
        })
})
let pokedexKanto = []




