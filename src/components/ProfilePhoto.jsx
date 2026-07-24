import React from 'react';
import { Sparkles, Code2, ShieldCheck } from 'lucide-react';
import venkateshPhoto from '../assets/venkatesh.jpg';

export default function ProfilePhoto() {
  return (
    <div className="relative group w-full max-w-md mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 via-cyan-500 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-700" />

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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1626] via-transparent to-transparent opacity-80" />

          {/* Floating Top Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-indigo-500/30 text-[11px] font-mono text-cyan-300 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full Stack Engineer</span>
            </span>
          </div>

          {/* Floating Bottom Info Badge */}
          <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                Venkatesh Yadagiri <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </span>
              <span className="text-[11px] font-mono text-indigo-300">
                React · Node.js · Django
              </span>
            </div>
            
            <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-cyan-400 shadow-md">
              <Code2 className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
