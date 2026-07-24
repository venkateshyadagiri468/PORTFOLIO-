import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Settings, Radio, Sparkles, Activity } from 'lucide-react';
import venkateshPhoto from '../assets/venkatesh.jpg';

export default function VideoFramePhoto() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [hudActive, setHudActive] = useState(true);

  return (
    <div 
      className="relative group w-full max-w-md mx-auto"
      onMouseEnter={() => setHudActive(true)}
    >
      {/* Outer ambient glow behind card */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700 animate-pulse-slow" />

      {/* Main 4K Video HUD Player Container */}
      <div className="relative rounded-2xl bg-[#0e1626] border border-indigo-500/30 overflow-hidden shadow-2xl shadow-indigo-950/60 transition-all duration-500 transform group-hover:-translate-y-1">
        
        {/* Top Video HUD Status Header Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex justify-between items-center text-xs font-mono text-white/90 backdrop-blur-[2px]">
          {/* Live REC Indicator */}
          <div className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full border border-red-500/30 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="font-bold text-red-400 tracking-wider">REC</span>
            <span className="text-white/60 text-[10px]">● LIVE</span>
          </div>

          {/* Video Resolution & Framerate Badge */}
          <div className="flex items-center gap-2">
            <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-[10px] font-bold px-2.5 py-0.5 rounded-md backdrop-blur-md">
              4K UHD 60FPS
            </span>
            <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-bold px-2 py-0.5 rounded-md hidden sm:inline-block">
              HDR10
            </span>
          </div>
        </div>

        {/* Video Player Media Viewport */}
        <div className="relative w-full aspect-[4/5] bg-slate-900 overflow-hidden flex items-center justify-center">
          
          {/* Profile Photo Image */}
          <img
            src={venkateshPhoto}
            alt="Venkatesh Yadagiri — Software Engineer"
            className={`w-full h-full object-cover object-top transition-transform duration-700 ${
              isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-90'
            }`}
          />

          {/* Futuristic HUD Grid Scanlines Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1626] via-transparent to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

          {/* Center Play/Pause Interactive Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px]">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-indigo-600/80 hover:bg-indigo-500 text-white flex items-center justify-center border-2 border-indigo-400/50 shadow-xl shadow-indigo-600/50 hover:scale-110 transition-all duration-300 cursor-pointer"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white translate-x-0.5" />}
            </button>
          </div>

          {/* Bottom Floating Equalizer Graphic overlay when playing */}
          {isPlaying && (
            <div className="absolute bottom-16 left-6 right-6 z-10 flex items-end justify-between pointer-events-none">
              <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="text-[10px] font-mono text-cyan-300">AUDIO_STREAM // STABLE</span>
              </div>
              
              {/* Equalizer Wave Lines */}
              <div className="flex items-end gap-1 h-5 bg-black/50 px-2 py-1 rounded-md border border-white/10">
                <div className="w-1 bg-indigo-400 rounded-full animate-eq-1" />
                <div className="w-1 bg-cyan-400 rounded-full animate-eq-2" />
                <div className="w-1 bg-emerald-400 rounded-full animate-eq-3" />
                <div className="w-1 bg-indigo-400 rounded-full animate-eq-4" />
                <div className="w-1 bg-cyan-400 rounded-full animate-eq-5" />
              </div>
            </div>
          )}
        </div>

        {/* Video Scrubber & Control Footer Bar */}
        <div className="p-4 bg-[#0e1626] border-t border-indigo-500/20 flex flex-col gap-2.5 z-20 relative">
          
          {/* Timeline Scrubber Bar */}
          <div className="relative w-full bg-slate-800 h-1.5 rounded-full overflow-hidden cursor-pointer group/scrub">
            <div className={`h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 rounded-full transition-all duration-300 ${
              isPlaying ? 'w-3/4 animate-pulse' : 'w-1/2'
            }`} />
            {/* Scrubber Knob */}
            <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-indigo-500 scale-0 group-hover/scrub:scale-100 transition-transform" />
          </div>

          {/* Video Control Buttons & Time Display */}
          <div className="flex justify-between items-center text-xs font-mono text-slate-300">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-cyan-400 transition-colors"
                aria-label="Toggle Play State"
              >
                {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-cyan-400 transition-colors"
                aria-label="Toggle Mute"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-slate-300" />}
              </button>

              <span className="text-[11px] text-slate-400 font-mono tracking-tight">
                {isPlaying ? "00:04:28" : "00:00:00"} <span className="text-slate-600">/ 04:20</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                PRO 4K
              </span>
              <button className="hover:text-cyan-400 transition-colors" aria-label="Video Settings">
                <Settings className="w-4 h-4" />
              </button>
              <button className="hover:text-cyan-400 transition-colors" aria-label="Fullscreen">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
