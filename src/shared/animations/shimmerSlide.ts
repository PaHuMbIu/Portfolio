import type { Variants } from "framer-motion";

export const shimmerSlide: Variants = {
  initial: { x: "-100%" },
  whileHover: {
    x: "200%",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
