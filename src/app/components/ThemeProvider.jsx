"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState("dark");

  useEffect(() => {
    // The inline script in the <head> has already applied .light if needed.
    // Read the resolved class so the React state matches the DOM.
    const resolved = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";
    setThemeState(resolved);
  }, []);

  const setTheme = (next) => {
    setThemeState(next);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("light", next === "light");
    }
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem("theme", next);
      } catch {}
    }
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
