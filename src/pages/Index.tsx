import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import BestSellers from "@/components/BestSellers";
import CoffretsSection from "@/components/CoffretsSection";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <BestSellers />
        <CoffretsSection />
        <AboutSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
