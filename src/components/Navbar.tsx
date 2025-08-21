"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "Gallary", path: "/gallary" }
  ];

  return (
    <motion.nav
      className="fixed w-full z-50 transition-colors duration-300 bg-black/85 backdrop-blur-md border-b border-[var(--glass-border)]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[var(--color-yellow)] shadow-lg">
            <Image
              src="/BILACORE-LOGO.jpg"
              alt="Bilacore Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <motion.span 
            className="hidden sm:inline text-xl md:text-2xl font-extrabold tracking-tight "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Bilacore Petroleums
          </motion.span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            className={`w-6 h-0.5 bg-yellow-500/95 block transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : "mb-1"
            }`}
          />
          <motion.span
            className={`w-6 h-0.5 bg-yellow-500/95 block transition-all duration-300 ${
              isOpen ? "opacity-0" : "mb-1"
            }`}
          />
          <motion.span
            className={`w-6 h-0.5 bg-yellow-500/95 block transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="relative  hover:text-[var(--color-yellow-light)] transition-colors group text-lg"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-yellow)] transition-all group-hover:w-full shadow-glow" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="button-contrast px-6 py-2.5 rounded-xl font-bold shadow-lg hover:scale-[0.98] transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 right-0 bottom-0 bg-black/90 lg:hidden z-40 flex flex-col items-center justify-center min-h-screen w-full"
              style={{ position: 'fixed' }}
            >
           
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className="text-yellow-500 text-3xl font-bold mb-12 block hover:text-yellow-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
         
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
