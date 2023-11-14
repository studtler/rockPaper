let rps = ["rock", "paper", "scissor"];


function playersChoices(playerSelection = 'rock') {

if (playerSelection === rps.indexOf('rock')) {
    
return playerSelection; 
    }

      else {
        return 'nothing was picked so this is default';
    }
}

const playerSelection = "rock";

console.log(playersChoices('rock'));

   //  else if (playerSelection === rps.indexOf('paper')) {
    //     return "user picked paper";
    //  }

    //  else if (playerSelection === rps.indexOf('scissor')) {
    //     return "user picked scissor";
    //  }