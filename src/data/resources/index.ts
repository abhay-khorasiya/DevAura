export interface CheatSheet {
  id: string;
  title: string;
  category: string;
  description: string;
  snippets: { label: string; code: string; explanation: string }[];
}

export interface WebsiteTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  previewImage: string;
  code: string;
}

export interface HtmlEntity {
  char: string;
  name: string;
  entityName: string;
  entityNumber: string;
  description: string;
}

export interface InterviewQnA {
  id: string;
  category: string;
  question: string;
  answer: string;
  codeSnippet?: string;
}

// 1. HTML Character Entities & Symbols (Classic W3Schools Reference)
export const htmlEntitiesList: HtmlEntity[] = [
  { char: '<', name: 'less than', entityName: '&lt;', entityNumber: '&#60;', description: 'Used to display opening angle bracket safely without parsing as HTML tag.' },
  { char: '>', name: 'greater than', entityName: '&gt;', entityNumber: '&#62;', description: 'Used to display closing angle bracket safely.' },
  { char: '&', name: 'ampersand', entityName: '&amp;', entityNumber: '&#38;', description: 'Reserved character in HTML; must be escaped as entity.' },
  { char: '"', name: 'double quote', entityName: '&quot;', entityNumber: '&#34;', description: 'Quotation mark in text or attributes.' },
  { char: '©', name: 'copyright', entityName: '&copy;', entityNumber: '&#169;', description: 'Copyright symbol for footer notices.' },
  { char: '®', name: 'registered', entityName: '&reg;', entityNumber: '&#174;', description: 'Registered trademark symbol.' },
  { char: '™', name: 'trademark', entityName: '&trade;', entityNumber: '&#8482;', description: 'Unregistered trademark indicator.' },
  { char: '€', name: 'euro', entityName: '&euro;', entityNumber: '&#8364;', description: 'European currency symbol.' },
  { char: '£', name: 'pound', entityName: '&pound;', entityNumber: '&#163;', description: 'British currency symbol.' },
  { char: '¥', name: 'yen', entityName: '&yen;', entityNumber: '&#165;', description: 'Japanese Yen currency symbol.' },
  { char: '₹', name: 'indian rupee', entityName: '&#8377;', entityNumber: '&#8377;', description: 'Indian Rupee currency symbol.' },
  { char: '♥', name: 'heart', entityName: '&hearts;', entityNumber: '&#9829;', description: 'Card suit or social like heart symbol.' },
  { char: '★', name: 'star', entityName: '&#9733;', entityNumber: '&#9733;', description: 'Rating and review star symbol.' },
  { char: '✓', name: 'check mark', entityName: '&#10003;', entityNumber: '&#10003;', description: 'Verification or completed state check.' },
  { char: '∞', name: 'infinity', entityName: '&infin;', entityNumber: '&#8734;', description: 'Mathematical infinity symbol.' },
  { char: '→', name: 'right arrow', entityName: '&rarr;', entityNumber: '&#8594;', description: 'Call-to-action direction arrow.' }
];

