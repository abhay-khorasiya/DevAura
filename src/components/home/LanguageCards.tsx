import React, { useState, useMemo } from 'react';
import { languageTracks } from '../../data/tutorials';
import { 
  FileCode2, 
  Palette, 
  Sparkles, 
  Terminal, 
  Database, 
  Atom, 
  Wind, 
  ArrowRight,
  Code2,
  CheckSquare,
  Search,
  Coffee,
  Cpu,
  Zap,
  ShieldCheck,
  Smartphone,
  Gem,
  Globe,
  BarChart2,
  Layers,
  Server,
  Binary,
  Table,
  PieChart,
  Brain,
  GitBranch,
  Layout,
  BookOpen
} from 'lucide-react';

interface LanguageCardsProps {
  onSelectTrack: (langId: string) => void;
  onOpenPlayground: (code?: string, lang?: string) => void;
  onOpenExercises: (langId?: string) => void;
}

export const LanguageCards: React.FC<LanguageCardsProps> = ({
  onSelectTrack,
  onOpenPlayground,
  onOpenExercises,
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

  const getIcon = (name: string) => {
    switch (name) {
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-indigo-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-cyan-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-indigo-600" />;
      case 'Database': return <Database className="w-5 h-5 text-orange-600" />;
      case 'Atom': return <Atom className="w-5 h-5 text-sky-600" />;
      case 'Wind': return <Wind className="w-5 h-5 text-teal-600" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-700" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-rose-600" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-violet-600" />;
      case 'Gem': return <Gem className="w-5 h-5 text-rose-600" />;
      case 'Globe': return <Globe className="w-5 h-5 text-indigo-600" />;
      case 'BarChart2': return <BarChart2 className="w-5 h-5 text-blue-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-600" />;
      case 'Server': return <Server className="w-5 h-5 text-green-600" />;
      case 'Binary': return <Binary className="w-5 h-5 text-indigo-600" />;
      case 'Table': return <Table className="w-5 h-5 text-emerald-700" />;
      case 'PieChart': return <PieChart className="w-5 h-5 text-sky-600" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-600" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-red-500" />;
      case 'Layout': return <Layout className="w-5 h-5 text-purple-600" />;
      default: return <Code2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  const filteredTracks = useMemo(() => {
    return languageTracks.filter(track => {
      const matchesCategory = selectedCategory === 'all' || track.category === selectedCategory;
      const matchesSearch = !searchQuery.trim() || 
        track.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>Comprehensive {languageTracks.length}+ Technology Catalog</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Choose Your Learning Track
          </h2>
          <p className="mt-4 text-base text-slate-600">
            From essential web fundamentals and systems programming to databases, data science, machine learning, and cybersecurity. Designed for all skill levels.
          </p>
        </div>

        {/* Filter Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-2xs transition font-medium"
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

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map(track => (
            <div
              key={track.id}
              className="group relative rounded-2xl p-6 bg-white border border-slate-200 hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-lg"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 group-hover:scale-105 transition">
                    {getIcon(track.iconName)}
                  </div>
                  <div className="flex items-center space-x-1.5">
                    {track.category && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                        {track.category}
                      </span>
                    )}
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200">
                      {track.chapters.length} Modules
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition">
                  {track.name}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 mt-0.5">{track.tagline}</p>
                <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                  {track.description}
                </p>

                {/* Track Chapter Preview */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Featured Lessons
                  </div>
                  {track.chapters.slice(0, 2).map(ch => (
                    <div key={ch.id} className="text-xs text-slate-700 flex items-center justify-between">
                      <span className="truncate pr-2 font-medium">• {ch.title}</span>
                      <span className="text-[10px] text-slate-400 shrink-0 font-mono">{ch.readTime}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => onSelectTrack(track.id)}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-indigo-50 hover:bg-indigo-600 text-indigo-800 hover:text-white font-bold text-sm border border-indigo-200 hover:border-indigo-600 transition cursor-pointer"
                >
                  <span>Learn {track.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenPlayground(undefined, track.id)}
                    className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition cursor-pointer"
                  >
                    <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Try Code</span>
                  </button>

                  <button
                    onClick={() => onOpenExercises(track.id)}
                    className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition cursor-pointer"
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Exercises</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
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
