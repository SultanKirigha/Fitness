// src/pages/Programs.jsx
import { useSiteData } from "../context/SiteDataContext.jsx";
import ProgramsSchedule from "../components/programs/ProgramsSchedule.jsx";
import ProgramsVideoHero from "../components/programs/ProgramsVideoHero.jsx";

function Programs() {
  const {
    siteData: { programs },
  } = useSiteData();

  return (
    <section className="py-10 md:py-16 space-y-10">
      {/* Page header */}
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-brand">
          Programs
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold">
          Choose the track that fits your season.
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
          Strength, conditioning, and outdoor engine work that fit together in a
          bigger plan. Start where you are and move forward with clarity.
        </p>
      </header>

      {/* 🔥 New video hero showing coaching workouts */}
      <ProgramsVideoHero programs={programs} />

      {/* Program cards */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 shadow-md shadow-black/40 flex flex-col"
          >
            {/* Optional image at the top if you wired imageUrl in initialSiteData */}
            {program.imageUrl && (
              <div className="mb-3 rounded-xl overflow-hidden h-32 md:h-36 bg-black/40">
                <img
                  src={program.imageUrl}
                  alt={program.name}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <h2 className="text-base md:text-lg font-semibold">
              {program.name}
            </h2>
            <p className="text-[11px] uppercase tracking-[0.16em] text-brand mt-1">
              {program.level}
            </p>

            <p className="mt-2 text-xs md:text-sm text-slate-200 flex-1">
              {program.focus}
            </p>

            <div className="mt-3 text-[11px] md:text-xs text-slate-300 space-y-1">
              <p>Duration: {program.duration}</p>
              <p>Mode: {program.mode}</p>
              <p>Sessions per week: {program.sessionsPerWeek}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Weekly schedule section */}
      <ProgramsSchedule />
    </section>
  );
}

export default Programs;
