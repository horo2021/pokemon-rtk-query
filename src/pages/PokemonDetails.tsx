import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNumberQuery } from '../services/pokemon';
import Loading from '../components/ui/Loading';
import PokemonDetailsCard from '../components/PokemonDetailsCard';
import Error from '../components/ui/Error';

const PokemonDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data, error, isLoading } = useGetPokemonByNumberQuery(name ?? '');

  if (isLoading) return <Loading />;
  if (error) return <Error/>;

  return (
    <>
      {data && (
        <PokemonDetailsCard
          name={data.name}
          image={data.sprites.front_default}
          height={data.height}
          weight={data.weight}
          baseExperience={data.base_experience}
        />
      )}
    </>
  );
};

export default PokemonDetails;
