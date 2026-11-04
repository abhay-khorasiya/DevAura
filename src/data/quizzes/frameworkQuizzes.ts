import { QuizQuestion } from '../../types';

export const frameworkQuizzes: QuizQuestion[] = [
  // ==================== REACT ====================
  {
    id: 'q-react-1',
    language: 'react',
    question: 'What is the primary purpose of the React Virtual DOM?',
    options: [
      'To directly write assembly instructions to the GPU',
      'To minimize expensive browser reflows and repaints through batched in-memory diffing',
      'To replace HTML completely with canvas rendering',
      'To provide local SQLite database storage'
    ],
    correctAnswerIndex: 1,
    explanation: 'The Virtual DOM allows React to calculate UI diffs in memory and batch the minimal set of real DOM operations.'
  },
  {
    id: 'q-react-2',
    language: 'react',
    question: 'Which Hook is used to add local state variables to functional components?',
    options: ['useContext', 'useReducer', 'useState', 'useRef'],
    correctAnswerIndex: 2,
    explanation: '`useState` declares state variables that preserve values between render cycles.'
  },
  {
    id: 'q-react-3',
    language: 'react',
    question: 'What is the purpose of passing an empty dependency array `[]` to `useEffect`?',
    options: [
      'It causes the effect to run on every single re-render',
      'It makes the effect run only once when the component mounts',
      'It cancels and prevents the component from rendering',
      'It turns the component into a PureComponent'
    ],
    correctAnswerIndex: 1,
    explanation: 'An empty dependency array indicates the effect depends on no state or props, so it runs only once after the initial render.'
  },
  {
    id: 'q-react-4',
    language: 'react',
    question: 'Why does React require a unique `key` prop when rendering lists of items?',
    options: [
      'To style list items uniquely using CSS',
      'To identify which items have changed, been added, or removed during reconciliation',
      'To order elements alphabetically automatically',
      'Keys are optional and provide no performance benefit'
    ],
    correctAnswerIndex: 1,
    explanation: 'Keys give list elements stable identities, allowing React’s reconciliation algorithm to reorder or update items efficiently.'
  },
  {
    id: 'q-react-5',
    language: 'react',
    question: 'In JSX, what attribute replaces the standard HTML `class` attribute?',
    options: ['class', 'className', 'cssClass', 'styleClass'],
    correctAnswerIndex: 1,
    explanation: 'Since `class` is a reserved keyword in JavaScript, JSX uses `className` to specify CSS classes.'
  },
  {
    id: 'q-react-6',
    language: 'react',
    question: 'What is the main advantage of React Fragments (`<>...</>`)?',
    options: [
      'They speed up network requests',
      'They group multiple children elements together without adding extra DOM wrapper nodes',
      'They enable server-side database access',
      'They encrypt component props'
    ],
    correctAnswerIndex: 1,
    explanation: 'Fragments allow components to return multiple sibling nodes without introducing superfluous `<div>` tags into the DOM tree.'
  },

  // ==================== ANGULAR ====================
  {
    id: 'q-angular-1',
    language: 'angular',
    question: 'What decorator is used in Angular to define a component class?',
    options: ['@Injectable()', '@Component()', '@NgModule()', '@Directive()'],
    correctAnswerIndex: 1,
    explanation: '`@Component()` decorates a TypeScript class with template, style, and metadata information.'
  },
  {
    id: 'q-angular-2',
    language: 'angular',
    question: 'Which Angular feature introduced in modern versions provides fine-grained reactivity?',
    options: ['Signals', 'Zone.js', 'Promises', 'Directives'],
    correctAnswerIndex: 0,
    explanation: 'Angular Signals provide a reactive value wrapper that notifies consumers when the value changes with optimal rendering.'
  },
  {
    id: 'q-angular-3',
    language: 'angular',
    question: 'What syntax is used for property binding in Angular templates?',
    options: ['{{property}}', '(property)', '[property]', '*property'],
    correctAnswerIndex: 2,
    explanation: 'Square brackets `[property]="expression"` bind component data to DOM element properties.'
  },
  {
    id: 'q-angular-4',
    language: 'angular',
    question: 'What syntax is used for event binding in Angular templates?',
    options: ['(event)="handler()"', '[event]="handler()"', '{{event}}', 'bind-event'],
    correctAnswerIndex: 0,
    explanation: 'Parentheses `(event)="handler()"` listen for and handle DOM user events.'
  },
  {
    id: 'q-angular-5',
    language: 'angular',
    question: 'What is the purpose of `@Injectable()` in Angular?',
    options: [
      'Defines an HTML template',
      'Marks a class as available to the Angular Dependency Injection (DI) system',
      'Creates a CSS animation',
      'Exports a routing table'
    ],
    correctAnswerIndex: 1,
    explanation: '`@Injectable()` marks services as injectable so Angular’s DI injector can instantiate and deliver them.'
  },
  {
    id: 'q-angular-6',
    language: 'angular',
    question: 'In modern Angular, what replaced the structural directive `*ngIf` in templates?',
    options: ['@when', '@if', '#if', '%if'],
    correctAnswerIndex: 1,
    explanation: 'Modern Angular uses built-in control flow syntax `@if (condition) { ... }`.'
  },

  // ==================== ANGULARJS (1.x) ====================
  {
    id: 'q-angularjs-1',
    language: 'angularjs',
    question: 'Which AngularJS directive designates the root element of an AngularJS application?',
    options: ['ng-init', 'ng-start', 'ng-app', 'ng-root'],
    correctAnswerIndex: 2,
    explanation: '`ng-app` tells AngularJS that the element is the root of the application, triggering automatic bootstrapping.'
  },
  {
    id: 'q-angularjs-2',
    language: 'angularjs',
    question: 'What is the purpose of `$scope` in AngularJS?',
    options: [
      'It manages HTTP cookies',
      'It serves as the glue and data-binding context between the Controller and View',
      'It minifies JavaScript code',
      'It handles CSS media queries'
    ],
    correctAnswerIndex: 1,
    explanation: '`$scope` is an object that refers to the application model and carries data and methods to views.'
  },
  {
    id: 'q-angularjs-3',
    language: 'angularjs',
    question: 'Which directive provides two-way data binding for HTML form input elements in AngularJS?',
    options: ['ng-bind', 'ng-value', 'ng-model', 'ng-form'],
    correctAnswerIndex: 2,
    explanation: '`ng-model` binds the value of HTML inputs, textareas, and selects to a property on `$scope` bidirectionally.'
  },
  {
    id: 'q-angularjs-4',
    language: 'angularjs',
    question: 'How are expressions written in AngularJS HTML templates?',
    options: ['[[ expression ]]', '{{ expression }}', '<% expression %>', '{{$ expression }}'],
    correctAnswerIndex: 1,
    explanation: 'Double curly braces `{{ expression }}` evaluate and display AngularJS expressions in HTML.'
  },
  {
    id: 'q-angularjs-5',
    language: 'angularjs',
    question: 'Which AngularJS directive clones HTML elements once for each item in a collection?',
    options: ['ng-for', 'ng-repeat', 'ng-each', 'ng-loop'],
    correctAnswerIndex: 1,
    explanation: '`ng-repeat="item in items"` iterates over arrays or collections and repeats DOM elements.'
  },
  {
    id: 'q-angularjs-6',
    language: 'angularjs',
    question: 'Which built-in service in AngularJS is used to make AJAX HTTP requests?',
    options: ['$ajax', '$fetch', '$http', '$request'],
    correctAnswerIndex: 2,
    explanation: '`$http` is the core AngularJS service for communicating with remote HTTP servers via XMLHttpRequest.'
  },

  // ==================== NODE.JS ====================
  {
    id: 'q-node-1',
    language: 'nodejs',
    question: 'On which JavaScript engine is Node.js built?',
    options: ['SpiderMonkey', 'JavaScriptCore', 'V8', 'Chakra'],
    correctAnswerIndex: 2,
    explanation: 'Node.js is an open-source, cross-platform runtime environment built on Google Chrome’s V8 JavaScript engine.'
  },
  {
    id: 'q-node-2',
    language: 'nodejs',
    question: 'What execution architecture does Node.js use to achieve high throughput?',
    options: [
      'Multi-threaded synchronous blocking I/O',
      'Single-threaded event loop with non-blocking asynchronous I/O',
      'Forking a new OS process per request',
      'Hardware CPU microcode scheduling'
    ],
    correctAnswerIndex: 1,
    explanation: 'Node.js uses an event-driven, non-blocking I/O model designed around a single-threaded event loop.'
  },
  {
    id: 'q-node-3',
    language: 'nodejs',
    question: 'In CommonJS module format, how do you import a module in Node.js?',
    options: ['include("module")', 'import "module"', 'require("module")', 'using "module"'],
    correctAnswerIndex: 2,
    explanation: '`const module = require("module")` is the CommonJS syntax used to import packages and files.'
  },
  {
    id: 'q-node-4',
    language: 'nodejs',
    question: 'Which core Node.js module provides asynchronous file system operations?',
    options: ['path', 'fs', 'os', 'http'],
    correctAnswerIndex: 1,
    explanation: 'The `fs` (File System) module handles reading, writing, updating, and deleting files.'
  },
  {
    id: 'q-node-5',
    language: 'nodejs',
    question: 'What is the default configuration file for a Node.js project that lists metadata and dependencies?',
    options: ['app.config.json', 'package.json', 'node.json', 'modules.json'],
    correctAnswerIndex: 1,
    explanation: '`package.json` contains dependencies, scripts, versions, author information, and configuration.'
  },
  {
    id: 'q-node-6',
    language: 'nodejs',
    question: 'Which global object in Node.js holds environment variables such as PORT or NODE_ENV?',
    options: ['process.env', 'global.vars', 'system.env', 'env.process'],
    correctAnswerIndex: 0,
    explanation: '`process.env` provides access to user environment variables passed to the running process.'
  },

  // ==================== DJANGO ====================
  {
    id: 'q-django-1',
    language: 'django',
    question: 'What design pattern does Django primarily follow?',
    options: ['MVC (Model-View-Controller)', 'MVT (Model-View-Template)', 'Flux', 'MVVM'],
    correctAnswerIndex: 1,
    explanation: 'Django follows the Model-View-Template (MVT) pattern, where Django itself handles the Controller logic.'
  },
  {
    id: 'q-django-2',
    language: 'django',
    question: 'Which Django command creates database migration files based on changes to models.py?',
    options: ['python manage.py migrate', 'python manage.py makemigrations', 'python manage.py update_db', 'python manage.py db sync'],
    correctAnswerIndex: 1,
    explanation: '`makemigrations` scans models for changes and prepares SQL migration script instructions.'
  },
  {
    id: 'q-django-3',
    language: 'django',
    question: 'Which Django command applies pending migrations to the database?',
    options: ['python manage.py apply', 'python manage.py migrate', 'python manage.py run_sql', 'python manage.py commit'],
    correctAnswerIndex: 1,
    explanation: '`python manage.py migrate` executes the generated migration scripts against your database.'
  },
  {
    id: 'q-django-4',
    language: 'django',
    question: 'Which built-in Django feature provides an instant, auto-generated web interface for managing model data?',
    options: ['Django Dashboard', 'Django Admin', 'Django CMS', 'Django Control'],
    correctAnswerIndex: 1,
    explanation: 'The Django Admin (`django.contrib.admin`) provides a secure, fully functional CRUD admin panel out of the box.'
  },
  {
    id: 'q-django-5',
    language: 'django',
    question: 'In Django templates, what syntax is used to output a variable?',
    options: ['{% variable %}', '{{ variable }}', '[[ variable ]]', '{$ variable $}'],
    correctAnswerIndex: 1,
    explanation: 'Double curly braces `{{ variable }}` output variable values in Django template engine syntax.'
  },
  {
    id: 'q-django-6',
    language: 'django',
    question: 'What is Django ORM?',
    options: [
      'An online routing module',
      'An Object-Relational Mapper that translates Python classes and objects into database tables and queries',
      'A server deployment tool',
      'An operating resource manager'
    ],
    correctAnswerIndex: 1,
    explanation: 'Django ORM allows developers to interact with relational databases purely through Python code without raw SQL.'
  }
];