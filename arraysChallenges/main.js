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
const bobsFollowers = ['Maria','Pedro','Luis','Enrique'];

const tinasFollowers = ['Maria','Enrique','Jose'];

const mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}

console.log(mutualFollowers);

//While Loops
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard = []

while(currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
