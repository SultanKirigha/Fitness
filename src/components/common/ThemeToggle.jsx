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
            ? "bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.65)]"
            : "bg-white/10 hover:bg-white/20"
        }
      `}
    >
      {isLight ? (
        <Sun className="h-5 w-5 text-yellow-950" />
      ) : (
        <Moon className="h-5 w-5 text-slate-200" />
      )}
    </button>
  );
}

export default ThemeToggle;
