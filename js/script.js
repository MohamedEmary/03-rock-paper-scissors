const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	return Math.floor(Math.random() * choices.length);
}

function play(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	console.log(`Computer Choice: ${computerSelection}`);
	console.log(`Player Choice: ${playerSelection}`);
	if (computerSelection === playerSelection) {
		return "Draw!";
	} else if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		return "Computer Win!";
	} else {
		return "Player Win!";
	}
}