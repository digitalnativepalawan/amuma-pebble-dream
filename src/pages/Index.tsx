import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ProofSection from "@/components/ProofSection";
import ModelSection from "@/components/ModelSection";
import BuildSection from "@/components/BuildSection";
import LongBeachSection from "@/components/LongBeachSection";
import MemberPortalSection from "@/components/MemberPortalSection";
import RoadmapSection from "@/components/RoadmapSection";
import TeamSection from "@/components/TeamSection";
import CalculatorSection from "@/components/CalculatorSection";
import JoinSection from "@/components/JoinSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

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
      <CalculatorSection />
      <MemberPortalSection />
      <JoinSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
