import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Code2, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
          ? 'glass-panel border-b border-indigo-500/10 py-3 shadow-2xl shadow-indigo-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-mono font-bold text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1">
              Venkatesh<span className="text-cyan-400">.dev</span>
            </span>
            <span className="text-[10px] font-mono text-indigo-300 tracking-wider uppercase hidden sm:block">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}

          {/* Download Resume Button */}
          <a
            href="mailto:venkateshyadagiri468@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%93%20Venkatesh%20Yadagiri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 hover:border-indigo-500 text-xs font-semibold tracking-wide transition-all shadow-lg hover:shadow-indigo-500/25"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden p-2 rounded-lg glass-panel text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div className="md:hidden glass-panel border-b border-indigo-500/20 py-6 px-6 flex flex-col gap-4 mt-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenu(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 transition-colors border-b border-slate-800/50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:venkateshyadagiri468@gmail.com?subject=Portfolio%20Inquiry"
            className="flex items-center justify-center gap-2 w-full mt-2 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm shadow-lg shadow-indigo-600/30"
          >
            Contact Venkatesh
          </a>
        </div>
      )}
    </nav>
  );
}
