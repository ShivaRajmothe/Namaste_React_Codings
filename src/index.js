import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

// Prevent multiple root creation
let root;

if (!container._reactRootContainer) {
  root = ReactDOM.createRoot(container);
} else {
  root = container._reactRootContainer;
}

root.render(<App />);