import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './pokemonList.css';

export default function Pokemon() {
  const [pokeData, setPokeData] = useState([]);

  function getPokeData() {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
    .then(res => res.json())
    .then(data => setPokeData(data.pokemon))
    .catch(err => console.error(err));
  }

  useEffect(() => getPokeData(), []);

  return (
    <ul className='list-with-pic remove-bullet'>
      {pokeData.map((pokemon) => {
        return (
          <li key={pokemon.id} className=''>
            <img className='' src={pokemon.img} alt="pokemon" />
            <p>{`${pokemon.name}`}</p>
            <p>Description:</p>
          </li>
        )
      })}
    </ul>
  )
}