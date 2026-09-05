// create a function named as getComputerChoice
// - use Math.random
// - return a random number that is equal to ("rock", "paper", "scissors")
// >> console.log to make sure the function is working correctly <<

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
// create a function named as getHumanChoice
// - use prompt to ask the user to enter either rock, paper, or scissors
// - return the user's input
// >> console.log to make sure the function is working correctly <<
// -- make the parameter case insensitive by using the toLowerCase() method

function getHumanChoice(choice) {
  choice = choice.toLowerCase().trim();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  }
}
// create another two variables named as humanScore and computerScore
// - initialize both variables to 0

// create a function named as playRound
// - define the function to take two parameters: humanChoice and computerChoice like (playRound(humanChoice, computerChoice))
// - using if statements, compare the humanChoice and computerChoice to determine the winner of the round
// - by this string "You lose! Paper beats Rock" or "You win! Scissors beats Paper" or "It's a tie!" and return the string
// - increment the humanScore or computerScore based on the winner of the round

// create a function named as playGame
// playGame will be a 5 round game that will call the playRound function 5 times
// - move playRound and humanScore and computerScore inside the playGame function

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

const dis = document.createElement("span");

const playerScore = document.querySelector(".playerScore");
const enemyScore = document.querySelector(".enemyScore");
const scoreboard = document.querySelector(".scoreboard");
const thirdContain = document.querySelector(".bottom");
const startTop = document.querySelector(".top");
const start = document.querySelector(".start");
const btnShow = document.querySelector(".butones");
const buttons = document.querySelectorAll("button");

thirdContain.appendChild(dis);

start.addEventListener("click", () => {
  btnShow.classList.add("active");
  start.classList.add("hide");
  scoreboard.classList.add("active");

  startTop.style.pointerEvents = "none";

  thirdContain.classList.remove("active");

  playerScore.textContent = "Your score here!";
  enemyScore.textContent = "Computer score here!";
});

function playRound(humanSelection, computerSelection) {
  thirdContain.classList.add("active");
  if (humanSelection === computerSelection) {
    dis.textContent = "It's a Tie!";
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    dis.textContent = "Your rock loses to computer's paper!";
    computerScore++;
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    dis.textContent = "Your rock beats computer's scissors!";
    humanScore++;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    dis.textContent = "Your paper beats computer's rock!";
    humanScore++;
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    dis.textContent = "Your paper loses to computer's scissors!";
    computerScore++;
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    dis.textContent = "Your scissors loses to computer's rock!";
    computerScore++;
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    dis.textContent = "Your scissors beats computer's paper!";
    humanScore++;
  }
  // console.log(`Round: ${rounds}`);
  playerScore.textContent = humanScore;
  enemyScore.textContent = computerScore;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(getHumanChoice(button.name), getComputerChoice());
    rounds++;

    if (humanScore > 5 && computerScore > 5) {
    } else if (humanScore === 5 || computerScore === 5) {
      if (humanScore > computerScore) {
        dis.textContent = "YOU WIN!! COMPUTER LOSE!";
        playerScore.textContent = `Your score is ${humanScore}`;
        enemyScore.textContent = `Computer score is ${computerScore}`;
      } else {
        dis.textContent = "YOU LOSE! COMPUTER WIN!!";
        playerScore.textContent = `Your score is ${humanScore}`;
        enemyScore.textContent = `Computer score is ${computerScore}`;
      }

      humanScore = 0;
      computerScore = 0;
      rounds = 0;

      btnShow.classList.remove("active");
      start.classList.remove("hide");

      startTop.style.pointerEvents = "auto";

      start.textContent = "Restart";
    }
    console.log(rounds);
  });
});

const imgLogo = document.querySelectorAll(".img");

imgLogo.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.toggle("spin");
  });
});
