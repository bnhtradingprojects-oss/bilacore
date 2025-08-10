"use client";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen  font-sans pt-16">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <CTASection />
      <ContactForm />
    </main>
  );
}
