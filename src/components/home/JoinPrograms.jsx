import { FiCheckCircle } from "react-icons/fi";
import { useSiteData } from "../../context/SiteDataContext.jsx";

function JoinPrograms() {
  const {
    siteData: { programs },
  } = useSiteData();

  // Use first 3–4 programs as highlights
  const highlightPrograms = programs.slice(0, 3);

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#020617] via-[#020617] to-[#020b10] border border-white/10 shadow-[0_0_80px_rgba(15,118,110,0.7)]">
          <div className="grid gap-4 md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)] items-stretch">
            {/* Left image block */}
            <div className="p-4 md:p-6">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/70">
                <img
                  src="https://img.freepik.com/free-photo/full-shot-woman-working-out-with-trainer_23-2148948553.jpg?t=st=1765844623~exp=1765848223~hmac=e0ce479d7d5b3d64320168b99143f06861f1ffeacf8e6acb8ea5b63ca16b3a18&w=1480"
                  alt="Athlete training at Safarishape"
                  className="w-full h-full object-cover"
                />
                {/* subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>
            </div>

            {/* Right content */}
            <div className="px-6 py-8 md:px-10 md:py-12 space-y-6 flex flex-col justify-center">
              <header className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.24em] text-brand">
                  Join Safarishape now
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                  Train with a system that respects your life and your goals.
                </h2>
                <p className="text-xs md:text-sm text-slate-300 max-w-xl">
                  Choose the track that fits your season, then let the structure
                  and coaching carry you forward. No guesswork, just clear next
                  steps every week.
                </p>
              </header>

              {/* Bullet list driven by programs */}
              <ul className="space-y-4 text-xs md:text-sm text-slate-100">
                {highlightPrograms.map((program) => (
                  <li key={program.id} className="flex items-start gap-3">
                    <span className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-full bg-brand/15 border border-brand/50 text-brand">
                      <FiCheckCircle className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="font-semibold">{program.name}</p>
                      <p className="text-[11px] md:text-[12px] text-slate-300">
                        {program.focus}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand text-dark font-semibold text-sm shadow-[0_0_40px_rgba(34,197,94,0.7)] hover:bg-brand-dark transition">
                Join us today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinPrograms;
