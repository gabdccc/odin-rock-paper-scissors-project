// create a function named as getComputerChoice
// - use Math.random 
// - return a random number that is equal to ("rock", "paper", "scissors")
// >> console.log to make sure the function is working correctly <<

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);

    if (random === 2) {
        return "rock";
    } if (random === 1) {
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

function getHumanChoice() {
    let choice = prompt("Rock? Paper? Scissors?");

    if (choice === "") {
        choice = "Please put something in the prompt:(";
    } else if (choice === null) {
        choice = "Okay, bye!";
    } 
    return choice.toLowerCase();   
}
// create another two variables named as humanScore and computerScore
// - initialize both variables to 0

let humanScore = 0;
let computerScore = 0;

// create a function named as playRound
// - define the function to take two parameters: humanChoice and computerChoice like (playRound(humanChoice, computerChoice))
// - using if statements, compare the humanChoice and computerChoice to determine the winner of the round
// - by this string "You lose! Paper beats Rock" or "You win! Scissors beats Paper" or "It's a tie!" and return the string
// - increment the humanScore or computerScore based on the winner of the round

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {
    
    if (humanSelection === "rock" && computerSelection === "rock" || 
        humanSelection === "paper" && computerSelection === "paper" ||
        humanSelection === "scissors" && computerSelection === "scissors") {
        console.log("It's a Tie!")
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        console.log("Rock loses to Paper!")
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock beats Scissors!")
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("Paper beats Rock!")
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        console.log("Paper loses to Scissors!")
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        console.log("Scissors loses to Rock")
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors beats paper")
    } else {
        console.log(">>Rock, Paper, Scissors<< in the prompt box")
    }
}

playRound(humanSelection, computerSelection);
// create a function named as playGame
// playGame will be a 5 round game that will call the playRound function 5 times
// - move playRound and humanScore and computerScore inside the playGame function