import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";

const units = [
  {
    icon: "🏡",
    name: "VILLA",
    count: "2 units",
    rate: "₱18,000/night",
    features: "Standalone, private garden, outdoor shower, premium finishes",
  },
  {
    icon: "🌟",
    name: "SUITE",
    count: "2 units",
    rate: "₱12,000/night",
    features: "Separate living area, larger terrace, best views",
  },
  {
    icon: "🛏️",
    name: "DELUXE ROOM",
    count: "5 units",
    rate: "₱5,500/night",
    features: "Baia's proven workhorse, outdoor shower, private balcony",
  },
];

const phases = [
  { label: "Phase 1A (Months 0-12)", detail: "1 Villa, 1 Suite, Restaurant, Pool" },
  { label: "Phase 1B (Months 12-24)", detail: "Remaining 1 Villa, 1 Suite, 5 Deluxe Rooms" },
];

const LongBeachSection = () => {
  const headingRef = useScrollReveal();
  const phasesRef = useScrollReveal();

  return (
    <section id="longbeach" className="py-20 bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
            AMUMA Long Beach
          </h2>
          <p className="font-body text-muted-foreground">San Vicente, Palawan · 2,000 sqm</p>
          <p className="font-body text-sm text-muted-foreground mt-1">
            Mirroring Baia's proven aesthetic
          </p>
        </div>

        <div className="space-y-4 max-w-lg mx-auto mb-6">
          {units.map((u) => {
            const ref = useScrollReveal();
            return (
              <div
                key={u.name}
                ref={ref}
                className="scroll-reveal bg-card rounded-2xl p-6 shadow-sm border border-border/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{u.icon}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {u.name}{" "}
                      <span className="font-body text-sm font-normal text-muted-foreground">
                        ({u.count})
                      </span>
                    </h3>
                  </div>
                </div>
                <p className="font-display text-2xl font-bold text-primary mb-2">{u.rate}</p>
                <p className="font-body text-sm text-foreground/70">{u.features}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-8">
          <Badge variant="secondary" className="text-sm px-4 py-1">Total Keys: 9</Badge>
        </div>

        <div
          ref={phasesRef}
          className="scroll-reveal space-y-3 max-w-lg mx-auto"
        >
          {phases.map((p) => (
            <div
              key={p.label}
              className="bg-muted/40 rounded-2xl px-6 py-4 border border-border/30"
            >
              <p className="font-display text-sm font-bold text-primary">{p.label}</p>
              <p className="font-body text-sm text-foreground/70">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LongBeachSection;
