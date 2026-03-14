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
          {/* Pebbles */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Pebbles (Equity)
            </h3>
            <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
              <p>— Ownership stake in AMUMA Long Beach, Inc.</p>
              <p>— Passive income from 60% of room profits</p>
              <p>— Cumulative and transferable</p>
              <p>— 325,000 total Pebbles at ₱100 each</p>
            </div>
          </div>

          {/* Club Shares */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Club Shares (Access)
            </h3>
            <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
              <p>— Membership access to AMUMA properties</p>
              <p>— Renewable annually (July 10 – July 9)</p>
              <p>— Giftable to friends and family</p>
              <p>— Non-cumulative, expires yearly</p>
            </div>
          </div>
        </div>

        <div className="divider mb-16" />

        <div ref={flowRef} className="scroll-reveal max-w-md">
          <h3 className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">Revenue Flow</h3>
          <div className="space-y-3 font-body text-base text-foreground/70 mb-10">
            <p>Room Revenue → 60% Member Pool → Pebble Holders</p>
            <p>Room Revenue → 40% Operating Holding → Management</p>
          </div>
          <Link
            to="/technology"
            className="inline-flex items-center font-body text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Learn how Pebbles work →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
