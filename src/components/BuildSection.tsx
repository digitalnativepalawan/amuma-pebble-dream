import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Progress } from "@/components/ui/progress";

const BuildSection = () => {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section id="build" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            Build With Us
          </h2>
          <p className="font-body text-base text-muted-foreground">
            Every share brings us closer to the next retreat.
          </p>
        </div>

        <div ref={contentRef} className="scroll-reveal max-w-lg space-y-12">
          {/* Member Shares */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">2,800 Member Shares Available</p>
            <p className="font-display text-6xl sm:text-7xl font-normal text-primary leading-none mb-4">2,800</p>
            <Progress value={0} className="h-1 mb-3" />
            <p className="font-body text-sm text-muted-foreground">Sales opening soon</p>
          </div>

          <div className="divider" />

          {/* Total Shares */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Total Share Allocation</p>
            <p className="font-display text-6xl sm:text-7xl font-normal text-secondary leading-none mb-4">4,400</p>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p>AMUMA Holding: 1,600 shares</p>
              <p>Members: 2,800 shares</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
