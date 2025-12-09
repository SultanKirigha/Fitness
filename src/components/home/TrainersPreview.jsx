import { useSiteData } from "../../context/SiteDataContext.jsx";
import TrainerCard from "../ui/TrainerCard.jsx";
import { Link } from "react-router-dom";

function TrainersPreview() {
  const {
    siteData: { trainers },
  } = useSiteData();

  const featured = trainers.slice(0, 2);

  return (
    <section className="py-8 md:py-12 space-y-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand">
            Coaching team
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Real coaches, not faceless templates.
          </h2>
          <p className="text-xs md:text-sm text-slate-300 max-w-xl mt-2">
            Meet the people behind your programs. Each coach has their own
            strengths, so you are not stuck with a one size fits all approach.
          </p>
        </div>

        <Link
          to="/trainers"
          className="inline-flex items-center text-xs md:text-sm text-brand hover:text-brand-dark"
        >
          Meet all coaches →
        </Link>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        {featured.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </section>
  );
}

export default TrainersPreview;
