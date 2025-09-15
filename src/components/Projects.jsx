import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import TwinklingStars from './TwinklingStars';

const projectData = [
  {
    title: 'Company Profile Website',
    description: 'A company profile website developed as a final group project for ISC.',
    image: '/company.png',
    tags: ['React', 'Tailwind', 'JavaScript'],
    link: 'https://company-profile-2-flame.vercel.app/',
    repo: 'https://github.com/Ibnu2728/company-profile-2-.git',
  },
  {
    title: 'OLX Clone',
    description: ' ISC first group project, whose task was to create a website landing page clone.',
    image: '/olx.png',
    tags: ['HTML', 'CSS'],
    link: 'https://tugas-isc-pt-1.vercel.app/',
    repo: 'https://github.com/Ibnu2728/TUGAS-ISC-PT-1.git',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website developed for the ISC final project.',
    image: '/porto.png',
    tags: ['React', 'Tailwind', 'JavaScript'],
    link: '#',
    repo: 'https://github.com/Ibnu2728/Portofolio-Ibnu.git',
  },
];

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="scroll-mt-32 py-16 sm:py-24 bg-[#0f172a] relative overflow-hidden">
      <TwinklingStars />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 sm:mb-16">
          Featured Projects
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg overflow-hidden flex flex-col border border-white/10 hover:shadow-green-500/10 cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-500/10 text-green-400 text-xs font-medium px-2 sm:px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-white mb-4 flex-grow text-sm sm:text-base">{project.description}</p>
                <div className="flex space-x-4 mt-auto text-sm sm:text-base">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition duration-300 flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition duration-300 flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub /> Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-[#0f172a] border border-white/10 rounded-xl w-full max-w-lg p-4 sm:p-6 text-white relative shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-red-400"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={20} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-40 sm:h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-green-500/10 text-green-400 text-xs font-medium px-2 sm:px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">{selectedProject.description}</p>
              <div className="flex space-x-4 text-sm sm:text-base">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:underline"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={selectedProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:underline"
                >
                  <FaGithub /> Repo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
