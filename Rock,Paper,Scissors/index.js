const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock'){
      return userInput;
    }else if(userInput === 'paper'){
      return userInput;
    }else if(userInput === 'scissors'){
      return userInput;
    }else if(userInput === 'bomb'){
      return userInput;
    }else{
      console.log(`${userInput} Is not a valid option, please try again`);
    }
  }
  
  const getComputerChoice = () =>{
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
      case 0:
        return 'paper';
        break;
      case 1:
        return 'rock';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) =>{
    if(userChoice === computerChoice){
      return 'Aaaaaaaaaaaand it`s a Tie';
    }else if(userChoice === 'rock'){
     return computerChoice === 'paper' ? `Computer Choose: ${computerChoice}. You Loose!` : `Computer Choose: ${computerChoice}. You Win!`;
    }else if(userChoice === 'paper'){
      return computerChoice === 'scissors' ? `Computer Choose: ${computerChoice}. You Loose!` : `Computer Choose: ${computerChoice}. You Win!`;
    }else if(userChoice === 'scissors'){
      return computerChoice === 'rock' ? `Computer Choose: ${computerChoice}. You Loose!` : `Computer Choose: ${computerChoice}. You Win!`;
    }else if(userChoice === 'bomb'){
      text = ' Secret Weapon Activated \n Launching BOMB \n YOU WIN!'
      return text
    }
  }
  
  const playGame = () =>{
    const userChoice = getUserChoice('ROCK');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame();