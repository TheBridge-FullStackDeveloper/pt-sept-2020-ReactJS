import { useState } from 'react';

function Card({ title, alt, src, price }) {
  const [priceVisible, setPriceVisible] = useState(true);

  return (
    <div data-testid="card">
      <h3 data-testid="title">{title}</h3>

      <img alt={alt} src={src} />

      <span
        style={{
          display: priceVisible ? 'block' : 'none',
        }}
        data-testid="price"
      >
        {price}
      </span>

      <button
        onClick={() => {
          setPriceVisible(!priceVisible);
        }}
        data-testid="toggle"
      >
        Toggle
      </button>
    </div>
  );
}

export default Card;
