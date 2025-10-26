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
  let humanScore = 0;
  let computerScore = 0;

  const rockButton = document.createElement("button");
  rockButton.textContent = "Rock";
  const paperButton = document.createElement("button");
  paperButton.textContent = "Paper";
  const scissorsButton = document.createElement("button");
  scissorsButton.textContent = "Scissors";

  rockButton.addEventListener("click", () => {
    const result = playRound("Rock", getComputerChoice());
    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  });
  paperButton.addEventListener("click", () => {
    const result = playRound("Paper", getComputerChoice());
    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  });
  scissorsButton.addEventListener("click", () => {
    const result = playRound("Scissors", getComputerChoice());
    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  });

  const bodyElem = document.querySelector("body");
  bodyElem.appendChild(rockButton);
  bodyElem.appendChild(paperButton);
  bodyElem.appendChild(scissorsButton);
}

playGame();
