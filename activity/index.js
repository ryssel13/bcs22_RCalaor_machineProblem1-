const prompt = require('prompt-sync')({sight: true});

const randomNumber = Math.floor(Math.random() * 100) + 1;

const maxTries = 10;

let guessedNum, tries = 0;

while (true){
  tries++;
  guessedNum = parseInt(prompt('Guess a number between 1 and 100: '));
  if (guessedNum < randomNumber) {
    console.log('Too low! Guess again.');
  } else if (guessedNum > randomNumber) {
    console.log('Too high! Guess again.');
  } else {
    console.log(`Congratulations! You guessed the number in ${tries} tries`);
  }

  if (tries === maxTries) {
    console.log(`Sorry, you ran out of tries. The number was ${randomNumber}.`);
    break;
  }
}
