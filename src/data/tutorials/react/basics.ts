import { TutorialChapter } from '../../../types';

export const reactBasicsChapters: TutorialChapter[] = [
  // 1. React HOME
  {
    id: 'react-home',
    title: 'React HOME',
    slug: 'react-home',
    summary: 'React is a JavaScript library for building user interfaces, primarily for single-page applications.',
    readTime: '3 min',
    category: 'React Tutorial',
    content: {
      overview: 'React is an open-source, component-based frontend library developed and maintained by Meta and a massive developer community. React makes it painless to create interactive user interfaces by designing simple views for each state in your application.',
      sections: [
        {
          heading: 'Your First React Component',
          body: 'In React, everything is a modular, declarative component that produces Virtual DOM elements:',
          code: `function Greeting() {
  return (
    <div className="card">
      <h2>Welcome to DevAura React!</h2>
      <p>Building high-speed reactive interfaces.</p>
    </div>
  );
}

export default Greeting;`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:20px;">
    <h2 style="color:#4f46e5; margin-top:0;">Welcome to DevAura React!</h2>
    <p style="color:#334155;">Building high-speed reactive interfaces.</p>
    <button style="background:#4f46e5; color:#fff; border:none; padding:8px 16px; border-radius:6px; cursor:pointer;">
      Interactive React Preview
    </button>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. React Intro
  {
    id: 'react-intro',
    title: 'React Introduction',
    slug: 'react-intro',
    summary: 'What is React? Component-driven design, Virtual DOM, and declarative state rendering.',
    readTime: '4 min',
    category: 'React Tutorial',
    content: {
      overview: 'Instead of directly querying and manipulating HTML DOM elements using imperative JavaScript (e.g. document.getElementById), React developers declare the desired UI for each application state. React\'s Virtual DOM diffing algorithm (Reconciliation) automatically updates only the specific elements that changed.',
      sections: [
        {
          heading: 'Imperative vs Declarative UI',
          body: 'Declarative programming allows you to describe what you want, while the framework handles the step-by-step DOM mutations under the hood:',
          code: `// Imperative (Vanilla JS):
// const btn = document.createElement('button');
// btn.innerText = count;
// btn.onclick = () => { count++; btn.innerText = count; };

// Declarative (React):
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Why Choose React:</h4>
    <ul style="color:#334155; line-height:1.7;">
      <li><strong>Component-Based:</strong> Build encapsulated components that manage their own state.</li>
      <li><strong>Virtual DOM:</strong> Minimal real DOM writes for maximum 60fps responsiveness.</li>
      <li><strong>Massive Ecosystem:</strong> Next.js, Remix, React Native, Vite.</li>
    </ul>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 3. React Get Started
  {
    id: 'react-getstarted',
    title: 'React Get Started',
    slug: 'react-getstarted',
    summary: 'Scaffolding a modern React application using Vite or Next.js.',
    readTime: '4 min',
    category: 'React Tutorial',
    content: {
      overview: 'The modern standard for creating single-page React applications is Vite. Vite provides instant server start, lightning-fast Hot Module Replacement (HMR), and optimized production bundles.',
      sections: [
        {
          heading: 'Creating a React App with Vite',
          body: 'Open your terminal and initialize your project:',
          code: `$ npm create vite@latest my-react-app -- --template react
$ cd my-react-app
$ npm install
$ npm run dev

  VITE v5.4.0  ready in 150 ms
  ➜  Local:   http://localhost:5173/`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    <span style="color:#4f46e5;">$</span> npm run dev<br>
    <span style="color:#4ade80;">VITE ready in 140 ms</span><br>
    Local: http://localhost:5173/
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 4. React Upgrade
  {
    id: 'react-upgrade',
    title: 'React Upgrade & Modern Standards',
    slug: 'react-upgrade',
    summary: 'Upgrading to React 18 & 19: createRoot, Server Actions, and React Compiler.',
    readTime: '5 min',
    category: 'React Tutorial',
    content: {
      overview: 'React 19 removes legacy patterns like forwardRef, string refs, and manual useMemo boilerplate in favor of the React Compiler, Actions, and native Promise integration via the use() Hook.',
      sections: [
        {
          heading: 'createRoot vs Legacy ReactDOM.render',
          body: 'React 18 and 19 replace ReactDOM.render with createRoot:',
          code: `import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Modern React 19 Enhancements:</h4>
    <ul>
      <li>Direct ref as prop without <code>forwardRef</code></li>
      <li>Actions with <code>useActionState</code> and <code>useFormStatus</code></li>
      <li>First-class Asset & Document Metadata loading (&lt;title&gt;, &lt;meta&gt;)</li>
    </ul>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 5. React ES6 Refresher
  {
    id: 'react-es6',
    title: 'React ES6 Refresher',
    slug: 'react-es6',
    summary: 'Arrow functions, destructuring, spread operator, map(), filter(), and ES Modules.',
    readTime: '5 min',
    category: 'React Tutorial',
    content: {
      overview: 'Modern React heavily relies on modern JavaScript (ES6+). Mastering destructuring, arrow functions, and array methods is required for clean component authoring.',
      sections: [
        {
          heading: 'Destructuring and Array Map',
          body: 'Rendering lists with .map() and destructuring props:',
          code: `const user = { name: "Alex", role: "Fullstack Architect" };
const { name, role } = user; // Object Destructuring

const frameworkList = ["React", "TypeScript", "Tailwind"];
const items = frameworkList.map((fw, index) => <li key={index}>{fw}</li>);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    User: Alex (Fullstack Architect)<br>
    Tags: React, TypeScript, Tailwind
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 6. React Render HTML
  {
    id: 'react-render-html',
    title: 'React Render HTML & Root Element',
    slug: 'react-render-html',
    summary: 'How React takes JSX and renders actual DOM nodes inside index.html.',
    readTime: '4 min',
    category: 'React Tutorial',
    content: {
      overview: 'React\'s goal is in many ways to render HTML in a web page. React renders HTML to the web page by using a function called createRoot() and its method render().',
      sections: [
        {
          heading: 'HTML Container and React Mounting',
          body: 'The index.html file contains a single container div (usually with id="root"):',
          code: `<!-- index.html -->
<div id="root"></div>

<!-- main.jsx -->
import ReactDOM from 'react-dom/client';

const myElement = <h1>Hello from DevAura React!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div id="root" style="border:2px dashed #4f46e5; padding:16px; border-radius:8px;">
    <h3 style="color:#4f46e5; margin:0;">Mounted inside &lt;div id="root"&gt;</h3>
    <p style="margin:4px 0 0; color:#64748b;">React takes control of the entire inner DOM tree.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 7. React JSX
  {
    id: 'react-jsx',
    title: 'React JSX (JavaScript XML)',
    slug: 'react-jsx',
    summary: 'Writing HTML-like syntax inside JavaScript, JSX expressions, and styling rules.',
    readTime: '5 min',
    category: 'React Tutorial',
    content: {
      overview: 'JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. Under the hood, JSX compiles into React.createElement() calls.',
      sections: [
        {
          heading: 'Rules of JSX',
          body: '1. Must return a single root element (or Fragment <>...</>). 2. Close all tags (<img />, <br />). 3. Use camelCase attributes (className, htmlFor, onClick).',
          code: `function MyComponent() {
  const score = 95;
  return (
    <div className="card">
      <h1>Student Grade Report</h1>
      <p>Score: {score} ({score >= 90 ? 'Honor Roll' : 'Standard'})</p>
    </div>
  );
}`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h3 style="color:#4f46e5; margin-top:0;">Student Grade Report</h3>
    <p>Score: 95 (Honor Roll)</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 8. React Components
  {
    id: 'react-components',
    title: 'React Components (Functional vs Class)',
    slug: 'react-components',
    summary: 'Components are independent and reusable bits of code serving the same purpose as JavaScript functions.',
    readTime: '5 min',
    category: 'React Tutorial',
    content: {
      overview: 'Components are like functions that return HTML elements. In modern React, Functional Components with Hooks are the universal standard, replacing legacy ES6 Class components.',
      sections: [
        {
          heading: 'Functional Component Example',
          body: 'Component names must ALWAYS start with an uppercase letter:',
          code: `function Car() {
  return <h2>Hi, I am a DevAura Sports Car!</h2>;
}

function Garage() {
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <Car />
    </div>
  );
}

export default Garage;`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Who lives in my garage?<br>
    Hi, I am a DevAura Sports Car!
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 9. React Props
  {
    id: 'react-props',
    title: 'React Props (Properties)',
    slug: 'react-props',
    summary: 'Passing read-only arguments into React components like HTML attributes.',
    readTime: '5 min',
    category: 'React Tutorial',
    content: {
      overview: 'React Props are like function arguments in JavaScript and attributes in HTML. Props are read-only (immutable): a component must never modify its own props.',
      sections: [
        {
          heading: 'Passing and Destructuring Props',
          body: 'Clean prop destructuring with default fallback values:',
          code: `function UserBadge({ username, role = "Member", isVerified = false }) {
  return (
    <div className="badge">
      <span>{username} ({role})</span>
      {isVerified && <span> &#10003; Verified</span>}
    </div>
  );
}

// Usage:
<UserBadge username="Elena" role="Admin" isVerified={true} />`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <span style="font-weight:bold; color:#4f46e5;">Elena (Admin)</span>
    <span style="background:#e0e7ff; color:#4338ca; padding:2px 8px; border-radius:12px; margin-left:8px; font-size:12px;">&#10003; Verified</span>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 10. React Events
  {
    id: 'react-events',
    title: 'React Events & SyntheticEvent',
    slug: 'react-events',
    summary: 'Handling events in React: camelCase naming, passing functions, and event objects.',
    readTime: '5 min',
    category: 'React Tutorial',
    content: {
      overview: 'Just like HTML DOM events, React can perform actions based on user events. React events are written in camelCase syntax: onClick instead of onclick. React event handlers are written inside curly braces.',
      sections: [
        {
          heading: 'Handling Click Events & Passing Arguments',
          body: 'Pass a callback function to the event handler, not an immediate function invocation:',
          code: `function Football() {
  const shoot = (a, b) => {
    alert(b.type); // "click"
  };

  return (
    <button onClick={(event) => shoot("Goal!", event)}>
      Take the shot!
    </button>
  );
}`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Interactive Event Preview:</h4>
    <button onclick="document.getElementById('msg').innerText = 'Goal! Shot taken at ' + new Date().toLocaleTimeString();"
            style="background:#4f46e5; color:white; border:none; padding:8px 16px; border-radius:6px; cursor:pointer;">
      Take the shot!
    </button>
    <p id="msg" style="margin-top:10px; color:#0284c7; font-weight:bold;"></p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 11. React Conditionals
  {
    id: 'react-conditionals',
    title: 'React Conditionals',
    slug: 'react-conditionals',
    summary: 'Rendering UI conditionally using if statements, logical &&, and the ternary operator ? :.',
    readTime: '4 min',
    category: 'React Tutorial',
    content: {
      overview: 'In React, you can conditionally render components using JavaScript operators like if, the ternary operator condition ? true : false, or the logical && operator.',
      sections: [
        {
          heading: 'Logical && and Ternary Operators in JSX',
          body: 'Embedding conditional expressions cleanly inside JSX:',
          code: `function Garage({ cars }) {
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && (
        <h2>You have {cars.length} cars in your garage.</h2>
      )}
      <p>Status: {cars.length > 0 ? "Occupied" : "Empty"}</p>
    </>
  );
}`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Garage<br>
    You have 3 cars in your garage.<br>
    Status: Occupied
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 12. React Lists & Keys
  {
    id: 'react-lists-keys',
    title: 'React Lists and Keys',
    slug: 'react-lists-keys',
    summary: 'Rendering collections using Array.prototype.map() and preserving identity with unique key props.',
    readTime: '5 min',
    category: 'React Tutorial',
    content: {
      overview: 'In React, you will render lists with some type of loop. The JavaScript map() array method is generally the preferred method for rendering lists. Keys help React identify which items have changed, are added, or are removed.',
      sections: [
        {
          heading: 'Rendering Lists with Keys',
          body: 'Always use stable, unique IDs as keys (avoid using array index if the list can be reordered or filtered):',
          code: `function Garage() {
  const cars = [
    { id: 'c1', brand: 'Ford' },
    { id: 'c2', brand: 'BMW' },
    { id: 'c3', brand: 'Audi' }
  ];

  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>{car.brand}</li>
      ))}
    </ul>
  );
}`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <ul style="line-height:1.8; color:#334155;">
    <li><strong style="color:#4f46e5;">Ford</strong> (Key: c1)</li>
    <li><strong style="color:#4f46e5;">BMW</strong> (Key: c2)</li>
    <li><strong style="color:#4f46e5;">Audi</strong> (Key: c3)</li>
  </ul>
</body>
</html>`
        }
      ]
    }
  },

  // 13. React Forms
  {
    id: 'react-forms',
    title: 'React Forms & Controlled Components',
    slug: 'react-forms',
    summary: 'Controlled inputs, form submission handling, multiple inputs, and validation.',
    readTime: '6 min',
    category: 'React Tutorial',
    content: {
      overview: 'Just like in HTML, React uses forms to allow users to interact with the web page. In HTML, form data is usually handled by the DOM. In React, form data is usually handled by the components, where it is called "controlled components".',
      sections: [
        {
          heading: 'Controlled Form State Example',
          body: 'Storing input values in React state:',
          code: `import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(\`The name you entered was: \${name}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Controlled Input Demo</h4>
    <input type="text" id="nameIn" placeholder="Type your name..." oninput="document.getElementById('out').innerText = this.value;"
           style="padding:8px 12px; border:1px solid #cbd5e1; border-radius:6px; width:220px;">
    <p style="margin-top:10px;">React State Value: <strong id="out" style="color:#4f46e5;"></strong></p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 14. React Router
  {
    id: 'react-router',
    title: 'React Router',
    slug: 'react-router',
    summary: 'Client-side routing with React Router: BrowserRouter, Routes, Route, Link, and Outlet.',
    readTime: '6 min',
    category: 'React Tutorial',
    content: {
      overview: 'Create React App doesn\'t include page routing. React Router is the most popular solution. It enables navigation without reloading the entire page in single-page applications.',
      sections: [
        {
          heading: 'Setting Up React Router',
          body: 'Configuring navigation and page views:',
          code: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/blogs">Blogs</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Route changed to "/blogs" via pushState without page reload!
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 15. React CSS Styling
  {
    id: 'react-css-styling',
    title: 'React CSS Styling (Inline, Modules, Tailwind)',
    slug: 'react-css-styling',
    summary: 'Styling components with inline JavaScript objects, CSS Modules (.module.css), and Tailwind CSS.',
    readTime: '5 min',
    category: 'React Tutorial',
    content: {
      overview: 'There are many ways to style React with CSS: Inline styling (using JavaScript camelCase objects), CSS Stylesheets, CSS Modules, and Utility-First frameworks like Tailwind CSS.',
      sections: [
        {
          heading: 'Inline Style Objects & CSS Modules',
          body: 'Notice how CSS properties are written in camelCase (e.g. backgroundColor instead of background-color):',
          code: `// Inline Styling
const myStyle = {
  color: "white",
  backgroundColor: "#4f46e5",
  padding: "10px",
  fontFamily: "Sans-Serif",
  borderRadius: "8px"
};

function StyledBanner() {
  return <h1 style={myStyle}>DevAura Styled Heading</h1>;
}`,
          codeLanguage: 'jsx',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h1 style="color:white; background-color:#4f46e5; padding:12px; font-family:sans-serif; border-radius:8px; font-size:20px; margin:0;">
    DevAura Styled Heading
  </h1>
</body>
</html>`
        }
      ]
    }
  }
];
