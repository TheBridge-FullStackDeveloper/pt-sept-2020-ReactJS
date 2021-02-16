import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SinglePokemon from '../components/SinglePokemon';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

function PokemonProfile() {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`${URL}${name}`)
      .then((res) => res.json())
      .then((data) => {
        const pokemonData = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
        };

        setPokemon(pokemonData);
      })
      .catch((err) => {
        // Esta función la usaré lo justo y necesario porque es muy imperativa
        history.goBack();
      });
  }, [name]);

  return (
    <section>
      <h1>Este es el perfil pokemon {name}</h1>

      {pokemon ? <SinglePokemon pokemon={pokemon} /> : <h3>Loading...</h3>}
    </section>
  );
}

export default PokemonProfile;
