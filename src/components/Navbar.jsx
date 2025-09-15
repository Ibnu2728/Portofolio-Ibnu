import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaLaptopCode } from 'react-icons/fa';

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    activeClass="active-nav"
    onClick={onClick}
    className="relative cursor-pointer text-sm md:text-base text-gray-200 hover:text-indigo-300 transition group"
  >
    <span>{children}</span>
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-sm px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 text-lg md:text-xl font-semibold text-indigo-300 cursor-pointer"
        >
          <FaLaptopCode className="text-xl" />
          Ibnu Syuhada Suffera
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          <li><NavLink to="hero">Home</NavLink></li>
          <li><NavLink to="about">About</NavLink></li>
          <li><NavLink to="education">Education</NavLink></li>
          <li><NavLink to="skills">Skills</NavLink></li>
          <li><NavLink to="projects">Projects</NavLink></li>
          <li><NavLink to="certificates">Certificates</NavLink></li>
          <li><NavLink to="contact">Contacts</NavLink></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-indigo-300 rounded"></span>
            <span className="block w-6 h-0.5 bg-indigo-300 rounded"></span>
            <span className="block w-6 h-0.5 bg-indigo-300 rounded"></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="md:hidden mt-3 space-y-4 text-center bg-[#0f172a]/95 p-5 rounded-lg shadow-lg transition-all duration-300">
          <li><NavLink to="hero" onClick={handleNavClick}>Home</NavLink></li>
          <li><NavLink to="about" onClick={handleNavClick}>About</NavLink></li>
          <li><NavLink to="education" onClick={handleNavClick}>Education</NavLink></li>
          <li><NavLink to="skills" onClick={handleNavClick}>Skills</NavLink></li>
          <li><NavLink to="projects" onClick={handleNavClick}>Projects</NavLink></li>
          <li><NavLink to="certificates" onClick={handleNavClick}>Certificates</NavLink></li>
          <li><NavLink to="contact" onClick={handleNavClick}>Contacts</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
