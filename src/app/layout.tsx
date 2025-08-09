"use client";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const geist = Geist({
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Bilacore Petroleums | Fuel & Industrial Services",
//   description: "Premium fuel and lubricants supplier in Limpopo. We provide quality diesel, oils, and industrial services.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}
      >
        <motion.nav
          className={`fixed w-full z-50 transition-colors duration-300 ${
            scrolled 
              ? "bg-[var(--color-black)]/95 backdrop-blur-md" 
              : "bg-transparent"
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[var(--color-yellow)]">
                <Image
                  src="/BILACORE-LOGO.jpg"
                  alt="Bilacore Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <motion.span 
                className={`hidden sm:inline text-xl md:text-2xl font-extrabold tracking-tight ${scrolled ? 'text-[var(--color-yellow)]' : 'text-white'}`}
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
                className={`w-6 h-0.5 ${scrolled ? 'bg-[var(--color-yellow)]' : 'bg-white'} block transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : "mb-1"
                }`}
              />
              <motion.span
                className={`w-6 h-0.5 bg-[var(--color-yellow)] block transition-all duration-300 ${
                  isOpen ? "opacity-0" : "mb-1"
                }`}
              />
              <motion.span
                className={`w-6 h-0.5 bg-[var(--color-yellow)] block transition-all duration-300 ${
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
                  className={`relative ${scrolled ? 'text-[var(--color-yellow)]' : 'text-white'} hover:text-yellow-400 transition-colors group`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${scrolled ? 'bg-[var(--color-yellow)]' : 'bg-white'} transition-all group-hover:w-full`} />
                </Link>
              ))}
              <Link
                href="/contact"
                className={`${scrolled ? 'bg-[var(--color-yellow)] text-[var(--color-black)]' : 'bg-white text-[var(--color-black)]'} px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-[var(--color-black)] transition-colors`}
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
                  className="fixed inset-0 bg-[var(--color-black)]/95 backdrop-blur-lg lg:hidden z-40"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.path}
                          className="text-white text-2xl font-bold mb-8 block hover:text-[var(--color-yellow)] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
