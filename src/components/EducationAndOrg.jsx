import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaSchool } from 'react-icons/fa';
import TwinklingStars from './TwinklingStars'; // ✨ Import bintang

const timeline = [
  {
    icon: <FaSchool />,
    title: 'SMKS Pelita Ciampea 2',
    subtitle: 'Computer and Network Engineering',
    year: '2021 - 2024',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Universitas Pamulang',
    subtitle: 'Bachelor of Informatics Engineering',
    year: '2024 - Present',
  },
  {
    icon: <FaUsers />,
    title: 'Informatics Study Club',
    subtitle: 'Active Member',
    year: '2025 - Present',
  },
];

const EducationAndOrg = () => {
  return (
    <section
      id="education"
      className="relative py-16 sm:py-24 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* ✨ Background bintang */}
      <TwinklingStars />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
        >
          Education & Organization History
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-start gap-3 sm:gap-4 bg-white/5 border border-white/10 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-indigo-500/30 hover:border-indigo-300/20 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl text-indigo-300 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-100 mb-1">
                  {item.title}
                </h3>
                <p className="text-indigo-300 text-xs sm:text-sm">
                  {item.subtitle}
                </p>
                <p className="text-gray-400 text-[11px] sm:text-xs mt-1 italic">
                  {item.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAndOrg;
