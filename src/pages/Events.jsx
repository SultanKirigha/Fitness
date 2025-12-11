import { useSiteData } from "../context/SiteDataContext.jsx";

function Events() {
  const {
    siteData: { events },
  } = useSiteData();

  const sortedEvents = [...events].sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  return (
    <section className="py-10 md:py-16 space-y-8">
      {/* Header */}
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.22em] text-brand">
          Events
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold">
          Hikes, outdoor sessions, and community events.
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
          Safarishape is more than gym walls. Join hikes, outdoor sessions, and
          live events that keep training fun and connected to real life.
        </p>
      </header>

      {/* Event cards */}
      {sortedEvents.length === 0 ? (
        <p className="text-sm text-slate-400">
          No events are scheduled yet. Check back soon.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sortedEvents.map((event) => (
            <article
              key={event.id}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:border-brand/70 transition-transform"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
                {/* Type pill */}
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-brand border border-brand/40">
                  {event.type}
                </div>
                {/* Date badge */}
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

                <p className="text-slate-200 text-xs md:text-sm">
                  {event.summary}
                </p>

                <div className="mt-auto space-y-2 text-[11px] md:text-xs text-slate-300">
                  <p>
                    <span className="font-semibold">
                      {event.isOnline ? "Online" : "In person"}:
                    </span>{" "}
                    {event.location}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={event.registrationUrl || "#"}
                      className="inline-flex items-center justify-center rounded-full px-4 py-2 bg-brand text-dark text-xs md:text-sm font-semibold hover:bg-brand-dark transition"
                    >
                      Save your spot
                    </a>
                    <span className="text-[10px] text-slate-400">
                      Limited spots. First come, first served.
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Events;
