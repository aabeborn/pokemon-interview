import { useEffect, useState } from "react";
import { Pokemon } from "./types";

async function fetchPokemon(url: string): Promise<Pokemon> {
  try {
    const res = await fetch(url);
    if (res.ok) {
      return res.json() as Promise<Pokemon>;
    }
    throw new Error("Something went wrong");
  } catch (err) {
    console.log(err);
  }
  throw new Error("Something went wrong");
}

export default function PokemonCard({ url }: { url: string }) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    fetchPokemon(url).then((data) => setPokemon(data));
  }, [url]);
  if (pokemon) {
    return (
      <div className="inline-flex items-center bg-white rounded-lg shadow-lg w-1/2 p-4">
        {pokemon.sprites && (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            height="150px"
            width="150px"
          />
        )}
        <h2 className="uppercase font-sans font-bold">{pokemon.name}</h2>
      </div>
    );
  }
}
