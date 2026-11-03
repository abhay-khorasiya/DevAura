import { TutorialChapter } from '../../types';
import { csharpBasicsChapters } from './csharp/basics';
import { csharpOopAndAdvancedChapters } from './csharp/oopAndAdvanced';

export const csharpChapters: TutorialChapter[] = [
  ...csharpBasicsChapters,
  ...csharpOopAndAdvancedChapters
];
