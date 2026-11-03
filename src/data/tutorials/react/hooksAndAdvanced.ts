import { TutorialChapter } from '../../../types';

export const reactHooksAndAdvancedChapters: TutorialChapter[] = [
  // ==================== REACT FUNDAMENTALS & JSX ====================
  {
    id: 'react-intro',
    title: 'React 19 Architecture, Virtual DOM & Reconciliation',
    slug: 'react-intro',
    summary: 'The declarative, component-driven UI library. Virtual DOM reconciliation, fiber trees, JSX compilation, and React 19 standards.',
    readTime: '8 min',
    category: 'React Fundamentals & JSX',
    content: {
      overview: 'React is an open-source JavaScript library developed by Meta for building modular, high-performance user interfaces. Rather than manipulating the browser DOM directly, React allows developers to build declarative components that automatically synchronize with application state.',
      sections: [
        {
          heading: 'Declarative UI & The Reconciliation Algorithm',
          body: 'In imperative JavaScript, you query DOM nodes (`document.getElementById`) and manually mutate innerHTML or styles. In React, you declare what the UI should look like based on current state. React constructs an in-memory Virtual DOM tree, calculates the minimal diff against the previous render (the Reconciliation process via the Fiber architecture), and batches updates into the real browser DOM in a single high-efficiency pass.',
          code: `User Interaction (Click / Typing)
       â”‚
       â–¼
State Update (setCount / Dispatch)
       â”‚
       â–¼
Virtual DOM Re-rendered in Memory (Fiber Nodes)
       â”‚
       â–¼
Diffing Algorithm (Heuristic O(N) Reconciliation)
       â”‚
       â–¼
Batched Real DOM Commit (Only modified DOM attributes touched!)`,
          codeLanguage: 'text',
          tips: [
            'Virtual DOM makes React fast by batching expensive layout reflows and repaints in the browser.',
            'React 19 introduces automatic compiler memoization, server actions, and resource hooks for zero-waterfall data fetching.'
          ]
        },
        {
          heading: 'Root Rendering & Strict Mode',
          body: 'React 18 & 19 applications are mounted using `createRoot` from `react-dom/client`. Wrapping your application in `<React.StrictMode>` performs extra checks and double-invokes effects in development to detect unsafe side effects.',
          code: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body { background: #f8fafc; color: #0f172a; font-family: system-ui, sans-serif; padding: 32px; text-align: center; }
    .card { background: #ffffff; padding: 24px; border-radius: 16px; border: 1px solid #e2e8f0; display: inline-block; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    button { background: #4f46e5; color: #ffffff; font-weight: bold; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; transition: 0.2s; }
    button:hover { background: #4338ca; }
  </style>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    function Counter() {
      const [count, setCount] = React.useState(0);
      return (
        <div className="card">
          <h2 style={{color: '#4f46e5'}}>âš¡ Interactive React 19 Component</h2>
          <p style={{color: '#64748b'}}>Current Count: <strong style={{color: '#4f46e5', fontSize: '22px'}}>{count}</strong></p>
          <button onClick={() => setCount(count + 1)}>Increment Count +1</button>
        </div>
      );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);
  </script>
</body>
</html>`
        }
      ]
    }
  },
  {
    id: 'react-jsx',
    title: 'JSX Syntax Rules, Expressions & Fragments',
    slug: 'react-jsx',
    summary: 'Understand JSX transformation, curly brace expressions, inline styles, Fragments, and conditional rendering patterns.',
    readTime: '7 min',
    category: 'React Fundamentals & JSX',
    content: {
      overview: 'JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like markup inside JavaScript files. Compilers like Babel or SWC transform JSX into native `React.createElement()` or `jsxRuntime` function calls.',
      sections: [
        {
          heading: 'Core Rules of JSX',
          body: '1. **Return a single root element**: Wrap multiple sibling elements in a parent tag or a Fragment (`<>...</>`).\n2. **Close all tags**: Elements like `<img />`, `<input />`, and `<br />` must be self-closing.\n3. **camelCase naming**: Attribute names are camelCased because JSX compiles to JavaScript objects (e.g. `className` instead of `class`, `htmlFor` instead of `for`, `onClick` instead of `onclick`).',
          code: `export function ProfileHeader({ name, isVerified }: { name: string; isVerified: boolean }) {
  const avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100";

  return (
    <>
      <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
        <img 
          src={avatarUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" 
        />
        <div>
          <h3 className="text-lg font-bold text-slate-900">{name}</h3>
          {isVerified ? (
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
              âœ“ Verified Engineer
            </span>
          ) : (
            <span className="text-xs text-slate-400">Pending Verification</span>
          )}
        </div>
      </div>
    </>
  );
}`,
          codeLanguage: 'javascript',
          tips: [
            'React Fragments (`<>...</>`) let you group a list of children without adding extra nodes to the browser DOM.',
            'Use key on Fragments `<React.Fragment key={item.id}>` when mapping over arrays.'
          ]
        }
      ]
    }
  },
  {
    id: 'react-components-props',
    title: 'Components, Props & Children Composition',
    slug: 'react-components-props',
    summary: 'Build reusable UI primitives, pass props, define default values, destructured parameters, and leverage component composition.',
    readTime: '7 min',
    category: 'React Fundamentals & JSX',
    content: {
      overview: 'Components are the fundamental building blocks of React applications. A React component is a JavaScript function that accepts an input object called "props" (properties) and returns React elements describing what should appear on the screen.',
      sections: [
        {
          heading: 'Props are Read-Only (Pure Functions)',
          body: 'A React component must never modify its own props. It must act as a pure function with respect to its inputs. Always derive new values instead of mutating props directly.',
          code: `interface CardProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ title, badge, children, footer }: CardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <h3 className="font-bold text-slate-900">{title}</h3>
        {badge && (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
            {badge}
          </span>
        )}
      </div>
      <div className="py-4 text-sm text-slate-600">
        {children}
      </div>
      {footer && (
        <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
          {footer}
        </div>
      )}
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },

  // ==================== STATE & ACTION HOOKS ====================
  {
    id: 'react-usestate',
    title: 'useState: Component State Memory & Immutability',
    slug: 'react-usestate',
    summary: 'Declare state variables, updater functions, lazy initial state, automatic batching, and immutable object/array updates.',
    readTime: '9 min',
    category: 'State & Action Hooks',
    content: {
      overview: 'useState is the primary React Hook for tracking values that change over time and cause the component to re-render. Unlike standard local variables that reset on every render, state persists between renders.',
      sections: [
        {
          heading: 'Functional Updaters & Lazy State Initialization',
          body: 'If the new state is computed using the previous state, pass an updater function `setCount(prev => prev + 1)` to avoid stale state bugs caused by closure capture. For expensive initial computations, pass a function initializer to run it only on initial mount.',
          code: `import React, { useState } from 'react';

export function ComplexCounter() {
  // Lazy initial state: executed ONLY once on mount
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('counter-value');
    return saved ? parseInt(saved, 10) : 0;
  });

  // Multiple queued updates via functional updaters
  const incrementByThree = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementByThree}>+3 Count</button>
    </div>
  );
}`,
          codeLanguage: 'javascript'
        },
        {
          heading: 'Immutable Object and Array Updates',
          body: 'Never mutate state directly (`user.name = "Alex"` or `items.push(newItem)`). React compares previous and next state by referential identity (`Object.is`). Direct mutation does not change the memory reference, causing React to miss the update. Always use the spread operator (`...`) or non-mutating methods (`.map()`, `.filter()`).',
          code: `// Updating nested object state
setUser(prev => ({
  ...prev,
  preferences: {
    ...prev.preferences,
    theme: 'dark'
  }
}));

// Updating array state: adding, updating, removing
const addItem = (item) => setItems(prev => [...prev, item]);
const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));
const updateItem = (id, newTitle) => 
  setItems(prev => prev.map(i => i.id === id ? { ...i, title: newTitle } : i));`,
          codeLanguage: 'javascript',
          tips: [
            'React 18 & 19 automatically batch state updates inside event handlers, promises, and timeouts into a single render pass.',
            'Never call useState inside loops, conditions, or nested functions.'
          ]
        }
      ]
    }
  },
  {
    id: 'react-usereducer',
    title: 'useReducer: Complex State Machines & Action Dispatches',
    slug: 'react-usereducer',
    summary: 'Manage complex or interrelated state transitions with pure reducer functions, action objects, and predictable state machines.',
    readTime: '9 min',
    category: 'State & Action Hooks',
    content: {
      overview: 'useReducer is an alternative to useState that is ideal for components with complex state logic involving multiple sub-values, or when the next state depends on the previous one. It mirrors the Redux unidirectional architecture.',
      sections: [
        {
          heading: 'State, Action Types & Pure Reducers',
          body: 'A reducer function takes the current `state` and an `action` object, and returns the next state. The reducer must be pure with zero side-effects.',
          code: `import React, { useReducer } from 'react';

interface CartState {
  items: { id: string; name: string; price: number; qty: number }[];
  discount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { id: string; name: string; price: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'SET_DISCOUNT'; payload: { discount: number } }
  | { type: 'CLEAR_CART' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i => 
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }]
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload.id)
      };
    case 'SET_DISCOUNT':
      return { ...state, discount: action.payload.discount };
    case 'CLEAR_CART':
      return { items: [], discount: 0 };
    default:
      return state;
  }
}

export function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, { items: [], discount: 0 });

  return (
    <div>
      <h3>Shopping Cart ({state.items.length} items)</h3>
      <button onClick={() => dispatch({ 
        type: 'ADD_ITEM', 
        payload: { id: 'p1', name: 'DevAura Pro Hoodie', price: 65 } 
      })}>
        Add Hoodie
      </button>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
        Clear
      </button>
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-useactionstate',
    title: 'useActionState (React 19): Async Form Actions & Loading State',
    slug: 'react-useactionstate',
    summary: 'The new React 19 standard for handling async form actions, pending transitions, automatic error state, and previous state access.',
    readTime: '8 min',
    category: 'State & Action Hooks',
    content: {
      overview: 'useActionState is a new built-in hook introduced in React 19 that replaces repetitive `isLoading`, `error`, and `data` useState boilerplate for asynchronous actions and HTML forms.',
      sections: [
        {
          heading: 'Handling Async Form Submissions with useActionState',
          body: '`useActionState` takes an async action function and an initial state. It returns `[state, formAction, isPending]`. When passed to a `<form action={formAction}>`, React automatically sets `isPending` to true and captures errors gracefully.',
          code: `import { useActionState } from 'react';

interface FormResponse {
  success: boolean;
  message: string;
}

async function updateUsernameAction(
  previousState: FormResponse | null, 
  formData: FormData
): Promise<FormResponse> {
  const name = formData.get('username') as string;
  if (!name || name.length < 3) {
    return { success: false, message: 'Username must be at least 3 characters' };
  }

  // Simulated API call
  await new Promise(res => setTimeout(res, 800));
  return { success: true, message: \`Username updated to \${name}!\` };
}

export function UsernameForm() {
  const [state, formAction, isPending] = useActionState(updateUsernameAction, null);

  return (
    <form action={formAction} className="space-y-4 max-w-sm">
      <input 
        name="username" 
        placeholder="Enter new username" 
        disabled={isPending}
        className="w-full px-3 py-2 border rounded-lg"
      />
      <button 
        type="submit" 
        disabled={isPending}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
      >
        {isPending ? 'Updating...' : 'Save Changes'}
      </button>

      {state && (
        <p className={state.success ? 'text-indigo-600' : 'text-rose-600'}>
          {state.message}
        </p>
      )}
    </form>
  );
}`,
          codeLanguage: 'javascript',
          tips: [
            'useActionState automatically coordinates with React transitions and optimistic updates.',
            'Works seamlessly with progressive enhancement without JavaScript enabled on the server.'
          ]
        }
      ]
    }
  },
  {
    id: 'react-useformstatus',
    title: 'useFormStatus (React 19): Parent Form Submission Status',
    slug: 'react-useformstatus',
    summary: 'Read the pending status, submitted FormData, and HTTP method of a parent <form> without prop drilling.',
    readTime: '6 min',
    category: 'State & Action Hooks',
    content: {
      overview: 'useFormStatus gives child components direct access to the submission state of their parent `<form>`. This eliminates the need to pass `isSubmitting` down through props.',
      sections: [
        {
          heading: 'Building Reusable Submit Buttons',
          body: '`useFormStatus` must be called from inside a component rendered within a `<form>` element:',
          code: `import { useFormStatus } from 'react-dom';

export function SubmitButton({ label }: { label: string }) {
  const { pending, data, method } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold disabled:opacity-50 flex items-center gap-2"
    >
      {pending && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
      <span>{pending ? 'Saving...' : label}</span>
    </button>
  );
}

// In the parent form:
export function ContactForm() {
  return (
    <form action={async (formData) => { /* server action */ }}>
      <input name="email" type="email" required />
      <SubmitButton label="Send Message" />
    </form>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-useoptimistic',
    title: 'useOptimistic (React 19): Instant UI Updates Before Server Response',
    slug: 'react-useoptimistic',
    summary: 'Provide instant UI feedback (like chat messages or upvotes) while background network requests complete, rolling back on error.',
    readTime: '8 min',
    category: 'State & Action Hooks',
    content: {
      overview: 'useOptimistic lets you show a different state while an async action is underway. If the action succeeds, the server state replaces it; if it fails, React automatically reverts the optimistic update.',
      sections: [
        {
          heading: 'Optimistic Chat Messages Example',
          body: 'Display messages immediately on click with a subtle "Sending..." indicator while the network mutation resolves:',
          code: `import { useOptimistic, useState } from 'react';

interface Message {
  id: string;
  text: string;
  sending?: boolean;
}

export function ChatFeed({ initialMessages }: { initialMessages: Message[] }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  // useOptimistic returns [optimisticMessages, setOptimisticMessages]
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newText: string) => [
      ...state,
      { id: Math.random().toString(), text: newText, sending: true }
    ]
  );

  const handleSendMessage = async (formData: FormData) => {
    const text = formData.get('message') as string;
    // 1. Immediately update UI
    addOptimisticMessage(text);

    // 2. Perform real network request
    const savedMessage = await api.sendMessage(text);
    // 3. Commit permanent state
    setMessages(prev => [...prev, savedMessage]);
  };

  return (
    <div>
      <div className="space-y-2">
        {optimisticMessages.map(m => (
          <div key={m.id} className={m.sending ? 'opacity-50 italic' : ''}>
            {m.text} {m.sending && 'â± sending...'}
          </div>
        ))}
      </div>
      <form action={handleSendMessage}>
        <input name="message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },

  // ==================== EFFECT & LIFECYCLE HOOKS ====================
  {
    id: 'react-useeffect',
    title: 'useEffect: Side Effects, Subscriptions & Cleanup',
    slug: 'react-useeffect',
    summary: 'Synchronize components with external systems, fetch data, attach event listeners, understand dependency arrays, and prevent memory leaks.',
    readTime: '9 min',
    category: 'Effect & Lifecycle Hooks',
    content: {
      overview: 'useEffect lets you synchronize a component with external systems such as browser APIs, WebSockets, or HTTP network requests. It runs asynchronously after the browser paints screen updates.',
      sections: [
        {
          heading: 'Dependency Array Semantics & Cleanups',
          body: 'The second argument to `useEffect` controls execution:\n- `undefined`: Runs after *every* render.\n- `[]`: Runs once after initial mount.\n- `[dep1, dep2]`: Runs on mount and whenever `dep1` or `dep2` changes.',
          code: `import React, { useState, useEffect } from 'react';

export function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // 1. Setup subscription / timer
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // 2. CLEANUP FUNCTION: Runs before re-running effect or on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run setup once on mount

  return <div className="font-mono text-xl text-indigo-600">{time}</div>;
}`,
          codeLanguage: 'javascript',
          tips: [
            'Always return a cleanup function when subscribing to window events, timers, or WebSocket streams.',
            'Never lie to the dependency array. If you use a variable from component scope inside the effect, include it in dependencies.'
          ]
        }
      ]
    }
  },
  {
    id: 'react-uselayouteffect',
    title: 'useLayoutEffect: Synchronous DOM Measurement Before Paint',
    slug: 'react-uselayouteffect',
    summary: 'Execute synchronously after DOM mutations but before the browser paints to prevent visual flickers during layout calculations.',
    readTime: '7 min',
    category: 'Effect & Lifecycle Hooks',
    content: {
      overview: 'useLayoutEffect is a synchronous version of useEffect. It fires immediately after React mutates the DOM, but *before* the browser repaints the screen. Use it to measure DOM geometry (height, width, scroll position) and synchronously re-position elements to avoid visible visual flickering.',
      sections: [
        {
          heading: 'Tooltip Position Calculation Without Screen Flicker',
          body: 'If you measured tooltip dimensions using `useEffect`, the tooltip would first render in the wrong place, and then jump to the right place. `useLayoutEffect` guarantees that the measurement and adjustment happen before the frame renders.',
          code: `import React, { useState, useRef, useLayoutEffect } from 'react';

export function Tooltip({ targetRect, children }: { targetRect: DOMRect; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    // Measure DOM synchronously before browser draws to pixels
    if (ref.current) {
      setTooltipHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: targetRect.top - tooltipHeight - 8,
        left: targetRect.left
      }}
      className="p-2 bg-slate-900 text-white rounded text-xs shadow-lg"
    >
      {children}
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-useinsertioneffect',
    title: 'useInsertionEffect: CSS-in-JS Style Injection',
    slug: 'react-useinsertioneffect',
    summary: 'A specialized hook for library authors to inject CSS rules into the document head before layout effects read DOM properties.',
    readTime: '6 min',
    category: 'Effect & Lifecycle Hooks',
    content: {
      overview: 'useInsertionEffect is intended specifically for CSS-in-JS library authors (like Emotion or styled-components). It fires synchronously *before* any DOM mutations occur, ensuring styles are injected before `useLayoutEffect` runs layout calculations.',
      sections: [
        {
          heading: 'Style Tag Injection Timing',
          body: 'Execution order: `useInsertionEffect` (inject styles) âž” DOM Mutation âž” `useLayoutEffect` (measure layout) âž” Browser Paint âž” `useEffect` (async side effects).',
          code: `import { useInsertionEffect } from 'react';

function useCSS(rule: string) {
  useInsertionEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.textContent = rule;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [rule]);
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },

  // ==================== CONTEXT & RESOURCE HOOKS ====================
  {
    id: 'react-usecontext',
    title: 'useContext: Global State & Context Providers',
    slug: 'react-usecontext',
    summary: 'Eliminate prop drilling: share global state like user authentication, themes, and locale across deep component trees.',
    readTime: '8 min',
    category: 'Context & Resource Hooks',
    content: {
      overview: 'Context provides a mechanism for passing data through the component tree without manually threading props through every intermediate child.',
      sections: [
        {
          heading: 'Creating, Providing, and Consuming Context',
          body: 'Follow the 3-step pattern: 1. `createContext()`, 2. `<Context.Provider value={...}>`, 3. `useContext(Context)`:',
          code: `import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: { name: string; email: string } | null;
  login: (name: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const login = (name: string, email: string) => setUser({ name, email });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to consume context with safety check
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function UserStatus() {
  const { user, logout } = useAuth();
  if (!user) return <p>Please sign in</p>;
  return (
    <div>
      <span>Welcome, {user.name}</span>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-use-api',
    title: 'The use() API (React 19): Promises & Conditional Context',
    slug: 'react-use-api',
    summary: 'The revolutionary unified React 19 hook for unwrapping Promises with Suspense and reading Context conditionally inside if-statements.',
    readTime: '8 min',
    category: 'Context & Resource Hooks',
    content: {
      overview: 'In React 19, `use` is a unified API that lets you read the value of a resource like a Promise or a Context. Unlike other hooks, `use` can be called conditionally inside `if` statements and loops!',
      sections: [
        {
          heading: 'Unwrapping Promises with use() and Suspense',
          body: 'When you pass a Promise to `use(promise)`, React automatically suspends rendering until the Promise resolves, rendering your `<Suspense fallback={...}>` in the meantime.',
          code: `import { use, Suspense } from 'react';

// Fetch function returns a Promise
async function fetchDevProfile(userId: string) {
  const res = await fetch(\`/api/users/\${userId}\`);
  return res.json();
}

function UserProfile({ userPromise }: { userPromise: Promise<{ name: string; bio: string }> }) {
  // Unwraps the promise directly!
  const user = use(userPromise);

  return (
    <div className="p-4 bg-white rounded-xl border border-slate-200">
      <h3 className="font-bold text-slate-900">{user.name}</h3>
      <p className="text-sm text-slate-600">{user.bio}</p>
    </div>
  );
}

export function App() {
  const userPromise = fetchDevProfile('usr_101');

  return (
    <Suspense fallback={<div className="p-4 text-indigo-600 animate-pulse">Loading profile...</div>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}`,
          codeLanguage: 'javascript',
          tips: [
            'Unlike useContext, `use(ThemeContext)` can be called inside an if-statement or after an early return!',
            'Always initiate promises outside the component or in server components to avoid re-triggering requests on every re-render.'
          ]
        }
      ]
    }
  },

  // ==================== REF & IMPERATIVE HOOKS ====================
  {
    id: 'react-useref',
    title: 'useRef: DOM Access & Mutable Instance Variables',
    slug: 'react-useref',
    summary: 'Direct HTML DOM access, input focus, storing mutable timers, and preserving values across renders without triggering updates.',
    readTime: '7 min',
    category: 'Ref & Imperative Hooks',
    content: {
      overview: 'useRef returns a mutable ref object whose `.current` property is initialized to the passed argument. Mutating `.current` does NOT trigger a component re-render.',
      sections: [
        {
          heading: 'Focusing DOM Inputs & Managing Interval IDs',
          body: 'Common use cases: 1. Manipulating DOM nodes (focus, scroll, measurements), 2. Storing interval/timeout IDs that survive renders.',
          code: `import React, { useRef, useEffect } from 'react';

export function Stopwatch() {
  const [seconds, setSeconds] = React.useState(0);
  const timerRef = useRef<number | null>(null);

  const start = () => {
    if (timerRef.current !== null) return;
    timerRef.current = window.setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
  };

  const stop = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => stop(); // Clean up on unmount
  }, []);

  return (
    <div>
      <p>Elapsed Time: {seconds}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-useimperativehandle',
    title: 'useImperativeHandle: Customizing Exposed Ref Handles',
    slug: 'react-useimperativehandle',
    summary: 'Customize the imperative methods exposed to parent components when using refs, encapsulating internal implementation details.',
    readTime: '7 min',
    category: 'Ref & Imperative Hooks',
    content: {
      overview: 'useImperativeHandle customizes the ref instance exposed to parent components. Rather than exposing the raw HTML input DOM node, you expose specific methods like `.focus()`, `.clear()`, or `.scrollIntoView()`.',
      sections: [
        {
          heading: 'Exposing a Controlled Imperative API',
          body: 'In React 19, ref can be passed directly as a prop without needing `forwardRef` wrapping:',
          code: `import React, { useRef, useImperativeHandle } from 'react';

export interface CodeEditorHandle {
  focus: () => void;
  reset: () => void;
  getTextLength: () => number;
}

export function CodeEditor({ ref }: { ref: React.Ref<CodeEditorHandle> }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      textareaRef.current?.focus();
    },
    reset() {
      if (textareaRef.current) textareaRef.current.value = '';
    },
    getTextLength() {
      return textareaRef.current?.value.length || 0;
    }
  }));

  return <textarea ref={textareaRef} className="border p-2 rounded" />;
}

// Parent component:
export function Form() {
  const editorRef = useRef<CodeEditorHandle>(null);

  return (
    <div>
      <CodeEditor ref={editorRef} />
      <button onClick={() => editorRef.current?.focus()}>Focus Editor</button>
      <button onClick={() => editorRef.current?.reset()}>Clear</button>
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },

  // ==================== PERFORMANCE & CONCURRENCY HOOKS ====================
  {
    id: 'react-usememo',
    title: 'useMemo: Expensive Calculation Caching & Referential Stability',
    slug: 'react-usememo',
    summary: 'Cache the result of expensive computations across re-renders and preserve referential equality for complex dependency objects.',
    readTime: '8 min',
    category: 'Performance & Concurrency Hooks',
    content: {
      overview: 'useMemo caches the result of a calculation between re-renders. It only recomputes the cached value when one of the specified dependencies has changed.',
      sections: [
        {
          heading: 'Filtering Massive Lists & Referential Equality',
          body: 'Filtering 10,000 items on every irrelevant parent render causes frame drops. useMemo caches the filtered array until the search query or raw items list changes:',
          code: `import React, { useState, useMemo } from 'react';

export function ProductCatalog({ products }: { products: { id: string; name: string; price: number }[] }) {
  const [filterQuery, setFilterQuery] = useState('');
  const [theme, setTheme] = useState('light');

  // Heavy filter calculation: Cached until products or filterQuery changes
  const filteredProducts = useMemo(() => {
    return products.filter(p => 
      p.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
  }, [products, filterQuery]);

  return (
    <div>
      <input 
        value={filterQuery} 
        onChange={e => setFilterQuery(e.target.value)} 
        placeholder="Filter products..." 
      />
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        Toggle Theme (Does NOT recalculate filteredProducts!)
      </button>
      <ul>
        {filteredProducts.map(p => (
          <li key={p.id}>{p.name} - \${p.price}</li>
        ))}
      </ul>
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-usecallback',
    title: 'useCallback: Function Memoization & Preventing Child Re-renders',
    slug: 'react-usecallback',
    summary: 'Cache function definitions between renders to prevent breaking React.memo memoization on child components.',
    readTime: '7 min',
    category: 'Performance & Concurrency Hooks',
    content: {
      overview: 'useCallback caches a function definition between renders. In JavaScript, `function() {}` or `() => {}` creates a completely different object reference on every execution. Passing inline functions to optimized child components causes them to unnecessarily re-render.',
      sections: [
        {
          heading: 'Pairing useCallback with React.memo',
          body: 'Wrap child components with `React.memo` and pair with `useCallback` to ensure the child only re-renders when actual props change:',
          code: `import React, { useState, useCallback } from 'react';

interface RowProps {
  id: string;
  onDelete: (id: string) => void;
}

// React.memo skips re-rendering if props are referentially identical
const ItemRow = React.memo(function ItemRow({ id, onDelete }: RowProps) {
  return (
    <div className="flex justify-between p-2">
      <span>Item #{id}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
});

export function ItemList() {
  const [items, setItems] = useState(['1', '2', '3']);
  const [count, setCount] = useState(0);

  // Cached function reference: Won't trigger ItemRow re-renders when count updates!
  const handleDelete = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i !== id));
  }, []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Counter: {count}</button>
      {items.map(id => (
        <ItemRow key={id} id={id} onDelete={handleDelete} />
      ))}
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-usetransition',
    title: 'useTransition: Concurrent Rendering & Non-Blocking Updates',
    slug: 'react-usetransition',
    summary: 'Mark state updates as non-blocking transitions to keep user keystrokes and clicks responsive during heavy CPU renders.',
    readTime: '8 min',
    category: 'Performance & Concurrency Hooks',
    content: {
      overview: 'useTransition allows you to mark certain state updates as non-urgent transitions. While a transition render is processing in the background, the user interface remains completely interactive and responsive to clicks and typing.',
      sections: [
        {
          heading: 'Urgent vs Non-Urgent Updates',
          body: 'Typing into an input is an **urgent** update (must show typed character immediately). Filtering a heavy chart or 5,000 table rows is a **non-urgent transition**:',
          code: `import React, { useState, useTransition } from 'react';

export function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('home');

  const selectTab = (nextTab: string) => {
    // Non-blocking concurrent transition
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <div>
      <div className="flex gap-2">
        <button onClick={() => selectTab('home')}>Home</button>
        <button onClick={() => selectTab('analytics')}>Analytics (Heavy)</button>
        <button onClick={() => selectTab('settings')}>Settings</button>
      </div>

      {isPending && <p className="text-xs text-indigo-600">Loading tab transition...</p>}
      <div className={isPending ? 'opacity-70' : 'opacity-100'}>
        {tab === 'home' && <p>Home Feed</p>}
        {tab === 'analytics' && <p>Heavy Analytics Render...</p>}
        {tab === 'settings' && <p>Account Settings</p>}
      </div>
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-usedeferredvalue',
    title: 'useDeferredValue: Deferring Secondary UI Updates',
    slug: 'react-usedeferredvalue',
    summary: 'Defer updating a computationally expensive part of the screen while keeping user input responsive without extra state variables.',
    readTime: '7 min',
    category: 'Performance & Concurrency Hooks',
    content: {
      overview: 'useDeferredValue accepts a value and returns a deferred version of that value. When the input value updates, React first re-renders the component with the previous value to keep inputs snappy, and then tries to re-render with the new value in the background.',
      sections: [
        {
          heading: 'Responsive Search Input with Deferred Results',
          body: 'Similar to debouncing, but built directly into React concurrent rendering without arbitrary millisecond timeouts:',
          code: `import React, { useState, useDeferredValue } from 'react';

export function SearchPage({ allRecords }: { allRecords: string[] }) {
  const [query, setQuery] = useState('');
  // Deferred query lags behind query during rapid typing
  const deferredQuery = useDeferredValue(query);

  const isStale = query !== deferredQuery;

  const results = allRecords.filter(r => 
    r.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div>
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Type quickly..." 
      />
      <div className={isStale ? 'opacity-50 transition-opacity' : ''}>
        <p>Results for: "{deferredQuery}"</p>
        <ul>
          {results.slice(0, 10).map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },

  // ==================== SPECIALIZED & ARCHITECTURE HOOKS ====================
  {
    id: 'react-useid',
    title: 'useId: Unique Accessible & Hydration-Safe IDs',
    slug: 'react-useid',
    summary: 'Generate unique IDs for accessibility attributes (aria-describedby, <label htmlFor>) across server and client without hydration mismatches.',
    readTime: '6 min',
    category: 'Specialized & Architecture Hooks',
    content: {
      overview: 'useId generates unique, stable IDs for accessibility attributes. Unlike Math.random(), useId produces identical IDs on both the server and client, completely eliminating SSR hydration mismatch errors.',
      sections: [
        {
          heading: 'Accessible Form Linking with useId',
          body: 'Pairing labels, inputs, and error helper texts with aria attributes:',
          code: `import React, { useId } from 'react';

export function AccessibleInputField({ label, error }: { label: string; error?: string }) {
  const id = useId();
  const errorId = \`\${id}-error\`;

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-xs font-bold text-slate-700">
        {label}
      </label>
      <input
        id={id}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        className="px-3 py-2 border rounded-lg"
      />
      {error && (
        <p id={errorId} className="text-xs text-rose-600 font-semibold">
          {error}
        </p>
      )}
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-usesyncexternalstore',
    title: 'useSyncExternalStore: Thread-Safe External Store Subscriptions',
    slug: 'react-usesyncexternalstore',
    summary: 'Subscribe to external state sources (Redux, Zustand, browser online/offline status, matchMedia) safely with concurrent rendering.',
    readTime: '8 min',
    category: 'Specialized & Architecture Hooks',
    content: {
      overview: 'useSyncExternalStore is recommended for subscribing to external state stores outside of React (like Redux, Zustand, or browser APIs like navigator.onLine) to prevent visual tearing in concurrent rendering.',
      sections: [
        {
          heading: 'Subscribing to Browser Online/Offline Status',
          body: 'Subscribing cleanly without manual useEffect listeners and state variables:',
          code: `import { useSyncExternalStore } from 'react';

function subscribeOnline(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getOnlineSnapshot() {
  return navigator.onLine;
}

export function NetworkStatusBadge() {
  const isOnline = useSyncExternalStore(subscribeOnline, getOnlineSnapshot);

  return (
    <span className={\`px-2.5 py-1 rounded-full text-xs font-bold \${
      isOnline ? 'bg-indigo-100 text-indigo-800' : 'bg-rose-100 text-rose-800'
    }\`}>
      {isOnline ? 'â— Online' : 'â—‹ Offline'}
    </span>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-usedebugvalue',
    title: 'useDebugValue: Custom Labels in React DevTools',
    slug: 'react-usedebugvalue',
    summary: 'Display readable labels and formatted metadata for custom hooks directly in the React Developer Tools extension.',
    readTime: '5 min',
    category: 'Specialized & Architecture Hooks',
    content: {
      overview: 'useDebugValue lets you add a label and inspectable debug info to custom hooks in React DevTools.',
      sections: [
        {
          heading: 'Formatting Custom Hook DevTools Output',
          body: 'Format labels with deferred formatting functions:',
          code: `import { useState, useEffect, useDebugValue } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', handleStatus);
    window.addEventListener('offline', handleStatus);
    return () => {
      window.removeEventListener('online', handleStatus);
      window.removeEventListener('offline', handleStatus);
    };
  }, []);

  // Displays "OnlineStatus: Active (Online)" in React DevTools
  useDebugValue(isOnline ? 'Active (Online)' : 'Disconnected (Offline)');

  return isOnline;
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },

  // ==================== ADVANCED ARCHITECTURE & ECOSYSTEM ====================
  {
    id: 'react-forms',
    title: 'Controlled vs Uncontrolled Forms & Validation',
    slug: 'react-forms',
    summary: 'Master controlled input state, uncontrolled inputs with FormData, multi-input handlers, and robust schema validation.',
    readTime: '8 min',
    category: 'Advanced Architecture & Ecosystem',
    content: {
      overview: 'In controlled components, form data is handled by a React component state. In uncontrolled components, form data is handled by the browser DOM itself via FormData and refs.',
      sections: [
        {
          heading: 'Modern FormData & Multi-Field Handling',
          body: 'Avoid creating 15 separate useState hooks for a form by utilizing standard browser FormData with native submit events:',
          code: `import React, { useState } from 'react';

export function RegistrationForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!data.email || !data.password) {
      setError('All fields are required');
      return;
    }

    console.log('Submitted payload:', data);
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md p-6 bg-white rounded-2xl border">
      <h3 className="font-bold text-slate-900">Create DevAura Account</h3>
      {error && <p className="text-xs text-rose-600 font-semibold">{error}</p>}
      <input name="name" placeholder="Full Name" className="w-full p-2 border rounded" />
      <input name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" />
      <input name="password" type="password" placeholder="Password" className="w-full p-2 border rounded" />
      <button type="submit" className="w-full py-2 bg-indigo-600 text-white font-bold rounded">Register</button>
    </form>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-lists-keys',
    title: 'Lists, Keys & The Reconciliation Algorithm',
    slug: 'react-lists-keys',
    summary: 'Render dynamic arrays with .map(), assign stable keys for the diffing algorithm, and handle conditional branches cleanly.',
    readTime: '7 min',
    category: 'Advanced Architecture & Ecosystem',
    content: {
      overview: 'Every item in a rendered list needs a unique, stable `key` prop to help React identify which items have changed, are added, or are removed during reconciliation.',
      sections: [
        {
          heading: 'Why Keys Matter in Reconciliation',
          body: 'Never use array index as keys if items can be reordered, deleted, or sorted! Indexes cause subtle state bugs where uncontrolled input states are incorrectly bound to the wrong sibling.',
          code: `const tracks = [
  { id: 't1', title: 'HTML5 Guide', modules: 31 },
  { id: 't2', title: 'CSS3 Layouts', modules: 24 },
  { id: 't3', title: 'React 19 Hooks', modules: 29 }
];

export function TrackList() {
  return (
    <div className="space-y-2">
      {tracks.map(track => (
        <div key={track.id} className="p-3 bg-white border border-slate-200 rounded-xl flex justify-between">
          <span className="font-bold text-slate-900">{track.title}</span>
          <span className="text-xs text-indigo-600 font-semibold">{track.modules} Lessons</span>
        </div>
      ))}
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-suspense-lazy',
    title: 'Code Splitting with React.lazy & <Suspense>',
    slug: 'react-suspense-lazy',
    summary: 'Split large bundles into dynamic chunks with dynamic imports, lazy component loading, and fallback loading screens.',
    readTime: '8 min',
    category: 'Advanced Architecture & Ecosystem',
    content: {
      overview: 'Code-splitting helps you lazy-load only the JavaScript needed by the user on the current screen, dramatically reducing initial page load time.',
      sections: [
        {
          heading: 'Dynamic Imports & Suspense Fallbacks',
          body: 'Use `React.lazy()` with dynamic import `() => import(...)` wrapped in a `<Suspense>` boundary:',
          code: `import React, { lazy, Suspense } from 'react';

// Heavy chart component loaded ONLY when requested
const AnalyticsDashboard = lazy(() => import('./AnalyticsDashboard'));

export function AdminView() {
  const [showDashboard, setShowDashboard] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowDashboard(true)}>
        Load Heavy Analytics
      </button>

      {showDashboard && (
        <Suspense fallback={
          <div className="p-8 text-center text-indigo-600 font-bold">
            <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            Loading Analytics Module...
          </div>
        }>
          <AnalyticsDashboard />
        </Suspense>
      )}
    </div>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-error-boundaries',
    title: 'Error Boundaries & Crash Recovery',
    slug: 'react-error-boundaries',
    summary: 'Catch JavaScript errors anywhere in child component trees, log error reports, and display graceful fallback UI instead of blank white screens.',
    readTime: '8 min',
    category: 'Advanced Architecture & Ecosystem',
    content: {
      overview: 'Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app.',
      sections: [
        {
          heading: 'Class-Based Error Boundary Implementation',
          body: 'A class component becomes an error boundary if it defines `getDerivedStateFromError` or `componentDidCatch`:',
          code: `import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: ''
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught React component error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 bg-rose-50 border border-rose-200 rounded-2xl text-rose-900">
          <h3 className="font-bold text-lg">Something went wrong.</h3>
          <p className="text-xs mt-1 text-rose-700">{this.state.errorMessage}</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 px-4 py-2 bg-rose-600 text-white font-bold rounded-lg text-xs"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-portals',
    title: 'Portals: createPortal for Modals, Dialogs & Tooltips',
    slug: 'react-portals',
    summary: 'Render children into a different DOM subtree outside parent CSS clipping (overflow: hidden) and z-index stacking contexts.',
    readTime: '7 min',
    category: 'Advanced Architecture & Ecosystem',
    content: {
      overview: 'Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.',
      sections: [
        {
          heading: 'Rendering Modals to document.body',
          body: 'Even though a portal renders into another DOM node, it behaves like a standard React child in every other way, including event bubbling:',
          code: `import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-lg w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
        >
          âœ•
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-router',
    title: 'React Router DOM: Client-Side Routing & Navigation',
    slug: 'react-router',
    summary: 'Client-side SPA routing, BrowserRouter, Routes, Route, dynamic params with useParams, search queries with useSearchParams, and programmatic navigation.',
    readTime: '9 min',
    category: 'Advanced Architecture & Ecosystem',
    content: {
      overview: 'React Router enables client-side routing, allowing your single-page application to transition between different views and update the browser URL without requesting a full page reload from the server.',
      sections: [
        {
          heading: 'Dynamic Route Params & Navigation',
          body: 'Configuring dynamic routes with `:id` parameters and navigating programmatically with `useNavigate`:',
          code: `import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  useParams, 
  useNavigate 
} from 'react-router-dom';

function TutorialLesson() {
  const { trackId, chapterId } = useParams<{ trackId: string; chapterId: string }>();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Track: {trackId}</h2>
      <p>Lesson ID: {chapterId}</p>
      <button 
        onClick={() => navigate(-1)}
        className="mt-4 px-3 py-1.5 bg-slate-100 rounded text-xs font-bold"
      >
        â† Back
      </button>
    </div>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <nav className="p-4 border-b flex gap-4">
        <Link to="/" className="font-bold text-indigo-600">DevAura</Link>
        <Link to="/tutorial/react/react-intro">React Intro</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to DevAura</h1>} />
        <Route path="/tutorial/:trackId/:chapterId" element={<TutorialLesson />} />
      </Routes>
    </BrowserRouter>
  );
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },
  {
    id: 'react-custom-hooks',
    title: 'Custom Hooks Library: Reusable Architecture Primitives',
    slug: 'react-custom-hooks',
    summary: 'Build a production-grade library of custom hooks: useFetch, useLocalStorage, useDebounce, useMediaQuery, and useOnClickOutside.',
    readTime: '9 min',
    category: 'Advanced Architecture & Ecosystem',
    content: {
      overview: 'Custom hooks allow you to extract and reuse stateful logic across multiple components without duplicating code or repeating effects.',
      sections: [
        {
          heading: 'Production-Grade Custom Hooks Library',
          body: 'Here are four essential custom hooks used in high-scale production React codebases:',
          code: `import { useState, useEffect, useRef } from 'react';

// 1. useLocalStorage: Synchronize state with localStorage
export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// 2. useDebounce: Delay value updates until user stops typing
export function useDebounce<T>(value: T, delayMs: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => clearTimeout(handler);
  }, [value, delayMs]);

  return debouncedValue;
}

// 3. useOnClickOutside: Close modals / dropdowns when clicking outside
export function useOnClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  }
];

