"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Products() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const products = [
    {
      category: "Engine Oils",
      items: [
        { name: "Heavy-Duty Diesel Engine Oil", specs: "15W-40, API CI-4/SL" },
        { name: "Light Vehicle Engine Oil", specs: "5W-30, API SN/CF" },
        { name: "Premium Synthetic Oil", specs: "0W-20, API SP" }
      ]
    },
    {
      category: "Hydraulic Oils",
      items: [
        { name: "Industrial Hydraulic Oil", specs: "ISO VG 46" },
        { name: "Heavy-Duty Hydraulic Oil", specs: "ISO VG 68" },
        { name: "Premium Hydraulic Fluid", specs: "ISO VG 32" }
      ]
    },
    {
      category: "Transmission Oils",
      items: [
        { name: "Manual Transmission Fluid", specs: "75W-90, API GL-5" },
        { name: "Automatic Transmission Fluid", specs: "Dexron VI" },
        { name: "Heavy-Duty Transmission Oil", specs: "85W-140, API GL-5" }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[var(--color-dark-grey)] to-[var(--color-yellow)] opacity-90" />
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-yellow)] mb-4">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Premium quality lubricants for all your industrial needs
          </p>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ delay: 0.2 * index }}
              >
                <div className="bg-[var(--color-yellow)] p-4">
                  <h2 className="text-2xl font-bold text-[var(--color-black)]">
                    {category.category}
                  </h2>
                </div>
                <div className="p-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="mb-6 last:mb-0">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.specs}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[var(--color-black)]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-yellow)]"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ delay: 0.8 }}
          >
            Product Features
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Premium Quality", icon: "🏆" },
              { title: "Industry Certified", icon: "📜" },
              { title: "Bulk Available", icon: "📦" },
              { title: "Technical Support", icon: "🛠️" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-[var(--color-dark-grey)] p-6 rounded-xl text-center"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ delay: 1 + index * 0.2 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[var(--color-yellow)]">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--color-yellow)] to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-black)] mb-6">
            Download Our Price List
          </h2>
          <p className="text-xl text-[var(--color-black)] mb-8">
            Get detailed information about our products and pricing
          </p>
          <a 
            href="#"
            className="inline-flex items-center gap-2 bg-[var(--color-black)] text-[var(--color-yellow)] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-900 transition-all"
          >
            <span>Download PDF</span>
            <span>📥</span>
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-black)] mb-6">
            Need Expert Advice?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is ready to help you choose the right products for your needs
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[var(--color-yellow)] text-[var(--color-black)] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all"
          >
            Contact Our Experts
          </a>
        </div>
      </section>
    </main>
  );
}
