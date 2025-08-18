"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
   <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[url('/public/BILACORE-LOGO.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-[var(--color-yellow)]/30 backdrop-blur-sm" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow)_0,_transparent_50%)] opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-red)_0,_transparent_50%)] opacity-25" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative inline-block"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 ">
              Get in Touch
            </h1>
            <div className="h-1 w-32 bg-[var(--color-yellow)] mx-auto transform -rotate-1" />
          </motion.div>
          <motion.p 
            className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Let&apos;s discuss how we can power your business forward with our premium fuel solutions
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center items-center mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="glass-card px-8 py-4 rounded-full flex items-center space-x-3">
              <svg className="w-6 h-6 text-[var(--color-yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white/90">+27 65 966 4121</span>
            </div>
            <div className="glass-card px-8 py-4 rounded-full flex items-center space-x-3">
              <svg className="w-6 h-6 text-[var(--color-yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-white/90">info@bilacore.co.za</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
