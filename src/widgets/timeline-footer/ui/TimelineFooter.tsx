"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { bounceUp } from "@/shared/animations";

export const TimelineFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.button
        onClick={handleScrollToTop}
        className={cn(
          "group relative overflow-hidden rounded-full p-4",
          "bg-linear-to-br from-purple-500/20 to-pink-500/20",
          "backdrop-blur-sm border border-white/10",
          "[&:hover,&:active]:border-purple-400/50 [&:hover,&:active]:shadow-lg [&:hover,&:active]:shadow-purple-500/30",
          "cursor-pointer",
        )}
        variants={bounceUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.6 }}
      >
        <div className="relative z-10 flex items-center justify-center">
          <ArrowUp className="w-5 h-5 text-purple-300 group-[&:hover,&:active]:text-purple-200 group-[&:hover,&:active]:-translate-y-1 transition-all duration-300" />
        </div>

        <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      </motion.button>
    </div>
  );
};
