import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/medinova/NavBar";
import { HeroSection } from "@/components/medinova/HeroSection";
import { AboutSection } from "@/components/medinova/AboutSection";
import { ServicesSection } from "@/components/medinova/ServicesSection";
import { WhyChooseUs } from "@/components/medinova/WhyChooseUs";
import { StatsCounter } from "@/components/medinova/StatsCounter";
import { FeaturedDoctors } from "@/components/medinova/FeaturedDoctors";
import { HealthTips } from "@/components/medinova/HealthTips";
import { CommonDiseases } from "@/components/medinova/CommonDiseases";
import { HealthPackages } from "@/components/medinova/HealthPackages";
import { HealthAwareness } from "@/components/medinova/HealthAwareness";
import { Testimonials } from "@/components/medinova/Testimonials";
import { ContactSection } from "@/components/medinova/ContactSection";
import { Footer } from "@/components/medinova/Footer";

const title = "MediNova Medical Center — Everyday Care for Families";
const description =
  "MediNova Medical Center in Colombo: consultations, laboratory testing, health screening, health packages, health tips and guides to common diseases.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <StatsCounter />
        <FeaturedDoctors />
        <HealthTips />
        <CommonDiseases />
        <HealthPackages />
        <HealthAwareness />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
