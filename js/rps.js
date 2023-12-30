// Computer's choice
function getComputerChoice(computerChoice) {

    const rockPaperScissors = ["rock", "paper", "scissors"];

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    } computerChoice = rockPaperScissors[random(0, 2)];

    return computerChoice;
}

// Get player's choice

function getPlayerSelection() {
    let playerInput = prompt("Choose your weapon!");
    let result = playerInput.toLowerCase();
    return result;
} 

// Play one round and save the score
function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Draw!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper.";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Draw!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Draw!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors.";
    }
}

// For triggering the rounds and keeping track of the score
function game() {

let playerScore = 0
let computerScore = 0 
let round = 0

    for (let i = 0; i < 5; i++) {
        const result = playRound(getPlayerSelection(), getComputerChoice());
        if (result.includes("win")) {
            playerScore++;
            round++;
            console.log(`Round: ${round} | Player score: ${playerScore} | Computer score: ${computerScore}`);
        } else if (result.includes("lose")) {
            computerScore++;
            round++;
            console.log(`Round: ${round} | Player score: ${playerScore} | Computer score: ${computerScore}`);
        } else if (result.includes("Draw")) {
            round++;
            console.log(`Round: ${round} | Draw!`);
        }
    }

    console.log(`Final results: Player score: ${playerScore} | Computer score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game.");
    } else if (computerScore > playerScore) {
        console.log("Too bad! You lost the game.");
    } else if (playerScore === computerScore) {
        console.log("The game was an overall tie!");
    }
}


game();