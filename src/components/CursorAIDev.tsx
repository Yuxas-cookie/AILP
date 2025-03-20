import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, MessageCircle, Wrench, Laptop, Globe, Settings, Braces, Cpu } from 'lucide-react';

const fadeInUpVariants = {
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const floatingIconVariants = {
  initial: { y: 0, rotate: 0 },
  animate: (i: number) => ({
    y: [-5, 5, -5],
    rotate: [0, i % 2 === 0 ? 10 : -10, 0],
    transition: {
      duration: 4 + i,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

const glowVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const gridAnimationVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
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

export function CursorAIDev() {
  const titleLines = [
    "AIエディター「cursor」を",
    "使ったAI駆動開発"
  ];
  
  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 -mx-8 -my-12">
        <motion.div 
          className="absolute inset-0 opacity-5" 
          variants={gridAnimationVariants}
          style={{
            backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px),
                             linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="absolute inset-0 overflow-hidden">
          {[Terminal, Code2, Braces, Cpu].map((Icon, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={floatingIconVariants}
              initial="initial"
              animate="animate"
              className="absolute"
              style={{
                left: `${index * 25}%`,
                top: `${(index % 3) * 30 + 10}%`,
                opacity: 0.1
              }}
            >
              <Icon className="w-16 h-16" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 5,
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
          {titleLines.map((line, lineIndex) => (
            <div key={lineIndex} className="leading-tight">
              {line.split('').map((char, charIndex) => (
                <motion.span
                  key={`${lineIndex}-${charIndex}`}
                  variants={letterVariants}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600"
                  style={{
                    transition: `all 0.5s ${(lineIndex * line.length + charIndex) * 0.05}s`
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-12"
        >
          <motion.div variants={fadeInUpVariants}>
            <motion.div
              className="flex items-center gap-4 mb-6"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Terminal className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">Cursorとは</h3>
            </motion.div>
            <motion.p
              className="text-gray-700 leading-relaxed"
              variants={fadeInUpVariants}
            >
              Cursorは、プログラミングをもっと楽にするためのAI搭載のコードエディタです。自分でコードをすべて書く必要がなく、AIの力を使ってコードを自動で生成したり、間違いを教えてくれたりします。
            </motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
            <motion.div className="space-y-6" variants={containerVariants}>
              {[
                {
                  icon: <Code2 className="w-5 h-5 text-purple-600" />,
                  title: "コードの自動生成・編集",
                  description: "日常で使う言葉で「こんな機能を作って！」と伝えると、必要なコードを自動で作ってくれます。",
                  bgColor: "bg-purple-100"
                },
                {
                  icon: <MessageCircle className="w-5 h-5 text-blue-600" />,
                  title: "チャットで質問できる",
                  description: "わからないことがあれば、Cursorのチャット機能を使って質問できます。AIが丁寧に説明してくれます。",
                  bgColor: "bg-blue-100"
                },
                {
                  icon: <Wrench className="w-5 h-5 text-green-600" />,
                  title: "自動デバッグ・エラー修正",
                  description: "コードにエラーがあると、どこが間違っているかを自動で見つけ修正してくれます。",
                  bgColor: "bg-green-100"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 hover:transform transition-transform"
                  variants={fadeInUpVariants}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="space-y-6" variants={containerVariants}>
              {[
                {
                  icon: <Laptop className="w-5 h-5 text-pink-600" />,
                  title: "VS Codeの環境を活用",
                  description: "人気のエディタ「VS Code」をベースにしているため、慣れ親しんだ環境をそのまま使えます。",
                  bgColor: "bg-pink-100"
                },
                {
                  icon: <Globe className="w-5 h-5 text-orange-600" />,
                  title: "日本語対応",
                  description: "操作画面やメニューが日本語に対応しているため、英語が苦手な方でも安心して使えます。",
                  bgColor: "bg-orange-100"
                },
                {
                  icon: <Settings className="w-5 h-5 text-yellow-600" />,
                  title: "タブキーによる補完機能",
                  description: "コードを書いている途中でAIが次のコードを予測し、タブキーで簡単に補完できます。",
                  bgColor: "bg-yellow-100"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 hover:transform transition-transform"
                  variants={fadeInUpVariants}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t pt-12"
            variants={containerVariants}
          >
            <motion.h3
              className="text-xl font-bold text-gray-900 mb-6"
              variants={fadeInUpVariants}
            >
              従来のプログラミングとの違い
            </motion.h3>
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {[
                {
                  title: "学習コストの低減",
                  traditional: "コードを書くためには専門的な知識やスキルが必要で、学習には時間がかかります。",
                  cursor: "会話のように指示を出すことができるため、プログラミングの知識がなくてもすぐにやり始められます。"
                },
                {
                  title: "コードの自動化",
                  traditional: "高度なプログラミングスキルが求められるため、細かい作業が煩雑になることがあります。",
                  cursor: "AIがコードを自動生成するため、圧倒的に効率よく開発を進めることができます。"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-6"
                  variants={fadeInUpVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-4">{item.title}</h4>
                  <div className="space-y-4">
                    <motion.div
                      className="bg-white p-4 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">従来：</span> {item.traditional}
                      </p>
                    </motion.div>
                    <motion.div
                      className="bg-blue-50 p-4 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-blue-600">Cursor：</span> {item.cursor}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}