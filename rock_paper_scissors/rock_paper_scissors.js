console.log("Welcome To The Rock Paper Scissors Game")

// Step 2: Write the logic to get the computer choice

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

function getComputerChoice() {
  
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        console.log("The computer choice is Rock");
    } else if (randomChoice === 1) {
        console.log("The computer choice is Paper");
    } else  {
        console.log("The computer choice is Scissors");
    }
}
console.log(getComputerChoice());

// Step 3: Write the logic to get the human choice

// Your game will be played by a human player. You will write a function that takes the user choice and returns it.

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later. For now, just assume the user will always enter a valid choice.
// Test what your function returns by using console.log.

function getHumanChoice(){
    const userInput = prompt("Choose between rock, paper, scissors: ");
    if (userInput.toLowerCase() === "rock") {
        console.log("Your choice is Rock");
    } else if (userInput.toLowerCase() === "paper") {
        console.log("Your choice is Paper");

    } else if (userInput.toLowerCase() === "scissors"){
        console.log("Your choice is Scissors");
    }
}
console.log(getHumanChoice());

// Step 4: Declare the players score variables
// Your game will keep track of the players score. You will write variables to keep track of the players score.
// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

const computerScore = 0;
const humanScore = 0;

// Step 5: Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner. 

function playRound(computerChoice, humanChoice){
    if (humanChoice < computerChoice) {
        computerScore++
        console.log("You lose!  ")
    } else if (humanChoice > computerChoice) {
        humanScore++
        console.log("You win!")
       
    } else {
        "It's a draw!"
    }
    
}
computerSelection = getComputerChoice();
humanSelection = getHumanChoice.toLowerCase();


playRound(humanSelection, computerSelection);


