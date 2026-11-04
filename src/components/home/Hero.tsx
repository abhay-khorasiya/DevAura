import React, { useState } from 'react';
import {
  Play,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Flame
} from 'lucide-react';

interface HeroProps {
  onStartTrack: (langId: string) => void;
  onOpenPlayground: (code?: string, lang?: string) => void;
}

const sampleHeroSnippets: { [key: string]: { code: string; preview: string; lang: string } } = {
  html: {
    lang: 'html',
    code: `<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;background:#ffffff;color:#0f172a;padding:20px;">
  <h1 style="color:#4f46e5;">DevAura HTML5</h1>
  <p>Live markup editing in real-time!</p>
  <button style="background:#4f46e5;color:#fff;border:none;padding:10px 18px;border-radius:6px;font-weight:bold;cursor:pointer;">
    Explore Track 🚀
  </button>
</body>
</html>`,
    preview: `<div style="font-family:sans-serif;padding:20px;color:#0f172a;background:#ffffff;height:100%;border-radius:8px;">
      <h3 style="color:#4f46e5;margin-top:0;font-size:20px;font-weight:bold;">DevAura HTML5</h3>
      <p style="color:#475569;font-size:14px;line-height:1.5;">Live markup editing in real-time!</p>
      <div style="display:inline-block;background:#4f46e5;color:#ffffff;padding:8px 16px;border-radius:6px;font-weight:700;font-size:13px;box-shadow:0 4px 10px rgba(79,70,229,0.25);">
        Explore Track 🚀
      </div>
    </div>`
  },
  css: {
    lang: 'css',
    code: `.aura-clean-badge {
  background: #eef2ff;
  border: 1px solid #6366f1;
  border-radius: 9999px;
  padding: 8px 18px;
  color: #4338ca;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
}`,
    preview: `<div style="display:flex;align-items:center;justify-content:center;height:100%;padding:20px;background:#ffffff;border-radius:8px;">
      <div style="background:#eef2ff;border:1px solid #6366f1;border-radius:9999px;padding:10px 22px;color:#4338ca;font-weight:bold;font-size:14px;box-shadow:0 4px 12px rgba(99,102,241,0.2);">
        ✨ Modern Clean Design
      </div>
    </div>`
  },
  javascript: {
    lang: 'javascript',
    code: `// DevAura Reactive State
const createAuraSignal = (initial) => {
  let value = initial;
  return () => \`Status: \${value} - Ready for Production!\`;
};

const appStatus = createAuraSignal('Optimized');
console.log(appStatus());`,
    preview: `<div style="font-family:monospace;padding:16px;color:#0284c7;background:#f8fafc;border-radius:8px;height:100%;">
      <div style="color:#64748b;font-size:12px;margin-bottom:8px;">// Browser Virtual Console:</div>
      <div style="background:#ffffff;padding:12px;border-radius:8px;border:1px solid #e2e8f0;color:#4f46e5;font-weight:bold;">
        > Status: Optimized - Ready for Production!
      </div>
    </div>`
  }
};

