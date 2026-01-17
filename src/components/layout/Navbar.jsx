// src/components/layout/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle.jsx";

const CLOUD = import.meta.env.VITE_CLOUDINARY_BASE;

// Cloudinary logo path (adjust folder/name if needed)
const logoUrl = CLOUD
  ? `${CLOUD}/combatfit/logos/logo_trqhzr.svg`
  : null;

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/trainers", label: "Trainers" },
  { to: "/events", label: "Events" },
  { to: "/shop", label: "Shop" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top and close mobile nav on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [location.pathname]);

  const linkBase =
    "text-xs md:text-sm font-medium tracking-wide transition-colors";
  const linkActive =
    "text-brand";
  const linkIdle =
    "text-slate-300 hover:text-slate-100";

  return (
    <header className="navbar-shell sticky top-0 z-30 border-b border-white/10 bg-[#020617]/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
        {/* Logo / brand */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0 hover:opacity-90 transition"
        >
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Combatfit logo"
              className="h-7 w-auto md:h-8"
            />
          ) : (
            <span className="text-sm md:text-base font-semibold">
              Combatfit
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      linkBase,
                      isActive ? linkActive : linkIdle,
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme toggle (sun/moon) */}
          <ThemeToggle />
        </div>

        {/* Mobile: toggle + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-slate-100"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#020617]/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "block py-2 text-sm",
                    linkBase,
                    isActive ? linkActive : linkIdle,
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
