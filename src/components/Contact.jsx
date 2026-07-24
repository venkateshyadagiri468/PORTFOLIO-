import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '', permission: true });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormState({ name: '', email: '', message: '', permission: true });
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="flex flex-col gap-2.5 sm:gap-3 mb-10 sm:mb-16 text-center max-w-3xl mx-auto">
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center justify-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-indigo-400" /> Get In Touch
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Let's Build Something <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Extraordinary Together</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-base">
          Open for full-time software engineering roles, backend API projects, and full-stack web application development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Left Column: Direct Info Cards (Col 5) */}
        <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 justify-between">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/20 glass-panel-hover flex flex-col gap-5 sm:gap-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              Contact Details <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Reach out directly via email, phone, or LinkedIn. I typically respond within 24 hours.
            </p>

            <div className="flex flex-col gap-3.5 sm:gap-4 pt-1">
              
              {/* Email */}
              <a
                href="mailto:venkateshyadagiri468@gmail.com"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider">Email Address</span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                    venkateshyadagiri468@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+917702920468"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider">Phone / WhatsApp</span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                    +91 7702920468
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider">Base Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate">
                    Hyderabad, India (Remote Available)
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 to-slate-900/40 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 shrink-0" />
            <p className="text-[11px] sm:text-xs text-slate-300">
              Open for full-time opportunities, technical interviews, and engineering collaborations.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form (Col 7) */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/20 flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Send Me a Message</h3>

            {/* Name */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="e.g. Alex Johnson"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-xs sm:text-sm transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider">Your Email</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-xs sm:text-sm transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider">Message / Inquiry</label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Hello Venkatesh, we came across your portfolio and would like to discuss an opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-xs sm:text-sm transition-colors resize-none"
              />
            </div>

            {/* Permission Checkbox */}
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="permission"
                checked={formState.permission}
                onChange={(e) => setFormState({ ...formState, permission: e.target.checked })}
                className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-indigo-600 focus:ring-indigo-500 shrink-0"
              />
              <label htmlFor="permission" className="text-[11px] sm:text-xs text-slate-400 cursor-pointer leading-tight">
                I give permission to contact me at this email address.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-xl ${
                status === 'success'
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                  : status === 'sending'
                  ? 'bg-indigo-700 opacity-70 cursor-not-allowed text-white'
                  : 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-indigo-600/30 hover:scale-[1.01]'
              }`}
            >
              {status === 'sending' ? (
                <>Sending Message...</>
              ) : status === 'success' ? (
                <>
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" /> Sent Successfully ✓
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
