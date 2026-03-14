import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { alt: "Pool area", label: "Pool" },
  { alt: "Room exterior", label: "Exterior" },
  { alt: "Suite shower", label: "Suite" },
  { alt: "Restaurant", label: "Restaurant" },
];

const scores = [
  { label: "Location", score: "9.3" },
  { label: "Staff", score: "9.6" },
  { label: "Facilities", score: "9.5" },
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
  "3 Deluxe Rooms + 1 Suite",
  "Deluxe: ₱5,500/night | Suite: ₱12,000/night",
  "High Season: November–July (9 months)",
  "Low Season: August–October (3 months)",
];

const ProofSection = () => {
  const headingRef = useScrollReveal();
  const scoresRef = useScrollReveal();
  const reviewsRef = useScrollReveal();
  const metricsRef = useScrollReveal();

  return (
    <section id="proof" className="py-20 bg-muted/40">
      <div className="container px-6">
        <div ref={headingRef} className="scroll-reveal text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-2">
            The Proof: Baia
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-md mx-auto mb-10">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((img) => (
                <CarouselItem key={img.label}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-4xl mb-2">📷</div>
                      <p className="font-body text-sm">{img.label}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 bg-card border-border" />
            <CarouselNext className="-right-4 bg-card border-border" />
          </Carousel>
        </div>

        {/* Booking scores */}
        <div ref={scoresRef} className="scroll-reveal flex justify-center gap-4 mb-10">
          {scores.map((s) => (
            <div
              key={s.label}
              className="bg-card rounded-2xl px-5 py-3 text-center shadow-sm border border-border/30"
            >
              <p className="font-body text-xs text-muted-foreground">{s.label}</p>
              <p className="font-display text-2xl font-bold text-primary">{s.score}</p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div ref={reviewsRef} className="scroll-reveal space-y-4 max-w-lg mx-auto mb-10">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border/30"
            >
              <p className="font-body text-foreground/80 italic leading-relaxed mb-3">
                "{r.quote}"
              </p>
              <p className="font-body text-sm font-semibold text-primary">
                — {r.author}, {r.country}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div ref={metricsRef} className="scroll-reveal space-y-3 max-w-lg mx-auto">
          {metrics.map((m) => (
            <div
              key={m}
              className="bg-card rounded-2xl px-6 py-4 shadow-sm border border-border/30 text-center"
            >
              <p className="font-body text-sm font-medium text-foreground">{m}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
