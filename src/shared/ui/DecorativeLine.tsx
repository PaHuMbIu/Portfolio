"use client";

import { motion } from "framer-motion";
import { fadeUpWithDelay } from "@/shared/animations";

export const DecorativeLine = ({ delay = 0.3 }: { delay?: number }) => {
  return (
    <motion.div
      className="relative w-full h-px overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpWithDelay(delay)}
    >
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-400/50 to-transparent" />

      <motion.div
        className="absolute inset-0 bg-linear-to-r from-purple-400/50 via-purple-600/50 to-transparent"
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
};
