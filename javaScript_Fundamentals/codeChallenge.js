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
