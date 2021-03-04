import { mapPokemon } from './pokemonMapper';
import { mockInput, mockExpected } from './__fixtures__/mockPokemonData';

describe('pokemonMapper', () => {
  it('mapPokemon returns the correct format', () => {
    const result = mapPokemon(mockInput);
    // Usando toStrictEqual comparamos los objetos y array de forma profunda
    expect(result).toStrictEqual(mockExpected);
  });

  it('mapPokemon returns null when receiving null or undefined', () => {
    const result = mapPokemon(null);
    expect(result).toBeNull();

    const result2 = mapPokemon(undefined);
    expect(result2).toBeNull();
  });

  it('return null when receiving an empty object', () => {
    const result = mapPokemon({});
    expect(result).toBeNull();
  });
});
