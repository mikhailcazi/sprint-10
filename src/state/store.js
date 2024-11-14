import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./carSlice";
import simSlice from "./simSlice";
import { pokedexApi } from "./pokedexApi";
import { pokeCartApi } from "./pokeCartApi";

export const store = configureStore({
  reducer: {
    car: carSlice,
    sim: simSlice,
    [pokedexApi.reducerPath]: pokedexApi.reducer,
    [pokeCartApi.reducerPath]: pokeCartApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(pokedexApi.middleware).concat(pokeCartApi.middleware),
});
