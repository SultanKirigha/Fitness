// src/components/common/ThemeToggle.jsx
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark / light mode"
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-white/15 bg-black/60 px-1 shadow-md shadow-black/40 backdrop-blur-sm transition-colors hover:border-brand focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2 focus:ring-offset-transparent"
    >
      {/* Sliding thumb */}
      <div
        className={
          "absolute inset-y-1 w-7 rounded-full bg-slate-100 shadow-sm transform transition-transform duration-300" +
          (isDark ? " translate-x-0" : " translate-x-7")
        }
      />

      {/* Icons row */}
      <div className="relative flex w-full items-center justify-between text-[11px]">
        <Sun
          className={
            "h-4 w-4 transition-all " +
            (isDark
              ? "text-yellow-400/40 opacity-60"
              : "text-yellow-400 opacity-100 scale-110")
          }
        />
        <Moon
          className={
            "h-4 w-4 transition-all " +
            (isDark
              ? "text-slate-200 opacity-100 scale-110"
              : "text-slate-500/40 opacity-60")
          }
        />
      </div>
    </button>
  );
}

export default ThemeToggle;
