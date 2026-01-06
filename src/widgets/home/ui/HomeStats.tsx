"use client";

import { motion } from "framer-motion";
import { STATS_DATA } from "../model/statsData";
import { StatsCard } from "./StatsCard";

export const HomeStats = () => {
  return (
    <motion.section
      className="w-full my-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {STATS_DATA.map((statCard, index) => (
          <StatsCard key={statCard.keyId} Icon={statCard.icon} index={index} {...statCard} />
        ))}
      </div>
    </motion.section>
  );
};
