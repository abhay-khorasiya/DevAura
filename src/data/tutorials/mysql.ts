import { TutorialChapter } from '../../types';
import { mysqlBasicsChapters } from './mysql/basics';
import { mysqlQueriesAndAdvancedChapters } from './mysql/queriesAndAdvanced';

export const mysqlChapters: TutorialChapter[] = [
  ...mysqlBasicsChapters,
  ...mysqlQueriesAndAdvancedChapters
];
