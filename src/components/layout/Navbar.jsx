// src/components/layout/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// ✅ Update this import path to match where you saved the logo
const CLOUD = import.meta.env.VITE_CLOUDINARY_BASE;

const logoUrl = `${CLOUD}/combatfit/logos/logo_trqhzr.svg`;

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

  // Always scroll to top on route change and close mobile menu
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [location.pathname]);

  const linkBase =
    "text-xs md:text-sm font-medium tracking-wide transition-colors";
  const linkActive = "text-brand";
  const linkIdle = "text-slate-300 hover:text-slate-100";

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#020617]/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
        {/* Logo + brand name */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0 hover:opacity-90 transition"
        >
          <img
            src={logoUrl}
            alt="Combatfit logo"
            className="h-7 w-auto md:h-8"
          />
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

          {/* Dashboard / CTA */}
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold bg-brand text-dark hover:bg-brand-dark transition shadow-[0_0_25px_rgba(34,197,94,0.55)]"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-slate-100"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
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

            <Link
              to="/dashboard"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-brand text-dark hover:bg-brand-dark transition"
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
