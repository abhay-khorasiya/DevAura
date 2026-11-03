import { TutorialChapter } from '../../types';
import { jsBasicsChapters } from './javascript/basics';
import { jsDataStructuresChapters } from './javascript/dataStructures';
import { jsControlFlowAndAdvancedChapters } from './javascript/controlFlowAndAdvanced';
import { jsAsyncDomAndApisChapters } from './javascript/asyncDomAndApis';

export const jsChapters: TutorialChapter[] = [
  // 1 to 21: Basics (JS HOME to JS String Templates)
  ...jsBasicsChapters,
  // 22 to 34: Numbers, Arrays & Objects (JS Numbers to JS Comparisons)
  ...jsDataStructuresChapters,
  // 35 to 56: Control Flow & Advanced (JS If Else to JS Modules)
  ...jsControlFlowAndAdvancedChapters,
  // 57 to 68: Async, DOM & Web APIs (JS Callbacks to JS JSON)
  ...jsAsyncDomAndApisChapters,
];
