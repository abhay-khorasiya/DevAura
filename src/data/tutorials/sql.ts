import { TutorialChapter } from '../../types';
import { sqlQueriesChapters } from './sql/queries';
import { sqlDatabaseAndDdlChapters } from './sql/databaseAndDdl';

export const sqlChapters: TutorialChapter[] = [
  // 1 to 25: SQL Query Fundamentals (SQL HOME to SQL NULL Functions)
  ...sqlQueriesChapters,
  // 26 to 48: SQL Database, DDL, Constraints & Advanced (SQL CREATE DB to Keywords Reference)
  ...sqlDatabaseAndDdlChapters,
];
