import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-white/10 bg-[#050810] text-slate-200">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-10 md:py-12 space-y-8">
        {/* Top row */}
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          {/* Brand + intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-brand flex items-center justify-center text-dark font-bold text-lg">
                S
              </div>
              <div>
                <p className="text-sm font-semibold">Safarishape Fitness</p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  Train for the life you want
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 max-w-md">
              Safarishape is your training partner for strength, conditioning,
              and mobility. Based in Nairobi, serving athletes and busy
              professionals across Africa and beyond.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Explore
            </p>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="/" className="hover:text-brand transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-brand transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="/trainers" className="hover:text-brand transition">
                  Coaches
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-brand transition">
                  About Safarishape
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-brand transition">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Operation hours */}
          <div className="space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Operation hours
            </p>
            <ul className="space-y-1 text-xs md:text-sm">
              <li>
                <span className="font-semibold text-slate-100">
                  Monday to Friday
                </span>
                <span className="text-slate-300"> · 5:30am to 10:00pm</span>
              </li>
              <li>
                <span className="font-semibold text-slate-100">Saturday</span>
                <span className="text-slate-300"> · 7:00am to 5:00pm</span>
              </li>
              <li>
                <span className="font-semibold text-slate-100">
                  Sunday and public holidays
                </span>
                <span className="text-slate-300"> · 8:00am to 2:00pm</span>
              </li>
            </ul>
          </div>

          {/* Address + contacts */}
          <div className="space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Contact and location
            </p>
            <div className="space-y-2 text-xs md:text-sm">
              <p className="text-slate-300">
                City Park Drive, Valley View Office Park, Tower A, 1st Floor,
                Nairobi, Kenya.
              </p>
              <p className="flex gap-2">
                <span className="text-slate-400">Phone</span>
                <span>+254 700 000 000</span>
              </p>
              <p className="flex gap-2">
                <span className="text-slate-400">Email</span>
                <a
                  href="mailto:hello@safarishape.fit"
                  className="hover:text-brand transition"
                >
                  hello@safarishape.fit
                </a>
              </p>
              <p className="flex gap-2">
                <span className="text-slate-400">WhatsApp</span>
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand transition"
                >
                  +254 700 000 000
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom row: socials + copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Socials */}
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Connect
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-base hover:bg-brand hover:text-dark hover:border-brand transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-base hover:bg-brand hover:text-dark hover:border-brand transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-base hover:bg-brand hover:text-dark hover:border-brand transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-base hover:bg-brand hover:text-dark hover:border-brand transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-base hover:bg-brand hover:text-dark hover:border-brand transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-base hover:bg-brand hover:text-dark hover:border-brand transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-base hover:bg-brand hover:text-dark hover:border-brand transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-[11px] md:text-xs text-slate-400 text-left md:text-right">
            <p>
              © {year} Safarishape Fitness. All rights reserved. Crafted in
              Nairobi, built for lifters everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
