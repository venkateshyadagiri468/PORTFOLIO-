import React from 'react';
import { Code2, Server, Database, Wrench, Cpu, CheckCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-indigo-500 to-blue-500',
      skills: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend Frameworks',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      skills: ['React.js', 'Tailwind CSS', 'Vite', 'Responsive Layouts', 'State Management']
    },
    {
      title: 'Backend Systems & APIs',
      icon: Server,
      color: 'from-purple-500 to-indigo-500',
      skills: ['Node.js', 'Express.js', 'Django', 'Django REST Framework', 'RESTful API Design']
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      skills: ['PostgreSQL', 'MySQL', 'Relational Schemas', 'ORM Queries']
    },
    {
      title: 'Developer Tools & DevOps',
      icon: Wrench,
      color: 'from-amber-500 to-orange-500',
      skills: ['Git', 'GitHub', 'GitHub Actions', 'Postman', 'VS Code', 'Docker', 'Linux', 'Vercel', 'Figma', 'Supabase']
    },
    {
      title: 'Core Computer Science',
      icon: CheckCircle,
      color: 'from-indigo-400 to-cyan-400',
      skills: ['Data Structures & Algorithms', 'System Design', 'OOP Principles', 'MVC Architecture', 'JWT Auth & Security']
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="flex flex-col gap-3 mb-16 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Technical Expertise
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Tools, Frameworks & <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Engineering Stack</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Proven proficiency across modern web technologies, scalable backend architectures, and database design.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <div
              key={cat.title}
              className="glass-panel p-6 rounded-3xl border border-indigo-500/15 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-lg`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Stack</span>
                <span className="text-indigo-400">● Active</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
