import { Link } from "react-router-dom";
import { useSiteData } from "../../context/SiteDataContext.jsx";

function EventsPreview() {
  const {
    siteData: { events },
  } = useSiteData();

  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const upcoming = sorted.slice(0, 3);

  if (!upcoming.length) return null;

  return (
    <section className="py-8 md:py-10 space-y-4">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
            Upcoming events
          </p>
          <h2 className="text-lg md:text-xl font-semibold">
            Hikes and outdoor sessions this month.
          </h2>
        </div>

        <Link
          to="/events"
          className="text-[11px] md:text-xs text-brand hover:text-brand-dark underline-offset-4 hover:underline"
        >
          View all events
        </Link>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {upcoming.map((event) => (
          <article
            key={event.id}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-xs md:text-sm"
          >
            <div className="relative h-28 md:h-32 overflow-hidden">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
              <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-brand border border-brand/40">
                {event.type}
              </div>
            </div>
            <div className="px-3 py-3 space-y-1">
              <h3 className="text-sm font-semibold text-slate-50 line-clamp-2">
                {event.title}
              </h3>
              <p className="text-[11px] text-slate-300">
                {event.date} · {event.time}
              </p>
              <p className="text-[11px] text-slate-200 line-clamp-2">
                {event.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EventsPreview;
