import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    year: "2026",
    title: "2026 – Phase 1A Begins",
    details: ["Tier 1 Kickstarter closes · Ground breaking · Construction starts"],
  },
  {
    year: "2027",
    title: "2027 – Long Beach Complete",
    details: ["Phase 1B finished · Resort operational · Tier 2-4 Pebble sales"],
  },
  {
    year: "2028",
    title: "2028 – Silum Silum Launch",
    details: ["Flagship property in Balabac · New Pebble offering"],
  },
  {
    year: "2029+",
    title: "2029+ – Philippines Expansion",
    details: [
      "5-7 properties: Bukidnon, Sagada, Batanes, Siquijor, Sibuyan",
      "Then: Indonesia, Laos, Timor-Leste",
      "Dream: Puglia, Italy 🇮🇹",
    ],
  },
];

const landStatus = [
  { icon: "✅", text: "San Vicente, Palawan (2,000 sqm)" },
  { icon: "✅", text: "Balabac, Palawan (TBD)" },
  { icon: "🔄", text: "Scouting others" },
];

const TimelineCard = ({ item }: { item: typeof timeline[number] }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="scroll-reveal relative pl-12">
      <div className="absolute left-2.5 top-2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
      <div className="card-premium">
        <h3 className="font-display text-lg font-bold text-primary mb-2">{item.title}</h3>
        {item.details.map((line, i) => (
          <p key={i} className="font-body text-base text-foreground/70">{line}</p>
        ))}
      </div>
    </div>
  );
};

const RoadmapSection = () => {
  const headingRef = useScrollReveal();
  const landRef = useScrollReveal();

  return (
    <section id="roadmap" className="section-padding bg-muted/30">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-3">
            Roadmap
          </h2>
        </div>

        <div className="relative max-w-lg mx-auto mb-12">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />
          <div className="space-y-8">
            {timeline.map((item) => (
              <TimelineCard key={item.year} item={item} />
            ))}
          </div>
        </div>

        <div ref={landRef} className="scroll-reveal max-w-lg mx-auto">
          <h3 className="font-display text-xl font-bold text-primary mb-4 text-center">
            Land Owned
          </h3>
          <div className="space-y-3">
            {landStatus.map((l) => (
              <p key={l.text} className="font-body text-base text-foreground/80 text-center">
                {l.icon} {l.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
