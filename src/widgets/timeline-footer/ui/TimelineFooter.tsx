"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
// import { fadeUp } from "@/shared/animations";

export const TimelineFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto", "")}>
      <motion.div
        className="flex flex-col items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className={cn(
              "group relative overflow-hidden rounded-full p-4",
              "bg-linear-to-br from-purple-500/20 to-pink-500/20",
              "backdrop-blur-sm border border-white/10",
              "hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/30",
              "transition-all duration-300 cursor-pointer",
            )}
          >
            <div className="relative z-10 flex items-center justify-center">
              <ArrowUp className="w-5 h-5 text-purple-300 group-hover:text-purple-200 group-hover:-translate-y-1 transition-all duration-300" />
            </div>

            <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};
