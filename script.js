let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function getHumanChoice() {
  // Odin Project states we do not need to validate the input
  const choice = prompt("Enter either 'rock', 'paper', or 'scissors'");
  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie!");
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log(
      `The human is the winner! ${humanChoice} beats ${computerChoice}`,
    );
    playerScore++;
  } else {
    console.log(
      `The computer is the winner! ${computerChoice} beats ${humanChoice}`,
    );
    computerScore++;
  }
}
