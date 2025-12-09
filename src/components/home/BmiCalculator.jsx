import { useState } from "react";
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

function BmiCalculator() {
  const {
    siteData: {
      home: { bmiImageUrl },
    },
  } = useSiteData();

  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [bmi, setBmi] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = (event) => {
    event.preventDefault();
    setError("");

    const h = parseFloat(heightCm);
    const w = parseFloat(weightKg);

    if (!h || !w || h <= 0 || w <= 0) {
      setError("Please enter a valid height and weight.");
      setBmi(null);
      setCategoryId(null);
      return;
    }

    const heightM = h / 100;
    const value = w / (heightM * heightM);
    const rounded = Number(value.toFixed(1));

    setBmi(rounded);
    setCategoryId(getCategoryId(rounded));
  };

  return (
    <section className="py-12 md:py-16">
      <div className="rounded-3xl bg-gradient-to-r from-dark-soft via-dark to-dark border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(15,118,110,0.6)]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)_minmax(0,1.1fr)] items-stretch">
          {/* Left coach image */}
          <div className="relative hidden md:block">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${bmiImageUrl}')`,
              }}
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
                A simple snapshot of where you are right now. Your coach can
                combine this with strength and movement assessments for a more
                complete picture.
              </p>
            </header>

            <form
              onSubmit={handleCalculate}
              className="space-y-4 text-xs md:text-sm"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {/* Height */}
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
                    <span className="text-slate-300 whitespace-nowrap text-xs">
                      cm
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400">Example 170</p>
                </div>

                {/* Weight */}
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
                    <span className="text-slate-300 whitespace-nowrap text-xs">
                      kg
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400">Example 68</p>
                </div>
              </div>

              {error && (
                <p className="text-[11px] text-red-400 font-medium">{error}</p>
              )}

              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-brand text-dark font-semibold text-sm shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:bg-brand-dark transition"
              >
                Calculate BMI
              </button>

              {bmi && (
                <div className="mt-3 inline-flex flex-col gap-1 rounded-xl border border-brand/40 bg-brand/10 px-4 py-3 text-xs md:text-sm text-slate-100">
                  <p>
                    Your BMI is{" "}
                    <span className="font-semibold text-brand">{bmi}</span>
                  </p>
                  {categoryId && (
                    <p className="text-slate-200">
                      Category{" "}
                      <span className="font-semibold text-brand">
                        {
                          bmiCategories.find((cat) => cat.id === categoryId)
                            ?.label
                        }
                      </span>
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Right categories column */}
          <div className="bg-dark-soft/80 border-l border-white/10 flex flex-col">
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
                      active
                        ? "bg-brand/20 border-l-4 border-l-brand"
                        : "bg-transparent"
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
