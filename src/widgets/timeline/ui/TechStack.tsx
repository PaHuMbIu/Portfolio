import { motion } from "framer-motion";

interface TechStackProps {
  stack: string[];
}

export const TechStack = ({ stack }: TechStackProps) => {
  return (
    <motion.div
      className="mt-4 flex flex-wrap gap-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {stack.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-xs md:text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/30 rounded-full hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-200"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  );
};
