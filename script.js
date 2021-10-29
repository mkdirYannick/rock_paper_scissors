//This function will randomly generate rock, paper or scissors to play against the user.//
function computerPlay () {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let randomItem = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return computerSelection = randomItem;
}

//computerPlay();

function userInput() {
    let userChoice = prompt('Please Enter Rock, Paper or Scissors', 'Rock').toLowerCase();
    if (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {
        console.log('Please enter Rock, Paper or Scissors.')
    } else {
        return playerSelection = userChoice;
    }
}

//userInput();



//Tout ce qui est au dessus fonctionne : La fonction computerPlay génère aléatoirement un choix 
//et retourne ce choix dans la variable computerSelection.
//La fonction userInput demande à l'utilisateur de choisir rock, paper ou scissors et retourne le choix dans 
//la variable playerSelection. Maintenant il faut remplir la fonction playRound avec les input.

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats Rock.';
        } else {
            return 'You win! Rock beats Scissors.';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper beats Rock.';
        } else {
            return 'You lose! Scissors beats Paper.';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You win! Scissors beats Paper.';
        } else {
            return 'You lose! Rock beats Scissors.';
        }
    }       
}

//console.log('You played ' + playerSelection)
//console.log('The computer played ' + computerSelection)
//console.log(playRound(playerSelection, computerSelection));

// Everything above works as intended. The computer generate a random choice between rock, paper and scissors,
// and the player is prompt to choose as well. Then, the function playRound test each case to determine wether it 
// is a draw first, then win or lose, and return the appropriate statement. I've tested every single case possible and they all worked.

let userScore = 0;
let computerScore = 0;

function game() {
    computerPlay();
    userInput();
    playRound();
    let result = playRound(playerSelection, computerSelection);
    console.log('You played ' + playerSelection)
    console.log('The computer played ' + computerSelection)
    console.log(result);
    if (result.includes("win")) {
        return userScore += 1;
    } else if (result.includes("lose")) {
        return computerScore += 1;
    }
}

function match() {
    let numberOfRound = parseInt(prompt('Enter the number of round:', '3'));
    if (numberOfRound < 0 || numberOfRound > 100) {
        console.log('Please enter a valid number.');
    } else { 
        for (var i = 0; i < numberOfRound; i++) {
        game();
        }
        console.log('Your score: ' + userScore);
        console.log('Computer score: ' + computerScore);
        if (userScore > computerScore) {
            console.log('You win the game! Go humans!');
        } else if (userScore < computerScore) {
            console.log("Oh no! You lost to the machine :/");
        } else {
            console.log('The final result is a draw!');
        }
    }    
}

match();

