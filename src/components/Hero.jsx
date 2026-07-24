import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles, FileText } from 'lucide-react';
import ProfilePhoto from './ProfilePhoto';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
        
        {/* Left Column: Intro & Info */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          
          {/* Availability & Location Badge */}
          <div className="inline-flex items-center gap-3 glass-panel px-4 py-2 rounded-full border border-indigo-500/30 self-start shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wide">
              Available for Full-Time & High-Impact Roles
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-300 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Hyderabad, India
            </span>
          </div>

          {/* Main Headline */}
          <div className="flex flex-col gap-2">
            <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Hi, I'm Venkatesh Yadagiri
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Crafting <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Scalable & Intelligent</span> Web Platforms
            </h1>
          </div>

          {/* Subtitle / Bio */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
            Software Engineer experienced in building production-grade full-stack applications with <strong className="text-white">Python, React, Node.js, Express, Django REST Framework, and PostgreSQL</strong>. Experienced in responsive interfaces, RESTful API design, and maintainable backends.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 py-1">
            {['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Python', 'Django DRF', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs & Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-sm flex items-center gap-2 shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all duration-300"
            >
              Explore Projects <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm flex items-center gap-2 border border-slate-700 hover:border-indigo-500/50 transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" /> Contact Me
            </a>

            <a
              href="mailto:venkateshyadagiri468@gmail.com?subject=Resume%20Request%20%E2%80%93%20Venkatesh%20Yadagiri"
              className="px-5 py-3.5 rounded-xl glass-panel hover:bg-indigo-500/10 text-indigo-300 hover:text-indigo-200 font-semibold text-xs flex items-center gap-2 border border-indigo-500/30 transition-all"
            >
              <FileText className="w-4 h-4 text-indigo-400" /> Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4 text-slate-400 text-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Connect:</span>
            
            <a
              href="https://github.com/venkateshyadagiri468"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:text-indigo-400 transition-colors" />
              <span className="font-mono text-xs">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/venkateshyadagiri468"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              <span className="font-mono text-xs">LinkedIn</span>
            </a>
          </div>

        </div>

        {/* Right Column: Clean Profile Photo Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <ProfilePhoto />
        </div>

      </div>
    </section>
  );
}
