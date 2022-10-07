import { useState, useEffect } from 'react';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState();

  const random = [Math.floor(Math.random() * 900)];

  //function returns a single fish object

  useEffect(() => {
    async function callPokemon(id) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      console.log('data', data);
      setPokemon(data);
    }

    //call fish with a random number
    callPokemon(random);
  }, []);

  if (typeof pokemon !== 'undefined') {
    const stats = [pokemon['stats']];
    return (
      <>
        <img src={pokemon['sprites'].front_default} alt='hey' />
        <h1>{pokemon['forms'][0].name}</h1>
        <p>{pokemon['weight']}</p>
        {stats[0].map((stat) => {
          return (
            <p>
              {stat.stat.name}
              {stat.base_stat}
            </p>
          );
        })}
      </>
    );
  }
}

/*
name
img
weight
stats -> base stat & name
*/
