const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let msg;
  if (computerSelection === playerSelection) {
    msg = `Draw!\nYou and Computer both chose ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    msg = `You Lose!\n${computerSelection} beats ${playerSelection}`;
    return msg;
  } else {
    msg = `You Win!\n${playerSelection} beats ${computerSelection}`;
  }
  return msg;
}

function playGame() {
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("Enter rock paper or scissors");
  alert(play(playerSelection, computerSelection));
}

game();
