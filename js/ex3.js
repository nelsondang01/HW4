"use strict";

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

let guess = Number.parseInt(prompt("Guess a number between 1 and 100:"), 10);
attempts++;

while (guess !== randomNumber) {

    if (guess < randomNumber) {
        console.log("Too low, guess again");
    } else {
        console.log("Too high, guess again");
    }

    guess = Number.parseInt(prompt("Guess again:"), 10);
    attempts++;
}

console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
