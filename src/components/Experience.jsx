import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="flex flex-col gap-3 mb-16 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold flex items-center justify-center gap-2">
          <Briefcase className="w-4 h-4 text-cyan-400" /> Professional Track
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Work Experience & <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Proven industry experience working in Agile teams, converting Figma designs to production web apps, and backend API integration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Work Experience Card (Col 7) */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-indigo-500/20 glass-panel-hover flex flex-col gap-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-lg">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Pitchmatter</h3>
                <p className="text-sm font-mono text-indigo-300">Software Engineer Intern – Frontend</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1 text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                <Calendar className="w-3.5 h-3.5" /> Apr. 2026 – Present
              </span>
              <span className="flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" /> Dubai, UAE (Remote)
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Key Contributions & Highlights:
            </h4>
            <ul className="flex flex-col gap-3 text-slate-300 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Contributed to <strong className="text-white">Zynk.ing</strong>, a production web application, by building responsive, reusable frontend components using React.js and TypeScript.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Converted Figma design mockups into pixel-perfect, production-ready web interfaces while ensuring high responsiveness, accessibility, and cross-browser compatibility.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Integrated frontend modules with backend REST APIs, enabling seamless client-server data flow and real-time state updates.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Collaborated closely with product managers, UI/UX designers, and backend engineers in sprint planning, daily stand-ups, and code reviews in Agile workflow.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Education Card (Col 5) */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-cyan-500/20 glass-panel-hover flex flex-col gap-6 bg-gradient-to-br from-slate-900/90 to-slate-950/90">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Trinity College of Engineering & Technology</h3>
              <p className="text-xs font-mono text-cyan-300">Hyderabad, India</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
              <span className="text-indigo-400 font-bold">B.Tech Degree</span>
              <span className="bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Aug. 2022 – May 2025</span>
            </div>

            <h4 className="text-lg font-bold text-white mt-1">
              Bachelor of Technology in Computer Science & Engineering (CSE)
            </h4>

            <p className="text-slate-300 text-xs leading-relaxed">
              Coursework & Foundations: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, System Design, Operating Systems, Web Technologies, and Software Engineering Principles.
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
            <CheckCircle2 className="w-4 h-4" /> Degree Completed · Computer Science Major
          </div>
        </div>

      </div>
    </section>
  );
}
