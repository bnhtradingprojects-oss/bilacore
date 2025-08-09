
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const fadeInUp = {
    // initial: { opacity: 0, y: 20 },
    //           <motion.h2 
    //           className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-yellow-light)]"
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true }}
    //           transition={{ duration: 0.8 }}
    //         >
    //           Comprehensive Industrial Solutions
    //         </motion.h2>
    //         <motion.p
    //           className="text-xl text-gray-100 max-w-2xl mx-auto"
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true }}
    //           transition={{ delay: 0.2, duration: 0.8 }}
    //         >
    //           From fuel delivery to equipment maintenance, we provide end-to-end solutions for your industrial needs
    //         </motion.p> 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute inset-0">
          <Image
            src="/BILACORE-LOGO.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-[var(--color-dark-grey)]/90" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-40 h-40 mx-auto rounded-full border-4 border-[var(--color-yellow-light)] overflow-hidden shadow-2xl">
              <Image
                src="/BILACORE-LOGO.jpg"
                alt="Bilacore Logo"
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight tracking-tight">
              <span className="text-[var(--color-yellow-light)]">Fueling Industry,</span><br />Powering Growth
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-white font-light">
              Your trusted diesel & lubricants partner in Limpopo
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="#contact" 
              className="group relative inline-flex items-center bg-[var(--color-yellow-light)] text-[var(--color-black)] font-bold px-8 py-4 rounded-full shadow-lg overflow-hidden"
            >
              <span className="absolute inset-0 bg-white transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
              <span className="relative group-hover:text-[var(--color-black)] transition-colors">
                Request a Quote
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a 
              href="/products" 
              className="group mb-4 relative inline-flex items-center border-2 border-white text-white font-bold px-8 py-4 rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 bg-white transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
              <span className="relative group-hover:text-[var(--color-black)] transition-colors">
                Explore Products
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#features" className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gradient-to-b from-[var(--color-white)] to-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-black)] mb-4">
              Why Choose Bilacore?
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Experience excellence in fuel and industrial services with our commitment to quality and reliability
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "Industry-leading diesel and lubricants that exceed standards",
                icon: (
                  <svg className="w-12 h-12 text-[var(--color-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "24/7 Delivery",
                description: "Round-the-clock service to keep your operations running smoothly",
                icon: (
                  <svg className="w-12 h-12 text-[var(--color-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Expert Support",
                description: "Dedicated team of professionals ready to assist you 24/7",
                icon: (
                  <svg className="w-12 h-12 text-[var(--color-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--color-black)]">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                  <div className="mt-6 h-1 w-12 bg-[var(--color-red)] group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 bg-[var(--color-black)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <motion.div 
          className="max-w-6xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-yellow)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Comprehensive Industrial Solutions
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              From fuel delivery to equipment maintenance, we provide end-to-end solutions for your industrial needs
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Fuel Supply",
                description: "Premium quality diesel delivery",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )
              },
              { 
                title: "Lubricants",
                description: "High-grade industrial oils",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              { 
                title: "Plant Hire",
                description: "Construction equipment rental",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              { 
                title: "Maintenance",
                description: "Professional equipment care",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-[var(--color-dark-grey)]/50 backdrop-blur-sm rounded-xl p-6 hover:bg-[var(--color-dark-grey)] transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-[var(--color-yellow)] group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-yellow)] mb-2">{service.title}</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{service.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-[var(--color-yellow)] w-0 group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--color-yellow)] to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[var(--color-black)] mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-[var(--color-black)] mb-8">
            Join the growing number of businesses that trust Bilacore Petroleums for their fuel and maintenance needs.
          </p>
          <a href="#contact" className="inline-block bg-[var(--color-black)] text-[var(--color-yellow)] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-900 transition-all">
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[var(--color-black)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[var(--color-yellow)]">Get in Touch</h2>
            <p className="text-xl text-white mb-8">We`&apos;`re ready to serve your fuel and lubricant needs.</p>
            <div className="space-y-4 text-white">
              <p className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span>318 Zone B, Park Ave, Lulekani, 1392</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <span>065 966 4121</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <a href="mailto:admin@bilacorepetroleums.co.za" className="text-[var(--color-yellow)] hover:underline">
                  admin@bilacorepetroleums.co.za
                </a>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[var(--color-yellow)] text-[var(--color-black)] font-bold py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
