// src/components/home/ProgramsPreview.jsx
import { NavLink } from "react-router-dom";
import { useSiteData } from "../../context/SiteDataContext.jsx";
import ProgramCard from "../programs/ProgramCard.jsx";

function ProgramsPreview() {
  const {
    siteData: { programs },
  } = useSiteData();

  // Show the first 3 programs on the home page
  const featuredPrograms = programs.slice(0, 3);

  return (
    <section className="py-10 md:py-16 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.26em] text-brand">
            Programs
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Blocks that match how you live.
          </h2>
          <p className="text-xs md:text-sm text-slate-300 max-w-xl">
            Start with strength foundations, build your engine outdoors, or get
            ready for a specific hike. Each block stacks with the next.
          </p>
        </div>

        <NavLink
          to="/programs"
          className="inline-flex items-center gap-2 rounded-full border border-brand/60 px-4 py-2 text-xs md:text-sm font-semibold text-brand hover:bg-brand hover:text-dark transition"
        >
          View all programs
        </NavLink>
      </header>

      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {featuredPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
}

export default ProgramsPreview;
