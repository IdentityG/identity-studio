import React from 'react';
import { motion } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#ff6b6b]"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#ffd166]"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{delay: 0.4, duration: 1, ease: 'easeInOut' }}
      />

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#345d9d]"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{delay: 0.6, duration: 1, ease: 'easeInOut' }}
      />
    </>
  );
};

export default TransitionEffect;
