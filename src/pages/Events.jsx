// src/pages/Events.jsx
import { useState } from "react";
import { useSiteData } from "../context/SiteDataContext.jsx";

// Use Vite env variable instead of hard-coding
const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

function EventCard({ event, isPast, onBook }) {
  const isClosed = isPast || event.soldOut;

  const handleClick = () => {
    if (!isClosed && onBook) {
      onBook(event);
    }
  };

  return (
    <article className="flex flex-col rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:border-brand/70 transition-transform">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
        />

        {/* Type pill (top-left) */}
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-brand border border-brand/40">
          {event.type}
        </div>

        {/* Status badge (top-right) */}
        {isPast && (
          <div className="absolute right-4 top-4 inline-flex items-center rounded-full bg-slate-800/90 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-100 shadow-[0_0_20px_rgba(15,23,42,0.7)]">
            Event ended
          </div>
        )}
        {!isPast && event.soldOut && (
          <div className="absolute right-4 top-4 inline-flex items-center rounded-full bg-red-600/90 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white shadow-[0_0_20px_rgba(220,38,38,0.7)]">
            Sold out
          </div>
        )}

        {/* Date badge (bottom-right) */}
        <div className="absolute right-4 bottom-4 rounded-xl bg-black/70 px-3 py-2 text-[11px] text-slate-100 text-right">
          <p className="font-semibold">{event.date}</p>
          <p className="text-[10px] text-slate-300">{event.time}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 px-4 py-4 md:px-5 md:py-5 text-xs md:text-sm">
        <div className="space-y-1">
          <h2 className="text-sm md:text-base font-semibold text-slate-50">
            {event.title}
          </h2>
          {event.highlight && (
            <p className="text-[11px] md:text-xs text-brand">
              {event.highlight}
            </p>
          )}
        </div>

        <p className="text-slate-200 text-xs md:text-sm">{event.summary}</p>

        <div className="mt-auto space-y-2 text-[11px] md:text-xs text-slate-300">
          <p>
            <span className="font-semibold">
              {event.isOnline ? "Online" : "In person"}:
            </span>{" "}
            {event.location}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            {!isClosed ? (
              <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center justify-center rounded-full px-4 py-2 bg-brand text-dark text-xs md:text-sm font-semibold hover:bg-brand-dark transition"
              >
                Save your spot
              </button>
            ) : (
              <span className="inline-flex items-center justify-center rounded-full px-4 py-2 bg-slate-700/80 text-slate-200 text-xs md:text-sm font-semibold">
                {isPast ? "Event ended" : "Sold out"}
              </span>
            )}

            <span className="text-[10px] text-slate-400">
              {isPast
                ? "This session has already happened."
                : event.soldOut
                ? "Join the next block or event."
                : "Limited spots. First come, first served."}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/** Standalone featured card for the next upcoming event */
function FeaturedEventCard({ event, isPast, onBook }) {
  const isClosed = isPast || event.soldOut;

  const handleClick = () => {
    if (!isClosed && onBook) {
      onBook(event);
    }
  };

  return (
    <article className="rounded-3xl border border-brand/60 bg-gradient-to-br from-brand/15 via-white/5 to-dark-soft shadow-[0_0_80px_rgba(34,197,94,0.5)] overflow-hidden">
      <div className="grid gap-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        {/* Image side */}
        <div className="relative h-56 md:h-auto overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />

          <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-brand border border-brand/40">
            Featured
          </div>

          {isPast && (
            <div className="absolute right-4 top-4 inline-flex items-center rounded-full bg-slate-800/90 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-100 shadow-[0_0_20px_rgba(15,23,42,0.7)]">
              Event ended
            </div>
          )}
          {!isPast && event.soldOut && (
            <div className="absolute right-4 top-4 inline-flex items-center rounded-full bg-red-600/90 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white shadow-[0_0_20px_rgba(220,38,38,0.7)]">
              Sold out
            </div>
          )}

          <div className="absolute right-4 bottom-4 rounded-xl bg-black/75 px-3 py-2 text-[11px] text-slate-100 text-right">
            <p className="font-semibold">{event.date}</p>
            <p className="text-[10px] text-slate-300">{event.time}</p>
          </div>
        </div>

        {/* Content side */}
        <div className="flex flex-col gap-3 px-4 py-4 md:px-6 md:py-6 text-xs md:text-sm">
          <p className="text-[11px] uppercase tracking-[0.24em] text-brand">
            Next outdoor meetup
          </p>

          <h2 className="text-lg md:text-2xl font-semibold text-slate-50">
            {event.title}
          </h2>

          {event.highlight && (
            <p className="text-[11px] md:text-xs text-brand/90">
              {event.highlight}
            </p>
          )}

          <p className="text-slate-200 text-xs md:text-sm">{event.summary}</p>

          <div className="space-y-1 text-[11px] md:text-xs text-slate-300">
            <p>
              <span className="font-semibold">
                {event.isOnline ? "Online" : "In person"}:
              </span>{" "}
              {event.location}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
            {!isClosed ? (
              <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-brand text-dark text-xs md:text-sm font-semibold hover:bg-brand-dark transition"
              >
                Save your spot for this session
              </button>
            ) : (
              <span className="inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-slate-800 text-slate-100 text-xs md:text-sm font-semibold">
                {isPast ? "Event ended" : "This event is sold out"}
              </span>
            )}

            <span className="text-[10px] md:text-xs text-slate-400">
              Arrive 10–15 minutes early to check in and warm up.
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function Events() {
  const {
    siteData: { events },
  } = useSiteData();

  const [activeEventForForm, setActiveEventForForm] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const todayStr = new Date().toISOString().slice(0, 10);
  const futureOrToday = sorted.filter((e) => e.date >= todayStr);
  const pastEvents = sorted.filter((e) => e.date < todayStr);

  const upcomingRaw = futureOrToday.filter((e) => !e.soldOut);
  const soldOutEvents = futureOrToday.filter((e) => e.soldOut);

  const featuredEvent = upcomingRaw[0] || null;
  const upcomingEvents = upcomingRaw.slice(1);

  const hasUpcomingFeatured = Boolean(featuredEvent);
  const hasUpcomingOthers = upcomingEvents.length > 0;
  const hasSoldOut = soldOutEvents.length > 0;
  const hasPast = pastEvents.length > 0;

  const handleOpenForm = (eventFromCard) => {
    const targetEvent = eventFromCard || featuredEvent;
    if (!targetEvent) return;

    setActiveEventForForm(targetEvent);
    setFormValues({ name: "", email: "", phone: "", note: "" });
    setFormSubmitted(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!activeEventForForm || !APPS_SCRIPT_URL) {
      console.error("Missing activeEventForForm or APPS_SCRIPT_URL");
      return;
    }

    const payload = {
      eventId: activeEventForForm.id,
      eventTitle: activeEventForForm.title,
      eventDate: activeEventForForm.date,
      eventTime: activeEventForForm.time,
      eventLocation: activeEventForForm.location,
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      note: formValues.note,
    };

    try {
      console.log("Submitting booking to", APPS_SCRIPT_URL, payload);

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setFormSubmitted(true);
    } catch (err) {
      console.error("Network error when calling Apps Script:", err);
      alert("Could not submit booking. Check your connection and try again.");
    }
  };

  const handleCloseForm = () => {
    setActiveEventForForm(null);
    setFormSubmitted(false);
  };

  const showModal = Boolean(activeEventForForm);

  return (
    <>
      <section className="py-10 md:py-16 space-y-10">
        {/* Page header */}
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-brand">
            Events
          </p>
          <h1 className="text-2xl md:3xl font-semibold">
            Hikes, outdoor sessions, and community events.
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            Combatfit is more than a single session. Join hikes, outdoor
            bootcamps, and live events that keep training fun and connected to
            real life.
          </p>
        </header>

        {/* Upcoming events centerpiece */}
        <section id="upcoming" className="space-y-6">
          <div className="text-center space-y-3">
            <p className="text-[11px] uppercase tracking-[0.26em] text-brand/90">
              Next up
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Upcoming outdoor sessions?
            </h2>
            {hasUpcomingFeatured && (
              <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto">
                The next Combatfit hikes and outdoor meetups you can join. Pick
                a date, show up, and we handle the plan.
              </p>
            )}
          </div>

          {!hasUpcomingFeatured ? (
            <p className="text-sm text-slate-400 text-center">
              There are no upcoming events yet. Check back soon or follow our
              social channels for the next outdoor block.
            </p>
          ) : (
            <div className="max-w-5xl mx-auto">
              <FeaturedEventCard
                event={featuredEvent}
                isPast={false}
                onBook={handleOpenForm}
              />
            </div>
          )}

          {hasUpcomingOthers && (
            <div className="space-y-3">
              <p className="text-[11px] md:text-xs text-slate-400 text-center">
                More outdoor sessions coming up this month.
              </p>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {upcomingEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    isPast={false}
                    onBook={handleOpenForm}
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Sold out events */}
        {hasSoldOut && (
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Sold out events
            </h2>
            <p className="text-[11px] md:text-xs text-slate-400">
              These events are full, but we often repeat popular formats. Keep
              an eye on the upcoming section.
            </p>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {soldOutEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={false} />
              ))}
            </div>
          </section>
        )}

        {/* Past events */}
        {hasPast && (
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Past events</h2>
            <p className="text-[11px] md:text-xs text-slate-400">
              A few of the outdoor sessions and community days we have already
              run. We recycle the best ones into new blocks.
            </p>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast />
              ))}
            </div>
          </section>
        )}
      </section>

      {/* Full-screen booking modal */}
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="w-full max-w-2xl h-[85vh] md:h-[80vh] flex flex-col rounded-3xl border border-white/10 bg-[#020617] p-5 md:p-7 shadow-[0_0_80px_rgba(0,0,0,0.9)] relative">
            {/* Close button */}
            <button
              type="button"
              onClick={handleCloseForm}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-200 text-base"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-4 space-y-1 pr-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
                Reserve your spot
              </p>
              <h3 className="text-base md:text-lg font-semibold text-slate-50">
                {activeEventForForm?.title}
              </h3>
              <p className="text-[11px] md:text-xs text-slate-300">
                {activeEventForForm?.date} · {activeEventForForm?.time} ·{" "}
                {activeEventForForm?.location}
              </p>
            </div>

            {/* Scrollable form area */}
            <form
              onSubmit={handleFormSubmit}
              className="flex-1 overflow-y-auto space-y-5 text-xs md:text-sm"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-[11px] md:text-xs text-slate-200"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={handleFormChange}
                    required
                    className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-[11px] md:text-xs text-slate-200"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleFormChange}
                    required
                    className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-[11px] md:text-xs text-slate-200"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formValues.phone}
                    onChange={handleFormChange}
                    className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                    placeholder="+254 7xx xxx xxx"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="note"
                    className="block text-[11px] md:text-xs text-slate-200"
                  >
                    Anything we should know?
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    value={formValues.note}
                    onChange={handleFormChange}
                    rows={3}
                    className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand resize-none"
                    placeholder="Injuries, pace, experience level..."
                  />
                </div>
              </div>

              {/* Footer inside modal */}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 bg-brand text-dark text-sm md:text-base font-semibold hover:bg-brand-dark transition w-full md:w-auto"
                >
                  Submit booking request
                </button>
                <p className="text-[11px] md:text-xs text-slate-400">
                  We will confirm your spot by email or WhatsApp.
                </p>
              </div>

              {formSubmitted && (
                <p className="text-[11px] md:text-xs text-brand mt-1">
                  Request received. The team will contact you to confirm your
                  spot.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Events;
