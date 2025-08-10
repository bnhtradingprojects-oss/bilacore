"use client";
import { motion } from "framer-motion";
import FeatureCard from "../ui/FeatureCard";

export default function FeaturesSection() {
  const features = [
    {
      title: "Premium Quality",
      description: "Industry-leading diesel and lubricants that exceed standards",
      icon: (
        <svg className="w-12 h-12 text-[var(--color-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "24/7 Delivery",
      description: "Round-the-clock service to keep your operations running smoothly",
      icon: (
        <svg className="w-12 h-12 text-[var(--color-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Expert Support",
      description: "Dedicated team of professionals ready to assist you 24/7",
      icon: (
        <svg className="w-12 h-12 text-[var(--color-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-24 px-4  relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow)_0,_transparent_50%)] opacity-20" />
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-red)_0,_transparent_50%)] opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">
              Why Choose Bilacore?
            </h2>
            <div className="h-1 w-20 bg-[var(--color-yellow)] mx-auto mb-8 shadow-glow" />
          </motion.div>
          <p className="text-xl md:text-2xl text-high-contrast max-w-3xl mx-auto leading-relaxed">
            Experience excellence in fuel and industrial services with our unwavering commitment to quality and reliability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a 
            href="/services"
            className="inline-flex items-center bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl shadow-lg transform hover:scale-[0.98] transition-all duration-300"
          >
            <span className="mr-2">Discover Our Services</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
