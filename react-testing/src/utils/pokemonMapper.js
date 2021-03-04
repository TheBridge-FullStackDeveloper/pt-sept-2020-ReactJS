export const mapPokemon = (pokemonData) => {
  if (!pokemonData || !Object.keys(pokemonData).length) {
    return null;
  }

  return {
    name: pokemonData.name,
    id: pokemonData.id,
    frontSprite: pokemonData.sprites.front_default,
    backSprite: pokemonData.sprites.back_default,
    type1: pokemonData.types[0].type.name,
    type2: pokemonData.types[1]?.type.name || null,
  };
};
