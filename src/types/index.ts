export type LanguageId = string;

export interface TutorialChapter {
  id: string;
  title: string;
  slug: string;
  summary: string;
  readTime: string;
  category?: string;
  content: {
    overview: string;
    sections: {
      heading: string;
      body: string;
      code?: string;
      codeLanguage?: string;
      interactive?: boolean;
      tips?: string[];
      tryItCode?: string;
    }[];
  };
}

export interface LanguageTrack {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  color: string;
  badgeBg: string;
  borderColor: string;
  category?: string;
  chapters: TutorialChapter[];
  exerciseCount: number;
  quizQuestionCount: number;
}

export interface ExerciseItem {
  id: string;
  language: LanguageId;
  title: string;
  instructions: string;
  initialCode: string;
  targetBlanks: string[];
  solution: string;
  hint: string;
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  language: LanguageId;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ReferenceItem {
  id: string;
  language: LanguageId;
  name: string;
  category: string;
  syntax: string;
  description: string;
  example: string;
  version?: string;
}
