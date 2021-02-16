import { Link } from 'react-router-dom';

import './styles.css';

function PokemonList({ list, loadPokemon }) {
  return (
    // <React.Fragment></React.Fragment>
    <>
      <ul className="list">
        {list.map((pokemon) => (
          <li key={pokemon.id} className="card">
            <p>{pokemon.name}</p>
            <Link to={`/pokemon/${pokemon.name}`}>
              <img src={pokemon.image} alt={pokemon.name} />
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={loadPokemon}>Cargar más ➕</button>
    </>
  );
}

export default PokemonList;
