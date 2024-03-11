//initalize two variables for the playerChoice and computerChoice
let playerChoice = prompt("Please enter Rock, Paper, or Scissors") ;
let computerChoice ;

// computer chooses rock, paper or scissors
function getComputerChoice() {
  let choice = Math.floor((Math.random() * 3) + 1);
  if (choice === 1) {
    computerChoice = "rock";
   } else if (choice === 2) {
    computerChoice = "paper"; 
   } else  {
    computerChoice = "scissors";
   }
   console.log(computerChoice);
   }
   
   console.log(getComputerChoice());





