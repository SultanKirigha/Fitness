// src/components/home/Hero.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSiteData } from "../../context/SiteDataContext.jsx";

const AUTO_PLAY_DELAY = 7000; // 7 seconds

function Hero() {
  const {
    siteData: {
      home: {
        heroTitle,
        heroSubtitle,
        primaryCta,
        secondaryCta,
        stats,
        heroSlides,
      },
    },
  } = useSiteData();

  const slides =
    heroSlides && heroSlides.length
      ? heroSlides
      : [
          {
            id: "strength",
            label: "Strength • Conditioning",
            caption: "Full-body strength and engine work in one place.",
            imageUrl: "/images/hero-strength.jpg",
          },
          {
            id: "community",
            label: "Community • Coaching",
            caption: "Coaches and teammates who keep you moving.",
            imageUrl: "/images/hero-community.jpg",
          },
          {
            id: "engine",
            label: "Engine • Longevity",
            caption: "Cardio blocks that build capacity without breaking you.",
            imageUrl: "/images/hero-engine.jpg",
          },
        ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(id);
  }, [slides.length]);

  const goTo = (direction) => {
    setActiveIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  return (
    <section className="py-10 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        {/* Left side - text */}
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-brand">
            Combatfit Outdoor Training
            <span className="h-[2px] w-10 rounded-full bg-brand/60" />
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            {heroTitle}
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            {heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            {/* Primary CTA -> Upcoming events section */}
            <Link
              to="/events#upcoming"
              className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-brand text-dark font-medium text-sm md:text-base shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:bg-brand-dark transition"
            >
              {primaryCta}
            </Link>

            {/* Secondary CTA keeps current style */}
            <Link
              to="/programs"
              className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-slate-500 text-sm md:text-base text-slate-100 hover:bg-white/5 transition"
            >
              {secondaryCta}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 max-w-md">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center"
              >
                <p className="text-lg md:text-xl font-semibold text-brand">
                  {item.value}
                </p>
                <p className="text-[11px] md:text-xs text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - image carousel */}
        <div className="relative w-full max-w-md lg:max-w-lg mx-auto lg:mx-0">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#020617] shadow-[0_0_90px_rgba(16,185,129,0.6)]">
            {slides.map((slide, index) => (
              <div
                key={slide.id || index}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-3 pointer-events-none"
                }`}
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.label}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-brand">
                    {slide.label}
                  </p>
                  <p className="text-sm md:text-base font-medium text-slate-50">
                    {slide.caption}
                  </p>
                </div>
              </div>
            ))}

            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(-1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-slate-100 hover:bg-black/70 text-sm"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => goTo(1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-slate-100 hover:bg-black/70 text-sm"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {slides.length > 1 && (
            <div className="mt-3 flex justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id || index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-6 bg-brand"
                      : "w-2 bg-slate-500/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
