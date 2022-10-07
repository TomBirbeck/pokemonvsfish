import { useEffect, useState } from 'react';

export default function Fish({onClick,currentFish}) {
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
    }
console.log(currentFish)
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
        <button onClick={()=>{onClick()}}>draw new fish</button>
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
