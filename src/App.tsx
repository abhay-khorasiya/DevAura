// DevAura Platform Application Entry
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/layout/CommandPalette';
import { Hero } from './components/home/Hero';
import { LanguageCards } from './components/home/LanguageCards';
import { CareerRoadmap } from './components/home/CareerRoadmap';
import { TutorialViewer } from './components/tutorial/TutorialViewer';
import { TryItEditor } from './components/playground/TryItEditor';
import { ExerciseView } from './components/exercises/ExerciseView';
import { QuizModal } from './components/quiz/QuizModal';
import { ReferenceHub } from './components/references/ReferenceHub';
import { FreeResourcesHub } from './components/resources/FreeResourcesHub';
import { CertificateGenerator } from './components/certificate/CertificateGenerator';
import { languageTracks, getLanguageTrack } from './data/tutorials';

interface RouteState {
  tab: string;
  trackId: string;
  chapterId: string;
}

// Parses URL path into application state
function parsePath(pathname: string): RouteState {
  const clean = pathname.replace(/^\/+|\/+$/g, '');
  if (!clean || clean === 'home') {
    return { tab: 'home', trackId: 'html', chapterId: 'html-home' };
  }

  const parts = clean.split('/');
  const primary = parts[0].toLowerCase();

  if (primary === 'tutorial' || primary === 'tutorials') {
    const trackId = parts[1] || 'html';
    const track = getLanguageTrack(trackId);
    const chapterId = parts[2] || track?.chapters[0]?.id || 'html-home';
    return { tab: 'tutorial', trackId, chapterId };
  }

  if (primary === 'exercises') {
    const trackId = parts[1] || 'html';
    return { tab: 'exercises', trackId, chapterId: '' };
  }

  if (primary === 'quiz' || primary === 'quizzes') {
    const trackId = parts[1] || 'all';
    return { tab: 'quiz', trackId, chapterId: '' };
  }

  if (primary === 'playground' || primary === 'tryit') {
    return { tab: 'playground', trackId: 'html', chapterId: '' };
  }

  if (primary === 'references' || primary === 'reference') {
    return { tab: 'references', trackId: 'html', chapterId: '' };
  }

  if (primary === 'resources' || primary === 'free-resources') {
    return { tab: 'resources', trackId: 'html', chapterId: '' };
  }

  if (primary === 'certificates' || primary === 'certificate') {
    return { tab: 'certificates', trackId: 'html', chapterId: '' };
  }

  // Check if primary is directly a language track (e.g. /python or /html)
  const matchedTrack = languageTracks.find(t => t.id === primary);
  if (matchedTrack) {
    const chapterId = parts[1] || matchedTrack.chapters[0]?.id || '';
    return { tab: 'tutorial', trackId: primary, chapterId };
  }

  return { tab: 'home', trackId: 'html', chapterId: 'html-home' };
}

// Constructs standard clean URL for state
function buildUrl(tab: string, trackId?: string, chapterId?: string): string {
  if (tab === 'home') return '/';
  if (tab === 'tutorial') {
    const track = getLanguageTrack(trackId || 'html');
    if (chapterId && chapterId !== track?.chapters[0]?.id) {
      return `/tutorial/${trackId}/${chapterId}`;
    }
    return `/tutorial/${trackId || 'html'}`;
  }
  if (tab === 'exercises') {
    return trackId && trackId !== 'all' ? `/exercises/${trackId}` : '/exercises';
  }
  if (tab === 'quiz') {
    return trackId && trackId !== 'all' ? `/quiz/${trackId}` : '/quiz';
  }
  return `/${tab}`;
}

// Updates document tab title
function updateTitle(tab: string, trackId?: string, chapterId?: string) {
  if (tab === 'home') {
    document.title = 'DevAura - The Modern Developer Learning Platform & Playground';
  } else if (tab === 'tutorial') {
    const track = getLanguageTrack(trackId || 'html');
    const chapter = track?.chapters.find(c => c.id === chapterId);
    if (chapter) {
      document.title = `${chapter.title} - ${track?.name} Tutorial | DevAura`;
    } else {
      document.title = `${track?.name || 'Code'} Tutorial - DevAura`;
    }
  } else if (tab === 'exercises') {
    document.title = 'Interactive Code Exercises - DevAura';
  } else if (tab === 'quiz') {
    if (trackId && trackId !== 'all') {
      const track = getLanguageTrack(trackId);
      document.title = `${track?.name || trackId.toUpperCase()} Quiz - DevAura`;
    } else {
      document.title = 'Interactive Developer Skill Quizzes - DevAura';
    }
  } else if (tab === 'playground') {
    document.title = 'Try It Yourself Code Playground - DevAura';
  } else if (tab === 'references') {
    document.title = 'Complete Web Dev Syntax Reference - DevAura';
  } else if (tab === 'resources') {
    document.title = 'Free Developer Learning Resources - DevAura';
  } else if (tab === 'certificates') {
    document.title = 'Official Verified Developer Certificate - DevAura';
  }
}

