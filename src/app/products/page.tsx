"use client";
import HeroSection from "@/components/products/HeroSection";
import ProductGrid from "@/components/products/ProductGrid";

export default function Products() {
  return (
    <main className="min-h-screen  font-sans pt-16">
      <HeroSection />
      <ProductGrid />
    </main>
  );
}
