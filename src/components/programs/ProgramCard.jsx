// src/components/programs/ProgramCard.jsx
import PropTypes from "prop-types";

function ProgramCard({ program }) {
  const {
    name,
    level,
    focus,
    duration,
    mode,
    sessionsPerWeek,
    imageUrl,
  } = program;

  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.7)] hover:-translate-y-1 hover:border-brand/70 transition-transform">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-brand/30 via-dark-soft to-dark flex items-center justify-center text-xs text-slate-100">
            Program image
          </div>
        )}

        {/* Level pill */}
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-brand border border-brand/40">
          {level}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 px-4 py-4 md:px-5 md:py-5 text-xs md:text-sm">
        <div className="space-y-1">
          <h3 className="text-sm md:text-base font-semibold text-slate-50">
            {name}
          </h3>
          <p className="text-xs md:text-sm text-slate-200">{focus}</p>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] md:text-xs text-slate-300">
          <p>
            <span className="font-semibold">Duration:</span> {duration}
          </p>
          <p>
            <span className="font-semibold">Mode:</span> {mode}
          </p>
          <p>
            <span className="font-semibold">Sessions:</span>{" "}
            {sessionsPerWeek} per week
          </p>
        </div>
      </div>
    </article>
  );
}

ProgramCard.propTypes = {
  program: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    level: PropTypes.string,
    focus: PropTypes.string,
    duration: PropTypes.string,
    mode: PropTypes.string,
    sessionsPerWeek: PropTypes.number,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default ProgramCard;
