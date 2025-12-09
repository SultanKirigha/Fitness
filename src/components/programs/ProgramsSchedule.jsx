// src/components/programs/ProgramsSchedule.jsx

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const rows = [
  {
    time: "6:00am – 7:00am",
    Monday: "Pro cycle burn (Stan)",
    Tuesday: "",
    Wednesday: "Tone it up Wednesday (Coach Angie)",
    Thursday: "Power flow yoga (Christopher)",
    Friday: "",
    Saturday: "",
    Sunday: "",
  },
  {
    time: "8:00am – 10:00am",
    Monday: "",
    Tuesday: "YOD fire (Christopher)",
    Wednesday: "",
    Thursday: "",
    Friday: "The ultimate burnout-dance (Brian)",
    Saturday: "Weekend challenge (Vince Fitness)",
    Sunday: "",
  },
  {
    time: "10:00am – 11:00am",
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "Pro cycle burn (Stan)",
  },
  {
    time: "6:00pm – 7:00pm",
    Monday: "Pro cycle burn (Stan)",
    Tuesday: "The ultimate burn-out dance (Brian)",
    Wednesday: "Pro cycle burn (Stan)",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  },
];

function ProgramsSchedule() {
  return (
    <section className="mt-12 space-y-6">
      {/* Header */}
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.24em] text-brand">
          Our schedule
        </p>
        <h2 className="text-lg md:text-xl font-semibold">
          See when different sessions run through the week.
        </h2>
        <p className="text-xs md:text-sm text-slate-300 max-w-3xl">
          Use this as a guide when planning your training week. Times and
          coaches can change, but the structure stays similar.
        </p>
      </header>

      {/* Table card */}
      <div className="rounded-3xl border border-white/10 bg-white/5 px-4 sm:px-6 md:px-8 py-6 md:py-8 shadow-[0_0_60px_rgba(15,118,110,0.45)] overflow-x-auto">
        <div className="min-w-[880px]">
          {/* Header row */}
          <div className="grid grid-cols-[minmax(0,1.1fr)_repeat(7,minmax(0,1fr))] text-[11px] md:text-sm text-slate-200 bg-[#020617] rounded-t-2xl border-b border-white/10">
            <div className="px-4 py-4 font-semibold text-left">Time</div>
            {days.map((day) => (
              <div
                key={day}
                className="px-3 py-4 font-semibold text-center border-l border-white/5"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Body rows */}
          {rows.map((row) => (
            <div
              key={row.time}
              className="grid grid-cols-[minmax(0,1.1fr)_repeat(7,minmax(0,1fr))] text-[11px] md:text-sm bg-[#050816]/95 border-t border-white/5 last:rounded-b-2xl"
            >
              {/* Time column */}
              <div className="px-4 py-4 border-r border-white/5 text-slate-200 font-medium">
                {row.time}
              </div>

              {/* Day cells */}
              {days.map((day) => {
                const value = row[day];
                const hasSession = Boolean(value);

                if (!hasSession) {
                  return (
                    <div
                      key={`${row.time}-${day}`}
                      className="px-3 py-4 border-r border-white/5 text-slate-500 text-center"
                    >
                      <span className="text-[10px] md:text-xs">–</span>
                    </div>
                  );
                }

                const title = value.includes("(")
                  ? value.split("(")[0].trim()
                  : value;
                const coach = value.includes("(")
                  ? value.substring(value.indexOf("("))
                  : "";

                return (
                  <div
                    key={`${row.time}-${day}`}
                    className="px-3 py-4 border-r border-white/5 bg-brand/10 text-slate-50 align-top"
                  >
                    <div className="space-y-1">
                      <p className="font-semibold text-[11px] md:text-sm leading-snug">
                        {title}
                      </p>
                      {coach && (
                        <p className="text-[10px] md:text-xs text-slate-200">
                          {coach}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default ProgramsSchedule;
