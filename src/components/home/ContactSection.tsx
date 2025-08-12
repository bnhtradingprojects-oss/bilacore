"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden ">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[var(--color-dark-grey)] to-black"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-yellow)]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-yellow-dark)]/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-[var(--color-yellow-light)] drop-shadow-glow">Get in Touch</h2>
            <p className="text-xl text-high-contrast mb-12">We&apos;re here to power your success with premium fuel solutions.</p>
            <div className="space-y-6 text-high-contrast">
              <motion.div 
                className="flex items-center gap-4 glass-card p-4 rounded-xl border border-[var(--glass-border)] shadow-xl"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[var(--color-yellow)]/20 p-3 rounded-lg shadow-glow">
                  <svg className="w-6 h-6 text-[var(--color-yellow-light)] drop-shadow-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>318 Zone B, Park Ave, Lulekani, 1392</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 glass-card p-4 rounded-xl"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[var(--color-yellow)]/20 p-3 rounded-lg shadow-glow">
                  <svg className="w-6 h-6 text-[var(--color-yellow-light)] drop-shadow-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>065 966 4121</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 glass-card p-4 rounded-xl border border-[var(--glass-border)] shadow-xl"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[var(--color-yellow)]/20 p-3 rounded-lg shadow-glow">
                  <svg className="w-6 h-6 text-[var(--color-yellow-light)] drop-shadow-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:admin@bilacorepetroleums.co.za" className="link-contrast hover:text-[var(--color-yellow-light)] transition-colors">
                  admin@bilacorepetroleums.co.za
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="glass-card p-8 rounded-2xl backdrop-blur-sm border border-[var(--glass-border)] shadow-xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-high-contrast mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-high-contrast placeholder-white/60 focus:ring-2 focus:ring-[var(--color-yellow)] focus:border-transparent transition-all shadow-inner" 
                  required 
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-high-contrast mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-high-contrast placeholder-white/60 focus:ring-2 focus:ring-[var(--color-yellow)] focus:border-transparent transition-all shadow-inner" 
                  required 
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                  required 
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                  required
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full glass-button text-white font-bold py-4 rounded-xl transform hover:scale-[0.98] transition-all duration-300"
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
      
}
