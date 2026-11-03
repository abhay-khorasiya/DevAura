import { TutorialChapter } from '../../types';
import { cssBasicsChapters } from './css/basics';
import { cssLayoutChapters } from './css/layout';
import { cssAdvancedChapters } from './css/advanced';
import { cssResponsiveAndGridChapters } from './css/responsiveAndGrid';
import { cssReferencesChapters } from './css/references';

export const cssChapters: TutorialChapter[] = [
  // 1 to 20: CSS Basics (CSS HOME to CSS Tables)
  ...cssBasicsChapters,
  // 21 to 44: CSS Layout & Selectors (CSS Display to CSS Math Functions)
  ...cssLayoutChapters,
  // 45 to 66: CSS Advanced (CSS Rounded Corners to CSS Box Sizing)
  ...cssAdvancedChapters,
  // 67 to 81: CSS Responsive & Grid (CSS Media Queries to CSS Grid Items)
  ...cssResponsiveAndGridChapters,
  // 82 to 90: CSS References (CSS Properties Reference to CSS Browser Support)
  ...cssReferencesChapters,
];
