import React from 'react';
import { motion } from 'framer-motion';
import TwinklingStars from './TwinklingStars'; // 🌟

const certificates = [
  {
    title: 'MTCNA Certified Network Associate',
    issuer: 'MikroTik',
    year: '2024',
    image: '/serti1.jpg',
  },
  {
    title: 'Security Products Knowledge',
    issuer: 'Telview Security Academy',
    year: '2023',
    image: '/serti2.jpg',
  },
  {
    title: 'Fiber Optic Installation Fundamentals',
    issuer: 'LS Cable & System',
    year: '2023',
    image: '/serti3.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative py-24 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* 🌠 Bintang di background */}
      <TwinklingStars />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Skill Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
