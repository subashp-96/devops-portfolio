import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

createRoot(document.getElementById("root")).render(<App />);
