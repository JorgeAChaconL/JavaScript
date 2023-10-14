const getSleephours = day =>{
    day = day.toLowerCase();
    switch(day){
      case 'monday':
        return 7;
        
      case 'tusday':
        return 7;
        
      case 'wednesday':
        return 7;
        
      case 'thursday':
        return 7;
        
      case 'friday':
        return 7;
        
      case 'saturday':
        return 8;
        
      case 'sunday':
        return 7;
        
    }
  }
  
  const getActualSleepHours = () =>{
    totalHours = getSleephours('Monday') + getSleephours('THURSDAY') + getSleephours('wednesday') + getSleephours('saturday') + getSleephours('sunday');
    return totalHours
  }
  
  const getIdealSleepHours = idealHours =>{
    return idealHours = idealHours * 7;
  }
  
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(5);
    if(actualSleepHours === idealSleepHours){
      return message = `You Slept the perfect amount of Hours!`
    }else if(actualSleepHours > idealSleepHours){
      const hoursDebt = actualSleepHours - idealSleepHours;
      return message = `Wakey Wakey! You had sleep ${hoursDebt} more hours than needed.`;
    }else{
      const hoursDebt =  idealSleepHours - actualSleepHours;
      return message = ` You need to sleep ${hoursDebt} more!. \n Excercise, try to eat healthier food, or drink more water can improve your sleep hours.`
    }
  }
  
  console.log(calculateSleepDebt());