import React from 'react';
import { motion } from 'framer-motion';

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
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h5 className="font-bold text-gray-900 mb-4">bolt.new</h5>
            <p className="text-gray-600 text-sm">
              革新的なテクノロジーソリューションを提供し、
              ビジネスの可能性を広げます。
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h5 className="font-bold text-gray-900 mb-4">サービス</h5>
            <ul className="space-y-2 text-gray-600">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-gray-900 transition-colors">AIエンジニア講座</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-gray-900 transition-colors">AIクリエイティブ講座</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-gray-900 transition-colors">カスタムソリューション</a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h5 className="font-bold text-gray-900 mb-4">企業情報</h5>
            <ul className="space-y-2 text-gray-600">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-gray-900 transition-colors">会社概要</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-gray-900 transition-colors">採用情報</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-gray-900 transition-colors">お知らせ</a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h5 className="font-bold text-gray-900 mb-4">お問い合わせ</h5>
            <ul className="space-y-2 text-gray-600">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-gray-900 transition-colors">資料請求</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-gray-900 transition-colors">お問い合わせ</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#" className="hover:text-gray-900 transition-colors">プライバシーポリシー</a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600"
          variants={itemVariants}
        >
          <p>© 2025 bolt.new All Rights Reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}