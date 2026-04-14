import { Music2 } from "lucide-react";

const tiktokVideos = [
  {
    id: "7627437238632123655",
    url: "https://www.tiktok.com/@combatfitkenya/video/7627437238632123655",
  },
  {
    id: "7606694695590202631",
    url: "https://www.tiktok.com/@combatfitkenya/video/7606694695590202631",
  },
  {
    id: "7601878520012295442",
    url: "https://www.tiktok.com/@combatfitkenya/video/7601878520012295442",
  },
];

function TikTokPostsSection({
  title = "From the field",
  subtitle = "Real sessions, real people, real outdoor training.",
  videos = tiktokVideos,
}) {
  return (
    <section className="py-12 md:py-16 space-y-6">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
          Social updates
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
          {title}
        </h2>

        <p className="text-xs md:text-sm text-slate-300">{subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => {
          const playerSrc = `https://www.tiktok.com/player/v1/${video.id}?autoplay=1&loop=1&muted=1&controls=0&progress_bar=0&play_button=0&volume_control=0&fullscreen_button=0&timestamp=0&description=0&music_info=0&rel=0`;

          return (
            <article
              key={video.id}
              className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="relative aspect-[9/16] bg-black">
                <iframe
                  src={playerSrc}
                  title={`TikTok video ${video.id}`}
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <div className="flex items-center gap-2 text-slate-300">
                  <Music2 className="h-4 w-4 text-brand" />
                  <span className="text-xs md:text-sm">Combatfit Kenya</span>
                </div>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] md:text-xs font-semibold text-brand hover:text-brand-dark transition"
                >
                  Open on TikTok
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex justify-center pt-2">
        <a
          href="https://www.tiktok.com/@combatfitkenya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full px-6 py-2.5 bg-white text-slate-900 text-sm font-semibold hover:bg-slate-200 transition"
        >
          View more on TikTok
        </a>
      </div>
    </section>
  );
}

export default TikTokPostsSection;