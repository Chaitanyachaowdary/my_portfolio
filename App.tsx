
import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Skills from './src/components/Skills';
import Projects from './src/components/Projects';
import Certifications from './src/components/Certifications';
import Education from './src/components/Education';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

const App = () => {
  return (
    <div className="bg-primary text-light-gray font-sans">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;