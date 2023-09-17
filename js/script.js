let gameOver = false;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

let scoreHistory = { playerScore: 0, computerScore: 0 };

function playRound(playerSelection) {
  let msg;
  let computerSelection = getComputerChoice();
  if (computerSelection === playerSelection) {
    msg = `Draw!<br>You and Computer both chose ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    msg = `You Lost the round!<br>${computerSelection} beats ${playerSelection}`;
    scoreHistory.computerScore++;
  } else {
    msg = `You Win the round!<br>${playerSelection} beats ${computerSelection}`;
    scoreHistory.playerScore++;
  }
  if (scoreHistory.playerScore === 5 || scoreHistory.computerScore === 5) {
    gameOver = true;
  }
  writeResultDiv(msg);
}

function writeResultDiv(resultMsg) {
  const resultDiv = document.querySelector("#result");
  resultDiv.innerHTML = resultMsg;
  resultDiv.innerHTML += `<br>Player Score: ${scoreHistory.playerScore}<br>`;
  resultDiv.innerHTML += `Computer Score: ${scoreHistory.computerScore}<br>`;
  if (gameOver) {
    resultDiv.innerHTML +=
      scoreHistory.playerScore > scoreHistory.computerScore
        ? `Player Win The Game`
        : `Computer Win The Game`;
    scoreHistory = { playerScore: 0, computerScore: 0 };
    gameOver = false;
  }
}

function handleClick(choice) {
  playRound(choice);
  showFinalResult();
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function () {
  handleClick("rock");
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function () {
  handleClick("paper");
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", function () {
  handleClick("scissors");
});
