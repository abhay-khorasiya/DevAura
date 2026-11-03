import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Code2, HelpCircle, ArrowRight } from 'lucide-react';
import { languageTracks } from '../../data/tutorials';
import { referenceItems } from '../../data/references';
import { exerciseItems } from '../../data/exercises';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (langId: string, chapterId: string) => void;
  onOpenPlayground: (code?: string, lang?: string) => void;
  onOpenExercises: () => void;
  onOpenReferences: () => void;
  onOpenResources?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectChapter,
  onOpenPlayground,
  onOpenExercises,
  onOpenReferences,
  onOpenResources,
}) => {
  const [query, setQuery] = useState('');

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter tutorials
  const matchedTutorials: { langId: string; langName: string; chapterId: string; title: string; summary: string }[] = [];
  languageTracks.forEach(track => {
    track.chapters.forEach(ch => {
      if (
        ch.title.toLowerCase().includes(query.toLowerCase()) ||
        ch.summary.toLowerCase().includes(query.toLowerCase()) ||
        track.name.toLowerCase().includes(query.toLowerCase())
      ) {
        matchedTutorials.push({
          langId: track.id,
          langName: track.name,
          chapterId: ch.id,
          title: ch.title,
          summary: ch.summary,
        });
      }
    });
  });

  // Filter references
  const matchedRefs = referenceItems.filter(
    r =>
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.description.toLowerCase().includes(query.toLowerCase()) ||
      r.language.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/70">
          <Search className="w-5 h-5 text-indigo-600 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search tutorials, code references, tags, exercises..."
            className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-base focus:outline-none"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg transition"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block ml-2 px-2 py-0.5 text-xs font-mono text-slate-500 bg-white border border-slate-200 rounded-md shadow-2xs">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          {/* Quick Actions if query is empty */}
          {!query && (
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                Quick Shortcuts
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenPlayground();
                  }}
                  className="flex items-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-indigo-300 text-left transition group"
                >
                  <Code2 className="w-5 h-5 text-indigo-600 mr-3 shrink-0 group-hover:scale-110 transition" />
                  <div>
                    <div className="text-sm font-bold text-slate-800">Playground</div>
                    <div className="text-xs text-slate-500">Live code runner</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenExercises();
                  }}
                  className="flex items-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-cyan-300 text-left transition group"
                >
                  <HelpCircle className="w-5 h-5 text-cyan-600 mr-3 shrink-0 group-hover:scale-110 transition" />
                  <div>
                    <div className="text-sm font-bold text-slate-800">Exercises</div>
                    <div className="text-xs text-slate-500">Code challenges</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    if (onOpenResources) onOpenResources();
                  }}
                  className="flex items-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-amber-300 text-left transition group"
                >
                  <BookOpen className="w-5 h-5 text-amber-600 mr-3 shrink-0 group-hover:scale-110 transition" />
                  <div>
                    <div className="text-sm font-bold text-slate-800">Free Resources</div>
                    <div className="text-xs text-slate-500">Color studio & sheets</div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Tutorials matches */}
          {matchedTutorials.length > 0 && (
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2 flex items-center">
                <BookOpen className="w-3.5 h-3.5 mr-1.5 text-indigo-600" />
                Tutorial Lessons ({matchedTutorials.length})
              </div>
              <div className="space-y-1.5">
                {matchedTutorials.slice(0, 6).map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onClose();
                      onSelectChapter(item.langId, item.chapterId);
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left border border-transparent hover:border-slate-200 transition"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 border border-indigo-200 uppercase">
                          {item.langName}
                        </span>
                        <span className="text-sm font-semibold text-slate-800">{item.title}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1 line-clamp-1">{item.summary}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Reference Matches */}
          {matchedRefs.length > 0 && (
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2 flex items-center">
                <Code2 className="w-3.5 h-3.5 mr-1.5 text-cyan-600" />
                References & Cheat Sheets
              </div>
              <div className="space-y-1.5">
                {matchedRefs.map(ref => (
                  <button
                    key={ref.id}
                    onClick={() => {
                      onClose();
                      onOpenReferences();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left border border-transparent hover:border-slate-200 transition"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono text-cyan-800 font-bold bg-cyan-100 px-2 py-0.5 rounded border border-cyan-200">
                          {ref.name}
                        </span>
                        <span className="text-xs text-slate-500 uppercase font-semibold">{ref.category}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1 line-clamp-1">{ref.description}</div>
                    </div>
                    <span className="text-xs font-bold text-indigo-600">View</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && matchedTutorials.length === 0 && matchedRefs.length === 0 && (
            <div className="py-12 text-center text-slate-400">
              <Search className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="text-base font-semibold text-slate-600">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for &quot;html&quot;, &quot;flexbox&quot;, &quot;functions&quot;, or &quot;sql&quot;.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
