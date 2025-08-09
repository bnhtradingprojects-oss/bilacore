"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const services = [
    {
      title: "Fuel Supply",
      description: "24/7 delivery of high-quality diesel fuel with our 1000L mobile bowser.",
      icon: "⛽",
      features: ["Mobile Delivery", "Quality Assured", "Flexible Quantities"]
    },
    {
      title: "Lubricants",
      description: "Premium industrial lubricants and oils for all your equipment needs.",
      icon: "🛢️",
      features: ["Engine Oils", "Hydraulic Oils", "Industrial Greases"]
    },
    {
      title: "Plant Hire",
      description: "Wide range of construction and industrial equipment available.",
      icon: "🚛",
      features: ["TLB", "Tipper Truck", "Water Bowser"]
    },
    {
      title: "Maintenance",
      description: "Professional maintenance services for industrial facilities.",
      icon: "🔧",
      features: ["Building Repairs", "Equipment Maintenance", "Preventive Care"]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-[var(--color-dark-grey)]/90 to-[var(--color-dark-grey)]/85" />
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-yellow-light)] mb-4">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Comprehensive industrial solutions tailored to your needs
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--color-yellow)]"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ delay: 0.2 * index }}
              >
                <div className="p-8">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-[var(--color-black)]">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[var(--color-black)] rounded-full group-hover:bg-[var(--color-yellow)] transition-colors duration-300" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--color-black)] to-[var(--color-dark-grey)]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-yellow-light)]"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ delay: 0.8 }}
          >
            Why Choose Bilacore?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Highly trained professionals with years of industry experience",
                icon: "👥"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock service and support for all your needs",
                icon: "🕒"
              },
              {
                title: "Quality Assured",
                description: "All products and services meet the highest industry standards",
                icon: "✨"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-black/30 backdrop-blur-sm p-8 rounded-xl text-white border border-white/10 hover:border-[var(--color-yellow-light)]/50 transition-all duration-300 group"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ delay: 1 + index * 0.2 }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[var(--color-yellow-light)]">{item.title}</h3>
                <p className="text-gray-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--color-black)] via-[var(--color-dark-grey)] to-[var(--color-black)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-yellow-light)] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Contact us today to discuss how we can support your business needs.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[var(--color-yellow-light)] text-[var(--color-black)] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
