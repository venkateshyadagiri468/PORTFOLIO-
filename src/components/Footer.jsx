import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070a12] border-t border-slate-800/80 pt-20 pb-12 px-6 md:px-12 w-full text-slate-400 font-mono text-xs overflow-hidden">
      
      {/* Top row taglines */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16 relative z-10">
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold">Software Engineering & Web Development</p>
          <p className="text-slate-500">Python · React · Node.js · Django · PostgreSQL</p>
          <p className="text-slate-500">Full-Stack & Backend Systems</p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p className="text-slate-300">B.Tech CSE Graduate — 2025</p>
          <a href="#projects" className="text-indigo-400 hover:text-cyan-300 underline underline-offset-4 mt-1">
            Explore 9 Repositories
          </a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p className="text-emerald-400 font-bold">● Available for Opportunities</p>
          <p className="text-slate-500">{new Date().getFullYear()} Venkatesh Yadagiri</p>
        </div>
      </div>

      {/* Huge Typographic Brand Watermark */}
      <div className="w-full flex justify-center items-center py-12 md:py-16 overflow-hidden select-none pointer-events-none opacity-20">
        <h2 className="text-[16vw] leading-none font-extrabold tracking-tighter lowercase text-slate-300">
          venkatesh
        </h2>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-8 border-t border-slate-900 relative z-10">
        
        <div>
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Venkatesh Yadagiri. All rights reserved.
          </p>
        </div>

        <div className="flex items-center justify-start md:justify-center gap-6 text-slate-300">
          <a
            href="https://github.com/venkateshyadagiri468"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/venkateshyadagiri468"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:venkateshyadagiri468@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        <div className="flex justify-start md:justify-end">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-panel hover:bg-indigo-600 text-slate-300 hover:text-white transition-all duration-300 border border-slate-800 hover:border-indigo-500 flex items-center gap-2 text-xs"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
