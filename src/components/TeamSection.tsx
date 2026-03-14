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
    <section id="team" className="py-20 bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
            Team
          </h2>
        </div>

        {/* Founder */}
        <div
          ref={founderRef}
          className="scroll-reveal bg-card rounded-2xl p-8 shadow-sm border border-border/30 max-w-sm mx-auto text-center mb-10"
        >
          <Avatar className="h-20 w-20 mx-auto mb-4">
            <AvatarFallback className="bg-primary/10 text-primary font-display text-2xl">
              JS
            </AvatarFallback>
          </Avatar>
          <h3 className="font-display text-xl font-bold text-foreground">James San Vicente</h3>
          <p className="font-body text-sm text-muted-foreground mb-3">Founder · Built Baia</p>
          <p className="font-body text-sm italic text-foreground/70 mb-4">"Dream high, fly low."</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["9+ Booking scores", "4 keys built", "9 seasons mastered"].map((s) => (
              <span
                key={s}
                className="font-body text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Advisors - horizontal scroll */}
        <div className="overflow-x-auto -mx-6 px-6 pb-2">
          <div className="flex gap-4 min-w-max">
            {advisors.map((a) => (
              <div
                key={a.role}
                className="bg-card rounded-2xl p-5 shadow-sm border border-border/30 w-44 shrink-0 text-center"
              >
                <Avatar className="h-12 w-12 mx-auto mb-3">
                  <AvatarFallback className="bg-secondary/20 text-secondary font-body text-sm">
                    {a.role[0]}
                  </AvatarFallback>
                </Avatar>
                <p className="font-display text-sm font-bold text-foreground">{a.role}</p>
                <p className="font-body text-xs text-muted-foreground">{a.name}</p>
                <p className="font-body text-xs text-muted-foreground">{a.firm}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
