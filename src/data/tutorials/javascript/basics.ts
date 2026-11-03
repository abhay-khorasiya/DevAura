import { TutorialChapter } from '../../../types';

export const jsBasicsChapters: TutorialChapter[] = [
  // 1. JS HOME
  {
    id: 'js-home',
    title: 'JavaScript HOME',
    slug: 'js-home',
    summary: 'JavaScript is the world most popular programming language. It is the programming language of the Web.',
    readTime: '4 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. In this tutorial, you can test code snippets directly inside our interactive editor.',
      sections: [
        {
          heading: 'What JavaScript Can Do',
          body: 'JavaScript can change HTML content, attribute values, styles (CSS), and hide or show elements dynamically in real-time.',
          code: `// Change HTML content
document.getElementById("demo").innerHTML = "Hello JavaScript!";

// Change HTML attribute
document.getElementById("myImage").src = "picture.png";

// Change CSS style
document.getElementById("demo").style.color = "#4f46e5";`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; text-align: center; }
    #demo { font-size: 20px; color: #334155; margin: 16px 0; font-weight: bold; }
    .btn { background: #4f46e5; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; cursor: pointer; }
    .btn:hover { background: #4338ca; }
  </style>
</head>
<body>
  <h2>JavaScript Interactive Demo</h2>
  <p id="demo">JavaScript can change HTML content dynamically.</p>
  <button class="btn" onclick="document.getElementById('demo').innerHTML = 'Hello from DevAura JavaScript!'; document.getElementById('demo').style.color = '#4f46e5';">Click Me!</button>
</body>
</html>`,
          tips: [
            'JavaScript and Java are completely different languages in concept and design.',
            'JavaScript was invented by Brendan Eich in 1995 and became an ECMA standard in 1997.'
          ]
        }
      ]
    }
  },

  // 2. JS Introduction
  {
    id: 'js-intro',
    title: 'JavaScript Introduction',
    slug: 'js-intro',
    summary: 'Explore how JavaScript brings static web pages to life by manipulating content, attributes, and styles.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript is one of the 3 languages all web developers must learn: HTML to define the content, CSS to specify the layout, and JavaScript to program the behavior of web pages.',
      sections: [
        {
          heading: 'Manipulating the DOM',
          body: 'One of many JavaScript HTML methods is getElementById(). This method finds an HTML element with id="example" and changes the element content (innerHTML).',
          code: `// Toggling visibility
function toggleVisibility() {
  const el = document.getElementById("secret-box");
  el.style.display = (el.style.display === "none") ? "block" : "none";
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    #box { background: #eff6ff; border: 2px solid #3b82f6; padding: 16px; border-radius: 8px; margin-top: 12px; color: #1e40af; }
    button { background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; }
  </style>
</head>
<body>
  <h3>JavaScript Show/Hide Toggle</h3>
  <button onclick="var b = document.getElementById('box'); b.style.display = (b.style.display === 'none') ? 'block' : 'none';">Toggle Box</button>
  <div id="box">Now you see me! Click the button above to toggle my display style.</div>
</body>
</html>`,
          tips: [
            'JavaScript accepts both double quotes ("Hello") and single quotes (\'Hello\').'
          ]
        }
      ]
    }
  },

  // 3. JS Where To
  {
    id: 'js-where-to',
    title: 'JavaScript Where To',
    slug: 'js-where-to',
    summary: 'Learn where to insert JavaScript: <head>, <body>, and external .js files.',
    readTime: '4 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'In HTML, JavaScript code is inserted between <script> and </script> tags. Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in external .js files.',
      sections: [
        {
          heading: 'External JavaScript Advantages',
          body: 'Placing scripts in external files has some great advantages: It separates HTML and code, makes HTML and JavaScript easier to read and maintain, and cached JavaScript files speed up page loads.',
          code: `<!-- 1. Script in <head> -->
<head>
  <script src="app.js" defer></script>
</head>

<!-- 2. Script before closing </body> tag -->
<body>
  <h1>Page Content</h1>
  <script>
    console.log("DOM loaded");
  </script>
</body>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body>
  <h3>JavaScript Execution Order</h3>
  <p id="time-display">Time will appear here...</p>
  <script>
    document.getElementById("time-display").innerHTML = "Current Date: " + new Date().toLocaleDateString();
  </script>
</body>
</html>`,
          tips: [
            'Placing scripts at the bottom of the <body> element or using the defer attribute improves display speed because script compilation does not block rendering.'
          ]
        }
      ]
    }
  },

  // 4. JS Output
  {
    id: 'js-output',
    title: 'JavaScript Output',
    slug: 'js-output',
    summary: 'Four ways to display data in JavaScript: innerHTML, innerText, window.alert(), and console.log().',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript can "display" data in different ways: Writing into an HTML element using innerHTML, writing into the HTML output using document.write(), writing into an alert box using window.alert(), and writing into the browser console using console.log().',
      sections: [
        {
          heading: 'Display Methods Compared',
          body: 'console.log() is the primary tool for developer debugging. innerHTML modifies element markup.',
          code: `// 1. Modifying DOM element
document.getElementById("result").innerHTML = "Score: 100";

// 2. Alert pop-up dialog
window.alert("Task completed successfully!");

// 3. Browser Developer Console
console.log("Debug payload:", { status: 200, user: "Alex" });
console.warn("API token nearing expiration");
console.error("Failed to fetch data");`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .btn-group { display: flex; gap: 8px; margin-bottom: 12px; }
    button { padding: 8px 14px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; cursor: pointer; font-weight: 600; }
    #out { padding: 12px; background: #e0e7ff; border-radius: 6px; color: #3730a3; font-weight: bold; }
  </style>
</head>
<body>
  <h3>JavaScript Output Methods</h3>
  <div class="btn-group">
    <button onclick="document.getElementById('out').innerHTML = 'Wrote into innerHTML at ' + new Date().toLocaleTimeString();">innerHTML</button>
    <button onclick="alert('Hello from window.alert()!');">window.alert()</button>
    <button onclick="console.log('Logged to console:', Date.now()); document.getElementById('out').innerHTML = 'Logged to Console! (Press F12 to view)';">console.log()</button>
  </div>
  <div id="out">Output will display here.</div>
</body>
</html>`,
          tips: [
            'Never use document.write() after an HTML document is fully loaded, as it will overwrite the entire HTML document.'
          ]
        }
      ]
    }
  },

  // 5. JS Statements
  {
    id: 'js-statements',
    title: 'JavaScript Statements',
    slug: 'js-statements',
    summary: 'A computer program is a list of "instructions" to be "executed" by a computer. In a programming language, these instructions are called statements.',
    readTime: '4 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'A JavaScript program is a sequence of statements to be executed by the browser. JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments. Statements are separated by semicolons (;).',
      sections: [
        {
          heading: 'Semicolons and Code Blocks',
          body: 'Semicolons separate JavaScript statements. JavaScript statements can be grouped together in code blocks, inside curly brackets ({...}).',
          code: `let x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4

// Code block
function calculateTotal() {
  let subtotal = 100;
  let tax = 15;
  return subtotal + tax;
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; font-weight: bold; color: #4f46e5; }
  </style>
</head>
<body>
  <h3>Executing JavaScript Statements</h3>
  <div id="result" class="box">Calculating...</div>
  <script>
    let a = 15;
    let b = 25;
    let sum = a + b;
    document.getElementById("result").innerHTML = "Result of Statements: a (" + a + ") + b (" + b + ") = " + sum;
  </script>
</body>
</html>`,
          tips: [
            'Ending statements with semicolons is standard industry best practice.'
          ]
        }
      ]
    }
  },

  // 6. JS Syntax
  {
    id: 'js-syntax',
    title: 'JavaScript Syntax',
    slug: 'js-syntax',
    summary: 'JavaScript syntax defines the set of rules for how JavaScript programs are constructed.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript syntax is the set of rules that define how JavaScript programs are constructed: Fixed values (literals) and variable values (variables). JavaScript uses the keywords var, let, and const to declare variables.',
      sections: [
        {
          heading: 'Identifiers, Case Sensitivity, and CamelCase',
          body: 'JavaScript identifiers are case-sensitive (lastName and lastname are different variables). Lower camelCase is standard practice for variables and functions (e.g. firstName, calculateTotal).',
          code: `// Literals: Numbers & Strings
10.50
"John Doe"

// Variables & Assignment
let price = 19.99;
let isAvailable = true;

// Operators & Expressions
let total = price * 2; // Expression computes to 39.98`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>JavaScript Case Sensitivity</h3>
  <p id="out"></p>
  <script>
    let firstName = "Alex";
    let firstname = "Jordan";
    document.getElementById("out").innerHTML = "firstName: <b>" + firstName + "</b> vs firstname: <b>" + firstname + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'JavaScript uses the Unicode character set.',
            'Hyphens are not allowed in JavaScript names (reserved for subtraction: first-name is interpreted as first minus name).'
          ]
        }
      ]
    }
  },

  // 7. JS Comments
  {
    id: 'js-comments',
    title: 'JavaScript Comments',
    slug: 'js-comments',
    summary: 'JavaScript comments can be used to explain code, and to make it more readable.',
    readTime: '3 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript comments are not executed. They can be used to explain code, add documentation, or prevent execution when testing alternative code.',
      sections: [
        {
          heading: 'Single-Line and Multi-Line Comments',
          body: 'Single line comments start with //, and multi-line comments start with /* and end with */.',
          code: `// Single line comment:
let score = 95; // In-line explanation

/*
  Multi-line Comment:
  This function processes payment transactions.
  Author: DevAura Team
*/
function processPayment() {
  // return false; // Prevented execution
  return true;
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Comments Demo</h3>
  <p id="demo"></p>
  <script>
    // This is a comment that does not execute
    let message = "Hello from clean, commented JavaScript code!";
    document.getElementById("demo").innerText = message;
  </script>
</body>
</html>`,
          tips: [
            'Use JSDoc comments (/** ... */) to provide type hints and descriptions for modern code editors.'
          ]
        }
      ]
    }
  },

  // 8. JS Variables
  {
    id: 'js-variables',
    title: 'JavaScript Variables',
    slug: 'js-variables',
    summary: 'Variables are containers for storing data. Learn var, let, and const.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Variables are containers for storing data values. In modern JavaScript (ES6+), you should always declare variables using const (if value should not change) or let (if value will change). Avoid legacy var in new code.',
      sections: [
        {
          heading: 'When to Use var, let, or const',
          body: '1. Always declare variables. 2. Always use const if the value should not be reassigned. 3. Always use let if the value must change. 4. Only use var if you MUST support ancient browsers (1995-2014).',
          code: `const PI = 3.14159;
const companyName = "DevAura";

let currentCount = 0;
currentCount = currentCount + 1; // Valid reassignment`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>let vs const</h3>
  <p id="res"></p>
  <script>
    const app = "DevAura";
    let visits = 1;
    visits += 4;
    document.getElementById("res").innerHTML = "App: " + app + " | Total Visits: " + visits;
  </script>
</body>
</html>`,
          tips: [
            'Declaring variables with const prevents accidental bugs from unexpected reassignments.'
          ]
        }
      ]
    }
  },

  // 9. JS Let
  {
    id: 'js-let',
    title: 'JavaScript Let',
    slug: 'js-let',
    summary: 'The let keyword was introduced in ES6 (2015). Variables defined with let have Block Scope.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Before ES6 (2015), JavaScript had Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const, which provide Block Scope in JavaScript.',
      sections: [
        {
          heading: 'Block Scope Explained',
          body: 'Variables declared inside a { } block cannot be accessed from outside the block.',
          code: `{
  let x = 2; // Accessible only inside this block
}
// x CANNOT be used here!

// Contrast with var (Leaked scope):
{
  var y = 2; // Leaks outside the block!
}
// y CAN be used here (Danger!)`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Block Scope with let</h3>
  <p id="output"></p>
  <script>
    let x = 10;
    {
      let x = 2; // Separate variable inside block!
    }
    document.getElementById("output").innerHTML = "Outside x is still: " + x;
  </script>
</body>
</html>`,
          tips: [
            'Variables declared with let cannot be redeclared in the same scope.'
          ]
        }
      ]
    }
  },

  // 10. JS Const
  {
    id: 'js-const',
    title: 'JavaScript Const',
    slug: 'js-const',
    summary: 'Variables defined with const cannot be Redeclared, cannot be Reassigned, and have Block Scope.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'The const keyword was introduced in ES6 (2015). It does NOT define a constant value; it defines a constant reference to a value. Because of this, you cannot reassign a constant value, but you CAN mutate the elements of a constant array or properties of a constant object.',
      sections: [
        {
          heading: 'Mutating Const Objects and Arrays',
          body: 'You can change the properties of a const object or push elements to a const array, but you cannot reassign the variable to a different object or array.',
          code: `// Valid object property mutation:
const car = { type: "Fiat", model: "500", color: "white" };
car.color = "red";       // Allowed!
car.owner = "Johnson";   // Allowed!

// Invalid reassignment:
// car = { type: "Volvo" }; // TypeError: Assignment to constant variable

// Valid array mutation:
const cars = ["Saab", "Volvo", "BMW"];
cars.push("Audi");       // Allowed!`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Const Object Mutation</h3>
  <p id="demo"></p>
  <script>
    const user = { name: "Alice", role: "Developer" };
    user.role = "Senior Architect"; // Mutating property
    document.getElementById("demo").innerHTML = user.name + " is now a " + user.role;
  </script>
</body>
</html>`,
          tips: [
            'Always declare arrays and objects with const unless you have an explicit need to reassign their pointer.'
          ]
        }
      ]
    }
  },

  // 11. JS Operators
  {
    id: 'js-operators',
    title: 'JavaScript Operators',
    slug: 'js-operators',
    summary: 'JavaScript operators are used to perform arithmetic, comparisons, logical operations, and assignments.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript includes operators for Arithmetic (+, -, *, /), Assignment (=, +=, -=), Comparison (==, ===, !=, !==, >, <), Logical (&&, ||, !), Type (typeof, instanceof), and Bitwise operations.',
      sections: [
        {
          heading: 'Strict Equality (===) vs. Loose Equality (==)',
          body: 'Strict equality (===) checks both value and type without type coercion. Loose equality (==) coerces types, leading to tricky bugs.',
          code: `5 == "5"   // true (Loose - coerced string to number)
5 === "5"  // false (Strict - number !== string)

// Logical Operators
let isEligible = (age >= 18) && hasLicense;
let canEnter = isVIP || hasTicket;
let isLocked = !hasKey;`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Strict vs Loose Equality</h3>
  <p id="out"></p>
  <script>
    let loose = (5 == "5");
    let strict = (5 === "5");
    document.getElementById("out").innerHTML = "5 == '5' is: <b>" + loose + "</b><br>5 === '5' is: <b>" + strict + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'In modern JavaScript, always use strict equality (===) and strict inequality (!==).'
          ]
        }
      ]
    }
  },

  // 12. JS Arithmetic
  {
    id: 'js-arithmetic',
    title: 'JavaScript Arithmetic',
    slug: 'js-arithmetic',
    summary: 'Perform mathematical operations: +, -, *, /, %, **, ++, --.',
    readTime: '4 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Arithmetic operators perform arithmetic on numbers (literals or variables). Standard operators: Addition (+), Subtraction (-), Multiplication (*), Exponentiation (**), Division (/), Modulus / Remainder (%), Increment (++), Decrement (--).',
      sections: [
        {
          heading: 'Exponentiation and Modulus',
          body: 'The exponentiation operator (** introduced in ES2016) raises the first operand to the power of the second operand (x ** y is identical to Math.pow(x, y)).',
          code: `let x = 5;
let y = 2;
let power = x ** y;   // 25 (5^2)
let remainder = 10 % 3; // 1 (Remainder of 10 divided by 3)`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Arithmetic Examples</h3>
  <p id="demo"></p>
  <script>
    let base = 2;
    let exp = 8;
    document.getElementById("demo").innerHTML = "2 ** 8 = " + (base ** exp) + "<br>17 % 5 = " + (17 % 5);
  </script>
</body>
</html>`,
          tips: [
            'When adding a number and a string, JavaScript treats the number as a string (e.g. 5 + "5" = "55").'
          ]
        }
      ]
    }
  },

  // 13. JS Assignment
  {
    id: 'js-assignment',
    title: 'JavaScript Assignment',
    slug: 'js-assignment',
    summary: 'Assignment operators assign values to variables: =, +=, -=, *=, /=, %=, **=, &&=, ||=, ??=.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Assignment operators assign values to JavaScript variables. ES2021 introduced Logical Assignment Operators: Logical AND assignment (&&=), Logical OR assignment (||=), and Nullish coalescing assignment (??=).',
      sections: [
        {
          heading: 'Logical Assignment Operators',
          body: 'Logical assignment combines logical operations with variable assignment.',
          code: `// Nullish coalescing assignment (??=)
// Only assigns if x is null or undefined:
let config = { port: null };
config.port ??= 3000; // config.port becomes 3000

// Logical OR assignment (||=)
// Assigns if left side is falsy (0, "", false, null, undefined):
let title = "";
title ||= "Untitled Document";`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Nullish Coalescing Assignment (??=)</h3>
  <p id="out"></p>
  <script>
    let port = null;
    port ??= 8080;
    let maxConnections = 100;
    maxConnections ??= 50; // Not reassigned because 100 is not null/undefined
    document.getElementById("out").innerHTML = "Port: " + port + " | Max: " + maxConnections;
  </script>
</body>
</html>`,
          tips: [
            '??= is safer than ||= when 0 or false are legitimate values you want to preserve.'
          ]
        }
      ]
    }
  },

  // 14. JS Data Types
  {
    id: 'js-data-types',
    title: 'JavaScript Data Types',
    slug: 'js-data-types',
    summary: 'JavaScript has 8 Data Types: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object.',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript has 8 Datatypes: 7 Primitive types (String, Number, Bigint, Boolean, Undefined, Null, Symbol) and 1 Complex type (Object). An Object can store collections of data, including Arrays, Dates, and custom objects.',
      sections: [
        {
          heading: 'Dynamic Typing and typeof',
          body: 'JavaScript has dynamic types. This means that the same variable can be used to hold different data types.',
          code: `let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

typeof "John"    // Returns "string"
typeof 3.14      // Returns "number"
typeof true      // Returns "boolean"
typeof undefined // Returns "undefined"
typeof null      // Returns "object" (Historical JS quirk!)`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Data Types & typeof Operator</h3>
  <ul id="types-list"></ul>
  <script>
    const samples = ["Hello", 42, true, null, undefined, { a: 1 }, [1, 2, 3]];
    let html = "";
    samples.forEach(s => {
      html += "<li>Value: <code>" + JSON.stringify(s) + "</code> -> typeof: <b>" + typeof s + "</b></li>";
    });
    document.getElementById("types-list").innerHTML = html;
  </script>
</body>
</html>`,
          tips: [
            'In JavaScript, arrays are technically objects (typeof [1, 2] returns "object"). Use Array.isArray(arr) to check for arrays.'
          ]
        }
      ]
    }
  },

  // 15. JS Functions
  {
    id: 'js-functions',
    title: 'JavaScript Functions',
    slug: 'js-functions',
    summary: 'A JavaScript function is a block of code designed to perform a particular task, executed when invoked.',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). Parameters are listed inside the parentheses, and the code to be executed is placed inside curly brackets {}.',
      sections: [
        {
          heading: 'Function Parameters, Arguments & Return',
          body: 'When JavaScript reaches a return statement, the function stops executing and returns the value to the caller.',
          code: `// Function declaration
function calculateArea(width, height) {
  return width * height;
}

// Invocation
let area = calculateArea(10, 5); // Returns 50

// Function stored in a variable (Function Expression)
const toCelsius = function(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
};`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Function Invocation</h3>
  <p id="res"></p>
  <script>
    function fahrenheitToCelsius(f) {
      return ((5 / 9) * (f - 32)).toFixed(1);
    }
    document.getElementById("res").innerHTML = "98.6°F is " + fahrenheitToCelsius(98.6) + "°C";
  </script>
</body>
</html>`,
          tips: [
            'Accessing a function without parentheses returns the function definition rather than the function result.'
          ]
        }
      ]
    }
  },

  // 16. JS Objects
  {
    id: 'js-objects',
    title: 'JavaScript Objects',
    slug: 'js-objects',
    summary: 'Objects are collections of key-value pairs (properties) and actions (methods).',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'You have already learned that JavaScript variables are containers for data values. Objects are variables too, but objects can contain many values written as name: value pairs (called properties). Objects can also contain methods (functions stored as object properties).',
      sections: [
        {
          heading: 'Object Properties, Methods, and this',
          body: 'Inside an object method, this refers to the "owner" object.',
          code: `const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Accessing properties:
person.firstName;       // Dot notation
person["lastName"];     // Bracket notation

// Calling method:
person.fullName();      // "John Doe"`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Object Method Demo</h3>
  <p id="profile"></p>
  <script>
    const user = {
      username: "alex99",
      role: "Lead Engineer",
      getBadge: function() {
        return this.username + " (" + this.role + ")";
      }
    };
    document.getElementById("profile").innerHTML = user.getBadge();
  </script>
</body>
</html>`,
          tips: [
            'Do NOT declare Strings, Numbers, and Booleans as Objects with new (e.g. new String()); it degrades execution speed.'
          ]
        }
      ]
    }
  },

  // 17. JS Events
  {
    id: 'js-events',
    title: 'JavaScript Events',
    slug: 'js-events',
    summary: 'HTML events are "things" that happen to HTML elements, reacting to user interactions.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'When JavaScript is used in HTML pages, JavaScript can "react" on these events: An HTML web page has finished loading, an HTML input field was changed, an HTML button was clicked.',
      sections: [
        {
          heading: 'Common HTML Events',
          body: 'Common events include: onclick, onchange, onmouseover, onmouseout, onkeydown, and onload.',
          code: `<!-- Inline event handler -->
<button onclick="displayDate()">What time is it?</button>

<!-- Recommended modern JavaScript addEventListener -->
document.getElementById("myBtn").addEventListener("click", function(event) {
  console.log("Clicked at coordinate:", event.clientX, event.clientY);
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .hover-card { padding: 20px; background: #e0e7ff; color: #4338ca; border-radius: 8px; text-align: center; font-weight: bold; cursor: pointer; transition: all 0.2s; }
  </style>
</head>
<body>
  <div class="hover-card" 
       onmouseover="this.style.background='#4f46e5'; this.style.color='white'; this.innerHTML='Mouse Over Event!';" 
       onmouseout="this.style.background='#e0e7ff'; this.style.color='#4338ca'; this.innerHTML='Hover Over Me!';">
    Hover Over Me!
  </div>
</body>
</html>`,
          tips: [
            'Using addEventListener() allows you to attach multiple handlers to a single element without overwriting existing handlers.'
          ]
        }
      ]
    }
  },

  // 18. JS Strings
  {
    id: 'js-strings',
    title: 'JavaScript Strings',
    slug: 'js-strings',
    summary: 'Strings are for storing and manipulating text. Learn string length and escape characters.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'A JavaScript string is zero or more characters written inside quotes. You can use single or double quotes. Strings can be measured with the length property and formatted using backslash (\\) escape characters.',
      sections: [
        {
          heading: 'Escape Characters & String Length',
          body: 'Backslash escapes allow inserting quotes inside quotes (\\", \\\'), newlines (\\n), tabs (\\t), or literal backslashes (\\\\).',
          code: `let text = "We are the so-called \\"Vikings\\" from the north.";
let length = text.length; // 40

let multiline = "Line one\\nLine two";`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>String Length & Escaping</h3>
  <p id="out"></p>
  <script>
    let quote = "It\\'s alright! We are \\"Developers\\".";
    document.getElementById("out").innerHTML = quote + "<br>Length: <b>" + quote.length + "</b> characters";
  </script>
</body>
</html>`,
          tips: [
            'Strings in JavaScript are immutable; string methods always return a new string rather than modifying the original in place.'
          ]
        }
      ]
    }
  },

  // 19. JS String Methods
  {
    id: 'js-string-methods',
    title: 'JavaScript String Methods',
    slug: 'js-string-methods',
    summary: 'Extracting and transforming strings: slice(), substring(), replace(), toUpperCase(), trim(), split().',
    readTime: '6 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript provides powerful built-in methods for working with string values. Common methods include slice, substring, replace, replaceAll, toUpperCase, toLowerCase, concat, trim, padStart, charAt, and split.',
      sections: [
        {
          heading: 'Key String Methods',
          body: 'slice(start, end) extracts a section of a string and returns it as a new string. trim() removes whitespace from both sides.',
          code: `let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13); // "Banana"

// Negative indices count from the end:
let endPart = str.slice(-4); // "Kiwi"

// Case transformation & trimming
let greeting = "   Hello World!   ";
let clean = greeting.trim().toUpperCase(); // "HELLO WORLD!"

// Splitting into Array
let tags = "html,css,js".split(","); // ["html", "css", "js"]`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>String Transformation</h3>
  <p id="res"></p>
  <script>
    let raw = "   learn javascript today   ";
    let formatted = raw.trim().toUpperCase();
    document.getElementById("res").innerHTML = "Raw: '" + raw + "'<br>Trimmed & Uppercased: <b>'" + formatted + "'</b>";
  </script>
</body>
</html>`,
          tips: [
            'replaceAll() replaces all occurrences of a string without requiring a global regular expression (/g).'
          ]
        }
      ]
    }
  },

  // 20. JS String Search
  {
    id: 'js-string-search',
    title: 'JavaScript String Search',
    slug: 'js-string-search',
    summary: 'Search strings using indexOf(), lastIndexOf(), search(), match(), includes(), and startsWith().',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'JavaScript methods for searching inside strings: indexOf() returns the index of the first occurrence, includes() returns true if a string contains a specified value, startsWith() checks if a string begins with a substring, and endsWith() checks if it ends with a substring.',
      sections: [
        {
          heading: 'Modern String Search with includes()',
          body: 'includes(), startsWith(), and endsWith() were introduced in ES6 and provide clean boolean checks without index math.',
          code: `let text = "The rain in SPAIN stays mainly in the plain";

// Boolean checks (ES6)
text.includes("SPAIN");       // true
text.startsWith("The");       // true
text.endsWith("plain");       // true

// Index search
text.indexOf("rain");         // 4
text.indexOf("nonexistent");  // -1`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>String Search: includes() & startsWith()</h3>
  <p id="out"></p>
  <script>
    let email = "admin@devaura.dev";
    let isDev = email.endsWith(".dev");
    let hasAdmin = email.startsWith("admin");
    document.getElementById("out").innerHTML = "Email: " + email + "<br>Starts with 'admin': <b>" + hasAdmin + "</b><br>Ends with '.dev': <b>" + isDev + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'String search methods are case-sensitive. "SPAIN" is not found if searching for "spain".'
          ]
        }
      ]
    }
  },

  // 21. JS String Templates
  {
    id: 'js-string-templates',
    title: 'JavaScript String Templates',
    slug: 'js-string-templates',
    summary: 'Template Literals use backticks (``) rather than quotes to define strings, supporting interpolation ${}.',
    readTime: '5 min',
    category: 'JavaScript Tutorial',
    content: {
      overview: 'Template Literals (Template Strings) were introduced in ES6. They use backticks (``) instead of quotes, allowing multiline strings, string interpolation with ${expression}, and HTML template generation.',
      sections: [
        {
          heading: 'String Interpolation & Multiline Strings',
          body: 'Template literals eliminate messy plus sign (+) string concatenation and support embedded expressions.',
          code: `let firstName = "John";
let lastName = "Doe";
let price = 10;
let VAT = 0.25;

// Interpolation:
let greeting = \`Welcome \${firstName} \${lastName}!\`;

// Expression calculation:
let total = \`Total: $\${(price * (1 + VAT)).toFixed(2)}\`;

// Multiline HTML Templates:
let html = \`
  <div class="user-card">
    <h2>\${firstName}</h2>
    <p>Status: Active</p>
  </div>
\`;`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Template Literals in Action</h3>
  <div id="card"></div>
  <script>
    const item = "Mechanical Keyboard";
    const price = 89.99;
    const qty = 2;
    document.getElementById("card").innerHTML = \`
      <div style="background: #f1f5f9; padding: 16px; border-radius: 8px; border-left: 4px solid #4f46e5;">
        <h4 style="margin: 0; color: #4f46e5;">Order: \${item}</h4>
        <p style="margin: 6px 0 0; color: #334155;">Quantity: \${qty} &times; $\${price} = <b>$\${(qty * price).toFixed(2)}</b></p>
      </div>
    \`;
  </script>
</body>
</html>`,
          tips: [
            'Template literals make dynamic HTML template rendering in JavaScript clean and readable.'
          ]
        }
      ]
    }
  }
];
