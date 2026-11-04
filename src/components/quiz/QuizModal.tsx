import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  HelpCircle, 
  ArrowRight,
  ArrowLeft,
  Search,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { 
  quizQuestions, 
  quizCatalog, 
  quizCategories, 
  getQuestionsByTrack, 
  getQuizMetaByTrack 
} from '../../data/quizzes';
import { LanguageLogo } from '../common/LanguageLogo';
import { QuizQuestion } from '../../types';

interface QuizModalProps {
  initialLanguage?: string;
  onStartTrack?: (langId: string) => void;
  onClaimCertificate?: () => void;
  onSelectQuiz?: (langId: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ 
  initialLanguage, 
  onStartTrack, 
  onClaimCertificate,
  onSelectQuiz 
}) => {
  // If initialLanguage is provided and not 'all', start on that quiz
  const [activeQuizId, setActiveQuizId] = useState<string | null>(() => {
    if (initialLanguage && initialLanguage !== 'all') {
      return initialLanguage;
    }
    return null;
  });

  // Catalog filters
  const [selectedCategory, setSelectedCategory] = useState<string>('All Quizzes');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active quiz test state
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Array<{
    question: QuizQuestion;
    selectedIdx: number;
    isCorrect: boolean;
  }>>([]);
  const [showReview, setShowReview] = useState<boolean>(false);

  // Sync if initialLanguage prop changes externally (e.g. browser navigation)
  useEffect(() => {
    if (initialLanguage && initialLanguage !== 'all') {
      setActiveQuizId(initialLanguage);
      setQuizStarted(false);
      setCurrentIdx(0);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setScore(0);
      setIsFinished(false);
      setUserAnswers([]);
      setShowReview(false);
    } else if (initialLanguage === 'all') {
      setActiveQuizId(null);
      setQuizStarted(false);
    }
  }, [initialLanguage]);

  // Questions for active quiz
  const currentQuestions = useMemo(() => {
    if (!activeQuizId) return [];
    const matched = getQuestionsByTrack(activeQuizId);
    if (matched.length > 0) return matched;
    // Fallback if specific track has no match
    return quizQuestions.filter(q => q.language === activeQuizId);
  }, [activeQuizId]);

  const activeMeta = useMemo(() => {
    if (!activeQuizId) return null;
    return getQuizMetaByTrack(activeQuizId) || {
      id: activeQuizId,
      name: activeQuizId.toUpperCase(),
      quizTitle: `${activeQuizId.toUpperCase()} Quiz`,
      category: 'General',
      description: `Test your knowledge and comprehension of ${activeQuizId}.`,
      questionCount: currentQuestions.length || 10,
      timeLimit: 'No time limit'
    };
  }, [activeQuizId, currentQuestions.length]);

  // Filtered catalog
  const filteredCatalog = useMemo(() => {
    return quizCatalog.filter(item => {
      const matchesCategory = selectedCategory === 'All Quizzes' || item.category === selectedCategory;
      const matchesSearch = !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.quizTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle selecting a quiz from catalog
  const handleSelectQuiz = (quizId: string) => {
    setActiveQuizId(quizId);
    setQuizStarted(false);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
    setShowReview(false);
    if (onSelectQuiz) {
      onSelectQuiz(quizId);
    }
  };

  // Return to all quizzes catalog
  const handleBackToCatalog = () => {
    setActiveQuizId(null);
    setQuizStarted(false);
    setIsFinished(false);
    if (onSelectQuiz) {
      onSelectQuiz('all');
    }
  };

  const currentQ: QuizQuestion | undefined = currentQuestions[currentIdx];

  // Selecting an option
  const handleSelectOption = (idx: number) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(idx);
    }
  };

  // Submit current answer
  const handleSubmitAnswer = () => {
    if (selectedOption === null || !currentQ) return;
    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctAnswerIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setUserAnswers(prev => [
      ...prev,
      {
        question: currentQ,
        selectedIdx: selectedOption,
        isCorrect
      }
    ]);
  };

  // Proceed to next question or complete
  const handleNextQuestion = () => {
    if (currentIdx + 1 < currentQuestions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  // Restart active quiz
  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
    setShowReview(false);
    setQuizStarted(true);
  };

  // =========================================================================
  // RENDER 1: INSIDE THE QUIZ (When activeQuizId is set)
  // =========================================================================
  if (activeQuizId && activeMeta) {
    const totalQuestions = currentQuestions.length;

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
        <div className="max-w-3xl mx-auto">
          
          {/* Back button */}
          <button
            onClick={handleBackToCatalog}
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6 px-3 py-1.5 rounded-xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600 transition cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Quizzes</span>
          </button>

          {/* VIEW A: Quiz Start / Intro Screen (W3Schools Exact Format) */}
          {!quizStarted && !isFinished && (
            <div className="bg-white dark:bg-[#0d1424] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm text-center">
              <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mx-auto mb-6 shadow-2xs">
                <LanguageLogo id={activeMeta.id} size={56} />
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
                The {activeMeta.name} Quiz
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto mb-8">
                {activeMeta.description}
              </p>

              {/* W3Schools Format Information Boxes */}
              <div className="text-left space-y-6 max-w-lg mx-auto bg-slate-50 dark:bg-[#111827] p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 mb-8">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                    The Test
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    The test contains <strong className="text-slate-900 dark:text-white">{totalQuestions || 6} questions</strong> and there is no time limit. The test is a great way to verify your practical comprehension and test what you know, or don't know, about {activeMeta.name}.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                    Count Your Score
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    You will get <strong className="text-slate-900 dark:text-white">1 point</strong> for each correct answer. At the end of the Quiz, your total score and full review will be displayed. The maximum score is <strong className="text-slate-900 dark:text-white">{totalQuestions || 6} points</strong>.
                  </p>
                </div>
              </div>

              {/* Start Quiz Button */}
              <button
                onClick={() => setQuizStarted(true)}
                disabled={totalQuestions === 0}
                className="w-full sm:w-auto min-w-[240px] inline-flex items-center justify-center space-x-2 py-3.5 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 transition cursor-pointer disabled:opacity-50"
              >
                <span>Start the {activeMeta.name} Quiz ❯</span>
              </button>

              {totalQuestions === 0 && (
                <p className="text-xs text-rose-500 mt-3">
                  Questions are being loaded for this track. Please select another quiz.
                </p>
              )}
            </div>
          )}

          {/* VIEW B: Active Question Screen */}
          {quizStarted && !isFinished && currentQ && (
            <div className="bg-white dark:bg-[#0d1424] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              
              {/* Question Top Progress Header */}
              <div className="px-6 sm:px-8 py-4 bg-slate-50 dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <LanguageLogo id={activeMeta.id} size={24} />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Question {currentIdx + 1} of {totalQuestions}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-[#0d1424] px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800">
                  Score: <span className="text-emerald-600 dark:text-emerald-400">{score}</span> / {totalQuestions}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5">
                <div 
                  className="bg-indigo-600 dark:bg-indigo-500 h-1.5 transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              <div className="p-6 sm:p-10">
                {/* Question Text */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-8 leading-snug">
                  {currentQ.question}
                </h2>

                {/* Multiple Choice Options (W3Schools Radio Design) */}
                <div className="space-y-3 mb-8">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQ.correctAnswerIndex;

                    let containerStyle = 'bg-white dark:bg-[#111827] border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200';
                    let radioCircleStyle = 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800';

                    if (isSelected) {
                      containerStyle = 'bg-indigo-50/70 dark:bg-indigo-950/60 border-indigo-400 dark:border-indigo-500 text-slate-900 dark:text-white font-semibold';
                      radioCircleStyle = 'border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-500';
                    }

                    if (isAnswerSubmitted) {
                      if (isCorrect) {
                        containerStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 dark:border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold';
                        radioCircleStyle = 'border-emerald-600 bg-emerald-600';
                      } else if (isSelected && !isCorrect) {
                        containerStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-400 dark:border-rose-500 text-rose-950 dark:text-rose-100 font-medium';
                        radioCircleStyle = 'border-rose-600 bg-rose-600';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswerSubmitted}
                        className={`w-full flex items-center justify-between p-4 sm:p-4.5 rounded-2xl border-2 text-left text-sm transition cursor-pointer ${containerStyle}`}
                      >
                        <div className="flex items-center space-x-3.5">
                          {/* Radio Circle */}
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition ${radioCircleStyle}`}>
                            {isSelected && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                          <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                            {String.fromCharCode(65 + idx)}.
                          </span>
                          <span className="leading-relaxed">{option}</span>
                        </div>

                        {/* Submission Badges */}
                        {isAnswerSubmitted && isCorrect && (
                          <div className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-bold text-xs shrink-0 ml-2">
                            <CheckCircle2 className="w-5 h-5" />
                            <span className="hidden sm:inline">Correct</span>
                          </div>
                        )}
                        {isAnswerSubmitted && isSelected && !isCorrect && (
                          <div className="flex items-center space-x-1 text-rose-600 dark:text-rose-400 font-bold text-xs shrink-0 ml-2">
                            <XCircle className="w-5 h-5" />
                            <span className="hidden sm:inline">Wrong</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box on Submit */}
                {isAnswerSubmitted && (
                  <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-[#111827] border border-indigo-200 dark:border-indigo-900/60 mb-8 animate-fadeIn">
                    <div className="flex items-start space-x-2.5">
                      <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                      <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong className="text-indigo-900 dark:text-indigo-300 block font-bold mb-0.5">Explanation:</strong>
                        {currentQ.explanation}
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-400 dark:text-slate-500">
                    {selectedOption === null ? 'Select an answer to continue' : 'Click submit to check your answer'}
                  </div>

                  {!isAnswerSubmitted ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={selectedOption === null}
                      className="inline-flex items-center space-x-2 px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition cursor-pointer"
                    >
                      <span>Submit Answer</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="inline-flex items-center space-x-2 px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition cursor-pointer"
                    >
                      <span>{currentIdx + 1 === totalQuestions ? 'Finish Quiz' : 'Next Question ❯'}</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* VIEW C: Quiz Completed / Results Screen (W3Schools Exact Format) */}
          {isFinished && (
            <div className="bg-white dark:bg-[#0d1424] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center shadow-md">
              <div className="w-20 h-20 rounded-3xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-6 border border-amber-200 dark:border-amber-800">
                <Award className="w-10 h-10" />
              </div>

              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Quiz Completed!</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Here is your overall score for the <strong className="text-slate-900 dark:text-white">{activeMeta.name} Quiz</strong>:
              </p>

              {/* Score Display Card */}
              <div className="my-8 p-7 rounded-3xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 inline-block min-w-[260px]">
                <div className="text-5xl sm:text-6xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  {Math.round((score / totalQuestions) * 100)}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mt-3 font-medium">
                  You scored <strong className="text-slate-900 dark:text-white font-extrabold">{score}</strong> out of <strong className="text-slate-900 dark:text-white font-extrabold">{totalQuestions}</strong> points.
                </div>

                <div className="mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  {score / totalQuestions >= 0.8
                    ? '🎉 Outstanding Performance!'
                    : score / totalQuestions >= 0.6
                    ? '👍 Good Job!'
                    : '📚 Keep Practicing!'}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <button
                  onClick={handleRestartQuiz}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs border border-slate-200 dark:border-slate-700 transition cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>

                {onClaimCertificate && (
                  <button
                    onClick={onClaimCertificate}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-extrabold text-xs shadow-lg shadow-amber-500/25 transition cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>Claim Certificate 🏆</span>
                  </button>
                )}

                {onStartTrack && (
                  <button
                    onClick={() => onStartTrack(activeMeta.id)}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/20 transition cursor-pointer"
                  >
                    <span>Learn {activeMeta.name} Tutorial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={handleBackToCatalog}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs border border-slate-200 dark:border-slate-700 transition cursor-pointer"
                >
                  <span>All Quizzes</span>
                </button>
              </div>

              {/* Review Answers Toggle */}
              <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-left">
                <button
                  onClick={() => setShowReview(prev => !prev)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 transition cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Review All Questions & Explanations ({userAnswers.length})</span>
                  </div>
                  {showReview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showReview && (
                  <div className="mt-4 space-y-4">
                    {userAnswers.map((ua, index) => (
                      <div 
                        key={index}
                        className={`p-5 rounded-2xl border text-xs leading-relaxed ${
                          ua.isCorrect ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/60' : 'bg-rose-50/50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/60'
                        }`}
                      >
                        <div className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                          {index + 1}. {ua.question.question}
                        </div>
                        <div className="space-y-1 mb-2">
                          <div className={ua.isCorrect ? 'text-emerald-800 dark:text-emerald-300 font-semibold' : 'text-rose-700 dark:text-rose-300'}>
                            Your Answer: {ua.question.options[ua.selectedIdx]} {ua.isCorrect ? '✓' : '✗'}
                          </div>
                          {!ua.isCorrect && (
                            <div className="text-emerald-800 dark:text-emerald-300 font-semibold">
                              Correct Answer: {ua.question.options[ua.question.correctAnswerIndex]} ✓
                            </div>
                          )}
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-700">
                          <strong>Explanation: </strong> {ua.question.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      </div>
    );
  }

  // =========================================================================
  // RENDER 2: QUIZZES CATALOG VIEW (W3Schools Default Quiz Test Page)
  // =========================================================================
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>DevAura Interactive Quizzes</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-5xl">
            W3Schools Style Quizzes
          </h1>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Test your skills across 33+ technology quizzes. Instant grading, no time limit, and detailed explanations for every question.
          </p>
        </div>

        {/* Filter Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white dark:bg-[#0d1424] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
            {quizCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 33+ quizzes..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-2xs transition font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* W3Schools 4-Column Quiz Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCatalog.map(item => (
            <div
              key={item.id}
              onClick={() => handleSelectQuiz(item.id)}
              className="group relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 flex flex-col items-center text-center justify-between shadow-2xs hover:shadow-xl hover:-translate-y-1.5 cursor-pointer"
            >
              <div className="flex flex-col items-center w-full">
                {/* Authentic Logo */}
                <div className="h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <LanguageLogo id={item.id} size={56} />
                </div>

                {/* Quiz Title */}
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {item.quizTitle}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed min-h-[38px] flex items-center justify-center">
                  {item.description}
                </p>

                {/* Meta badges */}
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {item.questionCount} Questions
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    No limit
                  </span>
                </div>
              </div>

              {/* Start Quiz Action Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectQuiz(item.id);
                }}
                className="w-full mt-5 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-600 text-slate-700 dark:text-slate-200 group-hover:text-white font-bold text-xs transition duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>Start {item.name} Quiz</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredCatalog.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">No quizzes found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Quizzes'); }}
              className="mt-3 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};