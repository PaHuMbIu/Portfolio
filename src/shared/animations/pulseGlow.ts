import { Easing } from "framer-motion";

export const pulseGlow = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.5, 0.8, 0.5],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as Easing,
  },
};
