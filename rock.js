const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultMessage = document.getElementById('resultMessage');
const resetButton = document.getElementById('reset');

const choices = ['rock', 'paper', 'scissors'];

let userChoice;
let computerChoice;

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

resetButton.addEventListener('click', resetGame);

function playGame(choice) {
    userChoice = choice;
    computerChoice = getComputerChoice();
    
    userChoiceDisplay.textContent = `Your choice: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer's choice: ${computerChoice}`;
    
    const result = getResult(userChoice, computerChoice);
    resultMessage.textContent = `Result: ${result}`;
    
    resetButton.style.display = 'block';
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(user, computer) {
    if (user === computer) {
        return "It's a draw!";
    }
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function resetGame() {
    userChoiceDisplay.textContent = "Your choice: ";
    computerChoiceDisplay.textContent = "Computer's choice: ";
    resultMessage.textContent = "Result: ";
    resetButton.style.display = 'none';
}
