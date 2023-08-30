const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	msg = `Computer Choice: ${computerSelection}\n`;
	msg += `Player Choice: ${playerSelection}\n`;
	if (computerSelection === playerSelection) {
		msg += "Draw!";
		return msg;
	} else if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		msg += "Computer Win!";
		return msg;
	} else {
		msg += "Player Win!";
		return msg;
	}
}

function game() {
	computerSelection = getComputerChoice();
	playerSelection = prompt("Enter rock paper or scissors");
	alert(play(playerSelection, computerSelection));
}

game();
