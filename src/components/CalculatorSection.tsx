import { useState, useMemo } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Slider } from "@/components/ui/slider";
import { Minus, Plus } from "lucide-react";

type Scenario = "conservative" | "base" | "optimistic";

const scenarios: Record<Scenario, { highOcc: number; lowOcc: number; margin: number; exitMultiple: number }> = {
  conservative: { highOcc: 0.60, lowOcc: 0.25, margin: 0.35, exitMultiple: 3.0 },
  base:         { highOcc: 0.75, lowOcc: 0.40, margin: 0.40, exitMultiple: 4.0 },
  optimistic:   { highOcc: 0.90, lowOcc: 0.55, margin: 0.45, exitMultiple: 5.0 },
};

const HIGH_SEASON_DAYS = 274;
const LOW_SEASON_DAYS = 91;
const TOTAL_PEBBLES = 325_000;
const MEMBER_SHARE = 0.60;

const DAILY_POTENTIAL = 2 * 18_000 + 2 * 12_000 + 5 * 5_500; // 87,500

const fmt = (n: number) => "₱" + Math.round(n).toLocaleString();

const CalculatorSection = () => {
  const headingRef = useScrollReveal();
  const [investment, setInvestment] = useState(500_000);
  const [clubShares, setClubShares] = useState(0);
  const [scenario, setScenario] = useState<Scenario>("base");

  const s = scenarios[scenario];

  const results = useMemo(() => {
    const pebbles = investment / 100;
    const ownership = pebbles / TOTAL_PEBBLES;
    const grossRevenue =
      DAILY_POTENTIAL * (s.highOcc * HIGH_SEASON_DAYS + s.lowOcc * LOW_SEASON_DAYS);
    const netProfit = grossRevenue * s.margin;
    const memberPool = netProfit * MEMBER_SHARE;
    const annual = memberPool * ownership;
    const monthly = annual / 12;
    const fiveYear = annual * 5;
    const clubShareCost = clubShares * 10_000;
    const totalInvested = investment + clubShareCost;
    const exitValue = investment * s.exitMultiple;
    const totalReturn = fiveYear + exitValue;
    const multiple = totalReturn / totalInvested;

    return { pebbles, ownership, annual, monthly, fiveYear, exitValue, totalReturn, multiple, totalInvested };
  }, [investment, clubShares, s]);

  const adjust = (delta: number) => {
    setInvestment((v) => Math.min(5_000_000, Math.max(500_000, v + delta)));
  };

  return (
    <section id="calculator" className="section-padding bg-muted/30">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-3">
            Your Investment. Your Returns.
          </h2>
          <p className="font-body text-lg text-muted-foreground">Adjust the sliders to see your potential.</p>
        </div>

        <div className="max-w-lg mx-auto bg-card/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-border/20" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)' }}>
          {/* Investment input */}
          <div className="mb-10">
            <label className="font-body text-base font-medium text-foreground block mb-4">
              Your Investment (₱)
            </label>
            <div className="flex items-center justify-center gap-5">
              <button
                onClick={() => adjust(-100_000)}
                className="h-12 w-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
              >
                <Minus className="h-5 w-5" />
              </button>
              <span className="font-display text-3xl sm:text-4xl font-bold text-primary min-w-[200px] text-center">
                {fmt(investment)}
              </span>
              <button
                onClick={() => adjust(100_000)}
                className="h-12 w-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Club Shares slider */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <label className="font-body text-base font-medium text-foreground">
                Club Shares (at ₱10,000 each)
              </label>
              <span className="font-display text-xl font-bold text-primary">{clubShares}</span>
            </div>
            <Slider
              value={[clubShares]}
              onValueChange={([v]) => setClubShares(v)}
              max={200}
              step={1}
              className="mb-2"
            />
            <p className="font-body text-sm text-muted-foreground">Each Club Share = ₱10,000</p>
          </div>

          {/* Scenario buttons */}
          <div className="flex gap-3 justify-center mb-10">
            {(["conservative", "base", "optimistic"] as Scenario[]).map((sc) => (
              <button
                key={sc}
                onClick={() => setScenario(sc)}
                className={`font-body text-sm px-5 py-2.5 rounded-full border-2 transition-all duration-200 capitalize hover:scale-105 ${
                  scenario === sc
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "border-primary/30 text-primary hover:border-primary"
                }`}
              >
                {sc === "base" ? "Base Case" : sc}
              </button>
            ))}
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <StatMini label="Pebbles" value={results.pebbles.toLocaleString()} />
            <StatMini label="Ownership" value={`${(results.ownership * 100).toFixed(2)}%`} />
            <StatMini label="Annual Distribution" value={fmt(results.annual)} />
            <StatMini label="Monthly Average" value={fmt(results.monthly)} />
          </div>

          {/* Detailed results */}
          <div className="space-y-3 mb-10">
            <ResultRow label="5-Year Cumulative" value={fmt(results.fiveYear)} />
            <ResultRow label={`Exit Value (${scenarios[scenario].exitMultiple}x)`} value={fmt(results.exitValue)} />
            <ResultRow label="Total Return" value={fmt(results.totalReturn)} highlight />
            <ResultRow label="Multiple on Investment" value={`${results.multiple.toFixed(1)}x`} highlight />
          </div>

          {/* Download */}
          <div className="text-center">
            <button className="font-body text-base font-semibold bg-secondary text-secondary-foreground px-10 py-4 rounded-full hover:scale-105 transition-all duration-200 shadow-md">
              Download PDF Summary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatMini = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-muted/50 rounded-2xl p-5 text-center">
    <p className="font-body text-sm text-muted-foreground mb-1">{label}</p>
    <p className="font-display text-xl font-bold text-primary">{value}</p>
  </div>
);

const ResultRow = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div className={`rounded-2xl px-6 py-4 flex items-center justify-between ${highlight ? "bg-primary/10" : "bg-muted/30"}`}>
    <span className="font-body text-base text-foreground/70">{label}</span>
    <span className={`font-display text-xl font-bold ${highlight ? "text-primary" : "text-foreground"}`}>{value}</span>
  </div>
);

export default CalculatorSection;
