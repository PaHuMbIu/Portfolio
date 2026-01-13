import { Variants } from "framer-motion";

export const fadeUpLeft: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    x: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};
