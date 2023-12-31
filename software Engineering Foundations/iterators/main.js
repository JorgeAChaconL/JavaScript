//Introduction to iterators.
    const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

    artists.forEach((artist) => {
        console.log(artist + " is one of my favorite artists.");
    });

    const numbers = [1, 2, 3, 4, 5];

    const squareNumbers = numbers.map((number) => {
        return number * number;
    });

    console.log(squareNumbers);

    const things = ["desk", "chair", 5, "backpack", 3.14, 100];

    const onlyNumbers = things.filter((thing) => {
        return typeof thing === "number";
    });

    console.log(onlyNumbers);

    //  .forEach() method.
    const fruits = [ 'mango' , 'papaya', 'pineapple', 'apple'];

        //using forEach method iterate over fruits array to print 'I want to eat a ___' for every item inside array.
        fruits.forEach(fruitItem => console.log(`I want to eat a ${fruitItem}`));
    
    // .map() method.
    const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

        //create a map array that contains first character of strring and save it in a new named secret Message.
        const secretMessage = animals.map(animal =>{
            return animal[0];
        })

        //log the message and check the method
        console.log(secretMessage.join(''));

        //Use map to divide all numbers by 100, ans save it in a new array named small numbers.
        const bigNumbers = [100,200,300,400,500];

        const smallNumbers = bigNumbers.map(number =>{
            return number / 100;
        });

        console.log(smallNumbers);
    
    // .filter() Method.
    const randomNumbers = [375, 200, 3.14, 7, 13, 852];

        
        //Call filter on randomNumbers to return the ones lewss than 250, and save them in a new array.
        const smallNumbersf = randomNumbers.filter(number =>{
            return number < 250;
        })

    const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

        //Call filter on favoriteWords to return the words that have more than 7 characters and save the in a new array.

        const longFavoriteWords = favoriteWords.filter(word =>{
            return word.length > 7;
        });
        
    console.log(smallNumbersf);
        
    console.log(longFavoriteWords);

    // .findIndex() Method.
    const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

        //Call findIndex to find the index of the element with value 'elephant' and save it in a new constant.

        const foundAnimal = animals1.findIndex(animal =>{
            return animal === 'elephant';
        });

        //Call findIndex to find the index of the element that start with 's' and save it in a new const.
        const startsWithS = animals1.findIndex(animal =>{
            return animal[0] === 's'
        });

        console.log(foundAnimal);

        console.log(startsWithS);

    // .reduce() Method.

    const newNumbers = [1,3,5,7];
    
        //Declare a new Variable to use the .reduce() method, provide a callback function, with first parm accumulator, and second currentValue, inside body log two messages to log each parms. And finally return the total value.
        const newSum = newNumbers.reduce((accumulator, currentValue) => {
            console.log(`The value of accumulator is: ${accumulator}`);
            console.log(`The value of current Value is: ${currentValue} `);
            return accumulator + currentValue;
        },5);
        
        //Log the newSum method, and after that, add a second param to the .reduce() method and log it again
        console.log(newSum);

    //Iterator Documentation.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    
    const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

        //Create an array of interesting words checking if words are fewer than 6 characters long. It must return true.
        console.log(words.some((word)=>{
            return word.length < 6;
        }));
        
        //Once you check that exist words shorter than 6 characters, use filter to save the ones longer than 5 characthers.
        const interestingWords = words.filter(word => {
            return word.length > 5;
        });

        //By last chech if every item of array has more than 5 characters, and then print the array.
        console.log(interestingWords.every((word) => {
            return word.length > 5;
        }));

        console.log(interestingWords)

    //Choose the righ Iterator.
    const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

    const nums = [1, 50, 75, 200, 350, 525, 1000];

        //Use method to print every city with a string.
        cities.forEach(city => console.log(`Have you visited ${city}?`));

        //Use a method to return a new array with elements longer than 7 characters.
        const longCities = cities.filter(city =>
            city.length > 7            
        );
        
        console.log(cities)
        //Call a mehotd that accepts an array an returns a sibngle value. Use the first array. and log the result.
        const word = cities.reduce((acc, currVal) =>{
            return acc + currVal[0]
        }, 'C');
        
        console.log(word)

        //Call a method to return a new array of numbers returned from the function
        const smallerNums = nums.map(num => num - 5);

        console.log(smallerNums)
        //Call a method that return a boolean val over the nums array.
        const bool = nums.some(num => num <0);

        console.log(bool)