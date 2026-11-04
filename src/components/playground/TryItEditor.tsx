import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Download, 
  Maximize2, 
  Minimize2, 
  Columns, 
  Rows, 
  Terminal, 
  Code2, 
} from 'lucide-react';
import { executeSql, runPythonSimulation, SqlResult } from '../../utils/codeRunner';

interface TryItEditorProps {
  initialCode?: string;
  initialLanguage?: string;
  onClose?: () => void;
}

const defaultCodeByLang: { [key: string]: string } = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DevAura Try It Live</title>
  <style>
    body {
      background: #f8fafc;
      color: #0f172a;
      font-family: system-ui, -apple-system, sans-serif;
      padding: 30px;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 80vh;
    }
    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 36px;
      border-radius: 16px;
      text-align: center;
      max-width: 440px;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.06);
    }
    h1 {
      color: #059669;
      margin-top: 0;
      font-size: 26px;
    }
    p {
      color: #64748b;
      font-size: 15px;
      line-height: 1.6;
    }
    .btn {
      background: #059669;
      color: #ffffff;
      font-weight: 700;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 15px;
      transition: background 0.2s, transform 0.2s;
    }
    .btn:hover {
      background: #047857;
      transform: translateY(-2px);
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello from DevAura!</h1>
    <p>Welcome to the modern "Try It Yourself" live sandbox. Edit this code on the left and hit <strong>Run Code</strong> or press <strong>Ctrl+Enter</strong>.</p>
    <button class="btn" onclick="alert('⚡ DevAura live code execution!')">Click Me</button>
  </div>
</body>
</html>`,
  css: `/* Interactive Modern CSS */
body {
  background: #f8fafc;
  color: #0f172a;
  font-family: system-ui;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin: 0;
}

.clean-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 36px;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
  text-align: center;
}

h2 {
  color: #0284c7;
}`,
  javascript: `// DevAura Modern JavaScript Playground
const developers = [
  { name: 'Alex', role: 'Frontend Architect', score: 98 },
  { name: 'Sam', role: 'Fullstack Dev', score: 94 },
  { name: 'Maya', role: 'Data Scientist', score: 99 }
];

