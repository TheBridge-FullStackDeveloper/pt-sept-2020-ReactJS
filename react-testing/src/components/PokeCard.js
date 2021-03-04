function PokeCard({ name, id, frontSprite, backSprite, type1, type2 }) {
  return (
    <div data-testid="poke-card">
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
    </div>
  );
}

export default PokeCard;
