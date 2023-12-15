export default function PokemonList({ pokedex }) {
  const pokeName = pokedex.map((pokedex) => (
    <li key={pokedex.number}>{pokedex.name}</li>
  ));
  return <ul>{pokeName}</ul>;
}
