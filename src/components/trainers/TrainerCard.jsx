// src/components/trainers/TrainerCard.jsx
import ImageOverlay from "../common/ImageOverlay.jsx";

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function TrainerCard({ trainer }) {
  const initials = getInitials(trainer.name);

  return (
    <article className="flex flex-col rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition-transform duration-200 hover:-translate-y-1 dark:border-white/10 dark:bg-[#020617] dark:shadow-[0_18px_45px_rgba(0,0,0,0.75)]">
      {/* Image */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        {trainer.photoUrl ? (
          <img
            src={trainer.photoUrl}
            alt={trainer.name}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-emerald-500/25 via-slate-200 to-white dark:from-brand/40 dark:via-dark-soft dark:to-[#020617]">
            <span className="text-3xl font-semibold text-slate-800 dark:text-white">
              {initials}
            </span>
          </div>
        )}

        {/* ✅ Subtle overlay so any text on image would be readable */}
        <ImageOverlay position="bottom" strength="soft" />
      </div>

      {/* Content */}
      <div className="px-4 md:px-5 py-4 md:py-5 space-y-2 text-left">
        <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50">
          {trainer.name}
        </h3>

        <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-700 dark:text-brand">
          {trainer.role}
        </p>

        {trainer.focus && (
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            {trainer.focus}
          </p>
        )}

        <div className="pt-2 space-y-1 text-[11px] md:text-xs text-slate-600 dark:text-slate-400">
          {trainer.yearsExperience != null && (
            <p>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Experience:
              </span>{" "}
              {trainer.yearsExperience} years
            </p>
          )}
          {trainer.credentials && (
            <p>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Credentials:
              </span>{" "}
              {trainer.credentials}
            </p>
          )}
          {trainer.location && (
            <p>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Based in:
              </span>{" "}
              {trainer.location}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default TrainerCard;
