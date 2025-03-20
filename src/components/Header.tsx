import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

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
        <motion.a
          href="https://line.me/R/ti/p/@687dqxem"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-45 animate-shine"></div>
          <span className="relative flex items-center font-medium">
            公式ラインはコチラ
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.a>
      </div>
    </motion.header>
  );
}