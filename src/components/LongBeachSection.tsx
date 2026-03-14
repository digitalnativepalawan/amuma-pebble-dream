import { useScrollReveal } from "@/hooks/useScrollReveal";

const units = [
  {
    name: "VILLA",
    count: "2 units",
    rate: "₱18,000",
    perNight: "/night",
    features: "Standalone, private garden, outdoor shower, premium finishes",
  },
  {
    name: "SUITE",
    count: "2 units",
    rate: "₱12,000",
    perNight: "/night",
    features: "Separate living area, larger terrace, best views",
  },
  {
    name: "DELUXE ROOM",
    count: "5 units",
    rate: "₱5,500",
    perNight: "/night",
    features: "Baia's proven workhorse, outdoor shower, private balcony",
  },
];

const phases = [
  { label: "Phase 1A (Months 0–12)", detail: "1 Villa, 1 Suite, Restaurant, Pool" },
  { label: "Phase 1B (Months 12–24)", detail: "1 Villa, 1 Suite, 5 Deluxe Rooms" },
];

const LongBeachSection = () => {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const phasesRef = useScrollReveal();

  return (
    <section id="longbeach" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-2">
            AMUMA Long Beach
          </h2>
          <p className="font-body text-base text-muted-foreground">
            San Vicente, Palawan · 2,000 sqm · 9 total keys
          </p>
        </div>

        <div ref={contentRef} className="scroll-reveal max-w-lg space-y-0">
          {units.map((u, i) => (
            <div key={u.name}>
              {i > 0 && <div className="divider my-10" />}
              <div>
                <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide mb-1">
                  {u.name}
                  <span className="font-body text-sm font-normal text-muted-foreground ml-3">{u.count}</span>
                </h3>
                <p className="font-display text-4xl sm:text-5xl font-normal text-primary my-3">
                  {u.rate}<span className="text-lg text-muted-foreground">{u.perNight}</span>
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{u.features}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="divider my-16" />

        <div ref={phasesRef} className="scroll-reveal max-w-lg space-y-6">
          {phases.map((p) => (
            <div key={p.label}>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">{p.label}</p>
              <p className="font-body text-base text-foreground/70">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LongBeachSection;
