import { screen, render } from '@testing-library/react';

import PokemonList from './PokemonList';
import { mockInput } from '../utils/__fixtures__/mockPokemonData';

jest.mock('react-router-dom', () => ({
  Link: (props) => (
    <a data-testid={props['data-testid']} href={props.to}>
      {props.children}
    </a>
  ),
}));

jest.mock('axios', () => ({
  get: async () => {
    return {
      data: mockInput,
    };
  },
}));

describe('PokemonList', () => {
  it('has as many PokeCards as pokemon in the state', () => {
    render(<PokemonList />);

    const pokeCards = screen.queryAllByTestId('poke-card');
    // Este timeout es temporal hasta que veamos como esperar a los useEffect
    setTimeout(() => {
      expect(pokeCards).toHaveLength(1);
    }, 1000);
  });
});
