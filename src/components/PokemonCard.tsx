import React from 'react';

interface PokemonCardProps {
  name: string;
  image: string;
  number: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, number }) => (
  <div className="p-4 border rounded-lg shadow-lg bg-white transform transition-transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
    <img className="w-24 h-24 mb-4" src={image} alt={name} />
    <p className="text-lg font-semibold text-gray-700 capitalize">{name}</p>
    <p className="text-sm text-gray-500">#{number}</p>
  </div>
);

export default PokemonCard;
