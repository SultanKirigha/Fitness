import { useSiteData } from "../../context/SiteDataContext.jsx";

function PricingPreview() {
  const {
    siteData: { pricing },
  } = useSiteData();

  return (
    <section className="py-10 md:py-16 space-y-8">
      <header className="space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-brand">
          Pricing
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Choose how much support you want.
        </h2>
        <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto">
          Every tier gets you into the gym. Higher tiers add more structure,
          coaching, and accountability so you can move faster with less guesswork.
        </p>
      </header>

      <div className="grid gap-5 md:gap-6 md:grid-cols-3">
        {pricing.map((plan) => (
          <article
            key={plan.id}
            className={`flex flex-col rounded-3xl border bg-white/5 p-5 md:p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)] Ksh{
              plan.isPopular ? "border-brand shadow-[0_0_60px_rgba(34,197,94,0.6)]" : "border-white/10"
            }`}
          >
            {/* Header */}
            <div className="space-y-2">
              {plan.isPopular && (
                <p className="inline-flex items-center rounded-full bg-brand/15 border border-brand/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand">
                  Most popular
                </p>
              )}
              <h3 className="text-lg md:text-xl font-semibold">{plan.name}</h3>
              <p className="text-2xl md:text-3xl font-semibold">
                Ksh{plan.priceMonthly}
                <span className="text-xs md:text-sm font-normal text-slate-300">
                  {" "}
                  / month
                </span>
              </p>
              <p className="text-xs md:text-sm text-slate-300">
                {plan.description}
              </p>
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-white/10" />

            {/* Features list */}
            <ul className="flex-1 space-y-2 text-xs md:text-sm text-slate-100">
              {plan.features?.map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="mt-[3px] h-3 w-3 rounded-full bg-brand/20 border border-brand/60" />
                  <p className="text-slate-200">{item}</p>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 bg-brand text-dark text-sm font-semibold hover:bg-brand-dark transition">
              Get started with {plan.name}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PricingPreview;
