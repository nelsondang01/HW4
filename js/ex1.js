"use strict";

const input = prompt("Enter a number between 1 and 100:");

if (input === null) {
    console.log("Sorry, Cancel is not a valid entry.");
} else {
    const trimmed = input.trim();

    if (trimmed === "") {
        console.log("Sorry, blank input is not valid.");
    } else {
        const number = Number.parseInt(trimmed, 10);

        if (Number.isInteger(number) && number >= 1 && number <= 100) {
            console.log(`Thank you! You entered ${number}, a valid number.`);
        } else {
            console.log(`Sorry, ${input} is not a valid entry.`);
        }
    }
}
