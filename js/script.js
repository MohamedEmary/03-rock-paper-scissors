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
    msg = `You Lost the round!\n${computerSelection} beats ${playerSelection}`;
    return msg;
  } else {
    msg = `You Win the round!\n${playerSelection} beats ${computerSelection}`;
  }
  return msg;
}

// Each game consists of a number of rounds specified by user
function playGame() {
  let history = { win: 0, lose: 0 }; // ["win", "lose"] it's better to be a dictionary
  numOfGames = parseInt(
    prompt("Enter the number of rounds you want to play", "")
  );
  for (let i = 0; i < numOfGames; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Enter rock paper or scissors");
    let msg = playRound(playerSelection, computerSelection);
    alert(msg);
    if (msg.includes("Win")) {
      history.win++;
    } else if (msg.includes("Lost")) {
      history.lose++;
    }
  }
  alert(getWinner(history));
}

function getWinner(history) {
  let { win, lose } = history;
  if (win > lose) {
    return "You Won! Congrats.";
  } else if (lose > win) {
    return "You Lost The Game! Good luck next time.";
  } else {
    return "Draw!";
  }
}

playGame();
