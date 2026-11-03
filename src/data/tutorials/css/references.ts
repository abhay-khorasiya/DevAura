import { TutorialChapter } from '../../../types';

export const cssReferencesChapters: TutorialChapter[] = [
  // 82. CSS Properties Reference
  {
    id: 'css-properties-ref',
    title: 'CSS Properties Reference',
    slug: 'css-properties-ref',
    summary: 'Alphabetical reference guide of all primary CSS properties, syntax, and initial values.',
    readTime: '7 min',
    category: 'CSS References',
    content: {
      overview: 'This comprehensive reference lists the core CSS properties categorized alphabetically from A to Z, providing a reliable quick reference for professional web design.',
      sections: [
        {
          heading: 'Core Properties Quick Index',
          body: 'Essential CSS properties grouped by architectural function:',
          code: `/* Box Model & Layout */
display, position, top, right, bottom, left, z-index,
width, height, max-width, min-width, margin, padding,
box-sizing, overflow, float, clear;

/* Flexbox & Grid */
flex, flex-direction, flex-wrap, justify-content, align-items, gap,
grid-template-columns, grid-template-rows, grid-template-areas;

/* Typography & Text */
color, font-family, font-size, font-weight, line-height,
text-align, text-decoration, text-transform, letter-spacing;

/* Visual Decoration & Effects */
background, background-color, background-image, background-size,
border, border-radius, box-shadow, opacity, transform, transition, animation;`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .table-box { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 14px; }
    th, td { padding: 10px 14px; border: 1px solid #e2e8f0; text-align: left; }
    th { background: #4f46e5; color: white; }
    tr:nth-child(even) { background: #f8fafc; }
    code { color: #4f46e5; font-weight: bold; }
  </style>
</head>
<body>
  <h3>CSS Major Properties Quick Sheet</h3>
  <div class="table-box">
    <table>
      <thead>
        <tr><th>Property</th><th>Description</th><th>Initial Value</th></tr>
      </thead>
      <tbody>
        <tr><td><code>display</code></td><td>Specifies element display behavior</td><td>inline</td></tr>
        <tr><td><code>position</code></td><td>Specifies positioning method</td><td>static</td></tr>
        <tr><td><code>flex-direction</code></td><td>Sets main axis for flex items</td><td>row</td></tr>
        <tr><td><code>grid-template-columns</code></td><td>Defines column tracks in grid</td><td>none</td></tr>
        <tr><td><code>box-sizing</code></td><td>Box model calculation rule</td><td>content-box</td></tr>
      </tbody>
    </table>
  </div>
</body>
</html>`,
          tips: [
            'Use initial to reset any property back to its CSS specification default.',
            'Use inherit to force a property to inherit its parent value.'
          ]
        }
      ]
    }
  },

  // 83. CSS Selectors Reference
  {
    id: 'css-selectors-ref',
    title: 'CSS Selectors Reference',
    slug: 'css-selectors-ref',
    summary: 'Complete reference of CSS selectors: element, class, id, attribute, pseudo-class, and pseudo-elements.',
    readTime: '6 min',
    category: 'CSS References',
    content: {
      overview: 'CSS selectors let you target specific HTML elements on a web page. This reference provides the full list of simple, combinator, attribute, pseudo-class, and pseudo-element selectors.',
      sections: [
        {
          heading: 'Selector Patterns & Meaning',
          body: 'Reference table for all CSS selectors:',
          code: `/* Simple & Combinators */
*           Universal selector (all elements)
element     Element type selector (e.g. h1, p)
#id         Unique ID selector
.class      Reusable class selector
div p       Descendant selector (any child or grandchild)
div > p     Child selector (direct children only)
div + p     Adjacent sibling (immediately following)
div ~ p     General sibling (any following sibling)

/* Attribute Selectors */
[attr]        Has attribute
[attr=val]    Attribute equals exact value
[attr^=val]   Attribute begins with value
[attr$=val]   Attribute ends with value
[attr*=val]   Attribute contains substring

/* Pseudo-classes & Pseudo-elements */
:hover, :focus, :active, :checked, :disabled
:first-child, :last-child, :nth-child(n), :not(selector)
::before, ::after, ::first-line, ::first-letter, ::selection`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .demo-list li:first-child { color: #4f46e5; font-weight: bold; }
    .demo-list li:last-child { color: #0284c7; font-weight: bold; }
    .demo-list li:hover { background: #f1f5f9; }
  </style>
</head>
<body>
  <h3>Selector Hierarchy Demo</h3>
  <ul class="demo-list">
    <li>First item (:first-child - Indigo)</li>
    <li>Middle item</li>
    <li>Last item (:last-child - Sky Blue)</li>
  </ul>
</body>
</html>`,
          tips: [
            'The :is() and :where() pseudo-classes allow writing compact grouped selectors: :is(h1, h2, h3) span.'
          ]
        }
      ]
    }
  },

  // 84. CSS Functions Reference
  {
    id: 'css-functions-ref',
    title: 'CSS Functions Reference',
    slug: 'css-functions-ref',
    summary: 'Reference guide of CSS functions: calc(), min(), max(), clamp(), var(), rgb(), hsl(), and transform functions.',
    readTime: '6 min',
    category: 'CSS References',
    content: {
      overview: 'CSS functions are built-in methods used as values for various CSS properties to perform mathematical computations, color mixing, shape transformations, and asset loading.',
      sections: [
        {
          heading: 'Primary CSS Functions',
          body: 'Overview of the most widely used CSS functions in modern production:',
          code: `/* Math Functions */
calc(100% - 32px);              /* Mathematical evaluation */
min(10vw, 50px);                /* Smallest value */
max(1rem, 2vw);                 /* Largest value */
clamp(1rem, 2.5vw, 2.5rem);     /* Locked range clamp */

/* Custom Properties */
var(--primary-color, #4f46e5);  /* Variable retrieval with fallback */

/* Colors */
rgb(79, 70, 229);
rgba(79, 70, 229, 0.5);
hsl(243, 75%, 59%);

/* Gradients */
linear-gradient(135deg, #4f46e5, #0284c7);
radial-gradient(circle, #4f46e5, #000);
conic-gradient(from 0deg, red, blue, green);

/* 2D / 3D Transforms */
translate(10px, 20px), rotate(45deg), scale(1.1), skewX(10deg);`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .math-card {
      width: min(100%, 360px);
      padding: clamp(12px, 3vw, 24px);
      background: linear-gradient(135deg, #4f46e5, #0284c7);
      color: white;
      border-radius: 8px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="math-card">
    Styled with min(), clamp(), and linear-gradient()!
  </div>
</body>
</html>`,
          tips: [
            'CSS functions are case-insensitive, but lowercase is standard convention.'
          ]
        }
      ]
    }
  },

  // 85. CSS Web Safe Fonts Reference
  {
    id: 'css-web-safe-fonts-ref',
    title: 'CSS Web Safe Fonts',
    slug: 'css-web-safe-fonts-ref',
    summary: 'Web safe fonts are fonts that are universally installed across all operating systems: Windows, macOS, Linux, iOS, Android.',
    readTime: '5 min',
    category: 'CSS References',
    content: {
      overview: 'Web safe fonts are fonts that are pre-installed on almost all operating systems (Windows, macOS, Linux, iOS, Android). Using web safe fonts guarantees that your typography will look identical without requiring network downloads.',
      sections: [
        {
          heading: 'Web Safe Font Stacks',
          body: 'Recommended web safe font fallback stacks:',
          code: `/* Sans-Serif (Modern & Clean) */
font-family: Arial, Helvetica, sans-serif;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', sans-serif;
font-family: Verdana, Geneva, sans-serif;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;

/* Serif (Traditional & Elegant) */
font-family: 'Times New Roman', Times, serif;
font-family: Georgia, serif;
font-family: Garamond, serif;

/* Monospace (Code & Technical) */
font-family: 'Courier New', Courier, monospace;
font-family: 'Lucida Console', Monaco, monospace;`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { padding: 20px; font-size: 16px; }
    .arial { font-family: Arial, sans-serif; margin-bottom: 10px; }
    .georgia { font-family: Georgia, serif; margin-bottom: 10px; color: #4338ca; }
    .courier { font-family: 'Courier New', monospace; color: #0284c7; background: #f0f9ff; padding: 6px; }
  </style>
</head>
<body>
  <div class="arial">Arial: Standard Sans-Serif</div>
  <div class="georgia">Georgia: Classic Serif Stack</div>
  <div class="courier">Courier New: Universal Monospace</div>
</body>
</html>`,
          tips: [
            'system-ui instructs the browser to use the native operating system font (San Francisco on Mac, Segoe UI on Windows, Roboto on Android).'
          ]
        }
      ]
    }
  },

  // 86. CSS Animatable Properties Reference
  {
    id: 'css-animatable-ref',
    title: 'CSS Animatable Properties',
    slug: 'css-animatable-ref',
    summary: 'Full list of CSS properties that can be smoothly transitioned and animated.',
    readTime: '5 min',
    category: 'CSS References',
    content: {
      overview: 'Not all CSS properties can be animated. An animatable property can smoothly interpolate values from an initial state to a target state over time. Properties with discrete keyword values (like display: none to block) cannot interpolate smoothly.',
      sections: [
        {
          heading: 'High Performance vs. Expensive Animatable Properties',
          body: 'GPU Compositor Thread (Ultra-smooth 60/120fps): transform, opacity, filter. Layout & Paint Thread (Avoid for heavy loops): width, height, margin, padding, top, left, border-width.',
          code: `/* Highly Recommended (GPU-accelerated) */
transform: translateX(20px) scale(1.05);
opacity: 0.8;

/* Animatable but expensive (Triggers Reflow/Repaint) */
width: 200px;
height: 100px;
margin-top: 20px;
background-color: #4f46e5;`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 30px; }
    .fast-box {
      width: 120px;
      padding: 16px;
      background: #4f46e5;
      color: white;
      border-radius: 8px;
      text-align: center;
      font-weight: bold;
      transition: transform 0.25s ease, opacity 0.25s ease;
      cursor: pointer;
    }
    .fast-box:hover {
      transform: translateY(-6px) scale(1.05);
      opacity: 0.9;
    }
  </style>
</head>
<body>
  <div class="fast-box">Hover Me (GPU Fast)</div>
</body>
</html>`,
          tips: [
            'Use the will-change: transform property sparingly to signal the browser to prepare GPU resources.'
          ]
        }
      ]
    }
  },

  // 87. CSS Units Reference
  {
    id: 'css-units-ref',
    title: 'CSS Units Reference',
    slug: 'css-units-ref',
    summary: 'Comprehensive reference of CSS measurement units: px, rem, em, %, vw, vh, ch, pt, cm.',
    readTime: '5 min',
    category: 'CSS References',
    content: {
      overview: 'CSS offers a wide variety of units to define dimensions, font sizes, margins, paddings, and borders. Units are divided into Absolute (fixed physical lengths) and Relative (scalable based on parent or viewport).',
      sections: [
        {
          heading: 'Complete Units Table',
          body: 'Relative units adapt to viewport and accessibility settings:',
          code: `/* Relative Units (Responsive & Accessible) */
rem     Relative to root font-size (html tag, default 16px)
em      Relative to font-size of element or parent
%       Relative to parent element dimension
vw      1% of viewport width
vh      1% of viewport height
vmin    1% of viewport smaller dimension (width or height)
vmax    1% of viewport larger dimension
ch      Width of the "0" (zero) glyph in current font
cqw     1% of query container width (Container Queries)

/* Absolute Units (Fixed) */
px      Pixels (1px = 1/96th of an inch)
pt      Points (1pt = 1/72 of an inch, used for print)
cm, mm  Centimeters, millimeters
in      Inches (1in = 96px)`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .unit-ch { max-width: 45ch; background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 6px; line-height: 1.6; }
  </style>
</head>
<body>
  <h3>ch Unit for Optimal Line Length</h3>
  <div class="unit-ch">
    This box has <code>max-width: 45ch</code>. Typography research indicates that 45 to 75 characters per line provides the most comfortable reading experience for human eyes.
  </div>
</body>
</html>`,
          tips: [
            'ch units are ideal for setting max-width on articles to ensure text never stretches too wide for comfortable reading.'
          ]
        }
      ]
    }
  },

  // 88. CSS Color Values Reference
  {
    id: 'css-color-values-ref',
    title: 'CSS Color Values Reference',
    slug: 'css-color-values-ref',
    summary: 'Reference of color formats: HEX, RGB, RGBA, HSL, HSLA, modern color-mix(), and keywords.',
    readTime: '5 min',
    category: 'CSS References',
    content: {
      overview: 'CSS offers several color systems to declare colors for backgrounds, borders, text, and shadows: Named Colors, HEX (#RRGGBB and #RRGGBBAA), RGB / RGBA, HSL / HSLA, and special keywords like transparent and currentcolor.',
      sections: [
        {
          heading: 'currentcolor Keyword and Formats',
          body: 'The currentcolor keyword inherits the value of the color property, making icon SVGs and borders automatically sync with text color.',
          code: `/* currentcolor Sync */
.btn-themed {
  color: #4f46e5;
  border: 2px solid currentcolor; /* Automatically #4f46e5 */
}
.btn-themed:hover {
  color: #0284c7; /* Border changes to #0284c7 automatically! */
}

/* Modern RGB without commas (CSS Color 4) */
color: rgb(79 70 229 / 80%);

/* Modern color mixing */
background-color: color-mix(in srgb, #4f46e5 80%, white);`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .sync-btn {
      color: #4f46e5;
      border: 2px solid currentcolor;
      background: transparent;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
    }
    .sync-btn:hover {
      color: #0284c7;
      background: #f0f9ff;
    }
  </style>
</head>
<body>
  <h3>currentcolor Demonstration</h3>
  <button class="sync-btn">Hover to sync text and border color</button>
</body>
</html>`,
          tips: [
            'Using currentcolor on SVG fill or stroke ensures icons automatically match link or button text colors.'
          ]
        }
      ]
    }
  },

  // 89. CSS Default Values Reference
  {
    id: 'css-default-values-ref',
    title: 'CSS Default Values Reference',
    slug: 'css-default-values-ref',
    summary: 'Default initial values for HTML elements rendered by browser user agent stylesheets.',
    readTime: '5 min',
    category: 'CSS References',
    content: {
      overview: 'Every browser has a default User Agent stylesheet that applies basic styling to HTML elements before any author CSS is loaded. Understanding these defaults explains why h1 has top/bottom margins, ul has left padding, and body has an 8px margin.',
      sections: [
        {
          heading: 'Common Browser Default Behaviors',
          body: 'Standard browser defaults before author CSS overrides:',
          code: `/* Default Browser Margins */
body { margin: 8px; }
h1 { margin: 0.67em 0; font-size: 2em; font-weight: bold; }
p  { margin: 1em 0; }
ul, ol { padding-left: 40px; margin: 1em 0; }

/* Default Displays */
div, p, h1-h6, ul, li, section, header, footer { display: block; }
span, a, strong, em, img { display: inline; }
table { display: table; border-collapse: separate; }`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .reset-demo {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      padding: 16px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="reset-demo">
    <h4 style="margin:0; color:#4f46e5;">Normalized Container</h4>
    <p style="margin:6px 0 0; color:#475569;">By zeroing default user agent margins, you achieve predictable layout precision.</p>
  </div>
</body>
</html>`,
          tips: [
            'Modern resets zero out body margin and set box-sizing: border-box globally to wipe out browser inconsistencies.'
          ]
        }
      ]
    }
  },

  // 90. CSS Browser Support Reference
  {
    id: 'css-browser-support-ref',
    title: 'CSS Browser Support',
    slug: 'css-browser-support-ref',
    summary: 'Browser compatibility, vendor prefixes (-webkit-, -moz-), feature detection with @supports, and Can I Use.',
    readTime: '6 min',
    category: 'CSS References',
    content: {
      overview: 'Modern CSS is supported across all major evergreen browsers (Chrome, Edge, Firefox, Safari). To check feature compatibility, developers consult CanIUse.com and utilize feature queries (@supports) to progressively enhance modern experiences.',
      sections: [
        {
          heading: 'Feature Queries with @supports',
          body: 'The @supports rule checks whether a browser supports a CSS property before applying advanced styles.',
          code: `/* Feature detection for CSS Grid */
@supports (display: grid) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Feature detection for modern Backdrop Filter */
@supports (backdrop-filter: blur(10px)) {
  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
  }
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .support-card {
      padding: 20px;
      background: #f0fdf4;
      border: 2px solid #86efac;
      border-radius: 8px;
      color: #166534;
      font-weight: bold;
    }
    @supports (display: grid) {
      .support-card::after {
        content: " — CSS Grid is natively supported in this browser! ✅";
      }
    }
  </style>
</head>
<body>
  <div class="support-card">
    Browser Compatibility Check
  </div>
</body>
</html>`,
          tips: [
            'Build pipelines use tools like PostCSS and Autoprefixer to automatically add required vendor prefixes without manual intervention.'
          ]
        }
      ]
    }
  }
];
