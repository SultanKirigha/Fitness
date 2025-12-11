// src/components/layout/Footer.jsx
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiMusic,
} from "react-icons/fi";
import { useSiteData } from "../../context/SiteDataContext.jsx";
import logoGreen from "../../assets/logo.svg";

function Footer() {
  const {
    siteData: { footer },
  } = useSiteData();

  const { about, operations, address, social } = footer;

  return (
    <footer className="mt-10 border-t border-white/10 bg-[#020617] text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10 space-y-8">
        {/* Top grid */}
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Brand + about */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoGreen}
                alt="Safarishape logo"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-xs md:text-sm text-slate-300 max-w-md">
              {about}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-brand hover:text-brand transition"
                  aria-label="Instagram"
                >
                  <FiInstagram className="h-4 w-4" />
                </a>
              )}
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-brand hover:text-brand transition"
                  aria-label="Facebook"
                >
                  <FiFacebook className="h-4 w-4" />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-brand hover:text-brand transition"
                  aria-label="Twitter / X"
                >
                  <FiTwitter className="h-4 w-4" />
                </a>
              )}
              {social.youtube && (
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-brand hover:text-brand transition"
                  aria-label="YouTube"
                >
                  <FiYoutube className="h-4 w-4" />
                </a>
              )}
              {social.tiktok && (
                <a
                  href={social.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-brand hover:text-brand transition"
                  aria-label="TikTok"
                >
                  <FiMusic className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Operation hours */}
          <div className="space-y-3 text-xs md:text-sm">
            <h3 className="text-sm md:text-base font-semibold text-slate-50">
              Operation hours
            </h3>
            <ul className="space-y-1 text-slate-300">
              <li>{operations.weekday}</li>
              <li>{operations.saturday}</li>
              <li>{operations.sunday}</li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-3 text-xs md:text-sm">
            <h3 className="text-sm md:text-base font-semibold text-slate-50">
              Address
            </h3>
            <div className="space-y-1 text-slate-300">
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>Tel: {address.phone}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${address.email}`}
                  className="text-brand hover:text-brand-dark"
                >
                  {address.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/10 pt-4 text-[11px] md:text-xs text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>© {new Date().getFullYear()} Safarishape. All rights reserved.</p>
          <p>
            Built for people who want to lift, move, and live well in every
            season.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
