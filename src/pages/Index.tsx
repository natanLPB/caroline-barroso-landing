import HeroSection from "@/components/HeroSection";
import TransformationSection from "@/components/TransformationSection";
import RealitySection from "@/components/RealitySection";
import SolutionSection from "@/components/SolutionSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ScrollAnimations from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <HeroSection />
      <TransformationSection />
      <RealitySection />
      <SolutionSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Index;
