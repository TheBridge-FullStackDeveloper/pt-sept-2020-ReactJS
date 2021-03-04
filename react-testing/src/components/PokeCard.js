import { Link } from 'react-router-dom';

function PokeCard({ name, id, frontSprite, backSprite, type1, type2 }) {
  return (
    <Link data-testid="poke-card" to={`/pokemon/${id}`}>
      <div>
        <h3>{name}</h3>
        <span>{id}</span>
      </div>

      <div>
        <img src={frontSprite} alt={`front-sprite-${name}`} />
        <img src={backSprite} alt={`back-sprite-${name}`} />
      </div>

      <div>
        <span>{type1}</span>
        {type2 ? <span>{type2}</span> : null}
      </div>
    </Link>
  );
}

export default PokeCard;
