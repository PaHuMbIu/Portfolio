import { Variants } from "framer-motion";

export const bounceUp: Variants = {
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      scale: { type: "spring", bounce: 0.6 },
    },
  },
};
