"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-[var(--color-dark-grey)]/90" />
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-yellow-light)] mb-4">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Building a legacy of excellence in fuel and industrial services
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-black)]">
                About Bilacore Petroleums
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                As a youth-owned and black-owned enterprise, Bilacore Petroleums PTY LTD 
                represents the future of South Africa's energy sector. Based in Lulekani, 
                Phalaborwa, we've established ourselves as a trusted name in fuel and 
                lubricants supply across the Limpopo province.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-[var(--color-black)] to-[var(--color-dark-grey)] rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-[var(--color-yellow-light)]">100%</div>
                  <div className="text-sm text-white mt-2">Black-Owned</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-[var(--color-black)] to-[var(--color-dark-grey)] rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-[var(--color-yellow-light)]">24/7</div>
                  <div className="text-sm text-white mt-2">Support</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ delay: 0.4 }}
            >
              <Image
                src="/BILACORE-LOGO.jpg"
                alt="Bilacore Operations"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--color-black)] to-[var(--color-dark-grey)]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[var(--color-yellow-light)]/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-yellow-light)]">Our Vision</h3>
              <p className="text-gray-100">
                To become the leading fuel and industrial services provider in Limpopo,
                known for reliability, quality, and exceptional customer service.
              </p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[var(--color-yellow-light)]/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-yellow-light)]">Our Mission</h3>
              <p className="text-gray-100">
                To deliver premium quality fuels and industrial solutions while promoting
                sustainable development and empowering local communities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-red)]"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ delay: 0.8 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We never compromise on the quality of our products and services."
              },
              {
                title: "Integrity",
                description: "Honest and transparent dealings in all our business relationships."
              },
              {
                title: "Innovation",
                description: "Continuously improving our services to meet evolving industry needs."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 bg-gray-50 rounded-xl shadow-lg"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ delay: 1 + index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 text-[var(--color-red)]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
