import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationAndOrg from './components/EducationAndOrg'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <EducationAndOrg /> 
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
