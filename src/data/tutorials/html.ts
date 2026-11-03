import { TutorialChapter } from '../../types';
import { htmlBasicsChapters } from './html/basics';
import { htmlAdvancedChapters } from './html/advanced';
import { htmlFormsChapters } from './html/forms';
import { htmlMediaAndApiChapters } from './html/media';
import { htmlReferencesChapters } from './html/references';

export const htmlChapters: TutorialChapter[] = [
  // 1 to 20: HTML Basics (HTML HOME to HTML Lists)
  ...htmlBasicsChapters,
  // 21 to 39: HTML Advanced (HTML Block & Inline to HTML vs. XHTML)
  ...htmlAdvancedChapters,
  // 40 to 45: HTML Forms (HTML Forms to HTML Input Form Attributes)
  ...htmlFormsChapters,
  // 46 to 57: HTML Graphics, Media & APIs (HTML Canvas to HTML SSE)
  ...htmlMediaAndApiChapters,
  // 58 to 71: HTML References & HTTP (HTML Tag List to HTTP Request Methods)
  ...htmlReferencesChapters,
];
