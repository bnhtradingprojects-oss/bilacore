"use client";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your specific needs and requirements to understand how we can best serve you."
    },
    {
      number: "02",
      title: "Custom Solution",
      description: "Our team develops a tailored solution that matches your business requirements and budget."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the plan with precision, ensuring minimal disruption to your operations."
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "Regular follow-ups and continuous support to ensure your satisfaction and success."
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient">
            Our Process
          </h2>
          <div className="h-1 w-20 bg-[var(--color-yellow)] mx-auto mb-8" />
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to ensure exceptional service delivery at every step
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group"
            >
              <div className="glass-card p-8 rounded-2xl group-hover:scale-105 transition-all duration-500">
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-yellow)] to-[var(--color-red)] flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[var(--color-yellow)]/10 rounded-2xl blur-xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-[var(--color-yellow)] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-16 h-16 text-[var(--color-yellow)]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl text-gray-200 mb-8">Ready to get started?</p>
          <a href="#contact" className="btn-primary">
            Start Your Journey
          </a>
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow)_0,_transparent_50%)] opacity-10" />
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-red)_0,_transparent_50%)] opacity-10" />
    </section>
  );
}
