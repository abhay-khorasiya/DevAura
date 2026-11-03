import { ReferenceItem } from '../../types';

export const referenceItems: ReferenceItem[] = [
  // HTML References
  {
    id: 'ref-html-a',
    language: 'html',
    name: '<a>',
    category: 'Links & Navigation',
    syntax: '<a href="url" target="_blank">Link Text</a>',
    description: 'Defines a hyperlink, which is used to link from one page to another.',
    example: '<a href="https://devaura.dev" target="_blank">Visit DevAura</a>'
  },
  {
    id: 'ref-html-div',
    language: 'html',
    name: '<div>',
    category: 'Layout & Containers',
    syntax: '<div class="container">...</div>',
    description: 'Generic container element for grouping content for styling purposes or layout structure.',
    example: '<div class="glass-card"><p>Aura content inside</p></div>'
  },
  {
    id: 'ref-html-form',
    language: 'html',
    name: '<form>',
    category: 'Forms & Inputs',
    syntax: '<form action="/api" method="POST">...</form>',
    description: 'Represents a document section containing interactive controls for submitting information.',
    example: '<form onSubmit="handleSubmit()"><input type="text" /><button>Send</button></form>'
  },
  {
    id: 'ref-html-nav',
    language: 'html',
    name: '<nav>',
    category: 'Semantic Structure',
    syntax: '<nav aria-label="Main Navigation">...</nav>',
    description: 'Represents a section of a page whose purpose is to provide navigation links.',
    example: '<nav><a href="#home">Home</a> <a href="#tutorials">Tutorials</a></nav>'
  },
  {
    id: 'ref-html-button',
    language: 'html',
    name: '<button>',
    category: 'Forms & Inputs',
    syntax: '<button type="button" class="btn">Click</button>',
    description: 'Represents a clickable button, used to submit forms or anywhere in a document for accessible button functionality.',
    example: '<button onclick="runCode()">Run Playground</button>'
  },

  // CSS References
  {
    id: 'ref-css-display',
    language: 'css',
    name: 'display',
    category: 'Layout',
    syntax: 'display: block | inline | flex | grid | none;',
    description: 'Sets whether an element is treated as a block or inline box and the layout used for its children.',
    example: 'display: flex;\njustify-content: space-between;'
  },
  {
    id: 'ref-css-flex',
    language: 'css',
    name: 'flex',
    category: 'Flexbox',
    syntax: 'flex: flex-grow flex-shrink flex-basis;',
    description: 'Shorthand property setting how a flex item will grow or shrink to fit the space available.',
    example: 'flex: 1 1 auto;'
  },
  {
    id: 'ref-css-grid',
    language: 'css',
    name: 'grid-template-columns',
    category: 'Grid',
    syntax: 'grid-template-columns: repeat(12, 1fr);',
    description: 'Defines the line names and track sizing functions of the grid columns.',
    example: 'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));'
  },
  {
    id: 'ref-css-backdrop',
    language: 'css',
    name: 'backdrop-filter',
    category: 'Modern Visuals',
    syntax: 'backdrop-filter: blur(12px) saturate(180%);',
    description: 'Applies graphical effects such as blurring or color shifting to the area behind an element.',
    example: 'backdrop-filter: blur(16px);\nbackground: rgba(15, 23, 42, 0.75);'
  },
  {
    id: 'ref-css-transition',
    language: 'css',
    name: 'transition',
    category: 'Animation',
    syntax: 'transition: property duration timing-function delay;',
    description: 'Enables smooth transitions between two CSS states without keyframe definitions.',
    example: 'transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);'
  },

  // JavaScript References
  {
    id: 'ref-js-map',
    language: 'javascript',
    name: 'Array.prototype.map()',
    category: 'Arrays',
    syntax: 'const newArray = arr.map((item, index) => transform(item));',
    description: 'Creates a new array populated with the results of calling a provided function on every element in the calling array.',
    example: 'const doubled = [1, 2, 3].map(x => x * 2); // [2, 4, 6]'
  },
  {
    id: 'ref-js-filter',
    language: 'javascript',
    name: 'Array.prototype.filter()',
    category: 'Arrays',
    syntax: 'const filtered = arr.filter(item => condition(item));',
    description: 'Creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test.',
    example: 'const activeUsers = users.filter(u => u.isActive);'
  },
  {
    id: 'ref-js-fetch',
    language: 'javascript',
    name: 'fetch()',
    category: 'Networking',
    syntax: 'const res = await fetch(url, options);',
    description: 'Starts the process of fetching a resource from the network, returning a promise which resolves to the Response object.',
    example: 'const res = await fetch("/api/tracks");\nconst data = await res.json();'
  },
  {
    id: 'ref-js-promise',
    language: 'javascript',
    name: 'Promise.all()',
    category: 'Async',
    syntax: 'const results = await Promise.all([p1, p2, p3]);',
    description: 'Fulfills when all of the input\'s promises fulfill, with an array of the fulfillment values.',
    example: 'const [user, repos] = await Promise.all([fetchUser(), fetchRepos()]);'
  },

  // SQL References
  {
    id: 'ref-sql-select',
    language: 'sql',
    name: 'SELECT',
    category: 'Querying',
    syntax: 'SELECT column1, column2 FROM table_name WHERE condition;',
    description: 'Queries data from one or more tables in the database according to filtering criteria.',
    example: 'SELECT id, username, email FROM users WHERE active = 1;'
  },
  {
    id: 'ref-sql-join',
    language: 'sql',
    name: 'INNER JOIN',
    category: 'Joins',
    syntax: 'SELECT * FROM t1 INNER JOIN t2 ON t1.id = t2.t1_id;',
    description: 'Combines rows from two tables whenever there is a matching value in both tables on the specified column.',
    example: 'SELECT * FROM orders INNER JOIN users ON orders.user_id = users.id;'
  }
];
