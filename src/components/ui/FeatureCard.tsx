"use client";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  index?: number;
  className?: string;
  variant?: 'primary' | 'secondary';
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  index = 0, 
  className = "",
  variant = 'primary',
  titleClassName,
  descriptionClassName
}: FeatureCardProps) {
  const gradients = {
    primary: {
      line: 'from-[var(--color-yellow)] to-[var(--color-yellow-dark)]',
      hover: 'from-[var(--color-yellow)] to-[var(--color-yellow-dark)]'
    },
    secondary: {
      line: 'from-[var(--color-yellow)] to-[var(--color-red)]',
      hover: 'from-[var(--color-yellow)] to-[var(--color-red)]'
    }
  };
  if(variant == 'secondary') {
     return ( 
     <div className="rounded-md p-2  flex items-center justify-start gap-4">
            <div className={`w-16 h-16  rounded-2xl bg-gradient-to-br ${gradients[variant].line} p-0.5 shadow-glow`}>
            <div className="w-full h-full rounded-2xl bg-[var(--glass-dark-bg)] flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <div className="text-[var(--color-yellow-light)] group-hover:scale-110 transition-transform duration-300 drop-shadow-glow">
                {icon}
              </div>
            </div>
          </div>
       
              <span className="text-white/90 wrap-break-word">    <h3 className={`text-2xl font-bold p-0  m-0 transition-colors duration-300 ${
            titleClassName || ' group-hover:text-[var(--color-yellow-light)]'
          }`}>
            {title}
          </h3>
          <p>{description }</p>
          </span>
            </div>)
  }
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className={`group ${className}`}
    >
      <div className="p-8 rounded-2xl bg-black/20 backdrop-blur-md relative overflow-hidden hover:scale-105 transition-all duration-500 border border-[var(--glass-border)] shadow-xl">
        <div className="relative z-10">
          <div className={`w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br ${gradients[variant].line} p-0.5 shadow-glow`}>
            <div className="w-full h-full rounded-2xl bg-[var(--glass-dark-bg)] flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <div className="text-[var(--color-yellow-light)] group-hover:scale-110 transition-transform duration-300 drop-shadow-glow">
                {icon}
              </div>
            </div>
          </div>
          <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            titleClassName || ' group-hover:text-[var(--color-yellow-light)]'
          }`}>
            {title}
          </h3>
          <p className={`text-lg leading-relaxed ${
            descriptionClassName || '/90'
          }`}>
            {description}
          </p>
        </div>
        <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${gradients[variant].line} group-hover:w-full transition-all duration-500 shadow-glow`} />
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-yellow)]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16" />
      </div>
    </motion.div>
  );
}
