function getComputerChoice(computerChoice) {
    const rockPaperScissors = ["rock", "paper", "scissors"];
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    } computerChoice = rockPaperScissors[random(0, 2)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    if (playerSelection === rock.toLowerCase() && computerSelection === scissors.toLowerCase()) {
        return "You win! Rock beats scissors.";
    } else if (playerSelection === rock.toLowerCase() && computerSelection === paper.toLowerCase()) {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === rock.toLowerCase() && computerSelection === rock.toLowerCase()) {
        return "Draw!";
    } else if (playerSelection === paper.toLowerCase() && computerSelection === scissors.toLowerCase()) {
        return "You lose! Scissors beat paper.";
    } else if (playerSelection === paper.toLowerCase() && computerSelection === paper.toLowerCase()) {
        return "Draw!";
    } else if (playerSelection === paper.toLowerCase() && computerSelection === rock.toLowerCase()) {
        return "You win! Paper beats rock.";
    } else if (playerSelection === scissors.toLowerCase() && computerSelection === scissors.toLowerCase()) {
        return "Draw!";
    } else if (playerSelection === scissors.toLowerCase() && computerSelection === paper.toLowerCase()) {
        return "You win! Scissors beat paper.";
    } else if (playerSelection === scissors.toLowerCase() && computerSelection === rock.toLowerCase()) {
        return "You lose! Rock beats scissors.";
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
