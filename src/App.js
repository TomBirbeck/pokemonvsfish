import './App.css';
import Fish from './components/Fish';
import Pokemon from './components/Pokemon';
import vs from './components/VS'
import { useState } from 'react';

function App() {
  const [currentFish, setCurrentFish] = useState("haddock");
  //list of fish to enter into search url
  const fishes = {
    1: 'red-snapper',
    2: 'haddock',
    3: 'atlantic-sea-scallop',
    4: 'bocaccio',
    5: 'gag-grouper',
    6: 'alaska-snow-crab',
    7: 'blue-mussel-farmed',
    8: 'geoduck-farmed',
    9: 'north-atlantic-swordfish',
    10: 'wreckfish',
  };

  //gets the length of the fish object
  
  var size = Object.keys(fishes).length;
  function handleNewFish(size){
    const random = fishes[Math.floor(Math.random() * size)];
    setCurrentFish(random)
  }
  
  const fish = {sodium:60}
  const pokemon = {defence:80}
  vs(fish,pokemon)
  return (
    <div className='App'>
      <Fish onClick={()=>{handleNewFish(size)}} currentFish={currentFish} />

      <Pokemon />
    </div>
  );
}

export default App;
