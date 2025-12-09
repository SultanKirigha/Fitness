import { useSiteData } from "../../context/SiteDataContext.jsx";

function Hero() {
  const {
    siteData: {
      home: { heroTitle, heroSubtitle, primaryCta, secondaryCta, stats },
    },
  } = useSiteData();

  return (
    <section className="py-10 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        {/* Left side - text */}
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-brand">
            Safarishape Fitness
            <span className="h-[2px] w-10 rounded-full bg-brand/60" />
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            {heroTitle}
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            {heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-brand text-dark font-medium text-sm md:text-base shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:bg-brand-dark transition">
              {primaryCta}
            </button>
            <button className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-slate-500 text-sm md:text-base text-slate-100 hover:bg-white/5 transition">
              {secondaryCta}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 max-w-md">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center"
              >
                <p className="text-lg md:text-xl font-semibold text-brand">
                  {item.value}
                </p>
                <p className="text-[11px] md:text-xs text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - visual card */}
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand/25 via-dark-soft to-dark border border-white/10 shadow-[0_0_90px_rgba(16,185,129,0.6)] overflow-hidden">
            {/* Decorative rings */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-brand/40" />
            <div className="absolute -right-2 -top-4 h-24 w-24 rounded-full border border-brand/20" />

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col justify-end">
              <div className="p-4 md:p-5 space-y-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-200">
                  Today at Safarishape
                </p>
                <p className="text-sm md:text-base font-medium text-slate-50">
                  Strength and conditioning sessions are live. Clients are
                  checking in and logging their sets.
                </p>

                <div className="grid grid-cols-2 gap-3 text-[11px] md:text-xs text-slate-200">
                  <div className="rounded-xl bg-black/30 border border-white/10 px-3 py-2">
                    <p className="text-slate-400">Active sessions</p>
                    <p className="text-sm md:text-base font-semibold text-brand">
                      18
                    </p>
                  </div>
                  <div className="rounded-xl bg-black/30 border border-white/10 px-3 py-2">
                    <p className="text-slate-400">Check ins today</p>
                    <p className="text-sm md:text-base font-semibold text-brand">
                      64
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating mini card */}
          <div className="absolute -bottom-6 -left-2 md:-left-6 rounded-2xl border border-white/10 bg-dark/90 backdrop-blur px-4 py-3 text-xs md:text-sm text-slate-200 shadow-lg shadow-black/50">
            <p className="font-semibold text-brand">Next block starts</p>
            <p>Monday 6:00 AM - Strength Foundations</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
