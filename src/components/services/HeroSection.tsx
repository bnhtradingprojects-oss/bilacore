"use client";
import { motion } from "framer-motion";

export default function ServicesHero() {
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
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient-light">
              Our Services
            </h1>
            <div className="h-1 w-32 bg-[var(--color-yellow)] mx-auto transform -rotate-1" />
          </motion.div>
          <motion.p 
            className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Comprehensive fuel and industrial solutions tailored to elevate your business
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-6 pt-8"
          >
            <a href="#explore" className="btn-primary">
              Explore Services
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
