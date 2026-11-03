import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  HelpCircle, 
  Eye, 
  Award, 
  Sparkles,
  Code2
} from 'lucide-react';
import { exerciseItems } from '../../data/exercises';
import { ExerciseItem } from '../../types';

interface ExerciseViewProps {
  initialLanguage?: string;
  onOpenPlayground: (code?: string, lang?: string) => void;
}

export const ExerciseView: React.FC<ExerciseViewProps> = ({
  initialLanguage = 'all',
  onOpenPlayground,
}) => {
  const [selectedLang, setSelectedLang] = useState<string>(initialLanguage);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: string]: { correct: boolean; message: string } }>({});
  const [revealedSolutions, setRevealedSolutions] = useState<{ [key: string]: boolean }>({});
  const [showHint, setShowHint] = useState<{ [key: string]: boolean }>({});
  const [solvedIds, setSolvedIds] = useState<string[]>([]);

  // Filter items
  const filtered = selectedLang === 'all'
    ? exerciseItems
    : exerciseItems.filter(e => e.language === selectedLang);

  const currentExercise: ExerciseItem | undefined = filtered[currentIndex] || filtered[0];

  const handleInputChange = (exerciseId: string, val: string) => {
    setUserInputs(prev => ({ ...prev, [exerciseId]: val }));
    if (feedback[exerciseId]) {
      setFeedback(prev => {
        const next = { ...prev };
        delete next[exerciseId];
        return next;
      });
    }
  };

  const checkAnswer = (exercise: ExerciseItem) => {
    const input = (userInputs[exercise.id] || '').trim();
    const targets = exercise.targetBlanks.map(t => t.trim().toLowerCase());

    const isMatch = targets.some(target => target.toLowerCase() === input.toLowerCase());

    if (isMatch) {
      setFeedback(prev => ({
        ...prev,
        [exercise.id]: { correct: true, message: 'Correct! Excellent work!' }
      }));
      if (!solvedIds.includes(exercise.id)) {
        setSolvedIds(prev => [...prev, exercise.id]);
      }
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      setFeedback(prev => ({
        ...prev,
        [exercise.id]: { correct: false, message: 'Not quite. Check your syntax or look at the hint!' }
      }));
    }
  };

  const handleReveal = (id: string) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleHint = (id: string) => {
    setShowHint(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const languages = [
    { id: 'all', label: 'All Challenges' },
    { id: 'html', label: 'HTML5' },
    { id: 'css', label: 'CSS3' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'python', label: 'Python' },
    { id: 'sql', label: 'SQL' },
  ];

  if (!currentExercise) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center text-slate-500">
        No exercises found for this track.
      </div>
    );
  }

  const currentFeedback = feedback[currentExercise.id];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      
      {/* Title & Progress Banner */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-slate-200 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>DevAura Interactive Exercises</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">Test Yourself With Code Exercises</h1>
          <p className="text-sm text-slate-600 mt-1">
            Complete the missing syntax keywords and verify your understanding immediately.
          </p>
        </div>

        {/* Solved Progress Counter */}
        <div className="flex items-center space-x-3 bg-white border border-slate-200 px-4 py-2.5 rounded-2xl shadow-2xs">
          <Award className="w-5 h-5 text-amber-500" />
          <div>
            <div className="text-xs text-slate-500 font-semibold">Challenges Solved</div>
            <div className="text-sm font-bold text-slate-900">
              {solvedIds.length} <span className="text-slate-400 font-normal">/ {exerciseItems.length} completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Language Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {languages.map(lang => (
          <button
            key={lang.id}
            onClick={() => {
              setSelectedLang(lang.id);
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              selectedLang === lang.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {/* Exercise Card */}
      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md">
        
        {/* Card Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <span className="text-xs uppercase font-mono font-bold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-200">
              {currentExercise.language.toUpperCase()}
            </span>
            <span className="text-base font-bold text-slate-900">
              Exercise {currentIndex + 1} of {filtered.length}: {currentExercise.title}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 text-xs text-slate-700 font-semibold transition cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentIndex(prev => Math.min(filtered.length - 1, prev + 1))}
              disabled={currentIndex === filtered.length - 1}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 text-xs text-slate-700 font-semibold transition cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-6">
          <p className="text-base font-semibold text-slate-800 mb-6">
            {currentExercise.instructions}
          </p>

          {/* Interactive Code Blank Box */}
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 font-mono text-sm leading-loose text-slate-100 shadow-inner">
            <div className="text-slate-400 text-xs mb-3">// Fill in the blank keyword below:</div>
            
            <div className="flex flex-wrap items-center gap-2 text-slate-200">
              {currentExercise.initialCode.split('___').map((part, index, array) => (
                <React.Fragment key={index}>
                  <span className="whitespace-pre">{part}</span>
                  {index < array.length - 1 && (
                    <input
                      type="text"
                      value={userInputs[currentExercise.id] || ''}
                      onChange={e => handleInputChange(currentExercise.id, e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') {
                          checkAnswer(currentExercise);
                        }
                      }}
                      placeholder="?"
                      className="w-32 px-3 py-1 rounded-md bg-[#1e293b] border-2 border-indigo-400 text-indigo-300 font-bold text-center focus:outline-none focus:border-indigo-300 shadow-inner"
                      autoFocus
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Feedback message */}
          {currentFeedback && (
            <div className={`mt-4 p-4 rounded-xl border flex items-center space-x-3 ${
              currentFeedback.correct 
                ? 'bg-indigo-50 border-indigo-300 text-indigo-900' 
                : 'bg-rose-50 border-rose-300 text-rose-900'
            }`}>
              {currentFeedback.correct ? (
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
              ) : (
                <HelpCircle className="w-5 h-5 text-rose-600 shrink-0" />
              )}
              <div className="text-sm font-bold">{currentFeedback.message}</div>
            </div>
          )}

          {/* Action Row */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => checkAnswer(currentExercise)}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition cursor-pointer active:scale-95"
              >
                Submit Answer
              </button>

              <button
                onClick={() => handleToggleHint(currentExercise.id)}
                className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 transition"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showHint[currentExercise.id] ? 'Hide Hint' : 'Hint'}</span>
              </button>

              <button
                onClick={() => handleReveal(currentExercise.id)}
                className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 transition"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{revealedSolutions[currentExercise.id] ? 'Hide Answer' : 'Show Answer'}</span>
              </button>
            </div>

            <button
              onClick={() => onOpenPlayground(currentExercise.solution, currentExercise.language)}
              className="flex items-center space-x-1.5 text-xs text-indigo-700 hover:text-indigo-800 font-bold"
            >
              <Code2 className="w-4 h-4" />
              <span>Test in Full Playground</span>
            </button>
          </div>

          {/* Hint Accordion */}
          {showHint[currentExercise.id] && (
            <div className="mt-4 p-4 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs leading-relaxed animate-fadeIn font-medium">
              <strong>💡 Hint:</strong> {currentExercise.hint}
            </div>
          )}

          {/* Revealed Solution Accordion */}
          {revealedSolutions[currentExercise.id] && (
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-2 animate-fadeIn">
              <div className="text-slate-500 font-sans font-bold text-xs uppercase tracking-wider">Solution:</div>
              <pre className="text-indigo-200 bg-[#0f172a] p-3 rounded-lg overflow-x-auto">{currentExercise.solution}</pre>
              <p className="text-slate-700 font-sans text-xs pt-2 font-medium">{currentExercise.explanation}</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
