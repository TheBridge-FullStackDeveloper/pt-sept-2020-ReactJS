import { screen, render } from '@testing-library/react';

import PokeCard from './PokeCard';

const mockProps = {
  name: 'ditto',
  id: 132,
  frontSprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
  backSprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
  type1: 'normal',
  type2: null,
};

describe('PokeCard', () => {
  it('component is visible', () => {
    render(<PokeCard {...mockProps} />);

    const pokeCard = screen.queryByTestId('poke-card');
    expect(pokeCard).toBeVisible();
  });

  it('has the pokemon name and id', () => {
    render(<PokeCard {...mockProps} />);

    const pokemonName = screen.queryByText(mockProps.name, { exact: false });
    expect(pokemonName).toBeVisible();

    const pokemonId = screen.queryByText(mockProps.id, { exact: false });
    expect(pokemonId).toBeVisible();
  });

  it('has both font and back sprites', () => {
    render(<PokeCard {...mockProps} />);

    const frontSprite = screen.queryByAltText(`front-sprite-${mockProps.name}`);
    expect(frontSprite).toBeVisible();
    expect(frontSprite).toHaveAttribute('src', mockProps.frontSprite);

    const backSprite = screen.queryByAltText(`back-sprite-${mockProps.name}`);
    expect(backSprite).toBeVisible();
    expect(backSprite).toHaveAttribute('src', mockProps.backSprite);
  });

  it('first pokemon type is visible', () => {
    render(<PokeCard {...mockProps} />);

    const type1 = screen.queryByText(mockProps.type1);
    expect(type1).toBeVisible();

    const type2 = screen.queryByText(`${mockProps.type2}`);
    expect(type2).not.toBeInTheDocument();
  });

  it('both pokemon types are visible', () => {
    mockProps.type2 = 'water';
    render(<PokeCard {...mockProps} />);

    const type1 = screen.queryByText(mockProps.type1);
    expect(type1).toBeVisible();

    const type2 = screen.queryByText(mockProps.type2);
    expect(type2).toBeVisible();
  });
});
