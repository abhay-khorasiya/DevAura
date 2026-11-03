import { TutorialChapter } from '../../../types';

export const jsAsyncDomAndApisChapters: TutorialChapter[] = [
  // 57. JS Callbacks
  {
    id: 'js-callbacks',
    title: 'JavaScript Callbacks',
    slug: 'js-callbacks',
    summary: 'A callback is a function passed as an argument to another function, executed when an action finishes.',
    readTime: '5 min',
    category: 'JavaScript Async',
    content: {
      overview: 'A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished, enabling asynchronous workflows.',
      sections: [
        {
          heading: 'Callback Function Anatomy',
          body: 'Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).',
          code: `function myDisplayer(some) {
  console.log("Result:", some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum); // Invoking callback
}

myCalculator(5, 5, myDisplayer);

// Asynchronous callback with setTimeout:
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Callback Execution Demo</h3>
  <p id="cb-res">Waiting 1.5 seconds...</p>
  <script>
    setTimeout(function() {
      document.getElementById("cb-res").innerHTML = "Callback executed successfully at " + new Date().toLocaleTimeString();
    }, 1500);
  </script>
</body>
</html>`,
          tips: [
            'Avoid deeply nested callbacks ("Callback Hell"); modern JavaScript resolves this using Promises and async/await.'
          ]
        }
      ]
    }
  },

  // 58. JS Asynchronous
  {
    id: 'js-asynchronous',
    title: 'JavaScript Asynchronous',
    slug: 'js-asynchronous',
    summary: 'JavaScript is single-threaded. Understand asynchronous execution, the Call Stack, and Event Loop.',
    readTime: '6 min',
    category: 'JavaScript Async',
    content: {
      overview: 'Functions running in parallel with other functions are called asynchronous. A good example is JavaScript setTimeout(). While JavaScript is single-threaded, the browser Web APIs provide background threads that push completed tasks to the Event Loop queue.',
      sections: [
        {
          heading: 'The Event Loop and Non-Blocking I/O',
          body: 'Asynchronous operations do not freeze the UI thread; long computations and network requests happen in the background.',
          code: `console.log("1: Synchronous start");

setTimeout(() => {
  console.log("2: Asynchronous timer finished");
}, 0);

console.log("3: Synchronous end");

// Output Order:
// 1: Synchronous start
// 3: Synchronous end
// 2: Asynchronous timer finished`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Event Loop Execution Order</h3>
  <div id="log"></div>
  <script>
    let log = [];
    log.push("1. Call Stack: Sync task");
    setTimeout(() => {
      log.push("3. Callback Queue: Timer task");
      document.getElementById("log").innerHTML = log.join("<br>");
    }, 500);
    log.push("2. Call Stack: Another sync task");
    document.getElementById("log").innerHTML = log.join("<br>");
  </script>
</body>
</html>`,
          tips: [
            'Microtasks (Promises) have higher priority than macrotasks (setTimeout) in the event loop queue.'
          ]
        }
      ]
    }
  },

  // 59. JS Promises
  {
    id: 'js-promises',
    title: 'JavaScript Promises',
    slug: 'js-promises',
    summary: 'A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.',
    readTime: '6 min',
    category: 'JavaScript Async',
    content: {
      overview: 'A JavaScript Promise object contains both the producing code and calls to the consuming code. A Promise has 3 states: Pending (initial state), Fulfilled (operation completed successfully), and Rejected (operation failed).',
      sections: [
        {
          heading: 'Creating and Consuming Promises',
          body: 'Use .then() to consume successful results, .catch() for errors, and .finally() for cleanup.',
          code: `const fetchUserData = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve({ id: 1, name: "Alex" });
  } else {
    reject("Failed to fetch user data");
  }
});

// Consuming Promise:
fetchUserData
  .then(data => console.log("User:", data.name))
  .catch(err => console.error("Error:", err))
  .finally(() => console.log("Operation ended"));

// Parallel execution with Promise.all:
Promise.all([promise1, promise2]).then(([res1, res2]) => {
  console.log("Both completed!");
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Promise State Simulator</h3>
  <p id="prom-out">Connecting to mock API...</p>
  <script>
    const mockRequest = new Promise((resolve) => {
      setTimeout(() => resolve("Connected to Database! Status: 200 OK"), 1000);
    });

    mockRequest.then((msg) => {
      document.getElementById("prom-out").innerHTML = "<b style='color:#16a34a;'>" + msg + "</b>";
    });
  </script>
</body>
</html>`,
          tips: [
            'Promise.allSettled() waits for all promises to settle regardless of whether some fail.'
          ]
        }
      ]
    }
  },

  // 60. JS Async/Await
  {
    id: 'js-async-await',
    title: 'JavaScript Async/Await',
    slug: 'js-async-await',
    summary: 'async and await make promises easier to write. async returns a promise, await pauses until resolved.',
    readTime: '6 min',
    category: 'JavaScript Async',
    content: {
      overview: 'The keywords async and await were introduced in ES2017. async makes a function return a Promise. await makes a function pause execution and wait for a Promise to resolve before continuing, writing asynchronous code that looks and behaves like synchronous code.',
      sections: [
        {
          heading: 'Writing Clean Async Code with try...catch',
          body: 'Combine async/await with try...catch for clear and linear error handling.',
          code: `async function loadDashboard() {
  try {
    const response = await fetch("https://api.github.com/users/octocat");
    if (!response.ok) throw new Error("HTTP error " + response.status);
    const user = await response.json();
    console.log("GitHub user:", user.name);
  } catch (error) {
    console.error("Dashboard load failed:", error.message);
  }
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Async/Await Simulation</h3>
  <button id="btn" style="background:#4f46e5; color:white; border:none; padding:10px 18px; border-radius:6px; cursor:pointer;" onclick="runTask()">Run Async Task</button>
  <p id="status"></p>
  <script>
    const wait = (ms) => new Promise(res => setTimeout(res, ms));
    async function runTask() {
      const el = document.getElementById("status");
      el.innerHTML = "Processing Step 1...";
      await wait(1000);
      el.innerHTML = "Processing Step 2...";
      await wait(1000);
      el.innerHTML = "<span style='color:green; font-weight:bold;'>All Steps Complete!</span>";
    }
  </script>
</body>
</html>`,
          tips: [
            'The await keyword can only be used inside an async function or at the top level of ES modules.'
          ]
        }
      ]
    }
  },

  // 61. JS HTML DOM Intro
  {
    id: 'js-dom-intro',
    title: 'JavaScript HTML DOM Intro',
    slug: 'js-dom-intro',
    summary: 'When a web page is loaded, the browser creates a Document Object Model of the page: The HTML DOM Tree.',
    readTime: '5 min',
    category: 'JavaScript DOM',
    content: {
      overview: 'The HTML DOM is a standard object model and programming interface for HTML. It defines: HTML elements as objects, properties of all HTML elements, methods to access all HTML elements, and events for all HTML elements.',
      sections: [
        {
          heading: 'The DOM Tree Structure',
          body: 'With the object model, JavaScript gets all the power it needs to create dynamic HTML: change HTML elements, change attributes, change CSS styles, react to existing events, and create new HTML events.',
          code: `// Document root access:
document.title = "Updated Title";
document.body.style.backgroundColor = "#f8fafc";
let totalLinks = document.links.length;`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Inspecting the DOM Tree</h3>
  <p id="dom-info"></p>
  <script>
    document.getElementById("dom-info").innerHTML = 
      "Document URL: <b>" + document.URL + "</b><br>" +
      "Domain: <b>" + (document.domain || "Sandbox") + "</b><br>" +
      "Character Set: <b>" + document.characterSet + "</b>";
  </script>
</body>
</html>`,
          tips: [
            'The W3C DOM standard is separated into 3 parts: Core DOM, XML DOM, and HTML DOM.'
          ]
        }
      ]
    }
  },

  // 62. JS DOM Methods & Elements
  {
    id: 'js-dom-methods',
    title: 'JavaScript DOM Methods',
    slug: 'js-dom-methods',
    summary: 'Find HTML elements using querySelector(), querySelectorAll(), getElementById(), and getElementsByClassName().',
    readTime: '6 min',
    category: 'JavaScript DOM',
    content: {
      overview: 'Often you want to manipulate HTML elements using JavaScript. To do so, you have to find the elements first: Finding by id (getElementById), finding by class name (getElementsByClassName), and finding by CSS selectors (querySelector and querySelectorAll).',
      sections: [
        {
          heading: 'querySelector and querySelectorAll',
          body: 'querySelector returns the first matching element using any CSS selector. querySelectorAll returns a static NodeList of all matching elements.',
          code: `// Single element search
const header = document.querySelector("#main-header");
const firstButton = document.querySelector("button.primary");

// Multiple elements search
const allCards = document.querySelectorAll(".card");
allCards.forEach(card => {
  card.style.borderRadius = "8px";
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .item { padding: 8px; margin: 4px; background: #e0e7ff; border-radius: 4px; }
  </style>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>querySelectorAll Highlighting</h3>
  <div class="item">Card A</div>
  <div class="item">Card B</div>
  <div class="item">Card C</div>
  <button style="margin-top:10px; background:#4f46e5; color:white; border:none; padding:8px 14px; border-radius:4px; cursor:pointer;" onclick="highlightAll()">Highlight All</button>
  <script>
    function highlightAll() {
      const items = document.querySelectorAll('.item');
      items.forEach(el => el.style.background = '#86efac');
    }
  </script>
</body>
</html>`,
          tips: [
            'querySelectorAll() accepts any valid CSS selector string, including attribute selectors like [data-status="active"].'
          ]
        }
      ]
    }
  },

  // 63. JS DOM HTML & CSS
  {
    id: 'js-dom-html',
    title: 'JavaScript DOM HTML & CSS',
    slug: 'js-dom-html',
    summary: 'Modifying content, attributes, inline styles, and CSS classes with classList.',
    readTime: '6 min',
    category: 'JavaScript DOM',
    content: {
      overview: 'The HTML DOM allows JavaScript to change the content and style of HTML elements. You can modify innerHTML, textContent, attributes (setAttribute), and class names using the modern classList API (add, remove, toggle, contains).',
      sections: [
        {
          heading: 'Manipulating Classes with classList',
          body: 'classList is preferred over element.className because it allows adding, removing, and toggling specific classes without string parsing.',
          code: `const box = document.querySelector("#myBox");

// Content & Attributes:
box.textContent = "Safe plain text (no HTML injection)";
box.setAttribute("data-active", "true");

// Modern class manipulation:
box.classList.add("highlight");
box.classList.remove("dimmed");
box.classList.toggle("open");
let hasClass = box.classList.contains("highlight"); // true`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box { padding: 16px; border: 2px solid #cbd5e1; border-radius: 6px; transition: all 0.3s; }
    .active { background: #4f46e5; color: white; border-color: #312e81; font-weight: bold; }
  </style>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>classList.toggle Demo</h3>
  <div id="target" class="box">Click button to toggle .active class</div>
  <button style="margin-top:10px; padding:8px 14px; cursor:pointer;" onclick="document.getElementById('target').classList.toggle('active')">Toggle Class</button>
</body>
</html>`,
          tips: [
            'Prefer textContent over innerHTML when inserting user input to prevent Cross-Site Scripting (XSS) vulnerabilities.'
          ]
        }
      ]
    }
  },

  // 64. JS DOM Events
  {
    id: 'js-dom-events',
    title: 'JavaScript DOM Events',
    slug: 'js-dom-events',
    summary: 'Listen and react to events with addEventListener(), removeEventListener(), and event delegation.',
    readTime: '6 min',
    category: 'JavaScript DOM',
    content: {
      overview: 'The addEventListener() method attaches an event handler to an element without overwriting existing event handlers. You can add many event handlers to one element, of the same type or different types.',
      sections: [
        {
          heading: 'Event Object and preventDefault()',
          body: 'The event object gives coordinates, key codes, and control methods like event.preventDefault() and event.stopPropagation().',
          code: `const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Stop form submission page refresh
  console.log("Button clicked at coordinates:", event.clientX, event.clientY);
});

// Event Delegation (Listener on parent for dynamic children):
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "LI") {
    console.log("Clicked item:", e.target.textContent);
  }
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Event Object Inspector</h3>
  <button id="evt-btn" style="background:#0284c7; color:white; border:none; padding:10px 18px; border-radius:6px; cursor:pointer;">Click Me Anywhere</button>
  <p id="coords"></p>
  <script>
    document.getElementById("evt-btn").addEventListener("click", (e) => {
      document.getElementById("coords").innerHTML = 
        "Coordinates: X=" + e.clientX + ", Y=" + e.clientY + "<br>Target Tag: " + e.target.tagName;
    });
  </script>
</body>
</html>`,
          tips: [
            'Event delegation allows you to handle events on dynamic child elements added later in runtime.'
          ]
        }
      ]
    }
  },

  // 65. JS DOM Nodes
  {
    id: 'js-dom-nodes',
    title: 'JavaScript DOM Nodes',
    slug: 'js-dom-nodes',
    summary: 'Create, append, insert, remove, and replace HTML nodes dynamically in the DOM tree.',
    readTime: '6 min',
    category: 'JavaScript DOM',
    content: {
      overview: 'According to the W3C HTML DOM standard, everything in an HTML document is a node: The entire document is a document node, every HTML element is an element node, the text inside HTML elements are text nodes.',
      sections: [
        {
          heading: 'Creating and Appending Nodes',
          body: 'Use document.createElement() to create elements and parent.appendChild() or parent.append() to insert them.',
          code: `// Create element
const newPara = document.createElement("p");
newPara.textContent = "Dynamically injected paragraph.";
newPara.classList.add("note");

// Append to parent container
const container = document.getElementById("content");
container.appendChild(newPara);

// Remove element
newPara.remove(); // Modern ES6 remove method`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Dynamic Item Creation</h3>
  <button style="background:#4f46e5; color:white; border:none; padding:8px 14px; border-radius:4px; cursor:pointer;" onclick="addTodo()">Add Task +</button>
  <ul id="task-list" style="margin-top:12px;"></ul>
  <script>
    let count = 1;
    function addTodo() {
      const li = document.createElement("li");
      li.textContent = "New Milestone #" + count++;
      document.getElementById("task-list").appendChild(li);
    }
  </script>
</body>
</html>`,
          tips: [
            'Use DocumentFragment when inserting dozens of nodes to prevent multiple reflows.'
          ]
        }
      ]
    }
  },

  // 66. JS Browser BOM
  {
    id: 'js-bom',
    title: 'JavaScript Browser BOM',
    slug: 'js-bom',
    summary: 'The Browser Object Model (BOM) allows JavaScript to "talk to" the browser: window, screen, location, history.',
    readTime: '6 min',
    category: 'JavaScript Browser APIs',
    content: {
      overview: 'The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. The window object is supported by all browsers and represents the browser window. Global variables are properties of the window object. Key BOM objects: window.screen, window.location (href, reload), window.history (back, forward), and window.navigator.',
      sections: [
        {
          heading: 'Timing Events: setTimeout and setInterval',
          body: 'setTimeout() executes a function after waiting a specified number of milliseconds. setInterval() repeats execution continuously.',
          code: `// Redirecting via location:
// window.location.href = "https://devaura.dev";

// Repeating timer:
let seconds = 0;
const intervalId = setInterval(() => {
  seconds++;
  console.log("Elapsed:", seconds);
  if (seconds >= 10) clearInterval(intervalId); // Stop timer
}, 1000);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Live Digital Clock (setInterval)</h3>
  <h2 id="clock" style="color: #4f46e5;">00:00:00</h2>
  <script>
    function updateClock() {
      document.getElementById("clock").innerHTML = new Date().toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();
  </script>
</body>
</html>`,
          tips: [
            'Always clear intervals with clearInterval(id) when components unmount to avoid memory leaks.'
          ]
        }
      ]
    }
  },

  // 67. JS Web APIs & Fetch
  {
    id: 'js-web-apis',
    title: 'JavaScript Web APIs & Fetch',
    slug: 'js-web-apis',
    summary: 'Access browser capabilities: Fetch API for HTTP requests, localStorage for offline data, and Geolocation.',
    readTime: '6 min',
    category: 'JavaScript Browser APIs',
    content: {
      overview: 'Web APIs are built into your web browser, extending what you can do with JavaScript. The Fetch API provides an interface for fetching resources asynchronously across the network. Web Storage (localStorage and sessionStorage) stores data locally in the browser.',
      sections: [
        {
          heading: 'Fetch API and Web Storage',
          body: 'localStorage persists data even after the browser is closed, while sessionStorage is wiped when the tab is closed.',
          code: `// Storing and retrieving data:
localStorage.setItem("userTheme", "dark");
let theme = localStorage.getItem("userTheme");

// Fetch API GET request:
async function loadData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await response.json();
  console.log(post.title);
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Web Storage (localStorage)</h3>
  <input id="key-input" placeholder="Type text..." style="padding: 6px; border: 1px solid #cbd5e1; border-radius: 4px;">
  <button style="padding: 6px 12px; cursor: pointer;" onclick="save()">Save</button>
  <p id="saved-display"></p>
  <script>
    function save() {
      const val = document.getElementById("key-input").value;
      localStorage.setItem("demoNote", val);
      load();
    }
    function load() {
      document.getElementById("saved-display").innerHTML = "Persisted Value: <b>" + (localStorage.getItem("demoNote") || "None") + "</b>";
    }
    load();
  </script>
</body>
</html>`,
          tips: [
            'localStorage can only store strings; serialize objects using JSON.stringify() before storing.'
          ]
        }
      ]
    }
  },

  // 68. JS JSON
  {
    id: 'js-json',
    title: 'JavaScript JSON',
    slug: 'js-json',
    summary: 'JSON is a format for storing and transporting data. Master JSON.parse() and JSON.stringify().',
    readTime: '5 min',
    category: 'JavaScript Browser APIs',
    content: {
      overview: 'JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page. A common use of JSON is to exchange data to/from a web server.',
      sections: [
        {
          heading: 'JSON.parse() and JSON.stringify()',
          body: 'JSON.parse() converts a JSON string into a JavaScript object. JSON.stringify() converts a JavaScript object into a JSON string.',
          code: `// JSON formatted string:
const jsonString = '{"name":"John", "age":30, "city":"New York"}';

// Parse to JS Object:
const obj = JSON.parse(jsonString);
console.log(obj.name); // "John"

// Stringify Object to JSON:
const user = { id: 101, username: "alex" };
const serialized = JSON.stringify(user); // '{"id":101,"username":"alex"}'`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>JSON Serialization</h3>
  <p id="json-out"></p>
  <script>
    const project = { title: "DevAura", version: "2.0", isPublic: true };
    const jsonStr = JSON.stringify(project, null, 2);
    document.getElementById("json-out").innerHTML = "<pre style='background:#f1f5f9; padding:12px; border-radius:6px;'>" + jsonStr + "</pre>";
  </script>
</body>
</html>`,
          tips: [
            'In JSON, keys must always be enclosed in double quotes ("key": "value"). Single quotes are invalid JSON.'
          ]
        }
      ]
    }
  }
];
