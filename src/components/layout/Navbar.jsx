
// src/components/layout/Navbar.jsx
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

// Put your logo in public/images or src/assets and adjust this path
// Example if you placed it in public/images:
import combatLogo from "../../assets/logo.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "Home" },
    { to: "/programs", label: "Programs" },
    { to: "/trainers", label: "Trainers" },
    { to: "/pricing", label: "Pricing" },
    { to: "/events", label: "Events" },
    { to: "/shop", label: "Shop" }, // new link
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const baseLinkClasses =
    "text-xs uppercase tracking-[0.18em] transition px-1 py-0.5";

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-dark/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <img
            src={combatLogo}
            alt="Combatfit logo"
            className="h-8 w-auto md:h-9"
          />
          <span className="hidden text-sm font-semibold tracking-[0.18em] text-slate-100 md:inline-block">
            COMBATFIT
          </span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  baseLinkClasses,
                  isActive
                    ? "text-brand"
                    : "text-slate-300 hover:text-white",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Small shop shortcut icon */}
          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand hover:bg-brand hover:text-dark transition"
            aria-label="Open shop"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-white/5 bg-dark-soft md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-2 py-2 text-xs uppercase tracking-[0.16em] transition",
                    isActive
                      ? "bg-brand/10 text-brand"
                      : "text-slate-300 hover:bg-white/5",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile shop icon row */}
            <button
              type="button"
              onClick={() => {
                navigate("/shop");
                setOpen(false);
              }}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/10 px-3 py-2 text-xs font-semibold text-brand"
            >
              <ShoppingBag className="h-4 w-4" />
              Open shop
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
