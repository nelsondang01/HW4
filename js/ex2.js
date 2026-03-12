"use strict";

// Display text only for 400 level courses
const displayText400 = () => {
  const courses400 = document.querySelectorAll(".400level");

  for (const course of courses400) {
    console.log(course.textContent);
  }
};

displayText400();