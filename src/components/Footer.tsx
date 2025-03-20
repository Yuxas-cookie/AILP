import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Footer() {
  return (
    <motion.footer
      className="py-12 px-4 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200 text-center"
        >
          <Link 
            to="/legal"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            特定商取引法に基づく表記・サービスに関する表記
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
}