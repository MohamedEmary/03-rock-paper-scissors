const choices = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5;
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

let scoreHistory = { playerScore: 0, computerScore: 0 };

function playGameRound(playerSelection) {
  let msg;
  const computerSelection = getComputerChoice();
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (computerSelection === playerSelection) {
    msg = `<p>Draw!<br>You and Computer both chose ${computerSelection}</p>`;
  } else if (winConditions[playerSelection] === computerSelection) {
    msg = `<p>You Win the round!<br>${playerSelection} beats ${computerSelection}</p>`;
    scoreHistory.playerScore++;
  } else {
    msg = `<p>You Lost the round!<br>${computerSelection} beats ${playerSelection}</p>`;
    scoreHistory.computerScore++;
  }
  writeResultDiv(msg);
}

function isGameOver() {
  return (
    scoreHistory.playerScore === MAX_ROUNDS ||
    scoreHistory.computerScore === MAX_ROUNDS
  );
}

function writeResultDiv(resultMsg) {
  const resultDiv = document.querySelector("#result");
  resultDiv.innerHTML = resultMsg;
  resultDiv.innerHTML += `<p>Player Score: ${scoreHistory.playerScore}</p>`;
  resultDiv.innerHTML += `<p>Computer Score: ${scoreHistory.computerScore}</p>`;
  if (isGameOver()) {
    resultDiv.innerHTML +=
      scoreHistory.playerScore > scoreHistory.computerScore
        ? `<p>Player Win The Game</p>`
        : `<p>Computer Win The Game</p>`;
    scoreHistory = { playerScore: 0, computerScore: 0 };
  }
}

function handlePlayerSelection(choice) {
  playGameRound(choice);
  showFinalResult();
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => handlePlayerSelection("rock"));

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => handlePlayerSelection("paper"));

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () =>
  handlePlayerSelection("scissors")
);
