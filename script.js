/**
 * Simulates the computer's move.
 * 
 * @returns either rock, paper, or scissors
 */
function computerPlay() {
    rng = Math.floor(Math.random() * 3);
    if (rng == 0) {
        return "rock";
    } else if (rng == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
/**
 * Simulates a single round.
 * 
 * @param playerSelection 
 * @param computerSelection 
 * @returns result of the game
 */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Draw!";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! " + playerSelection + " beats " + computerSelection;
        } else {
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }

    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! " + playerSelection + " beats " + computerSelection;
        } else {
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }
    } else {
        if (computerSelection === "rock") {
            return "You win! " + playerSelection + " beats " + computerSelection;
        } else {
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("enter selection");
        result = playRound(playerSelection, computerPlay());
        console.log(result);
    }
}