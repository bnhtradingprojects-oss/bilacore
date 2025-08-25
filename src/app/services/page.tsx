
import HeroSection from "@/components/services/HeroSection";
import ServicesList from "@/components/services/ServicesList";
import ProcessSection from "@/components/services/ProcessSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fuel Supply, Lubricants & Equipment Services | Bilacore Enterprise",
  description:
    "Comprehensive fuel supply, lubricant distribution, and equipment maintenance services to keep your business running smoothly.",
  keywords: [
    "fuel supply service",
    "diesel delivery South Africa",
    "industrial lubricants service",
    "equipment maintenance",
    "fleet fueling",
    "bulk diesel delivery",
    "industrial services Limpopo",
  ],
  openGraph: {
    title: "Fuel Supply, Lubricants & Equipment Services | Bilacore Enterprise",
    description:
      "We provide reliable fuel delivery, lubricant distribution, and industrial equipment maintenance services to businesses across South Africa.",
    url: "https://www.bilacorepetroleums.co.za/services",
    siteName: "Bilacore Enterprise",
    images: [
      {
        url: "https://www.bilacorepetroleums.co.za/BILACORE-LOGO.jpg", // replace with real OG image
        width: 1200,
        height: 630,
        alt: "Fuel and equipment services",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuel Supply, Lubricants & Equipment Services | Bilacore Enterprise",
    description:
      "Trusted partner for bulk fuel, lubricants, and equipment maintenance solutions.",
    images: ["https://www.bilacorepetroleums.co.za/BILACORE-LOGO.jpg"],
  },
};

export default function Services() {
  return (
    <main className="min-h-screen  font-sans pt-16">
      <HeroSection />
      <ServicesList />
      <ProcessSection />
    </main>
  );
}
