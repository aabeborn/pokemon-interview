import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./App.css";
import { PokemonList } from "./types";

async function fetchPokemons(): Promise<PokemonList> {
  try {
    const res = await fetch(
      " https://pokeapi.co/api/v2/pokemon?limit=25&offset=0"
    );
    if (res.ok) {
      return res.json() as Promise<PokemonList>;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
  throw new Error("Something went wrong");
}

function App() {
  const [pokemons, setPokemons] = useState<PokemonList["results"]>([]);

  useEffect(() => {
    fetchPokemons().then((data) => setPokemons(data.results));
  }, []);

  return (
    <main className="w-full h-full overflow-scroll bg-red-50 flex flex-col gap-4 items-center p-8">
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} url={pokemon.url} />;
      })}
    </main>
  );
}

export default App;
