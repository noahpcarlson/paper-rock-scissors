function playerSelection() {
	let playerSelection = prompt('Choose').toLowerCase();
	return playerSelection;
}

function computerSelection() {
	let computerSelection = Math.floor(Math.random() * 3) + 1;

	if (computerSelection === 1) {
		computerSelection = 'Rock';
	} else if (computerSelection === 2) {
		computerSelection = 'Paper';
	} else if (computerSelection === 3) {
		computerSelection = 'Scissors';
	}
	return computerSelection;
}

let computerScore = 0;
let playerScore = 0;

function playRound(computerSelection, playerSelection) {
	{
		if (computerSelection === 'Rock' && playerSelection === 'rock') {
			return 'Tie';
		}
		if (computerSelection === 'Paper' && playerSelection === 'rock') {
			computerScore++;
			return 'You lose! Paper beats Rock';
		}
		if (computerSelection === 'Scissors' && playerSelection === 'rock') {
			playerScore++;
			return 'You Win! Rock beats Scissors';
		}
	}

	//Paper Choice

	{
		if (computerSelection === 'Rock' && playerSelection === 'paper') {
			playerScore++;
			return 'You win! Paper beats rock';
		}
		if (computerSelection === 'Paper' && playerSelection === 'paper') {
			return 'Tie';
		}
		if (computerSelection === 'Scissors' && playerSelection === 'paper') {
			computerScore++;
			return 'You lose! Scissors beats Paper';
		}
	}

	{
		if (computerSelection === 'Rock' && playerSelection === 'scissors') {
			computerScore++;
			return 'You lose! Rock beats scissors';
		}
		if (computerSelection === 'Paper' && playerSelection === 'scissors') {
			playerScore++;
			return 'You Win! Scissors beats Paper';
		}
		if (computerSelection === 'Scissors' && playerSelection === 'scissors') {
			return 'Tie';
		}
	}
}

function playGame() {
	console.log(playRound(computerSelection(), playerSelection()));
	console.log(playRound(computerSelection(), playerSelection()));
	console.log(playRound(computerSelection(), playerSelection()));
	console.log(playRound(computerSelection(), playerSelection()));
	console.log(playRound(computerSelection(), playerSelection()));
}

playGame();
