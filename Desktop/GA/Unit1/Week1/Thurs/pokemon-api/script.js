const getPokemon = async () => {
    const pokemontypes = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151%27')
    const pokemonArray = pokemontypes.data
    console.log(pokemonArray)
}


// getPokemon()




const button = document.querySelector('#btn')
const pokemonInput = document.querySelector('#searchBar')
const imgContainer = document.querySelector('#imgContainer')




button.addEventListener('click', async () => {
let pokemon = pokemonInput.value
console.log(pokemon)
let pokePic= await axios.get (`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
let picPoke = pokePic.data.sprites.front_default
console.log(pokePic.data.sprites.front_default)
imgContainer.setAttribute('src', picPoke)
// let response = await axios.get()

})