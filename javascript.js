//initalize two variables for the playerChoice and computerChoice

let counter;
let computerSelection;
//initalize score counter for player and computer
let playerScore = 0;
let computerScore = 0;
// setup a variable for game result
let result;
//set variable to allow result of playGame function to be used to calculate score
let message;
// ask player for a choice rock, paper or scissors

function playerSelection() {
    let choice = prompt(" please enter rock, paper or scissors");
    playChoice = choice.toLowerCase();
}
//computer chooses rock, paper or scissors
function getComputerChoice() {
  let choice = Math.floor((Math.random() * 3) + 1);
  if (choice === 1) {
    return "rock";
   } else if (choice === 2) {
    return  "paper"; 
   } else (choice === 3) 
     return "scissors";
   
 }

//create function for 5 rounds of a game and declare winner or loser
function playFive() {
    
  for (counter = 0; counter <= 5; counter++){
    if (counter < 5) {
      playerSelection();  
  
      getComputerChoice();
      playGame();
      
      score();
    } else if (counter = 5) {
      
      if (computerScore < playerScore) {
        console.log("Player wins !");
      } else 
        console.log("Computer Wins");
    }
  
  console.log(counter);

  } 
} 

//compare playerSelection and computerSelection to declare tie/winner/loser   
  function playGame() {
      computerSelection = getComputerChoice();
    
      
      
    
       
      if (playChoice === computerSelection) {
        alert(`computer picks  ${computerSelection} , its a Tie !`);
        message = "Tie";
        return "Tie";
        
      } else if (playChoice === "rock" && computerSelection === "paper" ) {
          alert(`computer picks ${computerSelection}, you lose`); 
          message = "Lose"
          return "Lose";

      } else if (playChoice === "paper" && computerSelection === "scissors") {
          alert(`computer picks ${computerSelection}, you lose!`);
          message = "Lose"
          return "Lose";

      } else if (playChoice === "scissors" && computerSelection === "rock") {
          alert(`computer picks ${computerSelection}, you lose!`);
          message = "Lose"
          return "Lose";

      }  else {
          alert(`computer picks ${computerSelection}, you win!`);
          message = "Win"
          return "Win";
      }
      
  }
//calculate score of one game
function score() {
  result = message;
  
  if (result === "Win") {
    playerScore++ ;
  } else if (result === "Lose") 
    computerScore++ ;
  
  console.log(computerScore, playerScore);
}



   
   playFive();
   
   

  


