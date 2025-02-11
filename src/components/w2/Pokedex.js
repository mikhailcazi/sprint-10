import React, { useEffect, useState } from "react";
import PokeInfo from "./PokemonInfo";
import PokeCart from "./PokeCart";
import axios from "axios";
import { useGetPokemonListQuery } from "../../state/pokedexApi";

export default function Pokedex() {
  const { data: pokemonList } = useGetPokemonListQuery();

  const [myPokemon, setMyPokemon] = useState("");
  return (
    <>
      <div className="pokedex-header">
        <span style={{ fontSize: "xxx-large", marginRight: 50 }}>Pokedex</span>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: 250 }}>
          <div className="pokemon-list">
            {pokemonList?.results.map((pokemon) => (
              <div
                className="pokemon-item"
                key={pokemon.name}
                onClick={() => setMyPokemon(pokemon.name)}
              >
                {pokemon.name}
              </div>
            ))}
          </div>
        </div>
        <div className="pokemon-display">
          {myPokemon && <PokeInfo name={myPokemon} />}
        </div>

        <PokeCart />
      </div>
    </>
  );
}
