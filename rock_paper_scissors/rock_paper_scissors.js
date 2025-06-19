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
// Step 6: Write the logic to play the entire game
// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. 
// Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
function playGame(){
    function playRound(computerChoice, humanChoice){
        for (let i = 0; i < 5; i++) {
            const computerSelection = getComputerChoice();
            const humanSelection = getHumanChoice.toLowerCase();
            console.log(playRound(humanSelection, computerSelection));
            console.log("--------next Round-------");
        }
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
}



function checkWin(humanSelection, computerSelection){
    if(humanSelection == computerSelection){
        return "Draw";
    }
    else if (
        (humanSelection == "rock" && computerSelection == "scissors") || 
        (humanSelection == "scissors" && computerSelection == "paper") ||
        (humanSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(humanSelection, computerSelection){
    const result = checkWin(humanSelection, computerSelection);
    if(result == "Draw"){
        return "It's a draw";
    }
    else if(result == "Player"){
        return `You win! ${humanSelection} betas ${computerSelection}`;
    }
    else{
        return `You lose! ${computerChoice} beats ${computerSelection}`;
    }
}

playGame() 

