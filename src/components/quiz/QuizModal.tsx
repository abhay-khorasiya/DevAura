import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  HelpCircle, 
  ArrowRight
} from 'lucide-react';
import { quizQuestions } from '../../data/quizzes';
import { QuizQuestion } from '../../types';

interface QuizModalProps {
  onStartTrack?: (langId: string) => void;
  onClaimCertificate?: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ onStartTrack, onClaimCertificate }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const questions = selectedLanguage === 'all'
    ? quizQuestions
    : quizQuestions.filter(q => q.language === selectedLanguage);

  const currentQ: QuizQuestion | undefined = questions[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(idx);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || !currentQ) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  const languages = [
    { id: 'all', label: 'All Topics' },
    { id: 'html', label: 'HTML5' },
    { id: 'css', label: 'CSS3' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'python', label: 'Python' },
    { id: 'sql', label: 'SQL' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      
      {/* Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>DevAura Certification Quizzes</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Interactive Skill Quizzes</h1>
        <p className="text-sm text-slate-600 mt-2">
          Test your programming comprehension with instant feedback and grading.
        </p>

        {/* Language Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {languages.map(l => (
            <button
              key={l.id}
              onClick={() => handleLanguageChange(l.id)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                selectedLanguage === l.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Finished Screen */}
      {isFinished ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-6 border border-amber-200">
            <Award className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900">Quiz Completed!</h2>
          <p className="text-slate-500 text-sm mt-1">Here is how you performed on this challenge:</p>

          <div className="my-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 inline-block">
            <div className="text-5xl font-extrabold text-indigo-600">
              {Math.round((score / questions.length) * 100)}%
            </div>
            <div className="text-sm text-slate-600 mt-2 font-medium">
              You scored <strong className="text-slate-900">{score}</strong> out of <strong className="text-slate-900">{questions.length}</strong> correct.
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={handleRestart}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Quiz</span>
            </button>

            {onClaimCertificate && (
              <button
                onClick={onClaimCertificate}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs shadow-lg shadow-amber-500/25 transition cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>Claim Certificate 🏆</span>
              </button>
            )}

            {onStartTrack && (
              <button
                onClick={() => onStartTrack(selectedLanguage === 'all' ? 'html' : selectedLanguage)}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/20 transition cursor-pointer"
              >
                <span>Continue Learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : currentQ ? (
        /* Active Question Card */
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
            <span className="text-xs font-mono font-bold uppercase text-amber-700">
              Question {currentIdx + 1} of {questions.length} • {currentQ.language.toUpperCase()}
            </span>
            <span className="text-xs text-slate-500">
              Score: <strong className="text-indigo-700 font-bold">{score}</strong>
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                let btnStyle = 'bg-slate-50/70 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100';

                if (selectedOption === idx) {
                  btnStyle = 'bg-amber-50 border-amber-400 text-amber-950 font-bold';
                }

                if (isAnswerSubmitted) {
                  if (idx === currentQ.correctAnswerIndex) {
                    btnStyle = 'bg-indigo-50 border-indigo-500 text-indigo-950 font-bold';
                  } else if (selectedOption === idx) {
                    btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-left text-sm transition cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-lg bg-white border border-slate-300 flex items-center justify-center font-mono text-xs text-slate-600 shrink-0 font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {isAnswerSubmitted && idx === currentQ.correctAnswerIndex && (
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 ml-2" />
                    )}
                    {isAnswerSubmitted && selectedOption === idx && idx !== currentQ.correctAnswerIndex && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when submitted */}
            {isAnswerSubmitted && (
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed animate-fadeIn">
                <strong className="text-indigo-700">Explanation: </strong>
                {currentQ.explanation}
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 transition cursor-pointer"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition cursor-pointer"
                >
                  <span>{currentIdx + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </div>
      ) : null}

    </div>
  );
};
