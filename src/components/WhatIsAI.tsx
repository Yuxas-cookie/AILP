import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Users, Code2, Brain, Sparkles } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const floatingIconVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const particleVariants = {
  animate: (i: number) => ({
    y: [0, -20, 0],
    x: [0, Math.sin(i) * 10, 0],
    transition: {
      duration: 2 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random()
    }
  })
};

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export function WhatIsAI() {
  const title = "AIとは";
  
  return (
    <div className="relative">
      <div className="absolute inset-0 -mx-8 -my-12">
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={particleVariants}
              animate="animate"
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.${Math.floor(Math.random() * 5 + 2)})`
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600"
              style={{
                transition: `all 0.5s ${index * 0.1}s`
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12 hover:shadow-xl transition-all"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-bold mb-6 text-gray-900"
          >
            AIを使いこなすということは...
          </motion.h3>
          <div className="space-y-6 text-lg text-gray-700">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              className="flex items-start gap-4"
            >
              <motion.div
                variants={floatingIconVariants}
                animate="animate"
                className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
              >
                <Bot className="w-6 h-6 text-blue-600" />
              </motion.div>
              <div>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="font-semibold mb-2"
                >
                  「マークザッカーバーグやイーロンマスクとなんでも聞ける友達になる事」
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-gray-600"
                >
                  世界のトップエンジニアと対話するような体験で、革新的なアイデアや解決策を得ることができます。
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              className="flex items-start gap-4"
            >
              <motion.div
                variants={floatingIconVariants}
                animate="animate"
                className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
              >
                <Cpu className="w-6 h-6 text-purple-600" />
              </motion.div>
              <div>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="font-semibold mb-2"
                >
                  「世界トップクラス、年収5000万円クラスのエンジニアを月3000円で使いまくれる事」
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-gray-600"
                >
                  高度な専門知識を必要とする作業も、AIの支援により効率的に実行できるようになりました。
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-8 shadow-lg"
        >
          <div className="absolute inset-0">
            {[Code2, Brain, Sparkles].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute opacity-10"
                variants={floatingIconVariants}
                animate="animate"
                style={{
                  left: `${index * 30 + 10}%`,
                  top: `${(index % 2) * 60 + 20}%`,
                }}
              >
                <Icon className="w-24 h-24" />
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-8"
            >
              エンジニアとしてAIの実力
            </motion.h3>
            
            <div className="space-y-8">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                className="flex items-start gap-6"
              >
                <motion.div
                  variants={floatingIconVariants}
                  animate="animate"
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"
                >
                  <Users className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="leading-relaxed"
                  >
                    スマートフォンやパソコン、インターネットサービス... 私たちの生活を便利にしている技術の多くは、世界的な大手IT企業で働くトップエンジニアたちが開発しています。
                  </motion.p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {['Apple', 'Google', 'Microsoft'].map((company, i) => (
                      <motion.div
                        key={company}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-white/5 rounded-lg p-4 backdrop-blur-sm hover:bg-white/10 transition-colors"
                      >
                        <p className="font-semibold mb-2">{company}</p>
                        <p className="text-gray-300">
                          {company === 'Apple' && 'iPhoneやMacを作る'}
                          {company === 'Google' && 'GoogleマップやGmailを作る'}
                          {company === 'Microsoft' && 'Windowsを作る'}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="border-t border-white/10 pt-8"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-6 leading-relaxed"
                >
                  これらの会社では、世界中から選ばれた優秀なエンジニアが働いています。
                  そんな超一流エンジニアの知識と技術が、今ではAIを通じて誰でも利用できるようになりました。
                </motion.p>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  {[
                    'このプログラムの作り方を教えて',
                    'このシステムの設計を手伝って',
                    'この技術について詳しく説明して'
                  ].map((text, i) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="bg-white/5 rounded-lg p-4 backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      <p className="text-blue-400 mb-2">「{text}」</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}