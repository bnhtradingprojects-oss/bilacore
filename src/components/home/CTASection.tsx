"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[var(--glass-dark-bg)]">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-yellow)]/30 via-[var(--color-yellow-dark)]/40 to-black/90" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[var(--color-yellow)]/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-yellow-dark)]/30 rounded-full filter blur-3xl animate-pulse" />
      </div>

      <motion.div 
        className="relative max-w-4xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-5xl font-bold text-high-contrast mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p 
          className="text-xl text-high-contrast mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Join the growing network of businesses that trust Bilacore Petroleums for premium fuel solutions and exceptional service.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a 
            href="#contact" 
            className="button-contrast inline-flex items-center font-bold px-10 py-5 rounded-xl transform hover:scale-[0.98] transition-all duration-300 shadow-glow"
          >
            <span className="mr-3 text-text-on-yellow text-lg">Start Your Journey</span>
            <svg className="w-6 h-6 text-text-on-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
