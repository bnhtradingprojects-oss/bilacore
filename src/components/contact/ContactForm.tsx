
import { motion } from "framer-motion";
import FeatureCard from "../ui/FeatureCard";
import { useState, FormEvent } from "react";
import WhatsApp from "./WhatsApp";

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
 <section className="p-4 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow)_0,_transparent_50%)] opacity-20" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-yellow-dark)_0,_transparent_50%)] opacity-20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div> <div>
    
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
          <div className="grid md:grid-cols-2 gap-12 ">
           
            
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
                   
              variant="primary"
              titleClassName="text-[var(--color-yellow)] group-hover:text-white"
              descriptionClassName="text-gray-300 group-hover:text-white"
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
                   
              variant="primary"
              titleClassName="text-[var(--color-yellow)] group-hover:text-white"
              descriptionClassName="text-gray-300 group-hover:text-white"
                  />
                  <FeatureCard
                 
                    title="Email Us"
                    description={
                      <a href="mailto:admin@bilacorepetroleums.co.za" className="text-[var(--color-yellow)] wrap-anywhere hover:text-[var(--color-yellow-dark)] transition-colors">
                        admin@bilacorepetroleums.co.za
                      </a>
                    }
                    icon={
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                    index={2}
                  
              variant="primary"
              titleClassName="text-[var(--color-yellow)] group-hover:text-white"
              descriptionClassName="text-gray-300 group-hover:text-white"
                  />
           
 
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--color-yellow)]/5 rounded-full blur-2xl" />
            

          
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow)_0,_transparent_50%)] opacity-10" />
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-red)_0,_transparent_50%)] opacity-10" />
    </section>
  );
}
