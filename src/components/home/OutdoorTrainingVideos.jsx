// src/components/home/OutdoorTrainingVideos.jsx
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

function OutdoorTrainingVideos() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef(null);

  // ✅ Direct Cloudinary video URL (from your public_id)
  const videoUrl =
    "https://res.cloudinary.com/dqgxq1mp2/video/upload/q_auto/f_auto/v1775209336/WhatsApp_Video_2026-02-14_at_17.04.22_1_fgavd4.mp4";

  // ✅ Background/poster image – the outdoor shot you shared earlier
  const backgroundImage =
    "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1774371531/IMG_3244_bntdkn.jpg";

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

      {/* WhatsApp CTA */}
      <div className="mt-12 md:mt-16 flex flex-col items-center text-center space-y-3">
        <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-brand">
          Join the community
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-slate-50">
          Train with the crew in real time
        </h3>

        <p className="text-xs md:text-sm text-slate-300 max-w-md">
          Get updates on outdoor sessions, hikes, and last-minute meetups directly on WhatsApp.
        </p>

        <a
          href="https://chat.whatsapp.com/GjNypVoyeolBhjtPwrwjDJ?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-green-500 text-black text-sm md:text-base font-semibold hover:bg-green-400 transition shadow-[0_0_30px_rgba(34,197,94,0.7)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-5 w-5"
            fill="currentColor"
          >
            <path d="M16.001 2.667c-7.364 0-13.334 5.969-13.334 13.333 0 2.355.616 4.667 1.788 6.708l-1.89 6.925 7.098-1.86a13.275 13.275 0 006.338 1.619h.005c7.363 0 13.334-5.969 13.334-13.333 0-3.567-1.39-6.922-3.915-9.448-2.526-2.526-5.88-3.944-9.424-3.944zm0 24.001h-.004a10.94 10.94 0 01-5.575-1.53l-.4-.236-4.214 1.104 1.125-4.106-.26-.422a10.913 10.913 0 01-1.676-5.809c0-6.04 4.916-10.956 10.957-10.956 2.927 0 5.679 1.141 7.748 3.21 2.069 2.069 3.208 4.821 3.208 7.747 0 6.041-4.916 10.958-10.959 10.958zm6.017-8.194c-.329-.165-1.948-.961-2.25-1.071-.302-.11-.522-.165-.743.165-.22.329-.853 1.071-1.045 1.291-.192.22-.385.247-.714.082-.329-.165-1.387-.511-2.641-1.63-.976-.87-1.635-1.945-1.827-2.274-.192-.329-.021-.507.144-.671.149-.148.329-.385.494-.577.165-.192.22-.329.329-.549.11-.22.055-.412-.027-.577-.082-.165-.743-1.793-1.018-2.455-.267-.641-.539-.554-.743-.564l-.633-.011c-.22 0-.577.082-.88.412-.302.329-1.155 1.128-1.155 2.75s1.183 3.187 1.347 3.406c.165.22 2.327 3.556 5.64 4.985.788.34 1.402.543 1.881.695.791.252 1.51.216 2.079.131.634-.095 1.948-.796 2.223-1.565.274-.77.274-1.429.192-1.565-.082-.137-.302-.22-.633-.385z" />
          </svg>
          Join WhatsApp Group
        </a>
      </div>

    </section>
  );
}

export default OutdoorTrainingVideos;
