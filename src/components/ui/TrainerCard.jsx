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
    <article className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#26272b] shadow-lg shadow-black/40 hover:-translate-y-1 hover:border-brand/80 transition-transform transition-colors duration-200">
      {/* Top image area */}
      <div className="relative h-72 md:h-80 bg-dark-soft flex items-center justify-center">
        {trainer.photoUrl ? (
          <img
            src={trainer.photoUrl}
            alt={trainer.name}
            className="max-h-full w-full object-contain"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-brand/40 via-dark-soft to-dark">
            <span className="text-3xl font-semibold text-white">
              {initials}
            </span>
          </div>
        )}

        {/* Subtle gradient at bottom of image */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#26272b] via-transparent to-transparent" />
      </div>

      {/* Bottom details area */}
      <div className="px-4 md:px-5 py-4 md:py-5 space-y-2 text-left">
        <h3 className="text-lg md:text-xl font-semibold text-slate-50">
          {trainer.name}
        </h3>
        <p className="text-[11px] uppercase tracking-[0.16em] text-brand">
          {trainer.role}
        </p>

        <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
          {trainer.focus}
        </p>

        <div className="mt-3 space-y-1 text-[11px] md:text-xs text-slate-400">
          <p>Experience: {trainer.yearsExperience} years</p>
          <p>Credentials: {trainer.credentials}</p>
          <p>Based in: {trainer.location}</p>
        </div>
      </div>
    </article>
  );
}

export default TrainerCard;
