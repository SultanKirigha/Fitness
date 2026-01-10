// src/components/home/OutdoorTrainingVideos.jsx
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

function OutdoorTrainingVideos() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef(null);

  // ✅ Direct Cloudinary video URL (from your public_id)
  const videoUrl =
    "https://res.cloudinary.com/dqgxq1mp2/video/upload/293079_large_kwthfd.mp4";

  // ✅ Background/poster image – the outdoor shot you shared earlier
  const backgroundImage =
    "https://res.cloudinary.com/dqgxq1mp2/image/upload/v1767886033/combatfit/events/_dsc6424_jeetc0.jpg";

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
      setIsVideoPaused(false);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPaused(true);
    }
  };

  const handleResumeVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPaused(false);
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    setIsVideoPaused(false);
  };

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header text */}
        <header className="space-y-3 text-left md:text-center">
          <p className="text-[11px] uppercase tracking-[0.26em] text-brand/90">
            Combatfit Outdoor Training
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Outdoor training that feels like a mission, not a chore.
          </h2>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl md:max-w-3xl mx-0 md:mx-auto">
            Combatfit blends strength, conditioning, and combat-inspired drills
            in the open air. No crowded machines – just clear sessions that
            build power, engine, and confidence.
          </p>
        </header>

        {/* Large hero video card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            {/* Background image (visible when not playing) */}
            <img
              src={backgroundImage}
              alt="Combatfit outdoor session"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                isVideoPlaying ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Video (fades in when playing) */}
            <video
              ref={videoRef}
              src={videoUrl}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                isVideoPlaying ? "opacity-100" : "opacity-0"
              }`}
              onEnded={handleVideoEnded}
              playsInline
              controls={false}
            />

            {/* Dark gradient & text overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute left-4 right-4 bottom-4 flex flex-col gap-1">
              <p className="text-[11px] uppercase tracking-[0.20em] text-brand">
                Outdoor session highlight
              </p>
              <p className="text-sm md:text-base font-semibold text-slate-50">
                Real Combatfit-style work on the hill – carries, sprints, and
                breath control outside the gym.
              </p>
              <p className="text-[11px] md:text-xs text-slate-300">
                Ngong Hills / Karura-style terrain · Mixed engine and strength
                work · Coach-led pace.
              </p>
            </div>

            {/* Play / Pause floating button */}
            <div className="absolute bottom-5 right-5 z-10">
              {!isVideoPlaying ? (
                <button
                  type="button"
                  onClick={handlePlayVideo}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg"
                  aria-label="Play outdoor training video"
                >
                  <Play className="h-7 w-7 text-white fill-white ml-1" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={isVideoPaused ? handleResumeVideo : handlePauseVideo}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg"
                  aria-label={
                    isVideoPaused
                      ? "Resume outdoor training video"
                      : "Pause outdoor training video"
                  }
                >
                  {isVideoPaused ? (
                    <Play className="h-7 w-7 text-white fill-white ml-1" />
                  ) : (
                    <Pause className="h-7 w-7 text-white fill-white" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* CTA under the video */}
        <div className="flex justify-center pt-1">
          <a
            href="/events#upcoming"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-brand text-dark text-xs md:text-sm font-semibold hover:bg-brand-dark transition shadow-[0_0_35px_rgba(34,197,94,0.6)]"
          >
            Join the next outdoor session
          </a>
        </div>
      </div>
    </section>
  );
}

export default OutdoorTrainingVideos;
