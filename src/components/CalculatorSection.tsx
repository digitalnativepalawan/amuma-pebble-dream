import { useState, useMemo } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import AdminMediaBlock from "@/components/AdminMediaBlock";

const tiers = [
  { name: "Nova", investment: 500_000, shares: 50, pebbles: 1_000 },
  { name: "Aurora", investment: 1_200_000, shares: 120, pebbles: 2_200 },
  { name: "Orion", investment: 2_000_000, shares: 210, pebbles: 4_000 },
  { name: "Polaris", investment: 4_000_000, shares: 440, pebbles: 8_000 },
];

const TOTAL_MEMBER_SHARES = 2_800;
const TOTAL_PROJECT_SHARES = 4_400;
const MEMBER_POOL_SHARE = 0.60;
const MAX_PEBBLES = 8_000;
const AVG_PEBBLE_COST = 200;

const fmt = (n: number) => "₱" + Math.round(n).toLocaleString();

const pebbleTicks = [
  { value: 1_000, label: "1,000" },
  { value: 2_200, label: "2,200" },
  { value: 4_000, label: "4,000" },
  { value: 8_000, label: "8,000" },
];

const CalculatorSection = () => {
  const headingRef = useScrollReveal();
  const [tierIndex, setTierIndex] = useState(0);

  const tier = tiers[tierIndex];

  const results = useMemo(() => {
    const ownership = tier.shares / TOTAL_MEMBER_SHARES;
    const lowROI = 0.17;
    const highROI = 0.20;
    const annualLow = tier.investment * lowROI;
    const annualHigh = tier.investment * highROI;
    const estimatedNights = Math.floor(tier.pebbles / AVG_PEBBLE_COST);

    return { ownership, annualLow, annualHigh, estimatedNights };
  }, [tier]);

  return (
    <section id="calculator" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Your Returns
          </h2>
          <p className="font-body text-base text-muted-foreground">
            Select a tier to see your potential.
          </p>
        </div>

        <div className="max-w-lg">
          {/* Tier selector */}
          <div className="mb-12">
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Investment Tier</p>
            <p className="font-display text-4xl sm:text-5xl font-normal text-primary mb-2">{tier.name}</p>
            <p className="font-body text-lg text-foreground/70 mb-6">{fmt(tier.investment)}</p>
            <Slider
              value={[tierIndex]}
              onValueChange={([v]) => setTierIndex(v)}
              min={0}
              max={3}
              step={1}
            />
            <div className="flex justify-between mt-2">
              <span className="font-body text-xs text-muted-foreground">Nova</span>
              <span className="font-body text-xs text-muted-foreground">Polaris</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-6">
            <ResultItem label="Shares" value={tier.shares.toLocaleString()} />
            <div>
              <ResultItem label="Ownership" value={`${(results.ownership * 100).toFixed(2)}%`} />
              <p className="font-body text-xs text-muted-foreground mt-2">
                Your proportional share of the Member Investment Pool.
              </p>
              <p className="font-body text-xs text-muted-foreground">
                Total: {TOTAL_PROJECT_SHARES.toLocaleString()} shares · Members: {TOTAL_MEMBER_SHARES.toLocaleString()}
              </p>
            </div>
            <div>
              <ResultItem label="Annual Pebbles" value={tier.pebbles.toLocaleString()} />
              {/* Pebble Gauge */}
              <div className="mt-3">
                <Progress value={(tier.pebbles / MAX_PEBBLES) * 100} className="h-2" />
                <div className="flex justify-between mt-1">
                  {pebbleTicks.map((tick) => (
                    <span
                      key={tick.value}
                      className={`font-body text-[10px] ${tier.pebbles >= tick.value ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {tick.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <ResultItem label="Member Pool Share" value={`${(MEMBER_POOL_SHARE * 100).toFixed(0)}%`} />
          </div>

          {/* Experience Value */}
          <div className="mb-10">
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Experience Value</p>
            <p className="font-display text-2xl sm:text-3xl font-normal text-primary">
              ~{results.estimatedNights} suite nights per year
            </p>
            <p className="font-body text-sm text-muted-foreground mt-2">
              OR multiple shorter stays plus spa, dining, and boat excursions.
            </p>
          </div>

          {/* Pebble Value Explanation */}
          <div className="mb-10">
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              Pebbles are annual experience credits used for accommodation, dining, spa treatments, boat excursions, and curated experiences. They renew every year and encourage members to return and continue their journey.
            </p>
          </div>

          <div className="divider mb-10" />

          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            <ResultItem label="Est. Annual Return (Low)" value={fmt(results.annualLow)} />
            <ResultItem label="Est. Annual Return (High)" value={fmt(results.annualHigh)} />
            <ResultItem label="Projected ROI" value="17–20%" accent />
            <ResultItem label="Assumptions" value="55% occ." />
          </div>

          <p className="font-body text-xs text-muted-foreground mt-8">
            Based on conservative assumptions: 55% occupancy, boutique luxury positioning, TIEZA 5% tourism tax.
          </p>

          {/* Lifestyle + Yield Summary Card */}
          <div className="border border-border rounded-2xl p-6 mt-12">
            <p className="font-display text-lg font-bold text-primary uppercase tracking-[0.1em] mb-4">
              Your Membership Value
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <SummaryRow label="Investment" value={fmt(tier.investment)} />
              <SummaryRow label="Shares" value={tier.shares.toLocaleString()} />
              <SummaryRow label="Annual Pebbles" value={tier.pebbles.toLocaleString()} />
              <SummaryRow label="Estimated Experiences" value={`~${results.estimatedNights} nights`} />
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Projected Financial Return</p>
              <p className="font-display text-2xl font-normal text-primary">
                {fmt(results.annualLow)} – {fmt(results.annualHigh)}
              </p>
              <p className="font-body text-xs text-muted-foreground">annually</p>
            </div>
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

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="font-body text-xs text-muted-foreground">{label}</p>
    <p className="font-body text-sm font-medium text-foreground">{value}</p>
  </div>
);

export default CalculatorSection;
