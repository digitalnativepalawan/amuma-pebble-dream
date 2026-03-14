import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const StatCard = ({
  emoji,
  value,
  suffix,
  label,
}: {
  emoji: string;
  value: number;
  suffix?: string;
  label: string;
}) => {
  const decimals = value % 1 !== 0 ? 1 : 0;
  const { value: animatedValue, ref } = useCountUp(value, 1500, decimals);

  return (
    <div
      ref={ref}
      className="card-premium relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
      <div className="text-2xl mb-3">{emoji}</div>
      <div className="font-display text-3xl sm:text-4xl font-bold text-primary">
        {animatedValue.toLocaleString()}
        {suffix && <span className="text-lg ml-1">{suffix}</span>}
      </div>
      <p className="font-body text-sm text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const VisionSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="vision" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={revealRef} className="scroll-reveal text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
            The Vision
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            High quality services in hidden gems locations, not overcrowded with mass tourism.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto">
          <StatCard emoji="⭐" value={9.6} label="Baia Guest Score" />
          <StatCard emoji="📅" value={9} suffix=" Months" label="High Season" />
          <StatCard emoji="🌴" value={2000} suffix=" sqm" label="First Property" />
          <StatCard emoji="🔥" value={20} suffix=" Spots" label="Kickstarter Circle" />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
