import { fadeUpLetter } from "@/shared/animations";

import { motion } from "framer-motion";

interface AnimatedHeroTextProps {
  text: string;
}

export const AnimatedHeroText = ({ text }: AnimatedHeroTextProps) => {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={fadeUpLetter}
              className="inline-block"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {char}
            </motion.span>
          ))}

          {wordIndex < words.length - 1 && (
            <motion.span
              variants={fadeUpLetter}
              className="inline-block"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {"\u00A0"}
            </motion.span>
          )}
        </span>
      ))}
    </>
  );
};
