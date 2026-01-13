import { Variants } from "framer-motion";

export const scaleInWithDelay = (delay: number = 0.1): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});
