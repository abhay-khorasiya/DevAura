import { QuizQuestion } from '../../types';

export const quizQuestions: QuizQuestion[] = [
  // HTML Quiz Questions
  {
    id: 'q-html-1',
    language: 'html',
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Hyperlinks and Text Management Language',
      'Home Tool Markup Language'
    ],
    correctAnswerIndex: 0,
    explanation: 'HTML stands for HyperText Markup Language, the standard formatting language for web documents.'
  },
  {
    id: 'q-html-2',
    language: 'html',
    question: 'Which HTML element is used to specify a footer for a document or section?',
    options: ['<bottom>', '<section-end>', '<footer>', '<foot>'],
    correctAnswerIndex: 2,
    explanation: 'The <footer> element defines a footer for a document or section, typically containing author, copyright, or contact details.'
  },
  {
    id: 'q-html-3',
    language: 'html',
    question: 'What is the correct HTML element for inserting a line break?',
    options: ['<break>', '<lb>', '<br>', '<newline>'],
    correctAnswerIndex: 2,
    explanation: '<br> inserts a single line break and does not require a closing tag.'
  },

  // CSS Quiz Questions
  {
    id: 'q-css-1',
    language: 'css',
    question: 'What does CSS stand for?',
    options: [
      'Creative Style Sheets',
      'Cascading Style Sheets',
      'Computer Style Syntax',
      'Colorful Style Sheets'
    ],
    correctAnswerIndex: 1,
    explanation: 'CSS stands for Cascading Style Sheets, referring to how styles cascade down from parent to child elements.'
  },
  {
    id: 'q-css-2',
    language: 'css',
    question: 'Which property is used to change the background color of an element in CSS?',
    options: ['bgcolor', 'color', 'background-color', 'surface'],
    correctAnswerIndex: 2,
    explanation: '`background-color` is the standard CSS property for setting an element\'s background fill color.'
  },
  {
    id: 'q-css-3',
    language: 'css',
    question: 'Which CSS property controls the text size?',
    options: ['text-style', 'font-size', 'text-size', 'font-weight'],
    correctAnswerIndex: 1,
    explanation: '`font-size` adjusts the size of the font, specified in px, rem, em, %, etc.'
  },

  // JS Quiz Questions
  {
    id: 'q-js-1',
    language: 'javascript',
    question: 'Which operator is used to assign a value to a variable in JavaScript?',
    options: ['*', '=', '===', '=='],
    correctAnswerIndex: 1,
    explanation: 'The single equal sign `=` is the assignment operator. `===` checks strict equality.'
  },
  {
    id: 'q-js-2',
    language: 'javascript',
    question: 'How do you create a function in modern JavaScript using arrow syntax?',
    options: [
      'function: myFunction() => {}',
      'const myFunction = () => {}',
      'create myFunction = => {}',
      'arrow myFunction() {}'
    ],
    correctAnswerIndex: 1,
    explanation: 'Arrow function expressions are written using `const name = () => { ... }`.'
  },
  {
    id: 'q-js-3',
    language: 'javascript',
    question: 'What is the purpose of the Array map() method?',
    options: [
      'Removes elements from an array in place',
      'Transforms every item and returns a new array of the same length',
      'Sorts array elements numerically',
      'Searches for a single element and returns a boolean'
    ],
    correctAnswerIndex: 1,
    explanation: '`map()` calls a callback function on every item and returns a brand new array with transformed results.'
  },

  // Python Quiz Questions
  {
    id: 'q-py-1',
    language: 'python',
    question: 'How do you start writing an IF statement in Python?',
    options: ['if x > y then:', 'if (x > y)', 'if x > y:', 'if x > y then'],
    correctAnswerIndex: 2,
    explanation: 'Python uses `if condition:` followed by an indented block of code.'
  },
  {
    id: 'q-py-2',
    language: 'python',
    question: 'Which method can be used to remove any whitespace from both the beginning and end of a string?',
    options: ['strip()', 'trim()', 'clean()', 'len()'],
    correctAnswerIndex: 0,
    explanation: 'In Python, `strip()` removes leading and trailing whitespace. (`trim()` is used in JavaScript).'
  },
  {
    id: 'q-py-3',
    language: 'python',
    question: 'What is the output of type(10.5) in Python?',
    options: ['<class \'int\'>', '<class \'double\'>', '<class \'float\'>', '<class \'decimal\'>'],
    correctAnswerIndex: 2,
    explanation: 'Decimal numbers in Python belong to the `<class \'float\'>` data type.'
  },

  // SQL Quiz Questions
  {
    id: 'q-sql-1',
    language: 'sql',
    question: 'Which SQL statement is used to extract data from a database?',
    options: ['GET', 'OPEN', 'EXTRACT', 'SELECT'],
    correctAnswerIndex: 3,
    explanation: 'The `SELECT` statement is the core ANSI SQL keyword used to query data from database tables.'
  },
  {
    id: 'q-sql-2',
    language: 'sql',
    question: 'Which SQL clause is used to filter the result of aggregate functions like SUM or COUNT?',
    options: ['WHERE', 'HAVING', 'GROUP BY', 'FILTER'],
    correctAnswerIndex: 1,
    explanation: '`HAVING` filters aggregated groups after `GROUP BY`. `WHERE` cannot be used with aggregate functions.'
  },

  // React Quiz Questions
  {
    id: 'q-react-1',
    language: 'react',
    question: 'What is the primary purpose of the React Virtual DOM?',
    options: [
      'To directly write assembly instructions to the GPU',
      'To minimize expensive browser reflows and repaints through batched diffing',
      'To replace HTML completely with canvas rendering',
      'To provide local SQLite database storage'
    ],
    correctAnswerIndex: 1,
    explanation: 'The Virtual DOM allows React to calculate UI diffs in memory and batch the minimal set of real DOM operations.'
  },

  // Tailwind Quiz Questions
  {
    id: 'q-tw-1',
    language: 'tailwind',
    question: 'What does the Tailwind class `p-4` calculate to by default?',
    options: ['4 pixels', '1rem (16 pixels)', '4% width', '40 pixels'],
    correctAnswerIndex: 1,
    explanation: 'In Tailwind\'s 4px proportional scale, 1 unit equals 0.25rem (4px). Therefore `p-4` is 1rem or 16px.'
  },

  // TypeScript Quiz Questions
  {
    id: 'q-ts-1',
    language: 'typescript',
    question: 'What is the difference between `any` and `unknown` in TypeScript?',
    options: [
      'They are identical aliases for the same type',
      '`unknown` forces you to perform type checking before accessing properties, whereas `any` disables all type checks',
      '`unknown` can only hold strings, while `any` holds anything',
      '`unknown` was deprecated in TypeScript 2.0'
    ],
    correctAnswerIndex: 1,
    explanation: '`unknown` is the type-safe alternative to `any`. It requires narrowing before invoking methods or reading attributes.'
  },

  // Git Quiz Questions
  {
    id: 'q-git-1',
    language: 'git',
    question: 'What is the difference between `git fetch` and `git pull`?',
    options: [
      '`git fetch` deletes files, while `git pull` restores them',
      '`git fetch` downloads remote changes without merging; `git pull` fetches and immediately merges into your current branch',
      '`git pull` is only used for GitHub Enterprise',
      '`git fetch` uploads your local commits to the server'
    ],
    correctAnswerIndex: 1,
    explanation: '`git fetch` updates your remote tracking branches without altering your work. `git pull` runs fetch + merge.'
  }
];
