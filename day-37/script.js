const pokeContainer = document.getElementById("poke-container");
const pokemon_count = 151;
const colors = {
	fire: "#F8A060",
	grass: "#68A890",
	electric: "#F0CF98",
	water: "#70B8C7",
	ground: "#7f7a6a",
	rock: "#7f7a6a",
	fairy: "#e98c87",
	poison: "#986897",
	bug: "#738468",
	dragon: "#5A81A6",
	psychic: "#a1838a",
	flying: "f8d5a3",
	fighting: "f8d5a3",
	normal: "f8d5a3",
};

const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemon_count; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
	const elmPokemon = document.createElement("div");
	elmPokemon.classList.add("pokemon");

	const name = pokemon.name.toUpperCase();
	const id = pokemon.id.toString().padStart(3, "0");

	const pokeTypes = pokemon.types.map((type) => type.type.name);
	const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);
	const color = colors[type];

	elmPokemon.style.backgroundColor = color;

	const pokemonInnerHTML = `
					<div class="img-container">
						<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="" />
					</div>
					<div class="info">
						<span class="number">#${id}</span>
						<h3 class="name">${name}</h3>
						<small class="type">Type: <span>${type}</span></small>
					</div>
	`;

	elmPokemon.innerHTML = pokemonInnerHTML;
	pokeContainer.appendChild(elmPokemon);
};

fetchPokemons();
