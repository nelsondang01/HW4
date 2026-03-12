"use strict";

// Displays all body nodes, including text nodes
const bodyNodes = () => {
  const nodes = document.body.childNodes;

  for (const node of nodes) {
    console.log(node);
  }
};

bodyNodes();