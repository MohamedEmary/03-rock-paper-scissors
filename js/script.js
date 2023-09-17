const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

let history = { win: 0, lose: 0 }; // ["win", "lose"] it's better to be a dictionary

function playRound(playerSelection, computerSelection) {
  let msg;
  if (computerSelection === playerSelection) {
    msg = `Draw!\nYou and Computer both chose ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    msg = `You Lost the round!\n${computerSelection} beats ${playerSelection}`;
    history.lose++;
  } else {
    msg = `You Win the round!\n${playerSelection} beats ${computerSelection}`;
    history.win++;
  }
  return msg;
}

function writeResultDiv(resultMsg) {
  const resultDiv = document.querySelector("#result");
  resultDiv.textContent = resultMsg;
}

function showFinalResult() {
  if (history["win"] === 5) {
    writeResultDiv("You won the game");
  } else if (history["lose"] === 5) {
    writeResultDiv("You lost the game");
  }
}

function addButtonFunctionality(choice) {
  let resultMsg = playRound(choice, getComputerChoice());
  writeResultDiv(resultMsg);
  showFinalResult();
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function () {
  addButtonFunctionality("rock");
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function () {
  addButtonFunctionality("paper");
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", function () {
  addButtonFunctionality("scissors");
});
