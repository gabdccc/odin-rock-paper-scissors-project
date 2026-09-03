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
  if (choice === null) {
    return null;
  }

  choice = choice.toLowerCase().trim();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  }
  return getHumanChoice();
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
let rounds = 1;
let gameExited = false;

const body = document.querySelector(".ans");

const dis = document.createElement("div");
dis.className = "result";

body.appendChild(dis);

const playerScore = document.createElement("p");
const enemyScore = document.createElement("p");
body.appendChild(playerScore);
body.appendChild(enemyScore);

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    dis.textContent = "It's a Tie!";
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    dis.textContent = "Rock loses to Paper!";
    computerScore++;
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    dis.textContent = "Rock beats Scissors!";
    humanScore++;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    dis.textContent = "Paper beats Rock!";
    humanScore++;
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    dis.textContent = "Paper loses to Scissors!";
    computerScore++;
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    dis.textContent = "Scissors loses to Rock!";
    computerScore++;
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    dis.textContent = "Scissors beats paper!";
    humanScore++;
  }
  // console.log(`Round: ${rounds}`);
  playerScore.textContent = humanScore;
  enemyScore.textContent = computerScore;
}

function gameRounds() {
  if (rounds <= 5) {
    const humanChoice = getHumanChoice();

    if (humanChoice === null) {
      gameExited = true;
      return;
    }
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    rounds++;
    gameRounds();
  }
}

console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);

if (gameExited) {
  console.log("Game exited before completion.");
} else if (humanScore > computerScore) {
  console.log("You win the game!");
} else if (humanScore < computerScore) {
  console.log("You lose the game!");
} else {
  console.log("It's a tie game!");
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(getHumanChoice(button.name), getComputerChoice());
  });
});
