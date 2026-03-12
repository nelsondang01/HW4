"use strict";

// Add College of Business link between CSULB and IS links
const addBusinessLink = () => {
  const linksList = document.getElementById("links");
  const isLinkItem = document.getElementById("is");

  const newLi = document.createElement("li");
  const newA = document.createElement("a");

  newA.href = "https://www.csulb.edu/college-of-business";
  newA.textContent = "College of Business";

  newLi.appendChild(newA);

  linksList.insertBefore(newLi, isLinkItem);
};

addBusinessLink();