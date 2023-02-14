import React, { useEffect, useState } from "react";
import filterByType, { filterByWeakness, getListOfArray, filterByName } from "../helpers/pokemon.helpers";
import './pokemons.css';

export default function Pokemons() {
  const [pokeData, setPokeData] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [searchWeaknesses, setsearchWeaknesses] = useState("");
  const [searchName, setSearchName] = useState("");

  function getPokeData() {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(res => res.json())
    .then(data => setPokeData(data.pokemon))
    .catch(err => console.error(err));
  }

  useEffect(() => getPokeData(), []);

  const types = getListOfArray(pokeData, "type").sort();
  const weaknesses = getListOfArray(pokeData, "weaknesses").sort();
  let filteredList = pokeData;

  if(searchType) {
    filteredList = searchWeaknesses ? filterByType(filteredList, searchType) : filterByType(pokeData, searchType);
  }
  if (searchWeaknesses) {
    filteredList = searchType ? filterByWeakness(filteredList, searchWeaknesses) : filterByWeakness(pokeData, searchWeaknesses);
  }
  if (searchName) {
    filteredList = filterByName(pokeData, searchName);
  }

  return (
    <div className="pokedex-container">
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <form className="form-group-container">
          <div className="form-group">
            <label htmlFor="searchType">Filter By Type: </label>
            <select 
              id="searchType"
              name="searchType"
              value={searchType} 
              onChange={e => setSearchType(e.target.value)}
            >
              <option value="">All</option>
              {types.map((type, id) => {
                  return (
                    <option key={type+id} value={type}>{type}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="searchWeaknesses">Filter By Weaknesses: </label>
              <select 
                id="searchWeaknesses"
                name="searchWeaknesses"
                value={searchWeaknesses} 
                onChange={e => setsearchWeaknesses(e.target.value)}
              >
                <option value="">All</option>
                {weaknesses.map((weakness, id) => {
                    return (
                      <option key={weakness+id} value={weakness}>{weakness}</option>
                    )
                  })
                }
              </select>
          </div>
          <div className="form-group">
            <label htmlFor="pokemonName">Search:</label>
            <input
              type="search"
              name="pokemonName"
              id="pokemonName"
              onChange={e => setSearchName(e.target.value)}
              placeholder="Search by name"
            />
          </div>
        </form>
      </div>
        <ul className='list-with-pic remove-bullet'>
          {filteredList.map((pokemon) => {
            return (
              <li key={pokemon.id} className='list-item-width'>
                <img src={pokemon.img} alt="pokemon" />
                <p>{`${pokemon.name} #${pokemon.num}`}</p>
                <p>{`Type: ${pokemon.type}`}</p>
                <p>{`Weaknesses: ${pokemon.weaknesses}`}</p>
              </li>
            )
          })}
          {pokeData.length === 0 && <p className="loading">Loading...</p>}
        </ul>
    </div>
  )
}