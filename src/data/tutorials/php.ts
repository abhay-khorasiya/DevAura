import { TutorialChapter } from '../../types';
import { phpBasicsChapters } from './php/basics';
import { phpAdvancedAndOopChapters } from './php/advancedAndOop';

export const phpChapters: TutorialChapter[] = [
  // 1 to 20: PHP Basics (PHP HOME to PHP Superglobals)
  ...phpBasicsChapters,
  // 21 to 46: PHP Forms, Advanced, OOP & MySQL (Form Handling to MySQL CRUD)
  ...phpAdvancedAndOopChapters,
];
