let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', playGame);
paperBtn.addEventListener('click', playGame);
scissorsBtn.addEventListener('click', playGame);


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

function getHumanChoice(choice){
    // let userInput = prompt("Choose between rock, paper, scissors: ");
    // let humanChoice = userInput;
    // return humanChoice.toLowerCase();

    choice=e.currentTarget.id;
    if (choice=="rockBtn")
    {
        return "Rock";
    }
    else if (choice=="paperBtn")
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
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
                // console.log("You win! " +humanChoice+" beats "+computerChoice);
                document.getElementById('resultMsg').innerHTML="Human wins the round!";
                document.getElementById('hScore').innerHTML="Human score: "+humanScore;
                humanScore++;
            } 
            else if (computerChoice === 'rock' && humanChoice === 'scissors' ||
                computerChoice === 'paper' && humanChoice === 'rock' ||
                computerChoice === 'scissors' & humanChoice === 'paper' ) {
                    // console.log("You lose! " +computerChoice+" betas "+humanChoice);
                document.getElementById('resultMsg').innerHTML="Computer wins the round...";
                document.getElementById('cScore').innerHTML="Computer score: "+computerScore;
                computerScore++;
                } else {
                    document.getElementById('resultMsg').innerHTML="It's a Draw.";
                    // console.log("It's a draw!")
                }
            }
            // let i = playRound;
            // for (let i = 0; i < 5; i++){
            //     playRound();
            //     console.log("----------Next Round ------------");
            // }
         

        // const winner = computerScore === humanScore ? `No Winner, it's a draw!` : computerScore > humanScore ? `The computer wins!` : `You're the final winner!`

        // console.log(`${winner} computer ${computerScore} You ${humanScore}`)

        }

    
    
    
        
        
        
    

// console.log(playGame());
// console.log(computerScore);
// console.log(humanScore);