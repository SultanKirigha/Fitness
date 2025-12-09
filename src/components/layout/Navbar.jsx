import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../data/navigation";
import { useTheme } from "../../context/ThemeContext.jsx";
import logoGreen from "../../assets/logo.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const linkBase = "text-sm transition hover:text-brand";

  return (
    <header className="fixed top-0 inset-x-0 z-20 border-b border-white/10 bg-slate-50/80 dark:bg-dark/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          
          <img
            src={logoGreen}
            alt="Safarishape Fit Wellness"
            className="h-8 w-auto md:h-9"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? "text-brand"
                    : "text-slate-700 dark:text-slate-200"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Theme toggle (desktop) */}
          <button
            onClick={toggleTheme}
            className="ml-4 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-slate-300 dark:border-white/30 bg-white/80 dark:bg-dark/60 text-slate-800 dark:text-slate-100 shadow-md shadow-black/30 hover:bg-slate-100/80 dark:hover:bg-white/10 transition"
          >
            <span className="text-base">
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
            <span>{theme === "dark" ? "Dark mode" : "Light mode"}</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-dark/70"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-slate-800 dark:bg-white" />
            <span className="block h-0.5 w-5 bg-slate-800 dark:bg-white" />
          </div>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-slate-50 dark:bg-dark border-t border-slate-200 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-1.5 text-sm ${
                    isActive
                      ? "text-brand"
                      : "text-slate-800 dark:text-slate-200"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Theme toggle (mobile) */}
            <button
              onClick={toggleTheme}
              className="mt-2 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-slate-300 dark:border-white/30 bg-white/80 dark:bg-dark/60 text-slate-800 dark:text-slate-100 shadow-md shadow-black/30 hover:bg-slate-100/80 dark:hover:bg-white/10 transition"
            >
              <span className="text-base">
                {theme === "dark" ? "☀️" : "🌙"}
              </span>
              <span>
                {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
