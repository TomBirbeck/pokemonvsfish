export default function vs(fish, pokemon) {
  let fishScore = 0;
  let pokemonScore = 0;
  if (fish > pokemon) {
    fishScore++;
  } else if (fish < pokemon) {
    pokemonScore++;
  }
  if (fishScore > pokemonScore) {
    console.log('fish WINS');
  } else if (fishScore < pokemonScore) {
    console.log('pokemon WINS');
  }
}
