// greetWorld function, basic return message.
const greetWorld = () => {
  return `Hello, World!`;
};
console.log(greetWorld());

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
const agreeOrDisagree = (string1, string2) => {
  return string1 === string2 ? "You agree!" : "You disagree!";
};

console.log(agreeOrDisagree("yep", "yep")); // Should print 'You agree!'
console.log(agreeOrDisagree("yep", "yes")); // Should print 'You disagree!'

// Function lifePhase, fucntion with If / Else If statements.
const lifePhase = (age) => {
  if (age >= 0 && age <= 3) {
    return "baby";
  } else if (age >= 4 && age <= 12) {
    return "child";
  } else if (age >= 13 && age <= 19) {
    return "teen";
  } else if (age >= 20 && age <= 64) {
    return "adult";
  } else if (age >= 65 && age <= 140) {
    return "senior citizen";
  } else {
    return "This is not a valid age";
  }
};

console.log(lifePhase(5)); //should print 'child'
console.log(lifePhase(141)); //should print 'This is not a valid age'

// final grade, based in three different grades, take the average and evaluate Switch Case Statements.
const finalGrade = (grd1, grd2, grd3) => {
  if (
    grd1 < 0 ||
    grd1 > 100 ||
    grd2 < 0 ||
    grd2 > 100 ||
    grd3 < 0 ||
    grd3 > 100
  ) {
    return "You have entered an invalid grade.";
  }

  const avg = (grd1 + grd2 + grd3) / 3;

  switch (true) {
    case avg >= 90:
      return "A";
    case avg >= 80:
      return "B";
    case avg >= 70:
      return "C";
    case avg >= 60:
      return "D";
    default:
      return "F";
  }
};

console.log(finalGrade(99, 92, 95)); // Should print 'A'
console.log(finalGrade(99, 92, 0)); // Should print 'A'

// string Integreation / concatenated to return a String / response.
const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`;
};

// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty("Private", "Fido")); // Should return 'Private Fido reporting for duty!'
console.log(reportingForDuty("Sargent", "Hernandez")); // Should return 'Private Fido reporting for duty!'

// calculate Weight of different plantes based on earth. Use of Switch / case statements. Arrow Function Definition.
const calculateWeight = (earthWeight, planet) => {
  planet = planet.toLowerCase();

  switch (planet) {
    case "mercury":
      return earthWeight * 0.378;
    case "venus":
      return earthWeight * 0.907;
    case "mars":
      return earthWeight * 0.377;
    case "jupiter":
      return earthWeight * 2.36;
    case "saturn":
      return earthWeight * 0.916;
    default:
      return `Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.`;
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, "Jupiter")); // Should print 236
console.log(calculateWeight(100, "Venus")); // Should print 90.7

// Function to detect if a val is truthy or Falsy (If has a value different to empty or 0)
function truthyOrFalsy(val) {
  if (val) {
    return true;
  } else {
    return false;
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(0)); // Should print false
console.log(truthyOrFalsy("hI")); // Should print True

// function, return a num rounded to the value after.
const numImaginaryFriends = (friends) => {
  return Math.ceil(friends / 4);
};

// Uncomment the lines below when you're ready to try out your function
console.log(numImaginaryFriends(20)); // Should print 5
console.log(numImaginaryFriends(10)); // Should print 3 (2.5 rounded up!)

// String Interpolation.
const sillySentence = (adj, verb, noun) => {
  return `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`;
};

// Uncomment the line below when you're ready to try out your function
console.log(sillySentence("excited", "love", "functions"));

// Age calculation. Get Actual date, do calculation.
const howOld = (age, year) => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  const yearDifference = year - currentYear;
  const newAge = age + yearDifference;
  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
};

// Once your function is written, write function calls to test your code!

console.log(howOld(23, 2000));
console.log(howOld(2, 2003));

// Tip Calculator Based on the quality of the services and the total amount.
const tipCalculator = (quality, total)=>{
    const qual = quality.toLowerCase();
    switch(qual) {
      case 'excellent':
        return total*.30;
      case 'good':
        return total*.20;
      case 'ok':
        return total*.15;
      case 'bad':
        return total*.05;
      default:
        return total*.18;
    }
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(tipCalculator('good', 100)) //should return 20
  console.log(tipCalculator('meh', 170)) //should return 20
  console.log(tipCalculator('bad', 120)) //should return 6
  
  // String Emoticons using switch / case.
const toEmoticon = string =>{
    let str = string.toLowerCase();
    switch(str){
      case 'shrug':
        return `|_{"}_|`;
      case 'smiley face':
        return ':)';
      case 'frowny face':
        return ':(';
      case 'winky face':
        return ';)';
      case 'heart':
        return '<3';
      default:
        return '|_(* ~ *)_|';
    }
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(toEmoticon("whatever")) 
  // Should print  '|_(* ~ *)_|'
  console.log(toEmoticon("HEART")) 
  // should pirnt <3