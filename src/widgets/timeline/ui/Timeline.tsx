"use client";

import { motion } from "framer-motion";
import { TimelineItem } from "./TimelineItem";
import { TIMELINE_DATA } from "../model/timelineData";

export const Timeline = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Мой путь
      </motion.h2>

      <div className="relative">
        {TIMELINE_DATA.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
