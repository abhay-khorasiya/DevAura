import React, { useState } from 'react';
import { 
  Sparkles, 
  Pipette, 
  FileText, 
  Layout, 
  HelpCircle, 
  Copy, 
  Check, 
  Code2, 
  ArrowRight, 
  Search
} from 'lucide-react';
import { ColorPickerTool } from './ColorPickerTool';
import { 
  htmlEntitiesList, 
  cheatSheets, 
  websiteTemplates, 
  interviewQuestionsBank 
} from '../../data/resources';

interface FreeResourcesHubProps {
  onOpenPlayground: (code?: string, lang?: string) => void;
  onSelectTrack: (langId: string) => void;
}

export const FreeResourcesHub: React.FC<FreeResourcesHubProps> = ({
  onOpenPlayground,
  onSelectTrack,
}) => {
  const [activeTab, setActiveTab] = useState<'tools' | 'cheatsheets' | 'templates' | 'interview' | 'entities'>('tools');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [entityQuery, setEntityQuery] = useState('');
  const [expandedInterviewId, setExpandedInterviewId] = useState<string | null>('int-1');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredEntities = htmlEntitiesList.filter(e =>
    e.name.toLowerCase().includes(entityQuery.toLowerCase()) ||
    e.char.toLowerCase().includes(entityQuery.toLowerCase()) ||
    e.entityName.toLowerCase().includes(entityQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>100% Free Open Developer Hub</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Free Learning Resources</h1>
        <p className="text-sm text-slate-600 mt-2">
          Everything you need in one place: interactive developer tools, HTML color pickers, cheat sheets, starter templates, and interview prep.
        </p>

        {/* Resource Sub-Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {[
            { id: 'tools', label: 'Color Studio', icon: Pipette },
            { id: 'entities', label: 'HTML Entities & Symbols', icon: Code2 },
            { id: 'cheatsheets', label: 'Quick Cheat Sheets', icon: FileText },
            { id: 'templates', label: 'Website Templates', icon: Layout },
            { id: 'interview', label: 'Interview Q&A Bank', icon: HelpCircle },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab 1: Color Studio Tool */}
      {activeTab === 'tools' && (
        <div className="space-y-10 animate-fadeIn">
          <ColorPickerTool />
        </div>
      )}

      {/* Tab 2: HTML Entities & Character Symbols */}
      {activeTab === 'entities' && (
        <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
            <div>
              <h3 className="text-base font-bold text-slate-900">HTML Character Entities & Symbols</h3>
              <p className="text-xs text-slate-500">Reserved HTML characters and currency symbols that must be escaped.</p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search entities (&copy;, <, >)..."
                value={entityQuery}
                onChange={e => setEntityQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-md">
            <table className="w-full text-left text-xs font-mono text-slate-800">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider text-[11px] font-sans border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Symbol</th>
                  <th className="p-3.5">Description</th>
                  <th className="p-3.5">Entity Name</th>
                  <th className="p-3.5">Entity Number</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredEntities.map((ent, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="p-3.5 font-sans font-bold text-lg text-indigo-700">{ent.char}</td>
                    <td className="p-3.5 font-sans text-xs text-slate-600">{ent.description}</td>
                    <td className="p-3.5 text-cyan-700 font-bold">{ent.entityName}</td>
                    <td className="p-3.5 text-amber-700">{ent.entityNumber}</td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => handleCopy(ent.entityName, `ent-${idx}`)}
                        className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-sans font-semibold transition inline-flex items-center space-x-1 cursor-pointer"
                      >
                        {copiedId === `ent-${idx}` ? <Check className="w-3 h-3 text-indigo-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedId === `ent-${idx}` ? 'Copied' : 'Copy'}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Cheat Sheets */}
      {activeTab === 'cheatsheets' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
          {cheatSheets.map(sheet => (
            <div key={sheet.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200">
                    {sheet.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{sheet.snippets.length} Key Patterns</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{sheet.title}</h3>
                <p className="text-xs text-slate-600 mt-1">{sheet.description}</p>

                <div className="mt-6 space-y-4">
                  {sheet.snippets.map((snip, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-slate-800">{snip.label}</span>
                        <button
                          onClick={() => handleCopy(snip.code, `${sheet.id}-${sIdx}`)}
                          className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center space-x-1 cursor-pointer font-semibold"
                        >
                          {copiedId === `${sheet.id}-${sIdx}` ? <Check className="w-3 h-3 text-indigo-600" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedId === `${sheet.id}-${sIdx}` ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <pre className="font-mono text-xs text-indigo-200 p-2.5 rounded bg-[#0f172a] overflow-x-auto leading-relaxed">{snip.code}</pre>
                      <p className="text-[11px] text-slate-600 mt-1.5 font-medium">{snip.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => onSelectTrack(sheet.category.toLowerCase())}
                  className="flex items-center space-x-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-800 cursor-pointer"
                >
                  <span>Learn Full {sheet.category} Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Website Starter Templates */}
      {activeTab === 'templates' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
          {websiteTemplates.map(tpl => (
            <div key={tpl.id} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md flex flex-col justify-between">
              <div>
                <div className="h-44 w-full overflow-hidden relative">
                  <img src={tpl.previewImage} alt={tpl.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white shadow-md">
                    {tpl.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{tpl.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{tpl.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-4">
                <button
                  onClick={() => onOpenPlayground(tpl.code, 'html')}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition cursor-pointer"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Open in "Try It Yourself"</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 5: Technical Interview Q&A Bank */}
      {activeTab === 'interview' && (
        <div className="max-w-4xl mx-auto space-y-4 animate-fadeIn">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl text-xs text-slate-600 shadow-2xs font-medium">
            Top frontend and backend software engineering interview questions asked by high-growth startups and tech giants.
          </div>

          {interviewQuestionsBank.map(q => {
            const isExpanded = expandedInterviewId === q.id;
            return (
              <div
                key={q.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition"
              >
                <button
                  onClick={() => setExpandedInterviewId(isExpanded ? null : q.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-indigo-600 transition cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-100 text-cyan-800 border border-slate-200 font-bold">
                      {q.category}
                    </span>
                    <span className="text-sm sm:text-base">{q.question}</span>
                  </div>
                  <span className="text-xs text-slate-400">{isExpanded ? '▲' : '▼'}</span>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 text-xs text-slate-700 space-y-3 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                    <p className="font-medium">{q.answer}</p>
                    {q.codeSnippet && (
                      <pre className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 font-mono text-indigo-200 overflow-x-auto text-xs">
                        {q.codeSnippet}
                      </pre>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
