import React from 'react';
import { Code, Globe, Terminal, CheckCircle2, Sparkles } from 'lucide-react';

export default function AboutBento() {
  const steps = [
    {
      num: '01',
      title: 'Research & System Design',
      desc: 'Analyzing data schemas, user requirements, and technical constraints to establish scalable backend architectures.'
    },
    {
      num: '02',
      title: 'API Architecture & DB Schemas',
      desc: 'Building modular REST APIs with Django DRF or Express.js backed by normalized PostgreSQL relational databases.'
    },
    {
      num: '03',
      title: 'Pixel-Perfect Responsive UI',
      desc: 'Translating Figma wireframes into performant, accessible React components with Tailwind CSS & TypeScript.'
    },
    {
      num: '04',
      title: 'Testing & Production Deploy',
      desc: 'Automating build pipelines, validating endpoints with Postman/Jest, and optimizing cross-browser compatibility.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Section Title */}
      <div className="flex flex-col gap-2.5 sm:gap-3 mb-10 sm:mb-16 text-center max-w-3xl mx-auto">
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold flex items-center justify-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" /> About & Process
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Turning Complex Ideas into <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Production Web Systems</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-base">
          A structured engineering methodology focused on code clarity, API security, and high-performance UI.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        
        {/* Card 1: Main Bio (Col 8) */}
        <div className="md:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/20 glass-panel-hover flex flex-col justify-between">
          <div className="flex flex-col gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Code className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Full-Stack Engineering with Precision</h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base">
              I am a Software Engineer based in <strong className="text-white">Hyderabad, India</strong>, with hands-on experience developing full-stack web applications and scalable backend APIs. Having built software for Dubai-based remote teams (Pitchmatter / Zynk.ing) and created 9+ production-grade repositories, I specialize in joining engineering teams to deliver clean, maintainable code.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-5 sm:pt-6 border-t border-slate-800/80 mt-5 sm:mt-6">
            <div>
              <span className="text-xl sm:text-3xl font-extrabold text-white font-mono">9+</span>
              <p className="text-[10px] sm:text-xs text-slate-400">Repositories</p>
            </div>
            <div>
              <span className="text-xl sm:text-3xl font-extrabold text-indigo-400 font-mono">15+</span>
              <p className="text-[10px] sm:text-xs text-slate-400">REST Endpoints</p>
            </div>
            <div>
              <span className="text-xl sm:text-3xl font-extrabold text-cyan-400 font-mono">B.Tech</span>
              <p className="text-[10px] sm:text-xs text-slate-400">CSE 2025</p>
            </div>
          </div>
        </div>

        {/* Card 2: Remote / Global Badge (Col 4) */}
        <div className="md:col-span-4 glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/20 glass-panel-hover flex flex-col justify-between bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-950/80">
          <div className="flex flex-col gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Global Remote Ready</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Experienced working asynchronously with cross-functional remote teams across Dubai and India in Agile environments.
            </p>
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-2 rounded-xl border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5 shrink-0" /> Pitchmatter (Dubai Remote)
            </div>
          </div>
        </div>

        {/* 4 Process Cards (Col 12 Grid) */}
        <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {steps.map((s) => (
            <div
              key={s.num}
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col gap-2.5 sm:gap-3 group"
            >
              <div className="flex justify-between items-center">
                <span className="text-xl sm:text-2xl font-mono font-extrabold text-indigo-400 group-hover:text-cyan-400 transition-colors">
                  {s.num}
                </span>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                {s.title}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
