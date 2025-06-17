console.log("Welcome To The Rock Paper Scissors Game")

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

function getComputerChoice() {
  
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        console.log("Rock");
    } else if (randomChoice === 1) {
        console.log("Paper");
    } else  {
        console.log("Scissors");
    }
}
console.log(getComputerChoice());