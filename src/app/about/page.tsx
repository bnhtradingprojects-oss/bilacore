"use client";
import AboutHeroSection from "@/components/about/HeroSection";
import CompanyOverviewSection from "@/components/about/CompanyOverviewSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import MissionSection from "@/components/about/MissionSection";
import TeamSection from "@/components/about/TeamSection";
import VisionMissionSection from "@/components/about/VisionMissionSection";

export default function About() {
  return (
    <main className="min-h-screen pt-16 ">
      <AboutHeroSection />
      <CompanyOverviewSection />
      <MissionSection />
      <VisionMissionSection />
      <TeamSection />
      <CoreValuesSection />
    </main>
  )
}