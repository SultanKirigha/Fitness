import { useSiteData } from "../context/SiteDataContext.jsx";
import DashboardOverview from "../components/dashboard/DashboardOverview.jsx";
import DashboardActivity from "../components/dashboard/DashboardActivity.jsx";


function Dashboard() {
  const {
    siteData: {
      home: { heroTitle, heroSubtitle, primaryCta, secondaryCta, bmiImageUrl },
      programs,
      pricing,
      trainers,
    },
    updateHomeHero,
    updateProgram,
    updatePricingPlan,
    updateTrainer,
  } = useSiteData();

  const handleHeroChange = (field) => (event) => {
    updateHomeHero({ [field]: event.target.value });
  };

  const handleProgramChange = (programId, field) => (event) => {
    updateProgram(programId, { [field]: event.target.value });
  };

  const handlePlanChange = (planId, field) => (event) => {
    const value =
      field === "priceMonthly" ? Number(event.target.value || 0) : event.target.value;
    updatePricingPlan(planId, { [field]: value });
  };

  const handleTogglePopular = (planId) => () => {
    const current = pricing.find((p) => p.id === planId)?.isPopular;
    updatePricingPlan(planId, { isPopular: !current });
  };

  const handleTrainerChange = (trainerId, field) => (event) => {
    const value =
      field === "yearsExperience"
        ? Number(event.target.value || 0)
        : event.target.value;
    updateTrainer(trainerId, { [field]: value });
  };

  return (
    <section className="py-10 space-y-10">
      {/* Header */}
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          Safarishape Dashboard
        </h1>
        <p className="text-slate-300 text-sm max-w-2xl">
          Control your public site content from one place. Home hero, programs,
          pricing, and coaches all stay in sync with what you set here.
        </p>
      </header>

      {/* Stats overview */}
      <DashboardOverview />

      <DashboardActivity />

      {/* Home hero editor + info */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        {/* Hero form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
          <h2 className="text-lg font-semibold mb-4">Home hero content</h2>
          <div className="space-y-4 text-sm">
            <div>
              <label className="block mb-1 text-slate-300">Title</label>
              <input
                type="text"
                value={heroTitle}
                onChange={handleHeroChange("heroTitle")}
                className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
              />
            </div>

            <div>
              <label className="block mb-1 text-slate-300">Subtitle</label>
              <textarea
                value={heroSubtitle}
                onChange={handleHeroChange("heroSubtitle")}
                rows={3}
                className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand resize-none"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-slate-300">
                  Primary button text
                </label>
                <input
                  type="text"
                  value={primaryCta}
                  onChange={handleHeroChange("primaryCta")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-300">
                  Secondary button text
                </label>
                <input
                  type="text"
                  value={secondaryCta}
                  onChange={handleHeroChange("secondaryCta")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 pt-1">
              Changes here update the hero section on the Home page immediately.
            </p>
          </div>
        </div>

        {/* Hero info */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 text-sm text-slate-200">
          <h2 className="text-lg font-semibold mb-4">How this works</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              The forms update the shared <code>siteData</code> context.
            </li>
            <li>
              Home, Programs, Pricing, and Trainers pages read from the same
              data.
            </li>
            <li>
              Later we can connect this to an API or persistent storage.
            </li>
          </ul>
        </div>
      </div>

      {/* Programs editor */}
      <div className="space-y-4 mt-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">
              Programs content
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl mt-1">
              Edit the title, level, duration, and focus for each program. These
              changes flow through to the Programs page and the Home programs
              preview.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 text-sm space-y-3"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Program ID: {program.id}
              </p>

              <div>
                <label className="block mb-1 text-slate-300">Name</label>
                <input
                  type="text"
                  value={program.name}
                  onChange={handleProgramChange(program.id, "name")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-slate-300">Level</label>
                  <input
                    type="text"
                    value={program.level}
                    onChange={handleProgramChange(program.id, "level")}
                    className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-slate-300">Duration</label>
                  <input
                    type="text"
                    value={program.duration}
                    onChange={handleProgramChange(program.id, "duration")}
                    className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-slate-300">Focus</label>
                <textarea
                  rows={2}
                  value={program.focus}
                  onChange={handleProgramChange(program.id, "focus")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand resize-none"
                />
              </div>

              <p className="text-[11px] text-slate-400">
                This program appears on the Programs page and on the Home
                programs preview.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing editor */}
      <div className="space-y-4 mt-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Pricing plans</h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl mt-1">
              Adjust names, monthly prices, and highlights. You can also mark
              which plan should be shown as the most popular.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 text-sm space-y-3"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Plan ID: {plan.id}
              </p>

              <div>
                <label className="block mb-1 text-slate-300">Name</label>
                <input
                  type="text"
                  value={plan.name}
                  onChange={handlePlanChange(plan.id, "name")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-300">
                  Price per month (USD)
                </label>
                <input
                  type="number"
                  value={plan.priceMonthly}
                  onChange={handlePlanChange(plan.id, "priceMonthly")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-300">
                  Short description
                </label>
                <textarea
                  rows={2}
                  value={plan.description}
                  onChange={handlePlanChange(plan.id, "description")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand resize-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-300">Highlight</label>
                <input
                  type="text"
                  value={plan.highlight}
                  onChange={handlePlanChange(plan.id, "highlight")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>

              <button
                type="button"
                onClick={handleTogglePopular(plan.id)}
                className={`mt-2 inline-flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-full border ${
                  plan.isPopular
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-white/20 text-slate-300 hover:bg-white/5"
                }`}
              >
                <span>{plan.isPopular ? "✓" : "○"}</span>
                <span>Mark as most popular</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trainers editor */}
      <div className="space-y-4 mt-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">
              Coaching team
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl mt-1">
              Update coach names, roles, focus areas, photos, and credentials.
              These changes update the Trainers page and the Home coaches
              preview.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 text-sm space-y-3"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Trainer ID: {trainer.id}
              </p>

              <div>
                <label className="block mb-1 text-slate-300">Name</label>
                <input
                  type="text"
                  value={trainer.name}
                  onChange={handleTrainerChange(trainer.id, "name")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-300">Role</label>
                <input
                  type="text"
                  value={trainer.role}
                  onChange={handleTrainerChange(trainer.id, "role")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-300">Photo URL</label>
                <input
                  type="text"
                  value={trainer.photoUrl || ""}
                  onChange={handleTrainerChange(trainer.id, "photoUrl")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                  placeholder="https://..."
                />
                <p className="mt-1 text-[10px] text-slate-500">
                  Paste a direct image link (for example from your CDN or image
                  host).
                </p>
              </div>

              <div>
                <label className="block mb-1 text-slate-300">Focus</label>
                <textarea
                  rows={2}
                  value={trainer.focus}
                  onChange={handleTrainerChange(trainer.id, "focus")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand resize-none"
                />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-slate-300">
                    Years of experience
                  </label>
                  <input
                    type="number"
                    value={trainer.yearsExperience}
                    onChange={handleTrainerChange(
                      trainer.id,
                      "yearsExperience"
                    )}
                    className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-slate-300">Location</label>
                  <input
                    type="text"
                    value={trainer.location}
                    onChange={handleTrainerChange(trainer.id, "location")}
                    className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-slate-300">
                  Credentials
                </label>
                <input
                  type="text"
                  value={trainer.credentials}
                  onChange={handleTrainerChange(trainer.id, "credentials")}
                  className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                />
              </div>

              <p className="text-[11px] text-slate-400">
                This coach appears on the Trainers page and in the coaches
                preview on Home.
              </p>
            </div>
          ))}
        </div>
              {/* BMI image settings */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 space-y-3 text-sm">
        <h2 className="text-lg font-semibold">BMI section image</h2>
        <p className="text-xs md:text-sm text-slate-300 max-w-xl">
          Control the coach photo used in the BMI calculator on the Home page.
          Paste a direct image link from your image host or CDN.
        </p>
        <div className="space-y-2">
          <label className="block text-slate-300 text-xs md:text-sm">
            Image URL
          </label>
          <input
            type="text"
            value={bmiImageUrl || ""}
            onChange={(e) =>
              updateHomeHero({ bmiImageUrl: e.target.value })
            }
            className="w-full rounded-md bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
            placeholder="https://your-image-url"
          />
          <p className="text-[11px] text-slate-400">
            The BMI section on Home will update as soon as you save this file.
          </p>
        </div>
      </div>

      </div>
    </section>
  );
}

export default Dashboard;
