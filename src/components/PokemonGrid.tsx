import React from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import { PokemonListResponse } from '../types';

interface PokemonGridProps {
  data: PokemonListResponse; 
  currentPage: number;
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ data, currentPage }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {data.results.map((pokemon, index: number) => (
        <Link key={index} to={`/pokemon/${index + 1 + (currentPage - 1) * 20}`}>
          <PokemonCard name={pokemon.name} number={index + 1 + (currentPage - 1) * 20} image={pokemon.image} />
        </Link>
      ))}
    </div>
  );
};

export default PokemonGrid;
