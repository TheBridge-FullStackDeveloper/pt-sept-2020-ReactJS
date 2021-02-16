import PokemonList from '../components/PokemonList';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

function Pokemon({ pokemonList, setPokemonList }) {
  function loadPokemon() {
    fetch(`${URL}${pokemonList.length + 1}`)
      .then((res) => res.json())
      .then((data) => {
        const pokemonData = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
        };

        setPokemonList([...pokemonList, pokemonData]);
      });
  }

  return (
    <section>
      <h3>Estos son los Pokemon 🦖</h3>

      <PokemonList list={pokemonList} loadPokemon={loadPokemon} />
    </section>
  );
}

export default Pokemon;
