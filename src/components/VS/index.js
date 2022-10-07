export default function vs(fish, pokemon){
    let fishScore = 0 
    let pokemonScore = 0
        if (fish.sodium > pokemon.defence){
        fishScore ++
    } else if (fish.sodium < pokemon.defence){
        pokemonScore ++
    }
    if(fishScore > pokemonScore){
        console.log("fish WINS")
    } else if(fishScore < pokemonScore){
        console.log("pokemon WINS")
    }
}