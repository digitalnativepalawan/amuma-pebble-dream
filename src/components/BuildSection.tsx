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
    <div ref={ref} className="scroll-reveal card-premium">
      <p className="font-body text-base text-muted-foreground mb-3">{title}</p>
      <p className={`font-display text-5xl font-bold ${accentClass} mb-5`}>
        {target.toLocaleString()}
      </p>
      <Progress value={pct} className="h-3 mb-4" />
      <p className="font-body text-sm text-muted-foreground">
        {sold} sold · {remaining} more to build next {target === 600 ? "suite" : "villa"}
      </p>
    </div>
  );
};

const BuildSection = () => {
  const headingRef = useScrollReveal();

  return (
    <section id="build" className="section-padding bg-muted/30">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-3">
            Build With Us
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Every Club Share brings us closer to the next suite.
          </p>
        </div>

        <div className="space-y-6 max-w-lg mx-auto">
          <BuildCard title="600 Club Shares = 1 Suite" target={600} sold={342} accentClass="text-primary" />
          <BuildCard title="1,000 Club Shares = 1 Villa" target={1000} sold={184} accentClass="text-secondary" />
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
