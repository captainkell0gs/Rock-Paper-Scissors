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
