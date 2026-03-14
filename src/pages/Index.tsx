import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ProofSection from "@/components/ProofSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <ProofSection />

      {/* Placeholder Join section anchor */}
      <section id="join" className="py-20 bg-background">
        <div className="container px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-4">
            Join the Pebble Circle
          </h2>
          <p className="font-body text-muted-foreground">Coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
