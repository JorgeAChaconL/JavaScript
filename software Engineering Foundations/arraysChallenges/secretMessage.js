// Initial Setup of array.
let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

//Usean array method to remove the las string of the array.
secretMessage.pop();

//Check your work by logging `lenght` of the array.
console.log(`Lenght of the array: ${secretMessage.length}`);

//Use an array metho to add words `to` and `programs`
secretMessage.push('to','Program');

//Change word 'easily' to 'right' by accesing index and replacing it.
  //Function find the index of the word 'easily'
const findEasily = secretMessage.findIndex(element => element =='easily');
console.log(`Index of 'easily': ${findEasily}`);
  //replace the word in the index and check.
secretMessage[20] = 'right';
console.log(secretMessage[20]);

//use an array method to remove first string on it.
secretMessage.shift()

//Array method to add the string 'Programming' to the beginnig.
secretMessage.unshift('Programming');

//Array method to remov strings `get`,`right`,`the`,`first`,`time`, and replace with the single string `know`;
  //Function find the index of the word 'get'
const findGet = secretMessage.findIndex(element => element =='get');
console.log(`Index of 'get': ${findGet}`);
secretMessage.splice(6,5,'know');

//One line, use console.log() and join() ot print secretMessage sentence. Join(separator) to avoid `,` in the message.
console.log(secretMessage.join(' '));