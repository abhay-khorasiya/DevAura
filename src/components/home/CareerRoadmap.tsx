import React from 'react';
import { 
  Compass, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Rocket
} from 'lucide-react';

interface CareerRoadmapProps {
  onStartTrack: (langId: string) => void;
}

export const CareerRoadmap: React.FC<CareerRoadmapProps> = ({ onStartTrack }) => {
  const roadmaps = [
    {
      title: 'Frontend Web Architect',
      level: 'Beginner to Advanced',
      cardBg: 'bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-900/50',
      badgeColor: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
      description: 'Master everything required to build modern, interactive, high-performance web applications and design systems.',
      steps: ['HTML5 & Modern Semantics', 'Modern CSS3, Flexbox & Grid', 'JavaScript ES6+ & TypeScript', 'React 19 & Tailwind CSS'],
      primaryLang: 'html'
    },
    {
      title: 'Fullstack & Backend Engineer',
      level: 'Intermediate to Pro',
      cardBg: 'bg-cyan-50/50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-900/50',
      badgeColor: 'bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800',
      description: 'Connect databases, write robust server APIs, manage asynchronous operations, and handle enterprise state.',
      steps: ['Node.js & Express REST APIs', 'Python Django & Flask Backends', 'PostgreSQL & MongoDB Schemas', 'AJAX, JSON & Microservices'],
      primaryLang: 'nodejs'
    },
    {
      title: 'Systems & Performance Engineer',
      level: 'Advanced Systems',
      cardBg: 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50',
      badgeColor: 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800',
      description: 'Build memory-safe, ultra-low latency infrastructure, operating engines, and native high-speed services.',
      steps: ['C & Low-Level Memory Models', 'C++ Object Paradigms & STL', 'Go Concurrency & Goroutines', 'Rust Memory Safety & Ownership'],
      primaryLang: 'rust'
    },
    {
      title: 'Data Scientist & AI Specialist',
      level: 'Data & Intelligence',
      cardBg: 'bg-violet-50/50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-900/50',
      badgeColor: 'bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-300 border-violet-300 dark:border-violet-800',
      description: 'Analyze large-scale datasets, build machine learning models, train neural networks, and visualize insights.',
      steps: ['Python & Statistics Foundations', 'NumPy Vectorization & Pandas', 'Matplotlib Visualizations', 'Machine Learning & Deep AI'],
      primaryLang: 'ai'
    },
    {
      title: 'Enterprise & Mobile Engineer',
      level: 'Enterprise Scale',
      cardBg: 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/50',
      badgeColor: 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-800',
      description: 'Develop enterprise-grade multi-tier applications and native mobile platforms across Apple and Android ecosystems.',
      steps: ['Java Enterprise & Spring', 'C# & .NET Cloud Framework', 'Kotlin Modern Android Dev', 'Swift iOS Native Applications'],
      primaryLang: 'java'
    },
    {
      title: 'Computer Science & Security',
      level: 'Core Foundations',
      cardBg: 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50',
      badgeColor: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
      description: 'Crack coding interviews with data structures & algorithms and defend infrastructure against modern threats.',
      steps: ['Data Structures (Trees & Graphs)', 'Algorithm Complexity (Big-O)', 'Cyber Security & OWASP Top 10', 'Linux Bash Automation & Ops'],
      primaryLang: 'dsa'
    }
  ];

  return (
    <section className="py-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090d16] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Structured Learning Paths</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Developer Career Roadmaps
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Stop wondering what to learn next. Follow clear, guided progression paths designed to take you from foundational basics to industry readiness.
          </p>
        </div>

        {/* Roadmaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmaps.map((map, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 border ${map.cardBg} flex flex-col justify-between shadow-2xs hover:shadow-md transition`}
            >
              <div>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${map.badgeColor} uppercase tracking-wider`}>
                  {map.level}
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4">{map.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {map.description}
                </p>

                {/* Milestone Steps */}
                <div className="mt-6 space-y-3">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
                    Key Milestones
                  </div>
                  {map.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-3 text-xs text-slate-800 dark:text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center font-mono text-[10px] text-indigo-700 dark:text-indigo-400 font-bold shrink-0 shadow-2xs">
                        {sIdx + 1}
                      </div>
                      <span className="font-semibold">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800">
                <button
                  onClick={() => onStartTrack(map.primaryLang)}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition shadow-2xs cursor-pointer"
                >
                  <span>Explore {map.title.split(' ')[0]} Path</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};