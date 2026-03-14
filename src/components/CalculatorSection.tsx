import { useState, useMemo } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Slider } from "@/components/ui/slider";

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
const DAILY_POTENTIAL = 2 * 18_000 + 2 * 12_000 + 5 * 5_500;

const fmt = (n: number) => "₱" + Math.round(n).toLocaleString();

const CalculatorSection = () => {
  const headingRef = useScrollReveal();
  const [investment, setInvestment] = useState(500_000);
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
    const exitValue = investment * s.exitMultiple;
    const totalReturn = fiveYear + exitValue;
    const multiple = totalReturn / investment;

    return { pebbles, ownership, annual, monthly, fiveYear, exitValue, totalReturn, multiple };
  }, [investment, s]);

  return (
    <section id="calculator" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Your Returns
          </h2>
          <p className="font-body text-base text-muted-foreground">
            Adjust to see your potential.
          </p>
        </div>

        <div className="max-w-lg">
          {/* Investment slider */}
          <div className="mb-12">
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Investment</p>
            <p className="font-display text-4xl sm:text-5xl font-normal text-primary mb-6">{fmt(investment)}</p>
            <Slider
              value={[investment]}
              onValueChange={([v]) => setInvestment(v)}
              min={500_000}
              max={5_000_000}
              step={100_000}
            />
            <div className="flex justify-between mt-2">
              <span className="font-body text-xs text-muted-foreground">₱500,000</span>
              <span className="font-body text-xs text-muted-foreground">₱5,000,000</span>
            </div>
          </div>

          {/* Scenario links */}
          <div className="flex gap-6 mb-12">
            {(["conservative", "base", "optimistic"] as Scenario[]).map((sc) => (
              <button
                key={sc}
                onClick={() => setScenario(sc)}
                className={`font-body text-sm capitalize transition-colors ${
                  scenario === sc
                    ? "text-primary border-b border-primary pb-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {sc === "base" ? "Base case" : sc}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-12">
            <ResultItem label="Pebbles" value={results.pebbles.toLocaleString()} />
            <ResultItem label="Ownership" value={`${(results.ownership * 100).toFixed(2)}%`} />
            <ResultItem label="Annual Distribution" value={fmt(results.annual)} />
            <ResultItem label="Monthly Average" value={fmt(results.monthly)} />
          </div>

          <div className="divider mb-10" />

          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            <ResultItem label="5-Year Cumulative" value={fmt(results.fiveYear)} />
            <ResultItem label={`Exit Value (${s.exitMultiple}x)`} value={fmt(results.exitValue)} />
            <ResultItem label="Total Return" value={fmt(results.totalReturn)} accent />
            <ResultItem label="Multiple" value={`${results.multiple.toFixed(1)}x`} accent />
          </div>
        </div>
      </div>
    </section>
  );
};

const ResultItem = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div>
    <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">{label}</p>
    <p className={`font-display text-2xl sm:text-3xl font-normal ${accent ? "text-primary" : "text-foreground"}`}>{value}</p>
  </div>
);

export default CalculatorSection;
