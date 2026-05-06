// src/pages/Pricing.jsx
import { useMemo } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { useSiteData } from "../context/SiteDataContext.jsx";

function Pricing() {
  const {
    siteData: { programs },
  } = useSiteData();

  const programsById = useMemo(() => {
    const map = new Map();
    programs.forEach((p) => map.set(p.id, p));
    return map;
  }, [programs]);

  const plans = [
    {
      id: "monthly-member",
      name: "Monthly Subscription",
      price: "KSH. 2,000",
      description:
        "Enjoy 1 month of premium outdoor sessions and get up to 20% off selected premium experiences.",
      note: "*Exclusive for Locals (Citizens)",
      color: "from-[#16a34a] via-[#0f8f3e] to-[#065f46]",
      programIds: ["strength-foundations"],
    },
    {
      id: "quarterly-member",
      name: "Quarterly Subscription",
      price: "KSH. 5,000",
      description:
        "Enjoy 3 months of premium outdoor sessions and get up to 20% off selected premium experiences.",
      note: "*Exclusive for Locals (Citizens)",
      oldPrice: "Save Ksh 1000",
      color: "from-[#ef3e5f] via-[#f0444f] to-[#f97316]",
      programIds: ["engine-outdoors"],
    },
    {
      id: "yearly-member",
      name: "Yearly Subscription",
      price: "KSH. 19,000",
      description:
        "Enjoy 12 months of premium outdoor sessions and get up to 20% off selected premium experiences.",
      note: "*Exclusive for Locals (Citizens)",
      oldPrice: "Save Ksh 5000",
      color: "from-[#7e22ce] via-[#6b21a8] to-[#4c1d95]",
      programIds: ["hike-prep", "engine-outdoors"],
    },
    {
      id: "international-monthly",
      name: "Monthly Subscription",
      price: "KSH. 3,500",
      description:
        "Enjoy 1 month of guided outdoor experiences designed for visiting and international members.",
      note: "*For Internationals",
      color: "from-[#f97316] via-[#f4511e] to-[#ea580c]",
      programIds: ["strength-foundations"],
    },
    {
      id: "international-quarterly",
      name: "Quarterly Subscription",
      price: "KSH. 7,000",
      description:
        "Enjoy 3 months of guided outdoor experiences with a flexible rhythm for longer stays.",
      note: "*For Internationals",
      color: "from-[#1d4ed8] via-[#2563eb] to-[#0ea5e9]",
      programIds: ["engine-outdoors"],
    },
  ];

  const terms = [
    {
      label: "What’s Included:",
      text: "Covers training experience and guide fees. Transport, food, gear and park fees are not included.",
    },
    {
      label: "How to Subscribe:",
      text: "Choose a membership and book via Events. Payment confirms your spot.",
    },
    {
      label: "Subscription Duration:",
      text: "Monthly, quarterly or yearly. No auto-renewal.",
    },
    {
      label: "Missed Sessions:",
      text: "Reach out early to reschedule to another session.",
    },
    {
      label: "After Subscribing:",
      text: "Go to Events and reserve your sessions.",
    },
    {
      label: "Timing:",
      text: "Best activated at the start of your training cycle.",
    },
  ];

  return (
    <main className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#050914] text-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[8%] h-[420px] w-[420px] rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute top-[35%] right-[6%] h-[360px] w-[360px] rounded-full bg-emerald-400/5 blur-[110px]" />
        <div className="absolute bottom-[8%] left-[20%] h-[320px] w-[320px] rounded-full bg-brand/7 blur-[110px]" />
      </div>

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-brand mb-5">
            Become a Member
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95]">
            Membership Plans
          </h1>

          <p className="mt-6 max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed">
            Flexible outdoor memberships built for real life movement,
            adventure, consistency, and community.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#subscriptions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-dark hover:bg-brand-dark transition shadow-[0_0_40px_rgba(34,197,94,0.35)]"
            >
              View subscriptions
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/events#upcoming"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-slate-100 hover:border-brand hover:text-brand transition"
            >
              Upcoming events
            </a>
          </div>
        </div>
      </section>

      <section id="subscriptions" className="relative py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand mb-3">
            Subscriptions
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10">
            Choose your membership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.slice(0, 3).map((plan) => {
              const linkedPrograms = plan.programIds
                .map((id) => programsById.get(id))
                .filter(Boolean);

              return (
                <article
                  key={plan.id}
                  className={`group relative min-h-[310px] rounded-[1.4rem] bg-gradient-to-br ${plan.color} p-7 md:p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/5" />
                  <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/15 blur-2xl" />
                  <div className="absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-black/15 blur-2xl" />

                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
                        {plan.name}
                      </h3>

                      <p className="text-xs md:text-sm font-semibold leading-snug max-w-[250px] mb-5 text-white/95">
                        {plan.description}
                      </p>

                      <p className="text-3xl md:text-4xl font-extrabold mb-2">
                        {plan.price}
                      </p>

                      {plan.oldPrice && (
                        <p className="text-xs line-through font-semibold mb-4 text-white/80">
                          {plan.oldPrice}
                        </p>
                      )}

                      {linkedPrograms.length > 0 && (
                        <p className="text-[11px] font-semibold text-white/85 mb-4">
                          {linkedPrograms.map((p) => p.name).join(" • ")}
                        </p>
                      )}
                    </div>

                    <div>
                      <a
                        href="/events#upcoming"
                        className="inline-flex items-center gap-1 text-xs font-extrabold hover:underline mb-8"
                      >
                        Become a member <ArrowRight className="h-3 w-3" />
                      </a>

                      <p className="text-xs font-extrabold text-white/95">
                        {plan.note}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {plans.slice(3).map((plan) => {
              const linkedPrograms = plan.programIds
                .map((id) => programsById.get(id))
                .filter(Boolean);

              return (
                <article
                  key={plan.id}
                  className={`group relative min-h-[250px] rounded-[1.4rem] bg-gradient-to-br ${plan.color} p-8 md:p-11 text-white shadow-[0_24px_70px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/5" />
                  <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-white/15 blur-2xl" />
                  <div className="absolute -left-16 -bottom-16 h-52 w-52 rounded-full bg-black/15 blur-2xl" />

                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
                        {plan.name}
                      </h3>

                      <p className="text-xs md:text-sm font-semibold leading-snug max-w-md mb-5 text-white/95">
                        {plan.description}
                      </p>

                      <p className="text-3xl md:text-4xl font-extrabold mb-3">
                        {plan.price}
                      </p>

                      {linkedPrograms.length > 0 && (
                        <p className="text-[11px] font-semibold text-white/85 mb-3">
                          {linkedPrograms.map((p) => p.name).join(" • ")}
                        </p>
                      )}
                    </div>

                    <div>
                      <a
                        href="/events#upcoming"
                        className="inline-flex items-center gap-1 text-xs font-extrabold hover:underline mb-5"
                      >
                        Become a member <ArrowRight className="h-3 w-3" />
                      </a>

                      <p className="text-xs font-extrabold text-white/95">
                        {plan.note}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand mb-3">
            Terms And Conditions
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10">
            How membership works
          </h2>

          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {terms.map((item) => (
              <p
                key={item.label}
                className="text-sm leading-relaxed text-slate-400"
              >
                <span className="font-extrabold text-slate-50">
                  {item.label}
                </span>{" "}
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
            <ShieldCheck className="h-6 w-6" />
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand mb-4">
            Start from Ksh 2,000 monthly
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl md:text-5xl font-extrabold leading-tight">
            Become part of a community that trains, explores, and grows outside.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-400">
            Start with the monthly membership, build consistency with quarterly,
            or commit to the full year when you are ready for more.
          </p>

          <a
            href="/events#upcoming"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-extrabold text-dark hover:bg-brand-dark transition"
          >
            Become a Member
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-400">
            {[
              "Outdoor strength and conditioning",
              "Community training sessions",
              "Adventure-ready movement support",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-brand" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;