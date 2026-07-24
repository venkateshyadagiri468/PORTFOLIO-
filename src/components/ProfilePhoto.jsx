import React from 'react';
import { Sparkles, Code2, ShieldCheck } from 'lucide-react';
import venkateshPhoto from '../assets/venkatesh.jpg';

export default function ProfilePhoto() {
  return (
    <div className="relative group w-full max-w-[290px] xs:max-w-[320px] sm:max-w-sm md:max-w-md mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 via-cyan-500 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-700 pointer-events-none" />

      {/* Main Profile Photo Container */}
      <div className="relative rounded-3xl bg-[#0e1626] border border-indigo-500/30 overflow-hidden shadow-2xl shadow-indigo-950/60 transition-all duration-500 transform group-hover:-translate-y-1">
        
        {/* Photo Image Viewport */}
        <div className="relative w-full aspect-[4/5] bg-slate-900 overflow-hidden">
          <img
            src={venkateshPhoto}
            alt="Venkatesh Yadagiri — Software Engineer"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Elegant gradient overlay for text readability at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1626] via-transparent to-transparent opacity-90" />

          {/* Floating Top Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
            <span className="flex items-center gap-1 sm:gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-indigo-500/30 text-[10px] sm:text-xs font-mono text-cyan-300 shadow-lg">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
              <span>Full Stack Engineer</span>
            </span>
          </div>

          {/* Floating Bottom Info Badge */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 p-3 sm:p-4 rounded-2xl glass-panel border border-white/10 flex items-center justify-between backdrop-blur-xl">
            <div className="flex flex-col min-w-0 pr-2">
              <span className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1 truncate">
                Venkatesh Yadagiri <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-indigo-300 truncate">
                React · Node.js · Django
              </span>
            </div>
            
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-cyan-400 shadow-md shrink-0">
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
