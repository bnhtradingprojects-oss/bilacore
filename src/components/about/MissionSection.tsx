"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FeatureCard from "../ui/FeatureCard";

export default function MissionSection() {
  return (
    <section id="mission" className="relative py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow-light)_0,_transparent_50%)] opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-yellow)_0,_transparent_50%)] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 ">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast drop-shadow-lg">
                Our Mission
              </h2>
              <div className="h-1 w-20 bg-[var(--color-yellow)] shadow-glow" />
            </motion.div>
            <p className="text-xl text-high-contrast leading-relaxed">
              To provide exceptional fuel and industrial solutions that empower businesses to thrive, while maintaining the highest standards of quality, reliability, and customer service.
            </p>
            <ul className="space-y-6">
              {[
                {
                  title: "Premium Quality",
                  description: "Delivering the highest grade fuel products that meet international standards",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Efficient Service",
                  description: "Ensuring timely delivery and responsive customer support",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Environmental Care",
                  description: "Maintaining responsible practices that protect our environment",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  )
                },
                {
                  title: "Strong Relationships",
                  description: "Building lasting partnerships with our clients and stakeholders",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <FeatureCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  index={index}
                  variant="primary"
                  className="w-full"
                  titleClassName="text-high-contrast mb-2 text-xl"
                  descriptionClassName="text-high-contrast/90"
                />
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-63 rounded-2xl overflow-hidden glass-card p-2 border border-[var(--glass-border)] shadow-2xl">
              <Image
                src="/BILACORE-LOGO.jpg"
                alt="Our Mission"
                fill
                className="object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--color-yellow)]/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--color-yellow)]/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
