import { TutorialChapter } from '../../types';
import { reactBasicsChapters } from './react/basics';
import { reactHooksAndAdvancedChapters } from './react/hooksAndAdvanced';

export const reactChapters: TutorialChapter[] = [
  ...reactBasicsChapters,
  ...reactHooksAndAdvancedChapters
];
