import { useState } from 'react';
import { useGetPokemonByPageQuery } from '../services/pokemon'; 
import Pagination from '../components/ui/Pagination';
import PokemonGrid from '../components/PokemonGrid';
import Loading from '../components/ui/Loading';
import Error from '../components/ui/Error';


let totalPages = 0;

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error, isLoading } = useGetPokemonByPageQuery(currentPage); 
  
  if (data && data.count) {
    totalPages = Math.ceil(data.count / 20);
  }
  

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <Loading/>
  if (error) return <Error />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pokémon List</h1>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      {data && <PokemonGrid data={data} currentPage={currentPage} />}
    </div>
  );
};





export default Home;
