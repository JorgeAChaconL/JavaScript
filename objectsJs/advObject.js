//The 'this' keyword.
    //Create a new object robot, property model and energyLevel.

    const robot = {
        model: '1E78V2',
        energyLevel: 100,

        //add method provideInfo and return string `I am Model and my current energy level is energylevel.
        provideInfo() {
            return `I am ${this.model} and my curret energy level is ${this.energyLevel}.`;
        }
    }

    //check provideInf and log the result.
    console.log(robot.provideInfo());

//Arrow functions and this.
 //Currently the checkEnergy is not producing the correct output using arrow function. Refactor or change to fix it.
//  const robot2 = {
//     energyLevel: 100,
//     checkEnergy: () => {
//       console.log(`Energy is currently at ${this.energyLevel}%.`)
//     }
//   }
  
//   robot2.checkEnergy();

  //fix
  const robot2 = {
        energyLevel: 100,
        checkEnergy() {
          console.log(`Energy is currently at ${this.energyLevel}%.`)
        }
    }

    robot2.checkEnergy();

//Privacy.
// Below the object, reassingt the _energyLevel property to high.
const robot3 = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  robot3._energyLevel = 'high';

  //call recharge() an robot3 an analyze the result.
  robot3.recharge();

//Getters.
  //In robot4 create getter method named energyLevel using 'get' Keyword. Leave body blank.
  const robot4 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
        //add if to check if eergyLevel is number, true: return `My current energy leves is ENERGYLEVEL. **RETURN NOT LOGGING**
        if(typeof this._energyLevel === 'number'){
            return `My current energy levels is ${this._energyLevel}`
        } else {
            //If false add a default return message returing `System malfunction: cannot retrieve energy level.
            return `System malfunction: cannot retrieve energy level`
        }
    }
  };

  //Log the result of calling the getter method energyLevel to the console
  console.log(robot4.energyLevel);

//Setters.
  //Add a setter named numOfSensors using 'set Keyword, provide param of num leave body empty.
  const robot5 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
        //check if num is a number | num should be greater or equal to 0 | if both are true reassign numOfSensors to `num`
        if(typeof num === 'number' && num >= 0){
            this._numOfSensors = num;
        } else{
            //add else that logs a default message to console.
            console.log(`Pass in a number that is greater than or equal to 0`);
        }
    }
  };
  
  robot5.numOfSensors;

  robot5.numOfSensors = 100;

  console.log(robot5.numOfSensors)


//Factory  functions.
  //Create a factory funcion 'robotFactory' with two params [model] & [mobile]. It must return an object, with two
  //key values. [model: model] [mobile:mobile]. And a method named beep that return `beep boop`.
  const robotFactory = (model, mobile) => {
    return{
      model: model,
      mobile: mobile,
      beep() {
        console.log(`Beep Boop`);
      }
    }
  };

  //use factory function to create tinCan with values P-500 and true.
  const tinCan = robotFactory('P-500',true);

  //check tinCan by calling beep function.
  tinCan.beep();

//Propery Value Shorthand
  //Refactor the previous factory function.

  const robotFactory_1 = (model, mobile) => {
    return{
      model,
      mobile,
      beep() {
        console.log(`Beep Boop`);
      }
    }
  };

  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory_1('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

//Destructured Assgnment.
  //use Destructured assignment to crerate a const named functionality to extract this value from robot.
  const robot6 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robot6;

  //Take advantage of this shorcut and call beep method from functionality.
  functionality.beep();

//Built-in Object Methods.
  //Grab propery names, and save it in an Array assigned to robotKeys.
  const robot7 = {
	  model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
  };

  // What is missing in the following method call? robot inside object.keys()
  const robotKeys = Object.keys(robot7);

  console.log(robotKeys);

  // Declare robotEntries below this line:
  //also return an array that have key and value of object properties.
  const robotEntries = Object.entries(robot7);

  console.log(robotEntries);

  // Declare newRobot below this line:
  //Create another object that has the properties f the robot, but with few additinal properties.
  const newRobot_1 = Object.assign({laserBlaster: true, voiceRecognition: true},robot7);

  console.log(newRobot_1);