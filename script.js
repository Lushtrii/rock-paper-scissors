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
    return "tie";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log(
      `The human is the winner! ${humanChoice} beats ${computerChoice}`,
    );
    return "human";
  } else {
    console.log(
      `The computer is the winner! ${computerChoice} beats ${humanChoice}`,
    );

    return "computer";
  }
}

function playGame() {
  const NUM_ROUNDS = 5;
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < NUM_ROUNDS; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  }
  console.log(`Final score: Human: ${humanScore} Computer: ${computerScore}`);
}

playGame();
