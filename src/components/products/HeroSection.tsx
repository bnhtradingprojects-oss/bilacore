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
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-500">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Premium quality fuels and lubricants for all your industrial needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
