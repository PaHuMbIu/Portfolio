import { Variants } from "framer-motion";

export const scaleSpring: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 200,
    },
  },
};
