"use strict";

// Change all paragraph elements to bold with yellow background
const changeParagraphs = () => {
  const paragraphs = document.querySelectorAll("p");

  for (const p of paragraphs) {
    p.style.fontWeight = "bold";
    p.style.backgroundColor = "yellow";
  }
};

changeParagraphs();