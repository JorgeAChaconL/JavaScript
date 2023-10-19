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

// Function lifePhase, fucntion with If / Else If statements.
const lifePhase = age =>{
    if (age >= 0 && age <=3){
      return 'baby';
    }else if(age >= 4 && age <= 12){
      return 'child';
    }else if(age >= 13 && age <= 19){
      return 'teen';
    }else if(age >= 20 && age <=64){
      return 'adult';
    }else if(age >= 65 && age <= 140){
      return 'senior citizen';
    }else{
      return 'This is not a valid age';
    }
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(lifePhase(5)) //should print 'child'
  console.log(lifePhase(141)) //should print 'This is not a valid age'