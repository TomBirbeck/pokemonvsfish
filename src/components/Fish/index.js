import { useEffect, useState } from 'react';

export default function Fish() {
  const [fish, setFish] = useState();
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
  const random = fishes[Math.floor(Math.random() * size)];

  //function returns a single fish object

  useEffect(() => {
    async function callFish(species) {
      const res = await fetch(
        `https://www.fishwatch.gov/api/species/${species}`
      );
      const data = await res.json();
      console.log('data', data);
      setFish(data);
    }

    //call fish with a random number
    callFish(random);
  }, []);
  //   async function callFish(species) {
  //     const res = await fetch(`https://www.fishwatch.gov/api/species/${species}`);
  //     const data = await res.json();
  //     setFish(data);
  //   }

  //call fish with a random number

  //   callFish(random);
  //   if (typeof fish !== 'undefined') {
  console.log('fish', fish);
  //     console.log(fish[0]['Species Illustration Photo'].src);
  //   }
  //   console.log(fish[0]['Calories']);
  //   if (typeof fish !== 'undefined') {
  // console.log(fish[0]['Species Name']);

  if (typeof fish !== 'undefined') {
    return (
      <>
        <h1>{fish[0]['Species Name']}</h1>
        <img src={fish[0]['Species Illustration Photo'].src} alt='hey' />
        <p>{fish[0]['Quote']}</p>
        <ol style={{ listStyleType: 'none' }}>
          <li>Calories: {fish[0]['Serving Weight']}</li>
          <li>Calories: {fish[0]['Calories']}</li>
          <li>Carbohydrate: {fish[0]['Carbohydrate']}</li>
          <li>Cholesterol: {fish[0]['Cholesterol']}</li>
          <li>Sodium: {fish[0]['Sodium']}</li>
          <li>Protein: {fish[0]['Protein']}</li>
        </ol>
      </>
    );
  }
}

/*
name
img
texture
Calories
Carbohydrate
Cholesterol
sodium
protein


*/
