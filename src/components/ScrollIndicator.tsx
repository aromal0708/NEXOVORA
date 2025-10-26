import React from "react";
import { motion } from "framer-motion";

const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-3 bg-accent rounded-full mt-2"
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
