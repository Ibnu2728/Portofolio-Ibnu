import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="py-4 bg-white/5 text-center text-sm text-gray-400"
    >
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} Ibnu Syuhada Suffera — 
        <span className="text-gray-500"> Thank you for visiting.</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
