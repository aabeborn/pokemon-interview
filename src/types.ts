export type PokemonList = {
  results: Array<{
    name: string;
    url: string;
  }>;
};

export type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
};
