import { render } from '@testing-library/react';
import { useGetPokemonByPageQuery } from '../../services/pokemon'; 
import Home from '../../pages/Home';
import '@testing-library/jest-dom/extend-expect'
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
jest.mock('../../services/pokemon', () => ({
  useGetPokemonByPageQuery: jest.fn(),
}));

describe('Home component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading indicator while fetching data', () => {
    (useGetPokemonByPageQuery as jest.Mock).mockReturnValue({ data: null, error: null, isLoading: true });

    render(<Home />);


  });

  it('renders error message if there is an error', () => {
    (useGetPokemonByPageQuery as jest.Mock).mockReturnValue({ data: null, error: 'Some error', isLoading: false });

    render(<Home />);

  });

  it('renders Pokemon list if data is loaded', () => {
    (useGetPokemonByPageQuery as jest.Mock).mockReturnValue({ data: { count: 100, results: [] }, error: null, isLoading: false });

    render(<Home />);

  });
});
