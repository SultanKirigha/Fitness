// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  // Read saved theme or system preference on first load
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("combatfit-theme");
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
      } else {
        const prefersDark = window.matchMedia?.(
          "(prefers-color-scheme: dark)"
        )?.matches;
        setTheme(prefersDark ? "dark" : "light");
      }
    } catch {
      setTheme("dark");
    }
  }, []);

  // Apply theme class / data attribute and persist
  useEffect(() => {
    if (!theme) return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("combatfit-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
      throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
