import { Variants } from "framer-motion";

export const fadeUpWithDelay = (delay: number = 0.2): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});
