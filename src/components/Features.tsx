import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Video, MessageCircle, Users, CalendarCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "24時間学習可能",
    description: "いつでもどこでもWebコンテンツで学習できる環境を提供",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Video className="w-6 h-6 text-white" />,
    title: "毎週開催のzoom実践会",
    description: "現役エンジニアによる実践的な指導とQ&Aセッション",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    title: "公式ラインによる個別対応",
    description: "学習中の疑問点を個別にサポート",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "グループチャット",
    description: "受講生同士で質問し合える、活発なコミュニティ",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: <CalendarCheck className="w-6 h-6 text-white" />,
    title: "定期的な実践会・懇親会",
    description: "オフラインでの技術交流と人脈作り",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

const floatingVariants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowVariants = {
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

export function Features() {
  const title = "本講座の特徴";
  
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <motion.div
        className="container mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600"
                style={{
                  transition: `all 0.5s ${index * 0.1}s`
                }}
              >
                {char}
              </motion.span>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-600 text-lg mt-6"
            >
              最新のAI技術を活用した、実践的な学習環境を提供します
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                
                {/* Card Content */}
                <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
                  <div className="flex items-start gap-4">
                    <motion.div
                      variants={floatingVariants}
                      animate="animate"
                      className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg`}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 -mt-2 -mr-2">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${feature.gradient}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <motion.p
              className="text-gray-600 text-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                24時間365日
              </span>
              、あなたの学習をサポートします
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}