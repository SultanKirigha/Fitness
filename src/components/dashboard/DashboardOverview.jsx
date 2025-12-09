import { useSiteData } from "../../context/SiteDataContext.jsx";

const weeklySessions = [32, 40, 45, 51, 49, 60, 58];
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const signups = [
  { label: "This week", value: 42 },
  { label: "Last week", value: 35 },
];

function ActivityBar({ value, max }) {
  const width = Math.max(6, Math.round((value / max) * 100));
  return (
    <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand to-brand-dark"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function DashboardActivity() {
  const {
    siteData: { programs, trainers },
  } = useSiteData();

  const maxSessions = Math.max(...weeklySessions);

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
      {/* Weekly sessions bar chart */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-md shadow-black/30">
        <h2 className="text-sm md:text-base font-semibold mb-1">
          Weekly training sessions
        </h2>
        <p className="text-[11px] md:text-xs text-slate-400 mb-4">
          Visual to make the dashboard feel live. You can later connect this to
          real analytics data.
        </p>

        <div className="flex items-end gap-3 md:gap-4 h-32 md:h-40">
          {weeklySessions.map((value, index) => {
            const height = Math.max(12, Math.round((value / maxSessions) * 100));
            return (
              <div
                key={labels[index]}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <div className="relative flex-1 flex items-end justify-center w-full">
                  <div
                    className="w-4 md:w-5 rounded-full bg-gradient-to-t from-brand to-brand-dark shadow-md shadow-emerald-500/40"
                    style={{ height: `${height}%` }}
                  />
                </div>
                <p className="text-[10px] md:text-[11px] text-slate-400">
                  {labels[index]}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Signups + config summary */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-md shadow-black/30 space-y-4 text-sm">
        <h2 className="text-sm md:text-base font-semibold">
          Site activity summary
        </h2>

        <div className="space-y-3">
          {signups.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between text-[11px] md:text-xs text-slate-300 mb-1">
                <span>{item.label}</span>
                <span>{item.value} signups</span>
              </div>
              <ActivityBar value={item.value} max={50} />
            </div>
          ))}
        </div>

        <div className="mt-4 border-t border-white/10 pt-3 text-[11px] md:text-xs text-slate-300 space-y-1">
          <p>
            Programs configured:{" "}
            <span className="font-semibold text-brand">{programs.length}</span>
          </p>
          <p>
            Coaches visible on site:{" "}
            <span className="font-semibold text-brand">{trainers.length}</span>
          </p>
          <p className="text-slate-400">
            Treat this as a visual dashboard shell. When you are ready, you can
            replace the sample stats with real backend numbers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DashboardActivity;
