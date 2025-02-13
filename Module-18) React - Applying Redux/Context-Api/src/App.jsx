import React from "react";
import { ThemeProvider } from "./Theme_Context_Api";
import ThemeToggle from "./Theme_Toggle";

function App() {
  return (
    <ThemeProvider>
      <div className="context">
        <h1>React Context API Theme Toggle</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
