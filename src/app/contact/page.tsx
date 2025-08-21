"use client";
import HeroSection from "@/components/contact/HeroSection";
import ContactForm from "@/components/contact/ContactForm";
import WhatsApp from "@/components/contact/WhatsApp";

export default function Contact() {
  return (
    <main className="min-h-screen  pt-16">
      <HeroSection />
      <ContactForm />
   <WhatsApp/>
    </main>
  );
}
