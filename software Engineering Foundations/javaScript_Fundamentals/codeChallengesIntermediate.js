//Reverse Array.
    //Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order. There’s a built-in array method called .reverse() that does a lot of this work for you, but you’re NOT allowed to use it here!

    // Write your code here:
    const reverseArray = inputArray =>{
        const reversedArray = [];
        for( let i = inputArray.length-1; i>=0; i-- ){
        reversedArray.push(inputArray[i]);
        }
        return reversedArray;
    }
    
    const sentence = ['sense.','make', 'all', 'will', 'This'];
  
    console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  
//greetAliens();
    // Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array. // The greeting should take the following format: “Oh powerful [stringElement], we humans offer our unconditional surrender!”. You may have noticed how convenient it would be to use .forEach(), but you’re not allowed to use it here.
    const greetAliens = (elements)=>{
        for(const stringElement of elements){
            console.log(`Oh powerful ${stringElement}, we humans offer our unconditional surrender!`);
        }
    }
    
    const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

    greetAliens(aliens);

//convertToBaby();
    //Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.You may have noticed how convenient it would be to use map, but you’re not allowed to use it here.
    const convertToBaby = (arr) =>{
        babyArray = [];
        arr.forEach(a => {
            babyArray.push(`baby ${a}`);
        });
        return babyArray;
    }

    const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

    console.log(convertToBaby(animals))


//declineEverything() and acceptEverything.
    //Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them. The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline(). Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'
    const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

    const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
    };

    const declineEverything = arr =>{
        arr.forEach(politelyDecline);
    };

    const acceptEverything = arr =>{
        arr.forEach(element =>{
            console.log(`Ok, I guess I will eat some ${element}`);
        });
    };

    declineEverything(veggies);

    acceptEverything(veggies);

//squareNumbs.
    //Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.You can test your function when you’re ready by passing in the numbers 
    const numbers = [2, 7, 9, 171, 52, 33, 14]

    const toSquare = num => num * num;

    const squareNums = arr =>{
        return arr.map(num => toSquare(num));
    };

    console.log(squareNums(numbers));

//shoutGreetings()
    //Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'. You can use any technique you want to accomplish this task.
    function toUppercase(message){
        return message.toUpperCase()+'!';
    }

    const shoutGreetings = arr =>{
        return arr.map(element => toUppercase(element));
    }
    
    const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

    console.log(shoutGreetings(greetings))
    // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

//sortYears()
    // Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.
    const sortYears = arr =>{
        return arr.sort((a,b)=> b-a);
    };

    
    const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

    console.log(sortYears(years))
    // Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

//justCoolStuff()
    // Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.
    const justCoolStuff = (arr1,arr2) =>{
        const commonItems = [];
        arr1.filter((item)=>{
            for(let i = 0; i < arr1.length; i++){
                if(item === arr2[i]){
                    commonItems.push(arr2[i]);
                }
            }
        })
        return commonItems;
    }

    const coolStuff = [
        "gameboys",
        "skateboards",
        "backwards hats",
        "fruit-by-the-foot",
        "pogs",
        "my room",
        "temporary tattoos",
      ];
      
      const myStuff = [
        "rules",
        "fruit-by-the-foot",
        "wedgies",
        "sweaters",
        "skateboards",
        "family-night",
        "my room",
        "braces",
        "the information superhighway",
      ];
      
      console.log(justCoolStuff(myStuff, coolStuff));
      // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

//isTheDinnerVegan();
    // Write a function isTheDinnerVegan() that takes in an array of food objects in the format: {name: 'cabbage', source: 'plant' } and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

    const isTheDinnerVegan = arr =>{
        return arr.every(food => food.source === 'plant');
    }

    const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

    console.log(isTheDinnerVegan(dinner))
    // Should print false

//sortSpeciesByTeeth()
    // Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format: {speciesName: 'shark', numTeeth: 50 } and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth).  You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().

    const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

    const sortSpeciesByTeeth = arr =>
        arr.sort((specie1, specie2) => specie1.numTeeth - specie2.numTeeth);

    console.log(sortSpeciesByTeeth(speciesArray))
    
    // In JavaScript arrow functions, if the function body consists of a single expression, you can omit the curly braces {} and the return keyword. This is known as the concise arrow function syntax. (line 162   )

//findMyKeys();
    // Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.
    const findMyKeys = arr =>{
        const index =  arr.findIndex(item => item === 'keys');

        return index !== -1 ?  index : -1;
    }

    const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
    const randomStuff_1 = ['credit card', 'screwdriver', 'receipt', 'gum', 'used gum', 'plastic spoon'];

    console.log(findMyKeys(randomStuff));
    // Should print 4
    console.log(findMyKeys(randomStuff_1));
    // Should print -1


//Write a function dogFactory, should contaid 3 parameters (name,breed, weight), name and breed expect string, weight expect number, return an object, have those params as keys on the returned object with arguments passed in.
const dogFactory = (name, breed, weight) => {
    if (typeof name !== "string") {
      return `Error typeof name, must be string`;
    } else if (typeof breed !== "string") {
      return `Error typeof breed, must be string`;
    } else if (typeof weight !== "number") {
      return `Error typeof weight, must be number`;
    } else {
      return (dog = {
        _name: name,
        _breed: breed,
        _weight: weight,
        //Add getters and setters for each of the three properties and change the property names to have an underscore prepended.
        set name(nameToCheck) {
            if (typeof nameToCheck === "string") {
              return (this._name = nameToCheck);
            }
          },
          set breed(breedToCheck) {
            if (typeof breedToCheck === "string") {
              return (this._breed = breedToCheck);
            }
          },
          set weight(weightToCheck) {
            if (typeof weightToCheck === "number") {
              return (this._weight = weightToCheck);
            }
          },
          get name() {
            return this._name;
          },
          get breed() {
            return this._breed;
          },
          get weight() {
            return this._weight;
          },
          bark: function () {
            return `ruff! ruff!`;
          },
          // Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.
          eatTooManyTreats: function () {
            return (this._weight = this._weight + 1);
          },
          get dogo(){
            if(this._name !== '' && this._breed !== '' && this._weight !== 0){
              return `Your dog ${this.name} is a ${this._breed} of ${this._weight} kg`
            }else{
              return `Please check your inputs`
            }
          }
        });
      }
    };

    const urDog = dogFactory("Buddy", "Labrador", 25);
    const myDog = dogFactory("sky", "German Shepard", 46);

    // Call the bark method
    const barkM = myDog.bark();
    const barkU = urDog.bark();

    const weightM = myDog.eatTooManyTreats();

    // Log the result
    console.log(barkM); // Output: ruff! ruff!
    const getDogoResult = myDog.dogo;

    // Log the result
    console.log(getDogoResult);
