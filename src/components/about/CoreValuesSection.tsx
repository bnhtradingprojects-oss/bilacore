"use client";
import { motion } from "framer-motion";
import FeatureCard from "../ui/FeatureCard";

export default function CoreValuesSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      title: "Quality",
      description: "We never compromise on the quality of our products and services.",
      icon: (
        <svg className="w-12 h-12 text-[var(--color-yellow-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Integrity",
      description: "Honest and transparent dealings in all our business relationships.",
      icon: (
        <svg className="w-12 h-12 text-[var(--color-yellow-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 0v-4m0-16v4m8 8h4m-20 0h4m15.657-9.657l2.828-2.828M4.929 19.071l2.828-2.828m0-11.314L4.929 2.101M19.757 19.071l-2.828-2.828" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "Continuously improving our services to meet evolving industry needs.",
      icon: (
        <svg className="w-12 h-12 text-[var(--color-yellow-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow-light)_0,_transparent_50%)] opacity-20" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-yellow)_0,_transparent_50%)] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16  drop-shadow-text"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ delay: 0.2 }}
        >
          Our Core Values
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <FeatureCard
              key={value.title}
              title={value.title}
              description={value.description}
              icon={value.icon}
              index={index}
              variant="primary"
              className="w-full"
              titleClassName="text-2xl font-bold mb-4 text-[var(--color-yellow-light)] drop-shadow-text"
              descriptionClassName="/90 text-lg leading-relaxed"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
