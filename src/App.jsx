import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBento from './components/AboutBento';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#0b132b] text-slate-100 relative overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Cyber Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Portfolio Content */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Ambient Grid Pattern Overlay */}
        <div className="fixed inset-0 bg-grid-pattern opacity-50 pointer-events-none z-0" />

        {/* Header Navigation */}
        <Navbar />

        <main className="relative z-10">
          <Hero />
          <AboutBento />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
