import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onSelectTrack: (langId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectTrack }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#070b13] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-base transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950 border border-indigo-300 dark:border-indigo-800 flex items-center justify-center text-indigo-700 dark:text-indigo-300 shadow-2xs">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-slate-900 dark:text-white">
                Dev<span className="text-indigo-600 dark:text-indigo-400">Aura</span>
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              DevAura is the next-generation, high-performance developer learning ecosystem. Fast, interactive, modern, and completely accessible to learners worldwide.
            </p>
          </div>

          {/* Column 1: Core Tutorials */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Core Tutorials
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onSelectTrack('html')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
                  HTML5 Complete Guide
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTrack('css')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
                  CSS3 & Flexbox / Grid
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTrack('javascript')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
                  JavaScript ES6+ & Async
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTrack('python')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
                  Python Programming & AI
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTrack('sql')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
                  SQL Database & Relational
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Modern Tech */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Modern Tracks
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onSelectTrack('react')} className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition cursor-pointer">
                  React 19 Components & Hooks
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTrack('tailwind')} className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer">
                  Tailwind CSS v4 Utilities
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTrack('typescript')} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">
                  TypeScript Generics & Types
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTrack('git')} className="text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition cursor-pointer">
                  Git Version Control & GitHub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition cursor-pointer">
                  Free Learning Resources Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Interactive Suite */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Developer Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('playground')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
                  "Try It Yourself" Sandbox
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quiz')} className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition cursor-pointer">
                  Skill Assessment Quizzes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('exercises')} className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition cursor-pointer">
                  Interactive Code Challenges
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('certificates')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
                  DevAura Certificates
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('references')} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
                  Syntax Reference Guide
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 dark:text-slate-400 gap-4">
          <div>
            &copy; 2026 DevAura Platform. Clean, modern, high-performance developer learning.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};