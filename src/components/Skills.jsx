import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaServer, FaJava
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiPython, SiCplusplus
} from 'react-icons/si';
import TwinklingStars from './TwinklingStars'; // ✨ import bintang

const skills = [
  { icon: <FaHtml5 className="text-[#E34F26]" />, name: 'HTML5' },
  { icon: <FaCss3Alt className="text-[#1572B6]" />, name: 'CSS3' },
  { icon: <SiJavascript className="text-[#F7DF1E]" />, name: 'JavaScript' },
  { icon: <SiCplusplus className="text-[#00599C]" />, name: 'C++' },
  { icon: <FaReact className="text-[#61DAFB]" />, name: 'React' },
  { icon: <FaJava className="text-[#007396]" />, name: 'Java' },
  { icon: <SiPython className="text-[#3776AB]" />, name: 'Python' },
  { icon: <SiTailwindcss className="text-[#38BDF8]" />, name: 'Tailwind CSS' },
  { icon: <FaServer className="text-[#0ea5e9]" />, name: 'Laragon' },
  { icon: <FaGitAlt className="text-[#F05032]" />, name: 'Git' },
];

const skillVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 bg-[#0f172a] overflow-hidden">
      {/* Bintang sebagai background */}
      <TwinklingStars />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Technical Skills
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/10"
              variants={skillVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-gray-200 font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
