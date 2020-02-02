import React from "react";

import { motion } from "framer-motion";

export const variants = {
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

export function PageTransitionWrapper({ children }) {
  return (
    <motion.div
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
export default { pageTransition, variants, PageTransitionWrapper };
