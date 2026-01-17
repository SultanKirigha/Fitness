import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        relative inline-flex h-10 w-10 items-center justify-center rounded-full
        transition-all duration-300 ease-out
        ${
          isLight
            ? "bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.6)]"
            : "bg-white/10 hover:bg-white/20"
        }
      `}
    >
      {/* Icon */}
      {isLight ? (
        <Sun className="h-5 w-5 text-white transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="h-5 w-5 text-slate-200 transition-transform duration-300 rotate-0" />
      )}
    </button>
  );
}

export default ThemeToggle;
