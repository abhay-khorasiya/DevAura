import { TutorialChapter } from '../../../types';

export const jsControlFlowAndAdvancedChapters: TutorialChapter[] = [
  // 35. JS If Else
  {
    id: 'js-if-else',
    title: 'JavaScript If Else',
    slug: 'js-if-else',
    summary: 'Conditional statements are used to perform different actions based on different conditions: if, else, else if.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Very often when you write code, you want to perform different actions for different decisions. You can use conditional statements in your code to do this: Use if to specify a block of code to be executed, if a specified condition is true; use else to specify a block to be executed, if the same condition is false; use else if to test a new condition.',
      sections: [
        {
          heading: 'If, Else If, and Else Structure',
          body: 'Conditions evaluate from top to bottom. The first true condition executes, and subsequent branches are bypassed.',
          code: `let hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Conditional Greeting</h3>
  <p id="greet" style="font-size: 18px; font-weight: bold; color: #4f46e5;"></p>
  <script>
    let hour = new Date().getHours();
    let text = (hour < 12) ? "Good morning! ☀️" : (hour < 18) ? "Good afternoon! 🌤️" : "Good evening! 🌙";
    document.getElementById("greet").innerHTML = text + " (Hour: " + hour + ":00)";
  </script>
</body>
</html>`,
          tips: [
            'Remember: JavaScript is case-sensitive! if must be lowercase. IF or If will throw a syntax error.'
          ]
        }
      ]
    }
  },

  // 36. JS Switch
  {
    id: 'js-switch',
    title: 'JavaScript Switch',
    slug: 'js-switch',
    summary: 'The switch statement is used to perform different actions based on different conditions.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Use the switch statement to select one of many code blocks to be executed. Switch cases use strict comparison (===). The break keyword breaks out of the switch block. The default keyword specifies the code to run if there is no case match.',
      sections: [
        {
          heading: 'Switch Statement Syntax',
          body: 'If you omit break, execution falls through to the next case regardless of condition match.',
          code: `let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Weekday";
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Switch Case Evaluation</h3>
  <p id="out"></p>
  <script>
    let role = "admin";
    let access;
    switch (role) {
      case "admin":
        access = "Full root access granted.";
        break;
      case "editor":
        access = "Content editing permitted.";
        break;
      default:
        access = "Read-only access.";
    }
    document.getElementById("out").innerHTML = "Role: <b>" + role + "</b> &rarr; " + access;
  </script>
</body>
</html>`,
          tips: [
            'Switch cases use strict comparison (===); the value and type must match exactly.'
          ]
        }
      ]
    }
  },

  // 37. JS For Loop
  {
    id: 'js-loop-for',
    title: 'JavaScript For Loop',
    slug: 'js-loop-for',
    summary: 'Loops can execute a block of code a number of times: for (init; condition; increment).',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Loops are handy if you want to run the same code over and over again, each time with a different value. The for loop has 3 expressions: initialization, condition, and final-expression (increment/decrement).',
      sections: [
        {
          heading: 'Anatomy of the For Loop',
          body: 'Statement 1 is executed (one time) before the execution of the code block. Statement 2 defines the condition for executing the code block. Statement 3 is executed (every time) after the code block has been executed.',
          code: `for (let i = 0; i < 5; i++) {
  console.log("Iteration number:", i);
}

// Looping through array:
const cars = ["BMW", "Volvo", "Saab", "Ford"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>For Loop Table Generation</h3>
  <ul id="loop-list"></ul>
  <script>
    let html = "";
    for (let i = 1; i <= 5; i++) {
      html += "<li>Step " + i + ": Squared = " + (i * i) + "</li>";
    }
    document.getElementById("loop-list").innerHTML = html;
  </script>
</body>
</html>`,
          tips: [
            'Always use let inside for (let i = 0; ...); using var leaks the loop counter variable into outer scope.'
          ]
        }
      ]
    }
  },

  // 38. JS For In
  {
    id: 'js-loop-for-in',
    title: 'JavaScript For In',
    slug: 'js-loop-for-in',
    summary: 'The for...in statement loops through the enumerable properties of an Object.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'The JavaScript for...in statement loops through the properties of an Object. It returns the property keys as strings.',
      sections: [
        {
          heading: 'Looping Over Object Keys',
          body: 'for...in gives you each key. Use object[key] to access the corresponding property value.',
          code: `const person = { fname: "John", lname: "Doe", age: 25 };

for (let key in person) {
  console.log(key, ":", person[key]);
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>for...in Loop on Object</h3>
  <div id="obj-out"></div>
  <script>
    const serverConfig = { host: "127.0.0.1", port: 5432, ssl: true };
    let text = "";
    for (let prop in serverConfig) {
      text += "<p><b>" + prop + "</b>: " + serverConfig[prop] + "</p>";
    }
    document.getElementById("obj-out").innerHTML = text;
  </script>
</body>
</html>`,
          tips: [
            'Do NOT use for...in over an Array if index order is important; use for...of or forEach() instead.'
          ]
        }
      ]
    }
  },

  // 39. JS For Of
  {
    id: 'js-loop-for-of',
    title: 'JavaScript For Of',
    slug: 'js-loop-for-of',
    summary: 'The for...of statement loops through the values of an iterable object (Arrays, Strings, Sets, Maps).',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'The JavaScript for...of statement loops through the values of an iterable object: Arrays, Strings, NodeLists, Sets, Maps, and more.',
      sections: [
        {
          heading: 'Iterating Values with for...of',
          body: 'Unlike for...in which returns keys, for...of gives you the actual values directly.',
          code: `// Array iteration:
const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(car); // "BMW", "Volvo", "Mini"
}

// String character iteration:
let word = "JS";
for (let char of word) {
  console.log(char); // "J", "S"
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>for...of Iteration</h3>
  <ul id="out"></ul>
  <script>
    const languages = ["JavaScript", "TypeScript", "Python", "Rust"];
    let html = "";
    for (const lang of languages) {
      html += "<li>" + lang + "</li>";
    }
    document.getElementById("out").innerHTML = html;
  </script>
</body>
</html>`,
          tips: [
            'for...of is the cleanest, most readable way to loop through arrays when you do not need index numbers.'
          ]
        }
      ]
    }
  },

  // 40. JS While Loop
  {
    id: 'js-loop-while',
    title: 'JavaScript While Loop',
    slug: 'js-loop-while',
    summary: 'The while loop loops through a block of code as long as a specified condition is true.',
    readTime: '4 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'The while loop loops through a block of code as long as a specified condition is true. The do...while loop is a variant that executes the code block once before checking if the condition is true.',
      sections: [
        {
          heading: 'While vs. Do While',
          body: 'A do...while loop will always execute at least once, even if the condition is false right from the start.',
          code: `let count = 0;
while (count < 3) {
  console.log("Count is:", count);
  count++; // Essential: without this, infinite loop!
}

// do...while executes at least once:
let x = 10;
do {
  console.log("Executed once despite condition being false");
} while (x < 5);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>While Loop Countdown</h3>
  <p id="countdown"></p>
  <script>
    let num = 5;
    let str = "";
    while (num > 0) {
      str += num + "... ";
      num--;
    }
    str += "🚀 Blast off!";
    document.getElementById("countdown").innerHTML = str;
  </script>
</body>
</html>`,
          tips: [
            'Always ensure the loop variable changes inside the while block to prevent browser-freezing infinite loops.'
          ]
        }
      ]
    }
  },

  // 41. JS Break and Continue
  {
    id: 'js-break-continue',
    title: 'JavaScript Break and Continue',
    slug: 'js-break-continue',
    summary: 'The break statement "jumps out" of a loop. The continue statement "jumps over" one iteration.',
    readTime: '4 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'The break statement can be used to jump out of any loop. The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.',
      sections: [
        {
          heading: 'Break vs Continue in Action',
          body: 'break terminates the entire loop immediately. continue skips the remainder of current iteration and moves to next.',
          code: `// break exits loop when i reaches 3:
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i); // Logs 0, 1, 2
}

// continue skips iteration 3:
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i); // Logs 0, 1, 2, 4
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>continue Demonstration (Skip Even Numbers)</h3>
  <p id="res"></p>
  <script>
    let odds = [];
    for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) continue; // Skip evens
      odds.push(i);
    }
    document.getElementById("res").innerHTML = "Odds collected: <b>" + odds.join(", ") + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'Use break inside search loops to stop looping immediately once target item is located.'
          ]
        }
      ]
    }
  },

  // 42. JS Iterables
  {
    id: 'js-iterables',
    title: 'JavaScript Iterables',
    slug: 'js-iterables',
    summary: 'Iterable objects are objects that can be iterated over with for..of. They implement Symbol.iterator.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Iterables are data structures that provide an iteration protocol. Built-in iterables include Strings, Arrays, Sets, Maps, and TypedArrays. Any object can be made iterable by defining a [Symbol.iterator]() method.',
      sections: [
        {
          heading: 'The Iterator Protocol',
          body: 'An iterator is an object that defines a next() method which returns { value: any, done: boolean }.',
          code: `// Built-in iterable string:
const str = "Hi";
const iterator = str[Symbol.iterator]();
iterator.next(); // { value: "H", done: false }
iterator.next(); // { value: "i", done: false }
iterator.next(); // { value: undefined, done: true }`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Iterating over String Unicode Glyphs</h3>
  <p id="out"></p>
  <script>
    let word = "Code⚡";
    let chars = [];
    for (const ch of word) {
      chars.push(ch);
    }
    document.getElementById("out").innerHTML = "Tokens: <b>" + chars.join(" | ") + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'Spread syntax (...iterable) works on any object implementing the iterable protocol.'
          ]
        }
      ]
    }
  },

  // 43. JS Sets
  {
    id: 'js-sets',
    title: 'JavaScript Sets',
    slug: 'js-sets',
    summary: 'A JavaScript Set is a collection of unique values. Each value can only occur once.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'A Set is a collection of unique values where duplicate entries are automatically discarded. Key Set methods include add(), delete(), has(), clear(), and the size property.',
      sections: [
        {
          heading: 'Removing Duplicates from an Array with Set',
          body: 'The most popular use case for Set is deduplicating arrays in a single line using spread syntax.',
          code: `// Array with duplicates:
const numbers = [1, 2, 2, 3, 4, 4, 5];

// Deduplicate in 1 line:
const unique = [...new Set(numbers)]; // [1, 2, 3, 4, 5]

// Set methods:
const tags = new Set();
tags.add("javascript");
tags.add("react");
tags.has("react");       // true (O(1) fast lookup!)
tags.size;               // 2`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Array Deduplication with Set</h3>
  <p id="res"></p>
  <script>
    const emails = ["a@test.com", "b@test.com", "a@test.com", "c@test.com"];
    const uniqueEmails = [...new Set(emails)];
    document.getElementById("res").innerHTML = 
      "Raw count: " + emails.length + "<br>" +
      "Unique count: <b>" + uniqueEmails.length + "</b> (" + uniqueEmails.join(", ") + ")";
  </script>
</body>
</html>`,
          tips: [
            'Set.prototype.has() provides O(1) constant time lookup, making it dramatically faster than Array.prototype.includes() for large collections.'
          ]
        }
      ]
    }
  },

  // 44. JS Maps
  {
    id: 'js-maps',
    title: 'JavaScript Maps',
    slug: 'js-maps',
    summary: 'A Map holds key-value pairs where the keys can be ANY datatype (including objects and functions).',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys. Unlike Objects, a Map can use objects, functions, or numbers as keys, and has a built-in size property.',
      sections: [
        {
          heading: 'Map vs. Object',
          body: 'In Objects, keys are converted to Strings. In Maps, keys retain their exact reference and type.',
          code: `const userRoles = new Map();

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

// Using objects as keys:
userRoles.set(user1, "Admin");
userRoles.set(user2, "Editor");

userRoles.get(user1); // "Admin"
userRoles.has(user2); // true
userRoles.size;       // 2`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Map Key-Value Storage</h3>
  <div id="map-out"></div>
  <script>
    const inventory = new Map([
      ["Apples", 500],
      ["Bananas", 300],
      ["Oranges", 200]
    ]);
    let text = "";
    inventory.forEach((qty, fruit) => {
      text += "<p>" + fruit + ": <b>" + qty + " units</b></p>";
    });
    document.getElementById("map-out").innerHTML = text;
  </script>
</body>
</html>`,
          tips: [
            'Use Map when keys are unknown until runtime, or when keys frequently need to be added and deleted.'
          ]
        }
      ]
    }
  },

  // 45. JS Typeof
  {
    id: 'js-typeof',
    title: 'JavaScript Typeof',
    slug: 'js-typeof',
    summary: 'Check data types using typeof, instanceof, and constructor properties.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'In JavaScript there are 5 different data types that can contain values: string, number, boolean, object, function. There are 2 data types that cannot contain values: null, undefined. Use typeof to determine the type.',
      sections: [
        {
          heading: 'The instanceof Operator',
          body: 'The instanceof operator returns true if an object is an instance of the specified object type (like Array, Date, or a custom Class).',
          code: `typeof "John"          // "string"
typeof 3.14            // "number"
typeof NaN             // "number"
typeof false           // "boolean"
typeof [1,2,3]         // "object"
typeof {name:'John'}   // "object"
typeof new Date()      // "object"
typeof function () {}  // "function"
typeof myCar           // "undefined"
typeof null            // "object"

// instanceof:
const time = new Date();
time instanceof Date;  // true
[1, 2] instanceof Array; // true`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>instanceof vs typeof</h3>
  <p id="res"></p>
  <script>
    const items = [10, 20];
    document.getElementById("res").innerHTML = 
      "typeof items: <b>" + typeof items + "</b><br>" +
      "items instanceof Array: <b>" + (items instanceof Array) + "</b><br>" +
      "Array.isArray(items): <b>" + Array.isArray(items) + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'Always use Array.isArray() to verify arrays, as typeof [] returns "object".'
          ]
        }
      ]
    }
  },

  // 46. JS Type Conversion
  {
    id: 'js-type-conversion',
    title: 'JavaScript Type Conversion',
    slug: 'js-type-conversion',
    summary: 'Converting Strings to Numbers, Numbers to Strings, Booleans to Numbers, and implicit type coercion.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript variables can be converted to a new variable and another data type: By the use of a JavaScript function (explicit conversion) or automatically by JavaScript itself (implicit coercion).',
      sections: [
        {
          heading: 'Explicit Type Conversion Functions',
          body: 'Number(), String(), and Boolean() explicitly cast datatypes.',
          code: `// String to Number:
Number("3.14");      // 3.14
Number(" ");         // 0
Number("");          // 0
Number("99 88");     // NaN

// Number to String:
String(123);         // "123"
(123).toString();    // "123"

// Unary plus operator (Fast conversion):
let y = "5";
let x = +y;          // x is number 5`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Unary Plus Type Conversion</h3>
  <p id="out"></p>
  <script>
    let strNum = "42";
    let converted = +strNum;
    document.getElementById("out").innerHTML = "Original typeof: " + typeof strNum + "<br>After +strNum: <b>" + typeof converted + " (value: " + converted + ")</b>";
  </script>
</body>
</html>`,
          tips: [
            'The unary plus operator (+str) is the fastest way to convert a string to a number in JavaScript.'
          ]
        }
      ]
    }
  },

  // 47. JS Destructuring
  {
    id: 'js-destructuring',
    title: 'JavaScript Destructuring',
    slug: 'js-destructuring',
    summary: 'Unpack values from arrays or properties from objects into distinct variables: [a, b] and {name, age}.',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Destructuring assignment is a special syntax introduced in ES6 that makes it possible to unpack values from arrays, or properties from objects, into distinct variables with default values and renaming.',
      sections: [
        {
          heading: 'Object and Array Destructuring',
          body: 'Destructuring eliminates repetitive person.name and person.age variable assignments.',
          code: `// Object Destructuring with Renaming and Defaults:
const user = { id: 101, username: "alex", city: "Seattle" };
const { username: userName, country = "USA" } = user;
// userName is "alex", country is "USA"

// Array Destructuring with Rest:
const coordinates = [47.6062, -122.3321, 100];
const [lat, lng, ...rest] = coordinates;

// Function Parameter Destructuring:
function printBadge({ name, role }) {
  console.log(\`\${name} - \${role}\`);
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Destructuring in Action</h3>
  <p id="destruct"></p>
  <script>
    const profile = { name: "Sarah Chen", role: "Principal Architect", level: "L7" };
    const { name, role } = profile;
    document.getElementById("destruct").innerHTML = "Extracted: <b>" + name + "</b>, Role: <b>" + role + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'Destructuring is universally used in React for props and hooks (const [state, setState] = useState()).'
          ]
        }
      ]
    }
  },

  // 48. JS RegExp
  {
    id: 'js-regex',
    title: 'JavaScript RegExp',
    slug: 'js-regex',
    summary: 'A regular expression is a sequence of characters that forms a search pattern. Use test() and exec().',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'A regular expression is a pattern of characters used for text search and text replace operations. Syntax: /pattern/modifiers. Common modifiers: i (case-insensitive), g (global match), m (multiline).',
      sections: [
        {
          heading: 'RegExp Methods: test() and match()',
          body: 'RegExp.test() returns true if the pattern matches a string. String.match() extracts matching substrings.',
          code: `// Validating email structure:
const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
emailPattern.test("user@devaura.dev"); // true
emailPattern.test("invalid-email");     // false

// Global case-insensitive replacement:
let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "DevAura"); // "Visit DevAura!"`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>RegExp Validation</h3>
  <input id="email" type="text" value="hello@world.com" style="padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px;">
  <button onclick="validate()" style="background:#4f46e5; color:white; border:none; padding:8px 14px; border-radius:4px; cursor:pointer;">Validate</button>
  <p id="feedback"></p>
  <script>
    function validate() {
      const val = document.getElementById("email").value;
      const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      const isValid = regex.test(val);
      document.getElementById("feedback").innerHTML = isValid 
        ? "<span style='color:green;'>Valid email format!</span>" 
        : "<span style='color:red;'>Invalid email format!</span>";
    }
  </script>
</body>
</html>`,
          tips: [
            'Use ^ to anchor the start of a string and $ to anchor the end.'
          ]
        }
      ]
    }
  },

  // 49. JS Errors
  {
    id: 'js-errors',
    title: 'JavaScript Errors',
    slug: 'js-errors',
    summary: 'Handle runtime errors gracefully using try, catch, finally, and custom throw statements.',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'The try statement lets you test a block of code for errors. The catch statement lets you handle the error. The throw statement lets you create custom errors. The finally statement lets you execute code, after try and catch, regardless of the result.',
      sections: [
        {
          heading: 'Graceful Error Handling',
          body: 'Without try...catch, runtime exceptions crash the script execution thread.',
          code: `try {
  // Code that might fail (e.g. parsing user JSON)
  let user = JSON.parse(malformedString);
} catch (err) {
  console.error("Caught error name:", err.name);
  console.error("Caught error message:", err.message);
} finally {
  // Always runs (clean up loaders/sockets)
  hideLoadingSpinner();
}

// Custom throw statement:
function withdraw(amount) {
  if (amount > balance) {
    throw new Error("Insufficient funds available.");
  }
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>try...catch Demo</h3>
  <p id="err-log"></p>
  <script>
    try {
      // Intentionally invalid JSON:
      JSON.parse("{ invalidJson: true ");
    } catch (e) {
      document.getElementById("err-log").innerHTML = 
        "<span style='color:red; font-weight:bold;'>Caught: " + e.name + "</span>: " + e.message;
    }
  </script>
</body>
</html>`,
          tips: [
            'Standard Error types include ReferenceError, TypeError, SyntaxError, RangeError, and URIError.'
          ]
        }
      ]
    }
  },

  // 50. JS Scope
  {
    id: 'js-scope',
    title: 'JavaScript Scope',
    slug: 'js-scope',
    summary: 'Scope determines the accessibility (visibility) of variables: Block Scope, Function Scope, Global Scope.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Scope determines the accessibility of variables, objects, and functions from different parts of the code. JavaScript has 3 types of scope: Block scope (let, const), Function scope (variables declared inside a function), and Global scope.',
      sections: [
        {
          heading: 'Scope Chain and Closures',
          body: 'Inner functions have access to variables in their own scope, their outer enclosing function scope, and the global scope.',
          code: `let globalVar = "I am global";

function outer() {
  let outerVar = "I am in outer";

  function inner() {
    let innerVar = "I am in inner";
    // Can access all 3 variables!
    console.log(globalVar, outerVar, innerVar);
  }
  inner();
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Lexical Scope Chain</h3>
  <p id="scope-out"></p>
  <script>
    let globalValue = "DevAura";
    function checkScope() {
      let functionValue = "Active";
      return globalValue + " is " + functionValue;
    }
    document.getElementById("scope-out").innerHTML = checkScope();
  </script>
</body>
</html>`,
          tips: [
            'Variables created without a declaration keyword (var, let, const) automatically become global variables (Avoid this!).'
          ]
        }
      ]
    }
  },

  // 51. JS Hoisting
  {
    id: 'js-hoisting',
    title: 'JavaScript Hoisting',
    slug: 'js-hoisting',
    summary: 'Hoisting is JavaScript default behavior of moving declarations to the top. Understand the Temporal Dead Zone.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'In JavaScript, a variable can be declared after it has been used. Hoisting is JavaScript default behavior of moving declarations to the top of the current scope. Function declarations are hoisted completely, while let and const are placed in a Temporal Dead Zone (TDZ).',
      sections: [
        {
          heading: 'The Temporal Dead Zone (TDZ)',
          body: 'Variables defined with let and const are hoisted to the top of the block, but not initialized. Accessing them before declaration throws a ReferenceError.',
          code: `// Function declaration hoisting (Works!):
sayHello(); // "Hello!"
function sayHello() {
  console.log("Hello!");
}

// let/const TDZ (Throws ReferenceError):
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;

// Legacy var (Hoisted as undefined):
console.log(legacy); // undefined (No error, but confusing!)
var legacy = 10;`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Function Declaration Hoisting</h3>
  <p id="hoist"></p>
  <script>
    // Called BEFORE declared in code:
    document.getElementById("hoist").innerHTML = greetUser("Developer");
    function greetUser(name) {
      return "Welcome back, " + name + "! (Function hoisted successfully)";
    }
  </script>
</body>
</html>`,
          tips: [
            'Always declare variables at the top of their scope to avoid TDZ confusion.'
          ]
        }
      ]
    }
  },

  // 52. JS Strict Mode
  {
    id: 'js-strict-mode',
    title: 'JavaScript Strict Mode',
    slug: 'js-strict-mode',
    summary: 'Strict mode makes it easier to write "secure" JavaScript by eliminating silent errors.',
    readTime: '4 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: '"use strict"; defines that JavaScript code should be executed in "strict mode". Strict mode eliminates silent errors that occurred in sloppy mode, fixes mistakes that make it difficult for JavaScript engines to perform optimizations, and prohibits reserved words.',
      sections: [
        {
          heading: 'Enabling Strict Mode',
          body: 'Declared by adding "use strict"; to the beginning of a script or a function. ES6 modules and classes are in strict mode automatically.',
          code: `"use strict";

// Disallowed in strict mode:
x = 3.14; // Throws ReferenceError: x is not defined

// Deleting a variable or function is not allowed:
let y = 10;
// delete y; // SyntaxError

// Duplicate parameter names not allowed:
// function sum(p1, p1) {} // SyntaxError`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Strict Mode Protection</h3>
  <p id="strict-res"></p>
  <script>
    "use strict";
    try {
      undeclaredVar = 100; // Accidental global
    } catch (e) {
      document.getElementById("strict-res").innerHTML = 
        "<span style='color:red;'>Caught in Strict Mode:</span> " + e.message;
    }
  </script>
</body>
</html>`,
          tips: [
            'All ES6 modules and TypeScript files run in strict mode by default.'
          ]
        }
      ]
    }
  },

  // 53. JS this Keyword
  {
    id: 'js-this',
    title: 'JavaScript this Keyword',
    slug: 'js-this',
    summary: 'The this keyword refers to the context in which a function is called: object, global, or bound.',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called): In an object method, this refers to the object. Alone, this refers to the global object. In a function, this refers to the global object (or undefined in strict mode). In an event, this refers to the element that received the event.',
      sections: [
        {
          heading: 'Explicit Binding: call(), apply(), and bind()',
          body: 'call(), apply(), and bind() can refer this to any object.',
          code: `const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + " from " + city + ", " + country;
  }
};

const user = { firstName: "John", lastName: "Doe" };

// call: arguments passed individually
person.fullName.call(user, "Oslo", "Norway");

// apply: arguments passed as array
person.fullName.apply(user, ["Oslo", "Norway"]);

// bind: returns a new function with this permanently bound
const boundFunc = person.fullName.bind(user);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Explicit this Binding with call()</h3>
  <p id="this-out"></p>
  <script>
    const greeter = {
      greet: function() { return "Hello, " + this.title; }
    };
    const admin = { title: "SuperAdmin" };
    document.getElementById("this-out").innerHTML = greeter.greet.call(admin);
  </script>
</body>
</html>`,
          tips: [
            'Arrow functions do NOT have their own this; they retain the this value of the enclosing lexical context.'
          ]
        }
      ]
    }
  },

  // 54. JS Arrow Functions
  {
    id: 'js-arrow-function',
    title: 'JavaScript Arrow Functions',
    slug: 'js-arrow-function',
    summary: 'Arrow functions allow a shorter syntax for writing function expressions and retain lexical this.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Arrow functions were introduced in ES6. They allow us to write shorter function syntax. If the function has only one statement and returns a value, curly brackets and the return keyword can be omitted.',
      sections: [
        {
          heading: 'Arrow Function Syntax & Lexical this',
          body: 'Arrow functions do not bind their own this. They inherit this from the surrounding scope, solving classic callback this bugs.',
          code: `// Standard function
const addOld = function(a, b) {
  return a + b;
};

// Arrow function (Explicit return)
const addNew = (a, b) => {
  return a + b;
};

// Concise Arrow function (Implicit return)
const addShort = (a, b) => a + b;

// Single parameter (Parentheses optional)
const square = x => x * x;`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Arrow Function Calculations</h3>
  <p id="out"></p>
  <script>
    const multiply = (x, y) => x * y;
    document.getElementById("out").innerHTML = "7 &times; 8 = <b>" + multiply(7, 8) + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'Never use arrow functions for object methods that need to access object properties via this.'
          ]
        }
      ]
    }
  },

  // 55. JS Classes
  {
    id: 'js-classes',
    title: 'JavaScript Classes',
    slug: 'js-classes',
    summary: 'JavaScript Classes are templates for JavaScript Objects, introduced in ES6 with constructors and inheritance.',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript Classes are syntactical sugar over JavaScript existing prototype-based inheritance. A JavaScript class is not an object; it is a template for JavaScript objects. A class is created with the class keyword and always includes a constructor() method.',
      sections: [
        {
          heading: 'Class Inheritance with extends and super',
          body: 'To create a class inheritance, use the extends keyword. A class created with class inheritance inherits all methods from another class. super() calls the parent constructor.',
          code: `class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
  static getVehicleType() {
    return "Motor Vehicle";
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand); // Calls parent constructor
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const myCar = new Model("Ford", "Mustang");
myCar.show(); // "I have a Ford, it is a Mustang"`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Class Inheritance Demo</h3>
  <p id="car-out"></p>
  <script>
    class User {
      constructor(name) { this.name = name; }
      getBio() { return this.name; }
    }
    class Admin extends User {
      constructor(name, privileges) {
        super(name);
        this.privileges = privileges;
      }
      getFullProfile() {
        return this.getBio() + " (Privileges: " + this.privileges.join(", ") + ")";
      }
    }
    const admin = new Admin("Alex", ["Deploy", "Delete", "Manage"]);
    document.getElementById("car-out").innerHTML = admin.getFullProfile();
  </script>
</body>
</html>`,
          tips: [
            'Class declarations are not hoisted; you must declare a class before instantiating it with new.'
          ]
        }
      ]
    }
  },

  // 56. JS Modules
  {
    id: 'js-modules',
    title: 'JavaScript Modules',
    slug: 'js-modules',
    summary: 'JavaScript modules allow you to break up your code into separate files: import and export.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript modules allow you to break up your code into separate files. This makes it easier to maintain a code-base. Modules are imported from external files with the import statement, and exposed with export.',
      sections: [
        {
          heading: 'Named vs. Default Exports',
          body: 'Named exports allow multiple exports per file. Default export allows one primary export per file.',
          code: `// File: mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export:
export default function multiply(a, b) {
  return a * b;
}

// File: app.js
import multiply, { add, subtract } from './mathUtils.js';

// HTML script tag for modules:
// <script type="module" src="app.js"></script>`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>ES Modules Architecture</h3>
  <div style="background: #f1f5f9; padding: 16px; border-radius: 8px;">
    <code>&lt;script type="module" src="main.js"&gt;&lt;/script&gt;</code>
    <p style="margin-top: 8px; color: #475569;">Modules automatically execute in strict mode, have their own top-level scope, and defer loading asynchronously.</p>
  </div>
</body>
</html>`,
          tips: [
            'Modules only work over the HTTP/HTTPS protocol, not directly over file:// in browser local sandboxes.'
          ]
        }
      ]
    }
  }
];
