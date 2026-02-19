"use strict";
// Exercise 1: Validate Input (1-100)
// Test with numeric, non-numeric, spaces, and blank input.

const raw = prompt("Enter a whole number between 1 and 100:");

let message = "";

if (raw === null) {
  // user hit Cancel
  message = "Sorry, Cancel is not a valid entry.";
} else {
  const trimmed = raw.trim();

  // blank or spaces only
  if (trimmed === "") {
    message = "Sorry, (blank) is not a valid entry.";
  } else {
    // parse to number
    const num = Number.parseInt(trimmed, 10);

    // Must be an integer, not NaN, and between 1-100
    if (!Number.isNaN(num) && Number.isInteger(num) && String(num) === String(Number.parseInt(trimmed, 10)) && num >= 1 && num <= 100) {
      message = `Thank you! You entered ${num}, a valid number.`;
    } else {
      message = `Sorry, ${raw} is not a valid entry.`;
    }
  }
}

console.log(message);
