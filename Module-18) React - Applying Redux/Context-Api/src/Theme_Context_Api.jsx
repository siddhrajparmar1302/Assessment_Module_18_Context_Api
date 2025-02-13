import { createContext, useState, useEffect } from "react";

// Create Context
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  
  const getStoredTheme = () => localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
