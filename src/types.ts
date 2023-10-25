export type PokemonList = Array<{
  name: string;
  url: URL;
}>;

export type Pokemon = {
  name: string;
  sprites: {
    front_default: URL;
  };
};
