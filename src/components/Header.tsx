import React from 'react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          href="https://www.aienger.net/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:scale-105 transition-transform"
        >
          株式会社SKH
        </motion.a>
      </div>
    </motion.header>
  );
}