import { useSiteData } from "../context/SiteDataContext.jsx";
import TrainerCarousel from "../components/trainers/TrainerCarousel.jsx";

function Trainers() {
  const {
    siteData: { trainers },
  } = useSiteData();

  return (
    <section className="py-10 md:py-14 space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-brand">
          Coaches
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold">
          Coaches who lift, move, and live this with you.
        </h1>
        <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
          Your team blends strength, conditioning, and mobility so you build a
          body that works well in real life, not just on paper.
        </p>
      </header>

      <TrainerCarousel />
    </section>
  );
}

export default Trainers;
