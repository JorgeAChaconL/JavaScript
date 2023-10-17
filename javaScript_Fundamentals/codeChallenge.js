const greetWorld = () => {
  return `Hello, World!`;
};

const canIVote = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

console.log(canIVote(19)); // Should print true
console.log(canIVote(18)); // Should print true
console.log(canIVote(17)); // Should print false
