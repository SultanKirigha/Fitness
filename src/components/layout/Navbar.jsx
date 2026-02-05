// src/components/layout/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle.jsx";

const CLOUD = import.meta.env.VITE_CLOUDINARY_BASE;

// Cloudinary logo path (adjust folder/name if needed)
const logoUrl = CLOUD ? `${CLOUD}/combatfit/logos/logo_trqhzr.svg` : null;

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

// --- CART (temporary storage using localStorage) ---
// We’ll switch to Context later, but this lets the navbar show a count now.
const CART_KEY = "combatfit_cart_v1";

function readCartCount() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return 0;
    const cart = JSON.parse(raw);
    const items = Array.isArray(cart?.items) ? cart.items : [];
    // Count total quantity
    return items.reduce((sum, it) => sum + Number(it.qty || 0), 0);
  } catch {
    return 0;
  }
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  // Scroll to top and close mobile nav on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [location.pathname]);

  // Initial cart count + keep it updated when cart changes
  useEffect(() => {
    setCartCount(readCartCount());

    const onStorage = (e) => {
      if (e.key === CART_KEY) setCartCount(readCartCount());
    };

    // Custom event so the same tab updates immediately
    const onCartUpdated = () => setCartCount(readCartCount());

    window.addEventListener("storage", onStorage);
    window.addEventListener("cart:updated", onCartUpdated);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("cart:updated", onCartUpdated);
    };
  }, []);

  const linkBase = "text-xs md:text-sm font-medium tracking-wide transition-colors";
  const linkActive = "text-brand";
  const linkIdle = "text-slate-300 hover:text-slate-100";

  return (
    <header className="navbar-shell sticky top-0 z-30 border-b border-white/10 bg-[#020617]/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
        {/* Logo / brand */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0 hover:opacity-90 transition"
        >
          {logoUrl ? (
            <img src={logoUrl} alt="Combatfit logo" className="h-7 w-auto md:h-8" />
          ) : (
            <span className="text-sm md:text-base font-semibold">Combatfit</span>
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
                    [linkBase, isActive ? linkActive : linkIdle].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Cart icon + badge */}
            <Link
              to="/cart"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-slate-100 hover:text-white"
              aria-label="Open cart"
              title="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-brand text-[10px] leading-[18px] text-dark font-bold text-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Theme toggle (sun/moon) */}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile: cart + theme + menu */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Cart icon + badge */}
          <Link
            to="/cart"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-slate-100 hover:text-white"
            aria-label="Open cart"
            title="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-brand text-[10px] leading-[18px] text-dark font-bold text-center">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

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
                  ["block py-2 text-sm", linkBase, isActive ? linkActive : linkIdle].join(
                    " "
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Cart link in mobile menu too */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                ["block py-2 text-sm", linkBase, isActive ? linkActive : linkIdle].join(
                  " "
                )
              }
            >
              Cart {cartCount > 0 ? `(${cartCount})` : ""}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
