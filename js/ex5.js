"use strict";

// Display numbers 1-12 in a table
const output = document.getElementById("output");

const table = document.createElement("table");

for (let i = 1; i <= 12; i++) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.textContent = i;

  if (i % 4 === 0) {
    td.classList.add("blue-bg");
  }

  tr.appendChild(td);
  table.appendChild(tr);
}

output.appendChild(table);