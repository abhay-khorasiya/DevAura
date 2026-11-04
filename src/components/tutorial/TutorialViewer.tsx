import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Play, 
  Copy, 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  Code2,
  Menu,
  X,
  Search,
  Layers
} from 'lucide-react';
import { LanguageTrack, TutorialChapter } from '../../types';
import { AdBanner } from '../common/AdBanner';

interface TutorialViewerProps {
  track: LanguageTrack;
  initialChapterId?: string;
  onSelectChapter?: (langId: string, chapterId: string) => void;
  onGoBack?: () => void;
  onOpenPlayground: (code?: string, lang?: string) => void;
  onOpenExercises: (langId: string) => void;
  onOpenQuiz: (langId: string) => void;
}

// Markdown Table & Rich Formatted Content Parser
function isTableString(str?: string): boolean {
  if (!str) return false;
  const lines = str.trim().split('\n').map(l => l.trim()).filter(Boolean);
  return lines.length >= 2 && lines.some(l => l.includes('|') && /\|?\s*[-:]{2,}\s*[-| :]*\|/.test(l));
}

function parseMarkdownTable(tableStr: string) {
  const lines = tableStr.trim().split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length < 2) return null;

  const sepIdx = lines.findIndex(l => /^[|\s]*:?[-]{2,}:?[|\s-:]*$/.test(l));
  if (sepIdx <= 0) return null;

  const cleanCell = (c: string) => c.trim().replace(/^`+|`+$/g, '');

  const headers = lines[sepIdx - 1]
    .split('|')
    .map(cleanCell)
    .filter((c, i, arr) => (i !== 0 && i !== arr.length - 1) || c.length > 0);

  const rows = lines.slice(sepIdx + 1).map(line => {
    return line
      .split('|')
      .map(cleanCell)
      .filter((c, i, arr) => (i !== 0 && i !== arr.length - 1) || c.length > 0);
  }).filter(r => r.length > 0 && r.some(c => c.length > 0));

  if (headers.length === 0 || rows.length === 0) return null;
  return { headers, rows };
}

