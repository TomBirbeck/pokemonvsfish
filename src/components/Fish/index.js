export default function Fish() {
  //list of fish to enter into search url
  const fish = {
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
  var size = Object.keys(fish).length;

  //function returns a single fish object
  async function callFish(species) {
    const res = await fetch(`https://www.fishwatch.gov/api/species/${species}`);
    const data = await res.json();
    console.log(data);
  }

  //call fish with a random number
  callFish(fish[Math.floor(Math.random() * size)]);
}