export const Hero: React.FC<HeroProps> = ({ onStartTrack, onOpenPlayground }) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'javascript'>('html');
  const [copied, setCopied] = useState(false);

  const snippet = sampleHeroSnippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090d16] transition-colors duration-300">
      {/* Smooth cross-fade gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 opacity-100 dark:opacity-0 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#090d16] via-[#0c1222] to-[#090d16] opacity-0 dark:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {/* Background Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-100/70 via-violet-50 to-transparent dark:from-indigo-950/40 dark:via-violet-950/20 blur-3xl pointer-events-none rounded-full transform-gpu transition-all duration-300" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-sky-100/60 dark:bg-sky-950/30 blur-3xl pointer-events-none rounded-full transform-gpu transition-all duration-300" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-6 text-left">
            {/* Announcement badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Flame className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Next-Generation Developer Portal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Learn to Code With <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 dark:from-indigo-400 dark:via-violet-400 dark:to-sky-400 bg-clip-text text-transparent">
                Modern Precision.
              </span>
            </h1>

            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 dark:from-indigo-400 dark:via-violet-400 dark:to-sky-400 bg-clip-text text-transparent font-medium">
              • DevAura is the completely reimagined,
            </span>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              • Free tutorials <br/>• examples and references.<br/>
              • No sign-up needed, just start learning.
            </p>

            {/* Language Quick-tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 self-center mr-1">Popular:</span>
              {[
                { id: 'html', label: 'HTML5', color: 'hover:border-orange-500 hover:text-orange-700' },
                { id: 'css', label: 'CSS3', color: 'hover:border-cyan-500 hover:text-cyan-700' },
                { id: 'javascript', label: 'JavaScript', color: 'hover:border-amber-500 hover:text-amber-700' },
                { id: 'python', label: 'Python', color: 'hover:border-indigo-500 hover:text-indigo-700' },
                { id: 'sql', label: 'SQL', color: 'hover:border-orange-500 hover:text-orange-700' },
                { id: 'react', label: 'React 19', color: 'hover:border-sky-500 hover:text-sky-700' },
                { id: 'java', label: 'Java', color: 'hover:border-red-500 hover:text-red-700' },
                { id: 'cpp', label: 'C++', color: 'hover:border-blue-600 hover:text-blue-800' },
                { id: 'csharp', label: 'C#', color: 'hover:border-purple-500 hover:text-purple-700' },
                { id: 'go', label: 'Go', color: 'hover:border-cyan-600 hover:text-cyan-800' },
                { id: 'rust', label: 'Rust', color: 'hover:border-amber-700 hover:text-amber-900' },
                { id: 'nodejs', label: 'Node.js', color: 'hover:border-emerald-600 hover:text-emerald-800' },
                { id: 'dsa', label: 'DSA', color: 'hover:border-indigo-600 hover:text-indigo-800' },
                { id: 'ai', label: 'AI & ML', color: 'hover:border-violet-600 hover:text-violet-800' },
              ].map(tag => (
                <button
                  key={tag.id}
                  onClick={() => onStartTrack(tag.id)}
                  className={`px-3 py-1 text-xs font-semibold bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-300 shadow-2xs transition ${tag.color}`}
                >
                  {tag.label}
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onStartTrack('html')}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-lg shadow-indigo-600/20 transition cursor-pointer active:scale-95"
              >
                <span>Start Learning Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onOpenPlayground(snippet.code, snippet.lang)}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#0d1424] hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-base shadow-2xs transition cursor-pointer"
              >
                <Terminal className="w-5 h-5 text-indigo-600" />
                <span>Open "Try it Yourself"</span>
              </button>
            </div>

            {/* Features check list */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>100% Free & Open Syntax</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Instant In-Browser Runner</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Interactive Fill-In Exercises</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Clean High-Contrast Design</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive "Try It Yourself" Hero Teaser */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0d1424] shadow-xl overflow-hidden">

              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-indigo-400" />
                  <span className="ml-2 text-xs font-mono font-semibold text-slate-600 dark:text-slate-400">DevAura Interactive Live Sandbox</span>
                </div>

                <div className="flex items-center space-x-1">
                  {(['html', 'css', 'javascript'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 text-xs font-bold rounded-md uppercase transition ${activeTab === tab
                          ? 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 border border-indigo-300 dark:border-indigo-700'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Content Split Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 text-xs">
                {/* Code Editor Panel */}
                <div className="p-4 bg-[#0f172a] flex flex-col justify-between font-mono h-64 overflow-y-auto">
                  <pre className="text-indigo-200 leading-relaxed select-all whitespace-pre-wrap">
                    {snippet.code}
                  </pre>
                  <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">Editable Sandbox</span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center space-x-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] transition"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-indigo-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Live Output Preview */}
                <div className="p-4 bg-slate-50 dark:bg-[#0a0f1d] flex flex-col justify-between h-64">
                  <div className="flex-1 flex flex-col justify-center">
                    <div
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a] p-2 shadow-2xs"
                      dangerouslySetInnerHTML={{ __html: snippet.preview }}
                    />
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="flex items-center text-[11px] text-indigo-700 dark:text-indigo-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping mr-2" />
                      Live Render Preview
                    </span>
                    <button
                      onClick={() => onOpenPlayground(snippet.code, snippet.lang)}
                      className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Try it Yourself</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
