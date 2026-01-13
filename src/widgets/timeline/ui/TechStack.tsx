import { motion } from "framer-motion";

interface TechStackProps {
  stack: string[];
}

export const TechStack = ({ stack }: TechStackProps) => {
  return (
    <motion.li
      className="mt-4 flex flex-wrap gap-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {stack.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-xs md:text-sm font-medium text-purple-100 bg-black/40 backdrop-blur-md border border-purple-400/30 rounded-full shadow-md shadow-black/30 hover:bg-black/50 hover:border-purple-400/50 hover:shadow-lg hover:shadow-black/40 transition-all duration-200"
        >
          {tech}
        </span>
      ))}
    </motion.li>
  );
};
