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
      cardBg: 'bg-indigo-50/50 border-indigo-200',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      description: 'Master everything required to build modern, interactive, high-performance web applications and design systems.',
      steps: ['HTML5 & Modern Semantics', 'Modern CSS3, Flexbox & Grid', 'JavaScript ES6+ & TypeScript', 'React 19 & Tailwind CSS'],
      primaryLang: 'html'
    },
    {
      title: 'Fullstack & Backend Engineer',
      level: 'Intermediate to Pro',
      cardBg: 'bg-cyan-50/50 border-cyan-200',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      description: 'Connect databases, write robust server APIs, manage asynchronous operations, and handle enterprise state.',
      steps: ['Node.js & Express REST APIs', 'Python Django & Flask Backends', 'PostgreSQL & MongoDB Schemas', 'AJAX, JSON & Microservices'],
      primaryLang: 'nodejs'
    },
    {
      title: 'Systems & Performance Engineer',
      level: 'Advanced Systems',
      cardBg: 'bg-amber-50/50 border-amber-200',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      description: 'Build memory-safe, ultra-low latency infrastructure, operating engines, and native high-speed services.',
      steps: ['C & Low-Level Memory Models', 'C++ Object Paradigms & STL', 'Go Concurrency & Goroutines', 'Rust Memory Safety & Ownership'],
      primaryLang: 'rust'
    },
    {
      title: 'Data Scientist & AI Specialist',
      level: 'Data & Intelligence',
      cardBg: 'bg-violet-50/50 border-violet-200',
      badgeColor: 'bg-violet-100 text-violet-800 border-violet-300',
      description: 'Analyze large-scale datasets, build machine learning models, train neural networks, and visualize insights.',
      steps: ['Python & Statistics Foundations', 'NumPy Vectorization & Pandas', 'Matplotlib Visualizations', 'Machine Learning & Deep AI'],
      primaryLang: 'ai'
    },
    {
      title: 'Enterprise & Mobile Engineer',
      level: 'Enterprise Scale',
      cardBg: 'bg-rose-50/50 border-rose-200',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      description: 'Develop enterprise-grade multi-tier applications and native mobile platforms across Apple and Android ecosystems.',
      steps: ['Java Enterprise & Spring', 'C# & .NET Cloud Framework', 'Kotlin Modern Android Dev', 'Swift iOS Native Applications'],
      primaryLang: 'java'
    },
    {
      title: 'Computer Science & Security',
      level: 'Core Foundations',
      cardBg: 'bg-emerald-50/50 border-emerald-200',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      description: 'Crack coding interviews with data structures & algorithms and defend infrastructure against modern threats.',
      steps: ['Data Structures (Trees & Graphs)', 'Algorithm Complexity (Big-O)', 'Cyber Security & OWASP Top 10', 'Linux Bash Automation & Ops'],
      primaryLang: 'dsa'
    }
  ];

  return (
    <section className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Learning Paths</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Developer Career Roadmaps
          </h2>
          <p className="mt-4 text-base text-slate-600">
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

                <h3 className="text-xl font-bold text-slate-900 mt-4">{map.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {map.description}
                </p>

                {/* Milestone Steps */}
                <div className="mt-6 space-y-3">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                    Key Milestones
                  </div>
                  {map.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-3 text-xs text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-white border border-slate-300 flex items-center justify-center font-mono text-[10px] text-indigo-700 font-bold shrink-0 shadow-2xs">
                        {sIdx + 1}
                      </div>
                      <span className="font-semibold">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onStartTrack(map.primaryLang)}
                className="mt-8 w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-300 transition flex items-center justify-center space-x-2 cursor-pointer shadow-2xs"
              >
                <span>Follow This Path</span>
                <Rocket className="w-3.5 h-3.5 text-indigo-600" />
              </button>
            </div>
          ))}
        </div>

        {/* DevAura Advantage Cards */}
        <div className="mt-20 pt-16 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-800 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Zero Latency Playgrounds</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Run HTML, CSS, JavaScript, and SQL entirely in your browser memory. Instant visual feedback with zero waiting.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-cyan-100 text-cyan-800 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Modern 2026 Standards</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Learn modern ES6+ JS, React 19 hooks, and Tailwind CSS v4 instead of outdated 2000s boilerplate.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-amber-100 text-amber-800 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">100% Free & Open</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Every tutorial, cheat sheet, code editor, and interactive challenge is completely accessible to everyone without paywalls.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
