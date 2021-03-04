import axios from 'axios';
import { useEffect, useState } from 'react';

import PokeCard from './PokeCard';
import { mapPokemon } from '../utils/pokemonMapper';

function PokemonList() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur').then(({ data }) => {
      const pokemon = mapPokemon(data);
      setPokeList([pokemon]);
    });
  }, []);

  return (
    <ul>
      {pokeList.map((pokemon) => {
        return (
          <li key={pokemon.id}>
            <PokeCard {...pokemon} />
          </li>
        );
      })}
    </ul>
  );
}

export default PokemonList;
