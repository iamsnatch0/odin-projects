// Step 1: Write the logic to get the computer choice
// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

const weaponsArray = ['paper', 'scissors', 'rock'];
function getComputerChoice(){
    const randomIndex = weaponsArray[Math.floor(Math.random () * weaponsArray.length)];
    return randomIndex;
}

// Step 2: Write the logic to get the human choice
// Your game will be played by a human player. You will write a function that takes the user choice and returns it.
function getHumanChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const gameChoice = prompt("Select your choice : rock paper scissors");
        if(gameChoice == null){
            continue;
        }
        const gameChoiceInLowerCase = gameChoice.toLowerCase();
        if(weaponsArray.includes(gameChoiceInLowerCase)){
            validatedInput = true;
            return gameChoiceInLowerCase;
        }
    }
}

// Step 3: Declare the players score variables
// Your game will keep track of the players score. You will write variables to keep track of the players score.
// Step 4: Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, 
// plays a single round, increments the round winner’s score and logs a winner announcement.
// Step 5: Write the logic to play the entire game
// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log("--------next Round-------");
        if(checkWinner(humanChoice, computerChoice) == "Player"){
            humanScore++}
            else if (checkWinner(humanChoice, computerChoice) == "Computer"){
                computerScore++;
            }
        }
        console.log("Game Over")
        if(humanScore > computerScore) {
            console.log("Player was the winner");
        }
        else if (humanScore < computerScore){
            console.log("Computer was the winner");
        }
        else{
            console.log("It's a draw!");
        }
    }
    function checkWinner(humanChoice, computerChoice){
        if(humanChoice == computerChoice){
            return "Draw";
        }
        else if (
            (humanChoice == "rock" && computerChoice == "scissors") || 
            (humanChoice == "scissors" && computerChoice == "paper") ||
            (humanChoice == "paper" && computerChoice == "rock")
        ){
            return "Player";
        }
        else {
            return "Computer";
        }
    }
    function playRound(humanChoice, computerChoice){
        const result = checkWinner(humanChoice, computerChoice);
        if(result == "Draw"){
            return "It's a draw";
        }
        else if(result == "Player"){
            return `You win! ${humanChoice} betas ${computerChoice}`;
        } 
        else{
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }
    playGame() 