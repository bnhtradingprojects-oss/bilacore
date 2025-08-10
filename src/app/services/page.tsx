"use client";
import HeroSection from "@/components/services/HeroSection";
import ServicesList from "@/components/services/ServicesList";
import ProcessSection from "@/components/services/ProcessSection";

export default function Services() {
  return (
    <main className="min-h-screen  font-sans pt-16">
      <HeroSection />
      <ServicesList />
      <ProcessSection />
    </main>
  );
}
