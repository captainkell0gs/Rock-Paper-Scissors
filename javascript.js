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
console.log(getComputerChoice());