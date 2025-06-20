
// Step 6: Write the logic to play the entire game
// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares 
// a winner at the end.
// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. 
// Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get 
// new choices for each round.
// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.


console.log("Welcome To The Rock Paper Scissors Game")
console.log("-----------------------------------------")

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        let computerChoice = 'rock'
        return computerChoice;
    } else if (randomChoice === 1) {
        let computerChoice = 'paper'
        return computerChoice;
    } else  {
        let computerChoice = 'scissors'
        return computerChoice;
    }
}

function getHumanChoice(){
    let userInput = prompt("Choose between rock, paper, scissors: ");
    let humanChoice = userInput.toLowerCase();
    return humanChoice;
}


function playRound(humanChoice, computerChoice) {
    console.log('Computer Choice: ' + computerChoice)
    console.log('User Choice: ' + humanChoice)
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats Scissors')
        humanScore++
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! Paper beats Rock')
        humanScore++
    } else if (humanChoice == 'scissors' & computerChoice == 'paper'){
        console.log('You win! Scissors beat Paper')
        humanScore++
    } else if (computerChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You lose! Rock beats Scissors')
        computerChoice++
    } else if (computerChoice == 'paper' && computerChoice == 'rock') {
        console.log('You lose! Paper beats Rock')
        computerChoice++
    } else if (humanChoice == 'scissors' & computerChoice == 'paper'){
        console.log('You lose! Scissors beat Paper')
        computerChoice++
    } else {
        console.log("It's a draw!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound();


