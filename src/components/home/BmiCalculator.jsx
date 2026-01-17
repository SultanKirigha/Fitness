import { useMemo, useState } from "react";
import { useSiteData } from "../../context/SiteDataContext.jsx";

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

function round1(n) {
  return Number.isFinite(n) ? Number(n.toFixed(1)) : null;
}

function BmiCalculator() {
  const {
    siteData: {
      home: { bmiImageUrl },
    },
  } = useSiteData();

  // "metric" => cm/kg, "imperial" => ft+in / lb
  const [unitMode, setUnitMode] = useState("metric");

  // Metric inputs
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  // Imperial inputs
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightLb, setWeightLb] = useState("");

  const [bmi, setBmi] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [error, setError] = useState("");

  // Conversions (only for extra insights and consistent results)
  const heightInchesTotal = useMemo(() => {
    const ft = parseFloat(heightFt);
    const inch = parseFloat(heightIn);
    if (!Number.isFinite(ft) || !Number.isFinite(inch)) return null;
    if (ft <= 0 && inch <= 0) return null;
    return ft * 12 + inch;
  }, [heightFt, heightIn]);

  const heightMetersFromMetric = useMemo(() => {
    const cm = parseFloat(heightCm);
    if (!Number.isFinite(cm) || cm <= 0) return null;
    return cm / 100;
  }, [heightCm]);

  const heightMetersFromImperial = useMemo(() => {
    if (!heightInchesTotal || heightInchesTotal <= 0) return null;
    return heightInchesTotal * 0.0254;
  }, [heightInchesTotal]);

  const weightKgFromMetric = useMemo(() => {
    const kg = parseFloat(weightKg);
    if (!Number.isFinite(kg) || kg <= 0) return null;
    return kg;
  }, [weightKg]);

  const weightKgFromImperial = useMemo(() => {
    const lb = parseFloat(weightLb);
    if (!Number.isFinite(lb) || lb <= 0) return null;
    return lb * 0.45359237;
  }, [weightLb]);

  // Extra: healthy weight range (BMI 18.5 - 24.9) shown in the current unit system
  const healthyRange = useMemo(() => {
    const heightM =
      unitMode === "metric" ? heightMetersFromMetric : heightMetersFromImperial;

    if (!heightM || heightM <= 0) return null;

    const minKg = 18.5 * heightM * heightM;
    const maxKg = 24.9 * heightM * heightM;

    if (unitMode === "metric") {
      return { min: Math.round(minKg), max: Math.round(maxKg), unit: "kg" };
    }

    // convert kg -> lb
    const minLb = minKg / 0.45359237;
    const maxLb = maxKg / 0.45359237;
    return { min: Math.round(minLb), max: Math.round(maxLb), unit: "lb" };
  }, [unitMode, heightMetersFromMetric, heightMetersFromImperial]);

  // Extra: water target (35ml per kg) shown as L/day, independent of unit mode
  const waterTargetLiters = useMemo(() => {
    const kg =
      unitMode === "metric" ? weightKgFromMetric : weightKgFromImperial;
    if (!kg || kg <= 0) return null;
    const liters = (kg * 35) / 1000;
    return round1(liters);
  }, [unitMode, weightKgFromMetric, weightKgFromImperial]);

  const resetResults = () => {
    setBmi(null);
    setCategoryId(null);
    setError("");
  };

  const handleSwitchUnits = (nextMode) => {
    setUnitMode(nextMode);
    resetResults();
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    setError("");

    // Metric BMI
    if (unitMode === "metric") {
      const cm = parseFloat(heightCm);
      const kg = parseFloat(weightKg);

      if (!cm || !kg || cm <= 0 || kg <= 0) {
        setError("Please enter a valid height and weight.");
        setBmi(null);
        setCategoryId(null);
        return;
      }

      const m = cm / 100;
      const value = kg / (m * m);
      const rounded = round1(value);

      setBmi(rounded);
      setCategoryId(getCategoryId(rounded));
      return;
    }

    // Imperial BMI
    const ft = parseFloat(heightFt);
    const inch = parseFloat(heightIn);
    const lb = parseFloat(weightLb);

    const inchesTotal = (Number.isFinite(ft) ? ft : 0) * 12 + (Number.isFinite(inch) ? inch : 0);

    if (!inchesTotal || !lb || inchesTotal <= 0 || lb <= 0) {
      setError("Please enter a valid height and weight.");
      setBmi(null);
      setCategoryId(null);
      return;
    }

    const value = (lb * 703) / (inchesTotal * inchesTotal);
    const rounded = round1(value);

    setBmi(rounded);
    setCategoryId(getCategoryId(rounded));
  };

  return (
    <section className="py-12 md:py-16">
      <div className="bmi-shell rounded-3xl bg-gradient-to-r from-dark-soft via-dark to-dark border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(15,118,110,0.6)]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)_minmax(0,1.1fr)] items-stretch">
          {/* Left image (unchanged) */}
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

              <h2 className="text-xl md:text-2xl font-semibold">
                Check your BMI in seconds.
              </h2>

              <p className="text-xs md:text-sm text-slate-300 max-w-md">
                A quick snapshot of where you are right now. Use it alongside
                strength, mobility, and recovery markers for a complete Combatfit picture.
              </p>
            </header>

            {/* Units toggle */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleSwitchUnits("metric")}
                className={[
                  "rounded-full px-4 py-2 text-xs md:text-sm font-semibold border transition",
                  unitMode === "metric"
                    ? "bg-brand text-dark border-brand"
                    : "bg-black/30 text-slate-100 border-white/15 hover:border-brand/60",
                ].join(" ")}
              >
                Metric (cm / kg)
              </button>

              <button
                type="button"
                onClick={() => handleSwitchUnits("imperial")}
                className={[
                  "rounded-full px-4 py-2 text-xs md:text-sm font-semibold border transition",
                  unitMode === "imperial"
                    ? "bg-brand text-dark border-brand"
                    : "bg-black/30 text-slate-100 border-white/15 hover:border-brand/60",
                ].join(" ")}
              >
                Imperial (ft / lb)
              </button>
            </div>

            <form onSubmit={handleCalculate} className="space-y-4 text-xs md:text-sm">
              {unitMode === "metric" ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Height cm */}
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-100">Height</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={heightCm}
                        onChange={(e) => setHeightCm(e.target.value)}
                        className="w-full rounded-xl bg-dark-soft border border-white/15 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                        placeholder="Enter height in cm"
                      />
                      <span className="text-slate-300 whitespace-nowrap text-xs">cm</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Example 170</p>
                  </div>

                  {/* Weight kg */}
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-100">Weight</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={weightKg}
                        onChange={(e) => setWeightKg(e.target.value)}
                        className="w-full rounded-xl bg-dark-soft border border-white/15 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                        placeholder="Enter weight in kg"
                      />
                      <span className="text-slate-300 whitespace-nowrap text-xs">kg</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Example 68</p>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-3">
                  {/* Height ft */}
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-100">Height</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        className="w-full rounded-xl bg-dark-soft border border-white/15 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                        placeholder="ft"
                      />
                      <span className="text-slate-300 whitespace-nowrap text-xs">ft</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Example 5</p>
                  </div>

                  {/* Height in */}
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-100"> </p>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        className="w-full rounded-xl bg-dark-soft border border-white/15 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                        placeholder="in"
                      />
                      <span className="text-slate-300 whitespace-nowrap text-xs">in</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Example 8</p>
                  </div>

                  {/* Weight lb */}
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-100">Weight</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={weightLb}
                        onChange={(e) => setWeightLb(e.target.value)}
                        className="w-full rounded-xl bg-dark-soft border border-white/15 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                        placeholder="Enter weight in lb"
                      />
                      <span className="text-slate-300 whitespace-nowrap text-xs">lb</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Example 150</p>
                  </div>
                </div>
              )}

              {error && <p className="text-[11px] text-red-400 font-medium">{error}</p>}

              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-brand text-dark font-semibold text-sm shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:bg-brand-dark transition"
              >
                Calculate BMI
              </button>

              {bmi && (
                <div className="mt-3 inline-flex w-full flex-col gap-2 rounded-xl border border-brand/40 bg-brand/10 px-4 py-3 text-xs md:text-sm text-slate-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <p>
                      Your BMI is{" "}
                      <span className="font-semibold text-brand">{bmi}</span>
                    </p>
                    {categoryId && (
                      <p className="text-slate-200">
                        Category{" "}
                        <span className="font-semibold text-brand">
                          {bmiCategories.find((cat) => cat.id === categoryId)?.label}
                        </span>
                      </p>
                    )}
                  </div>

                  {/* Combatfit extras */}
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl bg-black/30 border border-white/10 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        Healthy weight range
                      </p>
                      <p className="text-sm font-semibold text-slate-100">
                        {healthyRange ? `${healthyRange.min} – ${healthyRange.max} ${healthyRange.unit}` : "—"}
                      </p>
                    </div>

                    <div className="rounded-xl bg-black/30 border border-white/10 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        Water target
                      </p>
                      <p className="text-sm font-semibold text-slate-100">
                        {waterTargetLiters ? `${waterTargetLiters} L/day` : "—"}
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-300">
                    Combatfit note: use BMI as a baseline, then track performance, sleep, and weekly consistency.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Right categories column */}
          <div className="bmi-categories bg-dark-soft/80 border-l border-white/10 flex flex-col">
            <div className="px-5 py-4 border-b border-white/10 text-center">
              <p className="text-sm font-semibold tracking-wide text-slate-50">
                BMI categories
              </p>
              <p className="text-[11px] text-slate-400">
                Use this as a starting point not the full story.
              </p>
            </div>

            <div className="flex-1 flex flex-col text-xs md:text-sm divide-y divide-white/10">
              {bmiCategories.map((cat) => {
                const active = cat.id === categoryId;
                return (
                  <div
                    key={cat.id}
                    className={`flex items-center justify-between px-4 py-3 md:px-5 md:py-4 ${
                      active ? "bg-brand/20 border-l-4 border-l-brand" : "bg-transparent"
                    }`}
                  >
                    <p className="text-slate-100">{cat.range}</p>
                    <p className="text-right text-slate-300">{cat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BmiCalculator;
