import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Pricing } from './components/Pricing';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

function App() {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <motion.div {...fadeInUp}>
        <Hero />
      </motion.div>
      <motion.div 
        {...fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <Services />
      </motion.div>
      <motion.div 
        {...fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <Features />
      </motion.div>
      <motion.div 
        {...fadeInUp}
        transition={{ delay: 0.4 }}
      >
        <Pricing />
      </motion.div>
      <motion.div 
        {...fadeInUp}
        transition={{ delay: 0.5 }}
      >
        <CTA />
      </motion.div>
    </motion.div>
  );
}

export default App;