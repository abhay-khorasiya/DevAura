import { TutorialChapter } from '../../types';
import { cBasicsChapters } from './c/basics';
import { cAdvancedChapters } from './c/advanced';

export const cChapters: TutorialChapter[] = [
  ...cBasicsChapters,
  ...cAdvancedChapters
];
