import { Variants } from "framer-motion";

export const staggerParagraphs: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
