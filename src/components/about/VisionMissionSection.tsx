"use client";
import { motion } from "framer-motion";
import FeatureCard from "../ui/FeatureCard";

export default function VisionMissionSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="section-padding p-4 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_0%,_var(--color-yellow-light)_0,_transparent_50%)] opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_100%,_var(--color-yellow)_0,_transparent_50%)] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ delay: 0.2 }}
        >
          <FeatureCard
            title="Our Vision"
            description="To become the leading fuel and industrial services provider in Limpopo, known for reliability, quality, and exceptional customer service."
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            variant="primary"
            className="w-full"
            titleClassName="text-3xl font-bold text-[var(--color-yellow-light)] drop-shadow-text"
            descriptionClassName="text-high-contrast/90 text-lg leading-relaxed"
          />
          <FeatureCard
            title="Our Mission"
            description="To deliver premium quality fuels and industrial solutions while promoting sustainable development and empowering local communities."
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            variant="primary"
            className="w-full"
            titleClassName="text-3xl font-bold text-[var(--color-yellow-light)] drop-shadow-text"
            descriptionClassName="text-high-contrast/90 text-lg leading-relaxed"
          />
        </motion.div>
      </div>
    </section>
  );
}
