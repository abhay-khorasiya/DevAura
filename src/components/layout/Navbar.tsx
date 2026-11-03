import React, { useState } from 'react';
import { 
  Terminal, 
  Search, 
  Code2, 
  BookOpen, 
  Sparkles, 
  CheckSquare, 
  Menu, 
  X, 
  HelpCircle,
  Sun,
  Moon,
  Award,
  ArrowLeft
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onSelectTrack: (langId: string) => void;
  onSelectChapter: (langId: string, chapterId: string) => void;
  onOpenCommandPalette: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onGoBack?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenCommandPalette,
  isDark,
  onToggleTheme,
  onGoBack,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-40 w-full border-b transition-colors ${
      isDark 
        ? 'border-slate-800 bg-[#090d16]/90 text-white' 
        : 'border-slate-200 bg-white/95 text-slate-800 shadow-xs'
    } backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left Section: Logo & Primary Nav */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-sky-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition">
              <div className={`w-full h-full ${isDark ? 'bg-[#0a0f1d]' : 'bg-white'} rounded-[10px] flex items-center justify-center`}>
                <Terminal className="w-5 h-5 text-indigo-600 group-hover:rotate-12 transition duration-300" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-extrabold text-xl tracking-tight flex items-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Dev<span className="text-indigo-600">Aura</span>
              </span>
            </div>
          </button>

          {/* Back Button (Visible when navigating away from Home) */}
          {currentTab !== 'home' && onGoBack && (
            <button
              onClick={onGoBack}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-2xs'
              }`}
              title="Go back to previous page"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Back</span>
            </button>
          )}

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Tutorials */}
            <button
              onClick={() => onNavigate('tutorial')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                currentTab === 'tutorial'
                  ? isDark ? 'text-indigo-400 bg-slate-800' : 'text-indigo-700 bg-indigo-50 font-bold'
                  : isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Tutorials</span>
            </button>

            {/* Exercises */}
            <button
              onClick={() => onNavigate('exercises')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                currentTab === 'exercises'
                  ? isDark ? 'text-cyan-400 bg-slate-800' : 'text-cyan-700 bg-cyan-50 font-bold'
                  : isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <CheckSquare className="w-4 h-4 text-cyan-500" />
              <span>Exercises</span>
            </button>

            {/* Quizzes */}
            <button
              onClick={() => onNavigate('quiz')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                currentTab === 'quiz'
                  ? isDark ? 'text-amber-400 bg-slate-800' : 'text-amber-700 bg-amber-50 font-bold'
                  : isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-amber-500" />
              <span>Quizzes</span>
            </button>

            {/* References */}
            <button
              onClick={() => onNavigate('references')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                currentTab === 'references'
                  ? isDark ? 'text-indigo-400 bg-slate-800' : 'text-indigo-700 bg-indigo-50 font-bold'
                  : isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span>References</span>
            </button>

            {/* Free Resources */}
            <button
              onClick={() => onNavigate('resources')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                currentTab === 'resources'
                  ? isDark ? 'text-violet-400 bg-slate-800' : 'text-violet-700 bg-violet-50 font-bold'
                  : isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Code2 className="w-4 h-4 text-violet-600" />
              <span>Free Resources</span>
            </button>

            {/* Certificates */}
            <button
              onClick={() => onNavigate('certificates')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                currentTab === 'certificates'
                  ? isDark ? 'text-amber-400 bg-slate-800' : 'text-amber-700 bg-amber-50 font-bold'
                  : isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>Get Certified</span>
            </button>
          </nav>
        </div>

        {/* Right Section: Search & Try It Playground Action */}
        <div className="flex items-center space-x-3">
          {/* Quick Search Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className={`flex items-center space-x-3 px-3.5 py-1.5 rounded-xl border text-sm transition shadow-2xs group ${
              isDark 
                ? 'bg-slate-900 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800' 
                : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-200/70'
            }`}
          >
            <Search className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition" />
            <span className="hidden sm:inline">Search DevAura...</span>
            <kbd className={`hidden md:inline-block px-1.5 py-0.5 text-[11px] font-mono rounded border ${
              isDark ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-white border-slate-200 text-slate-500'
            }`}>
              Ctrl K
            </kbd>
          </button>

          {/* "Try It Yourself" Playground Button */}
          <button
            onClick={() => onNavigate('playground')}
            className="relative inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white font-bold text-sm shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 transition cursor-pointer active:scale-95"
          >
            <Code2 className="w-4 h-4" />
            <span className="tracking-wide">Try It Yourself</span>
          </button>

          {/* Theme Switcher Toggle */}
          <button
            onClick={onToggleTheme}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`p-2 rounded-xl border transition ${
              isDark 
                ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700' 
                : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 py-6 space-y-3 ${isDark ? 'bg-[#090d16] border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('home');
            }}
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
          >
            Home
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('tutorial');
            }}
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
          >
            Tutorials (HTML, CSS, JS, Python...)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('exercises');
            }}
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
          >
            Interactive Exercises
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('quiz');
            }}
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
          >
            Topic Quizzes
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('references');
            }}
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
          >
            Cheat Sheets & References
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('resources');
            }}
            className="w-full text-left py-2 px-3 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
          >
            Free Learning Resources & Tools
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('certificates');
            }}
            className="w-full text-left py-2 px-3 rounded-lg text-amber-600 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
          >
            Free Official Certificates 🏆
          </button>
        </div>
      )}
    </header>
  );
};
