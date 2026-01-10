// src/pages/Home.jsx
import { motion } from "framer-motion";

import Hero from "../components/home/Hero.jsx";
import ProgramsPreview from "../components/home/ProgramsPreview.jsx";
import TrainersPreview from "../components/home/TrainersPreview.jsx";
import BmiSection from "../components/home/BmiCalculator.jsx";
import ShopPreview from "../../src/pages/Shop.jsx";
import OutdoorTrainingVideos from "../components/home/OutdoorTrainingVideos.jsx";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <main className="space-y-10 md:space-y-16">
      {/* Hero gets its own animations inside Hero.jsx */}
      <Hero />

      {/* 🔽 New video carousel directly under the copy */}
      <OutdoorTrainingVideos />

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ProgramsPreview />
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <TrainersPreview />
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <BmiSection />
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <ShopPreview />
      </motion.section>
    </main>
  );
}

export default Home;
