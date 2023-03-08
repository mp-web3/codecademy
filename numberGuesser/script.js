let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()*10)
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if ((humanGuess >= 0) && (humanGuess <= 9 )) {
        if (Math.abs(humanGuess - targetGuess) < Math.abs(computerGuess - targetGuess)) {
            return true
        } else {
            return false
        }
    } else {
        alert('number out of range');
    }
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore ++;
    } else {
        computerScore ++;
    }
}

const advanceRound = () => {
    currentRoundNumber ++;
}