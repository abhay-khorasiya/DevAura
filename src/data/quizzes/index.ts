import { QuizQuestion } from '../../types';
import { webQuizzes } from './webQuizzes';
import { frameworkQuizzes } from './frameworkQuizzes';
import { programmingQuizzes } from './programmingQuizzes';
import { databaseQuizzes } from './databaseQuizzes';
import { dataScienceQuizzes } from './dataScienceQuizzes';
import { csSecurityQuizzes } from './csSecurityQuizzes';

export const quizQuestions: QuizQuestion[] = [
  ...webQuizzes,
  ...frameworkQuizzes,
  ...programmingQuizzes,
  ...databaseQuizzes,
  ...dataScienceQuizzes,
  ...csSecurityQuizzes
];

export interface QuizCatalogItem {
  id: string;
  name: string;
  quizTitle: string;
  category: string;
  description: string;
  questionCount: number;
  timeLimit: string;
}

export const quizCategories = [
  'All Quizzes',
  'HTML & CSS',
  'JavaScript & Frameworks',
  'Backend & Programming',
  'Databases & Cloud',
  'Data Science & AI',
  'CS & Security'
] as const;

export const quizCatalog: QuizCatalogItem[] = [
  // 1. HTML & CSS
  {
    id: 'html',
    name: 'HTML5',
    quizTitle: 'HTML Quiz',
    category: 'HTML & CSS',
    description: 'Test your knowledge of HTML tags, semantic structure, forms, and attributes.',
    questionCount: 8,
    timeLimit: 'No time limit'
  },
  {
    id: 'css',
    name: 'CSS3',
    quizTitle: 'CSS Quiz',
    category: 'HTML & CSS',
    description: 'Test your styling skills including Flexbox, Grid, selectors, and the box model.',
    questionCount: 8,
    timeLimit: 'No time limit'
  },

  // 2. JavaScript & Frameworks
  {
    id: 'javascript',
    name: 'JavaScript',
    quizTitle: 'JavaScript Quiz',
    category: 'JavaScript & Frameworks',
    description: 'Assess understanding of ES6+, DOM manipulation, arrays, promises, and async code.',
    questionCount: 8,
    timeLimit: 'No time limit'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    quizTitle: 'TypeScript Quiz',
    category: 'JavaScript & Frameworks',
    description: 'Check your knowledge of static typing, interfaces, generics, and utility types.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'react',
    name: 'React 18',
    quizTitle: 'React Quiz',
    category: 'JavaScript & Frameworks',
    description: 'Test your grasp of JSX, hooks (useState, useEffect), Virtual DOM, and state management.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'angular',
    name: 'Angular',
    quizTitle: 'Angular Quiz',
    category: 'JavaScript & Frameworks',
    description: 'Evaluate knowledge of components, signals, dependency injection, and directives.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'angularjs',
    name: 'AngularJS',
    quizTitle: 'AngularJS Quiz',
    category: 'JavaScript & Frameworks',
    description: 'Test classic 1.x directives (ng-model, ng-repeat), $scope, and MVC architecture.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'jquery',
    name: 'jQuery',
    quizTitle: 'jQuery Quiz',
    category: 'JavaScript & Frameworks',
    description: 'Test DOM traversal, event handling, AJAX, and animation helper methods.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },

  // 3. Backend & Programming
  {
    id: 'python',
    name: 'Python',
    quizTitle: 'Python Quiz',
    category: 'Backend & Programming',
    description: 'Test Python syntax, lists, dictionaries, comprehension, and OOP concepts.',
    questionCount: 8,
    timeLimit: 'No time limit'
  },
  {
    id: 'java',
    name: 'Java',
    quizTitle: 'Java Quiz',
    category: 'Backend & Programming',
    description: 'Test your understanding of JVM, OOP, collections, interfaces, and memory management.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'c',
    name: 'C',
    quizTitle: 'C Quiz',
    category: 'Backend & Programming',
    description: 'Assess pointers, memory allocation (malloc/free), structs, and low-level mechanics.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'cpp',
    name: 'C++',
    quizTitle: 'C++ Quiz',
    category: 'Backend & Programming',
    description: 'Test modern C++ concepts including STL vectors, templates, classes, and RAII.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'csharp',
    name: 'C#',
    quizTitle: 'C# Quiz',
    category: 'Backend & Programming',
    description: 'Evaluate knowledge of .NET runtime, LINQ, async/await, and object-oriented design.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'php',
    name: 'PHP',
    quizTitle: 'PHP Quiz',
    category: 'Backend & Programming',
    description: 'Test server-side scripting, superglobals ($_POST, $_GET), sessions, and PDO.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    quizTitle: 'Node.js Quiz',
    category: 'Backend & Programming',
    description: 'Assess event-driven architecture, non-blocking I/O, npm, and CommonJS modules.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'django',
    name: 'Django',
    quizTitle: 'Django Quiz',
    category: 'Backend & Programming',
    description: 'Test MVT architecture, ORM queries, migrations, templates, and admin dashboard.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'go',
    name: 'Go',
    quizTitle: 'Go Quiz',
    category: 'Backend & Programming',
    description: 'Test concurrency with Goroutines, channels, interfaces, and idiomatic error handling.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'rust',
    name: 'Rust',
    quizTitle: 'Rust Quiz',
    category: 'Backend & Programming',
    description: 'Evaluate ownership, borrowing, lifetime rules, match patterns, and Cargo usage.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    quizTitle: 'Kotlin Quiz',
    category: 'Backend & Programming',
    description: 'Test null safety (?), coroutines, data classes, and modern Android development.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'swift',
    name: 'Swift',
    quizTitle: 'Swift Quiz',
    category: 'Backend & Programming',
    description: 'Assess optionals, guard statements, SwiftUI principles, and Apple platform patterns.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'r',
    name: 'R',
    quizTitle: 'R Quiz',
    category: 'Backend & Programming',
    description: 'Test vectors, data frames, statistical modeling, and ggplot2 fundamentals.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },

  // 4. Databases & Cloud
  {
    id: 'sql',
    name: 'SQL',
    quizTitle: 'SQL Quiz',
    category: 'Databases & Cloud',
    description: 'Evaluate SELECT statements, JOINs, aggregate functions (HAVING), and constraints.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    quizTitle: 'MySQL Quiz',
    category: 'Databases & Cloud',
    description: 'Test InnoDB storage engine, AUTO_INCREMENT, indexing, and EXPLAIN plans.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    quizTitle: 'PostgreSQL Quiz',
    category: 'Databases & Cloud',
    description: 'Assess JSONB indexing, CTEs, RETURNING clauses, and advanced open-source SQL.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    quizTitle: 'MongoDB Quiz',
    category: 'Databases & Cloud',
    description: 'Test NoSQL document models, collections, BSON, find() filters, and aggregation.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'aws',
    name: 'AWS',
    quizTitle: 'AWS Cloud Quiz',
    category: 'Databases & Cloud',
    description: 'Test core Amazon Web Services including EC2, S3, Lambda, IAM, and RDS.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },

  // 5. Data Science & AI
  {
    id: 'numpy',
    name: 'NumPy',
    quizTitle: 'NumPy Quiz',
    category: 'Data Science & AI',
    description: 'Test ndarray creation, vectorization, broadcasting, and matrix operations.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'pandas',
    name: 'Pandas',
    quizTitle: 'Pandas Quiz',
    category: 'Data Science & AI',
    description: 'Assess DataFrames, read_csv, loc vs iloc indexing, groupby, and missing data handling.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'datascience',
    name: 'Data Science',
    quizTitle: 'Data Science & AI Quiz',
    category: 'Data Science & AI',
    description: 'Test supervised vs unsupervised learning, overfitting, evaluation metrics, and gradient descent.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'excel',
    name: 'Excel',
    quizTitle: 'Excel Quiz',
    category: 'Data Science & AI',
    description: 'Test spreadsheet formulas, XLOOKUP, PivotTables, and data analysis calculations.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },

  // 6. CS & Security
  {
    id: 'git',
    name: 'Git',
    quizTitle: 'Git Quiz',
    category: 'CS & Security',
    description: 'Assess commits, branching, merging, stash, and remote repository workflow.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'dsa',
    name: 'DSA',
    quizTitle: 'Data Structures Quiz',
    category: 'CS & Security',
    description: 'Test Big O complexity, trees, stacks, queues, hash tables, and sorting algorithms.',
    questionCount: 6,
    timeLimit: 'No time limit'
  },
  {
    id: 'cybersecurity',
    name: 'Cyber Security',
    quizTitle: 'Cyber Security Quiz',
    category: 'CS & Security',
    description: 'Assess authentication, SQL injection, XSS, password hashing, and network defenses.',
    questionCount: 6,
    timeLimit: 'No time limit'
  }
];

export function getQuestionsByTrack(trackId: string): QuizQuestion[] {
  const norm = trackId.toLowerCase().replace(/[^a-z0-9]/g, '');
  return quizQuestions.filter(q => q.language.toLowerCase().replace(/[^a-z0-9]/g, '') === norm);
}

export function getQuizMetaByTrack(trackId: string): QuizCatalogItem | undefined {
  const norm = trackId.toLowerCase().replace(/[^a-z0-9]/g, '');
  return quizCatalog.find(item => item.id.toLowerCase().replace(/[^a-z0-9]/g, '') === norm);
}
