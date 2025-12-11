function PricingCard({ plan }) {
  const isPopular = plan.isPopular;

  return (
    <article
      className={`relative rounded-2xl border p-5 md:p-6 flex flex-col justify-between shadow-md shadow-black/20 bg-white/5 ${
        isPopular
          ? "border-brand/80 ring-2 ring-brand/40"
          : "border-white/10"
      }`}
    >
      {isPopular && (
        <span className="absolute -top-3 right-4 rounded-full bg-brand text-dark text-[10px] font-semibold px-3 py-1 shadow-md shadow-emerald-400/50">
          Most popular
        </span>
      )}

      <div className="space-y-2">
        <h3 className="text-lg md:text-xl font-semibold">{plan.name}</h3>
        <p className="text-xs md:text-sm text-slate-300">{plan.description}</p>
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl font-semibold text-brand">
            Ksh{plan.priceMonthly}
          </span>
          <span className="text-xs text-slate-400">/ month</span>
        </div>

        {plan.highlight && (
          <p className="text-[11px] text-slate-400">{plan.highlight}</p>
        )}

        <button className="mt-3 w-full rounded-full bg-brand text-dark text-xs md:text-sm font-medium py-2.5 shadow-md shadow-emerald-500/40 hover:bg-brand-dark transition">
          Choose plan
        </button>
      </div>
    </article>
  );
}

export default PricingCard;
