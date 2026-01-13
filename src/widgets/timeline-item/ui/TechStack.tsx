import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUpWithDelay } from "@/shared/animations";

interface TechStackProps {
  stack: string[];
}

export const TechStack = ({ stack }: TechStackProps) => {
  return (
    <motion.li
      className={cn("flex flex-wrap", "mt-2 sm:mt-4", "gap-1.5 sm:gap-2")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      variants={fadeUpWithDelay(0.2)}
    >
      {stack.map((tech, index) => (
        <span
          key={index}
          className={cn(
            "font-medium text-purple-100 bg-black/40 backdrop-blur-md border border-purple-400/30 rounded-full shadow-md shadow-black/30 hover:bg-black/50 hover:border-purple-400/50 hover:shadow-lg hover:shadow-black/40 transition-all duration-200",
            "px-2 py-0.5 text-[10px] sm:px-3 sm:py-1 sm:text-xs md:text-sm",
          )}
        >
          {tech}
        </span>
      ))}
    </motion.li>
  );
};
