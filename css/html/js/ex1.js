"use strict";

/*
Exercise 1:
Ask the user for a number between 1 and 100.
Output to console:
- Valid: "Thank you! You entered XX, a valid number."
- Invalid: "Sorry, XX is not a valid entry."
Test: numeric, non-numeric, spaces, blank
*/

const input = prompt("Enter a whole number between 1 and 100:");

let output = "";

if (input === null) {
  output = "Sorry, Cancel is not a valid entry.";
} else {
  const trimmed = input.trim();

  if (trimmed === "") {
    output = "Sorry, (blank) is not a valid entry.";
  } else {
    // Require an integer format (no letters, no decimals)
    const isIntegerString = /^-?\d+$/.test(trimmed);

    if (!isIntegerString) {
      output = `Sorry, ${input} is not a valid entry.`;
    } else {
      const num = Number.parseInt(trimmed, 10);

      if (Number.isInteger(num) && num >= 1 && num <= 100) {
        output = `Thank you! You entered ${num}, a valid number.`;
      } else {
        output = `Sorry, ${input} is not a valid entry.`;
      }
    }
  }
}

console.log(output);
