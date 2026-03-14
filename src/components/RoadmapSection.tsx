import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    year: "2026",
    title: "2026 – Phase 1A Begins",
    details: "Tier 1 Kickstarter closes · Ground breaking · Construction starts",
  },
  {
    year: "2027",
    title: "2027 – Long Beach Complete",
    details: "Phase 1B finished · Resort operational · Tier 2-4 Pebble sales",
  },
  {
    year: "2028",
    title: "2028 – Silum Silum Launch",
    details: "Flagship property in Balabac · New Pebble offering",
  },
  {
    year: "2029+",
    title: "2029+ – Philippines Expansion",
    details:
      "5-7 properties: Bukidnon, Sagada, Batanes, Siquijor, Sibuyan\nThen: Indonesia, Laos, Timor-Leste\nDream: Puglia, Italy 🇮🇹",
  },
];

const landStatus = [
  { icon: "✅", text: "San Vicente, Palawan (2,000 sqm)" },
  { icon: "✅", text: "Balabac, Palawan (TBD)" },
  { icon: "🔄", text: "Scouting others" },
];

const RoadmapSection = () => {
  const headingRef = useScrollReveal();
  const landRef = useScrollReveal();

  return (
    <section id="roadmap" className="py-20 bg-muted/40">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
            Roadmap
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-lg mx-auto mb-10">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-6">
            {timeline.map((item) => {
              const ref = useScrollReveal();
              return (
                <div key={item.year} ref={ref} className="scroll-reveal relative pl-12">
                  <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                  <div className="bg-card rounded-2xl p-5 shadow-sm border border-border/30">
                    <h3 className="font-display text-base font-bold text-primary mb-1">
                      {item.title}
                    </h3>
                    {item.details.split("\n").map((line, i) => (
                      <p key={i} className="font-body text-sm text-foreground/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Land owned */}
        <div ref={landRef} className="scroll-reveal max-w-lg mx-auto">
          <h3 className="font-display text-lg font-bold text-primary mb-3 text-center">
            Land Owned
          </h3>
          <div className="space-y-2">
            {landStatus.map((l) => (
              <p key={l.text} className="font-body text-sm text-foreground/80 text-center">
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
