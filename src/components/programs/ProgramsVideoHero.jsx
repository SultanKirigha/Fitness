// src/components/programs/ProgramsVideoHero.jsx
import { useRef, useState } from "react";
import { Play, Pause, Dumbbell } from "lucide-react";

function ProgramsVideoHero({ programs = [] }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef(null);

  // ✅ Your Cloudinary video (coaching workouts)
  const videoUrl =
    "https://res.cloudinary.com/dqgxq1mp2/video/upload/293079_large_kwthfd.mp4";

  // ✅ A strong outdoor frame as the poster image
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

  // Use a few program names for the “Workouts in this block” row
  const featuredPrograms = programs.slice(0, 3);

  return (
    <section className="space-y-5">
      {/* Video header copy */}
      <div className="space-y-2 max-w-3xl">
        <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-brand">
          <Dumbbell className="h-4 w-4" />
          <span>Coaching workouts in motion</span>
        </p>
        <h2 className="text-lg md:text-2xl font-semibold">
          See how coaching blocks actually look in a session.
        </h2>
        <p className="text-xs md:text-sm text-slate-300">
          Real footage from Combatfit-style coaching: warm-up, main blocks, and
          finishers stitched together so you can see how the work feels, not
          just read it on a card.
        </p>
      </div>

      {/* Large video hero */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          {/* Background image (visible before play) */}
          <img
            src={backgroundImage}
            alt="Combatfit outdoor coaching session"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              isVideoPlaying ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Video itself */}
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

          {/* Dim gradient & text overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute left-4 right-4 bottom-4 flex flex-col gap-1">
            <p className="text-[11px] uppercase tracking-[0.20em] text-brand">
              Coaching block highlight
            </p>
            <p className="text-sm md:text-base font-semibold text-slate-50">
              Warm-up, main sets, and finishers with live coaching cues, all
              outdoors.
            </p>
            <p className="text-[11px] md:text-xs text-slate-300">
              Real-time pacing, movement adjustments, and progressions so you
              know what to expect when you show up.
            </p>
          </div>

          {/* Play / Pause floating button */}
          <div className="absolute bottom-5 right-5 z-10">
            {!isVideoPlaying ? (
              <button
                type="button"
                onClick={handlePlayVideo}
                className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg"
                aria-label="Play coaching workouts video"
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
                    ? "Resume coaching workouts video"
                    : "Pause coaching workouts video"
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

      {/* Small “workouts in this block” strip */}
      {featuredPrograms.length > 0 && (
        <div className="rounded-2xl border border-white/10 bg-[#020617] px-4 py-3 md:px-5 md:py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] md:text-xs text-slate-300">
            Workouts you’ll see in this style of coaching:
          </p>
          <div className="flex flex-wrap gap-2">
            {featuredPrograms.map((program) => (
              <span
                key={program.id}
                className="inline-flex items-center gap-1 rounded-full border border-brand/50 bg-brand/10 px-3 py-1 text-[11px] md:text-xs text-brand"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {program.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProgramsVideoHero;
