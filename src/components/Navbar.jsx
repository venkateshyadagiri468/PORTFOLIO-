import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel border-b border-indigo-500/10 py-3 shadow-2xl shadow-indigo-950/30'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-mono font-bold text-base sm:text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform shrink-0">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-0.5 sm:gap-1">
              Venkatesh<span className="text-cyan-400">.dev</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-indigo-300 tracking-wider uppercase hidden sm:block">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-slate-300 hover:text-white transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}

          {/* Hire Me CTA Button */}
          <a
            href="mailto:venkateshyadagiri468@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%93%20Venkatesh%20Yadagiri"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-semibold tracking-wide transition-all shadow-lg hover:shadow-indigo-500/25"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Action Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="mailto:venkateshyadagiri468@gmail.com"
            className="px-3 py-1.5 rounded-full bg-indigo-600/30 text-cyan-300 border border-indigo-500/30 text-xs font-medium"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-indigo-500/20"
            aria-label="Toggle mobile menu"
          >
            {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div className="md:hidden glass-panel border-b border-indigo-500/20 py-4 px-6 flex flex-col gap-3 mx-4 mt-2 rounded-2xl shadow-2xl backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenu(false)}
              className="text-sm font-medium text-slate-200 hover:text-cyan-400 py-2.5 transition-colors border-b border-slate-800/60 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-xs font-mono text-slate-500">→</span>
            </a>
          ))}
          <a
            href="mailto:venkateshyadagiri468@gmail.com"
            onClick={() => setMobileMenu(false)}
            className="flex items-center justify-center gap-2 w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium text-sm shadow-lg shadow-indigo-600/30"
          >
            Contact Venkatesh
          </a>
        </div>
      )}
    </nav>
  );
}
