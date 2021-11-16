let userScore = 0;
let computerScore = 0;
let playerSelection = '';

//Declaration of variables for future DOM manipulations
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const score = document.getElementById('score');
const resultDisplay = document.getElementById('resultDisplay');
const userResult = document.getElementById('userResult');
const computerResult = document.getElementById('computerResult');
const userScoreDisplay = document.getElementById('userScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');


//Randomly generate a string "rock", "paper" or "scissors".
function computerPlay() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let randomItem = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return computerSelection = randomItem;
}


//Returns the appropriate statement if the user win, lose or draw against the computer.//
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose this round! Paper beats Rock.';
        } else {
            return 'You win this round! Rock beats Scissors.';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win this round! Paper beats Rock.';
        } else {
            return 'You lose this round! Scissors beats Paper.';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You win this round! Scissors beats Paper.';
        } else {
            return 'You lose this round! Rock beats Scissors.';
        }
    }       
}

function finalResult() {
    if (userScore === 5) {
        resultDisplay.innerHTML = 'You win the game! Congratulations!';
        userScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        resultDisplay.innerHTML = 'Oh no, you lost! Do you want to try again?';
        computerScore = 0;
        userScore = 0;
    }
}

function playGame() {
    computerPlay();
    playRound();
    let result = playRound(playerSelection, computerSelection);
    if (result.includes("win")) {
        userScore += 1;
    } else if (result.includes("lose")) {
        computerScore += 1;
    }
    userResult.innerHTML = `You played ${playerSelection}.`;
    computerResult.innerHTML = `The computer played ${computerSelection}.`;
    resultDisplay.innerHTML = result;
    userScoreDisplay.innerHTML = `Your score: ${userScore}`;
    computerScoreDisplay.innerHTML = `Computer's score: ${computerScore}`;
    finalResult();
}


rock.addEventListener('click', function() {
    playerSelection = 'rock';
    playGame();
});

paper.addEventListener('click', function() {
    playerSelection = 'paper';
    playGame();
});

scissors.addEventListener('click', function() {
    playerSelection = 'scissors';
    playGame();
});