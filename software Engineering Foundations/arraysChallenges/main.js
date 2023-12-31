// Create a program that loops from 5 to 10 and logs each number to the console.
for (let i = 5; i < 11; i++) {
  console.log(i);
}

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
//Reverse loop
for (let i = 3; i >= 0; i--) {
  console.log(i);
}

//Looping Through Arrays
const vacationSpots = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

//Nested Loops
const bobsFollowers = ["Maria", "Pedro", "Luis", "Enrique"];

const tinasFollowers = ["Maria", "Enrique", "Jose"];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);

//While Loops
const cards = ["diamond", "spade", "heart", "club"];

// Write your code below
let currentCard = [];

while (currentCard != "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//Do... while statements.
const cupsOfSugarNeeded = 3;

let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(`Cup ${cupsAdded} was add `);
} while (cupsAdded < cupsOfSugarNeeded);

//Break Statement.
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for(let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
    if(rapperArray[i] === 'Notorious B.I.G.'){
      break;
    }
}
console.log("And if you don't know, now you Kimnow.");

//For... of loops;
//Spelling WIZARD;
const spellingWord = 'hippopotamus';

for(const letter of spellingWord){
    console.log(letter);
}

//Polemon Catcher.
//Write a for... loop that iterates through pokemonList.
//Inside use console.log() and string interpolation with string 'You caugh a 'X'!;
//One elements is 'Yoshi', if you encounter it use continue to skip it before logegd.
const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

for(pokemon of pokemonList){
  if(pokemon === 'Yoshi'){
    continue;
  }
  console.log(`You caught a ${pokemon}!`)
}