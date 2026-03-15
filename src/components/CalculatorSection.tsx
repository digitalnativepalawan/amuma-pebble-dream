import { useState, useMemo } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Slider } from "@/components/ui/slider";

const tiers = [
  { name: "Nova", investment: 500_000, shares: 50, pebbles: 1_000 },
  { name: "Aurora", investment: 1_200_000, shares: 120, pebbles: 2_400 },
  { name: "Orion", investment: 2_000_000, shares: 210, pebbles: 4_200 },
  { name: "Polaris", investment: 4_000_000, shares: 440, pebbles: 8_800 },
];

const TOTAL_MEMBER_SHARES = 2_800;
const MEMBER_POOL_SHARE = 0.60;

const fmt = (n: number) => "₱" + Math.round(n).toLocaleString();

const CalculatorSection = () => {
  const headingRef = useScrollReveal();
  const [tierIndex, setTierIndex] = useState(0);

  const tier = tiers[tierIndex];

  const results = useMemo(() => {
    const ownership = tier.shares / TOTAL_MEMBER_SHARES;
    // Conservative: 55% occupancy, 17-20% ROI range
    const lowROI = 0.17;
    const highROI = 0.20;
    const annualLow = tier.investment * lowROI;
    const annualHigh = tier.investment * highROI;

    return { ownership, annualLow, annualHigh };
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
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-12">
            <ResultItem label="Shares" value={tier.shares.toLocaleString()} />
            <ResultItem label="Ownership" value={`${(results.ownership * 100).toFixed(2)}%`} />
            <ResultItem label="Annual Pebbles" value={tier.pebbles.toLocaleString()} />
            <ResultItem label="Member Pool Share" value={`${(MEMBER_POOL_SHARE * 100).toFixed(0)}%`} />
          </div>

          <div className="divider mb-10" />

          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            <ResultItem label="Est. Annual Return (Low)" value={fmt(results.annualLow)} />
            <ResultItem label="Est. Annual Return (High)" value={fmt(results.annualHigh)} />
            <ResultItem label="Projected ROI" value="17% – 20%" accent />
            <ResultItem label="Assumptions" value="55% occ." />
          </div>

          <p className="font-body text-xs text-muted-foreground mt-8">
            Based on conservative assumptions: 55% occupancy, boutique luxury positioning, TIEZA 5% tourism tax.
          </p>
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
