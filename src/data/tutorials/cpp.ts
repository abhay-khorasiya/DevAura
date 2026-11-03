import { TutorialChapter } from '../../types';
import { cppBasicsChapters } from './cpp/basics';
import { cppOopAndAdvancedChapters } from './cpp/oopAndAdvanced';

export const cppChapters: TutorialChapter[] = [
  ...cppBasicsChapters,
  ...cppOopAndAdvancedChapters
];
