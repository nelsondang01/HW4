"use strict";
// Exercise 2: Input array (assume valid), return object with firstElement, lastElement, length

function arrayInfo(arr) {
  return {
    firstElement: arr[0],
    lastElement: arr[arr.length - 1],
    length: arr.length
  };
}

// Tests
const arr1 = [4, 8, 12, 5, 20];
const arr2 = ["a", 2, "Hello", 6, [4, 5], "bye", { name: "Alice", score: 98 }];

console.log("Input:", arr1);
console.log("Return:", arrayInfo(arr1));

console.log("Input:", arr2);
console.log("Return:", arrayInfo(arr2));
