import { LanguageTrack } from '../../types';

// Web Development
import { htmlChapters } from './html';
import { cssChapters } from './css';
import { jsChapters } from './javascript';
import { typescriptChapters } from './typescript';
import { jqueryChapters } from './jquery';
import { gitChapters } from './git';

// Web Frameworks
import { reactChapters } from './react';
import { angularChapters } from './angular';
import { angularJsChapters } from './angularjs';
import { nodejsChapters } from './nodejs';
import { djangoChapters } from './django';

// Core Programming Languages
import { pythonChapters } from './python';
import { javaChapters } from './java';
import { cChapters } from './c';
import { cppChapters } from './cpp';
import { csharpChapters } from './csharp';
import { phpChapters } from './php';
import { goChapters } from './go';
import { rustChapters } from './rust';
import { kotlinChapters } from './kotlin';
import { swiftChapters } from './swift';
import { rChapters } from './r';

// Backend & Databases
import { sqlChapters } from './sql';
import { mysqlChapters } from './mysql';
import { postgresqlChapters } from './postgresql';
import { mongodbChapters } from './mongodb';
import { awsChapters } from './aws';

// Data Science & Analytics
import { numpyChapters } from './numpy';
import { pandasChapters } from './pandas';
import { dataScienceChapters } from './datascience';
import { excelChapters } from './excel';

// Computer Science & Security
import { dsaChapters } from './dsa';
import { cyberSecurityChapters } from './cybersecurity';