// 2. Developer Cheat Sheets
export const cheatSheets: CheatSheet[] = [
  {
    id: 'cs-html',
    title: 'HTML5 Semantic Quick Sheet',
    category: 'HTML',
    description: 'Essential document boilerplate, metadata, and structural tags.',
    snippets: [
      { label: 'Standard HTML5 Boilerplate', code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n</body>\n</html>`, explanation: 'Standard starting blueprint for every responsive page.' },
      { label: 'Responsive Image', code: `<img src="image.webp" alt="Descriptive text" width="800" height="400" loading="lazy">`, explanation: 'Optimized image tag with dimension attributes and lazy loading.' },
      { label: 'Audio & Video Embed', code: `<video controls width="640" poster="thumb.jpg">\n  <source src="clip.mp4" type="video/mp4">\n  Your browser does not support HTML video.\n</video>`, explanation: 'Native HTML5 multimedia player.' }
    ]
  },
  {
    id: 'cs-css-flex',
    title: 'CSS Flexbox & Grid Master Sheet',
    category: 'CSS',
    description: 'Alignment and distribution properties for instant layout reference.',
    snippets: [
      { label: 'Flexbox Center Everything', code: `display: flex;\njustify-content: center;\nalign-items: center;`, explanation: 'The fastest, cleanest way to center children both vertically and horizontally.' },
      { label: 'Auto-Fit Responsive Grid', code: `display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\ngap: 24px;`, explanation: 'Creates responsive multi-column layouts automatically without any media queries.' },
      { label: 'Modern Glassmorphism Card', code: `background: rgba(15, 23, 42, 0.75);\nbackdrop-filter: blur(16px);\nborder: 1px solid rgba(255, 255, 255, 0.1);\nborder-radius: 16px;`, explanation: 'Sleek modern blurred glass container effect.' }
    ]
  },
  {
    id: 'cs-js-es6',
    title: 'JavaScript ES6+ Cheat Sheet',
    category: 'JavaScript',
    description: 'Essential modern array methods, async patterns, and destructuring.',
    snippets: [
      { label: 'Array Map, Filter, Reduce', code: `const items = [1, 2, 3, 4];\nconst evens = items.filter(x => x % 2 === 0);\nconst doubled = evens.map(x => x * 2);\nconst sum = items.reduce((acc, curr) => acc + curr, 0);`, explanation: 'Core functional programming methods.' },
      { label: 'Async / Await with Fetch', code: `async function fetchData(url) {\n  try {\n    const res = await fetch(url);\n    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);\n    return await res.json();\n  } catch (err) {\n    console.error(err);\n  }\n}`, explanation: 'Safe API request wrapper with error handling.' },
      { label: 'Destructuring & Spread', code: `const user = { name: 'Alex', age: 28, role: 'Dev' };\nconst { name, ...rest } = user;\nconst updated = { ...user, active: true };`, explanation: 'Clean object extraction and shallow cloning.' }
    ]
  },
  {
    id: 'cs-sql',
    title: 'SQL Relational Query Cheat Sheet',
    category: 'SQL',
    description: 'SELECT, WHERE, JOINs, and aggregates.',
    snippets: [
      { label: 'INNER JOIN Query', code: `SELECT o.OrderID, c.CustomerName, o.Amount\nFROM Orders o\nINNER JOIN Customers c ON o.CustomerID = c.CustomerID\nWHERE o.Amount > 100\nORDER BY o.Amount DESC;`, explanation: 'Queries relational records across joined tables.' },
      { label: 'Group By with Having', code: `SELECT Country, COUNT(CustomerID) AS TotalCustomers\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) > 5;`, explanation: 'Aggregates counts by category and filters on the aggregate.' }
    ]
  }
];

// 3. Free Ready-to-Use Website Templates
export const websiteTemplates: WebsiteTemplate[] = [
  {
    id: 'tpl-portfolio',
    title: 'Developer Personal Portfolio',
    category: 'Portfolio',
    description: 'Clean dark-mode personal portfolio with hero section, project cards, skills list, and contact button.',
    previewImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Developer Portfolio</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0b0f19; color: #f8fafc; padding: 30px 20px; }
    .container { max-width: 800px; margin: 0 auto; }
    header { padding-bottom: 30px; border-bottom: 1px solid #1e293b; display: flex; align-items: center; justify-content: space-between; }
    .avatar { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #10b981, #06b6d4); display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 24px; color: #022c22; }
    h1 { font-size: 28px; color: #fff; margin-top: 15px; }
    .tagline { color: #10b981; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; }
    p { color: #94a3b8; line-height: 1.6; margin-top: 10px; }
    .skills { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
    .badge { background: #1e293b; color: #38bdf8; padding: 6px 14px; border-radius: 9999px; font-size: 13px; font-weight: 500; border: 1px solid #334155; }
    .projects { margin-top: 40px; }
    .project-card { background: #131b2e; border: 1px solid #1e293b; padding: 20px; border-radius: 12px; margin-top: 15px; transition: transform 0.2s; }
    .project-card:hover { transform: translateY(-3px); border-color: #10b981; }
    .project-title { font-size: 18px; color: #fff; font-weight: bold; }
    .btn { display: inline-block; background: #10b981; color: #022c22; font-weight: bold; padding: 10px 20px; border-radius: 8px; text-decoration: none; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div>
        <div class="tagline">Fullstack Software Engineer</div>
        <h1>Alex Vance</h1>
      </div>
      <div class="avatar">AV</div>
    </header>
    <p>Passionate about crafting fast, delightful web apps using React, Tailwind, and Node.js. 5+ years of experience delivering scalable software.</p>
    
    <div class="skills">
      <span class="badge">React 19</span>
      <span class="badge">TypeScript</span>
      <span class="badge">Tailwind CSS</span>
      <span class="badge">PostgreSQL</span>
      <span class="badge">Python</span>
    </div>

    <div class="projects">
      <h2 style="color: #fff; font-size: 20px;">Featured Work</h2>
      
      <div class="project-card">
        <div class="project-title">⚡ DevAura Platform</div>
        <p>A next-gen developer learning portal with in-browser live code runners and zero latency.</p>
      </div>

      <div class="project-card">
        <div class="project-title">📊 Cloud Pulse Metrics</div>
        <p>Real-time edge analytics monitoring tool built with WebSocket and reactive dashboards.</p>
      </div>
    </div>

    <a href="mailto:alex@example.com" class="btn">Get in Touch →</a>
  </div>
</body>
</html>`
  },
  {
    id: 'tpl-saas',
    title: 'Modern SaaS Product Landing Page',
    category: 'Landing Page',
    description: 'High-converting landing page with hero header, call-to-actions, feature badges, and pricing cards.',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SaaS Product Landing</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #080d1a; color: #f8fafc; text-align: center; padding: 50px 20px; }
    .badge { display: inline-block; background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid #10b981; padding: 6px 16px; border-radius: 9999px; font-size: 13px; font-weight: bold; margin-bottom: 20px; }
    h1 { font-size: 42px; font-weight: 800; max-width: 600px; margin: 0 auto 15px auto; line-height: 1.15; background: linear-gradient(135deg, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    p { color: #94a3b8; font-size: 17px; max-width: 500px; margin: 0 auto 30px auto; }
    .cta-btn { background: #10b981; color: #022c22; font-weight: 800; padding: 14px 32px; border-radius: 12px; font-size: 16px; text-decoration: none; display: inline-block; border: none; cursor: pointer; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3); }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; max-width: 800px; margin: 60px auto 0 auto; text-align: left; }
    .feature { background: #111a2e; border: 1px solid #1e293b; padding: 24px; border-radius: 16px; }
    .feature h3 { color: #38bdf8; margin-bottom: 8px; font-size: 18px; }
    .feature p { font-size: 14px; margin: 0; }
  </style>
</head>
<body>
  <span class="badge">🚀 Introducing AuraCloud v2.0</span>
  <h1>Supercharge Your Developer Workflow</h1>
  <p>The serverless API hub that deploys edge functions in under 50ms across 300+ global locations.</p>
  <button class="cta-btn" onclick="alert('⚡ Welcome aboard AuraCloud!')">Start 14-Day Free Trial</button>

  <div class="grid">
    <div class="feature">
      <h3>⚡ Instant Deploy</h3>
      <p>Push via Git and see your code live globally in milliseconds.</p>
    </div>
    <div class="feature">
      <h3>🔒 Zero Config Auth</h3>
      <p>Built-in biometric and OAuth authentication ready out-of-the-box.</p>
    </div>
    <div class="feature">
      <h3>📈 Live Analytics</h3>
      <p>Real-time distributed metrics and telemetry at zero cost.</p>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: 'tpl-dashboard',
    title: 'Cloud Analytics & Admin Dashboard',
    category: 'Admin Dashboard',
    description: 'Modern glassmorphic control center with metric cards, revenue statistics, active nodes, and transaction history.',
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Analytics Dashboard</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #070b14; color: #f8fafc; padding: 24px; }
    .header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 20px; border-bottom: 1px solid #1e293b; margin-bottom: 24px; }
    .title { font-size: 22px; font-weight: bold; color: #fff; }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .stat-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 14px; padding: 20px; }
    .stat-label { font-size: 12px; color: #94a3b8; text-transform: uppercase; font-weight: 600; }
    .stat-val { font-size: 28px; font-weight: 800; color: #10b981; margin-top: 6px; }
    .table-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 14px; padding: 20px; overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; text-align: left; font-size: 13px; }
    th { color: #64748b; padding: 10px; border-bottom: 1px solid #1e293b; font-weight: 600; }
    td { padding: 12px 10px; border-bottom: 1px solid #131d31; }
    .badge-ok { background: rgba(16,185,129,0.15); color: #34d399; padding: 4px 10px; border-radius: 9999px; font-weight: bold; font-size: 11px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="title">DevAura Cloud Pulse 🚀</div>
    <div style="font-size: 12px; color: #10b981; font-weight: 600;">● ALL SYSTEMS OPERATIONAL</div>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-label">Total Monthly API Calls</div>
      <div class="stat-val">48.2M</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Global Edge Nodes</div>
      <div class="stat-val" style="color: #38bdf8;">342</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Avg Global Latency</div>
      <div class="stat-val" style="color: #a855f7;">14ms</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">System Uptime</div>
      <div class="stat-val">99.99%</div>
    </div>
  </div>

  <div class="table-card">
    <h3 style="font-size: 15px; margin-bottom: 15px;">Recent Edge Node Events</h3>
    <table>
      <thead>
        <tr><th>Region</th><th>Instance</th><th>Throughput</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td>us-east-1</td><td>node-alpha-4</td><td>12.4 GB/s</td><td><span class="badge-ok">ACTIVE</span></td></tr>
        <tr><td>eu-central-1</td><td>node-frankfurt-2</td><td>9.1 GB/s</td><td><span class="badge-ok">ACTIVE</span></td></tr>
        <tr><td>ap-south-1</td><td>node-mumbai-1</td><td>14.8 GB/s</td><td><span class="badge-ok">ACTIVE</span></td></tr>
      </tbody>
    </table>
  </div>
</body>
</html>`
  },
  {
    id: 'tpl-ecommerce',
    title: 'Modern E-Commerce Storefront',
    category: 'E-Commerce',
    description: 'Dark-mode luxury tech storefront with product grid, price tags, ratings, and instant cart interaction.',
    previewImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Aura Storefront</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #090d16; color: white; padding: 30px 20px; }
    .nav { display: flex; justify-content: space-between; align-items: center; max-width: 900px; margin: 0 auto 30px auto; }
    .brand { font-size: 20px; font-weight: 800; color: #10b981; }
    .cart-btn { background: #1e293b; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: bold; border: 1px solid #334155; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; max-width: 900px; margin: 0 auto; }
    .card { background: #111827; border: 1px solid #1f2937; border-radius: 16px; padding: 20px; text-align: left; }
    .badge { background: #10b981; color: #022c22; font-size: 11px; font-weight: bold; padding: 2px 8px; border-radius: 4px; }
    .product-title { font-size: 18px; font-weight: bold; margin: 12px 0 6px 0; }
    .price { font-size: 22px; font-weight: 800; color: #38bdf8; margin: 10px 0; }
    .buy-btn { width: 100%; background: #10b981; color: #022c22; font-weight: bold; border: none; padding: 12px; border-radius: 10px; cursor: pointer; transition: 0.2s; }
    .buy-btn:hover { background: #34d399; }
  </style>
</head>
<body>
  <div class="nav">
    <div class="brand">⚡ Aura Tech Store</div>
    <div class="cart-btn" id="cart">Cart (0 items)</div>
  </div>

  <div class="grid">
    <div class="card">
      <span class="badge">BESTSELLER</span>
      <div class="product-title">Aura Mechanical Keyboard v2</div>
      <p style="color: #94a3b8; font-size: 13px;">Hot-swappable tactile switches with wireless 2.4GHz low latency.</p>
      <div class="price">$149.00</div>
      <button class="buy-btn" onclick="addToCart('Aura Keyboard')">Add to Cart</button>
    </div>

    <div class="card">
      <span class="badge" style="background:#06b6d4;">NEW</span>
      <div class="product-title">Developer Pro ANC Headset</div>
      <p style="color: #94a3b8; font-size: 13px;">Studio-grade active noise cancellation tuned for deep coding focus.</p>
      <div class="price">$199.00</div>
      <button class="buy-btn" onclick="addToCart('Aura Headset')">Add to Cart</button>
    </div>
  </div>

  <script>
    let count = 0;
    function addToCart(item) {
      count++;
      document.getElementById('cart').innerText = "Cart (" + count + " items)";
      alert('⚡ Added ' + item + ' to cart!');
    }
  </script>
</body>
</html>`
  }
];

// 4. Developer Technical Interview Questions & Answers Bank
export const interviewQuestionsBank: InterviewQnA[] = [
  {
    id: 'int-1',
    category: 'HTML & Web',
    question: 'What is the difference between HTML semantics and standard <div> tags?',
    answer: 'Semantic HTML tags (such as <header>, <nav>, <main>, <article>, <section>, and <footer>) describe their meaning to both the browser and the developer. They improve SEO rankings, allow search crawlers to index key content accurately, and provide screen readers with accessibility landmarks for disabled users.',
    codeSnippet: `<!-- Non-semantic -->\n<div class="header">Title</div>\n\n<!-- Semantic (Recommended) -->\n<header><nav><a href="/">Home</a></nav></header>`
  },
  {
    id: 'int-2',
    category: 'CSS & Layout',
    question: 'What is the difference between CSS Flexbox and CSS Grid?',
    answer: 'CSS Flexbox is primarily a one-dimensional layout system (designed for either rows OR columns at a time). It is best for UI component alignment, navbar links, and button groups. CSS Grid is a two-dimensional layout system (handles both rows AND columns simultaneously), making it ideal for overall page scaffolding, complex dashboards, and magazine layouts.',
    codeSnippet: `/* Flexbox: 1D horizontal */\ndisplay: flex;\njustify-content: space-between;\n\n/* Grid: 2D rows & columns */\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);`
  },
  {
    id: 'int-3',
    category: 'JavaScript',
    question: 'Explain Event Bubbling and Event Delegation in JavaScript.',
    answer: 'Event Bubbling is the process where an event triggered on a nested child element propagates upwards through its parent elements up to document and window. Event Delegation leverages this behavior by attaching a single event listener to a common parent element rather than attaching separate listeners to hundreds of individual children.',
    codeSnippet: `// Event Delegation on parent <ul>\ndocument.querySelector('#todo-list').addEventListener('click', (e) => {\n  if (e.target.matches('button.delete')) {\n    e.target.closest('li').remove();\n  }\n});`
  },
  {
    id: 'int-4',
    category: 'JavaScript',
    question: 'What is the difference between "==" and "===" in JavaScript?',
    answer: '"==" performs loose equality check with automatic type coercion (e.g., 5 == "5" evaluates to true). "===" performs strict equality check with NO type coercion, meaning both value AND datatype must match exactly (5 === "5" evaluates to false). Always use "===" in production code.',
    codeSnippet: `console.log(0 == false);   // true (coercion)\nconsole.log(0 === false);  // false (different types)`
  },
  {
    id: 'int-5',
    category: 'SQL & Database',
    question: 'What is the difference between INNER JOIN and LEFT JOIN in SQL?',
    answer: 'INNER JOIN returns only the rows that have matching keys in BOTH tables. LEFT JOIN (or LEFT OUTER JOIN) returns ALL rows from the left table, and matching rows from the right table; if no match exists on the right, NULL values are returned for the right-side columns.',
    codeSnippet: `-- Returns all customers, even those who haven't placed an order yet\nSELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nLEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`
  },
  {
    id: 'int-6',
    category: 'Python',
    question: 'What is the difference between a Python List and a Python Tuple?',
    answer: 'Lists are mutable (their elements can be added, modified, or removed in-place using append(), pop(), etc.) and are written with square brackets `[]`. Tuples are immutable (cannot be altered after creation), written with parentheses `()`, and are faster and memory-efficient for fixed datasets and dictionary keys.',
    codeSnippet: `my_list = [1, 2, 3]\nmy_list.append(4) # Valid\n\nmy_tuple = (1, 2, 3)\n# my_tuple.append(4) -> Raises AttributeError`
  }
];
