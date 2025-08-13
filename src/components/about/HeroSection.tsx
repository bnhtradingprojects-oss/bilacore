"use client";
import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[url('/public/BILACORE-LOGO.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-[var(--color-yellow)]/30 backdrop-blur-sm" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow)_0,_transparent_50%)] opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-red)_0,_transparent_50%)] opacity-25" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-bold  drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl  max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building a legacy of excellence in fuel and industrial solutions, serving South Africa with innovation and integrity
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-6 pt-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#mission" 
              className="button-contrast px-8 py-4 rounded-xl font-bold shadow-glow hover:scale-[0.98] transition-all duration-300"
            >
              Our Mission
            </a>
            <a 
              href="#values" 
              className="glass-button px-8 py-4 rounded-xl font-bold border border-[var(--glass-border)] shadow-xl hover:scale-[0.98] transition-all duration-300"
            >
              Our Values
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--glass-dark-bg)] to-transparent" />
    </section>
  );
}
