import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FoundationSection from "@/components/FoundationSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProfessionalServicesSection from "@/components/ProfessionalServicesSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TeamSection from "@/components/TeamSection";
import TransformSection from "@/components/TransformSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#010413] text-white">
      <Header />

      <main className="pt-[90px]">
        <HeroSection />
        <FoundationSection />
        <StatsSection />
        <ServicesSection />
        <ProfessionalServicesSection />
        <SuccessStoriesSection />
        <TeamSection />
        <TransformSection />
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
}
