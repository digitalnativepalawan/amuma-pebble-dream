import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ProofSection from "@/components/ProofSection";
import ModelSection from "@/components/ModelSection";
import BuildSection from "@/components/BuildSection";
import LongBeachSection from "@/components/LongBeachSection";
import RoadmapSection from "@/components/RoadmapSection";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <ProofSection />
      <ModelSection />
      <BuildSection />
      <LongBeachSection />
      <RoadmapSection />
      <TeamSection />

      {/* Join section */}
      <section id="join" className="py-20 bg-muted/40">
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
