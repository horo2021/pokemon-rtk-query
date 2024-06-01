import { combineReducers } from '@reduxjs/toolkit';
import { pokemonApi } from '../services/pokemon';

export const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});
