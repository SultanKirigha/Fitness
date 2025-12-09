function ProgramCard({ program }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 flex flex-col justify-between hover:border-brand/70 hover:-translate-y-1 transition-transform transition-colors duration-200">
      <div className="space-y-2">
        <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-brand">
          {program.level} • {program.duration}
        </p>
        <h3 className="text-lg md:text-xl font-semibold">{program.name}</h3>
        <p className="text-xs md:text-sm text-slate-300">{program.focus}</p>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <span>{program.mode || "Hybrid training"}</span>
        <span className="inline-flex items-center gap-1 text-brand">
          {program.sessionsPerWeek
            ? `${program.sessionsPerWeek} sessions / week`
            : "Coach check-ins"}
        </span>
      </div>
    </article>
  );
}

export default ProgramCard;
