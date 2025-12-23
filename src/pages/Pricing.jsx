// src/pages/Pricing.jsx
import { useSiteData } from "../context/SiteDataContext.jsx";

function Pricing() {
  const {
    siteData: { pricing },
  } = useSiteData();

  return (
    <section className="py-10 md:py-16 space-y-10">
      {/* Header */}
      <header className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-brand">
          Pricing
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold">
          Pick the level of support that matches your season.
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto">
          Every membership gives you access to the Safarishape environment.
          Higher tiers add structure, coaching, and accountability so you can
          move faster with less guesswork.
        </p>
        <p className="text-[11px] md:text-xs text-slate-400 max-w-xl mx-auto">
          All plans are billed monthly. You can upgrade, downgrade, or pause
          before your next billing cycle.
        </p>
      </header>

      {/* Pricing cards */}
      <div className="grid gap-5 md:gap-6 md:grid-cols-3">
        {pricing.map((plan) => (
          <article
            key={plan.id}
            className={`flex flex-col rounded-3xl border bg-white/5 p-5 md:p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)] ${
              plan.isPopular
                ? "border-brand shadow-[0_0_60px_rgba(34,197,94,0.6)]"
                : "border-white/10"
            }`}
          >
            {/* Top tag and title */}
            <div className="space-y-3">
              {plan.isPopular && (
                <p className="inline-flex items-center rounded-full bg-brand/15 border border-brand/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand">
                  Most popular
                </p>
              )}

              <div className="space-y-1">
                <h2 className="text-lg md:text-xl font-semibold">
                  {plan.name}
                </h2>
                <p className="text-2xl md:text-3xl font-semibold">
                  Ksh {plan.priceMonthly}
                  <span className="text-xs md:text-sm font-normal text-slate-300">
                    {" "}
                    per month
                  </span>
                </p>
              </div>

              <p className="text-xs md:text-sm text-slate-300">
                {plan.description}
              </p>
              {plan.highlight && (
                <p className="text-[11px] md:text-xs text-brand">
                  {plan.highlight}
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-white/10" />

            {/* Features */}
            <div className="flex-1">
              <p className="text-[11px] md:text-xs font-semibold text-slate-200 mb-2">
                What is included
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-slate-100">
                {plan.features?.map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="mt-[5px] h-2.5 w-2.5 rounded-full bg-brand/20 border border-brand/60" />
                    <p className="text-slate-200">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              className={`mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                plan.isPopular
                  ? "bg-brand text-dark hover:bg-brand-dark"
                  : "bg-white/10 text-slate-100 hover:bg-white/15"
              }`}
            >
              Get started with {plan.name}
            </button>
          </article>
        ))}
      </div>

      {/* Small help text */}
      <div className="text-center text-[11px] md:text-xs text-slate-400 space-y-1">
        <p>
          Not sure which plan fits you best? Start with Coaching and adjust up
          or down once you see how it feels in your week.
        </p>
        <p>
          For team or corporate rates, reach out to{" "}
          <a
            href="mailto:hello@safarishape.fit"
            className="text-brand hover:text-brand-dark"
          >
            hello@combactfitness.fit
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Pricing;
