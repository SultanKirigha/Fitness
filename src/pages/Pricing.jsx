// src/pages/Pricing.jsx
import { useMemo, useState } from "react";
import { Check, Mountain, Activity, Sun } from "lucide-react";
import { useSiteData } from "../context/SiteDataContext.jsx";

function Pricing() {
  const {
    siteData: { programs },
  } = useSiteData();

  const [hoveredPlanId, setHoveredPlanId] = useState(null);

  // quick map from id -> program
  const programsById = useMemo(() => {
    const map = new Map();
    programs.forEach((p) => map.set(p.id, p));
    return map;
  }, [programs]);

  const plans = [
    {
      id: "outdoor-start",
      name: "Outdoor Start Pass",
      price: "Ksh 5,000",
      billing: "per 4-week block",
      badge: "Best for new members",
      icon: Sun,
      highlight: false,
      programIds: ["strength-foundations"],
      spots: "Up to 10 athletes per block",
      commitment: "4 weeks",
      support: "Group coaching in person",
      features: [
        "Access to Strength Foundations outdoor sessions",
        "3 guided sessions per week",
        "Progression-friendly movements for all levels",
        "Coach-led warm ups and cooldowns",
        "Form checks and basic movement cues",
      ],
    },
    {
      id: "engine-block",
      name: "Engine + Hills Block",
      price: "Ksh 7,500",
      billing: "per 4-week block",
      badge: "Most popular",
      icon: Activity,
      highlight: true, // middle card
      programIds: ["engine-outdoors"],
      spots: "Small group, 8–10 athletes",
      commitment: "4 weeks",
      support: "Group coaching + check-ins",
      features: [
        "Access to Engine Outdoors conditioning sessions",
        "Trail loops, hill repeats, and mixed intervals",
        "Pacing guidance and heart-rate awareness",
        "Recovery and breathwork at every session",
        "Simple homework runs you can do solo",
      ],
    },
    {
      id: "hike-prep-plus",
      name: "Hike Prep + Hybrid Coaching",
      price: "Ksh 9,500",
      billing: "per 4-week block",
      badge: "For big goals",
      icon: Mountain,
      highlight: false,
      programIds: ["hike-prep", "engine-outdoors"],
      spots: "Limited to 6 athletes",
      commitment: "4 weeks",
      support: "Hybrid: outdoor + remote check-ins",
      features: [
        "Access to Hike Prep Block and selected Engine Outdoors days",
        "Leg strength, core work, and longer conditioning sessions",
        "Individual check-in at the start and end of the block",
        "Trail and gear advice for upcoming hikes",
        "Priority access to special event hikes",
      ],
    },
  ];

  return (
    <main className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <section className="space-y-4 md:space-y-5 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.26em] text-brand">
            Pricing
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Simple blocks that match how you train outdoors.
          </h1>
          <p className="text-xs md:text-sm text-slate-300">
            All Combatfit blocks are built around real weeks, real trails, and
            real life. Pick the block that matches your season and we will
            handle the structure, progressions, and coaching.
          </p>
          <p className="text-[11px] md:text-xs text-slate-400">
            * All prices are in{" "}
            <span className="font-semibold">Kenyan Shillings (Ksh)</span>. Payment details are
            shared after your spot is confirmed.
          </p>
        </section>

        {/* Pricing cards */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const linkedPrograms = plan.programIds
              .map((id) => programsById.get(id))
              .filter(Boolean);

            const isHovered = hoveredPlanId === plan.id;
            const isBaseHighlight = plan.highlight; // middle card
            const isHighlightSuppressed =
              isBaseHighlight && hoveredPlanId && hoveredPlanId !== plan.id;
            const isHighlightActive = isBaseHighlight && !isHighlightSuppressed;

            // Card should look "green" if:
            // - it is the active highlight (middle card when not suppressed)
            // - OR it is the one currently hovered
            const shouldLookHighlighted = isHighlightActive || isHovered;

            const cardBorderClasses = shouldLookHighlighted
              ? "border-brand/70 shadow-[0_0_80px_rgba(34,197,94,0.45)]"
              : "border-white/10";

            const ctaClasses = shouldLookHighlighted
              ? "bg-brand text-dark hover:bg-brand-dark border border-brand"
              : "border border-white/20 text-slate-50 hover:border-brand/70";

            return (
              <article
                key={plan.id}
                className={`group relative flex h-full flex-col rounded-3xl bg-white/5 p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-1 ${cardBorderClasses}`}
                onMouseEnter={() => setHoveredPlanId(plan.id)}
                onMouseLeave={() => setHoveredPlanId(null)}
              >
                {/* Icon + name + badge */}
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-sm md:text-base font-semibold text-slate-50">
                        {plan.name}
                      </h2>
                      <p className="text-[11px] md:text-xs text-slate-400">
                        {plan.billing}
                      </p>
                    </div>
                  </div>

                  {plan.badge && (
                    <div className="inline-flex self-start rounded-full bg-brand/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-brand">
                      {plan.badge}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <p className="flex items-baseline gap-1">
                    <span className="text-lg md:text-2xl font-semibold">
                      {plan.price}
                    </span>
                    <span className="text-[11px] md:text-xs text-slate-400">
                      {plan.billing}
                    </span>
                  </p>
                  <p className="mt-1 text-[11px] md:text-xs text-slate-400">
                    {plan.spots}
                  </p>
                </div>

                {/* Programs included */}
                {linkedPrograms.length > 0 && (
                  <div className="mb-4 space-y-1.5">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-brand">
                      Programs in this block
                    </p>
                    <ul className="space-y-1 text-[11px] md:text-xs text-slate-200">
                      {linkedPrograms.map((p) => (
                        <li key={p.id} className="flex items-center gap-2">
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand/20">
                            <Check className="h-3 w-3 text-brand" />
                          </span>
                          <span className="font-medium">{p.name}</span>
                          {p.duration && (
                            <span className="text-slate-400">
                              · {p.duration}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Details */}
                <div className="mb-4 space-y-1 text-[11px] md:text-xs text-slate-300">
                  <p>
                    <span className="font-semibold">Block length:</span>{" "}
                    {plan.commitment}
                  </p>
                  <p>
                    <span className="font-semibold">Support:</span>{" "}
                    {plan.support}
                  </p>
                </div>

                {/* Features */}
                <ul className="mt-auto space-y-2 text-[11px] md:text-xs text-slate-200">
                  {plan.features.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-[2px] h-3 w-3 text-brand shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-5 pt-3 border-t border-white/10 flex flex-col gap-2">
                  <a
                    href="/events#upcoming"
                    className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold transition ${ctaClasses}`}
                  >
                    Join this block via Events
                  </a>
                  <p className="text-[10px] md:text-xs text-slate-400">
                    You will book a specific date on the Events page. Payment
                    confirms your spot.
                  </p>
                </div>
              </article>
            );
          })}
        </section>

        {/* Comparison / explainer */}
        <section className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7">
          <h2 className="text-sm md:text-base font-semibold text-slate-50">
            Which block should I start with?
          </h2>
          <div className="grid gap-5 md:grid-cols-3 text-[11px] md:text-xs text-slate-300">
            <div className="space-y-2">
              <p className="font-semibold text-slate-50">
                Outdoor Start Pass (Strength Foundations)
              </p>
              <p>
                You are new to structured training or coming back after a break.
                You want to build consistency, learn good patterns, and feel
                better on hills and stairs.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-50">
                Engine + Hills Block (Engine Outdoors)
              </p>
              <p>
                You already walk, jog, or train a bit and want to push your
                engine without living on a treadmill. You enjoy trails, sweat,
                and feeling faster on climbs.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-50">
                Hike Prep + Hybrid Coaching
              </p>
              <p>
                You have a specific hike or adventure in mind and want structure
                plus accountability. This is for people ready to commit to a
                focused 4-week push.
              </p>
            </div>
          </div>
          <p className="text-[11px] md:text-xs text-slate-400">
            Still not sure?{" "}
            <a href="/contact" className="text-brand hover:underline">
              Message the team
            </a>{" "}
            and we will recommend a starting block based on where you are now.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Pricing;
