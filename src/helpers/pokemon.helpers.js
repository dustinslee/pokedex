export default function filterByType(pokemons, type) {
  return type ? pokemons.filter(pokemon => pokemon.type.includes(type)) : pokemons;
}

export function filterByWeakness(pokemons, weakness) {
  return weakness ? pokemons.filter(pokemon => pokemon.weaknesses.includes(weakness)): pokemons;
}

export function filterByName(pokemons, name) {
  return pokemons.filter(pokemon => pokemon.name.toUpperCase() === name.toUpperCase());
}

export function getListOfArray(list, prop) {
  return [...new Set(list.map(item => item[prop]).reduce((prev,curr) => prev.concat(curr), []))];
}

export function getListOf(list, prop) {
  return [...new Set(list.map(item => item[prop]))];
}