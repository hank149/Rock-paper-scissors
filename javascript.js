//initalize two variables for the playerChoice and computerChoice
let playerSelection = prompt("Please enter Rock, Paper, or Scissors") ;
let computerChoice ;

// computer chooses rock, paper or scissors
function getComputerChoice() {
  let choice = Math.floor((Math.random() * 3) + 1);
  if (choice === 1) {
    computerSelection = "rock";
   } else if (choice === 2) {
    computerSelection = "paper"; 
   } else  {
    computerSelection = "scissors";
   }
   console.log(computerSelection);
   }
   
function playGame() {
    player = playerSelection;
    playChoice = player.toLowerCase();
    console.log(playChoice);
    if (playChoice === computerSelection) {
        let message = `computer picks , ${computerSelection} , its a Tie !`;
        return message;
        
    } else if (playChoice === "rock" && computerSelection === "paper" ) {
        let message = `computer picks ${computerSelection}, you lose`; 
        return message;

    } else if (playChoice === "paper" && computerSelection === "scissors") {
        let message = `computer picks ${computerSelection}, you lose!`
        return messsage;

    } else if (playChoice === "scissors" && computerSelection === "rock") {
        let message = `computer picks ${computerSelection}, you lose!`
        return message;

    }  else {
        let message = `computer picks ${computerSelection}, you win!`
        return message;
    }

    }

   getComputerChoice();
   playGame();
   console.log(playGame());

  



