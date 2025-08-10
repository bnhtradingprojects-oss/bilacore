"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyOverviewSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="section-padding relative  overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow-light)_0,_transparent_50%)] opacity-20" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-yellow)_0,_transparent_50%)] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto p-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-high-contrast drop-shadow-text mb-6">
              About Bilacore Petroleums
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-high-contrast/90">
              As a youth-owned and black-owned enterprise, Bilacore Petroleums PTY LTD 
              represents the future of South Africa&apos;s energy sector. Based in Lulekani, 
              Phalaborwa, we&apos;ve established ourselves as a trusted name in fuel and 
              lubricants supply across the Limpopo province.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass-card border border-[var(--glass-border)] shadow-xl rounded-lg text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-[var(--color-yellow-light)] drop-shadow-glow">100%</div>
                <div className="text-base text-high-contrast mt-2">Black-Owned</div>
              </div>
              <div className="p-6 glass-card border border-[var(--glass-border)] shadow-xl rounded-lg text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-[var(--color-yellow-light)] drop-shadow-glow">24/7</div>
                <div className="text-base text-high-contrast mt-2">Support</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[400px] rounded-xl overflow-hidden glass-card p-2 border border-[var(--glass-border)] shadow-xl"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ delay: 0.4 }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/BILACORE-LOGO.jpg"
                alt="Bilacore Operations"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--color-yellow)]/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--color-yellow)]/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
