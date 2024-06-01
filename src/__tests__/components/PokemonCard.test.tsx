import { render } from '@testing-library/react';
import PokemonCard from '../../components/PokemonCard';

import '@testing-library/jest-dom/extend-expect'

describe('PokemonCard Component', () => {
  test('renders Pokemon card with correct name, image, and number', () => {
   
    const pokemon = {
      name: 'Pikachu',
      image: 'pikachu.png',
      number: 25,
    };

   
    const { getByText, getByAltText } = render(
      <PokemonCard name={pokemon.name} image={pokemon.image} number={pokemon.number} />
    );

    
    const nameElement = getByText(pokemon.name);
    const imageElement = getByAltText(pokemon.name);
    const numberElement = getByText(`#${pokemon.number}`);

    
    expect(nameElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(numberElement).toBeInTheDocument();

    
    expect(imageElement).toHaveAttribute('src', pokemon.image);
  });
});
