const startGameBtn = document.getElementById('start-game-btn');

const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';
const default_User_Choice = 'Rock';
const result_Draw = 'DRAW.';
const result_Player_Win = 'Player Win.';
const result_Computer_Win = 'Computer Win.';

let gameIsRunning = false;

const getPlayerChoice = function () {
	const selection = prompt(`${rock}, ${paper} or ${scissors}?`, '').toUpperCase();

	if (selection !== rock && selection !== paper && selection !== scissors) {
		alert(`Invalid choice! Default ${default_User_Choice} has been assign to you!`);
		return default_User_Choice;
	}
	return selection;
};

const getComputerChoice = function () {
	const randomValue = Math.random();

	if (randomValue < 0.34) {
		return 'ROCK';
	} else if (randomValue < 0.67) {
		return 'PAPER';
	} else {
		return 'SCISSORS';
	}
};

const getWinner = function (cChoice, pChoice) {
	if (cChoice === pChoice) {
		return result_Draw;
	} else if ((cChoice === rock && pChoice === paper) || (cChoice == scissors && pChoice === rock) || (cChoice === paper && pChoice === scissors)) {
		return result_Player_Win;
	} else if ((pChoice === rock && cChoice === paper) || (pChoice == scissors && cChoice === rock) || (pChoice === paper && cChoice === scissors)) {
		return result_Computer_Win;
	}
};

startGameBtn.addEventListener('click', function () {
	if (gameIsRunning) {
		return;
	} else {
		gameIsRunning = true;
	}
	console.log('Game is Starting....');
	const playerChoice = getPlayerChoice();
	console.log('Player Choice is', playerChoice);
	const computerChoice = getComputerChoice();
	console.log('Computer Choice is', computerChoice);
	const winner = getWinner(computerChoice, playerChoice);
	console.log(winner);
	gameIsRunning = false;
});
