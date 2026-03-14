import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this a security?",
    a: "Private offering to verified investors. Legal wrapper ensures Pebbles represent shares in AMUMA Long Beach, Inc. No public trading.",
  },
  {
    q: "Can I sell my Pebbles?",
    a: "Yes, within the private ecosystem. Transfer to other verified investors through your dashboard.",
  },
  {
    q: "What if I need to cash out early?",
    a: "You can transfer your Pebbles to another verified investor. The blockchain enables secure peer-to-peer transfers.",
  },
  {
    q: "How do I receive my revenue?",
    a: "Smart contracts automatically distribute profits monthly to your connected wallet. Dashboard shows all transactions.",
  },
  {
    q: "What's the minimum investment?",
    a: "Tier 1 Kickstarter Circle requires ₱500,000. Future tiers will have different minimums.",
  },
  {
    q: "Do I need to understand cryptocurrency?",
    a: "No. The dashboard handles everything. You see your Pebbles and earnings in simple PHP amounts.",
  },
  {
    q: "Can companies invest?",
    a: "Yes. AMUMA welcomes corporate investors, family offices, and entities.",
  },
  {
    q: "What happens to my Club Shares if I don't renew?",
    a: "They expire July 9 annually. You can renew each year to maintain access.",
  },
];

const FAQSection = () => {
  const headingRef = useScrollReveal();

  return (
    <section id="faq" className="py-20 bg-muted/40">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-2xl border border-border/30 px-5 overflow-hidden"
              >
                <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:text-primary py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-foreground/70 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
