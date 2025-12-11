import Hero from "../components/home/Hero.jsx";
import ProgramsPreview from "../components/home/ProgramsPreview.jsx";
import JoinPrograms from "../components/home/JoinPrograms.jsx";
import TrainersPreview from "../components/home/TrainersPreview.jsx";
import BmiCalculator from "../components/home/BmiCalculator.jsx";
import PricingPreview from "../components/home/PricingPreview.jsx";
import EventsPreview from "../components/home/EventsPreview.jsx";


function Home() {
  return (
    <>
      <Hero />
      <ProgramsPreview />
      <JoinPrograms />
      <EventsPreview />
      <TrainersPreview />
      <BmiCalculator />
      {/* PricingPreview, About section, etc. if you have them */}
    </>
  );
}

export default Home;
