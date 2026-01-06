import { letterVariants } from "../animations/title.variants";

import { motion } from "framer-motion";

interface AnimatedHeroTextProps {
  text: string;
}

export const AnimatedHeroText = ({ text }: AnimatedHeroTextProps) => {
  return (
    <>
      {Array.from(text).map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
};
