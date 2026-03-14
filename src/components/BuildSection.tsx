import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Progress } from "@/components/ui/progress";

const BuildCard = ({
  title,
  target,
  sold,
  accentClass,
}: {
  title: string;
  target: number;
  sold: number;
  accentClass: string;
}) => {
  const ref = useScrollReveal();
  const pct = Math.round((sold / target) * 100);
  const remaining = target - sold;

  return (
    <div ref={ref} className="scroll-reveal bg-card rounded-2xl p-6 shadow-sm border border-border/30">
      <p className="font-body text-sm text-muted-foreground mb-2">{title}</p>
      <p className={`font-display text-4xl font-bold ${accentClass} mb-4`}>
        {target.toLocaleString()}
      </p>
      <Progress value={pct} className="h-3 mb-3" />
      <p className="font-body text-xs text-muted-foreground">
        {sold} sold · {remaining} more to build next {target === 600 ? "suite" : "villa"}
      </p>
    </div>
  );
};

const BuildSection = () => {
  const headingRef = useScrollReveal();

  return (
    <section id="build" className="py-20 bg-muted/40">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
            Build With Us
          </h2>
          <p className="font-body text-muted-foreground">
            Every Club Share brings us closer to the next suite.
          </p>
        </div>

        <div className="space-y-4 max-w-lg mx-auto">
          <BuildCard title="600 Club Shares = 1 Suite" target={600} sold={342} accentClass="text-primary" />
          <BuildCard title="1,000 Club Shares = 1 Villa" target={1000} sold={184} accentClass="text-secondary" />
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
