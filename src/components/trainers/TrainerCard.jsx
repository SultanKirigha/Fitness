// src/components/trainers/TrainerCard.jsx

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

  const {
    name,
    role,
    focus,
    yearsExperience,
    credentials,
    location,
    photoUrl,
    specialties,
    availability,
    languages,
  } = trainer;

  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-[#26272b] shadow-lg shadow-black/40 hover:-translate-y-1 hover:border-brand/80 transition-transform duration-200">
      {/* Top image area */}
      <div className="relative aspect-[3/4] md:aspect-[4/5] bg-dark-soft overflow-hidden">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={name}
            className="h-full w-full object-cover object-top" // <-- anchor to top so heads aren’t cut
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
      <div className="px-4 md:px-5 py-4 md:py-5 space-y-3 text-left">
        {/* Name + role */}
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl font-semibold text-slate-50">
            {name}
          </h3>
          {role && (
            <p className="text-[11px] uppercase tracking-[0.16em] text-brand">
              {role}
            </p>
          )}
        </div>

        {/* Main focus / bio */}
        {focus && (
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
            {focus}
          </p>
        )}

        {/* Specialties chips (optional) */}
        {Array.isArray(specialties) && specialties.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {specialties.map((item) => (
              <span
                key={item}
                className="rounded-full bg-black/30 border border-white/10 px-2 py-0.5 text-[10px] text-slate-100"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Meta info */}
        <div className="space-y-1 text-[11px] md:text-xs text-slate-400 pt-1">
          {yearsExperience && (
            <p>
              <span className="font-semibold text-slate-200">
                Experience:
              </span>{" "}
              {yearsExperience} years
            </p>
          )}
          {credentials && (
            <p>
              <span className="font-semibold text-slate-200">
                Credentials:
              </span>{" "}
              {credentials}
            </p>
          )}
          {location && (
            <p>
              <span className="font-semibold text-slate-200">Based in:</span>{" "}
              {location}
            </p>
          )}
          {availability && (
            <p>
              <span className="font-semibold text-slate-200">
                Sessions:
              </span>{" "}
              {availability}
            </p>
          )}
          {languages && (
            <p>
              <span className="font-semibold text-slate-200">
                Languages:
              </span>{" "}
              {Array.isArray(languages) ? languages.join(", ") : languages}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default TrainerCard;
