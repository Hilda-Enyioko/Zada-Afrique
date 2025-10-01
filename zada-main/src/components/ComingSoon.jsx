// src/components/ComingSoon.jsx
import { motion } from "motion/react";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fdfcf7] dark:bg-[#0b0b0b] text-center px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-[#448044] dark:text-[#5cc95c] mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Coming Soon
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        We’re crafting something special for you ✨
      </motion.p>

      <motion.button
        className="mt-10 px-6 py-3 bg-[#e5c07b] text-[#111] rounded-lg font-semibold shadow-md hover:bg-[#111] hover:text-[#e5c07b] transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Go Back Home
      </motion.button>
    </div>
  );
};

export default ComingSoon;
