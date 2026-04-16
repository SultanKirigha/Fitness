// src/pages/Corporate.jsx
import { Link } from "react-router-dom";
import {
  Trees,
  Users,
  HeartPulse,
  CalendarDays,
  Target,
  ShieldCheck,
  Dumbbell,
  Footprints,
  ArrowRight,
} from "lucide-react";

const whatWeDo = [
  {
    id: 1,
    icon: Trees,
    title: "Outdoor fitness sessions",
    description:
      "Guided, high-energy training sessions in nature for all fitness levels.",
  },
  {
    id: 2,
    icon: Users,
    title: "Team-building experiences",
    description:
      "Challenges that improve communication, morale, and teamwork.",
  },
  {
    id: 3,
    icon: HeartPulse,
    title: "Wellness programs",
    description:
      "Structured programs designed to improve employee health and productivity.",
  },
];

const corporateBuild = [
  {
    id: 1,
    icon: CalendarDays,
    title: "Monthly Outdoor Experiences",
    bullets: [
      "Recurring sessions like runs, hikes, and bootcamps",
      "Build routine, consistency, and team engagement",
    ],
  },
  {
    id: 2,
    icon: Target,
    title: "Structured Wellness Programs (4–12 weeks)",
    bullets: [
      "Fitness, nutrition, and habit-building combined",
      "Focused on real transformation, not surface-level activity",
    ],
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Team Culture Development",
    bullets: [
      "Build trust, communication, and resilience",
      "Create stronger internal team connection through shared experience",
    ],
  },
  {
    id: 4,
    icon: Dumbbell,
    title: "Leadership Through Fitness",
    bullets: [
      "Encourage leaders to step up and set the tone",
      "Help teams learn to perform under pressure together",
    ],
  },
  {
    id: 5,
    icon: Footprints,
    title: "Active Lifestyle Integration",
    bullets: [
      "Step challenges and daily movement habits",
      "Long-term behavior change beyond a one-off event",
    ],
  },
];

const whyChoose = [
  "Practical fitness that is simple and effective",
  "A strong focus on consistency over hype",
  "High-energy sessions that people actually enjoy",
  "Real community building through shared effort",
];

const galleryItems = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1774371554/IMG_3253_th5wcs.jpg",
    title: "Team outdoor sessions",
    description:
      "High-energy sessions that get people moving together outside the office.",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1774371562/IMG_3404_bzvsbk.jpg",
    title: "Team connection",
    description:
      "Shared movement builds conversation, trust, and stronger relationships.",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1776333815/IMG_0505_ybwbb0.heic",
    title: "Wellness at work",
    description:
      "Structured wellness that supports better energy, focus, and recovery.",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1774371561/IMG_3365_qgg3ez.jpg",
    title: "Leadership & culture",
    description:
      "Leaders and teams grow through challenge, consistency, and follow-through.",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1776286387/IMG_0043.jpg_ln2ubk.jpg",
    title: "Outdoor team building",
    description:
      "Fresh environments create memorable sessions with stronger team engagement.",
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1774371532/IMG_3293_ypihxn.jpg",
    title: "High-energy experiences",
    description:
      "Premium but accessible formats designed for startups, corporates, and organizations.",
  },
];

function Corporate() {
  return (
    <section className="py-10 md:py-16 space-y-16 md:space-y-20">
      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center space-y-5">
        <p className="text-[11px] uppercase tracking-[0.26em] text-brand">
          Corporate wellness
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-50 leading-tight">
          Build stronger, healthier, more connected teams
        </h1>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-slate-300 leading-7">
          Combat Fit partners with companies to deliver outdoor fitness,
          team-building, and structured wellness programs that create real
          energy, discipline, and connection.
        </p>

        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 bg-brand text-dark text-sm md:text-base font-semibold hover:bg-brand-dark transition shadow-[0_0_30px_rgba(34,197,94,0.45)]"
          >
            Book a corporate session
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="space-y-6">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
            What we do
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
            Wellness that feels real, structured, and energizing
          </h2>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {whatWeDo.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:border-brand/50 transition-all duration-300"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 text-brand">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-base md:text-lg font-semibold text-slate-50">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-300 leading-6">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHAT WE'RE BUILDING */}
      <section className="space-y-6">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
            Long-term partnership
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
            What we&apos;re building with corporates
          </h2>
          <p className="text-sm md:text-base text-slate-300 leading-7">
            Combat Fit is not built around one-off events only. We help
            companies create ongoing wellness experiences that improve routine,
            culture, and long-term behavior change.
          </p>
        </div>

        <div className="grid gap-5 md:gap-6 lg:grid-cols-2">
          {corporateBuild.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="rounded-3xl border border-white/10 bg-[#020617] p-6 md:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-base md:text-lg font-semibold text-slate-50">
                      {item.title}
                    </h3>

                    <ul className="space-y-2 text-sm text-slate-300">
                      {item.bullets.map((bullet, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand/80 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
          Who it&apos;s for
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
          Built for modern teams and people-first organizations
        </h2>
        <p className="text-sm md:text-base text-slate-300 leading-7">
          We work with startups, corporates, and organizations investing in
          people, energy, culture, and long-term wellbeing.
        </p>
      </section>

      {/* WHY COMPANIES CHOOSE */}
      <section className="space-y-6">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
            Why Combat Fit
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
            Why companies choose Combat Fit
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChoose.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm md:text-base text-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.3)]"
            >
              <div className="mb-3 text-brand text-[11px] uppercase tracking-[0.18em]">
                0{index + 1}
              </div>
              <p className="leading-6">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="space-y-6">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
            Experience gallery
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
            A look at the kind of experiences we create
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020617] via-black/30 to-transparent" />
              </div>

              <div className="space-y-2 px-4 py-4 md:px-5">
                <h3 className="text-sm md:text-base font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-6">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* THE COMBAT FIT WAY */}
      <section className="max-w-5xl mx-auto rounded-[2rem] border border-brand/20 bg-gradient-to-br from-brand/10 via-white/5 to-[#020617] p-7 md:p-10 shadow-[0_0_60px_rgba(34,197,94,0.18)]">
        <div className="max-w-3xl space-y-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
            The Combat Fit way
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
            Fitness should be simple, consistent, and shared
          </h2>

          <div className="space-y-4 text-sm md:text-base text-slate-200 leading-7">
            <p>
              We believe progress does not come from random bursts of
              motivation. It comes from showing up, building rhythm, and making
              movement part of everyday life.
            </p>
            <p>
              We believe teams grow the same way. Through shared struggle,
              shared wins, and repeated moments that build trust, discipline,
              and resilience over time.
            </p>
            <p>
              Combat Fit helps companies turn wellness into something people can
              actually feel, enjoy, and sustain.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
          Ready to bring Combat Fit to your team?
        </h2>

        <p className="text-sm md:text-base text-slate-300 leading-7">
          Let&apos;s design a program that fits your company.
        </p>

        <div className="pt-1">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 bg-brand text-dark text-sm md:text-base font-semibold hover:bg-brand-dark transition shadow-[0_0_30px_rgba(34,197,94,0.45)]"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Corporate;