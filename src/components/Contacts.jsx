import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import TwinklingStars from './TwinklingStars'; // ✨ Bintang berkedip

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' }
  }),
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Bintang sebagai background */}
      <TwinklingStars />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities and happy to chat. Feel free to contact me via email or social media.
        </p>

        <motion.a 
          href="mailto:ibnusyuhadasuffera@gmail.com" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-indigo-500 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-400 transition-all duration-300 mb-12"
        >
          Send Message
        </motion.a>

        <div className="flex justify-center space-x-8">
          {[FaGithub, FaLinkedin, FaEnvelope].map((Icon, i) => (
            <motion.a
              key={i}
              href={
                i === 0
                  ? 'https://github.com/Ibnu2728'
                  : i === 1
                  ? 'https://www.linkedin.com/in/ibnu-syuhada-suffera-275281372'
                  : 'mailto:ibnusyuhadasuffera@gmail.com'
              }
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl text-gray-400 hover:text-indigo-400 transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