export const languageTracks: LanguageTrack[] = [
  // ==================== 1. WEB DEVELOPMENT (6 Tracks) ====================
  {
    id: 'html',
    name: 'HTML5',
    tagline: 'The structural skeleton of the web',
    description: 'Learn the latest HTML5 semantics, document trees, forms, elements, and accessible structure.',
    iconName: 'FileCode2',
    color: '#e44d26',
    badgeBg: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    borderColor: 'hover:border-orange-500/50',
    category: 'Web Development',
    chapters: htmlChapters,
    exerciseCount: 30,
    quizQuestionCount: 35
  },
  {
    id: 'css',
    name: 'CSS3',
    tagline: 'Modern styling, layouts & aesthetics',
    description: 'Master Flexbox, CSS Grid, animations, responsive design, modern glassmorphism, and transitions.',
    iconName: 'Palette',
    color: '#0284c7',
    badgeBg: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
    borderColor: 'hover:border-sky-500/50',
    category: 'Web Development',
    chapters: cssChapters,
    exerciseCount: 28,
    quizQuestionCount: 30
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    tagline: 'The universal programming language',
    description: 'From ES6+ syntax, closures, and async/await to DOM manipulation and browser APIs.',
    iconName: 'Sparkles',
    color: '#f59e0b',
    badgeBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    borderColor: 'hover:border-amber-500/50',
    category: 'Web Development',
    chapters: jsChapters,
    exerciseCount: 35,
    quizQuestionCount: 40
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    tagline: 'JavaScript with syntax for types',
    description: 'Static type checking, interfaces, generics, enums, unions, casting, and utility types.',
    iconName: 'Code2',
    color: '#3178c6',
    badgeBg: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    borderColor: 'hover:border-blue-500/50',
    category: 'Web Development',
    chapters: typescriptChapters,
    exerciseCount: 22,
    quizQuestionCount: 25
  },
  {
    id: 'jquery',
    name: 'jQuery',
    tagline: 'Write less, do more DOM library',
    description: 'HTML DOM selection, events, animations, traversing, AJAX manipulation, and plugins.',
    iconName: 'Zap',
    color: '#0769ad',
    badgeBg: 'bg-blue-600/10 text-blue-700 border-blue-600/20',
    borderColor: 'hover:border-blue-600/50',
    category: 'Web Development',
    chapters: jqueryChapters,
    exerciseCount: 16,
    quizQuestionCount: 20
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    tagline: 'Distributed version control & team collaboration',
    description: 'Master commits, branches, merges, rebasing, remote remotes, and pull requests.',
    iconName: 'GitBranch',
    color: '#f05032',
    badgeBg: 'bg-red-500/10 text-red-600 border-red-500/20',
    borderColor: 'hover:border-red-500/50',
    category: 'Web Development',
    chapters: gitChapters,
    exerciseCount: 20,
    quizQuestionCount: 25
  },

  // ==================== 2. WEB FRAMEWORKS (5 Tracks) ====================
  {
    id: 'react',
    name: 'React 18',
    tagline: 'Component-driven UI architecture',
    description: 'Master JSX, useState, useEffect, custom hooks, context, memoization, and Next.js foundations.',
    iconName: 'Atom',
    color: '#0284c7',
    badgeBg: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
    borderColor: 'hover:border-sky-500/50',
    category: 'Web Frameworks',
    chapters: reactChapters,
    exerciseCount: 30,
    quizQuestionCount: 35
  },
  {
    id: 'angular',
    name: 'Angular',
    tagline: 'Modern enterprise standalone web platform',
    description: 'Standalone components, Signals, modern control flow (@if/@for), dependency injection, and routing.',
    iconName: 'Layers',
    color: '#dd0031',
    badgeBg: 'bg-red-500/10 text-red-600 border-red-500/20',
    borderColor: 'hover:border-red-500/50',
    category: 'Web Frameworks',
    chapters: angularChapters,
    exerciseCount: 20,
    quizQuestionCount: 24
  },
  {
    id: 'angularjs',
    name: 'AngularJS (1.x)',
    tagline: 'Directives, scopes & two-way data binding',
    description: 'Understand ng-app, $scope, controllers, expressions, filters, $http, and classic legacy SPA architecture.',
    iconName: 'Layers',
    color: '#e23237',
    badgeBg: 'bg-red-500/10 text-red-600 border-red-500/20',
    borderColor: 'hover:border-red-500/50',
    category: 'Web Frameworks',
    chapters: angularJsChapters,
    exerciseCount: 16,
    quizQuestionCount: 20
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    tagline: 'Asynchronous event-driven JavaScript runtime',
    description: 'Build fast network backends with the event loop, streams, buffers, EventEmitter, Express, and npm.',
    iconName: 'Server',
    color: '#339933',
    badgeBg: 'bg-green-600/10 text-green-700 border-green-600/20',
    borderColor: 'hover:border-green-600/50',
    category: 'Web Frameworks',
    chapters: nodejsChapters,
    exerciseCount: 18,
    quizQuestionCount: 22
  },
  {
    id: 'django',
    name: 'Django',
    tagline: 'The web framework for perfectionists with deadlines',
    description: 'Python web framework featuring MVT architecture, ORM models, views, templates, and admin portal.',
    iconName: 'Globe',
    color: '#092e20',
    badgeBg: 'bg-slate-700/10 text-slate-800 border-slate-700/20',
    borderColor: 'hover:border-slate-700/50',
    category: 'Web Frameworks',
    chapters: djangoChapters,
    exerciseCount: 18,
    quizQuestionCount: 20
  },

  // ==================== 3. CORE PROGRAMMING LANGUAGES (11 Tracks) ====================
  {
    id: 'python',
    name: 'Python',
    tagline: 'Readable, powerful & versatile',
    description: 'From syntax fundamentals to data science libraries, automation scripts, and object-oriented architectures.',
    iconName: 'Terminal',
    color: '#4f46e5',
    badgeBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    borderColor: 'hover:border-indigo-500/50',
    category: 'Programming Languages',
    chapters: pythonChapters,
    exerciseCount: 32,
    quizQuestionCount: 35
  },
  {
    id: 'java',
    name: 'Java',
    tagline: 'Write once, run anywhere enterprise language',
    description: 'Master JVM architecture, OOP principles, collections framework, exception handling, and multithreading.',
    iconName: 'Coffee',
    color: '#b07219',
    badgeBg: 'bg-amber-700/10 text-amber-800 border-amber-700/20',
    borderColor: 'hover:border-amber-700/50',
    category: 'Programming Languages',
    chapters: javaChapters,
    exerciseCount: 25,
    quizQuestionCount: 30
  },
  {
    id: 'c',
    name: 'C Language',
    tagline: 'The mother of modern systems programming',
    description: 'Understand pointers, memory allocation (malloc/free), structs, arrays, and low-level performance.',
    iconName: 'Code',
    color: '#555555',
    badgeBg: 'bg-slate-500/10 text-slate-700 border-slate-500/20',
    borderColor: 'hover:border-slate-500/50',
    category: 'Programming Languages',
    chapters: cChapters,
    exerciseCount: 24,
    quizQuestionCount: 28
  },
  {
    id: 'cpp',
    name: 'C++',
    tagline: 'High-performance systems & game development',
    description: 'Master object-oriented programming, classes, templates, STL containers, references, and RAII.',
    iconName: 'Code',
    color: '#f34b7d',
    badgeBg: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    borderColor: 'hover:border-rose-500/50',
    category: 'Programming Languages',
    chapters: cppChapters,
    exerciseCount: 26,
    quizQuestionCount: 30
  },
  {
    id: 'csharp',
    name: 'C# (.NET)',
    tagline: 'Modern, object-oriented language for enterprise & Unity',
    description: 'Learn C# fundamentals, classes, properties, LINQ queries, async/await, and the modern .NET ecosystem.',
    iconName: 'Code2',
    color: '#178600',
    badgeBg: 'bg-emerald-600/10 text-emerald-700 border-emerald-600/20',
    borderColor: 'hover:border-emerald-600/50',
    category: 'Programming Languages',
    chapters: csharpChapters,
    exerciseCount: 25,
    quizQuestionCount: 30
  },
  {
    id: 'php',
    name: 'PHP 8',
    tagline: 'The server-side web scripting powerhouse',
    description: 'Superglobals, forms, MySQL integration, sessions, cookies, OOP in PHP 8, and REST API development.',
    iconName: 'Cpu',
    color: '#4f5d95',
    badgeBg: 'bg-indigo-600/10 text-indigo-700 border-indigo-600/20',
    borderColor: 'hover:border-indigo-600/50',
    category: 'Programming Languages',
    chapters: phpChapters,
    exerciseCount: 22,
    quizQuestionCount: 25
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    tagline: 'Google’s compiled, concurrent systems language',
    description: 'Blazingly fast compilation, goroutines, channels, interfaces, slices, structs, and cloud microservices.',
    iconName: 'Binary',
    color: '#00add8',
    badgeBg: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
    borderColor: 'hover:border-sky-500/50',
    category: 'Programming Languages',
    chapters: goChapters,
    exerciseCount: 22,
    quizQuestionCount: 26
  },
  {
    id: 'rust',
    name: 'Rust',
    tagline: 'Fearless concurrency & memory safety without GC',
    description: 'Ownership, borrowing, lifetimes, pattern matching, Result error handling, Cargo, and zero-cost abstractions.',
    iconName: 'Binary',
    color: '#dea584',
    badgeBg: 'bg-orange-700/10 text-orange-800 border-orange-700/20',
    borderColor: 'hover:border-orange-700/50',
    category: 'Programming Languages',
    chapters: rustChapters,
    exerciseCount: 22,
    quizQuestionCount: 26
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    tagline: 'Modern, concise & 100% Java-interoperable language',
    description: 'Android official language, val vs var, null safety (?, ?:), smart casts, data classes, and collections.',
    iconName: 'Smartphone',
    color: '#7f52ff',
    badgeBg: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    borderColor: 'hover:border-purple-500/50',
    category: 'Programming Languages',
    chapters: kotlinChapters,
    exerciseCount: 20,
    quizQuestionCount: 24
  },
  {
    id: 'swift',
    name: 'Swift',
    tagline: 'Apple’s powerful, fast & safe native programming language',
    description: 'iOS, macOS, and visionOS development with Optionals, guard let, closures, structs vs classes, and SwiftUI.',
    iconName: 'Smartphone',
    color: '#f05138',
    badgeBg: 'bg-red-500/10 text-red-600 border-red-500/20',
    borderColor: 'hover:border-red-500/50',
    category: 'Programming Languages',
    chapters: swiftChapters,
    exerciseCount: 20,
    quizQuestionCount: 24
  },
  {
    id: 'r',
    name: 'R Language',
    tagline: 'Statistical computing & graphics powerhouse',
    description: 'Data frames, vectors, summary statistics, linear modeling, statistical plotting, and matrix manipulation.',
    iconName: 'BarChart2',
    color: '#276dc3',
    badgeBg: 'bg-blue-600/10 text-blue-700 border-blue-600/20',
    borderColor: 'hover:border-blue-600/50',
    category: 'Programming Languages',
    chapters: rChapters,
    exerciseCount: 18,
    quizQuestionCount: 22
  },

  // ==================== 4. BACKEND & DATABASES (5 Tracks) ====================
  {
    id: 'sql',
    name: 'SQL',
    tagline: 'The universal language for relational databases',
    description: 'Master queries, JOINs, aggregations, window functions, indexing, and relational database schema design.',
    iconName: 'Database',
    color: '#4f46e5',
    badgeBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    borderColor: 'hover:border-indigo-500/50',
    category: 'Backend & Databases',
    chapters: sqlChapters,
    exerciseCount: 30,
    quizQuestionCount: 32
  },
  {
    id: 'mysql',
    name: 'MySQL',
    tagline: 'The world’s most popular open-source RDBMS',
    description: 'Tables, foreign keys, stored procedures, transactions, ACID compliance, and query performance tuning.',
    iconName: 'Database',
    color: '#00758f',
    badgeBg: 'bg-cyan-600/10 text-cyan-700 border-cyan-600/20',
    borderColor: 'hover:border-cyan-600/50',
    category: 'Backend & Databases',
    chapters: mysqlChapters,
    exerciseCount: 24,
    quizQuestionCount: 28
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    tagline: 'Enterprise-grade advanced object-relational database',
    description: 'Master JSONB document querying, GIN indexing, CTEs, full-text search, MVCC, and transactional safety.',
    iconName: 'Database',
    color: '#336791',
    badgeBg: 'bg-blue-600/10 text-blue-700 border-blue-600/20',
    borderColor: 'hover:border-blue-600/50',
    category: 'Backend & Databases',
    chapters: postgresqlChapters,
    exerciseCount: 20,
    quizQuestionCount: 24
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    tagline: 'Leading document-based NoSQL database',
    description: 'BSON documents, mongosh, flexible collections, query operators, atomic updates, and aggregation pipelines.',
    iconName: 'Database',
    color: '#13aa52',
    badgeBg: 'bg-emerald-600/10 text-emerald-700 border-emerald-600/20',
    borderColor: 'hover:border-emerald-600/50',
    category: 'Backend & Databases',
    chapters: mongodbChapters,
    exerciseCount: 20,
    quizQuestionCount: 24
  },
  {
    id: 'aws',
    name: 'AWS Cloud Services',
    tagline: 'Cloud infrastructure, computing & serverless',
    description: 'Master EC2 instances, S3 storage, Lambda serverless, IAM security, VPC networks, and CloudFront CDN.',
    iconName: 'Globe',
    color: '#ff9900',
    badgeBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    borderColor: 'hover:border-amber-500/50',
    category: 'Backend & Databases',
    chapters: awsChapters,
    exerciseCount: 20,
    quizQuestionCount: 25
  },

  // ==================== 5. DATA SCIENCE & ANALYTICS (4 Tracks) ====================
  {
    id: 'numpy',
    name: 'NumPy',
    tagline: 'Fundamental package for scientific computing with Python',
    description: 'Multidimensional ndarray, broadcasting, vectorization, linear algebra, and fast array slicing.',
    iconName: 'Binary',
    color: '#4dabcf',
    badgeBg: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
    borderColor: 'hover:border-sky-500/50',
    category: 'Data Science & AI',
    chapters: numpyChapters,
    exerciseCount: 18,
    quizQuestionCount: 20
  },
  {
    id: 'pandas',
    name: 'Pandas',
    tagline: 'Fast, powerful data manipulation & analysis toolkit',
    description: 'Series, DataFrames, reading CSV/Excel, groupby aggregations, handling missing data, and merging datasets.',
    iconName: 'BarChart2',
    color: '#150458',
    badgeBg: 'bg-indigo-900/10 text-indigo-900 border-indigo-900/20',
    borderColor: 'hover:border-indigo-900/50',
    category: 'Data Science & AI',
    chapters: pandasChapters,
    exerciseCount: 18,
    quizQuestionCount: 20
  },
  {
    id: 'datascience',
    name: 'Data Science',
    tagline: 'From raw data to actionable predictive intelligence',
    description: 'Statistics, data distributions, linear functions, regression modeling, and model evaluation metrics.',
    iconName: 'Brain',
    color: '#4f46e5',
    badgeBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    borderColor: 'hover:border-indigo-500/50',
    category: 'Data Science & AI',
    chapters: dataScienceChapters,
    exerciseCount: 18,
    quizQuestionCount: 22
  },
  {
    id: 'excel',
    name: 'Excel & Sheets',
    tagline: 'Formulas, Pivot Tables & Analytics',
    description: 'Master XLOOKUP, SUMIFS, Pivot Tables, conditional formatting, and analytical spreadsheets.',
    iconName: 'Table',
    color: '#107c41',
    badgeBg: 'bg-emerald-600/10 text-emerald-700 border-emerald-600/20',
    borderColor: 'hover:border-emerald-600/50',
    category: 'Data Science & AI',
    chapters: excelChapters,
    exerciseCount: 16,
    quizQuestionCount: 20
  },

  // ==================== 6. COMPUTER SCIENCE & SECURITY (2 Tracks) ====================
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    tagline: 'Big-O complexity & problem solving',
    description: 'Arrays, Linked Lists, Stacks, Queues, Binary Search Trees, Graphs, sorting algorithms, and dynamic programming.',
    iconName: 'Binary',
    color: '#4f46e5',
    badgeBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    borderColor: 'hover:border-indigo-500/50',
    category: 'Computer Science & Security',
    chapters: dsaChapters,
    exerciseCount: 25,
    quizQuestionCount: 30
  },
  {
    id: 'cybersecurity',
    name: 'Cyber Security',
    tagline: 'OWASP Top 10 & Defensive Web Coding',
    description: 'Protect applications against XSS, SQL injection, CSRF, broken authentication, and master cryptography.',
    iconName: 'ShieldCheck',
    color: '#dc2626',
    badgeBg: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    borderColor: 'hover:border-rose-500/50',
    category: 'Computer Science & Security',
    chapters: cyberSecurityChapters,
    exerciseCount: 20,
    quizQuestionCount: 25
  }
];

export function getLanguageTrack(id: string): LanguageTrack | undefined {
  return languageTracks.find(t => t.id === id);
}
