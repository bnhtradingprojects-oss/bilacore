"use client";
import { motion } from "framer-motion";
import FeatureCard from "../ui/FeatureCard";
import { useState, FormEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Implement your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Let&apos;s Connect</h2>
            <div className="h-1 w-20 bg-[var(--color-yellow)] mx-auto mb-8" />
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Ready to elevate your fuel solutions? We&apos;re here to help you every step of the way.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className=" p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-gray-100">Contact Information</h3>
                <div className="space-y-4">
                  <FeatureCard
                    title="Visit Us"
                    description="318 Zone B, Park Ave, Lulekani, 1392"
                    icon={
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    }
                    index={0}
                    variant="secondary"
                    className="w-full hover:translate-x-2 transition-transform duration-300"
                    titleClassName="text-gray-100 font-medium mb-1"
                    descriptionClassName="text-gray-200"
                  />
                  <FeatureCard
                    title="Call Us"
                    description="065 966 4121"
                    icon={
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    }
                    index={1}
                    variant="secondary"
                    className="w-full hover:translate-x-2 transition-transform duration-300"
                    titleClassName="text-gray-100 font-medium mb-1"
                    descriptionClassName="text-gray-200"
                  />
                  <FeatureCard
                    title="Email Us"
                    description={
                      <a href="mailto:admin@bilacorepetroleums.co.za" className="text-[var(--color-yellow)] hover:text-[var(--color-yellow-dark)] transition-colors">
                        admin@bilacorepetroleums.co.za
                      </a>
                    }
                    icon={
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                    index={2}
                    variant="secondary"
                    className="w-full hover:translate-x-2 transition-transform duration-300"
                    titleClassName="text-gray-100 font-medium mb-1"
                    descriptionClassName="text-gray-200"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--color-yellow)]/5 rounded-full blur-2xl" />
            </motion.div>

              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div>
                    <label className="block text-base font-medium text-gray-100 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 text-black border border-yellow-200 rounded-xl focus:ring-2 focus:ring-[var(--color-yellow)] focus:border-transparent transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-100 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-yellow)] focus:border-transparent transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-100 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-yellow)] focus:border-transparent transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-100 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-yellow)] focus:border-transparent transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  {submitStatus === "success" && (
                    <div className="text-green-500 text-sm">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="text-red-500 text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-[var(--color-yellow)] to-[var(--color-yellow-dark)] text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform 
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 hover:scale-[0.99] active:scale-[0.97]'}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--color-yellow)]/5 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--color-yellow)]/5 rounded-full blur-2xl" />
              </form>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow)_0,_transparent_50%)] opacity-10" />
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-red)_0,_transparent_50%)] opacity-10" />
    </section>
  );
}
