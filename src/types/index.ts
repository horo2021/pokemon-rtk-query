export interface PokemonListResponse {
    results: {
      number: number;
      image: string;
      name: string;
      url: string;
    }[];
    count: number; 
    next: string | null;
    previous: string | null;
  }
  