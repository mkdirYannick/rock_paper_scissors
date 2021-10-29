//Randomly generate a string "rock", "paper" or "scissors".//
function computerPlay () {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let randomItem = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return computerSelection = randomItem;
}


//Asks user to input rock, paper or scissors, and converts the input to lower case.//
function userInput() {
    let userChoice = prompt('Please Enter Rock, Paper or Scissors', 'Rock').toLowerCase();
    if (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {
        console.log('Please enter Rock, Paper or Scissors.')
    } else {
        return playerSelection = userChoice;
    }
}

//Plays one round once the playerSelection and computerSelection are defined.//
//Returns the appropriate statement if the user win, or draw against the computer.//
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

let userScore = 0;
let computerScore = 0;


//The function playGame puts together the above functions: The computerPlay generates a random choice,//
//the userInput asks a user to input their choice, and playRound plays a round and return a win, lose a draw statment.//
//The playGame function return the updated score of the user and/or computer after one round.// 
function playGame() {
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

//Plays a match with multiple rounds, keeps score, and announce the winner at the end.//
function playMatch() {
    let numberOfRound = parseInt(prompt('Enter the number of round:', '3'));
    if (numberOfRound < 0 || numberOfRound > 100) {
        console.log('Please enter a valid number.');
    } else { 
        for (var i = 0; i < numberOfRound; i++) {
        playGame();
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

playMatch();

