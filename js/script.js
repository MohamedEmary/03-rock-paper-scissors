const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	return Math.floor(Math.random() * choices.length);
}

