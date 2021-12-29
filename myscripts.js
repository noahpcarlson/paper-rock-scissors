let playerSelection = prompt('Choose').toLowerCase();

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

function playRound(
	computerSelection,
	playerSelection //Rock Choice
) {
	{
		if (computerSelection === 'Rock' && playerSelection === 'rock') {
			return 'Tie';
		}
		if (computerSelection === 'Paper' && playerSelection === 'rock') {
			return 'You lose! Paper beats Rock';
		}
		if (computerSelection === 'Scissors' && playerSelection === 'rock') {
			return 'You Win! Rock beats Scissors';
		}
	}

	//Paper Choice

	{
		if (computerSelection === 'Rock' && playerSelection === 'paper') {
			return 'You win! Paper beats rock';
		}
		if (computerSelection === 'Paper' && playerSelection === 'paper') {
			return 'Tie';
		}
		if (computerSelection === 'Scissors' && playerSelection === 'paper') {
			return 'You lose! Scissors beats Paper';
		}
	}

	{
		if (computerSelection === 'Rock' && playerSelection === 'scissors') {
			return 'You lose! Rock beats scissors';
		}
		if (computerSelection === 'Paper' && playerSelection === 'scissors') {
			return 'You Win! Scissors beats Paper';
		}
		if (computerSelection === 'Scissors' && playerSelection === 'scissors') {
			return 'Tie';
		}
	}
}

console.log(playRound(computerSelection(), playerSelection));
