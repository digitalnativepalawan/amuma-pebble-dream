import { useScrollReveal } from "@/hooks/useScrollReveal";

const VisionSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="vision" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={revealRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            The Vision
          </h2>
        </div>

        <div className="max-w-lg space-y-6">
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            AMUMA is a collection of boutique retreats located in hidden destinations across Southeast Asia.
          </p>
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            Instead of mass tourism, AMUMA focuses on intimate, design-led retreats with limited rooms and curated experiences.
          </p>
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            Members participate in two ways:
          </p>
          <div className="space-y-3 font-body text-base text-foreground/70 leading-relaxed">
            <p>— Lifestyle access to the retreats</p>
            <p>— Ownership participation in the economic success of the properties</p>
          </div>
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            The goal is to build a network of unique destinations where members can stay, invest, and grow with the ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
