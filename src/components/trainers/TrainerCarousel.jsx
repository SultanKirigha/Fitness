import { useRef } from "react";
import { useSiteData } from "../../context/SiteDataContext.jsx";
import TrainerCard from "../ui/TrainerCard.jsx";

function TrainerCarousel() {
  const {
    siteData: { trainers },
  } = useSiteData();

  const trackRef = useRef(null);

  const scrollByCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector("article");
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 320;

    track.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  if (!trainers.length) {
    return (
      <p className="text-sm text-slate-400">
        No trainers configured yet. Add them from the dashboard.
      </p>
    );
  }

  return (
    // overflow-hidden here stops the page-level horizontal scrollbar
    <div className="relative overflow-hidden">
      {/* Left arrow */}
      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-brand text-dark items-center justify-center shadow-lg shadow-black/40 hover:bg-brand-dark transition z-10"
      >
        <span className="text-lg">←</span>
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={() => scrollByCards(1)}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-brand text-dark items-center justify-center shadow-lg shadow-black/40 hover:bg-brand-dark transition z-10"
      >
        <span className="text-lg">→</span>
      </button>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-2 md:pb-4 snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="min-w-[260px] md:min-w-[320px] lg:min-w-[360px] snap-start"
          >
            <TrainerCard trainer={trainer} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainerCarousel;
