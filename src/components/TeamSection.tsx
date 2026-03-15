import { useScrollReveal } from "@/hooks/useScrollReveal";
import AdminMediaBlock from "@/components/AdminMediaBlock";

const TeamSection = () => {
  const headingRef = useScrollReveal();
  const founderRef = useScrollReveal();

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em]">
            Team
          </h2>
        </div>

        <div ref={founderRef} className="scroll-reveal max-w-md">
          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-6">
            <span className="font-display text-xl text-primary">JS</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-1">James San Vicente</h3>
          <p className="font-body text-sm text-muted-foreground mb-6">Founder · Built Baia</p>
          <p className="font-body text-base text-foreground/70 italic leading-relaxed mb-8">
            "Dream high, fly low."
          </p>

          <div className="divider mb-6" />

          <div className="flex gap-8">
            <div>
              <p className="font-display text-2xl text-primary">9+</p>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">Booking scores</p>
            </div>
            <div>
              <p className="font-display text-2xl text-primary">4</p>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">Keys built</p>
            </div>
            <div>
              <p className="font-display text-2xl text-primary">9</p>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">Seasons</p>
            </div>
          </div>
        </div>

        <AdminMediaBlock section="team" slotKey="after_body" className="mt-8 max-w-md" aspectRatio="1/1" maxItems={4} />
      </div>
    </section>
  );
};

export default TeamSection;
