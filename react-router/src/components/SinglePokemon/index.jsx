function SinglePokemon({ pokemon }) {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
}

export default SinglePokemon;
