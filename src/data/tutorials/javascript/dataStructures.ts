import { TutorialChapter } from '../../../types';

export const jsDataStructuresChapters: TutorialChapter[] = [
  // 22. JS Numbers
  {
    id: 'js-numbers',
    title: 'JavaScript Numbers',
    slug: 'js-numbers',
    summary: 'JavaScript has only one type of number: 64-bit floating point. Understand precision, NaN, and Infinity.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard. Integers are accurate up to 15 digits. Floating point arithmetic is not always 100% accurate (e.g. 0.1 + 0.2 is 0.30000000000000004).',
      sections: [
        {
          heading: 'Floating Point Precision and NaN',
          body: 'NaN is a JavaScript reserved word indicating that a number is not a legal number. You can use isNaN() to find out if a value is not a number.',
          code: `let x = 0.1 + 0.2; // 0.30000000000000004
// Solution for currency:
let total = (0.1 * 10 + 0.2 * 10) / 10; // 0.3

// Not a Number (NaN)
let result = 100 / "Apple"; // NaN
isNaN(result);              // true

// Infinity
let infinite = 2 / 0;       // Infinity`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>JavaScript Number Precision</h3>
  <p id="demo"></p>
  <script>
    let raw = 0.1 + 0.2;
    let fixed = (0.1 + 0.2).toFixed(2);
    document.getElementById("demo").innerHTML = "0.1 + 0.2 = " + raw + "<br>Formatted with toFixed(2): <b>" + fixed + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'Always use toFixed(2) when working with money calculations to round to two decimal places.'
          ]
        }
      ]
    }
  },

  // 23. JS BigInt
  {
    id: 'js-bigint',
    title: 'JavaScript BigInt',
    slug: 'js-bigint',
    summary: 'BigInt variables are used to store whole number values that are too big to be represented by a normal JavaScript Number.',
    readTime: '4 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript integers are only accurate up to 15 digits (Number.MAX_SAFE_INTEGER is 9007199254740991). BigInt was introduced in ES2020 to store arbitrarily large integer values safely.',
      sections: [
        {
          heading: 'Creating and Using BigInt',
          body: 'To create a BigInt, append n to the end of an integer or call the BigInt() constructor.',
          code: `// Number exceeding MAX_SAFE_INTEGER:
let max = Number.MAX_SAFE_INTEGER; // 9007199254740991

// BigInt with 'n' suffix:
let big = 9007199254740991000n;
let big2 = BigInt("9007199254740991000");

// Arithmetic between BigInts:
let total = big * 2n;`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>BigInt Precision Demo</h3>
  <p id="out"></p>
  <script>
    let normalOverflow = 9007199254740992 + 1; // Unsafe!
    let safeBigInt = 9007199254740992n + 1n;   // 100% Precise!
    document.getElementById("out").innerHTML = "Normal Number (Lost Precision): " + normalOverflow + "<br>BigInt (Exact): <b>" + safeBigInt + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'You cannot mix BigInt and standard Number in arithmetic operations without explicit type conversion.'
          ]
        }
      ]
    }
  },

  // 24. JS Number Methods
  {
    id: 'js-number-methods',
    title: 'JavaScript Number Methods',
    slug: 'js-number-methods',
    summary: 'Convert and format numbers: toString(), toFixed(), toPrecision(), parseInt(), and parseFloat().',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Number methods help you work with numbers. toString() returns a number as a string, toFixed() formats with fixed decimal places, parseInt() parses a string into an integer, and parseFloat() parses into a floating point number.',
      sections: [
        {
          heading: 'parseInt vs. parseFloat vs. Number()',
          body: 'parseInt extracts the integer part. parseFloat parses floating point numbers. Number() converts strict values or returns NaN.',
          code: `let x = 9.656;
x.toFixed(0);        // "10"
x.toFixed(2);        // "9.66"

// Parsing Strings:
parseInt("10.33");   // 10
parseFloat("10.33"); // 10.33
parseInt("10 years"); // 10 (Stops at non-number)
Number("10 years");  // NaN (Strict failure)`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Number Methods</h3>
  <p id="demo"></p>
  <script>
    let priceStr = "$49.95";
    let numeric = parseFloat(priceStr.replace("$", ""));
    let withTax = numeric * 1.08;
    document.getElementById("demo").innerHTML = "Base: $" + numeric + "<br>With 8% Tax: <b>$" + withTax.toFixed(2) + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'toFixed() returns a string, so remember to parse it if you need to do further math.'
          ]
        }
      ]
    }
  },

  // 25. JS Arrays
  {
    id: 'js-arrays',
    title: 'JavaScript Arrays',
    slug: 'js-arrays',
    summary: 'An array is a special variable, which can hold more than one value at a time.',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'If you have a list of items (a list of car names, for example), storing the cars in single variables could look like: let car1 = "Saab"; let car2 = "Volvo";. An array can hold all values under a single name, and you can access the values by referring to an index number.',
      sections: [
        {
          heading: 'Creating and Accessing Arrays',
          body: 'Arrays use 0-indexed positioning. The length property returns the count of items in the array.',
          code: `// Array Literal (Recommended)
const frameworks = ["React", "Vue", "Angular"];

// Accessing items:
let first = frameworks[0]; // "React"

// Modifying item:
frameworks[1] = "Svelte";

// Length property:
let count = frameworks.length; // 3

// Accessing last element:
let last = frameworks[frameworks.length - 1]; // "Angular"
// Modern ES2022 method:
let lastModern = frameworks.at(-1);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Array Indexing with .at(-1)</h3>
  <p id="out"></p>
  <script>
    const stack = ["TypeScript", "React", "Node.js", "PostgreSQL"];
    document.getElementById("out").innerHTML = "First: <b>" + stack.at(0) + "</b><br>Last: <b>" + stack.at(-1) + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'Array.at(-1) is the modern, cleanest way to get the last element of an array in JavaScript.'
          ]
        }
      ]
    }
  },

  // 26. JS Array Methods
  {
    id: 'js-array-methods',
    title: 'JavaScript Array Methods',
    slug: 'js-array-methods',
    summary: 'Mutating and non-mutating array operations: push, pop, shift, unshift, concat, join, slice, splice.',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript provides rich array methods to manipulate collections: push() adds to end, pop() removes from end, unshift() adds to beginning, shift() removes from beginning, join() converts to string, and splice() adds or removes elements at specific positions.',
      sections: [
        {
          heading: 'Push/Pop vs. Shift/Unshift vs. Slice/Splice',
          body: 'slice() does not alter the original array (it slices out a piece). splice() mutates the original array.',
          code: `const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Kiwi");    // Adds "Kiwi" to end
fruits.pop();           // Removes "Kiwi" from end

fruits.unshift("Lemon");// Adds "Lemon" to start
fruits.shift();         // Removes "Lemon" from start

// Splicing: splice(start, deleteCount, ...itemsToAdd)
fruits.splice(2, 0, "Lemon", "Kiwi"); // Inserts at index 2

// Slicing: creates new copy without mutating
const citrus = fruits.slice(1, 3);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Array Methods Demo</h3>
  <p id="demo"></p>
  <script>
    let queue = ["User1", "User2"];
    queue.push("User3");
    let served = queue.shift();
    document.getElementById("demo").innerHTML = "Served: <b>" + served + "</b><br>Remaining Queue: <b>" + queue.join(" -> ") + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'ES2023 introduced toSpliced(), toReversed(), and toSorted() which return new arrays without mutating the original.'
          ]
        }
      ]
    }
  },

  // 27. JS Array Search
  {
    id: 'js-array-search',
    title: 'JavaScript Array Search',
    slug: 'js-array-search',
    summary: 'Find elements in arrays with indexOf(), includes(), find(), findIndex(), and findLast().',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript includes multiple methods to search through arrays: indexOf() returns the index of a value, includes() returns a boolean, and find() returns the first item that satisfies a testing function.',
      sections: [
        {
          heading: 'find() and findIndex() with Predicates',
          body: 'find() is ideal for searching complex arrays of objects by property value.',
          code: `const users = [
  { id: 1, name: "Alice", role: "User" },
  { id: 2, name: "Bob", role: "Admin" },
  { id: 3, name: "Charlie", role: "User" }
];

// Find object matching condition
const admin = users.find(u => u.role === "Admin"); // { id: 2, name: "Bob", ... }

// Find index matching condition
const adminIndex = users.findIndex(u => u.role === "Admin"); // 1

// Simple value inclusion
const tags = ["frontend", "css", "react"];
tags.includes("react"); // true`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Array.find() Example</h3>
  <p id="res"></p>
  <script>
    const inventory = [
      { name: "Apples", quantity: 2 },
      { name: "Bananas", quantity: 0 },
      { name: "Cherries", quantity: 5 }
    ];
    const outOfStock = inventory.find(item => item.quantity === 0);
    document.getElementById("res").innerHTML = "Out of Stock: <b>" + outOfStock.name + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'find() stops searching the moment it finds the first match, making it efficient for large datasets.'
          ]
        }
      ]
    }
  },

  // 28. JS Array Sort
  {
    id: 'js-array-sort',
    title: 'JavaScript Array Sort',
    slug: 'js-array-sort',
    summary: 'Sort strings and numbers using sort(), reverse(), and custom numeric compare functions.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'The sort() method sorts an array alphabetically by default (converting elements to strings). To sort numbers correctly, you MUST provide a numeric compare function.',
      sections: [
        {
          heading: 'The Compare Function for Numbers',
          body: 'Without a compare function, sort() places "25" after "100" because "2" is bigger than "1".',
          code: `const numbers = [40, 100, 1, 5, 25, 10];

// Ascending Sort (Lowest to Highest)
numbers.sort((a, b) => a - b); // [1, 5, 10, 25, 40, 100]

// Descending Sort (Highest to Lowest)
numbers.sort((a, b) => b - a); // [100, 40, 25, 10, 5, 1]

// Sorting Objects by Property
const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 199 }
];
products.sort((a, b) => a.price - b.price);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Numeric Array Sorting</h3>
  <p id="out"></p>
  <script>
    let scores = [40, 100, 1, 5, 25, 10];
    scores.sort((a, b) => a - b);
    document.getElementById("out").innerHTML = "Sorted Ascending: <b>" + scores.join(", ") + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'Use (a, b) => a - b for ascending numerical order and (a, b) => b - a for descending numerical order.'
          ]
        }
      ]
    }
  },

  // 29. JS Array Iteration
  {
    id: 'js-array-iteration',
    title: 'JavaScript Array Iteration',
    slug: 'js-array-iteration',
    summary: 'Functional array processing: forEach(), map(), filter(), reduce(), every(), and some().',
    readTime: '7 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Array iteration methods operate on every array item. Functional methods like map(), filter(), and reduce() are the foundation of modern JavaScript and React development.',
      sections: [
        {
          heading: 'map, filter, and reduce',
          body: 'map() creates a new array by performing a function on each element. filter() creates an array with elements that pass a test. reduce() runs a function on each element to produce a single value.',
          code: `const numbers = [1, 2, 3, 4, 5];

// map(): double each number
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter(): keep only evens
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce(): sum all numbers
const total = numbers.reduce((sum, n) => sum + n, 0); // 15

// every() & some()
const allPositive = numbers.every(n => n > 0); // true
const hasLargeNumber = numbers.some(n => n > 100); // false`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>map & filter Pipeline</h3>
  <p id="pipeline"></p>
  <script>
    const prices = [10, 25, 50, 5, 80];
    // Filter prices >= 20 and add 10% tax:
    const finalPrices = prices
      .filter(p => p >= 20)
      .map(p => "$" + (p * 1.1).toFixed(2));
    document.getElementById("pipeline").innerHTML = "Processed items: <b>" + finalPrices.join(", ") + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'map() and filter() never mutate the source array; they return clean new arrays.'
          ]
        }
      ]
    }
  },

  // 30. JS Dates
  {
    id: 'js-dates',
    title: 'JavaScript Dates',
    slug: 'js-dates',
    summary: 'Create and work with date objects using new Date(), ISO formats, and timestamps.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript Date objects let us work with dates. A JavaScript date is fundamentally stored as the number of milliseconds since January 1, 1970 UTC (Unix Epoch).',
      sections: [
        {
          heading: 'Creating Date Objects',
          body: 'There are 4 ways to create a new date object: new Date(), new Date(date string), new Date(year, month, ...), and new Date(milliseconds).',
          code: `const now = new Date(); // Current date and time

// ISO Date string (YYYY-MM-DD):
const launch = new Date("2026-05-15T12:00:00Z");

// Unix timestamp (milliseconds since 1970):
const epochTime = Date.now(); // e.g. 1772619000000`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>JavaScript Date Formatting</h3>
  <p id="date-out"></p>
  <script>
    const today = new Date();
    document.getElementById("date-out").innerHTML = 
      "ISO: " + today.toISOString() + "<br>" +
      "Local String: " + today.toLocaleDateString() + "<br>" +
      "Time: " + today.toLocaleTimeString();
  </script>
</body>
</html>`,
          tips: [
            'In JavaScript, months are zero-indexed: 0 = January, 11 = December!'
          ]
        }
      ]
    }
  },

  // 31. JS Date Methods
  {
    id: 'js-date-methods',
    title: 'JavaScript Date Methods',
    slug: 'js-date-methods',
    summary: 'Get and set date components: getFullYear(), getMonth(), getDate(), getHours(), setFullYear().',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Date methods allow you to get and set date values (years, months, days, hours, minutes, seconds, milliseconds) of a Date object.',
      sections: [
        {
          heading: 'Get vs. Set Date Methods',
          body: 'Use getFullYear() (not getYear()!), getMonth(), getDate() (day of month 1-31), and getDay() (day of week 0-6).',
          code: `const d = new Date();

let year = d.getFullYear(); // 2026
let month = d.getMonth() + 1; // 1-12 (Adjusting for 0-index)
let day = d.getDate(); // 1-31

// Setting date values:
d.setFullYear(2030);
d.setDate(d.getDate() + 7); // Add 7 days to date`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Date Get Methods</h3>
  <p id="info"></p>
  <script>
    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("info").innerHTML = 
      "Year: <b>" + d.getFullYear() + "</b><br>" +
      "Today is: <b>" + days[d.getDay()] + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'Use Intl.DateTimeFormat for locale-aware internationalized date formatting.'
          ]
        }
      ]
    }
  },

  // 32. JS Math
  {
    id: 'js-math',
    title: 'JavaScript Math',
    slug: 'js-math',
    summary: 'The JavaScript Math object allows you to perform mathematical tasks on numbers.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Unlike other objects, the Math object has no constructor. All properties and methods are static and can be called using Math as an object without creating it.',
      sections: [
        {
          heading: 'Common Math Methods and Random Numbers',
          body: 'Methods include Math.round, Math.ceil, Math.floor, Math.trunc, Math.pow, Math.sqrt, Math.min, Math.max, and Math.random().',
          code: `Math.round(4.6);  // 5 (Rounds to nearest)
Math.ceil(4.1);   // 5 (Rounds UP)
Math.floor(4.9);  // 4 (Rounds DOWN)
Math.trunc(4.9);  // 4 (Removes decimal part)

Math.min(0, 150, 30, 20, -8); // -8
Math.max(0, 150, 30, 20, -8); // 150

// Random integer between min (inclusive) and max (inclusive):
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Random Dice Roller (1 - 6)</h3>
  <button style="background:#4f46e5; color:white; border:none; padding:10px 18px; border-radius:6px; cursor:pointer;" onclick="document.getElementById('die').innerHTML = Math.floor(Math.random() * 6) + 1;">Roll Die 🎲</button>
  <h2 id="die" style="color: #4f46e5;">6</h2>
</body>
</html>`,
          tips: [
            'Math.random() returns a pseudo-random floating point number from 0 (inclusive) up to but not including 1.'
          ]
        }
      ]
    }
  },

  // 33. JS Booleans
  {
    id: 'js-booleans',
    title: 'JavaScript Booleans',
    slug: 'js-booleans',
    summary: 'A JavaScript Boolean represents one of two values: true or false. Understand truthy and falsy.',
    readTime: '4 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'A Boolean represents one of two values: true or false. In JavaScript, any value can be evaluated in a boolean context. Values are either Truthy or Falsy.',
      sections: [
        {
          heading: 'The 6 Falsy Values in JavaScript',
          body: 'Everything with a "real" value is true. Exactly six values are evaluated as false in JavaScript: false, 0 (and -0), "" (empty string), null, undefined, and NaN.',
          code: `// Falsy values:
Boolean(false);      // false
Boolean(0);          // false
Boolean("");         // false
Boolean(null);       // false
Boolean(undefined);  // false
Boolean(NaN);        // false

// Truthy values (Everything else):
Boolean("0");        // true (Non-empty string!)
Boolean([]);         // true (Empty array is truthy!)
Boolean({});         // true (Empty object is truthy!)`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Truthy vs Falsy</h3>
  <p id="res"></p>
  <script>
    let emptyArray = [];
    let emptyString = "";
    document.getElementById("res").innerHTML = 
      "Boolean([]) is: <b>" + Boolean(emptyArray) + "</b><br>" +
      "Boolean('') is: <b>" + Boolean(emptyString) + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'Be careful: an empty array [] and empty object {} are truthy in JavaScript!'
          ]
        }
      ]
    }
  },

  // 34. JS Comparisons
  {
    id: 'js-comparisons',
    title: 'JavaScript Comparisons',
    slug: 'js-comparisons',
    summary: 'Comparison and Logical operators test for true or false: ===, !==, ?, ??, and ?.',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Comparison operators are used in logical statements to determine equality or difference between variables or values. Modern JavaScript includes the Ternary operator (?:), Nullish Coalescing (??), and Optional Chaining (?.).',
      sections: [
        {
          heading: 'Optional Chaining (?.) and Nullish Coalescing (??)',
          body: 'Optional chaining (?.) stops evaluation and returns undefined if a reference is nullish (null or undefined) instead of throwing a TypeError crash.',
          code: `// Ternary operator:
let status = (age >= 18) ? "Adult" : "Minor";

// Nullish coalescing (??):
let input = null;
let username = input ?? "Guest"; // "Guest"

// Optional chaining (?.):
const user = { profile: null };
// Safe navigation (Does NOT crash with TypeError):
let avatar = user.profile?.avatar; // undefined`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Safe Navigation with Optional Chaining (?.)</h3>
  <p id="out"></p>
  <script>
    const customer = { id: 101, name: "Sarah" };
    // customer.address is undefined; customer.address?.city returns undefined safely
    let city = customer.address?.city ?? "City not provided";
    document.getElementById("out").innerHTML = "Customer City: <b>" + city + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'Optional chaining (?.) eliminates hundreds of defensive if (user && user.address && ...) checks.'
          ]
        }
      ]
    }
  }
];
