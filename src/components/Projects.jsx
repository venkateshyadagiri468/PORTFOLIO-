import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Star, Sparkles, Code } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectsData = [
    {
      title: 'HabitFlow',
      category: 'Full-Stack',
      description: 'Built a full-stack, production-grade habit tracking platform featuring secure authentication, streak tracking, analytics, and progress visualization.',
      tags: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JavaScript'],
      github: 'https://github.com/venkateshyadagiri468/Habitflow',
      featured: true,
      badge: 'Featured Project'
    },
    {
      title: 'GrowEasy AI Importer',
      category: 'AI & ML',
      description: 'Developed an AI-powered platform for importing and processing product information through an intuitive, guided user interface with automated data extraction.',
      tags: ['React.js', 'TypeScript', 'Node.js', 'AI Extraction'],
      github: 'https://github.com/venkateshyadagiri468/groweasy-ai-importer',
      featured: true,
      badge: 'AI Automation'
    },
    {
      title: 'Healthcare Backend System',
      category: 'Backend',
      description: 'Production-ready backend built with Django REST Framework featuring secure JWT auth, role-based authorization, and 15+ REST endpoints for appointment & doctor management.',
      tags: ['Python', 'Django', 'DRF', 'PostgreSQL', 'JWT Auth'],
      github: 'https://github.com/venkateshyadagiri468/healthcare-backend-django',
      featured: true,
      badge: '15+ REST APIs'
    },
    {
      title: 'Sentiment Analysis System',
      category: 'AI & ML',
      description: 'NLP-based sentiment analysis system for movie review classification, with a full preprocessing pipeline covering tokenization, TF-IDF vectorization, and ML model evaluation.',
      tags: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF'],
      github: 'https://github.com/venkateshyadagiri468/SENTIMENT_ANALYSIS_PROJECT',
      featured: false,
      badge: 'Machine Learning'
    },
    {
      title: 'Expense Tracker Pro',
      category: 'Full-Stack',
      description: 'Advanced financial management and budgeting dashboard featuring category analytics, expense breakdown charts, and real-time transaction tracking.',
      tags: ['React.js', 'Node.js', 'Chart Analytics', 'CSS3'],
      github: 'https://github.com/venkateshyadagiri468/Expense-tracker-pro.git',
      featured: false,
      badge: 'Finance App'
    },
    {
      title: 'DocFlow',
      category: 'Full-Stack',
      description: 'Collaborative document management and workflow automation platform designed for efficient handling, status tracking, and file organizational pipelines.',
      tags: ['React.js', 'TypeScript', 'Node.js', 'REST API'],
      github: 'https://github.com/venkateshyadagiri468/Docflow',
      featured: false,
      badge: 'Workflow Automation'
    },
    {
      title: 'AI Prompt Library',
      category: 'AI & ML',
      description: 'Prompt management repository enabling users to curating, test, tag, and quickly copy optimized prompts for ChatGPT, Midjourney, and LLM applications.',
      tags: ['React.js', 'Node.js', 'AI Prompts', 'UI Library'],
      github: 'https://github.com/venkateshyadagiri468/Ai-prompt-library',
      featured: false,
      badge: 'AI Utility'
    },
    {
      title: 'Furniture HUB',
      category: 'Frontend & Web',
      description: 'Sleek e-commerce store user interface featuring dynamic product catalog, interactive cart management, fluid filtering, and modern responsive layouts.',
      tags: ['React.js', 'Tailwind CSS', 'E-Commerce UI'],
      github: 'https://github.com/venkateshyadagiri468/Furniture-HUB',
      featured: false,
      badge: 'E-Commerce UI'
    },
    {
      title: 'Snake Game',
      category: 'Frontend & Web',
      description: 'Classic arcade game developed with HTML5 Canvas and JavaScript, featuring smooth grid rendering, score tracking, responsive controls, and custom audio cues.',
      tags: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Arcade Game'],
      github: 'https://github.com/venkateshyadagiri468/Snake-Game',
      featured: false,
      badge: 'Canvas Game'
    }
  ];

  const filters = ['All', 'Full-Stack', 'AI & ML', 'Backend', 'Frontend & Web'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Section Title */}
      <div className="flex flex-col gap-3 mb-12 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold flex items-center justify-center gap-2">
          <FolderGit2 className="w-4 h-4 text-cyan-400" /> Portfolio Showcase
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Featured Software & <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">GitHub Projects</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Explore production web apps, AI data tools, Django backend systems, and interactive UI applications built with clean code practices.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              activeFilter === f
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/30 scale-105'
                : 'glass-panel text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className={`glass-panel rounded-3xl p-6 border ${
              project.featured ? 'border-indigo-500/30 bg-slate-900/80' : 'border-slate-800'
            } glass-panel-hover flex flex-col justify-between group relative`}
          >
            <div>
              {/* Badge & GitHub Link Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  {project.badge}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 flex items-center gap-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer View Repository */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 hover:text-cyan-300 transition-colors"
              >
                View Repository <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
