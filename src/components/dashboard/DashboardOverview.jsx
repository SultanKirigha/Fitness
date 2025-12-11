import { useSiteData } from "../../context/SiteDataContext.jsx";

function StatCard({ label, value, helper }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:px-5 md:py-4 shadow-md shadow-black/30 flex flex-col gap-1">
      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="text-xl md:text-2xl font-semibold text-brand">{value}</p>
      {helper && (
        <p className="text-[11px] md:text-xs text-slate-400">{helper}</p>
      )}
    </div>
  );
}

function DashboardOverview() {
  const {
    siteData: { home, programs, pricing, trainers },
  } = useSiteData();

  const heroWordCount = home.heroSubtitle.split(/\s+/).filter(Boolean).length;

  return (
    <section className="mb-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Programs"
          value={programs.length}
          helper="Shown on Home and Programs pages."
        />
        <StatCard
          label="Pricing plans"
          value={pricing.length}
          helper="Displayed on the Pricing page."
        />
        <StatCard
          label="Coaches"
          value={trainers.length}
          helper="Displayed on the Trainers page."
        />
        <StatCard
          label="Hero subtitle length"
          value={`${heroWordCount} words`}
          helper="Good range is 18–40 words."
        />
      </div>
    </section>
  );
}

export default DashboardOverview;
