import { useMemo, useState } from "react";
import { useSiteData } from "../../context/SiteDataContext.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";

const bmiCategories = [
  { id: "underweight", range: "Below 18.5", label: "Underweight" },
  { id: "healthy", range: "18.5 – 24.9", label: "Healthy weight" },
  { id: "overweight", range: "25.0 – 29.9", label: "Overweight" },
  { id: "obese", range: "30.0 and above", label: "Obese" },
];

function getCategoryId(bmi) {
  if (!bmi || Number.isNaN(bmi)) return null;
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "healthy";
  if (bmi < 30) return "overweight";
  return "obese";
}

// Imperial helpers
function ftInToMeters(ft, inches) {
  const totalIn = ft * 12 + inches;
  return totalIn * 0.0254;
}
function lbToKg(lb) {
  return lb * 0.45359237;
}

function BmiCalculator() {
  const {
    siteData: {
      home: { bmiImageUrl },
    },
  } = useSiteData();

  const { theme } = useTheme();
  const isLight = theme === "light";

  // Unit mode
  const [unitMode, setUnitMode] = useState("metric"); // "metric" | "imperial"

  // Metric inputs
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  // Imperial inputs
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightLb, setWeightLb] = useState("");

  // Results
  const [bmi, setBmi] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [error, setError] = useState("");

  const activeCategory = useMemo(() => {
    if (!categoryId) return null;
    return bmiCategories.find((c) => c.id === categoryId) || null;
  }, [categoryId]);

  const cardShell = isLight
    ? "rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-[0_25px_80px_rgba(2,6,23,0.08)]"
    : "rounded-3xl bg-gradient-to-r from-dark-soft via-dark to-dark border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(15,118,110,0.6)]";

  const rightPanel = isLight
    ? "bg-slate-50 border-l border-slate-200"
    : "bg-dark-soft/80 border-l border-white/10";

  const rightDivider = isLight ? "divide-slate-200" : "divide-white/10";

  const headerText = isLight ? "text-slate-900" : "text-slate-50";
  const subText = isLight ? "text-slate-600" : "text-slate-400";

  const inputBase = isLight
    ? "w-full rounded-xl bg-white border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
    : "w-full rounded-xl bg-dark-soft border border-white/15 px-3 py-2 text-sm text-white outline-none focus:border-brand";

  const unitPill = isLight ? "text-slate-600" : "text-slate-300";

  const handleCalculate = (event) => {
    event.preventDefault();
    setError("");

    let heightM = 0;
    let weight = 0;

    if (unitMode === "metric") {
      const h = parseFloat(heightCm);
      const w = parseFloat(weightKg);

      if (!h || !w || h <= 0 || w <= 0) {
        setError("Please enter a valid height and weight.");
        setBmi(null);
        setCategoryId(null);
        return;
      }

      heightM = h / 100;
      weight = w;
    } else {
      const ft = parseFloat(heightFt);
      const inches = parseFloat(heightIn || "0");
      const lb = parseFloat(weightLb);

      if (!ft || ft <= 0 || lb <= 0 || Number.isNaN(lb)) {
        setError("Please enter a valid height and weight.");
        setBmi(null);
        setCategoryId(null);
        return;
      }
      if (inches < 0 || inches >= 12) {
        setError("Inches should be between 0 and 11.");
        setBmi(null);
        setCategoryId(null);
        return;
      }

      heightM = ftInToMeters(ft, inches);
      weight = lbToKg(lb);
    }

    const value = weight / (heightM * heightM);
    const rounded = Number(value.toFixed(1));

    setBmi(rounded);
    setCategoryId(getCategoryId(rounded));
  };

  const handleSwitchUnits = (mode) => {
    setUnitMode(mode);
    setError("");
    setBmi(null);
    setCategoryId(null);
  };

  return (
    <section className="py-12 md:py-16">
      <div className={cardShell}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)_minmax(0,1.1fr)] items-stretch">
          {/* Left image (do not change dimensions) */}
          <div className="relative hidden md:block">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${bmiImageUrl}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Middle form area */}
          <div className="relative px-6 py-8 md:px-8 md:py-10 space-y-6">
            <header className="space-y-3">
              <p className="inline-flex items-center gap-2 rounded-full bg-brand/15 border border-brand/40 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-brand">
                Health check
                <span className="h-[1px] w-6 bg-brand/60" />
              </p>

              <h2 className={`text-xl md:text-2xl font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>
                Check your BMI in seconds.
              </h2>

              <p className={`text-xs md:text-sm max-w-md ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                A simple snapshot of where you are right now. Your coach can
                combine this with strength and movement assessments for a more
                complete picture.
              </p>
            </header>

            {/* Unit toggle */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleSwitchUnits("metric")}
                className={`rounded-full px-4 py-2 text-xs font-semibold border transition
                  ${
                    unitMode === "metric"
                      ? "bg-brand text-dark border-brand"
                      : isLight
                      ? "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                      : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10"
                  }
                `}
              >
                Metric (cm / kg)
              </button>

              <button
                type="button"
                onClick={() => handleSwitchUnits("imperial")}
                className={`rounded-full px-4 py-2 text-xs font-semibold border transition
                  ${
                    unitMode === "imperial"
                      ? "bg-brand text-dark border-brand"
                      : isLight
                      ? "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                      : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10"
                  }
                `}
              >
                Imperial (ft / in / lb)
              </button>
            </div>

            <form onSubmit={handleCalculate} className="space-y-4 text-xs md:text-sm">
              {unitMode === "metric" ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Height */}
                  <div className="space-y-2">
                    <p className={`font-semibold ${isLight ? "text-slate-900" : "text-slate-100"}`}>Height</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={heightCm}
                        onChange={(e) => setHeightCm(e.target.value)}
                        className={inputBase}
                        placeholder="Enter height"
                      />
                      <span className={`whitespace-nowrap text-xs ${unitPill}`}>cm</span>
                    </div>
                    <p className={`text-[10px] ${subText}`}>Example 170</p>
                  </div>

                  {/* Weight */}
                  <div className="space-y-2">
                    <p className={`font-semibold ${isLight ? "text-slate-900" : "text-slate-100"}`}>Weight</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={weightKg}
                        onChange={(e) => setWeightKg(e.target.value)}
                        className={inputBase}
                        placeholder="Enter weight"
                      />
                      <span className={`whitespace-nowrap text-xs ${unitPill}`}>kg</span>
                    </div>
                    <p className={`text-[10px] ${subText}`}>Example 68</p>
                  </div>
                </div>
              ) : (
                // Imperial styled inputs
                <div className="space-y-4">
                  {/* Height (ft + in) */}
                  <div className="space-y-2">
                    <p className={`font-semibold ${isLight ? "text-slate-900" : "text-slate-100"}`}>Height</p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          step="1"
                          value={heightFt}
                          onChange={(e) => setHeightFt(e.target.value)}
                          className={`${inputBase} pr-10`}
                          placeholder="Feet"
                        />
                        <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${subText}`}>ft</span>
                      </div>

                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          max="11"
                          step="1"
                          value={heightIn}
                          onChange={(e) => setHeightIn(e.target.value)}
                          className={`${inputBase} pr-10`}
                          placeholder="Inches"
                        />
                        <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${subText}`}>in</span>
                      </div>
                    </div>

                    <p className={`text-[10px] ${subText}`}>Example: 5 ft 8 in</p>
                  </div>

                  {/* Weight (lb) */}
                  <div className="space-y-2">
                    <p className={`font-semibold ${isLight ? "text-slate-900" : "text-slate-100"}`}>Weight</p>

                    <div className="relative max-w-xs">
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={weightLb}
                        onChange={(e) => setWeightLb(e.target.value)}
                        className={`${inputBase} pr-12`}
                        placeholder="Enter weight"
                      />
                      <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${subText}`}>lb</span>
                    </div>

                    <p className={`text-[10px] ${subText}`}>Example: 150 lb</p>
                  </div>
                </div>
              )}

              {error && <p className="text-[11px] text-red-500 font-semibold">{error}</p>}

              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-brand text-dark font-semibold text-sm shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:bg-brand-dark transition"
              >
                Calculate BMI
              </button>
            </form>
          </div>

          {/* Right categories column */}
          <div className={`${rightPanel} flex flex-col`}>
            <div className={`px-5 py-4 border-b ${isLight ? "border-slate-200" : "border-white/10"} text-center`}>
              <p className={`text-sm font-semibold tracking-wide ${headerText}`}>BMI categories</p>
              <p className={`text-[11px] ${subText}`}>
                Use this as a starting point not the full story.
              </p>
            </div>

            {/* ✅ BIG RESULT goes here (below header, above list) */}
            {bmi && (
              <div
                className={`mx-4 mt-4 rounded-2xl border p-4 text-center ${
                  isLight
                    ? "bg-white border-slate-200"
                    : "bg-black/25 border-white/10"
                }`}
              >
                <p className={`${isLight ? "text-slate-700" : "text-slate-200"} text-xs uppercase tracking-[0.16em]`}>
                  Your BMI
                </p>

                <p className={`mt-1 text-4xl md:text-5xl font-extrabold text-brand`}>
                  {bmi}
                </p>

                {activeCategory && (
                  <p className={`mt-2 text-sm md:text-base font-semibold ${isLight ? "text-slate-900" : "text-slate-100"}`}>
                    {activeCategory.label}
                  </p>
                )}

                <p className={`mt-1 text-[11px] ${subText}`}>
                  This is a quick indicator, not a diagnosis.
                </p>
              </div>
            )}

            <div className={`flex-1 flex flex-col text-xs md:text-sm divide-y ${rightDivider} mt-4`}>
              {bmiCategories.map((cat) => {
                const active = cat.id === categoryId;
                return (
                  <div
                    key={cat.id}
                    className={`flex items-center justify-between px-4 py-3 md:px-5 md:py-4 ${
                      active
                        ? isLight
                          ? "bg-brand/10 border-l-4 border-l-brand"
                          : "bg-brand/20 border-l-4 border-l-brand"
                        : "bg-transparent"
                    }`}
                  >
                    <p className={isLight ? "text-slate-800" : "text-slate-100"}>{cat.range}</p>
                    <p className={`text-right ${isLight ? "text-slate-600" : "text-slate-300"}`}>{cat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Optional small footer note */}
            <div className={`px-5 py-4 border-t ${isLight ? "border-slate-200" : "border-white/10"} text-center`}>
              <p className={`text-[11px] ${subText}`}>
                Tip: combine BMI with waist measurement, strength levels, and conditioning markers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BmiCalculator;
