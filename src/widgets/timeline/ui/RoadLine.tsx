import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export const RoadLine = () => {
  return (
    <div className={cn("relative flex flex-col items-center", "min-w-[40px] sm:min-w-[60px]")}>
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-purple-500/30 blur-md"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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

      <motion.div
        className="relative w-[4px] flex-1"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-purple-500 via-purple-400/80 to-purple-400/40 rounded-full" />

        <div className="absolute inset-0 bg-linear-to-b from-purple-400/50 via-purple-400/30 to-transparent blur-[2px] rounded-full" />
      </motion.div>
    </div>
  );
};
