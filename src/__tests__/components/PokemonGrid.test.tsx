import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PokemonGrid from '../../components/PokemonGrid';
import '@testing-library/jest-dom/extend-expect'
import { PokemonListResponse } from '../../types';


const mockData: PokemonListResponse = {
    count: 2,
    next: null,
    previous: null,
    results: [
      { number: 1, name: 'Pikachu', image: 'pikachu.png', url: 'pikachu-url' },
      { number: 2, name: 'Charmander', image: 'charmander.png', url: 'charmander-url' },
      
    ],
  };
test('renders Pokemon Grid with correct data', () => {
  render(
    <Router>
      <PokemonGrid data={mockData} currentPage={1} />
    </Router>
  );

  expect(screen.getByAltText('Pikachu')).toBeInTheDocument();
  expect(screen.getByAltText('Charmander')).toBeInTheDocument();

  // Check if each Pokemon card is wrapped in a link
  expect(screen.getByRole('link', { name: /pikachu/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /charmander/i })).toBeInTheDocument();
});
