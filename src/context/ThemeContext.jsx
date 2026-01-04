// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext({
  theme: "dark",
  // Kept for compatibility – does nothing now
  toggleTheme: () => {},
});

/**
 * ThemeProvider now forces the whole app into dark mode.
 * No light option, no toggling.
 */
export function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement;

    // Always stay in dark mode
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");

    // Ensure body background is dark as a fallback
    document.body.classList.add("bg-[#020617]", "text-slate-50");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
