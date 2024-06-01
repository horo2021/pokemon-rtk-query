import React from 'react';

interface PokemonDetailsCardProps {
  name: string;
  image: string;
  height: number;
  weight: number;
  baseExperience: number;
}

const PokemonDetailsCard: React.FC<PokemonDetailsCardProps> = ({ name, image, height, weight, baseExperience }) => (
  <div className="flex justify-center items-center h-screen ">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm mx-auto">
      <h1 className="text-4xl font-bold mb-4 capitalize text-gray-800">{name}</h1>
      <img src={image} alt={name} className="w-32 h-32 mb-4 mx-auto rounded-full border-4 border-gray-300" />
      <div className="text-lg text-gray-700">
        <p className="mb-2"><span className="font-semibold">Height:</span> {height}</p>
        <p className="mb-2"><span className="font-semibold">Weight:</span> {weight}</p>
        <p className="mb-2"><span className="font-semibold">Base Experience:</span> {baseExperience}</p>
      </div>
    </div>
  </div>
);

export default PokemonDetailsCard;
