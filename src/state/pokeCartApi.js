import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeCartApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9009/api/" }),
  endpoints: (builder) => ({
    getPokemonCollection: builder.query({
      query: () => "pokemons",
      providesTags: ["CartPokemons"],
    }),

    addPokemon: builder.mutation({
      query: (pokeInfo) => ({
        url: "pokemons",
        method: "POST",
        body: pokeInfo,
      }),

      invalidatesTags: ["CartPokemons"],
    }),
  }),
});

export const { useGetPokemonCollectionQuery, useAddPokemonMutation } =
  pokeCartApi;