export default function App() {
  const initialRoute = parsePath(window.location.pathname);

  const [currentTab, setCurrentTab] = useState<string>(initialRoute.tab);
  const [selectedTrackId, setSelectedTrackId] = useState<string>(initialRoute.trackId);
  const [selectedChapterId, setSelectedChapterId] = useState<string>(initialRoute.chapterId);
  const [playgroundCode, setPlaygroundCode] = useState<string | undefined>(undefined);
  const [playgroundLanguage, setPlaygroundLanguage] = useState<string>('html');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devaura_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Ensure <html> always has or removes the .dark class synchronously
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('devaura_theme', isDark ? 'dark' : 'light');
    } catch (e) {
      // ignore
    }
  }, [isDark]);

  // Sync state with browser History API and back/forward buttons
  useEffect(() => {
    const onPopState = () => {
      const route = parsePath(window.location.pathname);
      setCurrentTab(route.tab);
      setSelectedTrackId(route.trackId);
      const track = getLanguageTrack(route.trackId);
      const chapterId = route.chapterId || track?.chapters[0]?.id || '';
      setSelectedChapterId(chapterId);
      updateTitle(route.tab, route.trackId, chapterId);
    };

    window.addEventListener('popstate', onPopState);

    // Initial title update
    updateTitle(initialRoute.tab, initialRoute.trackId, initialRoute.chapterId);

    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Central Navigation Handler: updates state, URL, and document title
  const navigateTo = (newTab: string, newTrackId?: string, newChapterId?: string) => {
    const trackId = newTrackId !== undefined ? newTrackId : (newTab === 'quiz' ? 'all' : selectedTrackId);
    const track = getLanguageTrack(trackId);
    const chapterId = newChapterId || (newTab === 'tutorial' ? (track?.chapters[0]?.id || '') : '');

    setCurrentTab(newTab);
    setSelectedTrackId(trackId);
    if (chapterId) setSelectedChapterId(chapterId);

    const targetUrl = buildUrl(newTab, trackId, chapterId);
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ tab: newTab, trackId, chapterId }, '', targetUrl);
    }
    updateTitle(newTab, trackId, chapterId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dedicated Back Button Handler
  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigateTo('home');
    }
  };

  // Select language track
  const handleSelectTrack = (langId: string) => {
    const track = getLanguageTrack(langId);
    const firstChapter = track?.chapters[0]?.id || '';
    navigateTo('tutorial', langId, firstChapter);
  };

  // Select specific chapter
  const handleSelectChapter = (langId: string, chapterId: string) => {
    navigateTo('tutorial', langId, chapterId);
  };

  // Synchronous butter-smooth theme switcher
  const handleToggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !isDark;

    // 1. Temporarily activate butter-smooth theme transition
    root.classList.add('theme-transition');

    // 2. Synchronously set the root dark class so CSS updates in the exact same frame
    if (nextDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    try {
      localStorage.setItem('devaura_theme', nextDark ? 'dark' : 'light');
    } catch (e) {
      // ignore
    }

    // 3. Update React state
    setIsDark(nextDark);

    // 4. Remove transition helper after animation finishes so hover and scroll performance stay 100% 60fps
    window.setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 300);
  };

  // Launch Try It Yourself Playground
  const handleOpenPlayground = (code?: string, lang?: string) => {
    if (code) setPlaygroundCode(code);
    if (lang) setPlaygroundLanguage(lang);
    navigateTo('playground');
  };

  // Launch exercises
  const handleOpenExercises = (langId?: string) => {
    navigateTo('exercises', langId || selectedTrackId);
  };

  // Launch quizzes
  const handleOpenQuiz = (langId?: string) => {
    navigateTo('quiz', langId || selectedTrackId);
  };

  // Launch references
  const handleOpenReferences = () => {
    navigateTo('references');
  };

  const currentTrack = getLanguageTrack(selectedTrackId) || languageTracks[0];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-250 ${isDark ? 'dark bg-[#090d16] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={tab => navigateTo(tab)}
        onSelectTrack={handleSelectTrack}
        onSelectChapter={handleSelectChapter}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onGoBack={handleGoBack}
      />

      {/* Sub Navigation Bar with Back Button & Breadcrumbs (when not on Home) */}
      {currentTab !== 'home' && (
        <div className="bg-white dark:bg-[#0c1222] border-b border-slate-200/80 dark:border-slate-800 px-4 sm:px-8 py-2.5 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 shadow-2xs sticky top-16 z-20">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleGoBack}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition cursor-pointer shadow-2xs"
              title="Go back to previous page"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Back</span>
            </button>

            <span className="text-slate-300 dark:text-slate-700">|</span>

            <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 font-medium truncate">
              <button onClick={() => navigateTo('home')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition font-semibold">DevAura</button>
              <span>/</span>
              <span className="capitalize font-semibold text-slate-800 dark:text-slate-200">{currentTab}</span>
              {currentTab === 'tutorial' && (
                <>
                  <span>/</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{currentTrack.name}</span>
                </>
              )}
            </div>
          </div>

          {currentTab === 'tutorial' && (
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Switch Language:</span>
              <select
                value={selectedTrackId}
                onChange={e => handleSelectTrack(e.target.value)}
                className="text-xs bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 text-slate-800 dark:text-slate-200 font-bold focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                {Array.from(new Set(languageTracks.map(t => t.category || 'Other'))).map(category => (
                  <optgroup key={category} label={category}>
                    {languageTracks.filter(t => (t.category || 'Other') === category).map(t => (
                      <option key={t.id} value={t.id}>{t.name} Tutorial</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      {/* Global Command Palette Search Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectChapter={handleSelectChapter}
        onOpenPlayground={handleOpenPlayground}
        onOpenExercises={handleOpenExercises}
        onOpenReferences={handleOpenReferences}
        onOpenResources={() => navigateTo('resources')}
      />

      {/* Dynamic View Container */}
      <div className="flex-1">
        {currentTab === 'home' && (
          <div className="relative max-w-7xl mx-auto px-4">
            {/* Main Center Home Content */}
            <main className="w-full">
              <Hero
                onStartTrack={handleSelectTrack}
                onOpenPlayground={handleOpenPlayground}
              />
              <LanguageCards
                onSelectTrack={handleSelectTrack}
                onOpenPlayground={handleOpenPlayground}
                onOpenExercises={handleOpenExercises}
              />
              <CareerRoadmap
                onStartTrack={handleSelectTrack}
              />
            </main>
          </div>
        )}

        {currentTab === 'tutorial' && (
          <TutorialViewer
            track={currentTrack}
            initialChapterId={selectedChapterId}
            onSelectChapter={handleSelectChapter}
            onGoBack={handleGoBack}
            onOpenPlayground={handleOpenPlayground}
            onOpenExercises={handleOpenExercises}
            onOpenQuiz={handleOpenQuiz}
          />
        )}

        {currentTab === 'playground' && (
          <TryItEditor
            initialCode={playgroundCode}
            initialLanguage={playgroundLanguage}
            onClose={handleGoBack}
          />
        )}

        {currentTab === 'exercises' && (
          <ExerciseView
            initialLanguage={selectedTrackId}
            onOpenPlayground={handleOpenPlayground}
          />
        )}

        {currentTab === 'quiz' && (
          <QuizModal
            initialLanguage={selectedTrackId}
            onStartTrack={handleSelectTrack}
            onClaimCertificate={() => navigateTo('certificates')}
            onSelectQuiz={(langId) => navigateTo('quiz', langId)}
          />
        )}

        {currentTab === 'references' && (
          <ReferenceHub
            onOpenPlayground={handleOpenPlayground}
          />
        )}

        {currentTab === 'resources' && (
          <FreeResourcesHub
            onOpenPlayground={handleOpenPlayground}
            onSelectTrack={handleSelectTrack}
          />
        )}

        {currentTab === 'certificates' && (
          <CertificateGenerator
            defaultName="Developer"
          />
        )}
      </div>

      {/* Footer */}
      <Footer
        onNavigate={tab => navigateTo(tab)}
        onSelectTrack={handleSelectTrack}
      />

    </div>
  );
}
