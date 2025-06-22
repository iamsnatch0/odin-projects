console.log("Welcome To The Rock Paper Scissors Game");
console.log("-----------------------------------------");

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
    let humanChoice = userInput;
    return humanChoice.toLowerCase();
}



function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    
    function playRound() {

        const humanChoice=getHumanChoice();
        const computerChoice=getComputerChoice();
       
        console.log('Computer Choice: ' + computerChoice)
        console.log('User Choice: ' + humanChoice)
        if (humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'scissors' & computerChoice === 'paper')  {
                console.log("You win! " +humanChoice+" beats "+computerChoice);
                humanScore++;
            } 
            else if (computerChoice === 'rock' && humanChoice === 'scissors' ||
                computerChoice === 'paper' && humanChoice === 'rock' ||
                computerChoice === 'scissors' & humanChoice === 'paper' ) {
                    console.log("You lose! " +computerChoice+" betas "+humanChoice);
                    computerScore++;
                } else {
                    console.log("It's a draw!")
                }
            }
            let i = playRound;
            for (let i = 0; i < 5; i++){
                playRound();
                console.log("----------Next Round ------------");
            }
         

        const winner = computerScore === humanScore ? `No Winner, it's a draw!` : computerScore > humanScore ? `The computer wins!` : `You're the final winner!`

        console.log(`${winner} computer ${computerScore} You ${humanScore}`)

        }

    
    
    
        
        
        
    

console.log(playGame());
// console.log(computerScore);
// console.log(humanScore);