import { ExerciseItem } from '../../types';

export const exerciseItems: ExerciseItem[] = [
  // HTML Exercises
  {
    id: 'ex-html-1',
    language: 'html',
    title: 'HTML Paragraph & Attributes',
    instructions: 'Add a tooltip (title attribute) to the paragraph with the value "DevAura Info":',
    initialCode: `<p ___="DevAura Info">Hover over this text to see tooltip.</p>`,
    targetBlanks: ['title'],
    solution: `<p title="DevAura Info">Hover over this text to see tooltip.</p>`,
    hint: 'The global attribute used for hover tooltips is named "title".',
    explanation: 'The `title` attribute specifies extra information about an element, rendered as a tooltip when hovering.'
  },
  {
    id: 'ex-html-2',
    language: 'html',
    title: 'HTML Hyperlink Target',
    instructions: 'Set the target attribute so that the link opens in a new browser tab or window:',
    initialCode: `<a href="https://devaura.dev" target="___">Open DevAura</a>`,
    targetBlanks: ['_blank'],
    solution: `<a href="https://devaura.dev" target="_blank">Open DevAura</a>`,
    hint: 'Use _blank with an underscore.',
    explanation: '`target="_blank"` instructs the browser to open the linked document in a new tab or window.'
  },
  {
    id: 'ex-html-3',
    language: 'html',
    title: 'HTML Image Alternative Text',
    instructions: 'Provide an alternative text "DevAura Logo" for accessibility and SEO:',
    initialCode: `<img src="logo.png" ___="DevAura Logo">`,
    targetBlanks: ['alt'],
    solution: `<img src="logo.png" alt="DevAura Logo">`,
    hint: 'Short for alternate text.',
    explanation: 'The `alt` attribute is essential for screen readers and displays when the image fails to load.'
  },
  {
    id: 'ex-html-4',
    language: 'html',
    title: 'HTML Semantic Header',
    instructions: 'Wrap the website logo and primary navigation inside the correct HTML5 semantic element:',
    initialCode: `<___>
  <h1>DevAura</h1>
  <nav><a href="/">Home</a></nav>
</___>`,
    targetBlanks: ['header'],
    solution: `<header>
  <h1>DevAura</h1>
  <nav><a href="/">Home</a></nav>
</header>`,
    hint: 'Semantic element for introductory content or navigational links.',
    explanation: '`<header>` represents introductory content, typically containing headings, logos, and search forms.'
  },

  // CSS Exercises
  {
    id: 'ex-css-1',
    language: 'css',
    title: 'CSS Color Property',
    instructions: 'Set the text color of all <h1> elements to red:',
    initialCode: `h1 {
  ___: red;
}`,
    targetBlanks: ['color'],
    solution: `h1 {
  color: red;
}`,
    hint: 'The property for text color is simply "color".',
    explanation: 'In CSS, `color` defines the foreground/text color, whereas `background-color` defines the element background.'
  },
  {
    id: 'ex-css-2',
    language: 'css',
    title: 'CSS Flexbox Container',
    instructions: 'Turn the container into a flex container aligned along the center:',
    initialCode: `.container {
  display: ___;
  justify-content: center;
}`,
    targetBlanks: ['flex'],
    solution: `.container {
  display: flex;
  justify-content: center;
}`,
    hint: 'Type "flex".',
    explanation: '`display: flex;` establishes a flex formatting context for all direct children.'
  },
  {
    id: 'ex-css-3',
    language: 'css',
    title: 'CSS Box Model Sizing',
    instructions: 'Set the box-sizing property so that padding and border are included in the element total width and height:',
    initialCode: `* {
  box-sizing: ___;
}`,
    targetBlanks: ['border-box'],
    solution: `* {
  box-sizing: border-box;
}`,
    hint: 'Value containing "border" and "box".',
    explanation: '`border-box` tells the browser to account for any border and padding in the values you specify for an element width and height.'
  },

  // JavaScript Exercises
  {
    id: 'ex-js-1',
    language: 'javascript',
    title: 'JS Variable Declaration',
    instructions: 'Declare a constant variable named `apiKey` with value "secret_123":',
    initialCode: `___ apiKey = "secret_123";`,
    targetBlanks: ['const'],
    solution: `const apiKey = "secret_123";`,
    hint: 'Use the keyword for values that should not be reassigned.',
    explanation: '`const` defines block-scoped, immutable bindings that prevent accidental re-assignment.'
  },
  {
    id: 'ex-js-2',
    language: 'javascript',
    title: 'JS DOM Query Selector',
    instructions: 'Use the modern DOM method to select an element by its ID `#glowCard`:',
    initialCode: `const element = document.__('#glowCard');`,
    targetBlanks: ['querySelector'],
    solution: `const element = document.querySelector('#glowCard');`,
    hint: 'It begins with "query" and ends with "Selector".',
    explanation: '`document.querySelector()` accepts any CSS selector string and returns the first matching element.'
  },
  {
    id: 'ex-js-3',
    language: 'javascript',
    title: 'JS Array Transformation (map)',
    instructions: 'Transform an array of numbers into their doubled values using the functional array method:',
    initialCode: `const numbers = [1, 2, 3];
const doubled = numbers.___(n => n * 2);`,
    targetBlanks: ['map'],
    solution: `const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);`,
    hint: 'Three-letter array method that transforms elements into a new array.',
    explanation: '`Array.prototype.map()` creates a new array populated with the results of calling a provided function on every element.'
  },

  // Python Exercises
  {
    id: 'ex-py-1',
    language: 'python',
    title: 'Python Print Function',
    instructions: 'Print "Hello, DevAura!" to the terminal:',
    initialCode: `___("Hello, DevAura!")`,
    targetBlanks: ['print'],
    solution: `print("Hello, DevAura!")`,
    hint: 'Standard output function in Python.',
    explanation: 'The `print()` function outputs specified messages or values to the screen or console.'
  },
  {
    id: 'ex-py-2',
    language: 'python',
    title: 'Python List Append',
    instructions: 'Append the item "Docker" to the tools list:',
    initialCode: `tools = ["Git", "VSCode"]
tools.___("Docker")`,
    targetBlanks: ['append'],
    solution: `tools = ["Git", "VSCode"]
tools.append("Docker")`,
    hint: 'Method name that adds an element to the end of a list.',
    explanation: '`list.append(x)` adds an item to the end of a list in-place.'
  },
  {
    id: 'ex-py-3',
    language: 'python',
    title: 'Python Function Definition',
    instructions: 'Define a function named `calculate_area` that accepts width and height:',
    initialCode: `___ calculate_area(width, height):
    return width * height`,
    targetBlanks: ['def'],
    solution: `def calculate_area(width, height):
    return width * height`,
    hint: 'The 3-letter keyword to define a function in Python.',
    explanation: '`def` introduces a function definition in Python.'
  },

  // SQL Exercises
  {
    id: 'ex-sql-1',
    language: 'sql',
    title: 'SQL Select Filter',
    instructions: 'Write the keyword to filter rows where Country equals "USA":',
    initialCode: `SELECT * FROM Customers
___ Country = 'USA';`,
    targetBlanks: ['WHERE'],
    solution: `SELECT * FROM Customers
WHERE Country = 'USA';`,
    hint: 'Clause used to filter records.',
    explanation: 'The `WHERE` clause extracts only those records that satisfy a specified condition.'
  },
  {
    id: 'ex-sql-2',
    language: 'sql',
    title: 'SQL Inner Join',
    instructions: 'Combine Orders with Customers matching on CustomerID:',
    initialCode: `SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
___ Customers ON Orders.CustomerID = Customers.CustomerID;`,
    targetBlanks: ['INNER JOIN'],
    solution: `SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`,
    hint: 'Two words: "INNER" followed by "JOIN".',
    explanation: '`INNER JOIN` selects records that have matching values in both tables.'
  },
  {
    id: 'ex-sql-3',
    language: 'sql',
    title: 'SQL Aggregate Counting',
    instructions: 'Count total number of rows in the Customers table:',
    initialCode: `SELECT ___(*) AS TotalUsers FROM Customers;`,
    targetBlanks: ['COUNT'],
    solution: `SELECT COUNT(*) AS TotalUsers FROM Customers;`,
    hint: 'The SQL function that returns the count of rows.',
    explanation: '`COUNT(*)` returns the total number of rows matching the query criteria.'
  },

  // React Exercises
  {
    id: 'ex-react-1',
    language: 'react',
    title: 'React State Hook',
    instructions: 'Call the built-in React hook to declare state with an initial value of 0:',
    initialCode: `const [count, setCount] = React.___(0);`,
    targetBlanks: ['useState'],
    solution: `const [count, setCount] = React.useState(0);`,
    hint: 'The primary state hook starting with "use".',
    explanation: '`useState` declares a state variable and a setter function that retains data between re-renders.'
  },

  // Tailwind Exercises
  {
    id: 'ex-tw-1',
    language: 'tailwind',
    title: 'Tailwind Flex Layout',
    instructions: 'Apply the Tailwind utility class to make a flex container and center items vertically:',
    initialCode: `<div class="___ items-center justify-between">
  <span>Logo</span>
  <span>Menu</span>
</div>`,
    targetBlanks: ['flex'],
    solution: `<div class="flex items-center justify-between">
  <span>Logo</span>
  <span>Menu</span>
</div>`,
    hint: 'Class that sets display: flex;',
    explanation: '`flex` applies `display: flex;` allowing alignment with `items-center` and `justify-between`.'
  },

  // TypeScript Exercises
  {
    id: 'ex-ts-1',
    language: 'typescript',
    title: 'TypeScript Interface',
    instructions: 'Declare an interface named `Developer` with a name and experience property:',
    initialCode: `___ Developer {
  name: string;
  experienceYears: number;
}`,
    targetBlanks: ['interface'],
    solution: `interface Developer {
  name: string;
  experienceYears: number;
}`,
    hint: 'Keyword used to name and define the shape of an object in TypeScript.',
    explanation: 'An `interface` declaration is another way to name an object type in TypeScript.'
  },

  // Git Exercises
  {
    id: 'ex-git-1',
    language: 'git',
    title: 'Git Snapshot Commit',
    instructions: 'Commit staged changes with the message "initial commit":',
    initialCode: `git ___ -m "initial commit"`,
    targetBlanks: ['commit'],
    solution: `git commit -m "initial commit"`,
    hint: 'Command that records changes to the repository.',
    explanation: '`git commit` captures a snapshot of the project currently staged changes.'
  }
];
