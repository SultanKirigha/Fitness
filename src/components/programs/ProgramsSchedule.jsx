// src/components/programs/ProgramsSchedule.jsx
import { CalendarDays, Activity, MapPin } from "lucide-react";

const weeklySchedule = [
  {
    day: "Monday",
    focus: "Strength Foundations",
    sessions: [
      {
        time: "06:00 – 07:00",
        title: "Sunrise strength block",
        location: "Central Park, CBD",
      },
      {
        time: "18:00 – 19:00",
        title: "Evening foundations",
        location: "Community field, Lavington",
      },
    ],
  },
  {
    day: "Tuesday",
    focus: "Engine and hills",
    sessions: [
      {
        time: "06:00 – 07:30",
        title: "Engine outdoors",
        location: "Ngong Hills trail head",
      },
    ],
  },
  {
    day: "Wednesday",
    focus: "Mobility and recovery",
    sessions: [
      {
        time: "06:30 – 07:15",
        title: "Mobility and breath",
        location: "Karura Forest clearing",
      },
    ],
  },
  {
    day: "Thursday",
    focus: "Conditioning",
    sessions: [
      {
        time: "06:00 – 07:00",
        title: "Mixed conditioning circuit",
        location: "Central Park, CBD",
      },
    ],
  },
  {
    day: "Friday",
    focus: "Strength and core",
    sessions: [
      {
        time: "06:00 – 07:00",
        title: "End of week strength",
        location: "Community field, Lavington",
      },
    ],
  },
  {
    day: "Saturday",
    focus: "Longer outdoor session",
    sessions: [
      {
        time: "07:00 – 09:30",
        title: "Hike prep or trail loops",
        location: "Ngong Hills or Karura, rotates",
      },
    ],
  },
  {
    day: "Sunday",
    focus: "Off or easy walk",
    sessions: [],
  },
];

function getTodayName() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date().getDay()];
}

function ProgramsSchedule() {
  const todayName = getTodayName();

  return (
    <section className="mt-10 md:mt-14 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 lg:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5 md:mb-6">
        <div className="space-y-2 max-w-xl">
          <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brand">
            <CalendarDays className="h-4 w-4" />
            <span>Our schedule</span>
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-slate-50">
            Where Combatfit sessions land in a real week.
          </h2>
          <p className="text-xs md:text-sm text-slate-300">
            Early mornings, weekend trail sessions, and recovery days built in.
            Use this as a guide. Coaches share exact meet up points in your
            WhatsApp group once you join a block.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-2xl bg-black/40 border border-brand/40 px-3 py-2 text-[11px] md:text-xs text-slate-100">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/15">
            <Activity className="h-3.5 w-3.5 text-brand" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="uppercase tracking-[0.18em] text-brand">
              Today
            </span>
            <span className="font-medium">{todayName} session window</span>
          </div>
        </div>
      </header>

      {/* Schedule grid */}
      <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {weeklySchedule.map((day) => {
          const isToday = day.day === todayName;
          const hasSessions = day.sessions.length > 0;

          return (
            <article
              key={day.day}
              className={[
                "flex flex-col justify-between h-full rounded-2xl bg-[#020617]/80 px-4 py-3 md:px-4 md:py-4 border",
                isToday
                  ? "border-brand/70 shadow-[0_0_40px_rgba(34,197,94,0.5)]"
                  : "border-white/10",
              ].join(" ")}
            >
              {/* Top: day and focus */}
              <div className="mb-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-slate-50">
                      {day.day}
                    </h3>
                    <p className="text-[11px] md:text-xs text-brand">
                      {day.focus}
                    </p>
                  </div>
                  {isToday && (
                    <span className="inline-flex items-center rounded-full bg-brand/15 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-brand">
                      Today
                    </span>
                  )}
                </div>
              </div>

              {/* Middle: sessions or off day text */}
              <div className="flex-1">
                {hasSessions ? (
                  <ul className="space-y-2.5 text-[11px] md:text-xs text-slate-200">
                    {day.sessions.map((session, idx) => (
                      <li
                        key={idx}
                        className="rounded-xl bg-white/5 border border-white/10 px-3 py-2"
                      >
                        <p className="font-medium text-slate-50">
                          {session.time}
                        </p>
                        <p className="text-[11px] md:text-xs">
                          {session.title}
                        </p>
                        <p className="mt-1 inline-flex items-center gap-1 text-[10px] text-slate-400">
                          <MapPin className="h-3 w-3 text-brand" />
                          <span>{session.location}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-[11px] md:text-xs text-slate-400 space-y-1">
                    <p>Planned as a lighter or off day.</p>
                    <p>We usually suggest a short walk or easy movement.</p>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-4 md:mt-5 text-[11px] md:text-xs text-slate-500">
        Exact meeting points and any changes like weather or trail conditions
        are shared in your block WhatsApp group. Times can shift slightly as
        the season changes.
      </p>
    </section>
  );
}

export default ProgramsSchedule;
