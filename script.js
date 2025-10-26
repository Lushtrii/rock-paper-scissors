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

function updateScoreState(scoreState, winner) {
  if (winner === "human") {
    scoreState.humanScore++;
  } else if (winner === "computer") {
    scoreState.computerScore++;
  }
}

function updateDisplayedScore(scoreState) {
  const resultsDiv = document.querySelector("#results");
  resultsDiv.textContent = `Human score: ${scoreState.humanScore} Computer score: ${scoreState.computerScore}`;
}

function createChoiceButton(choice, scoreState) {
  const button = document.createElement("button");
  button.textContent = choice;
  button.addEventListener("click", () => {
    const result = playRound(choice, getComputerChoice());
    updateScoreState(scoreState, result);
    updateDisplayedScore(scoreState);
  });
  return button;
}

function playGame() {
  const scoreState = {
    humanScore: 0,
    computerScore: 0,
  };

  const rockButton = createChoiceButton("Rock", scoreState);
  const paperButton = createChoiceButton("Paper", scoreState);
  const scissorsButton = createChoiceButton("Scissors", scoreState);

  const resultsDiv = document.createElement("div");
  resultsDiv.id = "results";

  const bodyElem = document.querySelector("body");
  bodyElem.appendChild(rockButton);
  bodyElem.appendChild(paperButton);
  bodyElem.appendChild(scissorsButton);
  bodyElem.appendChild(resultsDiv);
  updateDisplayedScore(scoreState);
}

playGame();
