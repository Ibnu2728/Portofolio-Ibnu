import React from 'react';
import { motion } from 'framer-motion';
import TwinklingStars from './TwinklingStars';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* ✨ Background Bintang */}
      <TwinklingStars />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8 border border-white/10">
          {/* Foto Profil */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-shrink-0"
          >
            <img
              src="/foto_gwe.png"
              alt="Foto Profil"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-400 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Deskripsi */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-base sm:text-lg text-gray-300 leading-relaxed text-center md:text-left"
          >
            <p>
              Hello! I’m a{' '}
              <span className="text-indigo-300 font-semibold">
                Informatics Engineering student (3rd semester)
              </span>{' '}
              focused on developing modern, responsive, and interactive web
              interfaces.
            </p>
            <br />
            <p>
              I have a strong passion for technology and am currently deepening
              my knowledge in
              <span className="font-semibold text-indigo-200">
                {' '}
                Web Development
              </span>
              ,
              <span className="font-semibold text-indigo-200"> UI/UX</span>, and
              <span className="font-semibold text-indigo-200"> Networking</span>
              . I believe that technology should simplify life, and I enjoy
              turning ideas into real, intuitive solutions.
            </p>

            <span className="inline-block mt-6 px-4 py-2 bg-indigo-400/10 text-indigo-300 rounded-full font-medium shadow hover:bg-indigo-400/20 transition">
              Open for collaboration!
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
