//create a variable named [input] equal to any phrase
let input = "turpentine and turtles";

//create an array named vowels. This array will not be updated, use the correc declaration keyword.
const vowels = ["a", "e", "i", "o", "u"];

//create a variable named resultArray and set equal to empty[];
const resultArray = [];

//Convert the iniital input to lowerCasse.
input = input.toLowerCase();

//Create a loop to iterate through each letter of the input.
for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
}

//at bottom log the resultArray
console.log(resultArray);

//Declare a variable resultString that joins our resultArray;
let resultString = resultArray.join("");

//Capitalize the string.
resultString = resultString.toUpperCase();

//log and verify your answer. 'turpentine and turtles' Should log 'UUEEIEEAUUE'
console.log(resultString);
