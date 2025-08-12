"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductGrid() {
  const products = [
    {
      name: "Premium Diesel",
      category: "Fuels",
      description: "High-quality diesel fuel suitable for various industrial applications.",
      image: "/products/diesel.jpg",
      features: ["High cetane number", "Low sulfur content", "Excellent lubricity", "Clean-burning"]
    },
    {
      name: "Engine Oil",
      category: "Lubricants",
      description: "Advanced formula engine oil for optimal performance and protection.",
      image: "/products/engine-oil.jpg",
      features: ["Superior wear protection", "Thermal stability", "Extended drain intervals", "Multi-grade"]
    },
    {
      name: "Hydraulic Fluid",
      category: "Lubricants",
      description: "High-performance hydraulic fluid for industrial machinery.",
      image: "/products/hydraulic.jpg",
      features: ["Anti-wear properties", "Oxidation resistance", "Wide temperature range", "Anti-foam"]
    },
    {
      name: "Industrial Grease",
      category: "Lubricants",
      description: "Heavy-duty grease for industrial applications and equipment.",
      image: "/products/grease.jpg",
      features: ["Water resistant", "High temperature stability", "Extended service life", "Multi-purpose"]
    }
  ];

  return (
   <section className="py-24 px-4  text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow)_0,_transparent_50%)] opacity-20" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-yellow-dark)_0,_transparent_50%)] opacity-20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="glass-card rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-yellow-500/95 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-200 mb-4">{product.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-black">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-200">
                        <svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-yellow-500/95 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Request Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
