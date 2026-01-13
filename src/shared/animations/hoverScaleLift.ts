import type { HTMLMotionProps } from "framer-motion";

export const hoverScaleLift: HTMLMotionProps<"div"> = {
  whileHover: {
    scale: 1.05,
    y: -2,
  },
  whileTap: {
    scale: 0.98,
  },
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};
