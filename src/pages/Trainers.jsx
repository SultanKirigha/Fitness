// src/pages/Trainers.jsx
import { useRef, useState } from "react";
import { useSiteData } from "../context/SiteDataContext.jsx";
import TrainerCard from "../components/trainers/TrainerCard.jsx";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Activity,
  HeartPulse,
  MapPin,
  MessageCircle,
  Clock,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

function Trainers() {
  const {
    siteData: { trainers },
  } = useSiteData();

  const scrollRef = useRef(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!trainers || trainers.length === 0) {
    return (
      <main className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-sm text-slate-300">No trainers loaded yet.</p>
        </div>
      </main>
    );
  }

  const scrollByCard = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("[data-trainer-card]");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = 24; // gap-6
    const amount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;

    container.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  const faqItems = [
    {
      question: "Do I need to be “fit enough” before I join a Combatfit session?",
      answer:
        "No. Sessions are built with options. Coaches scale your pace, distance, and movement choices so you can start from where you are now. The only thing you need is the ability to walk comfortably and a willingness to listen to your body.",
    },
    {
      question: "What type of people usually train with Combatfit?",
      answer:
        "Teachers, software engineers, parents, creatives, founders – people with real lives and full days. Most are not full-time athletes. They want to feel stronger, move better outdoors, and have a plan that doesn’t break their joints or their calendar.",
    },
    {
      question: "How much attention will I get in a group session?",
      answer:
        "We keep groups intentionally small so a coach can actually see your reps. You’ll get corrections on your posture, breathing, and how to adjust movements if something doesn’t feel right. If you need extra help, we can recommend a hybrid or 1:1 block.",
    },
    {
      question: "What happens if I miss a session in my block?",
      answer:
        "Life happens. Let your coach know and we’ll help you plug a simple alternative into your week – at home, in a small park, or on your next available morning. We care more about your long-term consistency than a perfect attendance score.",
    },
    {
      question: "Can I talk to a coach before I commit to a full block?",
      answer:
        "Yes. Use the Contact page to send a short note about your schedule, any injuries, and your main goal. One of the coaches will reply with a simple starting point and suggest the block or outdoor sessions that make the most sense for you.",
    },
  ];

  const handleToggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <main className="py-10 md:py-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="space-y-3 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.26em] text-brand flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Coaching team</span>
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Coaches who lift, move, and live this with you.
          </h1>
          <p className="text-xs md:text-sm text-slate-300">
            Combatfit is built on real people, not random programs. Each coach
            brings a different background, but they all care about the same
            thing: better movement, joint friendly strength, and a training plan
            that fits your season of life.
          </p>
        </header>

        {/* Why train with a coach */}
        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-brand">
              <Activity className="h-4 w-4" />
            </div>
            <h2 className="text-sm md:text-base font-semibold text-slate-50">
              Better sessions, less guessing
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              Coaches build sessions that link together week to week. You do not
              have to decide what to do when you get to the hill or park – you
              just show up and follow the plan.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-brand">
              <HeartPulse className="h-4 w-4" />
            </div>
            <h2 className="text-sm md:text-base font-semibold text-slate-50">
              Safer progress over time
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              We pay attention to tempo, range, and how you move, not just how
              sweaty the session feels. The goal is to build capacity without
              beating up your joints in the process.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/15 text-brand">
              <MessageCircle className="h-4 w-4" />
            </div>
            <h2 className="text-sm md:text-base font-semibold text-slate-50">
              Real feedback, not just numbers
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              You can ask questions, adjust sessions, or flag anything that does
              not feel right. Progress is a conversation, not a PDF.
            </p>
          </div>
        </section>

        {/* Horizontal trainer strip */}
        <section className="space-y-4" aria-label="Combatfit coaches">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 text-[11px] md:text-xs text-slate-400">
            <span>The full Combatfit coaching crew</span>
            <span>
              Different faces at different sessions, same focus on movement
              quality, strength, and sustainable conditioning.
            </span>
          </div>

          <div className="relative">
            {/* Left arrow */}
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-brand text-dark shadow-lg shadow-black/60 hover:bg-brand-dark transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Scrollable strip */}
            <div
              ref={scrollRef}
              className="trainer-scroll flex gap-6 overflow-x-auto scroll-smooth py-2 md:py-3"
            >
              {trainers.map((trainer) => (
                <div
                  key={trainer.id || trainer.name}
                  data-trainer-card
                  className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px]"
                >
                  <TrainerCard trainer={trainer} />
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              type="button"
              onClick={() => scrollByCard("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-brand text-dark shadow-lg shadow-black/60 hover:bg-brand-dark transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <p className="text-[11px] md:text-xs text-slate-500">
            Tip: Coach profiles, photos, and roles can be updated from the
            Combatfit dashboard. Changes show here and on the Home page.
          </p>
        </section>

        {/* How coaching works */}
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">
            How Combatfit coaching works
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-brand">
                Step 1
              </p>
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                Pick your block or outdoor session
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                Choose a program that fits your season: foundations, engine, or
                hike prep. For outdoor sessions, you can book specific dates on
                the Events page.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-brand">
                Step 2
              </p>
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                Meet the coach on the ground
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                Coaches walk you through the warm up, key movements, and how to
                scale for your level. You get corrections in the moment so each
                rep gives you something back.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-brand">
                Step 3
              </p>
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                Track progress block by block
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                We look at attendance, effort, and how your body is feeling.
                That feedback shapes the next block so you keep moving forward
                instead of starting over.
              </p>
            </div>
          </div>
        </section>

        {/* Where you will see us */}
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">
            Where you will train with these coaches
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 text-brand">
                <MapPin className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-slate-50">
                Trails and hills
              </p>
              <p className="text-xs md:text-sm text-slate-300">
                Ngong Hills, Karura, and other outdoor spots around Nairobi
                where we can blend movement, views, and uneven ground.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Clock className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-slate-50">
                Early mornings and weekends
              </p>
              <p className="text-xs md:text-sm text-slate-300">
                Most outdoor sessions run early so you can train before work or
                stack it with your weekend plans.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Users className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-slate-50">
                Small groups, real attention
              </p>
              <p className="text-xs md:text-sm text-slate-300">
                We keep group sizes manageable so a coach can actually see your
                reps, not just shout a timer from far away.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ interactive accordion */}
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">
            Coaching FAQ in 3–5 quick answers
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => handleToggleFaq(index)}
                    className="w-full flex items-center justify-between gap-3 px-4 md:px-5 py-3 md:py-3.5 text-left hover:bg-white/5 transition"
                  >
                    <span className="text-xs md:text-sm font-medium text-slate-50">
                      {item.question}
                    </span>
                    <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/40 border border-white/10">
                      <ChevronDown
                        className={`h-4 w-4 text-slate-300 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 md:px-5 pb-3 md:pb-4 text-[11px] md:text-sm text-slate-300">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA panel */}
        <section className="rounded-3xl border border-brand/40 bg-gradient-to-r from-brand/15 via-white/5 to-[#020617] p-5 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
              Ready to talk to a coach
            </p>
            <h2 className="text-lg md:text-2xl font-semibold text-slate-50">
              Not sure where to start but you know you need a change
            </h2>
            <p className="text-xs md:text-sm text-slate-200">
              Share a bit about your schedule, your body, and what you want from
              the next 3 months. One of the coaches will reply with a simple
              starting point, not a sales script.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 bg-brand text-dark text-sm font-semibold hover:bg-brand-dark transition"
            >
              Talk to the team
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Trainers;
