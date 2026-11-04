import React, { useState, useMemo } from 'react';
import { languageTracks } from '../../data/tutorials';
import { LanguageLogo } from '../common/LanguageLogo';
import { ArrowRight, Search, BookOpen } from 'lucide-react';

interface LanguageCardsProps {
  onSelectTrack: (langId: string) => void;
  onOpenPlayground?: (code?: string, lang?: string) => void;
  onOpenExercises?: (langId?: string) => void;
}

const trackW3Meta: Record<string, { shortName: string; shortDesc: string }> = {
  html: { shortName: 'HTML', shortDesc: 'The building blocks of every webpage' },
  css: { shortName: 'CSS', shortDesc: 'Style and layout for web pages' },
  javascript: { shortName: 'JavaScript', shortDesc: 'Interactive and dynamic web pages' },
  sql: { shortName: 'SQL', shortDesc: 'Query and manage databases' },
  python: { shortName: 'Python', shortDesc: 'Popular language for web, data & AI' },
  java: { shortName: 'Java', shortDesc: 'Object-oriented programming language' },
  c: { shortName: 'C', shortDesc: 'A powerful general-purpose language' },
  cpp: { shortName: 'C++', shortDesc: 'The language behind games & engines' },
  csharp: { shortName: 'C#', shortDesc: 'Modern language for Windows, apps & games' },
  react: { shortName: 'React', shortDesc: 'JavaScript library for user interfaces' },
  mysql: { shortName: 'MySQL', shortDesc: 'Popular open-source relational database' },
  nodejs: { shortName: 'Node.js', shortDesc: 'JavaScript runtime built on Chrome V8' },
  php: { shortName: 'PHP', shortDesc: 'Web server-side scripting language' },
  typescript: { shortName: 'TypeScript', shortDesc: 'Typed superset of JavaScript' },
  angular: { shortName: 'Angular', shortDesc: 'Web application framework by Google' },
  angularjs: { shortName: 'AngularJS', shortDesc: 'MVC framework for dynamic web apps' },
  git: { shortName: 'Git', shortDesc: 'Distributed version control system' },
  postgresql: { shortName: 'PostgreSQL', shortDesc: 'Advanced open-source relational database' },
  mongodb: { shortName: 'MongoDB', shortDesc: 'Document-based NoSQL database' },
  r: { shortName: 'R', shortDesc: 'Statistical computing and data graphics' },
  go: { shortName: 'Go', shortDesc: 'Fast, open-source language by Google' },
  kotlin: { shortName: 'Kotlin', shortDesc: 'Modern programming language for Android' },
  rust: { shortName: 'Rust', shortDesc: 'Memory-safe systems programming' },
  swift: { shortName: 'Swift', shortDesc: 'Modern programming language by Apple' },
  aws: { shortName: 'AWS', shortDesc: 'Cloud computing platform by Amazon' },
  django: { shortName: 'Django', shortDesc: 'Python web framework for rapid development' },
  jquery: { shortName: 'jQuery', shortDesc: 'Fast, small JavaScript DOM library' },
  excel: { shortName: 'Excel', shortDesc: 'Spreadsheets and formulas for analysis' },
  numpy: { shortName: 'NumPy', shortDesc: 'Python library for numerical computing' },
  pandas: { shortName: 'Pandas', shortDesc: 'Python library for data manipulation' },
  datascience: { shortName: 'Data Science', shortDesc: 'Analyze data, build models & insights' },
  dsa: { shortName: 'DSA', shortDesc: 'Data structures & algorithms fundamentals' },
  cybersecurity: { shortName: 'Cyber Security', shortDesc: 'Protect systems, networks & data' },
};

export const LanguageCards: React.FC<LanguageCardsProps> = ({
  onSelectTrack,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Tracks' },
    { id: 'Web Development', label: 'Web Development' },
    { id: 'Programming Languages', label: 'Programming' },
    { id: 'Web Frameworks', label: 'Frameworks' },
    { id: 'Backend & Databases', label: 'Backend & DB' },
    { id: 'Data Science & AI', label: 'Data Science & AI' },
    { id: 'Computer Science & Security', label: 'CS & Security' },
  ];

  const filteredTracks = useMemo(() => {
    return languageTracks.filter(track => {
      const meta = trackW3Meta[track.id] || { shortName: track.name, shortDesc: track.tagline };
      const matchesCategory = selectedCategory === 'all' || track.category === selectedCategory;
      const matchesSearch = !searchQuery.trim() || 
        track.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        meta.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        meta.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Comprehensive {languageTracks.length}+ Technology Catalog</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-4xl">
            Choose Your Learning Track
          </h2>
          
        </div>

        {/* Filter Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white dark:bg-[#0d1424] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 33+ languages..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-2xs transition font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* W3Schools Clean 4-Column Minimalist Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTracks.map(track => {
            const meta = trackW3Meta[track.id] || { shortName: track.name, shortDesc: track.tagline };
            return (
              <div
                key={track.id}
                onClick={() => onSelectTrack(track.id)}
                className="group relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 flex flex-col items-center text-center justify-between shadow-2xs hover:shadow-xl hover:-translate-y-1.5 cursor-pointer"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Authentic Language Logo */}
                  <div className="h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <LanguageLogo id={track.id} size={56} />
                  </div>

                  {/* Language Name */}
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                    {meta.shortName}
                  </h3>

                  {/* Concise 1-line Description */}
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed min-h-[40px] flex items-center justify-center">
                    {meta.shortDesc}
                  </p>
                </div>

                {/* Minimalist Learn Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTrack(track.id);
                  }}
                  className="w-full mt-5 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-600 text-slate-700 dark:text-slate-200 group-hover:text-white font-bold text-xs transition duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Learn {meta.shortName}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredTracks.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm font-semibold text-slate-600">No tracks found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs font-bold text-indigo-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};