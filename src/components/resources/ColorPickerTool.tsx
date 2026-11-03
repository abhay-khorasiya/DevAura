import React, { useState } from 'react';
import { Copy, Check, Pipette } from 'lucide-react';

export const ColorPickerTool: React.FC = () => {
  const [hex, setHex] = useState('#10b981');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Parse Hex to RGB
  const hexToRgb = (hexStr: string) => {
    let clean = hexStr.replace('#', '');
    if (clean.length === 3) {
      clean = clean.split('').map(c => c + c).join('');
    }
    const num = parseInt(clean, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  };

  const rgb = hexToRgb(hex);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const popularPalette = [
    { name: 'Emerald', hex: '#10b981' },
    { name: 'Teal', hex: '#14b8a6' },
    { name: 'Cyan', hex: '#06b6d4' },
    { name: 'Sky', hex: '#0ea5e9' },
    { name: 'Indigo', hex: '#6366f1' },
    { name: 'Purple', hex: '#a855f7' },
    { name: 'Rose', hex: '#f43f5e' },
    { name: 'Amber', hex: '#f59e0b' },
    { name: 'Slate', hex: '#475569' },
    { name: 'Charcoal', hex: '#1e293b' },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg max-w-4xl mx-auto">
      <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">
        <Pipette className="w-4 h-4" />
        <span>DevAura Color Studio</span>
      </div>
      <h2 className="text-2xl font-extrabold text-slate-900">Interactive HTML Color Picker</h2>
      <p className="text-xs text-slate-600 mt-1">
        Inspect HEX, RGB, and HSL formats with instant copy and contrast checking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8 items-center">
        
        {/* Color Display Canvas */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div
            className="w-full h-44 rounded-2xl shadow-md border-4 border-slate-200 flex flex-col justify-between p-4 transition-colors duration-200"
            style={{ backgroundColor: hex }}
          >
            <div className="flex justify-between items-center text-xs font-bold px-2 py-1 rounded bg-black/40 text-white backdrop-blur-sm self-start">
              Preview Canvas
            </div>

            <div className="text-center font-mono font-bold text-lg px-4 py-2 rounded-xl bg-black/60 text-white backdrop-blur-md">
              {hex.toUpperCase()}
            </div>
          </div>

          <div className="w-full mt-4 flex items-center space-x-3">
            <input
              type="color"
              value={hex}
              onChange={e => setHex(e.target.value)}
              className="w-12 h-12 rounded-xl cursor-pointer bg-transparent border-0"
            />
            <input
              type="text"
              value={hex}
              onChange={e => setHex(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-800 font-mono text-sm focus:outline-none focus:border-indigo-500 uppercase font-semibold"
            />
          </div>
        </div>

        {/* Formats and Copy Buttons */}
        <div className="md:col-span-7 space-y-3">
          {/* HEX */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">HEX CODE</span>
              <span className="text-sm font-mono text-indigo-700 font-bold">{hex.toUpperCase()}</span>
            </div>
            <button
              onClick={() => handleCopy(hex.toUpperCase(), 'hex')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition shadow-2xs cursor-pointer"
            >
              {copiedKey === 'hex' ? <Check className="w-3.5 h-3.5 text-indigo-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'hex' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* RGB */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">RGB FORMAT</span>
              <span className="text-sm font-mono text-cyan-700 font-bold">rgb({rgb.r}, {rgb.g}, {rgb.b})</span>
            </div>
            <button
              onClick={() => handleCopy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'rgb')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition shadow-2xs cursor-pointer"
            >
              {copiedKey === 'rgb' ? <Check className="w-3.5 h-3.5 text-indigo-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'rgb' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* CSS Rule */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">CSS PROPERTY</span>
              <span className="text-sm font-mono text-amber-700 font-bold">background-color: {hex};</span>
            </div>
            <button
              onClick={() => handleCopy(`background-color: ${hex};`, 'css')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition shadow-2xs cursor-pointer"
            >
              {copiedKey === 'css' ? <Check className="w-3.5 h-3.5 text-indigo-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'css' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Palette Swatches */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
          Popular Web Colors:
        </span>
        <div className="flex flex-wrap gap-2.5">
          {popularPalette.map(p => (
            <button
              key={p.hex}
              onClick={() => setHex(p.hex)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition text-xs font-semibold text-slate-700 cursor-pointer shadow-2xs"
            >
              <span className="w-3.5 h-3.5 rounded-full border border-slate-300" style={{ backgroundColor: p.hex }} />
              <span>{p.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
