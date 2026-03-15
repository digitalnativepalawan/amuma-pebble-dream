import { useScrollReveal } from "@/hooks/useScrollReveal";
import AdminMediaBlock from "@/components/AdminMediaBlock";

const timeline = [
  {
    year: "2026",
    title: "San Vicente Retreat",
    detail: "Founding Circle closes, construction begins",
  },
  {
    year: "2027",
    title: "Retreat Operational",
    detail: "First guests welcomed, rental income begins",
  },
  {
    year: "2028",
    title: "Second Retreat",
    detail: "Next destination selected, new share offering",
  },
  {
    year: "2029+",
    title: "Network Expansion",
    detail: "Philippines and Southeast Asia destinations",
  },
];

const RoadmapSection = () => {
  const headingRef = useScrollReveal();

  return (
    <section id="roadmap" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Roadmap
          </h2>
        </div>

        <div className="relative max-w-lg">
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-12">
            {timeline.map((item) => (
              <TimelineEntry key={item.year} item={item} />
            ))}
          </div>
        </div>

        <AdminMediaBlock section="roadmap" slotKey="after_body" className="mt-8 max-w-lg" aspectRatio="16/9" maxItems={4} />
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
