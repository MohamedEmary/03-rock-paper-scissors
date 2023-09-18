const selections = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5;
function getComputerSelection() {
  const selection = selections[Math.floor(Math.random() * selections.length)];
  addSelectionImg(selection);
  return selection;
}

let scoreHistory = { playerScore: 0, computerScore: 0 };

function addSelectionImg(computerSelection = "", playerSelection = "") {
  let selection = "";
  let selectionImg;
  if (computerSelection === "") {
    selection = playerSelection;
    selectionImg = document.querySelector(`#player-selection-img`);
  } else {
    selection = computerSelection;
    selectionImg = document.querySelector(`#computer-selection-img`);
  }
  const imageSrc = `img/${selection}.png`;
  selectionImg.src = imageSrc;
}

function playGameRound(playerSelection) {
  let msg;
  const computerSelection = getComputerSelection();
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
  const resultDiv = document.querySelector("#result-text");
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

function handlePlayerSelection(selection) {
  addSelectionImg("", selection);
  playGameRound(selection);
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => handlePlayerSelection("rock"));

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => handlePlayerSelection("paper"));

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () =>
  handlePlayerSelection("scissors")
);

const githubIcon = document.querySelector(".fa-github");

githubIcon.addEventListener("mouseenter", function () {
  githubIcon.classList.add("fa-spin");
});

githubIcon.addEventListener("mouseleave", function () {
  githubIcon.classList.remove("fa-spin");
});
