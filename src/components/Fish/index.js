import { useEffect, useState } from 'react';

export default function Fish({ onClick, currentFish, setStats }) {
  const [fish, setFish] = useState();

  //function returns a single fish object

  useEffect(() => {
    async function callFish() {
      const res = await fetch(
        `https://www.fishwatch.gov/api/species/${currentFish}`
      );
      const data = await res.json();
      console.log('data', data);
      setFish(data);
      const stat = data[0].Sodium;
      const replaced = Number(stat.replace(/\D/g, ''));
      setStats(replaced);
    }
    console.log(currentFish);
    //call fish with a random number
    callFish();
  }, [currentFish]);
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
      <div className='container'>
        <div className='cards'>
          <h1>{fish[0]['Species Name']}</h1>
          <img
            className='imgs'
            src={fish[0]['Species Illustration Photo'].src}
            alt='hey'
          />
          <p>{fish[0]['Quote']}</p>
          <ol style={{ listStyleType: 'none', gap: '1rem' }}>
            <li>HP: {fish[0]['Calories']}</li>
            <li>Attack: {fish[0]['Sodium']}</li>
            <li>Defence: {fish[0]['Cholesterol']}</li>
            <li>Special Attack: {fish[0]['Carbohydrate']}</li>
            <li>Special Defence: {fish[0]['Carbohydrate']}</li>
            <li>Speed: {fish[0]['Protein']}</li>
          </ol>
        </div>
        <button
          onClick={() => {
            onClick();
          }}
        >
          draw new fish
        </button>
      </div>
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
