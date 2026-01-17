import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;