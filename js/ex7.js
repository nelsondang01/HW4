"use strict";

const content = document.getElementById("content");

const input1 = prompt("Enter the first integer:");
const input2 = prompt("Enter the second integer:");

const trimmed1 = input1 === null ? "" : input1.trim();
const trimmed2 = input2 === null ? "" : input2.trim();

const isInt1 = /^-?\d+$/.test(trimmed1);
const isInt2 = /^-?\d+$/.test(trimmed2);

const result = document.createElement("p");
result.className = "sum-text";

if (isInt1 && isInt2) {
  const num1 = Number.parseInt(trimmed1, 10);
  const num2 = Number.parseInt(trimmed2, 10);
  const sum = num1 + num2;

  result.textContent = `The sum of ${num1} and ${num2} is ${sum}.`;
} else {
  result.className = "error-text";
  result.textContent = `Error: "${input1}" and/or "${input2}" is not a valid integer.`;
}

content.appendChild(result);