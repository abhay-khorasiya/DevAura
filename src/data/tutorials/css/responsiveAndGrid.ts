import { TutorialChapter } from '../../../types';

export const cssResponsiveAndGridChapters: TutorialChapter[] = [
  // 67. CSS Media Queries
  {
    id: 'css-media-queries',
    title: 'CSS Media Queries',
    slug: 'css-media-queries',
    summary: 'Apply different styles for different media types and screen sizes using the @media rule.',
    readTime: '6 min',
    category: 'CSS Responsive',
    content: {
      overview: 'Media queries are a popular technique for delivering tailored style sheets to desktops, laptops, tablets, and mobile phones. The @media rule is used in media queries to apply different styles for different media types or capabilities (screen resolution, orientation, width, dark mode).',
      sections: [
        {
          heading: 'Media Query Syntax & Features',
          body: 'Common media queries target screen width (min-width, max-width), device orientation (landscape, portrait), and user preferences like prefers-color-scheme.',
          code: `/* Mobile-first base styles (under 768px) */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
}

/* Tablet & Desktop (768px and up) */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Large Desktop (1024px and up) */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Dark Mode Preference */
@media (prefers-color-scheme: dark) {
  body { background-color: #0f172a; color: #f8fafc; }
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; transition: background 0.3s; }
    .responsive-banner {
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      font-weight: bold;
      background-color: #eff6ff;
      color: #1d4ed8;
      border: 2px solid #3b82f6;
    }
    @media (max-width: 600px) {
      .responsive-banner {
        background-color: #fef3c7;
        color: #b45309;
        border-color: #f59e0b;
      }
    }
  </style>
</head>
<body>
  <div class="responsive-banner">
    Resize this window: Turns Amber on screens &lt; 600px!
  </div>
</body>
</html>`,
          tips: [
            'Always design Mobile-First using min-width queries rather than Desktop-First with max-width queries.',
            'prefers-reduced-motion lets you disable dizzying animations for vestibular motion sensitivity.'
          ]
        }
      ]
    }
  },

  // 68. CSS MQ Examples
  {
    id: 'css-mq-examples',
    title: 'CSS MQ Examples',
    slug: 'css-mq-examples',
    summary: 'Standard responsive breakpoints for phones, tablets, laptops, and large screens.',
    readTime: '5 min',
    category: 'CSS Responsive',
    content: {
      overview: 'There are millions of screen sizes, so target broad device categories with standard breakpoints: Extra small (phones, < 600px), Small (portrait tablets & large phones, 600px+), Medium (landscape tablets, 768px+), Large (laptops/desktops, 992px+), and Extra large (large monitors, 1200px+).',
      sections: [
        {
          heading: 'Standard Breakpoint Template',
          body: 'Here is the industry-standard media query starter stack:',
          code: `/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) { ... }

/* Small devices (portrait tablets, 600px and up) */
@media only screen and (min-width: 600px) { ... }

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) { ... }

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) { ... }

/* Extra large devices (large monitors, 1200px and up) */
@media only screen and (min-width: 1200px) { ... }`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .col-demo {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .col { background: #e0e7ff; color: #4338ca; padding: 14px; border-radius: 6px; text-align: center; font-weight: bold; }
    @media (min-width: 500px) {
      .col-demo { flex-direction: row; }
      .col { flex: 1; }
    }
  </style>
</head>
<body>
  <h3>Breakpoint Demonstration</h3>
  <div class="col-demo">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
  <p style="font-size: 13px; color: #64748b; margin-top: 10px;">Stacks vertically on small screens, expands horizontally when width &ge; 500px.</p>
</body>
</html>`,
          tips: [
            'Pick breakpoints based on when your content starts looking awkward, not on specific phone brand dimensions.'
          ]
        }
      ]
    }
  },

  // 69. CSS Flexbox
  {
    id: 'css-flexbox',
    title: 'CSS Flexbox',
    slug: 'css-flexbox',
    summary: 'The Flexible Box Layout Module makes it easy to design flexible responsive layout structures without float.',
    readTime: '6 min',
    category: 'CSS Responsive',
    content: {
      overview: 'Before Flexbox, building horizontal layouts relied on floats and inline-block, which were notoriously fragile. The Flexbox layout provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.',
      sections: [
        {
          heading: 'Flex Container and Axes',
          body: 'Setting display: flex creates a flex container. Its direct children become flex items. Flexbox operates on two axes: the Main Axis (horizontal by default) and the Cross Axis (vertical by default).',
          code: `.flex-container {
  display: flex;
  gap: 16px; /* Modern spacing between items */
}

.flex-item {
  flex: 1;   /* Each item takes equal proportional width */
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .flex-row {
      display: flex;
      gap: 12px;
      background: #f8fafc;
      padding: 16px;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    }
    .flex-child {
      flex: 1;
      background: #4f46e5;
      color: white;
      padding: 20px;
      border-radius: 6px;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h3>CSS Flexbox 3-Column Equal Row</h3>
  <div class="flex-row">
    <div class="flex-child">Item 1</div>
    <div class="flex-child">Item 2</div>
    <div class="flex-child">Item 3</div>
  </div>
</body>
</html>`,
          tips: [
            'Flexbox is 1-dimensional (controls one row OR one column at a time). CSS Grid is 2-dimensional (controls rows AND columns simultaneously).'
          ]
        }
      ]
    }
  },

  // 70. CSS Flexbox Container
  {
    id: 'css-flexbox-container',
    title: 'CSS Flexbox Container',
    slug: 'css-flexbox-container',
    summary: 'Master container properties: flex-direction, flex-wrap, justify-content, align-items, and gap.',
    readTime: '6 min',
    category: 'CSS Responsive',
    content: {
      overview: 'The flex container element has several properties that configure the alignment and direction of child items: flex-direction, flex-wrap, flex-flow, justify-content (main axis), align-items (cross axis), align-content, and gap.',
      sections: [
        {
          heading: 'Container Alignment Properties',
          body: 'justify-content aligns along the main axis (flex-start, center, flex-end, space-between, space-around, space-evenly). align-items aligns along the cross axis (stretch, center, flex-start, flex-end, baseline).',
          code: `.container {
  display: flex;
  flex-direction: row;            /* row | column | row-reverse */
  flex-wrap: wrap;                /* nowrap | wrap | wrap-reverse */
  justify-content: space-between; /* Horizontal alignment */
  align-items: center;            /* Vertical alignment */
  gap: 20px;                      /* Row & Column spacing */
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .box-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f1f5f9;
      padding: 16px;
      border-radius: 8px;
    }
    .badge { background: #0284c7; color: white; padding: 8px 16px; border-radius: 6px; font-weight: bold; }
  </style>
</head>
<body>
  <h3>justify-content: space-between</h3>
  <div class="box-container">
    <div class="badge">Left</div>
    <div class="badge">Center</div>
    <div class="badge">Right</div>
  </div>
</body>
</html>`,
          tips: [
            'Use gap instead of margins on child items for cleaner, zero-bleed spacing.'
          ]
        }
      ]
    }
  },

  // 71. CSS Flexbox Items
  {
    id: 'css-flexbox-items',
    title: 'CSS Flexbox Items',
    slug: 'css-flexbox-items',
    summary: 'Master item properties: order, flex-grow, flex-shrink, flex-basis, flex shorthand, and align-self.',
    readTime: '6 min',
    category: 'CSS Responsive',
    content: {
      overview: 'The direct child elements of a flex container automatically become flex items. Flex items have properties to control their individual behavior: order (reorder visually), flex-grow (grow factor), flex-shrink (shrink factor), flex-basis (initial size), and align-self (override container align-items).',
      sections: [
        {
          heading: 'The flex Shorthand (grow shrink basis)',
          body: 'The flex property is shorthand for flex-grow, flex-shrink, and flex-basis. flex: 1 1 auto or flex: 1 is standard for fluid items.',
          code: `/* flex: grow shrink basis */
.sidebar {
  flex: 0 0 260px; /* Does not grow or shrink, fixed at 260px */
}

.main-content {
  flex: 1 1 auto;  /* Grows to consume all available remaining space */
}

/* Individual alignment override */
.special-item {
  align-self: flex-end;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .flex-shell { display: flex; gap: 12px; }
    .fixed-col { flex: 0 0 120px; background: #e2e8f0; padding: 16px; border-radius: 6px; text-align: center; }
    .fluid-col { flex: 1; background: #4f46e5; color: white; padding: 16px; border-radius: 6px; text-align: center; }
  </style>
</head>
<body>
  <h3>Fixed Sidebar + Fluid Content</h3>
  <div class="flex-shell">
    <div class="fixed-col">120px Fixed</div>
    <div class="fluid-col">flex: 1 (Absorbs All Remaining Width)</div>
  </div>
</body>
</html>`,
          tips: [
            'order: -1 moves a flex item to the very front without altering HTML markup.'
          ]
        }
      ]
    }
  },

  // 72. CSS Flexbox Responsive
  {
    id: 'css-flex-responsive',
    title: 'CSS Flexbox Responsive',
    slug: 'css-flex-responsive',
    summary: 'Combine Flexbox with media queries to create adaptable layouts that reshape on mobile.',
    readTime: '5 min',
    category: 'CSS Responsive',
    content: {
      overview: 'By switching flex-direction between row and column, you can transform complex desktop toolbars and multi-column web portals into comfortable single-column mobile views.',
      sections: [
        {
          heading: 'Responsive Direction Switching',
          body: 'On mobile, set flex-direction: column. On wider screens, set flex-direction: row.',
          code: `.responsive-nav {
  display: flex;
  flex-direction: column; /* Mobile first */
  gap: 10px;
}

@media (min-width: 640px) {
  .responsive-nav {
    flex-direction: row;  /* Switch to horizontal on desktop */
    justify-content: space-between;
  }
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .nav-bar {
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: #f8fafc;
      padding: 12px;
      border-radius: 8px;
    }
    .nav-item {
      background: #4f46e5;
      color: white;
      padding: 10px 16px;
      border-radius: 6px;
      text-align: center;
      text-decoration: none;
    }
    @media (min-width: 500px) {
      .nav-bar { flex-direction: row; justify-content: space-around; }
    }
  </style>
</head>
<body>
  <div class="nav-bar">
    <a href="#" class="nav-item">Dashboard</a>
    <a href="#" class="nav-item">Messages</a>
    <a href="#" class="nav-item">Settings</a>
  </div>
</body>
</html>`,
          tips: [
            'Flexbox wrapping (flex-wrap: wrap) can handle responsive cards without needing explicit media queries.'
          ]
        }
      ]
    }
  },

  // 73. CSS RWD Intro
  {
    id: 'css-rwd-intro',
    title: 'CSS RWD Intro',
    slug: 'css-rwd-intro',
    summary: 'Responsive Web Design makes your web page look good on all devices: desktops, tablets, and phones.',
    readTime: '5 min',
    category: 'CSS Responsive',
    content: {
      overview: 'Responsive Web Design (RWD) is about using HTML and CSS to automatically resize, hide, shrink, or enlarge a website, to make it look good on all devices (desktops, tablets, and phones). It was coined by Ethan Marcotte in 2010.',
      sections: [
        {
          heading: 'The Three Pillars of RWD',
          body: 'RWD consists of: 1. Fluid Grid Layouts (proportional sizing), 2. Flexible Images and Media, 3. Media Queries.',
          code: `/* The RWD Golden Rule for Media */
img, video, iframe {
  max-width: 100%;
  height: auto;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .fluid-card {
      width: 100%;
      max-width: 480px;
      margin: 0 auto;
      background: #eff6ff;
      border: 2px solid #3b82f6;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="fluid-card">
    <h3 style="color:#1d4ed8; margin-top:0;">Responsive Fluid Principle</h3>
    <p style="color:#1e40af; margin-bottom:0;">This card gracefully scales from large 4K screens down to a 320px smartphone screen.</p>
  </div>
</body>
</html>`,
          tips: [
            'Never design for a single screen resolution; always design for fluidity across all viewports.'
          ]
        }
      ]
    }
  },

  // 74. CSS RWD Viewport
  {
    id: 'css-rwd-viewport',
    title: 'CSS RWD Viewport',
    slug: 'css-rwd-viewport',
    summary: 'The viewport is the user visible area of a web page. The viewport meta tag is essential for mobile browsers.',
    readTime: '4 min',
    category: 'CSS Responsive',
    content: {
      overview: 'The viewport is the user visible area of a web page. On mobile phones, browsers previously loaded desktop websites by default with wide 980px zoom out. The viewport meta tag instructs mobile browsers to match screen width 1:1 with CSS pixels.',
      sections: [
        {
          heading: 'Setting the Viewport Meta Tag',
          body: 'Always include the following <meta> tag inside the <head> element of every HTML page:',
          code: `<!-- Essential Mobile Viewport Meta Tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .pill { background: #4f46e5; color: white; padding: 12px 20px; border-radius: 8px; font-weight: bold; display: inline-block; }
  </style>
</head>
<body>
  <div class="pill">Viewport Meta Tag Enabled</div>
</body>
</html>`,
          tips: [
            'width=device-width sets the width of the page to follow the screen-width of the device.',
            'initial-scale=1.0 sets the initial zoom level when the page is first loaded.'
          ]
        }
      ]
    }
  },

  // 75. CSS RWD Grid View
  {
    id: 'css-rwd-grid-view',
    title: 'CSS RWD Grid View',
    slug: 'css-rwd-grid-view',
    summary: 'A responsive grid-view splits the screen into 12 columns, where each element spans specified column fractions.',
    readTime: '5 min',
    category: 'CSS Responsive',
    content: {
      overview: 'Many web designs are based on a 12-column grid-view, meaning that the page is divided into 12 columns. 12 is chosen because it is divisible by 1, 2, 3, 4, 6, and 12, allowing 1-column, 2-column, 3-column, 4-column, and 6-column modular layouts.',
      sections: [
        {
          heading: 'Building a 12-Column Percentage Grid',
          body: 'Each column width is calculated as (100% / 12) * column span.',
          code: `/* 12 Column Calculations */
.col-1  { width: 8.33%; }
.col-2  { width: 16.66%; }
.col-3  { width: 25%; }
.col-4  { width: 33.33%; }
.col-6  { width: 50%; }
.col-12 { width: 100%; }

[class*="col-"] {
  float: left;
  padding: 12px;
  box-sizing: border-box;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .row { display: flex; gap: 8px; margin-bottom: 8px; }
    .cell-4 { flex: 4; background: #e0e7ff; color: #4338ca; padding: 12px; border-radius: 6px; text-align: center; font-weight: bold; }
    .cell-8 { flex: 8; background: #0284c7; color: white; padding: 12px; border-radius: 6px; text-align: center; font-weight: bold; }
  </style>
</head>
<body>
  <h3>12-Column Ratio: 4 cols + 8 cols</h3>
  <div class="row">
    <div class="cell-4">4 / 12 (33.3%)</div>
    <div class="cell-8">8 / 12 (66.6%)</div>
  </div>
</body>
</html>`,
          tips: [
            'CSS Grid with fr units has made manual percentage math obsolete, but understanding the 12-column concept remains vital for design systems.'
          ]
        }
      ]
    }
  },

  // 76. CSS RWD Media Queries
  {
    id: 'css-rwd-media-queries',
    title: 'CSS RWD Media Queries',
    slug: 'css-rwd-media-queries',
    summary: 'Build responsive mobile-first layouts with min-width media queries.',
    readTime: '5 min',
    category: 'CSS Responsive',
    content: {
      overview: 'Mobile-first design means designing for mobile devices first, before designing for desktop or any other device. This makes the page display faster on smaller devices and enforces cleaner styling logic.',
      sections: [
        {
          heading: 'Mobile-First vs. Desktop-First',
          body: 'Mobile-First uses min-width queries to progressively enhance the experience as screen real estate increases.',
          code: `/* Mobile First (Base CSS) */
.menu {
  display: none; /* Hamburger drawer on phones */
}

/* Tablet (640px+) */
@media (min-width: 640px) {
  .menu { display: flex; }
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .card { background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; }
    .indicator { color: #dc2626; font-weight: bold; }
    @media (min-width: 600px) {
      .indicator { color: #16a34a; }
      .indicator::after { content: " (Desktop/Tablet Mode)"; }
    }
  </style>
</head>
<body>
  <div class="card">
    <span class="indicator">Screen Width State</span>
  </div>
</body>
</html>`,
          tips: [
            'Designing mobile-first forces you to prioritize core content before adding complex flourishes.'
          ]
        }
      ]
    }
  },

  // 77. CSS RWD Images & Videos
  {
    id: 'css-rwd-images',
    title: 'CSS RWD Images & Videos',
    slug: 'css-rwd-images',
    summary: 'Fluid images, responsive video embeds with aspect-ratio, and the HTML <picture> element.',
    readTime: '5 min',
    category: 'CSS Responsive',
    content: {
      overview: 'Responsive images scale nicely to fit any browser size. Key techniques include max-width: 100%, height: auto, modern CSS aspect-ratio, and art direction with the <picture> element.',
      sections: [
        {
          heading: 'Modern aspect-ratio Property',
          body: 'The aspect-ratio property eliminates cumulative layout shifts (CLS) by reserving space before media loads.',
          code: `/* Responsive fluid image */
img.responsive {
  max-width: 100%;
  height: auto;
}

/* 16:9 Video Embed Ratio (Zero layout shift!) */
.video-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #0f172a;
  border-radius: 8px;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .ratio-box {
      width: 100%;
      max-width: 380px;
      aspect-ratio: 16 / 9;
      background: linear-gradient(135deg, #4f46e5, #0284c7);
      color: white;
      border-radius: 8px;
      display: grid;
      place-items: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h3>aspect-ratio: 16 / 9</h3>
  <div class="ratio-box">Reserves 16:9 Space</div>
</body>
</html>`,
          tips: [
            'aspect-ratio completely replaces the legacy padding-top: 56.25% padding hack for YouTube embeds.'
          ]
        }
      ]
    }
  },

  // 78. CSS RWD Frameworks & Templates
  {
    id: 'css-rwd-frameworks',
    title: 'CSS RWD Frameworks',
    slug: 'css-rwd-frameworks',
    summary: 'Overview of modern CSS frameworks: Tailwind CSS, Bootstrap, and when to use native CSS Grid/Flexbox.',
    readTime: '5 min',
    category: 'CSS Responsive',
    content: {
      overview: 'There are many CSS frameworks that offer Responsive Design out of the box: Tailwind CSS (utility-first), Bootstrap (component-based), and Bulma. Understanding native CSS fundamentals empowers you to master any framework effortlessly.',
      sections: [
        {
          heading: 'Utility-First vs. Native CSS',
          body: 'Modern utility frameworks like Tailwind map CSS properties directly to HTML classes (e.g. flex, items-center, p-4, bg-indigo-600).',
          code: `<!-- Tailwind-style utility approach -->
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <span class="font-bold text-indigo-600">DevAura</span>
  <button class="px-4 py-2 bg-indigo-600 text-white rounded">Login</button>
</div>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .framework-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .badge { background: #e0e7ff; color: #4338ca; padding: 4px 10px; border-radius: 9999px; font-size: 13px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="framework-card">
    <span class="badge">Modern Utility Pattern</span>
    <span style="color:#64748b; font-size:14px;">Instant Responsive Architecture</span>
  </div>
</body>
</html>`,
          tips: [
            'Before reaching for a 100KB framework, check if CSS Grid and Flexbox can solve your layout in 10 lines of code.'
          ]
        }
      ]
    }
  },

  // 79. CSS Grid Intro
  {
    id: 'css-grid-intro',
    title: 'CSS Grid Intro',
    slug: 'css-grid-intro',
    summary: 'The CSS Grid Layout Module offers a grid-based layout system with rows and columns.',
    readTime: '6 min',
    category: 'CSS Grid',
    content: {
      overview: 'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning. It is the most powerful 2-dimensional layout system available in CSS.',
      sections: [
        {
          heading: 'CSS Grid Tracks & fr Unit',
          body: 'The fr (fraction) unit represents a fraction of the available space in the grid container.',
          code: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 3 columns with middle twice as wide */
  gap: 16px;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .grid {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 10px;
    }
    .box { background: #4f46e5; color: white; padding: 20px; border-radius: 6px; text-align: center; font-weight: bold; }
  </style>
</head>
<body>
  <h3>grid-template-columns: 1fr 2fr 1fr</h3>
  <div class="grid">
    <div class="box">1fr</div>
    <div class="box">2fr (Double Width)</div>
    <div class="box">1fr</div>
  </div>
</body>
</html>`,
          tips: [
            'fr units dynamically handle window resize math automatically without percentage calculation errors.'
          ]
        }
      ]
    }
  },

  // 80. CSS Grid Container
  {
    id: 'css-grid-container',
    title: 'CSS Grid Container',
    slug: 'css-grid-container',
    summary: 'Master container properties: grid-template-columns, grid-template-rows, grid-template-areas, gap, justify-items.',
    readTime: '6 min',
    category: 'CSS Grid',
    content: {
      overview: 'A grid container is created by setting display: grid. Key container properties include grid-template-columns, grid-template-rows, grid-template-areas, gap, row-gap, column-gap, justify-items, and align-items.',
      sections: [
        {
          heading: 'grid-template-areas Layout',
          body: 'grid-template-areas lets you name visual areas and draw the layout directly in CSS.',
          code: `.page-grid {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 12px;
  min-height: 100vh;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; }
    .grid-board {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .item { background: #eff6ff; border: 1.5px solid #93c5fd; color: #1e40af; padding: 20px; border-radius: 6px; text-align: center; font-weight: bold; }
  </style>
</head>
<body>
  <h3>repeat(3, 1fr) Grid</h3>
  <div class="grid-board">
    <div class="item">Cell 1</div>
    <div class="item">Cell 2</div>
    <div class="item">Cell 3</div>
    <div class="item">Cell 4</div>
    <div class="item">Cell 5</div>
    <div class="item">Cell 6</div>
  </div>
</body>
</html>`,
          tips: [
            'repeat(auto-fit, minmax(250px, 1fr)) creates a responsive card grid with zero media queries.'
          ]
        }
      ]
    }
  },

  // 81. CSS Grid Items
  {
    id: 'css-grid-items',
    title: 'CSS Grid Items',
    slug: 'css-grid-items',
    summary: 'Master child item properties: grid-column, grid-row, grid-area, justify-self, and align-self.',
    readTime: '6 min',
    category: 'CSS Grid',
    content: {
      overview: 'A grid item can span across multiple rows and columns using grid-column and grid-row. You can use start and end grid line numbers or the span keyword.',
      sections: [
        {
          heading: 'Spanning Columns & Rows',
          body: 'grid-column: 1 / 3 spans an item from grid line 1 to grid line 3 (2 columns wide). grid-column: span 2 spans 2 columns.',
          code: `/* Spanning 2 columns */
.featured-card {
  grid-column: span 2;
}

/* Full Width Banner */
.full-width {
  grid-column: 1 / -1; /* From first to last grid line */
}

/* Individual alignment */
.bottom-item {
  align-self: end;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .cell { background: #e0e7ff; color: #4338ca; padding: 16px; border-radius: 6px; text-align: center; font-weight: bold; }
    .cell.featured { grid-column: span 2; background: #4f46e5; color: white; }
  </style>
</head>
<body>
  <h3>grid-column: span 2</h3>
  <div class="grid">
    <div class="cell featured">Featured (Spans 2 Columns)</div>
    <div class="cell">Cell 2</div>
    <div class="cell">Cell 3</div>
    <div class="cell">Cell 4</div>
    <div class="cell">Cell 5</div>
  </div>
</body>
</html>`,
          tips: [
            'grid-column: 1 / -1 is a handy trick to make an item stretch across all columns regardless of grid width.'
          ]
        }
      ]
    }
  }
];
