import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CalendarRange } from 'lucide-react';

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

export function Pricing() {
  const title = "料金・サポート";
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
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
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
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

      <motion.div
        className="container mx-auto max-w-4xl relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
                >
                  <Clock className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-2">受講料金</h4>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                      77万円
                    </p>
                    <p className="text-gray-600">（税込）</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
                >
                  <CalendarRange className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-2">サポート期間</h4>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                      180日間
                    </p>
                    <p className="text-gray-600">充実したサポート体制</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}