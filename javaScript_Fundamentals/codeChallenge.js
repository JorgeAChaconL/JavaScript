// greetWorld function, basic return message.
const greetWorld = () => {
  return `Hello, World!`;
};

// CanIVote Function, basic if / else function
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

// Function agreeOrDisagree, function comparative of two string and conditional check.
const agreeOrDisagree = (string1, string2) =>{
    return string1 === string2 ? 'You agree!': 'You disagree!'
  }
  
  console.log(agreeOrDisagree("yep", "yep"))  // Should print 'You agree!'
  console.log(agreeOrDisagree("yep", "yes")) // Should print 'You disagree!'