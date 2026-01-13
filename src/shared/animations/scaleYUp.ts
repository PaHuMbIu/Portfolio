import { Variants } from "framer-motion";

export const scaleYUp: Variants = {
  hidden: {
    scaleY: 0,
    originY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
