import { TutorialChapter } from '../../types';
import { pythonBasicsChapters } from './python/basics';
import { pythonCollectionsChapters } from './python/collections';
import { pythonControlFlowAndOopChapters } from './python/controlFlowAndOop';
import { pythonModulesAndAdvancedChapters } from './python/modulesAndAdvanced';

export const pythonChapters: TutorialChapter[] = [
  // 1 to 21: Python Basics (Python HOME to Access List Items)
  ...pythonBasicsChapters,
  // 22 to 34: Python Collections (List Methods to Collections Comparison)
  ...pythonCollectionsChapters,
  // 35 to 45: Python Control Flow & OOP (If Else to Match Case)
  ...pythonControlFlowAndOopChapters,
  // 46 to 57: Python Modules, Files & Advanced (Modules to Decorators & Generators)
  ...pythonModulesAndAdvancedChapters,
];
