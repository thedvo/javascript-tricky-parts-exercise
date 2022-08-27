/**  
 Guessing Game

Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. Every time you create a new game, it should select a new random number, and keep it secret from the player.

Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.

After a correct guess, the game ends.
 */

function guessingGame() {
	// selects a random number between 0-99
	const answer = Math.floor(Math.random() * 100);

	// initialize variables which determine if game is over and the num of guesses
	let isOver = false;
	let numGuesses = 0;

	return function guess(num) {
		if (isOver) return 'The game is over. You already won!';
		numGuesses++;
		// increment number of guesses immediately every time this function is run
		if (num === answer) {
			//  guess variable will be utilized for return statement
			// singular or plural depending on number of guesses
			const guess = numGuesses === 1 ? 'guess' : 'guesses';
			return `You win! You found ${num} in ${numGuesses} ${guess}.`;
		}
		if (num < answer) return `${num} is too low!`;
		if (num > answer) return `${num} is too high!`;
	};
}

module.exports = { guessingGame };
