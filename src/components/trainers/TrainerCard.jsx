import ImageOverlay from "../common/ImageOverlay.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";

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
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <article
      className={[
        "flex flex-col rounded-3xl overflow-hidden transition-transform duration-200 hover:-translate-y-1",
        isLight
          ? "border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
          : "border border-white/10 bg-[#020617] shadow-[0_18px_45px_rgba(0,0,0,0.75)]",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        {trainer.photoUrl ? (
          <img
            src={trainer.photoUrl}
            alt={trainer.name}
            className="h-full w-full object-contain object-center"
          />
        ) : (
          <div
            className={[
              "h-full w-full flex items-center justify-center",
              isLight
                ? "bg-gradient-to-br from-emerald-500/20 via-slate-100 to-white"
                : "bg-gradient-to-br from-emerald-500/25 via-[#0b1220] to-[#020617]",
            ].join(" ")}
          >
            <span
              className={[
                "text-3xl font-semibold",
                isLight ? "text-slate-900" : "text-white",
              ].join(" ")}
            >
              {initials}
            </span>
          </div>
        )}

        <ImageOverlay position="bottom" strength="soft" />
      </div>

      {/* Content */}
      <div className="px-4 md:px-5 py-4 md:py-5 space-y-2 text-left">
        <h3
          className={[
            "text-base md:text-lg font-semibold",
            isLight ? "text-slate-900" : "text-slate-50",
          ].join(" ")}
        >
          {trainer.name}
        </h3>

        <p
          className={[
            "text-[11px] uppercase tracking-[0.18em] font-semibold",
            isLight ? "text-emerald-800" : "text-emerald-400",
          ].join(" ")}
        >
          {trainer.role}
        </p>

        {trainer.focus && (
          <p
            className={[
              "text-xs md:text-sm leading-relaxed",
              isLight ? "text-slate-700" : "text-slate-200",
            ].join(" ")}
          >
            {trainer.focus}
          </p>
        )}

        <div
          className={[
            "pt-2 space-y-1 text-[11px] md:text-xs",
            isLight ? "text-slate-700" : "text-slate-400",
          ].join(" ")}
        >
          {trainer.yearsExperience != null && (
            <p>
              <span
                className={[
                  "font-semibold",
                  isLight ? "text-slate-900" : "text-slate-200",
                ].join(" ")}
              >
                Experience:
              </span>{" "}
              {trainer.yearsExperience} years
            </p>
          )}

          {trainer.credentials && (
            <p>
              <span
                className={[
                  "font-semibold",
                  isLight ? "text-slate-900" : "text-slate-200",
                ].join(" ")}
              >
                Credentials:
              </span>{" "}
              {trainer.credentials}
            </p>
          )}

          {trainer.location && (
            <p>
              <span
                className={[
                  "font-semibold",
                  isLight ? "text-slate-900" : "text-slate-200",
                ].join(" ")}
              >
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
