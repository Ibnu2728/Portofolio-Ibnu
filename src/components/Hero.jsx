import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaUserAstronaut, FaRocket } from 'react-icons/fa';
import TwinklingStars from './TwinklingStars';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] px-6 py-32"
    >
      {/* ✨ Bintang berkedip */}
      <TwinklingStars />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Kiri - Teks */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center md:text-left"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          >
            Hello, I'm Ibnu<br />Syuhada Suffera
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl md:text-4xl text-indigo-300 font-semibold mb-6"
          >
            <TypeAnimation
              sequence={[
                'Web Development',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Network Engineering',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Tombol Download CV & My Projects */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-10"
          >
            {/* Tombol Download CV */}
            <a
              href="/Cv.pdf"
              download="CV_IbnuSyuhadaSuffera.pdf"
              className="inline-block bg-indigo-500 text-white text-lg font-bold py-3 px-10 rounded-full hover:bg-indigo-600 transition duration-300 shadow-lg"
            >
              Download CV
            </a>

            {/* Tombol My Projects */}
            <a
              href="#projects"
              className="inline-block bg-indigo-500 text-white text-lg font-bold py-3 px-10 rounded-full hover:bg-indigo-600 transition duration-300 shadow-lg"
            >
              My Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Kanan - Ikon Astronot + Roket */}
        <motion.div
          className="flex justify-center md:justify-end md:pr-14 gap-10 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* Astronot Melayang + Rotasi */}
          <motion.div
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 10, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.1 }}
            className="transition duration-300"
          >
            <FaUserAstronaut className="text-indigo-300 text-[170px] md:text-[230px] drop-shadow-xl" />
          </motion.div>

          {/* Roket Melayang & Terbang Saat Hover */}
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [0, -20, 0, 20, 0],
              rotate: [0, 10, -10, 0],
            }}
            whileHover={{
              y: -600,
              opacity: 0,
              transition: { duration: 1, ease: 'easeInOut' },
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            className="transition duration-300"
          >
            <FaRocket className="text-indigo-400 text-[120px] md:text-[160px] drop-shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
