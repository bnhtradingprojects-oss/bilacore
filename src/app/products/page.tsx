
import HeroSection from "@/components/products/HeroSection";
import ProductGrid from "@/components/products/ProductGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fuel & Lubricant Products | Bilacore Enterprise",
  description:
    "Explore our range of premium fuels, industrial lubricants, hydraulic fluids, and greases designed to power your machinery and business operations.",
  keywords: [
    "diesel supply",
    "fuel products",
    "engine oil",
    "hydraulic fluid",
    "industrial grease",
    "lubricants supplier",
    "bulk fuel delivery",
    "industrial fuels South Africa",
  ],
  openGraph: {
    title: "Fuel & Lubricant Products | Bilacore Enterprise",
    description:
      "High-quality fuels and lubricants for industries and businesses. Premium diesel, engine oils, hydraulic fluids, and industrial greases.",
    url: "https://www.bilacorepetroleums.co.za/products",
    siteName: "Bilacore Petroleum",
    images: [
      {
        url: "https://www.bilacorepetroleums.co.za/BILACORE-LOGO.jpg", // replace with real OG image
        width: 1200,
        height: 630,
        alt: "Fuel and lubricant products",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuel & Lubricant Products | Bilacore Enterprise",
    description:
      "Premium quality fuels and lubricants — diesel, oils, hydraulic fluids, and greases.",
    images: ["https://www.bilacorepetroleums.co.za/BILACORE-LOGO.jpg"],
  },
};

export default function Products() {
  return (
    <main className="min-h-screen  font-sans pt-16">
      <HeroSection />
      <ProductGrid />
    </main>
  );
}
