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
            Every Club Share brings us closer to the next unit.
          </p>
        </div>

        <div ref={contentRef} className="scroll-reveal max-w-lg space-y-12">
          {/* Suite */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">600 Club Shares = 1 Suite</p>
            <p className="font-display text-6xl sm:text-7xl font-normal text-primary leading-none mb-4">600</p>
            <Progress value={Math.round((342 / 600) * 100)} className="h-1 mb-3" />
            <p className="font-body text-sm text-muted-foreground">342 sold · 258 remaining</p>
          </div>

          <div className="divider" />

          {/* Villa */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">1,000 Club Shares = 1 Villa</p>
            <p className="font-display text-6xl sm:text-7xl font-normal text-secondary leading-none mb-4">1,000</p>
            <Progress value={Math.round((184 / 1000) * 100)} className="h-1 mb-3" />
            <p className="font-body text-sm text-muted-foreground">184 sold · 816 remaining</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
