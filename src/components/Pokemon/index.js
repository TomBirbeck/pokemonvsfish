import { useState, useEffect } from 'react';

export default function Pokemon({ id, onClick, setStats }) {
  const [pokemon, setPokemon] = useState();

  // const random = [Math.floor(Math.random() * 900)];

  //function returns a single fish object

  useEffect(() => {
    async function callPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      console.log('data', data);
      setPokemon(data);
      setStats(data.stats[2].base_stat);
    }

    //call fish with a random number
    callPokemon();
  }, [id]);

  if (typeof pokemon !== 'undefined') {
    const stats = [pokemon['stats']];
    return (
      <div className='container'>
        <div className='cards'>
          <h1 className='names'>{pokemon['forms'][0].name}</h1>
          <img
            className='imgs'
            src={pokemon['sprites'].front_default}
            alt='hey'
          />
          {stats[0].map((stat) => {
            return (
              <p className='stats'>
                {stat.stat.name}: {stat.base_stat}
              </p>
            );
          })}
        </div>
        <button onClick={onClick}>New Pokemon</button>
      </div>
    );
  }
}

/*
name
img
weight
stats -> base stat & name
*/
