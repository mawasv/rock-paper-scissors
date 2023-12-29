function getComputerChoice(computerChoice) {
    const arr = ["Rock", "Paper", "Scissors"];
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    } computerChoice = arr[random(0, 2)];
    return computerChoice;
}

console.log(getComputerChoice())