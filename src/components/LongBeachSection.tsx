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

const UnitCard = ({ icon, name, count, rate, features }: typeof units[number]) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="scroll-reveal card-premium">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="font-display text-xl font-bold text-foreground">
          {name}{" "}
          <span className="font-body text-sm font-normal text-muted-foreground">({count})</span>
        </h3>
      </div>
      <p className="font-display text-3xl font-bold text-primary mb-3">{rate}</p>
      <p className="font-body text-base text-foreground/70 leading-relaxed">{features}</p>
    </div>
  );
};

const LongBeachSection = () => {
  const headingRef = useScrollReveal();
  const phasesRef = useScrollReveal();

  return (
    <section id="longbeach" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-3">
            AMUMA Long Beach
          </h2>
          <p className="font-body text-lg text-muted-foreground">San Vicente, Palawan · 2,000 sqm</p>
          <p className="font-body text-base text-muted-foreground mt-2 italic">
            Mirroring Baia's proven aesthetic
          </p>
        </div>

        <div className="space-y-6 max-w-lg mx-auto mb-8">
          {units.map((u) => (
            <UnitCard key={u.name} {...u} />
          ))}
        </div>

        <div className="text-center mb-10">
          <Badge variant="secondary" className="text-base px-6 py-2 font-body">Total Keys: 9</Badge>
        </div>

        <div ref={phasesRef} className="scroll-reveal space-y-4 max-w-lg mx-auto">
          {phases.map((p) => (
            <div key={p.label} className="card-premium bg-muted/20">
              <p className="font-display text-base font-bold text-primary mb-1">{p.label}</p>
              <p className="font-body text-base text-foreground/70">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LongBeachSection;
