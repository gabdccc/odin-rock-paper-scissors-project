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
    let choice = prompt("Rock? Paper? Scissors?").toLowerCase();

    return choice
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

// create a function named as playGame
// playGame will be a 5 round game that will call the playRound function 5 times
// - move playRound and humanScore and computerScore inside the playGame function