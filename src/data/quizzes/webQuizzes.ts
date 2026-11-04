import { QuizQuestion } from '../../types';

export const webQuizzes: QuizQuestion[] = [
  // ==================== HTML5 ====================
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
  {
    id: 'q-html-4',
    language: 'html',
    question: 'Which character is used to indicate an end tag in HTML?',
    options: ['<', '*', '/', '^'],
    correctAnswerIndex: 2,
    explanation: 'Closing tags in HTML begin with a forward slash, such as </h1>, </p>, or </div>.'
  },
  {
    id: 'q-html-5',
    language: 'html',
    question: 'What is the correct HTML element for the largest heading?',
    options: ['<h6>', '<head>', '<heading>', '<h1>'],
    correctAnswerIndex: 3,
    explanation: '<h1> defines the most important and largest heading in HTML.'
  },
  {
    id: 'q-html-6',
    language: 'html',
    question: 'Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?',
    options: ['title', 'alt', 'src', 'longdesc'],
    correctAnswerIndex: 1,
    explanation: 'The `alt` attribute provides accessible replacement text for screen readers and when images fail to load.'
  },
  {
    id: 'q-html-7',
    language: 'html',
    question: 'Which HTML5 element is used to define navigation links?',
    options: ['<navigate>', '<nav>', '<links>', '<navigation>'],
    correctAnswerIndex: 1,
    explanation: 'The semantic <nav> tag is dedicated for major navigation block links.'
  },
  {
    id: 'q-html-8',
    language: 'html',
    question: 'Which doctype declaration is required at the very top of an HTML5 document?',
    options: [
      '<!DOCTYPE html>',
      '<!DOCTYPE HTML5 PUBLIC>',
      '<?xml version="1.0" encoding="utf-8"?>',
      '<doctype:html>'
    ],
    correctAnswerIndex: 0,
    explanation: '<!DOCTYPE html> is the concise and standard doctype required for all HTML5 documents.'
  },

  // ==================== CSS3 ====================
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
  {
    id: 'q-css-4',
    language: 'css',
    question: 'How do you select an element with id="main-header" in CSS?',
    options: ['.main-header', '#main-header', '*main-header', 'header.main-header'],
    correctAnswerIndex: 1,
    explanation: 'The hash symbol `#` is used in CSS selectors to target elements by their `id`.'
  },
  {
    id: 'q-css-5',
    language: 'css',
    question: 'Which property in CSS Flexbox aligns flex items along the main axis?',
    options: ['align-items', 'justify-content', 'align-content', 'place-items'],
    correctAnswerIndex: 1,
    explanation: '`justify-content` defines how extra space is distributed along the main axis of a flex container.'
  },
  {
    id: 'q-css-6',
    language: 'css',
    question: 'What is the default value of the `position` property in CSS?',
    options: ['relative', 'fixed', 'static', 'absolute'],
    correctAnswerIndex: 2,
    explanation: 'The default positioning mode for all standard HTML elements is `static`.'
  },
  {
    id: 'q-css-7',
    language: 'css',
    question: 'Which CSS unit is relative to the font-size of the root <html> element?',
    options: ['em', 'px', 'rem', 'vh'],
    correctAnswerIndex: 2,
    explanation: '`rem` stands for "root em", representing a multiple of the root html element\'s font-size.'
  },
  {
    id: 'q-css-8',
    language: 'css',
    question: 'In the CSS Box Model, which layer is outermost?',
    options: ['Padding', 'Border', 'Margin', 'Content'],
    correctAnswerIndex: 2,
    explanation: 'From outside in: Margin -> Border -> Padding -> Content.'
  },

  // ==================== JAVASCRIPT ====================
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
    question: 'How do you create an arrow function in modern JavaScript?',
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
    question: 'What is the purpose of the Array map() method in JavaScript?',
    options: [
      'Removes elements from an array in place',
      'Transforms every item and returns a new array of the same length',
      'Sorts array elements numerically',
      'Searches for a single element and returns a boolean'
    ],
    correctAnswerIndex: 1,
    explanation: '`map()` calls a callback function on every item and returns a brand new array with transformed results.'
  },
  {
    id: 'q-js-4',
    language: 'javascript',
    question: 'Which keyword declares a block-scoped variable that cannot be reassigned?',
    options: ['var', 'let', 'const', 'static'],
    correctAnswerIndex: 2,
    explanation: '`const` defines block-scoped read-only identifiers that cannot be reassigned.'
  },
  {
    id: 'q-js-5',
    language: 'javascript',
    question: 'What does `typeof NaN` evaluate to in JavaScript?',
    options: ['"undefined"', '"number"', '"nan"', '"object"'],
    correctAnswerIndex: 1,
    explanation: 'In JavaScript, `NaN` (Not-a-Number) is formally typed as a numeric value (`"number"`).'
  },
  {
    id: 'q-js-6',
    language: 'javascript',
    question: 'Which method converts a JavaScript object into a JSON string?',
    options: ['JSON.parse()', 'JSON.stringify()', 'JSON.objectify()', 'JSON.toString()'],
    correctAnswerIndex: 1,
    explanation: '`JSON.stringify()` serializes objects, arrays, and primitive values into a JSON-formatted string.'
  },
  {
    id: 'q-js-7',
    language: 'javascript',
    question: 'What is the difference between `==` and `===`?',
    options: [
      '`==` checks equality with type coercion, while `===` checks strict equality without type coercion',
      '`===` assigns a value, while `==` compares',
      'There is no difference in ES6',
      '`==` is faster than `===`'
    ],
    correctAnswerIndex: 0,
    explanation: '`==` performs implicit type conversion before comparison, whereas `===` compares both value and type strictly.'
  },
  {
    id: 'q-js-8',
    language: 'javascript',
    question: 'Which Web API method is used to make asynchronous HTTP network requests?',
    options: ['fetch()', 'request()', 'http.get()', 'ajax.load()'],
    correctAnswerIndex: 0,
    explanation: 'The standard modern browser API for asynchronous HTTP requests is `fetch()`.'
  },

  // ==================== TYPESCRIPT ====================
  {
    id: 'q-ts-1',
    language: 'typescript',
    question: 'What is the difference between `any` and `unknown` in TypeScript?',
    options: [
      'They are identical aliases for the same type',
      '`unknown` forces type checking before accessing properties, whereas `any` disables all type checks',
      '`unknown` can only hold strings, while `any` holds anything',
      '`unknown` was deprecated in TypeScript 2.0'
    ],
    correctAnswerIndex: 1,
    explanation: '`unknown` is the type-safe alternative to `any`. It requires narrowing before invoking methods or reading attributes.'
  },
  {
    id: 'q-ts-2',
    language: 'typescript',
    question: 'Which keyword is used to create a new object type blueprint in TypeScript?',
    options: ['blueprint', 'interface', 'struct', 'model'],
    correctAnswerIndex: 1,
    explanation: '`interface` (along with `type`) is used to define shapes and contracts of objects in TypeScript.'
  },
  {
    id: 'q-ts-3',
    language: 'typescript',
    question: 'How do you define an optional property `age` in a TypeScript interface?',
    options: ['age: number?', 'age?: number', 'optional age: number', '?age: number'],
    correctAnswerIndex: 1,
    explanation: 'A question mark before the colon (`age?: number`) denotes an optional property.'
  },
  {
    id: 'q-ts-4',
    language: 'typescript',
    question: 'What is a Generic in TypeScript?',
    options: [
      'A function that only accepts string values',
      'A tool for creating reusable components and types that work with a variety of types rather than a single one',
      'A built-in TypeScript error code',
      'A type that removes null and undefined'
    ],
    correctAnswerIndex: 1,
    explanation: 'Generics (e.g. `<T>`) enable components and functions to be parameterized by types.'
  },
  {
    id: 'q-ts-5',
    language: 'typescript',
    question: 'What does the TypeScript compiler produce when compiling `.ts` files?',
    options: ['Binary bytecode', 'Machine code', 'Clean JavaScript (.js)', 'WebAssembly'],
    correctAnswerIndex: 2,
    explanation: 'The `tsc` compiler strips type annotations and emits standard JavaScript code executable in browsers and Node.js.'
  },
  {
    id: 'q-ts-6',
    language: 'typescript',
    question: 'Which utility type constructs a type with all properties of Type set to optional?',
    options: ['Required<T>', 'Partial<T>', 'Readonly<T>', 'Pick<T, K>'],
    correctAnswerIndex: 1,
    explanation: '`Partial<T>` returns a type with all properties of `T` marked optional.'
  },

  // ==================== JQUERY ====================
  {
    id: 'q-jquery-1',
    language: 'jquery',
    question: 'Which sign does jQuery use as a shortcut for the jQuery object?',
    options: ['&', '$', '%', '@'],
    correctAnswerIndex: 1,
    explanation: 'The dollar sign `$` is the primary alias for the jQuery function.'
  },
  {
    id: 'q-jquery-2',
    language: 'jquery',
    question: 'Which jQuery method is used to hide selected HTML elements?',
    options: ['hide()', 'remove()', 'display(false)', 'invisible()'],
    correctAnswerIndex: 0,
    explanation: '`$(selector).hide()` sets the CSS `display: none` property on selected elements.'
  },
  {
    id: 'q-jquery-3',
    language: 'jquery',
    question: 'How do you ensure code runs only after the DOM is fully loaded in jQuery?',
    options: [
      '$(document).ready(function(){ ... })',
      '$(window).onFinish(function(){ ... })',
      'document.onLoad(function(){ ... })',
      'jQuery.start(function(){ ... })'
    ],
    correctAnswerIndex: 0,
    explanation: '`$(document).ready()` executes code as soon as the DOM hierarchy has been fully constructed.'
  },
  {
    id: 'q-jquery-4',
    language: 'jquery',
    question: 'Which jQuery method is used to perform an asynchronous AJAX HTTP request?',
    options: ['$.getAjax()', '$.ajax()', '$.fetch()', '$.network()'],
    correctAnswerIndex: 1,
    explanation: '`$.ajax()` is the foundational AJAX method in jQuery that supports GET, POST, PUT, DELETE, etc.'
  },
  {
    id: 'q-jquery-5',
    language: 'jquery',
    question: 'Which jQuery method adds or removes one or more classes from elements based on their presence?',
    options: ['switchClass()', 'toggleClass()', 'changeClass()', 'alterClass()'],
    correctAnswerIndex: 1,
    explanation: '`toggleClass()` checks if a class exists: if present, it removes it; if absent, it adds it.'
  },
  {
    id: 'q-jquery-6',
    language: 'jquery',
    question: 'Which method is used to get the content of form input fields in jQuery?',
    options: ['text()', 'html()', 'val()', 'input()'],
    correctAnswerIndex: 2,
    explanation: '`.val()` gets or sets the value of form elements such as input, select, and textarea.'
  },

  // ==================== GIT ====================
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
  },
  {
    id: 'q-git-2',
    language: 'git',
    question: 'Which command initializes a brand new Git repository in the current directory?',
    options: ['git start', 'git create', 'git init', 'git new'],
    correctAnswerIndex: 2,
    explanation: '`git init` creates the local `.git` subdirectory and initializes tracking.'
  },
  {
    id: 'q-git-3',
    language: 'git',
    question: 'Which command creates and immediately switches to a new branch named `feature`?',
    options: [
      'git branch -new feature',
      'git checkout -b feature',
      'git switch -create feature',
      'git make branch feature'
    ],
    correctAnswerIndex: 1,
    explanation: '`git checkout -b <name>` (or `git switch -c <name>`) creates and checks out the new branch.'
  },
  {
    id: 'q-git-4',
    language: 'git',
    question: 'Which command temporarily shelves modified, tracked files so you can work on something else?',
    options: ['git stash', 'git pause', 'git hide', 'git save'],
    correctAnswerIndex: 0,
    explanation: '`git stash` saves uncommitted changes onto a stack and reverts your working tree to clean HEAD.'
  },
  {
    id: 'q-git-5',
    language: 'git',
    question: 'Which command stages all changes in the current directory for the next commit?',
    options: ['git stage', 'git commit -a', 'git add .', 'git include *'],
    correctAnswerIndex: 2,
    explanation: '`git add .` stages all new, modified, and deleted files in the current folder.'
  },
  {
    id: 'q-git-6',
    language: 'git',
    question: 'How do you view the chronological history of commits in Git?',
    options: ['git timeline', 'git history', 'git log', 'git show --all'],
    correctAnswerIndex: 2,
    explanation: '`git log` prints the commit history along with commit SHAs, authors, dates, and commit messages.'
  }
];