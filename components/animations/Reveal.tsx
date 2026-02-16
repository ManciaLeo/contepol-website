"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string; // <--- ESTA LINHA É A QUE ESTÁ FALTANDO NO SEU!
}

export const Reveal = ({ children, width = "100%", delay = 0.2, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ width }}
      className={className} // <--- E ESTA AQUI TAMBÉM!
    >
      {children}
    </motion.div>
  );
};