// src/pages/Programs.jsx
import { useSiteData } from "../context/SiteDataContext.jsx";
import ProgramCard from "../components/programs/ProgramCard.jsx";
import ProgramsSchedule from "../components/programs/ProgramsSchedule.jsx";

function Programs() {
  const {
    siteData: { programs },
  } = useSiteData();

  return (
    <section className="py-10 md:py-16 space-y-10">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-brand">
          Programs
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold">
          Choose the track that fits your season.
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
          Strength, conditioning, and outdoor work that link together inside one
          bigger plan. Start where you are and move forward with clarity.
        </p>
      </header>

      {/* Program cards with images */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      {/* Weekly schedule calendar */}
      <ProgramsSchedule />
    </section>
  );
}

export default Programs;
