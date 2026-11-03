import { TutorialChapter } from '../../../types';

export const cssBasicsChapters: TutorialChapter[] = [
  // 1. CSS HOME
  {
    id: 'css-home',
    title: 'CSS HOME',
    slug: 'css-home',
    summary: 'CSS is the language we use to style an HTML document. Learn CSS to design modern, responsive web pages.',
    readTime: '4 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work by controlling the layout of multiple web pages all at once. External stylesheets are stored in CSS files.',
      sections: [
        {
          heading: 'CSS Example',
          body: 'Here is a simple CSS rule that styles the background color and centers headings and paragraphs on a web page:',
          code: `body {
  background-color: #f8fafc;
}

h1 {
  color: #4f46e5;
  text-align: center;
}

p {
  font-family: system-ui, sans-serif;
  font-size: 18px;
  color: #334155;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #f8fafc;
      font-family: system-ui, sans-serif;
      padding: 30px;
      color: #334155;
    }
    .hero {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      text-align: center;
    }
    h1 {
      color: #4f46e5;
      font-size: 28px;
      margin-bottom: 8px;
    }
    p {
      font-size: 16px;
      color: #64748b;
    }
    .btn {
      display: inline-block;
      margin-top: 16px;
      padding: 10px 20px;
      background-color: #4f46e5;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Welcome to CSS Tutorial</h1>
    <p>CSS controls colors, fonts, margins, layouts, and animations across web pages.</p>
    <a href="#" class="btn">Start Learning CSS</a>
  </div>
</body>
</html>`,
          tips: [
            'CSS stands for Cascading Style Sheets.',
            'With CSS, you separate presentation (styles) from structural content (HTML).'
          ]
        }
      ]
    }
  },

  // 2. CSS Introduction
  {
    id: 'css-intro',
    title: 'CSS Introduction',
    slug: 'css-intro',
    summary: 'What is CSS? Why use CSS? How CSS solved a big problem in web development.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'CSS was invented by Håkon Wium Lie in 1994 and adopted by the W3C. Before CSS, HTML was never intended to contain tags for formatting a web page (like <font> and color attributes). CSS removes style formatting from the HTML document, making web pages dramatically easier to maintain.',
      sections: [
        {
          heading: 'Why Use CSS?',
          body: 'CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes. A single CSS file can control the look and layout of thousands of pages simultaneously.',
          code: `/* Modern Clean Card Style */
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #f1f5f9; padding: 30px; }
    .card {
      background: white;
      max-width: 360px;
      margin: 0 auto;
      border-radius: 12px;
      padding: 24px;
      border: 1px solid #cbd5e1;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 20px -3px rgba(79, 70, 229, 0.15);
      border-color: #a5b4fc;
    }
    .card h2 { color: #1e1b4b; margin-top: 0; }
    .card p { color: #475569; font-size: 15px; line-height: 1.5; }
    .tag { background: #e0e7ff; color: #4338ca; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <span class="tag">CSS Intro</span>
    <h2>Modern Design with CSS</h2>
    <p>Hover over this card to witness how simple CSS transitions bring web interfaces to life.</p>
  </div>
</body>
</html>`,
          tips: [
            'CSS saves massive amounts of development time.',
            'Styles cascade down from browser defaults to external sheets, internal tags, and inline styles.'
          ]
        }
      ]
    }
  },

  // 3. CSS Syntax
  {
    id: 'css-syntax',
    title: 'CSS Syntax',
    slug: 'css-syntax',
    summary: 'A CSS rule consists of a selector and a declaration block with properties and values.',
    readTime: '4 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'A CSS rule-set consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.',
      sections: [
        {
          heading: 'CSS Syntax Explained',
          body: 'The selector points to the HTML element (e.g., p, h1, .class, #id). Inside the curly braces { }, declarations specify properties and their values.',
          code: `/* Selector */
p {
  color: #4f46e5;       /* Property: Value; */
  text-align: center;   /* Property: Value; */
  font-size: 16px;      /* Property: Value; */
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; background: #ffffff; }
    h1 {
      color: #0284c7;
      font-size: 26px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    p {
      color: #475569;
      line-height: 1.6;
      border-left: 4px solid #4f46e5;
      padding-left: 12px;
    }
  </style>
</head>
<body>
  <h1>CSS Rule Anatomy</h1>
  <p>The selector targets the element. The declaration block contains property-value pairs separated by colons and terminated with semicolons.</p>
</body>
</html>`,
          tips: [
            'Always end each declaration with a semicolon (;).',
            'Declaration blocks must always be enclosed within curly braces ({ }).'
          ]
        }
      ]
    }
  },

  // 4. CSS Selectors
  {
    id: 'css-selectors',
    title: 'CSS Selectors',
    slug: 'css-selectors',
    summary: 'CSS selectors are used to find or select the HTML elements you want to style.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'CSS selectors can be divided into five categories: Simple selectors (select elements based on name, id, class), Combinator selectors (based on relationship), Pseudo-class selectors (based on state), Pseudo-elements selectors (style a part of an element), and Attribute selectors (based on an attribute or attribute value).',
      sections: [
        {
          heading: 'Simple Selectors: Element, Id, and Class',
          body: 'The element selector selects HTML elements based on tag name. The id selector uses the # character followed by id name. The class selector uses the . (period) character followed by class name.',
          code: `/* Element Selector */
p { text-align: left; }

/* Id Selector (Unique) */
#main-banner { background-color: #312e81; color: white; }

/* Class Selector (Reusable) */
.highlight { background-color: #fef08a; font-weight: bold; }

/* Grouping Selector */
h1, h2, h3 { font-family: 'Inter', sans-serif; color: #1e293b; }

/* Universal Selector */
* { box-sizing: border-box; margin: 0; padding: 0; }`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; line-height: 1.5; }
    #hero-header { background: #4f46e5; color: white; padding: 15px; border-radius: 8px; text-align: center; }
    .note { background: #f0fdf4; border: 1px solid #86efac; color: #166534; padding: 10px; border-radius: 6px; margin: 10px 0; }
    .warning { background: #fff1f2; border: 1px solid #fecdd3; color: #9f1239; padding: 10px; border-radius: 6px; }
  </style>
</head>
<body>
  <h2 id="hero-header">Targeted with ID (#hero-header)</h2>
  <p class="note">This note is styled with class (.note).</p>
  <p class="warning">This warning is styled with class (.warning).</p>
</body>
</html>`,
          tips: [
            'An ID name cannot start with a number and must be unique on the page.',
            'Multiple classes can be applied to an element separated by spaces: class="note warning".'
          ]
        }
      ]
    }
  },

  // 5. CSS How To
  {
    id: 'css-how-to',
    title: 'CSS How To',
    slug: 'css-how-to',
    summary: 'Three ways to insert CSS: External, Internal, and Inline styles.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'There are three ways of inserting a style sheet into an HTML document: External CSS (in a separate .css file linked via <link>), Internal CSS (inside a <style> element within the <head> section), and Inline CSS (inside the style attribute of an HTML element).',
      sections: [
        {
          heading: 'Comparing the 3 Methods',
          body: 'External styles are ideal for multi-page websites. Internal styles are great for single-page documents with unique styling. Inline styles should be used sparingly because they mix content with presentation.',
          code: `<!-- 1. External CSS (Recommended for production) -->
<link rel="stylesheet" href="mystyle.css">

<!-- 2. Internal CSS (Inside <head>) -->
<style>
  body { background-color: #f8fafc; }
  h1 { color: #4338ca; }
</style>

<!-- 3. Inline CSS (Directly on HTML tag) -->
<h1 style="color: #4f46e5; text-align: center;">Inline Styled Heading</h1>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Internal CSS */
    .internal-box {
      background-color: #e0f2fe;
      border: 2px solid #0284c7;
      color: #0369a1;
      padding: 15px;
      border-radius: 8px;
      font-family: system-ui, sans-serif;
      margin-bottom: 12px;
    }
  </style>
</head>
<body>
  <!-- Styled via Internal CSS -->
  <div class="internal-box">
    <strong>Internal Style:</strong> Defined inside the &lt;style&gt; tag in &lt;head&gt;.
  </div>

  <!-- Styled via Inline CSS -->
  <div style="background-color: #fef3c7; border: 2px solid #d97706; color: #b45309; padding: 15px; border-radius: 8px; font-family: system-ui, sans-serif;">
    <strong>Inline Style:</strong> Defined directly on the tag with the style attribute.
  </div>
</body>
</html>`,
          tips: [
            'Cascading Order: Inline styles have highest priority, followed by internal and external style sheets, followed by browser default styles.'
          ]
        }
      ]
    }
  },

  // 6. CSS Comments
  {
    id: 'css-comments',
    title: 'CSS Comments',
    slug: 'css-comments',
    summary: 'CSS comments are used to explain the code, and may help when you edit the source code later.',
    readTime: '3 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'CSS comments are not displayed in the browser. They begin with /* and end with */. Comments can span multiple lines or sit within single lines.',
      sections: [
        {
          heading: 'Writing CSS Comments',
          body: 'You can add comments wherever you like in the CSS file to document structure, clarify complex calculations, or temporarily disable rules.',
          code: `/* ===================================
   NAVIGATION BAR STYLES
   =================================== */
nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem; /* Horizontal and vertical padding */
}

/* Temporary disabled:
.announcement-banner { display: none; }
*/`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Main body background and font */
    body {
      font-family: system-ui, sans-serif;
      padding: 24px;
      background-color: #f8fafc;
    }

    /* Primary Heading */
    h2 {
      color: #4f46e5; /* Electric Indigo */
    }

    p {
      color: #334155;
      /* font-size: 24px; (This is commented out) */
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h2>CSS Comments in Action</h2>
  <p>Check the &lt;style&gt; tag to see how comments explain styles and disable rules.</p>
</body>
</html>`,
          tips: [
            'CSS does not support single-line // comments like JavaScript; always use /* ... */.'
          ]
        }
      ]
    }
  },

  // 7. CSS Colors
  {
    id: 'css-colors',
    title: 'CSS Colors',
    slug: 'css-colors',
    summary: 'Colors in CSS can be specified using color names, RGB, HEX, HSL, RGBA, and HSLA values.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'CSS supports 140 standard color names (like red, dodgerblue, slateblue), as well as numeric color notations: RGB (Red, Green, Blue), HEX (#RRGGBB), HSL (Hue, Saturation, Lightness), and modern color spaces with alpha transparency channels.',
      sections: [
        {
          heading: 'Color Formats in CSS',
          body: 'HEX is the most widely used format on the web, while RGB and HSL offer intuitive alpha channel transparency support.',
          code: `/* Standard Color Name */
color: Tomato;

/* RGB & RGBA (Red, Green, Blue, Alpha) */
background-color: rgb(79, 70, 229);
background-color: rgba(79, 70, 229, 0.5); /* 50% opacity */

/* HEX Code */
color: #4f46e5;
color: #4f46e580; /* HEX with alpha */

/* HSL & HSLA (Hue: 0-360, Saturation: 0-100%, Lightness: 0-100%) */
background-color: hsl(243, 75%, 59%);
background-color: hsla(243, 75%, 59%, 0.8);`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; display: grid; gap: 12px; }
    .box { padding: 16px; border-radius: 8px; color: white; font-weight: bold; text-align: center; }
    .hex { background-color: #4f46e5; }
    .rgb { background-color: rgb(2, 132, 199); }
    .hsl { background-color: hsl(142, 71%, 45%); }
    .rgba { background-color: rgba(79, 70, 229, 0.25); color: #312e81; border: 1px solid #4f46e5; }
  </style>
</head>
<body>
  <div class="box hex">HEX: #4f46e5</div>
  <div class="box rgb">RGB: rgb(2, 132, 199)</div>
  <div class="box hsl">HSL: hsl(142, 71%, 45%)</div>
  <div class="box rgba">RGBA with Transparency: rgba(79, 70, 229, 0.25)</div>
</body>
</html>`,
          tips: [
            'RGB values range from 0 to 255 for each channel.',
            'HSL is easiest for humans to tweak: change Hue for color, Saturation for intensity, and Lightness for shade.'
          ]
        }
      ]
    }
  },

  // 8. CSS Backgrounds
  {
    id: 'css-backgrounds',
    title: 'CSS Backgrounds',
    slug: 'css-backgrounds',
    summary: 'Master background-color, background-image, background-repeat, background-attachment, and shorthand.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'The CSS background properties are used to define the background effects for elements: background-color, background-image, background-repeat, background-attachment, background-position, and the all-in-one background shorthand.',
      sections: [
        {
          heading: 'Background Properties & Shorthand',
          body: 'You can set background color, background images with repeat control (no-repeat, repeat-x, repeat-y), positioning (center, top, right), and attachment (fixed, scroll).',
          code: `/* Individual Properties */
background-color: #0f172a;
background-image: url('pattern.svg');
background-repeat: no-repeat;
background-position: right top;
background-attachment: fixed;
background-size: cover;

/* Shorthand Syntax */
/* background: color image repeat attachment position; */
background: #0f172a url('pattern.svg') no-repeat fixed center;`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .gradient-bg {
      background: linear-gradient(135deg, #4f46e5 0%, #0284c7 100%);
      color: white;
      padding: 40px 20px;
      border-radius: 12px;
      font-family: system-ui, sans-serif;
      text-align: center;
      box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
    }
    .gradient-bg h1 { margin: 0 0 10px 0; }
    .gradient-bg p { opacity: 0.9; margin: 0; }
  </style>
</head>
<body>
  <div class="gradient-bg">
    <h1>Vibrant Gradient Background</h1>
    <p>Using CSS linear-gradient to craft sleek modern aesthetics.</p>
  </div>
</body>
</html>`,
          tips: [
            'background-size: cover scales the background image so the content area is completely covered.',
            'background-attachment: fixed creates a parallax scrolling effect where the image remains fixed in the viewport.'
          ]
        }
      ]
    }
  },

  // 9. CSS Borders
  {
    id: 'css-borders',
    title: 'CSS Borders',
    slug: 'css-borders',
    summary: 'Specify style, width, color, individual sides, and rounded borders with border-radius.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'The CSS border properties allow you to specify the style, width, and color of an element border. Border styles include solid, dashed, dotted, double, groove, ridge, inset, outset, and none.',
      sections: [
        {
          heading: 'Border Style, Width, Color, and Radius',
          body: 'The border shorthand property specifies border-width, border-style (required), and border-color. border-radius curves the corners.',
          code: `/* Border Shorthand: width style color */
border: 2px solid #4f46e5;

/* Individual Sides */
border-top: 4px solid #0284c7;
border-bottom: 2px dashed #94a3b8;
border-left: none;

/* Rounded Corners */
border-radius: 8px;           /* All 4 corners */
border-radius: 12px 12px 0 0; /* Top-left, top-right, bottom-right, bottom-left */
border-radius: 9999px;        /* Full pill / circle */`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; display: grid; gap: 16px; }
    .solid-box { border: 2px solid #4f46e5; padding: 12px; border-radius: 8px; }
    .dashed-box { border: 2px dashed #0284c7; padding: 12px; border-radius: 8px; background: #f0f9ff; }
    .pill-box { border: 2px solid #10b981; padding: 10px 24px; border-radius: 9999px; display: inline-block; text-align: center; font-weight: bold; color: #047857; }
  </style>
</head>
<body>
  <div class="solid-box">Solid Border with 8px radius</div>
  <div class="dashed-box">Dashed Border with Sky Blue color</div>
  <div><span class="pill-box">Full Pill Border Radius</span></div>
</body>
</html>`,
          tips: [
            'None of the border properties will have ANY effect unless the border-style property is set.',
            'border-radius creates smooth circular or pill-shaped UI components.'
          ]
        }
      ]
    }
  },

  // 10. CSS Margins
  {
    id: 'css-margins',
    title: 'CSS Margins',
    slug: 'css-margins',
    summary: 'Create space around elements, outside of any defined borders. Understand margin collapse.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'Margins are used to create space around elements, outside of any defined borders. CSS has properties for specifying the margin for each side of an element (margin-top, margin-right, margin-bottom, margin-left), shorthand values, auto centering, and margin collapse behavior.',
      sections: [
        {
          heading: 'Margin Shorthand & Centering',
          body: 'You can specify margins for all sides at once or use margin: 0 auto; to horizontally center a fixed-width block element.',
          code: `/* 4 values: top, right, bottom, left (Clockwise) */
margin: 25px 50px 75px 100px;

/* 2 values: top & bottom, left & right */
margin: 20px 40px;

/* 1 value: all 4 sides */
margin: 24px;

/* Horizontal Centering */
margin: 0 auto;
width: 600px;`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #f8fafc; padding: 20px; }
    .centered-card {
      width: 320px;
      margin: 30px auto; /* 30px top/bottom, auto left/right centers it */
      background: white;
      padding: 20px;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
  </style>
</head>
<body>
  <div class="centered-card">
    <h3 style="color: #4f46e5; margin-top:0;">Centering with Margin: 0 auto</h3>
    <p style="color: #64748b; margin-bottom: 0;">This container is horizontally centered inside its parent.</p>
  </div>
</body>
</html>`,
          tips: [
            'Top and bottom margins of adjacent block elements sometimes collapse into a single margin that equals the largest of the two (Margin Collapse).',
            'Negative margins are valid and pull the element closer to its neighbors or overlap.'
          ]
        }
      ]
    }
  },

  // 11. CSS Padding
  {
    id: 'css-padding',
    title: 'CSS Padding',
    slug: 'css-padding',
    summary: 'Generate space around an element content, inside of any defined borders.',
    readTime: '4 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'Padding is used to create space around an element content, inside of any defined borders. The CSS padding properties set the size of the white space between the element content and its border.',
      sections: [
        {
          heading: 'Padding Sides and Shorthand',
          body: 'Like margin, padding has 4 individual side properties (padding-top, padding-right, padding-bottom, padding-left) and a shorthand property that works in clockwise order.',
          code: `/* Individual sides */
padding-top: 16px;
padding-right: 24px;
padding-bottom: 16px;
padding-left: 24px;

/* Shorthand (top/bottom, left/right) */
padding: 16px 24px;

/* All 4 sides equal */
padding: 20px;`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .no-padding { background: #fee2e2; border: 2px solid #ef4444; margin-bottom: 15px; }
    .with-padding { background: #e0e7ff; border: 2px solid #4f46e5; padding: 24px; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="no-padding">No padding: Text touches the borders directly.</div>
  <div class="with-padding">With 24px padding: Generous whitespace makes reading effortless.</div>
</body>
</html>`,
          tips: [
            'Padding is affected by the background-color of the element.',
            'By default, adding padding increases the total width of an element unless box-sizing: border-box is applied.'
          ]
        }
      ]
    }
  },

  // 12. CSS Height, Width and Max-width
  {
    id: 'css-height-width',
    title: 'CSS Height, Width and Max-width',
    slug: 'css-height-width',
    summary: 'Set the dimensions of elements using height, width, min-width, and max-width.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'The CSS height and width properties are used to set the height and width of an element. The height and width do not include padding, borders, or margins by default. Using max-width instead of width makes designs responsive across smaller screens.',
      sections: [
        {
          heading: 'Fixed Width vs. Responsive Max-width',
          body: 'If you set width: 500px;, the element stays 500px even on a 375px mobile phone, forcing horizontal scrollbars. If you set max-width: 500px; width: 100%;, the browser resizes the element smoothly.',
          code: `/* Fixed dimension (Can break mobile screens) */
div.fixed {
  width: 500px;
  height: 200px;
}

/* Responsive dimension (Best practice) */
div.responsive {
  max-width: 600px;
  width: 100%;
  min-height: 150px;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .box {
      max-width: 480px;
      width: 100%;
      min-height: 120px;
      background: #eff6ff;
      border: 2px solid #3b82f6;
      border-radius: 8px;
      padding: 20px;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <div class="box">
    <h3 style="margin-top:0; color:#1d4ed8;">max-width: 480px + width: 100%</h3>
    <p style="margin-bottom:0; color:#1e40af;">Resize the preview pane. Notice how this element shrinks gracefully on mobile screens without creating horizontal scrollbars.</p>
  </div>
</body>
</html>`,
          tips: [
            'Always pair max-width: 100% with images to ensure they never overflow their parent container.',
            'auto is the default value for both height and width.'
          ]
        }
      ]
    }
  },

  // 13. CSS Box Model
  {
    id: 'css-box-model',
    title: 'CSS Box Model',
    slug: 'css-box-model',
    summary: 'All HTML elements can be considered as boxes: Content, Padding, Border, and Margin.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'In CSS, the term "box model" is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.',
      sections: [
        {
          heading: 'Anatomy of the Box Model',
          body: 'The Box Model consists of 4 distinct layers: Content (where text and images appear), Padding (clears an area around the content), Border (a border that goes around the padding and content), Margin (clears an area outside the border).',
          code: `/* Standard Box Model Calculation:
   Total width = width + left padding + right padding + left border + right border + left margin + right margin
*/

/* Modern Reset for intuitive sizing */
*, *::before, *::after {
  box-sizing: border-box;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; background: #f8fafc; }
    .margin-layer {
      background: #fed7aa; /* Margin color */
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      font-weight: bold;
    }
    .border-layer {
      background: #fef08a; /* Border color */
      padding: 16px;
      border: 3px dashed #ca8a04;
    }
    .padding-layer {
      background: #bbf7d0; /* Padding color */
      padding: 20px;
    }
    .content-layer {
      background: #93c5fd; /* Content color */
      padding: 15px;
      color: #1e3a8a;
    }
  </style>
</head>
<body>
  <div class="margin-layer">
    Margin (External spacing)
    <div class="border-layer">
      Border (Visual boundary)
      <div class="padding-layer">
        Padding (Internal spacing)
        <div class="content-layer">
          Content (Text, Media, Child Elements)
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
          tips: [
            'box-sizing: border-box includes padding and border in an element total width and height, preventing layout breakage.',
            'Virtually all modern CSS frameworks set box-sizing: border-box globally.'
          ]
        }
      ]
    }
  },

  // 14. CSS Outline
  {
    id: 'css-outline',
    title: 'CSS Outline',
    slug: 'css-outline',
    summary: 'An outline is a line drawn outside an element border. Outline does NOT take up space.',
    readTime: '4 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out". Unlike borders, outlines do not take up space in the layout, so adding an outline does not cause layout shifts.',
      sections: [
        {
          heading: 'Outline Properties & Outline Offset',
          body: 'Properties include outline-style, outline-color, outline-width, outline-offset, and outline shorthand.',
          code: `/* Outline Shorthand: width style color */
outline: 3px solid #4f46e5;

/* Outline Offset: creates space between outline and border */
outline-offset: 6px;

/* Common Accessibility Pattern */
button:focus-visible {
  outline: 2px solid #4f46e5;
  outline-offset: 3px;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; }
    .box {
      border: 2px solid #0284c7;
      outline: 3px dashed #4f46e5;
      outline-offset: 8px;
      padding: 20px;
      border-radius: 4px;
      text-align: center;
      max-width: 350px;
    }
  </style>
</head>
<body>
  <div class="box">
    <strong>Solid Border</strong> with <strong>Dashed Outline</strong> offset by 8px. Notice the gap between them!
  </div>
</body>
</html>`,
          tips: [
            'Never set outline: none without providing an accessible alternative focus indicator for keyboard users.',
            'outline-offset allows outlines to hover away from the element boundary.'
          ]
        }
      ]
    }
  },

  // 15. CSS Text
  {
    id: 'css-text',
    title: 'CSS Text',
    slug: 'css-text',
    summary: 'Format text using color, text-align, text-decoration, text-transform, letter-spacing, and text-shadow.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'CSS offers a comprehensive suite of text formatting properties: text-color, text-align (left, right, center, justify), text-decoration (none, underline, line-through), text-transform (uppercase, lowercase, capitalize), text-indent, letter-spacing, line-height, word-spacing, and text-shadow.',
      sections: [
        {
          heading: 'Key Text Properties',
          body: 'Controlling typography is essential for digital reading comfort. Proper line-height and letter-spacing make text vastly easier to scan.',
          code: `h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

p {
  text-align: left;
  line-height: 1.7;        /* Optimum readability: 1.5 - 1.8 */
  text-decoration: none;
  word-spacing: 1px;
}

a.styled-link {
  text-decoration-line: underline;
  text-decoration-color: #4f46e5;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; background: #ffffff; }
    h2 {
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: #312e81;
      text-shadow: 2px 2px 5px rgba(99, 102, 241, 0.3);
    }
    p {
      line-height: 1.8;
      color: #334155;
      max-width: 500px;
      margin: 0 auto;
    }
    .custom-link {
      color: #4f46e5;
      text-decoration: underline;
      text-decoration-color: #818cf8;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <h2>Modern Typography</h2>
  <p>Good typography increases reading speed and comprehension. Check out this <a href="#" class="custom-link">underlined link with custom offset</a>.</p>
</body>
</html>`,
          tips: [
            'Use text-underline-offset to create stylish gaps between text and underlines.',
            'A line-height of 1.5 to 1.75 is recommended for body paragraphs by accessibility guidelines.'
          ]
        }
      ]
    }
  },

  // 16. CSS Fonts
  {
    id: 'css-fonts',
    title: 'CSS Fonts',
    slug: 'css-fonts',
    summary: 'Font families, web safe fonts, font fallbacks, font-style, font-size, Google Fonts, and font shorthand.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'Choosing the right font has a huge impact on how readers experience a website. CSS font properties define the font family, boldness, size, and the style of a text. CSS font families fall into five generic families: serif, sans-serif, monospace, cursive, and fantasy.',
      sections: [
        {
          heading: 'Font Families and Fallbacks',
          body: 'Always provide a font fallback list ending with a generic font family so the browser can choose a suitable installed font if custom fonts fail to load.',
          code: `/* Web Safe Fallback Stack */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;       /* 16px */
  font-weight: 400;      /* Regular */
  font-style: normal;
}

/* Google Font Usage */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap');

h1 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 2.25rem;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { padding: 20px; }
    .serif-box { font-family: 'Georgia', serif; font-size: 18px; color: #1e293b; margin-bottom: 12px; }
    .sans-box { font-family: system-ui, -apple-system, sans-serif; font-size: 18px; color: #4338ca; font-weight: 600; margin-bottom: 12px; }
    .mono-box { font-family: 'Courier New', Courier, monospace; font-size: 16px; color: #0284c7; background: #f0f9ff; padding: 10px; border-radius: 6px; }
  </style>
</head>
<body>
  <div class="serif-box">Serif Font (Georgia): Classic, traditional, elegant.</div>
  <div class="sans-box">Sans-Serif (system-ui): Clean, modern, highly legible.</div>
  <div class="mono-box">Monospace Font (Courier): Fixed width for code snippets.</div>
</body>
</html>`,
          tips: [
            'Use rem units for font sizes so that fonts scale proportionally with the user browser accessibility zoom settings.',
            '1rem equals the root font size, typically 16px.'
          ]
        }
      ]
    }
  },

  // 17. CSS Icons
  {
    id: 'css-icons',
    title: 'CSS Icons',
    slug: 'css-icons',
    summary: 'Easily add vector icons to your web pages using icon libraries like Font Awesome, Google Icons, or Bootstrap Icons.',
    readTime: '4 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'Icons can easily be added to your HTML page with an icon library. Common icon libraries include Font Awesome, Google Material Symbols/Icons, and Bootstrap Icons. You can style vector icons using standard CSS color, font-size, and shadow properties.',
      sections: [
        {
          heading: 'Using and Styling Vector Icons',
          body: 'Vector icons scale crisp and sharp at any screen resolution because they are treated like text characters or SVG paths.',
          code: `<!-- Link Icon Library in <head> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- HTML Icon Usage -->
<i class="fa-solid fa-heart icon-styled"></i>

<!-- CSS Styling -->
.icon-styled {
  font-size: 28px;
  color: #ef4444;
  transition: transform 0.2s;
}
.icon-styled:hover {
  transform: scale(1.2);
}`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; }
    .icon-bar { display: flex; gap: 20px; align-items: center; }
    .icon-btn {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #e0e7ff;
      color: #4f46e5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      cursor: pointer;
      border: none;
      transition: all 0.2s ease;
    }
    .icon-btn:hover {
      background: #4f46e5;
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }
  </style>
</head>
<body>
  <h3>Interactive Icon Badges</h3>
  <div class="icon-bar">
    <button class="icon-btn" title="Search">🔍</button>
    <button class="icon-btn" title="Favorites">⭐</button>
    <button class="icon-btn" title="Notifications">🔔</button>
    <button class="icon-btn" title="Settings">⚙️</button>
  </div>
</body>
</html>`,
          tips: [
            'Vector icons do not pixelate on high-DPI retina screens.',
            'Use aria-label or title attributes on icon buttons to ensure screen reader accessibility.'
          ]
        }
      ]
    }
  },

  // 18. CSS Links
  {
    id: 'css-links',
    title: 'CSS Links',
    slug: 'css-links',
    summary: 'Style links differently depending on what state they are in: a:link, a:visited, a:hover, a:active.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'Links can be styled with any CSS property (color, font-family, background, padding). Additionally, links can be styled differently depending on what state they are in: :link (unvisited), :visited (visited), :hover (mouse over), and :active (moment clicked).',
      sections: [
        {
          heading: 'The LVHA Rule & Button Links',
          body: 'To work correctly, link pseudo-classes must be ordered as LVHA: :link, :visited, :hover, :active. You can also turn any anchor tag into a button with padding and background-color.',
          code: `/* Standard Link States (LVHA order) */
a:link { color: #4f46e5; text-decoration: none; }
a:visited { color: #6b21a8; }
a:hover { color: #3730a3; text-decoration: underline; }
a:active { color: #dc2626; }

/* Link as Button */
a.btn-link {
  display: inline-block;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s;
}
a.btn-link:hover {
  background-color: #4338ca;
  text-decoration: none;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; line-height: 2; }
    .nav-link {
      color: #0284c7;
      text-decoration: none;
      font-weight: 500;
      padding: 4px 8px;
      border-radius: 4px;
      transition: all 0.2s;
    }
    .nav-link:hover {
      background-color: #e0f2fe;
      color: #0369a1;
    }
    .cta-button {
      display: inline-block;
      background-color: #4f46e5;
      color: white !important;
      padding: 10px 22px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.25);
      transition: all 0.2s;
    }
    .cta-button:hover {
      background-color: #4338ca;
      transform: translateY(-2px);
      box-shadow: 0 8px 12px -2px rgba(79, 70, 229, 0.35);
    }
  </style>
</head>
<body>
  <p>Explore our <a href="#" class="nav-link">Documentation Link</a></p>
  <p><a href="#" class="cta-button">Call to Action Button</a></p>
</body>
</html>`,
          tips: [
            'Remember LVHA: Love Fears HATE -> :link, :visited, :hover, :active.',
            'Links should always have distinct focus states for keyboard navigation.'
          ]
        }
      ]
    }
  },

  // 19. CSS Lists
  {
    id: 'css-lists',
    title: 'CSS Lists',
    slug: 'css-lists',
    summary: 'Style unordered and ordered lists: list-style-type, list-style-image, list-style-position, and list shorthand.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'In HTML, there are two main types of lists: unordered (bulleted) and ordered (numbered). The CSS list properties allow you to set different list item markers for ordered and unordered lists, set an image as marker, and adjust positioning.',
      sections: [
        {
          heading: 'List Style Types and Resetting Lists',
          body: 'Common values for list-style-type include disc, circle, square, decimal, decimal-leading-zero, lower-alpha, upper-roman, and none. Setting list-style-type: none is fundamental when building navigation menus.',
          code: `/* Unordered list styles */
ul.circle { list-style-type: circle; }
ul.square { list-style-type: square; }

/* Ordered list styles */
ol.roman { list-style-type: upper-roman; }
ol.alpha { list-style-type: lower-alpha; }

/* Navigation Bar List Reset */
ul.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .custom-list {
      list-style: none;
      padding-left: 0;
    }
    .custom-list li {
      padding: 8px 12px;
      margin-bottom: 6px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .badge {
      background: #4f46e5;
      color: white;
      border-radius: 50%;
      width: 22px;
      height: 22px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h3>Modern Custom Styled List</h3>
  <ul class="custom-list">
    <li><span class="badge">1</span> First learning milestone</li>
    <li><span class="badge">2</span> Build hands-on projects</li>
    <li><span class="badge">3</span> Deploy production application</li>
  </ul>
</body>
</html>`,
          tips: [
            'Use list-style: none; padding: 0; margin: 0; whenever creating menus, grids, or cards from unordered lists.'
          ]
        }
      ]
    }
  },

  // 20. CSS Tables
  {
    id: 'css-tables',
    title: 'CSS Tables',
    slug: 'css-tables',
    summary: 'Style HTML tables: border-collapse, table borders, zebra stripes, hoverable rows, and responsive scroll.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'The look of an HTML table can be greatly improved with CSS. Key properties include border-collapse (collapses cell borders into a single border), padding, text-align, background-color for zebra striping (:nth-child(even)), and hover effects (:hover).',
      sections: [
        {
          heading: 'Zebra Striped and Hoverable Tables',
          body: 'A production-grade table features clean cell padding, collapsed borders, subtle alternating row colors, and an interactive hover highlight.',
          code: `table {
  width: 100%;
  border-collapse: collapse; /* Essential for clean single borders */
}

th, td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

th {
  background-color: #f1f5f9;
  color: #334155;
  font-weight: 600;
}

/* Zebra Striping */
tr:nth-child(even) {
  background-color: #f8fafc;
}

/* Hover Effect */
tr:hover {
  background-color: #e0e7ff;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .table-container { overflow-x: auto; }
    table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      overflow: hidden;
    }
    th {
      background-color: #4f46e5;
      color: white;
      padding: 12px 16px;
      text-align: left;
      font-size: 14px;
    }
    td {
      padding: 12px 16px;
      border-bottom: 1px solid #e2e8f0;
      color: #334155;
      font-size: 14px;
    }
    tr:nth-child(even) { background-color: #f8fafc; }
    tr:hover { background-color: #f1f5f9; }
  </style>
</head>
<body>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Language</th>
          <th>Creator</th>
          <th>Year</th>
          <th>Primary Domain</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>CSS</td><td>Håkon Wium Lie</td><td>1996</td><td>Web Presentation</td></tr>
        <tr><td>JavaScript</td><td>Brendan Eich</td><td>1995</td><td>Web Interactivity</td></tr>
        <tr><td>TypeScript</td><td>Anders Hejlsberg</td><td>2012</td><td>Typed Scalable Apps</td></tr>
        <tr><td>Python</td><td>Guido van Rossum</td><td>1991</td><td>Data & AI</td></tr>
      </tbody>
    </table>
  </div>
</body>
</html>`,
          tips: [
            'border-collapse: collapse; eliminates the double border default look of standard HTML tables.',
            'Wrap tables in <div style="overflow-x: auto;"> to ensure graceful horizontal scrolling on small mobile screens.'
          ]
        }
      ]
    }
  }
];
