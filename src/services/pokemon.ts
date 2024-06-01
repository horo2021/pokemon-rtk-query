import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, POKEMON_IMAGE_BASE_URL } from '../constants';
import {  PokemonListResponse } from '../types';

const transformPokemonListResponse = (response: PokemonListResponse, queryArg: any) => {
  const urlParams = new URLSearchParams(queryArg.response.url.split('?')[1]); 
  const page = Number(urlParams.get('offset')) / 20 + 1;

  return {
    ...response,
    results: response.results.map((pokemon, index: number) => ({
      ...pokemon,
      number: (page - 1) * 20 + index + 1, 
      image: `${POKEMON_IMAGE_BASE_URL}${(page - 1) * 20 + index + 1}.png`, 
    })),
  };
};

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPokemonByNumber: builder.query({
      query: (number: string) => `pokemon/${number}/`,
    }),
    getPokemonByPage: builder.query({
      query: (page: number) => `pokemon/?offset=${(page - 1) * 20}&limit=20`,
      transformResponse: transformPokemonListResponse,
    }),
  }),
});

export const { useGetPokemonByNumberQuery, useGetPokemonByPageQuery } = pokemonApi;
