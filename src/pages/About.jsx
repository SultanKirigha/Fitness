// src/pages/About.jsx
import {
  Mountain,
  Users,
  HeartPulse,
  Footprints,
} from "lucide-react";


const CLOUD =
  import.meta.env.VITE_CLOUDINARY_BASE ||
  "https://res.cloudinary.com/dqgxq1mp2/image/upload";

// Helper to build full Cloudinary URLs from a short path
const img = (path) => `${CLOUD}/${path}`;


function About() {
  return (
    <main className="py-10 md:py-16 space-y-14">
      {/* HERO SECTION */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
        {/* Left – copy */}
        <div className="space-y-4 md:space-y-6">
          <p className="text-[11px] uppercase tracking-[0.26em] text-brand">
            About Combatfit
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Outdoor training for real life, not just the gym.
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-xl">
            Combatfit is an outdoor–first strength and conditioning crew.
            We blend hikes, hill sprints, and simple strength work so you
            can move better, feel stronger, and actually enjoy training.
          </p>
          <p className="text-xs md:text-sm text-slate-300 max-w-xl">
            Sessions are run in small groups with coaches who actually know
            your name, your goals, and your current level. No mirrors, no
            chaos &mdash; just structured blocks that fit around busy life.
          </p>

          <div className="grid gap-4 md:grid-cols-3 text-[11px] md:text-xs">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <p className="text-slate-400">Founded</p>
              <p className="text-brand text-base md:text-lg font-semibold">
                2024
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <p className="text-slate-400">Outdoor sessions</p>
              <p className="text-brand text-base md:text-lg font-semibold">
                150+ / year
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <p className="text-slate-400">Community</p>
              <p className="text-brand text-base md:text-lg font-semibold">
                Nairobi &amp; beyond
              </p>
            </div>
          </div>
        </div>

        {/* Right – large image card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand/20 via-dark-soft to-dark shadow-[0_0_90px_rgba(34,197,94,0.5)]">
            <div className="relative aspect-[4/3] md:aspect-[5/4]">
              <img
                src={img("combatfit/about/family-going-adventure-together_lzyarp.jpg")}
                alt="Combatfit group hiking outdoors"
                className="h-full w-full object-cover opacity-95"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            </div>

            <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 space-y-1 text-xs md:text-sm">
              <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-brand">
                <Mountain className="h-4 w-4" />
                <span>Ngong, Karura &amp; city parks</span>
              </p>
              <p className="text-slate-50 font-medium">
                Early mornings, fresh air, and people who actually show up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS / WHAT WE CARE ABOUT */}
      <section className="space-y-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          What Combatfit is built on
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-brand mb-1">
              <HeartPulse className="h-4 w-4" />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-slate-50">
              Strong, not wrecked
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Training should build you up, not leave you broken. We focus on
              progressive strength and conditioning you can recover from and
              repeat.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-brand mb-1">
              <Users className="h-4 w-4" />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-slate-50">
              Community first
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              We train in groups so you&apos;re supported on tough days and
              celebrated on good ones. No egos, no one left behind.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-brand mb-1">
              <Footprints className="h-4 w-4" />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-slate-50">
              Outside as default
            </h3>
            <p className="text-xs md:text-sm text-slate-300">
              Most sessions happen outside: trails, hills, and open spaces
              around the city. Training should feel like life, not a treadmill.
            </p>
          </article>
        </div>
      </section>

      {/* COACH / STORY + IMAGE STRIP */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
        {/* Story + coach image */}
        <div className="space-y-4 md:space-y-5">
          <h2 className="text-xl md:text-2xl font-semibold">
            How Combatfit blocks work
          </h2>
          <p className="text-xs md:text-sm text-slate-300">
            We train in blocks instead of random sessions. Each block has a
            clear focus: building your base, pushing your engine, or preparing
            you for a specific hike or event.
          </p>
          <p className="text-xs md:text-sm text-slate-300">
            Sessions are colour–coded and posted in advance so you know what&apos;s
            coming. You can train with us three times a week or drop into key
            outdoor days when your schedule allows.
          </p>

          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-brand/70">
              <img
                src={img("combatfit/about/coach_uoaxxz.jpg")}
                alt="Combatfit coach"
                className="h-full w-full object-cover image-rendering-smooth fit-center image-contain"
              />
            </div>
            <div className="text-xs md:text-sm">
              <p className="font-semibold text-slate-50">Your coaches</p>
              <p className="text-[11px] md:text-xs text-slate-300">
                Certified strength coaches and outdoor leaders who actually
                train the way they coach.
              </p>
            </div>
          </div>
        </div>

        {/* Image collage */}
        <div className="grid gap-4 grid-cols-2">
          <div className="col-span-2 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <div className="relative aspect-[16/9]">
              <img
                src={img("combatfit/about/training-session_hnyicw.jpg")}
                alt="Outdoor training session"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
              <p className="absolute left-4 bottom-3 text-[11px] md:text-xs text-slate-100">
                Early morning conditioning block in the park.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="relative aspect-[4/5]">
              <img
                src={img("combatfit/about/hike_ls0q1u.jpg")}
                alt="Combatfit hike"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/85 via-transparent to-transparent" />
              <p className="absolute left-3 bottom-3 text-[11px] text-slate-100">
                Community hikes and trail days every block.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="relative aspect-[4/5]">
              <img
                src={img("combatfit/about/medium-shot-fit-people-together_ay0kej.jpg")}
                alt="Coach demoing movement"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/85 via-transparent to-transparent" />
              <p className="absolute left-3 bottom-3 text-[11px] text-slate-100">
                Technique first, then intensity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-4 rounded-3xl border border-brand/60 bg-gradient-to-r from-brand/15 via-dark-soft to-dark p-5 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
            Ready to see it in person?
          </p>
          <h3 className="text-sm md:text-base font-semibold text-slate-50">
            Join the next outdoor session or hike.
          </h3>
          <p className="text-[11px] md:text-xs text-slate-300 max-w-xl">
            Check the Events page for upcoming hikes, hill sessions, and
            outdoor blocks. Pick a date, save your spot, and we&apos;ll handle the
            rest.
          </p>
        </div>
        <a
          href="/events"
          className="inline-flex items-center justify-center rounded-full bg-brand text-dark px-6 py-2.5 text-xs md:text-sm font-semibold hover:bg-brand-dark transition"
        >
          View upcoming events
        </a>
      </section>
    </main>
  );
}

export default About;
