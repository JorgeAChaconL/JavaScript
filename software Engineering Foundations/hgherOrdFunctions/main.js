//Function As Data.
    //Declare a shorter named variable an assign the long function name as value
    const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
        for(let i = 1; i <= 1000000; i++) {
          if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
          }
        }
    };

    const isTwoPlusTwo =  checkThatTwoPlusTwoEqualsFourAMillionTimes;
    //Invoke this function
    isTwoPlusTwo();

    //Check the name property of the function assigned to the previous one.
    console.log(isTwoPlusTwo.name);

//Function as Parameters.
    //After the funciton [addTwo], and insde the body of [checkConsistentOutput] declare two variables, first stores value + 2, second invocate func callback and has value as argument.
    const addTwo = num => {
        return num + 2;
      }
      
      const checkConsistentOutput = (func, val) => {
        const checkA = val + 2;
        const checkB = func(val);
        //create a conditional statement to check if A is equal to B to return the result of callback function, if not, return an string.
        if(checkA === checkB){
          return checkB;
        }else{
          return 'inconsistent results';
        }
      }
      //Log the invocation of the second function with addTwo as first argument and random numbeer as second.
      console.log(checkConsistentOutput(addTwo, 35));
      