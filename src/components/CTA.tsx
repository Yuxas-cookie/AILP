import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 text-white">
      <motion.div
        className="container mx-auto text-center max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          未来のテクノロジーを、今
        </motion.h3>
        <motion.p
          className="text-gray-300 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          私たちと一緒に、テクノロジーの力で新しい価値を創造しませんか？
        </motion.p>
        <motion.a
          href="https://line.me/R/ti/p/@687dqxem"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div
            className="mr-2"
            whileHover={{ y: -4 }}
          >
            <Send className="w-5 h-5" />
          </motion.div>
          公式ラインはコチラ
        </motion.a>
      </motion.div>
    </section>
  );
}