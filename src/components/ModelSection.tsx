import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";

const FeatureCard = ({
  title,
  borderColor,
  items,
}: {
  title: string;
  borderColor: string;
  items: string[];
}) => {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal bg-card rounded-2xl p-6 shadow-sm border-l-4 ${borderColor}`}
    >
      <h3 className="font-display text-xl font-bold text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <span className="font-body text-sm text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ModelSection = () => {
  const headingRef = useScrollReveal();
  const flowRef = useScrollReveal();

  return (
    <section id="model" className="py-20 bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
            The AMUMA Model
          </h2>
          <p className="font-body text-muted-foreground">
            Two ways to belong. One shared vision.
          </p>
        </div>

        <div className="space-y-4 max-w-lg mx-auto mb-8">
          <FeatureCard
            title="PEBBLES (Equity)"
            borderColor="border-primary"
            items={[
              "Ownership stake in AMUMA Long Beach, Inc.",
              "Passive income from 60% of room profits",
              "Cumulative and transferable",
              "325,000 total Pebbles (₱100 per Pebble)",
            ]}
          />
          <FeatureCard
            title="CLUB SHARES (Access)"
            borderColor="border-secondary"
            items={[
              "Membership access to AMUMA properties",
              "Renewable annually (July 10 – July 9)",
              "Giftable to friends and family",
              "Non-cumulative (expires yearly)",
            ]}
          />
        </div>

        <div
          ref={flowRef}
          className="scroll-reveal bg-muted/40 rounded-2xl p-6 max-w-lg mx-auto text-center"
        >
          <h3 className="font-display text-lg font-bold text-primary mb-4">Revenue Flow</h3>
          <div className="space-y-3 font-body text-sm text-foreground/80">
            <p>🏨 Room Revenue → 60% Member Pool → Distributed to Pebble Holders</p>
            <p>🏨 Room Revenue → 40% Operating Holding → Management & Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
