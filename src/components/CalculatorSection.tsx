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

// Daily potential revenue: 2 villas @18k + 2 suites @12k + 5 deluxe @5.5k
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
    <section id="calculator" className="py-20 bg-muted/40">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
            Your Investment. Your Returns.
          </h2>
          <p className="font-body text-muted-foreground">Adjust the sliders to see your potential.</p>
        </div>

        <div className="max-w-lg mx-auto bg-card/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-lg border border-border/30">
          {/* Investment input */}
          <div className="mb-8">
            <label className="font-body text-sm font-medium text-foreground block mb-3">
              Your Investment (₱)
            </label>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => adjust(-100_000)}
                className="h-10 w-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-display text-2xl sm:text-3xl font-bold text-primary min-w-[180px] text-center">
                {fmt(investment)}
              </span>
              <button
                onClick={() => adjust(100_000)}
                className="h-10 w-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Club Shares slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="font-body text-sm font-medium text-foreground">
                Club Shares (at ₱10,000 each)
              </label>
              <span className="font-display text-lg font-bold text-primary">{clubShares}</span>
            </div>
            <Slider
              value={[clubShares]}
              onValueChange={([v]) => setClubShares(v)}
              max={200}
              step={1}
              className="mb-1"
            />
            <p className="font-body text-xs text-muted-foreground">Each Club Share = ₱10,000</p>
          </div>

          {/* Scenario buttons */}
          <div className="flex gap-2 justify-center mb-8">
            {(["conservative", "base", "optimistic"] as Scenario[]).map((s) => (
              <button
                key={s}
                onClick={() => setScenario(s)}
                className={`font-body text-xs px-4 py-2 rounded-full border transition-colors capitalize ${
                  scenario === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-primary/40 text-primary hover:bg-primary/10"
                }`}
              >
                {s === "base" ? "Base Case" : s}
              </button>
            ))}
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <StatMini label="Pebbles" value={results.pebbles.toLocaleString()} />
            <StatMini label="Ownership" value={`${(results.ownership * 100).toFixed(2)}%`} />
            <StatMini label="Annual Distribution" value={fmt(results.annual)} />
            <StatMini label="Monthly Average" value={fmt(results.monthly)} />
          </div>

          {/* Detailed results */}
          <div className="space-y-3 mb-8">
            <ResultRow label="5-Year Cumulative" value={fmt(results.fiveYear)} />
            <ResultRow label={`Exit Value (${scenarios[scenario].exitMultiple}x)`} value={fmt(results.exitValue)} />
            <ResultRow label="Total Return" value={fmt(results.totalReturn)} highlight />
            <ResultRow label="Multiple on Investment" value={`${results.multiple.toFixed(1)}x`} highlight />
          </div>

          {/* Download */}
          <div className="text-center">
            <button className="font-body text-sm font-semibold bg-secondary text-secondary-foreground px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors">
              Download PDF Summary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatMini = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-muted/60 rounded-2xl p-4 text-center">
    <p className="font-body text-xs text-muted-foreground mb-1">{label}</p>
    <p className="font-display text-lg font-bold text-primary">{value}</p>
  </div>
);

const ResultRow = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div className={`rounded-2xl px-5 py-3 flex items-center justify-between ${highlight ? "bg-primary/10" : "bg-muted/40"}`}>
    <span className="font-body text-sm text-foreground/70">{label}</span>
    <span className={`font-display text-lg font-bold ${highlight ? "text-primary" : "text-foreground"}`}>{value}</span>
  </div>
);

export default CalculatorSection;
