import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const advisors = [
  { role: "Legal", name: "TBA", firm: "Law Firm" },
  { role: "Blockchain", name: "TBA", firm: "Tech Partner" },
  { role: "Operations", name: "Baia Team", firm: "Management" },
];

const TeamSection = () => {
  const headingRef = useScrollReveal();
  const founderRef = useScrollReveal();

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-3">
            Team
          </h2>
        </div>

        {/* Founder */}
        <div
          ref={founderRef}
          className="scroll-reveal card-premium max-w-sm mx-auto text-center mb-12 p-8"
        >
          <Avatar className="h-24 w-24 mx-auto mb-5">
            <AvatarFallback className="bg-primary/10 text-primary font-display text-3xl">
              JS
            </AvatarFallback>
          </Avatar>
          <h3 className="font-display text-2xl font-bold text-foreground mb-1">James San Vicente</h3>
          <p className="font-body text-base text-muted-foreground mb-4">Founder · Built Baia</p>
          <p className="font-body text-base italic text-foreground/70 mb-6">"Dream high, fly low."</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["9+ Booking scores", "4 keys built", "9 seasons mastered"].map((s) => (
              <span
                key={s}
                className="font-body text-xs bg-muted px-4 py-1.5 rounded-full text-muted-foreground font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="overflow-x-auto -mx-6 px-6 pb-4">
          <div className="flex gap-5 min-w-max justify-center">
            {advisors.map((a) => (
              <div
                key={a.role}
                className="card-premium w-48 shrink-0 text-center"
              >
                <Avatar className="h-14 w-14 mx-auto mb-3">
                  <AvatarFallback className="bg-secondary/15 text-secondary font-body text-base font-semibold">
                    {a.role[0]}
                  </AvatarFallback>
                </Avatar>
                <p className="font-display text-base font-bold text-foreground">{a.role}</p>
                <p className="font-body text-sm text-muted-foreground">{a.name}</p>
                <p className="font-body text-sm text-muted-foreground">{a.firm}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
