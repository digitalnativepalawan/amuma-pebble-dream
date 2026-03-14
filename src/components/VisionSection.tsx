import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const StatItem = ({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) => {
  const { value: animatedValue, ref } = useCountUp(value, 1500, decimals);

  return (
    <div ref={ref} className="text-left">
      <div className="font-display text-5xl sm:text-6xl md:text-7xl font-normal text-primary leading-none">
        {animatedValue.toLocaleString()}
        {suffix && <span className="text-3xl sm:text-4xl ml-1">{suffix}</span>}
      </div>
      <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mt-3">{label}</p>
    </div>
  );
};

const VisionSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="vision" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={revealRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            The Vision
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-md leading-relaxed">
            High quality services in hidden gems, not overcrowded with mass tourism.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <StatItem value={9.6} decimals={1} label="Baia Guest Score" />
          <StatItem value={9} suffix=" mo" label="High Season" />
          <StatItem value={2000} suffix=" sqm" label="First Property" />
          <StatItem value={20} label="Kickstarter Spots" />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
