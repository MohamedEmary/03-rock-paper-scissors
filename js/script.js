const selections = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 2;
const scoreHistory = { playerScore: 0, computerScore: 0 };

function getComputerSelection() {
  const selection = selections[Math.floor(Math.random() * selections.length)];
  addSelectionImg(selection);
  return selection;
}

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
  // const imageSrc = `img/${selection}.png`;
  selectionImg.src = `img/${selection}.png`;
  selectionImg.alt = `${selection} image`;
  // const button = document.querySelector("button");
  // selectionImg.style.backgroundColor = "rgba(43, 54, 73, 0.997)";
  // selectionImg.style.borderRadius = "10px";
  // selectionImg.style.border = "10px solid rgba(43, 54, 73, 0.997)";
}

function writeResults(resultMsg) {
  const playerDiv = document.querySelector("#player-p-text");
  const computerDiv = document.querySelector("#computer-p-text");
  playerDiv.textContent = `Player: ${scoreHistory.playerScore}`;
  computerDiv.textContent = `Computer: ${scoreHistory.computerScore}`;
  const resultDiv = document.querySelector("#result-text");
  resultDiv.innerHTML = resultMsg;
  if (isGameOver()) {
    let roundRes = document.querySelector("#round-res");
    roundRes.remove();
    resultDiv.innerHTML +=
      scoreHistory.playerScore > scoreHistory.computerScore
        ? `<p class="final-res">Player Win The Game</p>`
        : `<p class="final-res">Computer Win The Game</p>`;
    const selectionButtons = document.querySelectorAll("#buttons button");
    const buttonsDiv = document.querySelector("#buttons");
    selectionButtons.forEach((btn) => (btn.style.display = "none"));
    buttonsDiv.innerHTML += `<button id="new-game" style="font-size:larger; font-weight:bold; color:white">New Game</button>`;
    const newGameButton = document.querySelector("#new-game");
    newGameButton.addEventListener("click", () => {
      const selectionButtons = document.querySelectorAll("#buttons button"); // not the same scope as the one above
      selectionButtons.forEach((btn) => (btn.style.display = "block"));
      scoreHistory.playerScore = 0;
      scoreHistory.computerScore = 0;
      newGameButton.style.display = "none";

      const rockButton = document.querySelector("#rock");
      rockButton.addEventListener("click", () =>
        handleSelectionButtons("rock")
      );

      const paperButton = document.querySelector("#paper");
      paperButton.addEventListener("click", () =>
        handleSelectionButtons("paper")
      );

      const scissorsButton = document.querySelector("#scissors");
      scissorsButton.addEventListener("click", () =>
        handleSelectionButtons("scissors")
      );
    });
  }
}

function playGameRound(playerSelection) {
  if (!isGameOver()) {
    let roundResultMsg;
    const computerSelection = getComputerSelection();
    const winConditions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };
    if (computerSelection === playerSelection) {
      roundResultMsg = `<p id="round-res">Draw!</p>`;
    } else if (winConditions[playerSelection] === computerSelection) {
      roundResultMsg = `<p id="round-res">You Win</p>`;
      scoreHistory.playerScore++;
    } else {
      roundResultMsg = `<p id="round-res">You Lost</p>`;
      scoreHistory.computerScore++;
    }
    writeResults(roundResultMsg);
  }
}

function isGameOver() {
  return (
    scoreHistory.playerScore === MAX_ROUNDS ||
    scoreHistory.computerScore === MAX_ROUNDS
  );
}

// =================================================

function handleSelectionButtons(PlayerSelection) {
  addSelectionImg("", PlayerSelection);
  playGameRound(PlayerSelection);
}

// code can be improved by looping on the buttons in buttons
// div with i loop variable and passing selections[i] to
// playGameRound(selections[i]) function

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => handleSelectionButtons("rock"));

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => handleSelectionButtons("paper"));

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () =>
  handleSelectionButtons("scissors")
);

const githubIcon = document.querySelector(".fa-github");

githubIcon.addEventListener("mouseenter", function () {
  githubIcon.classList.add("fa-spin");
});

githubIcon.addEventListener("mouseleave", function () {
  githubIcon.classList.remove("fa-spin");
});
