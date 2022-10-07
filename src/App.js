import './App.css';
import Fish from './components/Fish';
import Pokemon from './components/Pokemon';
import vs from './components/VS';
import { useState } from 'react';

function App() {
  const [currentFish, setCurrentFish] = useState('haddock');
  const [id, setId] = useState(1);
  const [pokeStats, setPokeStats] = useState();
  const [fishStats, setFishStats] = useState();
  //list of fish to enter into search url

  const fishes = {
    1: 'red-snapper',
    2: 'haddock',
    3: 'atlantic-sea-scallop',
    4: 'bocaccio',
    5: 'gag-grouper',
    6: 'alaska-snow-crab',
    7: 'north-atlantic-swordfish',
    8: 'wreckfish',
  };

  //gets the length of the fish object

  var size = Object.keys(fishes).length;

  //calls new fish
  function handleNewFish(size) {
    const num = Math.floor(Math.random() * size + 1);
    console.log('num', num);
    const random = fishes[num];
    console.log('random', random);
    setCurrentFish(random);
  }

  //calls new pokemon

  function handleNewPokemon() {
    // TODO: Set id to be random number between 1 and 900
    const random = Math.floor(Math.random() * 900);
    setId(random);
  }

  const fish = { sodium: 60 };
  const pokemon = { defence: 80 };
  vs(fishStats, pokeStats);
  return (
    <div className='App'>
      <Fish
        onClick={() => {
          handleNewFish(size);
        }}
        currentFish={currentFish}
        setStats={setFishStats}
      />
      <h1 className='vs'>VS</h1>
      <Pokemon
        onClick={() => {
          handleNewPokemon();
        }}
        id={id}
        setStats={setPokeStats}
      />
    </div>
  );
}

export default App;
