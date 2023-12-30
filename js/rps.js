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

let = playerScore = 0
let = computerScore = 0

for (let i = 0; i < 5; i++) {
    const result = playRound(getPlayerSelection(), getComputerChoice());
    if (result.includes("win")) {
        playerScore++;
        console.log(`Player score: ${playerScore} | Computer score: ${computerScore}`);
    } else if (result.includes("lose")) {
        computerScore++;
        console.log(`Player score: ${playerScore} | Computer score: ${computerScore}`);
    }

// Announcement of the final results
console.log(`Final results: ${playerScore} | Computer score: ${computerScore}`);
if (playerScore > computerScore) {
    console.log("Congratulations! You win the game.");
} else if (computerScore > playerScore) {
    console.log("Too bad! You lost the game.");
} else if (playerScore === computerScore) {
    console.log("The game was an overall tie!");
}

}

}

game();