function getComputerChoice() {
    const choices = "rock, paper, scissors"
    if (Math.random() < 0.33) {
        return "rock";
    } else if (Math.random() < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
        const humanChoice = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
            return "You lose!";
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scisors" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissors") {
            return "You Win!";
            humanScore++;
        } else {
            return "Tie!";
        }
}
