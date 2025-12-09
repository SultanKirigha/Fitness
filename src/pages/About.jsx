function About() {
  return (
    <section className="py-10 md:py-16 space-y-12">
      {/* Intro */}
      <header className="space-y-3 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-brand">
          About Safarishape
        </p>
        <h1 className="text-2xl md:3xl lg:text-4xl font-semibold">
          A training system built around real life, not just perfect days.
        </h1>
        <p className="text-xs md:text-sm text-slate-300">
          Safarishape exists for people who want to be strong, mobile, and
          consistent, even when work, family, and life are busy. No extremes,
          just sustainable progress that fits the season you are in.
        </p>
      </header>

      {/* Story + visual */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        {/* Story */}
        <div className="space-y-6 text-sm md:text-base text-slate-200">
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold">
              Built to remove friction from training
            </h2>
            <p className="text-slate-300">
              Most programs pretend you have unlimited time and perfect energy
              every week. Safarishape was designed for people who have meetings,
              commutes, school runs, and real commitments, but still want to
              feel athletic and capable.
            </p>
            <p className="text-slate-300">
              Instead of random workouts, you get clear phases and structure.
              Strength blocks, conditioning blocks, deload weeks, all mapped out
              so you always know what matters today and what can wait.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold">
              Data informed, coach led
            </h2>
            <p className="text-slate-300">
              The platform combines simple data with real coaching. Your
              dashboard controls the content people see on the site, and it can
              also become the place you track their progress over time. Less
              guesswork, more feedback, clearer decisions.
            </p>
            <p className="text-slate-300">
              Whether you are training a handful of athletes or a full gym
              community, Safarishape is meant to scale with you, not against
              you.
            </p>
          </div>
        </div>

        {/* Visual + mini note, no overlap */}
        <div className="space-y-4">
          <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand/25 via-dark-soft to-dark border border-white/10 shadow-[0_0_90px_rgba(16,185,129,0.6)] overflow-hidden">
            {/* Decorative rings */}
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full border border-brand/40" />
            <div className="absolute -left-2 -top-4 h-20 w-20 rounded-full border border-brand/20" />

            <div className="absolute inset-0 flex flex-col justify-end">
              <div className="p-4 md:p-5 space-y-3 text-xs md:text-sm">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-200">
                  What we focus on
                </p>
                <div className="grid gap-3">
                  <div className="rounded-xl bg-black/30 border border-white/10 px-3 py-2">
                    <p className="text-slate-400">Strength</p>
                    <p className="font-medium text-slate-50">
                      Progressive blocks that respect your joints and schedule.
                    </p>
                  </div>
                  <div className="rounded-xl bg-black/30 border border-white/10 px-3 py-2">
                    <p className="text-slate-400">Conditioning</p>
                    <p className="font-medium text-slate-50">
                      Enough engine work to feel sharp, not wrecked.
                    </p>
                  </div>
                  <div className="rounded-xl bg-black/30 border border-white/10 px-3 py-2">
                    <p className="text-slate-400">Sustainability</p>
                    <p className="font-medium text-slate-50">
                      Training that still fits when life gets busy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mini note now sits below, not overlapping */}
          <div className="rounded-2xl border border-white/10 bg-dark/90 backdrop-blur px-4 py-3 text-xs md:text-sm text-slate-200 shadow-lg shadow-black/50">
            <p className="font-semibold text-brand">Why the name Safarishape</p>
            <p>
              Safari means journey. Shape is how you move, feel, and live. The
              goal is not just a moment, it is a long term journey.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold">
          What we stand for
        </h2>
        <div className="grid gap-4 md:gap-6 md:grid-cols-3 text-xs md:text-sm">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-brand">
              Clarity
            </p>
            <p className="font-semibold text-slate-50">
              No mystery workouts, no confusing plans.
            </p>
            <p className="text-slate-300">
              Every phase has a clear focus, so you always know why you are
              doing what is on the page.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-brand">
              Adaptability
            </p>
            <p className="font-semibold text-slate-50">
              Training that bends, not breaks.
            </p>
            <p className="text-slate-300">
              Sessions can flex around travel, work spikes, and low energy
              days, without losing the bigger picture.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-brand">
              People first
            </p>
            <p className="font-semibold text-slate-50">
              Tools should support coaches, not replace them.
            </p>
            <p className="text-slate-300">
              The platform is built to amplify good coaching, honest
              conversations, and long term relationships.
            </p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold">
          How Safarishape fits into your ecosystem
        </h2>
        <div className="grid gap-4 md:grid-cols-3 text-xs md:text-sm">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-brand">
              1. Set up your site
            </p>
            <p className="text-slate-300">
              Use the dashboard to define your programs, pricing, team, and
              story. The public pages update in real time.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-brand">
              2. Connect clients
            </p>
            <p className="text-slate-300">
              Send people to a clean site that clearly explains how you train
              and what they can expect when they start.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-brand">
              3. Grow over time
            </p>
            <p className="text-slate-300">
              As your systems mature, the same structure can plug into real
              analytics, payment flows, and member areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