console.log('--- DevAura Developer Leaderboard ---');
developers.forEach((dev, idx) => {
  console.log(\`#\${idx + 1} \${dev.name} (\${dev.role}) - Score: \${dev.score}pts\`);
});

const topDev = developers.reduce((prev, curr) => (curr.score > prev.score ? curr : prev));
console.log(\`🌟 Top Performer: \${topDev.name}!\`);`,
  python: `# DevAura Python Sandbox Simulation
def calculate_metrics(framework, stars):
    status = "Trending 🔥" if stars > 10000 else "Growing 🌱"
    return f"{framework}: {stars:,} stars [{status}]"

frameworks = [
    ("React", 225000),
    ("Vue", 206000),
    ("Next.js", 124000),
    ("DevAura", 18500)
]

print("DevAura Ecosystem Metrics:")
for name, stars in frameworks:
    print("•", calculate_metrics(name, stars))`,
  sql: `-- Sample Relational Query on 'Customers' Table
SELECT CustomerID, CustomerName, ContactName, City, Country 
FROM Customers 
WHERE Country = 'Germany' OR Country = 'Mexico'
ORDER BY CustomerName;`
};

export const TryItEditor: React.FC<TryItEditorProps> = ({
  initialCode,
  initialLanguage = 'html',
}) => {
  const [language, setLanguage] = useState<string>(initialLanguage);
  const [code, setCode] = useState<string>(initialCode || defaultCodeByLang[initialLanguage] || defaultCodeByLang.html);
  const [renderedSrc, setRenderedSrc] = useState<string>('');
  const [pythonOutput, setPythonOutput] = useState<string[]>([]);
  const [sqlResult, setSqlResult] = useState<SqlResult | null>(null);
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [showConsole, setShowConsole] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Execute Code Logic
  const handleRun = () => {
    if (language === 'python') {
      const output = runPythonSimulation(code);
      setPythonOutput(output);
    } else if (language === 'sql') {
      const result = executeSql(code);
      setSqlResult(result);
    } else {
      // HTML/CSS/JS execution
      let codeToRun = code;

      // If CSS only, wrap in HTML
      if (language === 'css') {
        codeToRun = `<!DOCTYPE html><html><head><style>${code}</style></head><body><div class="clean-card"><h2>DevAura CSS Live</h2><p>Your styles are dynamically injected!</p></div></body></html>`;
      }
      // If JS only, wrap in HTML with console logger
      else if (language === 'javascript') {
        codeToRun = `<!DOCTYPE html>
<html>
<head>
  <style>body { background:#f8fafc; color:#0f172a; font-family:monospace; padding:20px; }</style>
</head>
<body>
  <div id="output" style="white-space:pre-wrap; line-height:1.7; background:#ffffff; border:1px solid #cbd5e1; padding:16px; border-radius:8px;"></div>
  <script>
    const outputEl = document.getElementById('output');
    const logs = [];
    const originalLog = console.log;
    console.log = function(...args) {
      originalLog(...args);
      logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '));
      outputEl.innerText = logs.join('\\n');
    };
    try {
      ${code}
    } catch(err) {
      console.log('❌ Error: ' + err.message);
    }
  </script>
</body>
</html>`;
      }

      setRenderedSrc(codeToRun);
      setConsoleLogs([`[DevAura Runner]: Compilation successful at ${new Date().toLocaleTimeString()}`]);
    }
  };

  // Run on mount or when language changes
  useEffect(() => {
    handleRun();
  }, [language]);

  // Handle Ctrl+Enter shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [code, language]);

  const handleReset = () => {
    const fresh = defaultCodeByLang[language] || defaultCodeByLang.html;
    setCode(fresh);
    if (language === 'python') {
      setPythonOutput(runPythonSimulation(fresh));
    } else if (language === 'sql') {
      setSqlResult(executeSql(fresh));
    } else {
      setRenderedSrc(fresh);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const extMap: { [key: string]: string } = { html: 'html', css: 'css', javascript: 'js', python: 'py', sql: 'sql' };
    const ext = extMap[language] || 'html';
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `devaura-playground.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
    setCode(defaultCodeByLang[lang] || defaultCodeByLang.html);
  };

  return (
    <div className={`flex flex-col bg-slate-100 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 ${isFullScreen ? 'fixed inset-0 z-50' : 'min-h-[85vh]'}`}>
      
      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-white dark:bg-[#0b101c] border-b border-slate-200 dark:border-slate-800 gap-3 shadow-2xs">
        
        {/* Left: Language Selection & Run button */}
        <div className="flex items-center space-x-3">
          {/* Language Tabs */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-xl p-1 border border-slate-200 dark:border-slate-800">
            {(['html', 'css', 'javascript', 'python', 'sql'] as const).map(l => (
              <button
                key={l}
                onClick={() => switchLanguage(l)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                  language === l
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Primary RUN button */}
          <button
            onClick={handleRun}
            className="flex items-center space-x-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm shadow-md shadow-indigo-600/20 active:scale-95 transition cursor-pointer"
            title="Click or press Ctrl+Enter"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Run Code</span>
            <span className="hidden sm:inline text-[10px] font-mono opacity-80 bg-indigo-700/60 px-1.5 py-0.5 rounded text-white ml-1">
              Ctrl+↵
            </span>
          </button>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition shadow-2xs cursor-pointer"
            title="Reset to default example"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Layout controls, Copy, Download, Full Screen */}
        <div className="flex items-center space-x-2">
          {/* Console Drawer Toggle */}
          <button
            onClick={() => setShowConsole(!showConsole)}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl border text-xs font-semibold transition cursor-pointer ${
              showConsole 
                ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800' 
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Console</span>
          </button>

          {/* Orientation Toggle */}
          <button
            onClick={() => setOrientation(orientation === 'horizontal' ? 'vertical' : 'horizontal')}
            className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition shadow-2xs cursor-pointer"
            title={orientation === 'horizontal' ? 'Switch to Vertical Split' : 'Switch to Horizontal Split'}
          >
            {orientation === 'horizontal' ? <Columns className="w-4 h-4" /> : <Rows className="w-4 h-4" />}
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-semibold transition shadow-2xs cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition shadow-2xs cursor-pointer"
            title="Download code"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Full Screen Button */}
          <button
            onClick={() => setIsFullScreen(!isFullScreen)}
            className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition shadow-2xs cursor-pointer"
            title={isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
          >
            {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Editor & Preview Split Workspace */}
      <div className={`flex-1 flex ${orientation === 'horizontal' ? 'flex-col md:flex-row' : 'flex-col'} overflow-hidden relative`}>
        
        {/* Left Pane: Code Editor */}
        <div className="flex-1 flex flex-col bg-[#0b101c] border-r border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-[#080d18] border-b border-slate-800 text-xs text-slate-400 font-mono">
            <span className="flex items-center space-x-2 text-slate-300">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>SOURCE EDITOR ({language.toUpperCase()})</span>
            </span>
            <span>{code.split('\n').length} lines • {code.length} chars</span>
          </div>

          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            className="flex-1 w-full p-4 bg-[#0b101c] text-indigo-200 font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-0 selection:bg-indigo-500/30 overflow-auto"
            placeholder="Type your code here..."
            spellCheck={false}
          />
        </div>

        {/* Right Pane: Live Output Preview */}
        <div className="flex-1 flex flex-col bg-white dark:bg-[#0c1222] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-[#080d18] border-b border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 font-mono font-semibold">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>LIVE RESULT PREVIEW</span>
            </span>
            <span className="text-[11px] text-slate-500">DevAura Sandbox v2.6</span>
          </div>

          {/* Render by Language Type */}
          <div className="flex-1 overflow-auto bg-white dark:bg-[#0c1222] relative">
            {language === 'python' ? (
              /* Python Output */
              <div className="p-6 font-mono text-sm text-slate-100 bg-[#070a12] h-full overflow-y-auto">
                <div className="text-xs text-indigo-400 mb-4 pb-2 border-b border-slate-800">
                  Python 3.12 Virtual Runtime Simulation:
                </div>
                {pythonOutput.map((out, i) => (
                  <div key={i} className="leading-relaxed py-0.5">{out}</div>
                ))}
              </div>
            ) : language === 'sql' ? (
              /* SQL Output Table */
              <div className="p-6 bg-slate-50 dark:bg-[#0c1222] h-full overflow-y-auto">
                {sqlResult ? (
                  <div>
                    {sqlResult.message && (
                      <div className="text-xs font-mono text-indigo-800 dark:text-indigo-300 mb-4 bg-indigo-50 dark:bg-indigo-950/40 p-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800 font-semibold">
                        {sqlResult.message}
                      </div>
                    )}
                    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#080d18] shadow-2xs">
                      <table className="w-full text-left text-xs font-mono text-slate-800 dark:text-slate-200">
                        <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px]">
                          <tr>
                            {sqlResult.columns.map((col, idx) => (
                              <th key={idx} className="p-3 border-b border-slate-200 dark:border-slate-800 font-bold">{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          {sqlResult.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                              {row.map((val, cIdx) => (
                                <td key={cIdx} className="p-3 whitespace-nowrap">{val}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-500 text-center py-10 font-mono text-sm">
                    Click "Run Code" to execute SQL query.
                  </div>
                )}
              </div>
            ) : (
              /* HTML / CSS / JS Sandbox */
              <iframe
                ref={iframeRef}
                srcDoc={renderedSrc}
                title="Sandbox Preview"
                sandbox="allow-scripts allow-modals allow-same-origin"
                className="w-full h-full border-0 bg-white dark:bg-white"
              />
            )}
          </div>
        </div>

      </div>

      {/* Optional Console Drawer */}
      {showConsole && (
        <div className="h-40 bg-white dark:bg-[#0b101c] border-t border-slate-200 dark:border-slate-800 flex flex-col font-mono text-xs">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-[#080d18] border-b border-slate-200 dark:border-slate-800">
            <span className="text-slate-700 dark:text-slate-300 font-bold flex items-center">
              <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 mr-2" />
              Terminal & Diagnostics
            </span>
            <button
              onClick={() => setConsoleLogs([])}
              className="text-[11px] text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white underline cursor-pointer"
            >
              Clear
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-1 text-slate-800 dark:text-slate-200">
            {consoleLogs.length === 0 ? (
              <span className="text-slate-400 dark:text-slate-500">// No console messages yet</span>
            ) : (
              consoleLogs.map((log, idx) => (
                <div key={idx} className="text-indigo-700 dark:text-indigo-400 font-semibold">&gt; {log}</div>
              ))
            )}
          </div>
        </div>
      )}

    </div>
  );
};
