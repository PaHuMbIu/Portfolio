"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/shared/lib/utils";
import { scaleSpring, pulseGlow } from "@/shared/animations";

interface RoadLineProps {
  isLast?: boolean;
}

export const RoadLine = ({ isLast = false }: RoadLineProps) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMounted && !isLast ? lineRef : undefined,
    offset: ["start center", "end center"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });

  return (
    <div className={cn("relative flex flex-col items-center", "min-w-[40px] sm:min-w-[60px]")}>
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleSpring}
      >
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-purple-500/30 blur-md"
          animate={pulseGlow.animate}
          transition={pulseGlow.transition}
        />

        <div
          className={cn(
            "relative rounded-full bg-linear-to-br from-purple-500 via-purple-600 to-pink-500 border-white shadow-xl shadow-purple-500/60 ring-purple-500/20",
            "w-4 h-4 border-2 ring-2 sm:w-6 sm:h-6 sm:border-4 sm:ring-4",
          )}
        >
          <Circle
            className="absolute inset-0 w-full h-full text-purple-400/50"
            fill="currentColor"
            stroke="none"
          />
        </div>
      </motion.div>

      <div ref={lineRef} className={cn("relative w-[4px] flex-1", isLast && "hidden")}>
        <motion.div
          className="absolute inset-0 bg-linear-to-b from-purple-500 via-purple-400/80 to-purple-400/40 rounded-full"
          style={{ scaleY: lineScaleY, transformOrigin: "top" }}
        />

        <motion.div
          className="absolute inset-0 bg-linear-to-b from-purple-400/50 via-purple-400/30 to-transparent blur-[2px] rounded-full"
          style={{ scaleY: lineScaleY, transformOrigin: "top" }}
        />
      </div>
    </div>
  );
};
