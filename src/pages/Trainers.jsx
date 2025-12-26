// src/pages/Trainers.jsx
import { motion } from "framer-motion";
import { useSiteData } from "../context/SiteDataContext.jsx";
import TrainerCard from "../components/trainers/TrainerCarousel.jsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function Trainers() {
  const {
    siteData: { trainers },
  } = useSiteData();

  if (!trainers || trainers.length === 0) {
    return (
      <section className="py-10 md:py-16">
        <p className="text-sm text-slate-300">No trainers loaded yet.</p>
      </section>
    );
  }

  const leadTrainer = trainers[0];
  const rest = trainers.slice(1);

  return (
    <section className="py-10 md:py-16 space-y-10">
      {/* Top intro row */}
      <motion.header
        className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div className="space-y-3" variants={fadeInUp}>
          <p className="text-xs uppercase tracking-[0.22em] text-brand">
            Coaches
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            People who keep you moving, not just counting reps.
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            The Combatfit coaching team runs outdoor sessions, strength blocks,
            and hike prep across Nairobi. Every coach has real world experience
            with busy schedules, old injuries, and starting again.
          </p>
        </motion.div>

        {/* Side summary card */}
        <motion.div
          variants={fadeInUp}
          className="w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.7)] space-y-3 text-xs md:text-sm"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-brand">
            What to expect
          </p>
          <p className="text-slate-100">
            Simple cues, clear progressions, and honest check-ins. No shouting,
            no “no pain no gain” speeches.
          </p>
          <ul className="space-y-1 text-[11px] md:text-xs text-slate-300">
            <li>· Sessions scaled to your level</li>
            <li>· Technique first, load second</li>
            <li>· Outdoor meetups and online support</li>
          </ul>
        </motion.div>
      </motion.header>

      {/* Featured trainer row */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center"
      >
        <div>
          <TrainerCard trainer={leadTrainer} />
        </div>

        <div className="space-y-3 text-xs md:text-sm text-slate-300">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand">
            Lead coach
          </p>
          <h2 className="text-base md:text-lg font-semibold text-slate-50">
            1:1 and small-group support
          </h2>
          <p>
            Your primary coach is the person who reads your check-ins, updates
            your blocks, and makes sure you have a plan that fits work, family,
            and recovery.
          </p>
          <p>
            On outdoor days, coaches move through the group so you get short,
            specific feedback without feeling watched the entire time.
          </p>
        </div>
      </motion.section>

      {/* Grid of the rest of the team */}
      {rest.length > 0 && (
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg md:text-xl font-semibold">
              The rest of the crew.
            </h2>
            <p className="text-[11px] md:text-xs text-slate-400">
              Different strengths, same values. You might see them at hikes,
              outdoor blocks, or filling in for sessions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((trainer) => (
              <TrainerCard key={trainer.id || trainer.name} trainer={trainer} />
            ))}
          </div>
        </motion.section>
      )}
    </section>
  );
}

export default Trainers;
