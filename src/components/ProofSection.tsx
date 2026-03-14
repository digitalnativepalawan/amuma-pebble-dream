import { useScrollReveal } from "@/hooks/useScrollReveal";

const scores = [
  { label: "LOCATION", score: "9.3" },
  { label: "STAFF", score: "9.6" },
  { label: "FACILITIES", score: "9.5" },
];

const reviews = [
  {
    quote: "The little hideaway just has a couple of rooms, which makes it intimate and somehow family-like.",
    author: "Martin",
    country: "Germany",
  },
  {
    quote: "The owner and staff are very attentive. You can tell there is a lot of attention to detail.",
    author: "Patricia",
    country: "Spain",
  },
];

const metrics = [
  "3 DELUXE + 1 SUITE",
  "RATES ₱5,500 – ₱12,000",
  "HIGH SEASON NOV–JUL",
];

const ProofSection = () => {
  const headingRef = useScrollReveal();
  const scoresRef = useScrollReveal();
  const reviewsRef = useScrollReveal();
  const metricsRef = useScrollReveal();

  return (
    <section id="proof" className="section-padding bg-background">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary uppercase tracking-[0.1em] mb-2">
            The Proof
          </h2>
          <p className="font-body text-base text-muted-foreground">
            Baia · San Vicente, Palawan
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-3 mb-16">
          {["Pool", "Exterior", "Suite", "Restaurant"].map((label) => (
            <div key={label} className="aspect-[4/3] bg-muted flex items-center justify-center">
              <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* Scores */}
        <div ref={scoresRef} className="scroll-reveal flex items-center justify-start gap-0 mb-16">
          {scores.map((s, i) => (
            <div key={s.label} className="flex items-center">
              {i > 0 && <div className="w-px h-10 bg-border mx-6" />}
              <div>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">{s.label}</p>
                <p className="font-display text-3xl font-normal text-primary">{s.score}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div ref={reviewsRef} className="scroll-reveal space-y-10 mb-16 max-w-lg">
          {reviews.map((r) => (
            <div key={r.author}>
              <span className="font-display text-5xl text-secondary leading-none">"</span>
              <p className="font-body text-base text-foreground/80 leading-relaxed -mt-4 ml-6">
                {r.quote}
              </p>
              <p className="font-body text-sm text-muted-foreground mt-3 ml-6">
                — {r.author}, {r.country}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div ref={metricsRef} className="scroll-reveal space-y-4">
          {metrics.map((m) => (
            <p key={m} className="font-body text-sm uppercase tracking-[0.15em] text-muted-foreground">{m}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
