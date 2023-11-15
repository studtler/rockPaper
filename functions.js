let rps = ["rock", "paper", "scissor"];

// var item = items[Math.floor(Math.random()*items.length)];
function computerChoice() { 
   console.log(rps[Math.floor(Math.random() * rps.length )]);
}

// computerChoice();

function playersChoices(playerSelection, computerSelection) {

if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
return "YOU LOSE COMPUTER WINS"; 
    }

    // playerSelection + computerSelection + 
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor" ) {
      return "I WIN ROCK BEATS SCISSOR";
   }

   else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor" ) {
    return "I LOSE, SCISSOR BEATS PAPER";
 }

 else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock" ) {
  return "I WIN PAPER BEATS ROCK";
}

else if (playerSelection === "scissor" && computerSelection === "paper" ) {
  return "I WIN SCISSOR BEATS PAPER";
}

else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock" ) {
  return "I LOSE ROCK BEATS SCISSOR";
}
      else {
        return "OF THE SAME TYPE ITS A DRAW";
    }
}
console.log(playersChoices("ScisSor", "paper"));

  
    