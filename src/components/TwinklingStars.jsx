import React from 'react';
import { motion } from 'framer-motion';

const starPositions = [
  { top: '10%', left: '15%' },
  { top: '20%', left: '70%' },
  { top: '35%', left: '40%' },
  { top: '50%', left: '80%' },
  { top: '60%', left: '25%' },
  { top: '75%', left: '60%' },
  { top: '85%', left: '10%' },
  { top: '30%', left: '90%' },
];

const TwinklingStars = () => {
  return (
    <>
      {starPositions.map((pos, index) => (
        <motion.div
          key={index}
          className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] rounded-full bg-white absolute"
          style={{ top: pos.top, left: pos.left }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2 + Math.random() * 2, // 2–4 detik
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: Math.random(),
          }}
        />
      ))}
    </>
  );
};

export default TwinklingStars;
