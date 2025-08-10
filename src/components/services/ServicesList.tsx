"use client";
import { motion } from "framer-motion";

export default function ServicesList() {
  const services = [
    {
      title: "Fuel Supply & Distribution",
      description: "Premium quality diesel fuel delivery services for businesses and industries. We ensure timely delivery and competitive pricing.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      features: [
        "24/7 delivery service",
        "Bulk fuel supply",
        "Emergency fuel delivery",
        "Fleet fueling solutions"
      ]
    },
    {
      title: "Industrial Lubricants",
      description: "High-grade industrial lubricants and oils for all types of machinery and equipment.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: [
        "Engine oils",
        "Hydraulic fluids",
        "Gear oils",
        "Grease products"
      ]
    },
    {
      title: "Equipment Maintenance",
      description: "Professional maintenance services for industrial equipment and machinery.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      ),
      features: [
        "Preventive maintenance",
        "Emergency repairs",
        "Equipment inspection",
        "Performance optimization"
      ]
    }
  ];

  return (
    <section id="explore" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Solutions
          </h2>
          <div className="h-1 w-20 bg-[var(--color-yellow)] mx-auto mb-8" />
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover our comprehensive range of services designed to power your business forward
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="glass-card group hover:scale-105 transition-all duration-500"
            >
              <div className="relative p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-yellow)]/5 rounded-full blur-2xl transform translate-x-8 -translate-y-8" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-yellow)] to-[var(--color-red)] p-0.5">
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <div className="text-[var(--color-yellow)]">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-100 group-hover:text-[var(--color-yellow)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-8 text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-gray-100 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + (index * 0.2) + (i * 0.1) }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-[var(--color-yellow)]/10 flex items-center justify-center mr-4 group-hover/item:bg-[var(--color-yellow)] transition-colors duration-300">
                          <svg className="w-4 h-4 text-[var(--color-yellow)] group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-200 group-hover/item:text-gray-100 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <a href="#contact" className="btn-primary">
            Request a Service
          </a>
        </motion.div>
      </div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-yellow)]/10 rounded-full blur-3xl" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--color-yellow)]/10 rounded-full blur-3xl" />
    </section>
  );
}
