import { configureStore } from "@reduxjs/toolkit";

import nameSlice from "./nameSlice";
import carSlice from "./carSlice";
import antSlice from "./antSlice";
import charSlice from "./charSlice";
import { pokedexApi } from "./pokedexApi";
import { pokeCartApi } from "./pokeCartApi";

export const store = configureStore({
  reducer: {
    name: nameSlice,
    car: carSlice,
    ant: antSlice,
    char: charSlice,
    [pokedexApi.reducerPath]: pokedexApi.reducer,
    [pokeCartApi.reducerPath]: pokeCartApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(pokedexApi.middleware).concat(pokeCartApi.middleware),
});
