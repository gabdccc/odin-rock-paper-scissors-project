const playerScore = document.querySelector(".playerScore");
const enemyScore = document.querySelector(".enemyScore");
const scoreboard = document.querySelector(".scoreboard");
const startContainer = document.querySelector(".top");
const start = document.querySelector(".start");
const btnShow = document.querySelector(".butones");

const gameStatus = document.createElement("span");
const statusContainer = document.querySelector(".bottom");
statusContainer.appendChild(gameStatus);

const buttons = document.querySelectorAll("button");
const imgLogo = document.querySelectorAll(".img");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);

  if (random === 2) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanSelection, computerSelection) {
  statusContainer.classList.add("active");

  if (humanSelection === computerSelection) {
    gameStatus.textContent = "It's a Tie!";
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    gameStatus.textContent = "Your rock loses to computer's paper!";
    computerScore++;
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    gameStatus.textContent = "Your rock beats computer's scissors!";
    humanScore++;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    gameStatus.textContent = "Your paper beats computer's rock!";
    humanScore++;
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    gameStatus.textContent = "Your paper loses to computer's scissors!";
    computerScore++;
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    gameStatus.textContent = "Your scissors loses to computer's rock!";
    computerScore++;
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    gameStatus.textContent = "Your scissors beats computer's paper!";
    humanScore++;
  }

  playerScore.textContent = humanScore;
  enemyScore.textContent = computerScore;
}

start.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;

  btnShow.classList.add("active");
  start.classList.add("hide");
  scoreboard.classList.add("active");

  startContainer.style.pointerEvents = "none";

  statusContainer.classList.remove("active");

  playerScore.textContent = "Your score here!";
  enemyScore.textContent = "Computer score here!";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const human = button.name;
    const computer = getComputerChoice();

    playRound(human, computer);

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore > computerScore) {
        gameStatus.textContent = "YOU WIN!! COMPUTER LOSE!";
        playerScore.textContent = `Your score is ${humanScore}`;
        enemyScore.textContent = `Computer score is ${computerScore}`;
      } else {
        gameStatus.textContent = "YOU LOSE! COMPUTER WIN!!";
        playerScore.textContent = `Your score is ${humanScore}`;
        enemyScore.textContent = `Computer score is ${computerScore}`;
      }

      btnShow.classList.remove("active");
      start.classList.remove("hide");

      startContainer.style.pointerEvents = "auto";

      start.textContent = "Restart";
    }
  });
});

imgLogo.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.toggle("spin");
  });
});
