// src/components/layout/Footer.jsx
import { NavLink } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
const CLOUD = import.meta.env.VITE_CLOUDINARY_BASE;

const logoUrl = `${CLOUD}/combatfit/logos/logo_trqhzr.svg`; // adjust path if needed

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/trainers", label: "Trainers" },
  { to: "/pricing", label: "Pricing" },
  { to: "/events", label: "Events" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const programLinks = [
  "Strength blocks",
  "Outdoor conditioning",
  "Hike prep",
  "Mobility & recovery",
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-dark-soft mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12 space-y-8">
        {/* Top strip: brand + CTA */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <img
              src={logoUrl}
              alt="Combatfit logo"
              className="h-9 w-auto md:h-10"
            />
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-100">
                Combatfit Outdoor
              </p>
              <p className="text-xs md:text-sm text-slate-300 max-w-sm">
                Outdoor strength, conditioning, and community sessions across
                Nairobi. Built to fit real life, not just a gym schedule.
              </p>
              <p className="flex items-center gap-2 text-[11px] text-slate-400">
                <MapPin className="h-3.5 w-3.5" />
                Nairobi · Karura · Ngong · city parks
              </p>
            </div>
          </div>

          <div className="space-y-2 md:text-right">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
              Next outdoor session
            </p>
            <p className="text-xs md:text-sm text-slate-300 max-w-xs md:ml-auto">
              Check the upcoming events and save your spot for the next hike,
              trail session, or outdoor block.
            </p>
            <NavLink
              to="/events#upcoming"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs md:text-sm font-semibold text-dark hover:bg-brand-dark transition"
            >
              View upcoming events
              <ArrowRight className="h-3.5 w-3.5" />
            </NavLink>
          </div>
        </div>

        {/* Middle: navigation columns */}
        <div className="grid gap-8 pt-6 border-t border-white/5 md:grid-cols-[2fr_1.2fr_1.4fr]">
          {/* Column 1: links */}
          <div className="space-y-3">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Navigate
            </h3>
            <div className="grid grid-cols-2 gap-y-1.5 gap-x-6 text-[11px] md:text-xs">
              {mainLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    [
                      "text-slate-300 hover:text-brand transition",
                      isActive && "text-brand",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Column 2: programs summary */}
          <div className="space-y-3">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Programs
            </h3>
            <ul className="space-y-1.5 text-[11px] md:text-xs text-slate-300">
              {programLinks.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <NavLink
              to="/programs"
              className="inline-flex items-center gap-1 text-[11px] md:text-xs text-brand hover:text-brand/80 mt-2"
            >
              View all programs
              <ArrowRight className="h-3 w-3" />
            </NavLink>
          </div>

          {/* Column 3: contact + socials */}
          <div className="space-y-3">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Stay connected
            </h3>
            <p className="text-[11px] md:text-xs text-slate-300">
              Ask about blocks, outdoor sessions, or gear. We reply faster on
              WhatsApp and Instagram.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:sultankirigha@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] md:text-xs text-slate-100 hover:border-brand hover:bg-brand/10 transition"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Contact via email</span>
              </a>
            </div>

            <div className="flex gap-3 pt-1">
              <a
                href="#"
                aria-label="Combatfit Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-200 hover:bg-brand hover:text-dark transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Combatfit Facebook"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-200 hover:bg-brand hover:text-dark transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Combatfit YouTube"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-200 hover:bg-brand hover:text-dark transition"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 border-t border-white/5 pt-4 text-[10px] md:text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Combatfit Outdoor. Built for Nairobi movement and real
            life training.
          </p>
          <p className="text-slate-500">
            Dashboard and booking tools for the team run on the internal
            Safarishape system.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
