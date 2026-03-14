import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    year: "2026",
    title: "Phase 1A Begins",
    detail: "Tier 1 Kickstarter closes, ground breaking, construction starts",
  },
  {
    year: "2027",
    title: "Long Beach Complete",
    detail: "Resort operational, Tier 2–4 Pebble sales",
  },
  {
    year: "2028",
    title: "Silum Silum Launch",
    detail: "Balabac flagship begins, new Pebble offering",
  },
  {
    year: "2029+",
    title: "Philippines Expansion",
    detail: "5–7 properties across the archipelago, then Southeast Asia",
  },
];

const landStatus = [
  { location: "San Vicente, Palawan (2,000 sqm)", status: "Secured" },
  { location: "Balabac, Palawan", status: "Secured" },
  { location: "Additional sites", status: "Scouting" },
];

const RoadmapSection = () => {
  const headingRef = useScrollReveal();
  const landRef = useScrollReveal();

  return (
    <section id="roadmap" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Roadmap
          </h2>
        </div>

        <div className="relative max-w-lg mb-16">
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-12">
            {timeline.map((item) => (
              <TimelineEntry key={item.year} item={item} />
            ))}
          </div>
        </div>

        <div className="divider mb-12" />

        <div ref={landRef} className="scroll-reveal max-w-lg">
          <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">Land Status</p>
          <div className="space-y-4">
            {landStatus.map((l) => (
              <div key={l.location} className="flex items-baseline justify-between">
                <span className="font-body text-base text-foreground/70">{l.location}</span>
                <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">{l.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineEntry = ({ item }: { item: typeof timeline[number] }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="scroll-reveal relative pl-10">
      <div className="absolute left-0 top-2 h-[7px] w-[7px] rounded-full bg-primary" />
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
        <span className="font-display text-3xl sm:text-4xl font-normal text-primary leading-none">{item.year}</span>
        <div className="mt-2 sm:mt-0">
          <p className="font-body text-base text-foreground mb-1">{item.title}</p>
          <p className="font-body text-sm text-muted-foreground">{item.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
