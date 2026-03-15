import { useScrollReveal } from "@/hooks/useScrollReveal";

const ModelSection = () => {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const flowRef = useScrollReveal();

  return (
    <section id="model" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            The AMUMA Model
          </h2>
          <p className="font-body text-base text-muted-foreground">
            Two ways to belong. One shared vision.
          </p>
        </div>

        <div ref={contentRef} className="scroll-reveal grid md:grid-cols-2 gap-16 mb-16">
          {/* Shares */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Membership Shares (Ownership)
            </h3>
            <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
              <p>— Ownership stake in AMUMA retreats</p>
              <p>— Passive income from 60% of rental revenue</p>
              <p>— Cumulative and transferable</p>
              <p>— 4,400 total shares per retreat</p>
            </div>
          </div>

          {/* Pebbles */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Pebbles (Experience Credits)
            </h3>
            <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
              <p>— Annual stay credits for AMUMA retreats</p>
              <p>— Used for accommodation and curated experiences</p>
              <p>— Renew annually</p>
              <p>— Allocated based on investment tier</p>
            </div>
          </div>
        </div>

        <div className="divider mb-16" />

        <div ref={flowRef} className="scroll-reveal max-w-md">
          <h3 className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">Revenue Flow</h3>
          <div className="space-y-3 font-body text-base text-foreground/70">
            <p>Accommodation Revenue → 60% Membership Shareholders</p>
            <p>Accommodation Revenue → 40% AMUMA Operator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
