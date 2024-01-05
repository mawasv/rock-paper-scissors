// Get player's choice

/* function getPlayerSelection() {
    let playerInput = prompt("Choose your weapon!");
    let result = playerInput.toLowerCase();
    return result;
} ; */

let playerScore = 0
let computerScore = 0 
let round = 0

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const results = document.querySelector(".results");
const runningScore = document.querySelector(".runningscore");
const p = document.createElement("p");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");

// Computer's choice
const getComputerChoice = () => {
    const rockPaperScissors = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * rockPaperScissors.length);
    return rockPaperScissors[randomNum];
}

// Play one round and save the score
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        p.innerText = "You win! Rock crushes scissors.";
        results.appendChild(p);
        playerScore++;
        round++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        p.innerText ="You lose! Paper covers rock.";
        results.appendChild(p);
        computerScore++;
        round++;
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        p.innerText = "Draw!";
        results.appendChild(p);
        round++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        p.innerText = "You lose! Scissors cut paper.";
        results.appendChild(p);
        computerScore++;
        round++;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        p.innerText = "Draw!";
        results.appendChild(p);
        round++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        p.innerText = "You win! Paper covers rock.";
        results.appendChild(p);
        playerScore++;
        round++;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        p.innerText = "Draw!";
        results.appendChild(p);
        round++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        p.innerText = "You win! Scissors cut paper.";
        results.appendChild(p);
        playerScore++;
        round++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        p.innerText = "You lose! Rock crushes scissors.";
        results.appendChild(p);
        computerScore++;
        round++;
    }
}

const checkForWin = (playerScore, computerScore) => {
    if (playerScore === 5) {
        h2.innerText = `Congratulations! It only took you ${round} rounds to beat that old crab of a computer. You won ${playerScore} to ${computerScore}.`;
        results.append(h2);
        results.removeChild(p);
    } else if (computerScore === 5) {
        h2.innerText = `Too bad! You got beaten by an old crab in ${round} rounds. You lost ${playerScore} to ${computerScore}.`;
        results.append(h2);
        results.removeChild(p);
    }
}

const showRunningScore = (playerScore, computerScore) => {
    h1.innerText = `Score: ${playerScore} | ${computerScore}`;
    runningScore.appendChild(h1);
}

rockButton.addEventListener("click", () => {
    const computerSelect = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelect);
    checkForWin(playerScore, computerScore);
    showRunningScore(playerScore, computerScore);
})

paperButton.addEventListener("click", () => {
    const computerSelect = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelect);
    checkForWin(playerScore, computerScore);
    showRunningScore(playerScore, computerScore);
})

scissorsButton.addEventListener("click", () => {
    const computerSelect = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelect);
    checkForWin(playerScore, computerScore);
    showRunningScore(playerScore, computerScore);
})



// For triggering the rounds and keeping track of the score
/* function game() {


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


game(); */