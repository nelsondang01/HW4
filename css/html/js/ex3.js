"use strict";

/*
Exercise 3:
Generate random number 1-100 inclusive
Prompt user to guess (assume valid entry)
After each guess, console:
- Too low, guess again
- Too high, guess again
- Correct + attempts count
*/

const secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

let guess = Number.parseInt(prompt("Guess a number between 1 and 100:"), 10);
attempts++;

while (guess !== secret) {
  if (guess < secret) {
    console.log("Too low, guess again");
  } else {
    console.log("Too high, guess again");
  }

  guess = Number.parseInt(prompt("Guess again:"), 10);
  attempts++;
}

console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
