import React, { useState } from 'react';
import {
  Search,
  Copy,
  Check,
  Code2,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { referenceItems } from '../../data/references';

interface ReferenceHubProps {
  onOpenPlayground: (code?: string, lang?: string) => void;
}

export const ReferenceHub: React.FC<ReferenceHubProps> = ({ onOpenPlayground }) => {
  const [selectedLang, setSelectedLang] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = referenceItems.filter(item => {
    const matchesLang = selectedLang === 'all' || item.language === selectedLang;
    const matchesQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLang && matchesQuery;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const languages = [
    { id: 'all', label: 'All References' },
    { id: 'html', label: 'HTML Tags' },
    { id: 'css', label: 'CSS Properties' },
    { id: 'javascript', label: 'JS Methods' },
    { id: 'sql', label: 'SQL Commands' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Syntax & Reference Guide</h1>


        {/* Language Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {languages.map(l => (
            <button
              key={l.id}
              onClick={() => setSelectedLang(l.id)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${selectedLang === l.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white dark:bg-[#0d1424] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-2xs'
                }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of References */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div
            key={item.id}
            className="rounded-2xl p-6 bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition flex flex-col justify-between shadow-sm hover:shadow-md group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-mono font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  {item.language.toUpperCase()}
                </span>
                <span className="text-[11px] text-slate-400 uppercase font-semibold">
                  {item.category}
                </span>
              </div>

              <h3 className="text-lg font-mono font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                {item.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                {item.description}
              </p>

              {/* Syntax snippet */}
              <div className="mt-4 p-3 rounded-xl bg-[#0f172a] border border-slate-800 font-mono text-xs text-indigo-200 overflow-x-auto relative shadow-inner">
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-slate-800 text-[10px] text-slate-400 font-sans">
                  <span>SYNTAX:</span>
                  <button
                    onClick={() => handleCopy(item.id, item.syntax)}
                    className="hover:text-white flex items-center space-x-1"
                  >
                    {copiedId === item.id ? <Check className="w-3 h-3 text-indigo-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === item.id ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="whitespace-pre-wrap">{item.syntax}</pre>
              </div>
            </div>

            {/* Action to test in playground */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onOpenPlayground(item.example, item.language)}
                className="flex items-center space-x-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition cursor-pointer"
              >
                <Code2 className="w-4 h-4" />
                <span>Try Example in Sandbox</span>
              </button>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-400">
          No reference items match your search.
        </div>
      )}

    </div>
  );
};
