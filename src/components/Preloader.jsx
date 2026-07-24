import React, { useEffect, useState } from 'react';
import { Terminal, ShieldCheck } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('SYS_INIT :: Loading Core Modules...');

  useEffect(() => {
    const statuses = [
      'SYS_INIT :: Loading Core Modules...',
      'CONNECT :: React, Node.js & Django REST APIs...',
      'FETCH :: 9 Production Repositories Loaded...',
      'RENDER :: Video HUD & Glass System Ready...'
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current > 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
      setProgress(current);
      if (current > 25 && current <= 50) setStatusText(statuses[1]);
      if (current > 50 && current <= 80) setStatusText(statuses[2]);
      if (current > 80) setStatusText(statuses[3]);
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] bg-[#0b0f19] flex flex-col items-center justify-center px-6 transition-all duration-700">
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full glass-panel p-8 rounded-2xl border border-indigo-500/20 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20">
          <Terminal className="w-8 h-8 animate-pulse" />
        </div>

        <h2 className="text-2xl font-bold text-white tracking-tight mb-2 flex items-center justify-center gap-2">
          Venkatesh Yadagiri <ShieldCheck className="w-5 h-5 text-emerald-400" />
        </h2>
        <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-6">
          Software Engineer Portfolio
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden mb-4 border border-slate-700/50">
          <div
            className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 h-full rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status indicator */}
        <div className="flex justify-between items-center text-xs font-mono text-slate-400">
          <span className="truncate max-w-[260px] text-left">{statusText}</span>
          <span className="text-indigo-400 font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
