"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      name: "Mr Wandile Bila",
      role: "CEO & Founder",
      image: "/user/Founder.png",
      bio: "With over 5 years in the petroleum industry, John leads our vision for excellence."
    },
  ];

  return (
    <section id="team" className="relative py-24  overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_var(--color-yellow-light)_0,_transparent_50%)] opacity-20" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_var(--color-yellow)_0,_transparent_50%)] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h2 className="text-5xl font-bold mb-6 text-high-contrast drop-shadow-text">
              Meet Our Team
            </h2>
            <div className="h-1 w-20 bg-[var(--color-yellow)] mx-auto shadow-glow" />
          </motion.div>
          <p className="text-2xl text-high-contrast/90 max-w-3xl mx-auto mt-8 leading-relaxed">
            Our experienced professionals are dedicated to providing the best service in the industry
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="relative    rounded-2xl overflow-hidden glass-card p-0 mb-8 border border-[var(--glass-border)] shadow-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-fill rounded-xl transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3 text-high-contrast group-hover:text-[var(--color-yellow-light)] transition-colors duration-300 drop-shadow-text">
                  {member.name}
                </h3>
                <p className="text-lg font-medium text-[var(--color-yellow)] mb-4 drop-shadow">{member.role}</p>
                <p className="text-high-contrast/90 leading-relaxed">{member.bio}</p>
              </div>
              <motion.div 
                className="mt-6 flex justify-center space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <a href="#" className="text-high-contrast/70 hover:text-[var(--color-yellow-light)] transition-colors duration-300 hover:drop-shadow-glow">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-high-contrast/70 hover:text-[var(--color-yellow-light)] transition-colors duration-300 hover:drop-shadow-glow">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-yellow)]/10 rounded-full blur-3xl" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--color-yellow)]/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
