import { render } from '@testing-library/react';
import { useGetPokemonByNumberQuery } from '../../services/pokemon';
import PokemonDetails from '../../pages/PokemonDetails';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
jest.mock('../../services/pokemon', () => ({
  useGetPokemonByNumberQuery: jest.fn(),
}));

describe('PokemonDetails component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading indicator while fetching data', () => {
    (useGetPokemonByNumberQuery as jest.Mock).mockReturnValue({ data: null, error: null, isLoading: true });

    render(<PokemonDetails />);

  });

  it('renders error message if there is an error', () => {
    (useGetPokemonByNumberQuery as jest.Mock).mockReturnValue({ data: null, error: 'Some error', isLoading: false });

    render(<PokemonDetails />);

  });

  it('renders Pokemon details if data is loaded', () => {
    const mockData = {
      name: 'Pikachu',
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      },
      height: 40,
      weight: 60,
      base_experience: 112,
    };

    (useGetPokemonByNumberQuery as jest.Mock).mockReturnValue({ data: mockData, error: null, isLoading: false });

    render(<PokemonDetails />);

  });
});
