import { useScrollReveal } from "@/hooks/useScrollReveal";
import AdminMediaBlock from "@/components/AdminMediaBlock";

const bookingFeatures = [
  "Reserve stays using Pebbles",
  "Book experiences (island hopping, private cars, transfers, scooter rentals)",
  "Order food and drinks within resorts using Pebbles",
  "Book internal services (massages, spa treatments, private dinners)",
];

const financeFeatures = [
  "Monitor Pebble balance in real-time",
  "Track expected yearly profits",
  "Send or receive Pebbles as gifts to friends/family",
  "Direct messaging channel with resort staff",
  "Event invitations and club member updates",
  "New development progress tracking",
  "Internal voting system for key decisions",
];

const MemberPortalSection = () => {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const noteRef = useScrollReveal();

  return (
    <section id="portal" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16 max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-4">
            The Member Portal
          </h2>
          <p className="font-body text-base text-muted-foreground mb-6">
            Your Pebbles. Your access. Your ecosystem.
          </p>
          <p className="font-body text-base text-foreground/70 leading-relaxed">
            The AMUMA webapp is more than an investment dashboard. It's the central hub for the entire member experience — where Pebbles become currency, connection, and community.
          </p>
        </div>

        <div ref={gridRef} className="scroll-reveal grid md:grid-cols-2 gap-12 md:gap-0 max-w-3xl">
          {/* Left Column */}
          <div className="md:pr-12 md:border-r md:border-border">
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">
              Booking & Lifestyle
            </p>
            <div className="space-y-4">
              {bookingFeatures.map((feature) => (
                <p key={feature} className="font-body text-base text-foreground/70">
                  — {feature}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:pl-12">
            <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">
              Finance & Community
            </p>
            <div className="space-y-4">
              {financeFeatures.map((feature) => (
                <p key={feature} className="font-body text-base text-foreground/70">
                  — {feature}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div ref={noteRef} className="scroll-reveal mt-16">
          <p className="font-body text-sm text-muted-foreground">
            Keeping investors in the loop. Always.
          </p>
        </div>

        <AdminMediaBlock section="portal" slotKey="after_body" className="mt-8 max-w-3xl" aspectRatio="16/9" maxItems={4} />
      </div>
    </section>
  );
};

export default MemberPortalSection;
