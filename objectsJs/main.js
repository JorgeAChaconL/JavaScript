//An object literal with two key-value pairs
const spaceship = {
    'Fuel Type': 'diesel',
    color: 'silver'
};

//make a new spaceship object named fasterShip same color as spaceship.
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
};

//Accesing properties
    const  spaceship1 = {
        homePlanet: 'Earth',
        color: 'silver',
        'Fuel Type': 'Turbo Fuel',
        numCrew: 5,
        flightPath: ['Venus', 'Mars','Saturn']
    };

    //Use dot operator to access the value of numCrew and create a var crewCount.
    var crewCount = spaceship1.numCrew;
    
    //Use dot operator to acces planetArray vakue and create a ver flightPath.
    var planetArray = spaceship1.flightPath;

    console.log(planetArray)

//Bracket Notation.
    const spaceship2 = {
        'Fuel Type': 'Turbo Fuel',
        'Active Mission':true,
        homePlanet: 'Earth',
        numCrew: 5
    };

    let propName = 'Active Mission';
    // use bracket notation to access the value of 'Active Mission' from the spaceship object in the code edito
    // Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.
    var isActive = spaceship2['Active Mission'];

    // Using propName variable provided, console log the value of active Mission property.
    console.log(spaceship2[propName]);

//Property Assignment.
    const spaceship3 = {
        'Fuel Type': 'Turbo fuel',
        homePlanet: 'Earth',
        color: 'silver',
        'Secret Mission': 'Discover life outside of Earth'
    };

    // reassgin color property of spaceship3, to have a value 'glorius gold';
    spaceship3.color = 'glorious gold';

    //without changing lines of spaceship3 add numEngines with num val between 1-10
    spaceship3.numEngines = 7;

    //Use delete operator to remove 'Secret Mission' from spaceship3.
    delete spaceship3['Secret Mission'];

    console.log(spaceship3)

//Methods.
    let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
    // create an alienShip object. It should contain a method retreat() which will console.log() the retreatMessage.
    const alienShip = {
        retreat () {
            console.log(retreatMessage);
        },
        //add a method takeOff() should console log 'spim.. borp.. glix... blastoff!!'
        takeOff () {
            console.log('Spim... Borp... Glix... Blastoff!');
        }
    };

    //invoke both methods. first retreat then takeOff.
    console.log(alienShip.retreat());
    console.log(alienShip.takeOff());

//Nested Objects.
let spaceship4 = {
    //2.- passanger propery has null value, add passengers as individual objets, at leat one key value.
    passengers: [{name: 'Sandra', profession: 'Technician','health': 'healthy'},{name:'Marco',profession: 'Administration', 'health': 'Sick'},{name:'Vanessa',    profession:'Health administrative', 'health': 'Sad'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  //1.- Create a var capFave and assingt capt favorite food, use braket and dot notation.
    let capFave = spaceship4.crew.captain['favorite foods'][0];

    //3.- Create var firstPassenger and assign first passenger values of array, then second and console log. individually.
    let firstPassenger = spaceship4.passengers[0];
    let secondPassenger = spaceship4.passengers[1];
    console.log(firstPassenger);
    console.log(secondPassenger);


//Pass By Reference.
  let spaceship5 = {
    'Fuel type': 'Turbo Fuel',
    homePlanet: 'Earth'
  };

  //Write function greenEnergy() with obj as param, and sets objets 'Fuel type' To 'avocado oil;
  const greenEnergy = obj =>{
    obj["Fuel type"] = 'avocado oil';
  };

  //Write function remotelyDisable() with obj as param, and set(or reassing) property 'disabled' to true.
  const remotelyDisable = obj =>{
    obj.disabled = true;
  };

  //Call your two functions and then log the spaceship obj to configm changes or addtitions.
  greenEnergy(spaceship5);
  remotelyDisable(spaceship5);
  console.log(spaceship5);

//Looping through objects.
let spaceship6 = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

  //Using for...in iterate spaceship.crew object and console.log a list of crew roles and names.
  for( let crewMember in spaceship6.crew){
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
  };

  //Using for..in iterate spaceship.crew object and console.log list of names and degrees.
  for( let crewMember in spaceship.crew){
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
  }