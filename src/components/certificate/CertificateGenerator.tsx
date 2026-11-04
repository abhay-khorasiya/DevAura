import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Award,
  Printer,
  ShieldCheck
} from 'lucide-react';
import { languageTracks } from '../../data/tutorials';

interface CertificateGeneratorProps {
  defaultName?: string;
}

export const CertificateGenerator: React.FC<CertificateGeneratorProps> = ({
  defaultName = 'Developer'
}) => {
  const [studentName, setStudentName] = useState(defaultName);
  const [trackName, setTrackName] = useState('Fullstack Web Engineer');
  const [issueDate] = useState(new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }));
  const [certId] = useState('DA-2026-' + Math.floor(100000 + Math.random() * 900000));
  const certRef = useRef<HTMLDivElement>(null);


  const handleGenerate = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
          <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>DevAura Free Certification</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Generate Your Certificate</h1>
      </div>

      {/* Customization Controls */}
      <div className="bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-10 shadow-sm max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Your Full Name
            </label>
            <input
              type="text"
              value={studentName}
              onChange={e => setStudentName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0a0f1d] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-sm focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-[#0a0f1d] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Certification Track
            </label>
            <select
              value={trackName}
              onChange={e => setTrackName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0a0f1d] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-sm focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-[#0a0f1d] transition cursor-pointer"
            >
              <optgroup label="DevAura Comprehensive Diplomas">
                <option value="Fullstack Web Engineer">Fullstack Web Engineer</option>
                <option value="Frontend Architecture Specialist">Frontend Architecture Specialist</option>
                <option value="Backend Systems & Cloud Engineer">Backend Systems & Cloud Engineer</option>
                <option value="Data Science & Machine Learning Specialist">Data Science & Machine Learning Specialist</option>
              </optgroup>
              {Array.from(new Set(languageTracks.map(t => t.category || 'Specialized Tracks'))).map(category => (
                <optgroup key={category} label={category}>
                  {languageTracks.filter(t => (t.category || 'Specialized Tracks') === category).map(t => (
                    <option key={t.id} value={`${t.name} Certified Specialist`}>
                      {t.name} Certified Specialist
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Credential ID: {certId}</span>
          <div className="flex space-x-2">
            <button
              onClick={handleGenerate}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition cursor-pointer"
            >
              Celebrate 🎉
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-300 dark:border-slate-700 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* The Printable Certificate Design (Light, Crisp, High-Contrast) */}
      <div
        ref={certRef}
        className="relative bg-white border-8 border-slate-300 rounded-3xl p-8 sm:p-14 shadow-xl text-center overflow-hidden max-w-4xl mx-auto print:border-none print:shadow-none"
      >
        {/* Subtle decorative watermark/gradient */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-50 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Decorative inner border */}
        <div className="border-2 border-indigo-600/30 rounded-2xl p-6 sm:p-10 relative bg-white/90">

          {/* Top Logo & Crest */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center shadow-sm mb-4">
              <Award className="w-9 h-9 text-indigo-600" />
            </div>

            <div className="text-xs uppercase tracking-widest font-extrabold text-indigo-700 mb-1">
              DevAura Developer 
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 tracking-wide">
              Certificate of Completion
            </h2>
          </div>

          <p className="text-xs text-slate-500 mt-6 uppercase tracking-wider font-semibold">
            This is proudly presented to
          </p>

          {/* Student Name */}
          <div className="my-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            {studentName || 'Your Name'}
          </div>

          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mt-4">
            For successfully demonstrating comprehensive practical knowledge, passing interactive programming assessments, and mastering modern software engineering concepts in:
          </p>

          {/* Track Name */}
          <div className="mt-5 inline-block px-6 py-2.5 rounded-xl bg-indigo-50 border border-indigo-300 text-indigo-800 font-bold text-base sm:text-xl shadow-sm">
            {trackName}
          </div>

          {/* Signature & Verification Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end text-xs text-slate-600">
            <div className="text-left">
              <div className="font-mono text-slate-900 font-bold text-sm">{issueDate}</div>
              <div className="text-[10px] uppercase text-slate-500 tracking-wider mt-0.5">Date of Issuance</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-700 mb-1">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-indigo-700 uppercase tracking-widest font-bold">
                Verified Credential
              </span>
            </div>

            <div className="sm:text-right">
              <div className="font-mono text-slate-900 font-bold text-sm">{certId}</div>
              <div className="text-[10px] uppercase text-slate-500 tracking-wider mt-0.5">Official Verification ID</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
