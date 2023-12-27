//TEAM STATS.
// We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

//declare an object named [team], it should contain two properties that should not be reassigned directly, one named players and games, these must be arrays filled with three different players descriptions (first name, last name, and age), and three different games info(opponent, teamPoints, and opponent points.).

const team = {
    _players: [
        {
            firstName: 'Jorge',
            lastName: 'Chacon',
            age: 23
        },
        {
            firstName: 'Pepe',
            lastName: 'Pecas',
            age: 32
        },
        {
            firstName: 'Pepito',
            lastName: 'Clavito',
            age: 18
        }
    ],
    _games: [
        {
            opponent: 'bees',
            teamPoints: 25,
            opponentPoints: 24
        },
        {
            opponent: 'fox',
            teamPoints: 54,
            opponentPoints: 50
        },
        {
            opponent: 'wolves',
            teamPoints: 20,
            opponentPoints: 26 
        }
    ],
    //Getting data.
        //Create a getter method to retrieve players property, also create another method to retrieve games property
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    //Adding data.
        // Create a method to add players, usign newFirstname, newLastname and newAge. Do the same with games. Add the value to the arrays that it corresponds.
    addPlayer( newFirstname, newLastname, newAge){
        player = {
            firstName: newFirstname,
            lastName: newLastname,
            age: newAge
        }
        return this._players.push(player);
    },
    addGame( newOpponent, newTeamPoints, newOpponentPoints){
        game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        return this._games.push(game);
    }
}

//finally verify each of the methods created previously by adding and checking the info.
console.log(team.players);
console.log(team.games);

team.addPlayer('Bugs','Bunny', 76);
team.addGame('Titans',100,96);

console.log(team._players);
console.log(team._games);