function renderInlineFormatting(str: string): React.ReactNode {
  const parts = str.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code key={i} className="px-1.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 font-mono text-xs font-semibold">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={i} className="font-bold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderFormattedText(text: string): React.ReactNode {
  if (!text) return null;
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let listKey = 0;

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${listKey++}`} className="space-y-2 my-3 pl-1 text-sm text-slate-700 dark:text-slate-300">
          {currentList.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
              <span className="flex-1 leading-relaxed text-sm sm:text-base text-slate-700 dark:text-slate-300">
                {renderInlineFormatting(item)}
              </span>
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith('>')) {
      flushList();
      const noteContent = trimmed.replace(/^>\s*/, '');
      elements.push(
        <div key={`callout-${idx}`} className="my-3.5 p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border-l-4 border-indigo-600 dark:border-indigo-400 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 font-medium leading-relaxed shadow-2xs">
          {renderInlineFormatting(noteContent)}
        </div>
      );
      return;
    }

    if (trimmed.startsWith('###') || trimmed.startsWith('##')) {
      flushList();
      const title = trimmed.replace(/^#+\s*/, '');
      elements.push(
        <h3 key={`h3-${idx}`} className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-5 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
          <span>{renderInlineFormatting(title)}</span>
        </h3>
      );
      return;
    }

    if (/^[•\-\*]\s+/.test(trimmed)) {
      const itemText = trimmed.replace(/^[•\-\*]\s+/, '');
      currentList.push(itemText);
      return;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const itemText = trimmed.replace(/^\d+\.\s+/, '');
      currentList.push(itemText);
      return;
    }

    flushList();
    elements.push(
      <p key={`p-${idx}`} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed my-2.5">
        {renderInlineFormatting(trimmed)}
      </p>
    );
  });

  flushList();
  return elements;
}

export const TutorialViewer: React.FC<TutorialViewerProps> = ({
  track,
  initialChapterId,
  onSelectChapter,
  onGoBack,
  onOpenPlayground,
  onOpenExercises,
  onOpenQuiz,
}) => {
  const [currentChapterId, setCurrentChapterId] = useState<string>(
    initialChapterId || track.chapters[0]?.id || ''
  );

  React.useEffect(() => {
    if (initialChapterId) {
      setCurrentChapterId(initialChapterId);
    }
  }, [initialChapterId]);

  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const currentChapter = track.chapters.find(c => c.id === currentChapterId) || track.chapters[0];
  const currentIndex = track.chapters.findIndex(c => c.id === currentChapter?.id);

  const selectChapter = (chapterId: string) => {
    setCurrentChapterId(chapterId);
    if (onSelectChapter) {
      onSelectChapter(track.id, chapterId);
    }
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleComplete = (id: string) => {
    if (completedChapters.includes(id)) {
      setCompletedChapters(prev => prev.filter(c => c !== id));
    } else {
      setCompletedChapters(prev => [...prev, id]);
    }
  };

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const goToNext = () => {
    if (currentIndex < track.chapters.length - 1) {
      selectChapter(track.chapters[currentIndex + 1].id);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      selectChapter(track.chapters[currentIndex - 1].id);
    }
  };

  // Filter chapters based on search query
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return track.chapters;
    const q = searchQuery.toLowerCase();
    return track.chapters.filter(ch => 
      ch.title.toLowerCase().includes(q) ||
      (ch.category && ch.category.toLowerCase().includes(q)) ||
      ch.summary.toLowerCase().includes(q)
    );
  }, [track.chapters, searchQuery]);

  const isCompleted = completedChapters.includes(currentChapter.id);

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 justify-center max-w-[1800px] mx-auto w-full transition-colors duration-200">
      
      {/* Mobile Sidebar Toggle Button */}
      <div className="lg:hidden p-4 bg-slate-50 dark:bg-[#0c1222] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-16 z-20">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xs"
        >
          {sidebarOpen ? <X className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> : <Menu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />}
          <span>{sidebarOpen ? 'Close Menu' : `Lessons (${track.chapters.length})`}</span>
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400">{track.name}</span>
          <span className="text-[10px] bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-bold px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">
            {currentIndex + 1} / {track.chapters.length}
          </span>
        </div>
      </div>

      {/* Left Sidebar: Chapters Index (W3Schools Style with Categories & Search) */}
      <aside className={`
        ${sidebarOpen ? 'block' : 'hidden'} lg:block 
        w-full lg:w-80 bg-slate-50/90 dark:bg-[#0a0f1d] border-r border-slate-200 dark:border-slate-800 p-4 shrink-0 overflow-y-auto max-h-screen sticky top-16 z-30 transition-colors duration-200
      `}>
        {/* Track Title & Metadata */}
        <div className="mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              {track.name} Track
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{track.chapters.length} Total Lessons</span>
          </div>
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white mt-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>{track.name} Tutorial</span>
          </h2>
        </div>

        {/* Search Lessons Box */}
        <div className="relative mb-4">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search lessons & topics..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Chapters list with Category Headings */}
        <div className="space-y-1">
          {filteredChapters.map((ch, idx) => {
            const isActive = ch.id === currentChapter.id;
            const isDone = completedChapters.includes(ch.id);
            const globalIndex = track.chapters.findIndex(c => c.id === ch.id);

            // Render category header if category changes
            const prevChapter = filteredChapters[idx - 1];
            const isNewCategory = ch.category && (!prevChapter || prevChapter.category !== ch.category);

            return (
              <React.Fragment key={ch.id}>
                {isNewCategory && (
                  <div className="pt-4 pb-1.5 px-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 mb-1.5 mt-2">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                      {ch.category}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => selectChapter(ch.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs transition cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white font-bold shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 font-medium'
                  }`}
                >
                  <div className="flex items-center space-x-2 truncate">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center font-mono text-[9px] shrink-0 ${
                      isActive ? 'bg-white/20 text-white font-bold' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {globalIndex + 1}
                    </span>
                    <span className="truncate">{ch.title}</span>
                  </div>

                  {isDone && (
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ml-1.5 ${isActive ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`} />
                  )}
                </button>
              </React.Fragment>
            );
          })}

          {filteredChapters.length === 0 && (
            <div className="py-6 text-center text-xs text-slate-400">
              No lessons match "{searchQuery}"
            </div>
          )}
        </div>

        {/* Action Quick Links in Sidebar */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <button
            onClick={() => onOpenExercises(track.id)}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 transition shadow-2xs"
          >
            <span>{track.name} Exercises</span>
            <span className="text-[10px] bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 px-1.5 py-0.5 rounded font-bold">Practice</span>
          </button>

          <button
            onClick={() => onOpenQuiz(track.id)}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-400 transition shadow-2xs"
          >
            <span>{track.name} Quiz</span>
            <span className="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded font-bold">Assessment</span>
          </button>
        </div>

        {/* Left Sidebar Ad Placement */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center">
          <AdBanner type="sidebar" position="tutorial-left-sidebar" className="w-full max-w-[280px]" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 lg:px-12 bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-200">
        
        {/* Breadcrumbs & Navigation */}
        <div className="flex items-center flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
          {onGoBack && (
            <button
              onClick={onGoBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-300 dark:border-slate-700 transition cursor-pointer shadow-2xs mr-2"
              title="Go back to previous page"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Back</span>
            </button>
          )}
          <span>Tutorials</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{track.name}</span>
          {currentChapter.category && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-600 dark:text-slate-400">{currentChapter.category}</span>
            </>
          )}
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 dark:text-slate-200 font-semibold">{currentChapter.title}</span>
        </div>

        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {currentChapter.category && (
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 px-2.5 py-0.5 rounded-md">
                  {currentChapter.category}
                </span>
              )}
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                Lesson {currentIndex + 1} of {track.chapters.length}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {currentChapter.title}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Estimated reading time: <span className="text-slate-800 dark:text-slate-200 font-mono font-medium">{currentChapter.readTime}</span>
            </p>
          </div>

          <button
            onClick={() => toggleComplete(currentChapter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl border text-xs font-semibold transition cursor-pointer shrink-0 ${
              isCompleted
                ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-800 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800'
                : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Completed' : 'Mark as Complete'}</span>
          </button>
        </div>

        {/* Overview Box */}
        <div className="mb-10 p-6 rounded-2xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-2 flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Chapter Overview</span>
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {currentChapter.content.overview}
          </p>
        </div>

        {/* Detailed Sections (Topic-Wise Learning) */}
        <div className="space-y-14">
          {currentChapter.content.sections.map((section, sIdx) => {
            const parsedTable = isTableString(section.code) ? parseMarkdownTable(section.code!) : null;

            return (
              <section key={sIdx} className="space-y-4 pt-8 first:pt-0 border-t first:border-t-0 border-slate-200/70 dark:border-slate-800">
                {/* Topic Pill & Title */}
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 font-mono text-[11px] font-bold tracking-wider uppercase">
                      Topic {String(sIdx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight pb-1">
                    {section.heading}
                  </h2>
                </div>

                {/* Formatted Explanation Body */}
                <div className="text-slate-700 dark:text-slate-300">
                  {renderFormattedText(section.body)}
                </div>

                {/* If code is a Markdown Table -> Render as Clean HTML Data Table */}
                {parsedTable && (
                  <div className="my-5 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a] shadow-2xs">
                    <div className="bg-slate-100/80 dark:bg-slate-800/80 px-4 py-2.5 border-b border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        <span className="uppercase tracking-wider">Quick Reference Table</span>
                      </div>
                      <span className="text-[10px] bg-white dark:bg-slate-900 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 font-mono text-slate-600 dark:text-slate-400 font-bold">
                        {parsedTable.rows.length} entries
                      </span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-50 dark:bg-[#0c1222] text-slate-800 dark:text-slate-200 uppercase font-extrabold border-b border-slate-200 dark:border-slate-700 text-[11px] tracking-wider">
                          <tr>
                            {parsedTable.headers.map((h, i) => (
                              <th key={i} className="px-4 py-3 font-extrabold whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-normal">
                          {parsedTable.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-indigo-50/40 dark:hover:bg-slate-800/40 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-3 text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                                  {cIdx === 0 ? (
                                    <span className="font-mono font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50/90 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-100 dark:border-indigo-800">
                                      {cell}
                                    </span>
                                  ) : (
                                    cell
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* If code is actual code snippet -> Render Code Box */}
                {!parsedTable && section.code && (
                  <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0f172a] shadow-lg my-5">
                    {/* Top Bar of Code Box */}
                    <div className="bg-[#1e293b] px-4 py-2.5 flex items-center justify-between text-xs text-slate-300 border-b border-slate-700/60">
                      <div className="flex items-center space-x-2">
                        <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                        <span className="font-mono text-indigo-400 font-bold uppercase">
                          {section.codeLanguage || 'code'}
                        </span>
                        <span className="text-slate-500">·</span>
                        <span className="text-slate-400 font-medium">Example</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleCopy(section.code || '', sIdx)}
                          className="flex items-center space-x-1 hover:text-white px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 transition cursor-pointer text-xs"
                          title="Copy code"
                        >
                          {copiedCodeIdx === sIdx ? (
                            <>
                              <Check className="w-3 h-3 text-indigo-400" />
                              <span className="text-[11px] text-indigo-400 font-bold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span className="text-[11px]">Copy</span>
                            </>
                          )}
                        </button>

                        {section.interactive && (
                          <button
                            onClick={() => onOpenPlayground(section.tryItCode || section.code, section.codeLanguage)}
                            className="flex items-center space-x-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1 rounded-lg transition text-xs shadow-sm cursor-pointer"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Try It Yourself &raquo;</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Code Body */}
                    <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto text-indigo-200 leading-relaxed">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}

                {/* Best Practice Tips & Callouts */}
                {section.tips && section.tips.length > 0 && (
                  <div className="mt-4 p-4 rounded-xl bg-indigo-50/80 dark:bg-[#0f172a] border border-indigo-200 dark:border-indigo-900/60">
                    <div className="flex items-center space-x-2 text-xs font-bold text-indigo-800 dark:text-indigo-400 uppercase tracking-wider mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>Key Takeaways & Best Practices</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      {section.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="leading-relaxed">
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Bottom Leaderboard Advertisement */}
        <div className="mt-12 flex justify-center">
          <AdBanner type="leaderboard" position="tutorial-content-bottom" />
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600'
                : 'hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>&laquo; Previous Lesson</span>
          </button>

          <span className="text-xs text-slate-400 dark:text-slate-500 hidden sm:inline-block">
            {currentIndex + 1} of {track.chapters.length} Lessons Completed
          </span>

          <button
            onClick={goToNext}
            disabled={currentIndex === track.chapters.length - 1}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-md shadow-indigo-600/20 cursor-pointer ${
              currentIndex === track.chapters.length - 1
                ? 'opacity-40 cursor-not-allowed bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white'
            }`}
          >
            <span>Next Lesson &raquo;</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </main>

      {/* Right Rail: Sticky Ad Sidebar (Visible on xl+ screens) */}
      <aside aria-label="Tutorial Right Advertisement" className="hidden xl:flex w-72 shrink-0 flex-col items-center py-10 px-4 border-l border-slate-100 dark:border-slate-800 sticky top-16 self-start space-y-6 bg-slate-50/60 dark:bg-[#0a0f1d] transition-colors duration-200">
        <AdBanner type="sidebar" position="tutorial-right-rectangle" className="w-full max-w-[280px]" />
        <AdBanner type="skyscraper" position="tutorial-right-skyscraper" className="w-full max-w-[280px]" />
      </aside>
    </div>
  );
};