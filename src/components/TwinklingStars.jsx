import React from 'react';
import { motion } from 'framer-motion';

// Posisi bintang manual + random tambahan
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

// Biar lebih ramai, generate bintang random juga
const randomStars = Array.from({ length: 15 }, () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
}));

const TwinklingStars = () => {
  const stars = [...starPositions, ...randomStars];

  return (
    <>
      {stars.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            top: pos.top,
            left: pos.left,
            width: `${Math.random() > 0.5 ? 4 : 2}px`,
            height: `${Math.random() > 0.5 ? 4 : 2}px`,
          }}
          animate={{ opacity: [0.1, 1, 0.1] }}
          transition={{
            duration: 1.5 + Math.random() * 2.5, // 1.5–4s
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};

export default TwinklingStars;
