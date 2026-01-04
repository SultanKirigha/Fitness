// src/components/events/UpcomingEventPopup.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, X, ArrowRight } from "lucide-react";
import { useSiteData } from "../../context/SiteDataContext.jsx";

function UpcomingEventPopup() {
  const {
    siteData: { events },
  } = useSiteData();

  const [nextEvent, setNextEvent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!events || events.length === 0) {
      console.log("UpcomingEventPopup: no events found");
      return;
    }

    const todayStr = new Date().toISOString().slice(0, 10);

    // Sort by date and find first upcoming that is not sold out
    const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
    const futureOrToday = sorted.filter((e) => e.date >= todayStr);
    const available = futureOrToday.filter((e) => !e.soldOut);

    console.log("UpcomingEventPopup: future events", futureOrToday);
    console.log("UpcomingEventPopup: available events", available);

    if (available.length === 0) {
      console.log("UpcomingEventPopup: no available upcoming events");
      return;
    }

    const upcoming = available[0];
    setNextEvent(upcoming);
    setIsOpen(true);
  }, [events]);

  if (!isOpen || !nextEvent) return null;

  const handleClose = () => setIsOpen(false);

  return (
    // Full screen overlay with blur and dark backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      {/* Centered modal card */}
      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#020617] shadow-[0_0_100px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-slate-300 hover:text-slate-100"
          aria-label="Close event popup"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-white/10">
          <p className="text-[11px] uppercase tracking-[0.24em] text-brand">
            Upcoming outdoor session
          </p>
          <h2 className="mt-1 text-lg md:text-xl font-semibold text-slate-50">
            {nextEvent.title}
          </h2>
        </div>

        {/* Body */}
        <div className="px-5 py-4 space-y-4 text-xs md:text-sm text-slate-200">
          {/* Date & location */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] md:text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-brand" />
              <span>
                {nextEvent.date} · {nextEvent.time}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              <span>{nextEvent.location}</span>
            </span>
          </div>

          {/* Image */}
          {nextEvent.imageUrl && (
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-soft aspect-[4/3]">
              <img
                src={nextEvent.imageUrl}
                alt={nextEvent.title}
                className="h-full w-full object-cover object-center"
              />
              {nextEvent.type && (
                <div className="absolute left-3 top-3 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-brand border border-brand/40">
                  {nextEvent.type}
                </div>
              )}
            </div>
          )}

          {/* Summary */}
          <div className="space-y-2">
            {nextEvent.highlight && (
              <p className="text-[11px] md:text-xs text-brand">
                {nextEvent.highlight}
              </p>
            )}
            {nextEvent.summary && (
              <p className="text-xs md:text-sm text-slate-200">
                {nextEvent.summary}
              </p>
            )}
            <p className="text-[11px] md:text-xs text-slate-400">
              Spots are limited. Tap below to save your spot on the Events page.
              We’ll confirm by email or WhatsApp.
            </p>
          </div>
        </div>

        {/* Footer: primary CTA + secondary dismiss */}
        <div className="px-5 pb-5 pt-3 border-t border-white/10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <Link
            to="/events#upcoming"
            onClick={handleClose}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 bg-brand text-dark text-xs md:text-sm font-semibold hover:bg-brand-dark transition shadow-[0_0_30px_rgba(34,197,94,0.6)] w-full md:w-auto"
          >
            Join this outdoor session
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            onClick={handleClose}
            className="inline-flex items-center justify-center rounded-full px-5 py-2 text-[11px] md:text-xs text-slate-300 hover:text-slate-100 hover:bg-white/5 transition w-full md:w-auto"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEventPopup;
