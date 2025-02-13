import React, { useContext } from "react";
import { ThemeContext } from "./Theme_Context_Api";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
