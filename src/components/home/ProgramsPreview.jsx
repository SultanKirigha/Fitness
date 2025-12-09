import { useSiteData } from "../../context/SiteDataContext.jsx";
import ProgramCard from "../ui/ProgramCard.jsx";
import { Link } from "react-router-dom";

function ProgramsPreview() {
  const {
    siteData: { programs },
  } = useSiteData();

  const featured = programs.slice(0, 3);

  return (
    <section className="py-10 md:py-14 space-y-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand">
            Programs
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Coaching built around your real life.
          </h2>
          <p className="text-xs md:text-sm text-slate-300 max-w-xl mt-2">
            Choose strength, fat loss, performance or hybrid programs that scale
            with your schedule and recovery.
          </p>
        </div>

        <Link
          to="/programs"
          className="inline-flex items-center text-xs md:text-sm text-brand hover:text-brand-dark"
        >
          View all programs →
        </Link>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {featured.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
}

export default ProgramsPreview;
