import { TutorialChapter } from '../../../types';

export const cssLayoutChapters: TutorialChapter[] = [
  // 21. CSS Display
  {
    id: 'css-display',
    title: 'CSS Display',
    slug: 'css-display',
    summary: 'The display property specifies if/how an element is displayed: block, inline, inline-block, or none.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'The display property is the most important CSS property for controlling layout. Every HTML element has a default display value depending on what type of element it is: block (takes up full width, starts on new line) or inline (takes up only necessary width, does not force new line).',
      sections: [
        {
          heading: 'Common Display Values',
          body: 'display: none hides an element and removes it from document flow. visibility: hidden hides an element but preserves its space in the layout.',
          code: `/* Display Block: Starts on new line, takes full width */
.block-el { display: block; }

/* Display Inline: Fits content, ignores top/bottom margins & height */
.inline-el { display: inline; }

/* Display Inline-Block: Sits inline but respects width, height, and padding */
.inline-block-el { display: inline-block; width: 120px; }

/* Display None: Completely removed from layout tree */
.hidden-el { display: none; }`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .box { background: #e0e7ff; color: #4338ca; padding: 10px; margin: 6px; border: 1px solid #c7d2fe; border-radius: 6px; }
    .inline-block { display: inline-block; width: 140px; text-align: center; }
  </style>
</head>
<body>
  <h3>Inline-Block Elements</h3>
  <div class="box inline-block">Item 1</div>
  <div class="box inline-block">Item 2</div>
  <div class="box inline-block">Item 3</div>
  <p>Inline-block elements flow side-by-side like words, yet obey custom widths and heights.</p>
</body>
</html>`,
          tips: [
            'display: none removes the element from the accessibility tree and screen readers.',
            'Switching an <a> tag to display: block or inline-block allows setting full padding and click targets.'
          ]
        }
      ]
    }
  },

  // 22. CSS Max-width
  {
    id: 'css-max-width',
    title: 'CSS Max-width',
    slug: 'css-max-width',
    summary: 'Prevent elements from becoming wider than a specific value to preserve responsive readability.',
    readTime: '4 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'Using max-width is much better than width when building responsive websites. If you set a fixed width: 600px;, the element causes horizontal overflow on screens smaller than 600px. Using max-width: 600px; lets the element shrink smoothly on mobile devices.',
      sections: [
        {
          heading: 'Responsive Container with max-width',
          body: 'A standard container layout combines max-width with margin: 0 auto; and width: 100% to create a responsive centered content column.',
          code: `.container {
  max-width: 1200px; /* Maximum size on desktop */
  width: 100%;       /* Fluid shrinking on phones */
  margin: 0 auto;    /* Center horizontally */
  padding: 0 16px;   /* Safe edge gutters on mobile */
  box-sizing: border-box;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; padding: 20px; background: #f8fafc; }
    .page-wrapper {
      max-width: 500px;
      margin: 0 auto;
      background: white;
      padding: 24px;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
  </style>
</head>
<body>
  <div class="page-wrapper">
    <h2 style="color: #4f46e5; margin-top:0;">Fluid Container</h2>
    <p style="color: #475569;">This card never exceeds 500px on big monitors, but fits comfortably on 320px mobile screens without overflowing.</p>
  </div>
</body>
</html>`,
          tips: [
            'Always set img { max-width: 100%; height: auto; } so pictures scale without distortion.',
            'Pair max-width with min-width when you want a flexible element with safety boundaries.'
          ]
        }
      ]
    }
  },

  // 23. CSS Position
  {
    id: 'css-position',
    title: 'CSS Position',
    slug: 'css-position',
    summary: 'The position property specifies the type of positioning method: static, relative, fixed, absolute, sticky.',
    readTime: '7 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'The position property specifies the positioning method used for an element. The five position values are: static (normal default flow), relative (positioned relative to its normal position), fixed (positioned relative to viewport), absolute (positioned relative to nearest positioned ancestor), and sticky (toggles between relative and fixed based on scroll).',
      sections: [
        {
          heading: 'Relative, Absolute, and Sticky',
          body: 'When you set position: absolute;, the element is removed from normal flow and looks for the nearest parent with position: relative;. Sticky elements stick to top: 0 once the user scrolls past them.',
          code: `/* Relative Parent */
.card-container {
  position: relative;
  width: 300px;
  height: 200px;
  background: #f1f5f9;
}

/* Absolute Child anchored to top-right of parent */
.badge-top-right {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ef4444;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}

/* Sticky Header */
header.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .parent {
      position: relative;
      width: 280px;
      height: 160px;
      background: #e0e7ff;
      border: 2px solid #818cf8;
      border-radius: 10px;
      padding: 16px;
    }
    .badge {
      position: absolute;
      top: -10px;
      right: -10px;
      background: #4f46e5;
      color: white;
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: bold;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
  </style>
</head>
<body>
  <div class="parent">
    <span class="badge">NEW</span>
    <h3 style="margin-top:0; color:#312e81;">Absolute in Relative</h3>
    <p style="color:#475569; font-size:14px;">The badge is pinned to the corner using position: absolute.</p>
  </div>
</body>
</html>`,
          tips: [
            'Elements with position: static ignore top, right, bottom, left, and z-index.',
            'Sticky positioning requires specifying at least one threshold (top, right, bottom, or left).'
          ]
        }
      ]
    }
  },

  // 24. CSS Z-index
  {
    id: 'css-z-index',
    title: 'CSS Z-index',
    slug: 'css-z-index',
    summary: 'The z-index property specifies the stack order of an element (which element appears in front).',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'When elements overlap, z-index determines which element covers the other. An element with a greater z-index value is always in front of an element with a lower value. Note: z-index only works on positioned elements (position: relative, absolute, fixed, or sticky) and flex/grid items.',
      sections: [
        {
          heading: 'Stacking Order & Stacking Context',
          body: 'Values can be positive, negative, or auto. Stacking contexts are created by properties like position with z-index, opacity < 1, transform, or filter.',
          code: `/* Background layer */
.underlay {
  position: absolute;
  z-index: 1;
}

/* Foreground layer */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999; /* Highest priority */
  background: rgba(15, 23, 42, 0.7);
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; }
    .box {
      width: 120px;
      height: 120px;
      position: absolute;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }
    .box1 { background: #4f46e5; top: 30px; left: 30px; z-index: 2; }
    .box2 { background: #0284c7; top: 70px; left: 70px; z-index: 3; }
    .box3 { background: #10b981; top: 110px; left: 110px; z-index: 1; }
  </style>
</head>
<body>
  <div class="box box1">z-index: 2</div>
  <div class="box box2">z-index: 3 (Top)</div>
  <div class="box box3">z-index: 1</div>
</body>
</html>`,
          tips: [
            'z-index does nothing if the element has position: static (the default).',
            'Organize z-indexes with semantic scale: dropdown (10), sticky (100), modal (1000), toast (2000).'
          ]
        }
      ]
    }
  },

  // 25. CSS Overflow
  {
    id: 'css-overflow',
    title: 'CSS Overflow',
    slug: 'css-overflow',
    summary: 'The overflow property controls what happens to content that is too big to fit into an area.',
    readTime: '4 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'The CSS overflow property specifies whether to clip the content or to add scrollbars when an element content is too big to fit in its specified area. Values include visible (default), hidden, scroll, and auto.',
      sections: [
        {
          heading: 'Overflow Values: hidden, scroll, auto',
          body: 'overflow: hidden cuts off overflowing content cleanly. overflow: auto adds scrollbars ONLY when the content actually exceeds dimensions.',
          code: `/* Auto scrollbar when needed */
.scroll-container {
  width: 300px;
  height: 150px;
  overflow: auto;
  border: 1px solid #cbd5e1;
}

/* Horizontal only scrolling (e.g., Code block / Data table) */
pre code {
  overflow-x: auto;
  overflow-y: hidden;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .box {
      width: 280px;
      height: 110px;
      border: 1px solid #94a3b8;
      border-radius: 6px;
      padding: 12px;
      overflow: auto;
      background: #f8fafc;
    }
  </style>
</head>
<body>
  <div class="box">
    <h4 style="margin-top:0; color:#4f46e5;">Scrollable Box (overflow: auto)</h4>
    <p>This box has a fixed height of 110px. When text exceeds the container height, scrollbars appear automatically so the reader can view all information without breaking the page layout.</p>
  </div>
</body>
</html>`,
          tips: [
            'overflow: auto is preferred over overflow: scroll because scroll forces scrollbars even when not required.',
            'overflow: clip prevents scrolling completely, offering better browser performance than hidden.'
          ]
        }
      ]
    }
  },

  // 26. CSS Float and Clear
  {
    id: 'css-float',
    title: 'CSS Float and Clear',
    slug: 'css-float',
    summary: 'Float specifies how an element should float (left/right). Clear specifies what elements can float beside.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'The CSS float property is used for positioning and formatting content, e.g. let an image float left to the text in a container. The clear property is used to control the behavior of specified elements next to floated elements.',
      sections: [
        {
          heading: 'Floating Images & The Clearfix Hack',
          body: 'When floating children, their parent container often collapses to 0 height because floated elements are out of normal document flow. The Modern Clearfix resolves this.',
          code: `/* Float image to the left */
img.float-left {
  float: left;
  margin-right: 16px;
  margin-bottom: 10px;
}

/* Clearfix Hack on parent container */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .article-box {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      background: #ffffff;
    }
    .article-box::after { content: ""; clear: both; display: table; }
    .badge-icon {
      float: left;
      width: 60px;
      height: 60px;
      background: #4f46e5;
      color: white;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      margin-right: 14px;
    }
  </style>
</head>
<body>
  <div class="article-box">
    <div class="badge-icon">⚡</div>
    <h3 style="margin-top:0;">Floated Graphic</h3>
    <p>This paragraph wraps naturally around the floated badge. The clearfix on the parent container ensures full height containment.</p>
  </div>
</body>
</html>`,
          tips: [
            'Float was historically used for full-page layouts, but Flexbox and Grid have superseded it.',
            'Float is still the gold standard for editorial text wrapping around magazine photos and drop-caps.'
          ]
        }
      ]
    }
  },

  // 27. CSS Inline-block
  {
    id: 'css-inline-block',
    title: 'CSS Inline-block',
    slug: 'css-inline-block',
    summary: 'Compared to display: inline, inline-block allows setting width and height. Compared to block, no line break is inserted.',
    readTime: '4 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'display: inline-block combines features of inline and block elements. An inline-block element sits next to other inline elements without forcing line breaks, but respects top/bottom margins, paddings, width, and height.',
      sections: [
        {
          heading: 'Inline vs. Block vs. Inline-Block',
          body: 'Inline elements do not respect width or height. Block elements force a line break before and after. Inline-block gives you the best of both worlds.',
          code: `/* Nav links with inline-block */
nav a {
  display: inline-block;
  padding: 8px 16px;
  background-color: #f1f5f9;
  color: #1e293b;
  text-decoration: none;
  border-radius: 6px;
  margin-right: 8px;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .nav-pill {
      display: inline-block;
      padding: 10px 18px;
      background: #eff6ff;
      color: #1d4ed8;
      border: 1px solid #bfdbfe;
      border-radius: 9999px;
      text-decoration: none;
      font-weight: 500;
      margin-right: 8px;
      transition: background 0.2s;
    }
    .nav-pill:hover {
      background: #3b82f6;
      color: white;
    }
  </style>
</head>
<body>
  <h3>Navigation Pills with display: inline-block</h3>
  <a href="#" class="nav-pill">Dashboard</a>
  <a href="#" class="nav-pill">Tutorials</a>
  <a href="#" class="nav-pill">Playground</a>
  <a href="#" class="nav-pill">Profile</a>
</body>
</html>`,
          tips: [
            'Notice that HTML whitespace between inline-block tags creates a small 4px visual gap by default.',
            'Flexbox (display: flex) eliminates this whitespace gap cleanly.'
          ]
        }
      ]
    }
  },

  // 28. CSS Align
  {
    id: 'css-align',
    title: 'CSS Align',
    slug: 'css-align',
    summary: 'Horizontally and vertically center text, block elements, images, and containers in CSS.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'Centering in CSS used to be notoriously tricky. Today there are simple standard techniques: text-align: center for text, margin: 0 auto for blocks, and display: flex; align-items: center; justify-content: center; for perfect vertical and horizontal centering.',
      sections: [
        {
          heading: 'Modern Perfect Centering',
          body: 'Here are the modern methods to center elements both horizontally and vertically:',
          code: `/* Method 1: Flexbox (Easiest & Most Popular) */
.flex-center {
  display: flex;
  justify-content: center; /* Horizontal */
  align-items: center;     /* Vertical */
}

/* Method 2: Grid Place-items */
.grid-center {
  display: grid;
  place-items: center;
}

/* Method 3: Absolute transform */
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .center-stage {
      height: 180px;
      background: #f8fafc;
      border: 2px dashed #cbd5e1;
      border-radius: 12px;
      display: grid;
      place-items: center; /* 1-line vertical & horizontal centering */
    }
    .badge {
      background: #4f46e5;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);
    }
  </style>
</head>
<body>
  <div class="center-stage">
    <div class="badge">Centered with display: grid; place-items: center;</div>
  </div>
</body>
</html>`,
          tips: [
            'display: grid; place-items: center; is the shortest modern way to center anything in CSS.'
          ]
        }
      ]
    }
  },

  // 29. CSS Combinators
  {
    id: 'css-combinators',
    title: 'CSS Combinators',
    slug: 'css-combinators',
    summary: 'Explain the relationship between selectors: Descendant, Child (>), Adjacent Sibling (+), and General Sibling (~).',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'A CSS combinator explains the relationship between selectors. CSS selectors can contain more than one simple selector. Between the simple selectors, we can include a combinator: space (descendant), > (child), + (adjacent sibling), ~ (general sibling).',
      sections: [
        {
          heading: 'The 4 Combinators',
          body: 'Descendant selector matches all matching elements inside parent. Child selector (>) selects only direct children. Adjacent sibling (+) selects the element directly after. General sibling (~) selects all siblings after.',
          code: `/* 1. Descendant Selector (space) */
div p { color: #334155; }

/* 2. Child Selector (>) - Direct children only */
div > p { font-weight: bold; }

/* 3. Adjacent Sibling Selector (+) - Directly following element */
h2 + p { margin-top: 0; }

/* 4. General Sibling Selector (~) - Any following sibling */
h2 ~ p { font-size: 14px; }`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    /* Direct child selector */
    .parent > p {
      color: #4f46e5;
      font-weight: bold;
    }
    /* Adjacent sibling: first p right after h3 */
    h3 + p {
      background-color: #fef08a;
      padding: 6px;
    }
  </style>
</head>
<body>
  <h3>Combinator Demonstration</h3>
  <p>Adjacent sibling paragraph (highlighted yellow!).</p>
  <div class="parent">
    <p>Direct child paragraph (bold indigo).</p>
    <div>
      <p>Nested grandchild (not direct child).</p>
    </div>
  </div>
</body>
</html>`,
          tips: [
            'Use the child selector (>) when you do not want styles leaking into deeply nested child components.'
          ]
        }
      ]
    }
  },

  // 30. CSS Pseudo-classes
  {
    id: 'css-pseudo-classes',
    title: 'CSS Pseudo-classes',
    slug: 'css-pseudo-classes',
    summary: 'A pseudo-class is used to define a special state of an element (:hover, :focus, :first-child, :nth-child, :not).',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'A pseudo-class is used to style an element when a user mouses over it, when an element gains focus, when a link has been visited, or based on structural position in the DOM hierarchy.',
      sections: [
        {
          heading: 'State and Structural Pseudo-classes',
          body: 'Common pseudo-classes include :hover, :focus, :active, :checked, :disabled, :first-child, :last-child, :nth-child(n), and :not(selector).',
          code: `/* Interactive states */
button:hover { background-color: #4338ca; }
input:focus { border-color: #4f46e5; outline: 2px solid #c7d2fe; }

/* Structural selectors */
li:first-child { border-top: none; }
li:last-child { border-bottom: none; }
tr:nth-child(even) { background-color: #f8fafc; }

/* Negation pseudo-class */
button:not(.primary) { background-color: #e2e8f0; color: #1e293b; }`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .interactive-input {
      padding: 10px 14px;
      border: 2px solid #cbd5e1;
      border-radius: 6px;
      font-size: 15px;
      transition: all 0.2s;
    }
    .interactive-input:focus {
      border-color: #4f46e5;
      outline: none;
      box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
    }
    ul { list-style: none; padding: 0; }
    li { padding: 8px; border-bottom: 1px solid #e2e8f0; }
    li:nth-child(odd) { background-color: #f1f5f9; }
  </style>
</head>
<body>
  <h3>Pseudo-classes Demo</h3>
  <input type="text" class="interactive-input" placeholder="Click here to test :focus state" />
  <h4 style="margin-top:20px;">:nth-child(odd) List</h4>
  <ul>
    <li>Item 1 (Odd)</li>
    <li>Item 2 (Even)</li>
    <li>Item 3 (Odd)</li>
    <li>Item 4 (Even)</li>
  </ul>
</body>
</html>`,
          tips: [
            ':nth-child(2n+1) targets odd elements, while :nth-child(2n) targets even.',
            ':focus-visible triggers focus styles only when using keyboard navigation, sparing mouse clickers.'
          ]
        }
      ]
    }
  },

  // 31. CSS Pseudo-elements
  {
    id: 'css-pseudo-elements',
    title: 'CSS Pseudo-elements',
    slug: 'css-pseudo-elements',
    summary: 'Style specified parts of an element: ::before, ::after, ::first-line, ::first-letter, ::selection.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'A CSS pseudo-element is used to style specified parts of an element. For example, it can be used to style the first letter or line of an element, insert content before or after the content of an element, or style highlighted text selections.',
      sections: [
        {
          heading: '::before, ::after, and ::selection',
          body: '::before and ::after generate cosmetic virtual elements inside a tag without cluttering the HTML. The content property is required.',
          code: `/* Insert decorative icon before heading */
h2::before {
  content: "✨ ";
}

/* Custom text selection highlight */
::selection {
  background-color: #4f46e5;
  color: #ffffff;
}

/* Stylish Drop Cap */
p.intro::first-letter {
  font-size: 2.5rem;
  font-weight: bold;
  float: left;
  line-height: 1;
  margin-right: 8px;
  color: #4f46e5;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    ::selection { background: #4f46e5; color: white; }
    .quote {
      position: relative;
      font-style: italic;
      padding: 10px 20px;
      background: #f8fafc;
      border-left: 4px solid #4f46e5;
      border-radius: 4px;
    }
    .quote::before {
      content: "“";
      font-size: 40px;
      color: #818cf8;
      vertical-align: -10px;
      line-height: 0;
    }
    .quote::after {
      content: "”";
      font-size: 40px;
      color: #818cf8;
      vertical-align: -10px;
      line-height: 0;
    }
  </style>
</head>
<body>
  <h3>Pseudo-elements Demo</h3>
  <div class="quote">The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.</div>
  <p style="margin-top:16px; color:#64748b; font-size:14px;">Select this text with your mouse to test custom <code>::selection</code> styling!</p>
</body>
</html>`,
          tips: [
            'Notice double colons (::) denote pseudo-elements, while single colons (:) denote pseudo-classes in CSS3.',
            '::before and ::after must specify content: "" even if the content is empty.'
          ]
        }
      ]
    }
  },

  // 32. CSS Opacity
  {
    id: 'css-opacity',
    title: 'CSS Opacity',
    slug: 'css-opacity',
    summary: 'The opacity property specifies the transparency of an element. Contrast opacity with rgba() colors.',
    readTime: '4 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'The opacity property can take a value from 0.0 (completely transparent) to 1.0 (completely opaque). Note: When using opacity, all child elements also inherit the transparency. If you only want a translucent background without fading child text, use rgba() or hsla() instead.',
      sections: [
        {
          heading: 'Opacity vs. RGBA Transparency',
          body: 'opacity applies to the whole element including text. RGBA applies solely to the background color, keeping text 100% crisp and readable.',
          code: `/* Whole element is 60% transparent (including child text) */
.transparent-card {
  opacity: 0.6;
}

/* ONLY the background is transparent (Text remains solid) */
.solid-text-card {
  background-color: rgba(79, 70, 229, 0.15);
  color: #1e1b4b; /* 100% opaque text */
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; background: #f8fafc; }
    .box1 { background: #4f46e5; color: white; opacity: 0.5; padding: 16px; border-radius: 8px; margin-bottom: 12px; }
    .box2 { background: rgba(79, 70, 229, 0.2); color: #312e81; font-weight: bold; padding: 16px; border-radius: 8px; border: 1px solid #4f46e5; }
  </style>
</head>
<body>
  <div class="box1">opacity: 0.5 (Text is also faded)</div>
  <div class="box2">background: rgba(...) (Text stays crisp and solid)</div>
</body>
</html>`,
          tips: [
            'Always prefer rgba() or hex alpha (#rrggbbaa) for containers so text contrast ratios meet WCAG accessibility standards.'
          ]
        }
      ]
    }
  },

  // 33. CSS Navigation Bar
  {
    id: 'css-navbar',
    title: 'CSS Navigation Bar',
    slug: 'css-navbar',
    summary: 'Build clean vertical and horizontal navigation bars with CSS.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'Having easy-to-use navigation is important for any website. With CSS you can transform basic HTML lists into beautiful horizontal navigation bars, complete with active link indicators, hover animations, and fixed-to-top docking.',
      sections: [
        {
          heading: 'Horizontal Navigation Bar',
          body: 'By removing bullets from <ul> and using flexbox or inline-block, we create a responsive navigation bar.',
          code: `ul.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
}

ul.navbar li a {
  display: block;
  color: #334155;
  padding: 14px 20px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

ul.navbar li a:hover {
  color: #4f46e5;
  background-color: #f8fafc;
}

ul.navbar li a.active {
  color: #4f46e5;
  border-bottom: 2px solid #4f46e5;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; background: #f8fafc; }
    .nav {
      background: white;
      border-bottom: 1px solid #e2e8f0;
      padding: 0 20px;
      display: flex;
      gap: 10px;
    }
    .nav a {
      color: #64748b;
      text-decoration: none;
      padding: 16px 14px;
      font-size: 14px;
      font-weight: 600;
      position: relative;
    }
    .nav a:hover { color: #4f46e5; }
    .nav a.active {
      color: #4f46e5;
      border-bottom: 2px solid #4f46e5;
    }
  </style>
</head>
<body>
  <div class="nav">
    <a href="#" class="active">Home</a>
    <a href="#">Tutorials</a>
    <a href="#">Exercises</a>
    <a href="#">References</a>
  </div>
  <div style="padding: 24px;">
    <h2>Navigation Bar Component</h2>
    <p>A clean, modern top navigation bar with active indicators.</p>
  </div>
</body>
</html>`,
          tips: [
            'Use display: flex on the navbar container for easy alignment and responsive wrapping.',
            'Use position: sticky; top: 0; to keep the navbar in view while scrolling.'
          ]
        }
      ]
    }
  },

  // 34. CSS Dropdowns
  {
    id: 'css-dropdowns',
    title: 'CSS Dropdowns',
    slug: 'css-dropdowns',
    summary: 'Create hoverable and clickable dropdown menus with pure CSS.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'Create a hoverable dropdown with pure CSS. The dropdown container uses position: relative, while the dropdown menu uses position: absolute and display: none. When the user hovers over the container, display: block reveals the menu.',
      sections: [
        {
          heading: 'Pure CSS Dropdown Anatomy',
          body: 'The dropdown content sits hidden beneath the trigger button and becomes visible upon hover using .dropdown:hover .dropdown-content { display: block; }.',
          code: `.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  z-index: 50;
}

.dropdown:hover .dropdown-content {
  display: block;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; }
    .dropdown { position: relative; display: inline-block; }
    .dropbtn {
      background-color: #4f46e5;
      color: white;
      padding: 10px 18px;
      font-size: 14px;
      font-weight: 600;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #ffffff;
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      z-index: 1;
      overflow: hidden;
    }
    .dropdown-content a {
      color: #334155;
      padding: 10px 14px;
      text-decoration: none;
      display: block;
      font-size: 14px;
    }
    .dropdown-content a:hover { background-color: #f1f5f9; color: #4f46e5; }
    .dropdown:hover .dropdown-content { display: block; }
  </style>
</head>
<body>
  <div class="dropdown">
    <button class="dropbtn">Hover Me ▼</button>
    <div class="dropdown-content">
      <a href="#">HTML Lessons</a>
      <a href="#">CSS Mastery</a>
      <a href="#">JavaScript Core</a>
    </div>
  </div>
</body>
</html>`,
          tips: [
            'Add a small invisible padding bridge or top: 100% so the mouse does not lose hover contact when traveling down to the menu.'
          ]
        }
      ]
    }
  },

  // 35. CSS Image Gallery
  {
    id: 'css-image-gallery',
    title: 'CSS Image Gallery',
    slug: 'css-image-gallery',
    summary: 'Build responsive thumbnail image galleries using CSS Grid and Flexbox.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'CSS can be used to create responsive image galleries where images dynamically reorganize into 1, 2, 3, or 4 columns depending on screen width.',
      sections: [
        {
          heading: 'Responsive Grid Gallery',
          body: 'With CSS grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));, the gallery automatically responds without tedious manual media queries.',
          code: `.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.gallery-item {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 14px;
    }
    .card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      overflow: hidden;
      text-align: center;
      padding-bottom: 10px;
    }
    .img-box {
      height: 100px;
      background: linear-gradient(135deg, #4f46e5, #0284c7);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
    }
    .title { font-size: 13px; font-weight: bold; margin-top: 8px; color: #334155; }
  </style>
</head>
<body>
  <h3>Responsive Image Cards</h3>
  <div class="gallery">
    <div class="card"><div class="img-box">🖼️ 1</div><div class="title">Alpine Peaks</div></div>
    <div class="card"><div class="img-box">🌊 2</div><div class="title">Ocean Waves</div></div>
    <div class="card"><div class="img-box">🌲 3</div><div class="title">Pine Forest</div></div>
  </div>
</body>
</html>`,
          tips: [
            'repeat(auto-fit, minmax(...)) dynamically adjusts the column count according to viewport width.'
          ]
        }
      ]
    }
  },

  // 36. CSS Image Sprites
  {
    id: 'css-image-sprites',
    title: 'CSS Image Sprites',
    slug: 'css-image-sprites',
    summary: 'Combine multiple images into a single master image to dramatically speed up page load times.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'An image sprite is a collection of images put into a single image file. A web page with lots of images can take a long time to load and makes multiple HTTP requests to the server. Using image sprites reduces server requests and bandwidth.',
      sections: [
        {
          heading: 'How Image Sprites Work',
          body: 'You define a fixed width and height on an element, and shift the sprite behind it using negative background-position coordinates.',
          code: `/* Master sprite element */
.sprite-icon {
  width: 32px;
  height: 32px;
  background-image: url('icons-sprite.png');
  background-repeat: no-repeat;
  display: inline-block;
}

/* Specific icon coordinates */
.icon-home { background-position: 0 0; }
.icon-mail { background-position: -32px 0; }
.icon-user { background-position: -64px 0; }`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .sprite-nav { display: flex; gap: 12px; }
    .icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.2s;
    }
    .icon:hover {
      background: #4f46e5;
      color: white;
    }
  </style>
</head>
<body>
  <h3>Image Sprite Principle</h3>
  <p>Single resource delivery with localized display coordinates.</p>
  <div class="sprite-nav">
    <div class="icon">🏠</div>
    <div class="icon">✉️</div>
    <div class="icon">⚙️</div>
  </div>
</body>
</html>`,
          tips: [
            'Modern web development also achieves sprite efficiency using SVG sprite sheets (<use href="#icon-id"/>).'
          ]
        }
      ]
    }
  },

  // 37. CSS Attribute Selectors
  {
    id: 'css-attr-selectors',
    title: 'CSS Attribute Selectors',
    slug: 'css-attr-selectors',
    summary: 'Style HTML elements based on attributes: [attr], [attr=val], [attr^=val], [attr$=val], [attr*=val].',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'CSS attribute selectors allow you to target HTML tags based on the presence or value of their attributes, such as styling input types, external links, or specific file format downloads.',
      sections: [
        {
          heading: 'Attribute Selector Syntax',
          body: 'Common attribute matching operators: [attr] (has attribute), [attr="value"] (exact), [attr~="value"] (space-separated word), [attr^="value"] (starts with), [attr$="value"] (ends with), [attr*="value"] (contains substring).',
          code: `/* Target external links opening in new tab */
a[target="_blank"] {
  padding-right: 18px;
  background: url('external-icon.svg') no-repeat right center;
}

/* Target specific input types */
input[type="text"], input[type="email"] {
  border: 1px solid #cbd5e1;
  padding: 8px 12px;
}

/* Target PDF download links */
a[href$=".pdf"]::after {
  content: " (PDF)";
  font-size: 11px;
  color: #ef4444;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    input[type="text"] {
      border: 2px solid #94a3b8;
      border-radius: 6px;
      padding: 8px;
    }
    input[type="submit"] {
      background-color: #4f46e5;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
    }
    a[href^="https://"] {
      color: #0284c7;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h3>Attribute Selectors</h3>
  <input type="text" placeholder="Styled by [type='text']" />
  <input type="submit" value="Submit" />
  <p><a href="https://google.com" target="_blank">Secure HTTPS Link</a> styled by <code>[href^="https://"]</code></p>
</body>
</html>`,
          tips: [
            '[attribute^="value"] matches strings starting with the value.',
            '[attribute$="value"] matches strings ending with the value.'
          ]
        }
      ]
    }
  },

  // 38. CSS Forms
  {
    id: 'css-forms',
    title: 'CSS Forms',
    slug: 'css-forms',
    summary: 'Style beautiful form controls: text inputs, selects, textareas, submit buttons, and focus rings.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'Default browser form controls look dated and inconsistent across operating systems. With CSS you can style modern text fields, padding, animated focus rings, custom select boxes, and responsive input button groups.',
      sections: [
        {
          heading: 'Styling Modern Form Inputs',
          body: 'Use width: 100%, generous padding, subtle border radius, and explicit :focus styles to make forms welcoming.',
          code: `input[type="text"], input[type="email"], select {
  width: 100%;
  padding: 12px 16px;
  margin: 8px 0 16px;
  display: inline-block;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 15px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
  border-color: #4f46e5;
  outline: none;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; background: #f8fafc; }
    .form-card {
      max-width: 360px;
      margin: 0 auto;
      background: white;
      padding: 24px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
    label { font-size: 13px; font-weight: 600; color: #475569; }
    input[type="text"] {
      width: 100%;
      padding: 10px 12px;
      margin: 6px 0 16px 0;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      box-sizing: border-box;
      outline: none;
    }
    input[type="text"]:focus {
      border-color: #4f46e5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
    }
    button {
      width: 100%;
      background: #4f46e5;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
    }
    button:hover { background: #4338ca; }
  </style>
</head>
<body>
  <div class="form-card">
    <label>Full Name</label>
    <input type="text" placeholder="e.g. John Doe" />
    <button>Save Changes</button>
  </div>
</body>
</html>`,
          tips: [
            'Always maintain sufficient contrast between placeholder text and input backgrounds.',
            'Setting box-sizing: border-box on form controls prevents padding from forcing inputs outside their cards.'
          ]
        }
      ]
    }
  },

  // 39. CSS Counters
  {
    id: 'css-counters',
    title: 'CSS Counters',
    slug: 'css-counters',
    summary: 'CSS counters are like variables maintained by CSS whose values can be incremented by CSS rules.',
    readTime: '5 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'CSS counters let you adjust the appearance of content based on its placement in the document. You initialize a counter with counter-reset, increment it with counter-increment, and output its number with the counter() function in content.',
      sections: [
        {
          heading: 'Automated Numbering with Counters',
          body: 'Counters are ideal for numbering sections (Section 1, Section 2), step guides, or sub-sections (2.1, 2.2).',
          code: `/* Initialize counter on parent */
body {
  counter-reset: section;
}

/* Increment counter on each h2 */
h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
  color: #4f46e5;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; counter-reset: step-counter; }
    .step {
      margin-bottom: 12px;
      padding: 12px;
      background: #f8fafc;
      border-left: 3px solid #4f46e5;
      border-radius: 4px;
    }
    .step::before {
      counter-increment: step-counter;
      content: "Step " counter(step-counter) ". ";
      font-weight: bold;
      color: #4f46e5;
    }
  </style>
</head>
<body>
  <h3>CSS Automated Step Counter</h3>
  <div class="step">Initialize your git repository</div>
  <div class="step">Create project structure</div>
  <div class="step">Deploy to staging server</div>
</body>
</html>`,
          tips: [
            'Counters can be nested inside each other to create multi-level numbering like 1.1, 1.2, 1.2.1.'
          ]
        }
      ]
    }
  },

  // 40. CSS Website Layout
  {
    id: 'css-website-layout',
    title: 'CSS Website Layout',
    slug: 'css-website-layout',
    summary: 'A standard website layout consists of a Header, Navigation Bar, Main Content Area, Sidebar, and Footer.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'A website often has 5 standard visual regions: Header (top branding), Navigation Bar (links), Content (primary body articles), Sidebar (secondary links/ads), and Footer (copyright & sitemap). CSS Grid and Flexbox make implementing this classic layout clean and responsive.',
      sections: [
        {
          heading: 'Classic Layout Structure',
          body: 'Here is how modern CSS structures the full website layout blueprint:',
          code: `.layout-grid {
  display: grid;
  grid-template-areas:
    "header header"
    "nav nav"
    "main sidebar"
    "footer footer";
  grid-template-columns: 1fr 280px;
  gap: 16px;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; background: #f1f5f9; }
    .header { background: #4f46e5; color: white; padding: 16px; text-align: center; border-radius: 6px; }
    .nav { background: #334155; color: white; padding: 10px; margin: 8px 0; border-radius: 6px; text-align: center; }
    .content-row { display: flex; gap: 8px; margin-bottom: 8px; }
    .main { flex: 3; background: white; padding: 20px; border-radius: 6px; }
    .aside { flex: 1; background: #e2e8f0; padding: 20px; border-radius: 6px; }
    .footer { background: #0f172a; color: white; text-align: center; padding: 12px; border-radius: 6px; }
  </style>
</head>
<body>
  <div class="header"><h3>Website Header</h3></div>
  <div class="nav">Navigation Links: Home | Docs | Contact</div>
  <div class="content-row">
    <div class="main"><h4>Main Article Content</h4><p>Primary focus of the web page.</p></div>
    <div class="aside"><h4>Sidebar</h4><p>Related widgets.</p></div>
  </div>
  <div class="footer">&copy; 2026 DevAura Platform</div>
</body>
</html>`,
          tips: [
            'On mobile screens, use media queries or flex-direction: column to stack sidebars below the main content.'
          ]
        }
      ]
    }
  },

  // 41. CSS Units
  {
    id: 'css-units',
    title: 'CSS Units',
    slug: 'css-units',
    summary: 'CSS has several units for expressing length: Absolute (px, pt, cm) and Relative (rem, em, %, vw, vh).',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'CSS has two types of lengths: Absolute units (px, cm, mm, in, pt, pc) and Relative units (rem, em, %, vw, vh, vmin, vmax, ch). Relative units are recommended for responsive design because they adapt to screen resolution and user accessibility preferences.',
      sections: [
        {
          heading: 'Relative Units: rem vs. em vs. vw/vh',
          body: 'rem is relative to the root <html> font-size (typically 16px). em is relative to the current element font-size. vw/vh represent 1% of viewport width and height.',
          code: `/* rem: Predictable root-based sizing */
h1 { font-size: 2rem; }   /* 2 * 16px = 32px */
p { font-size: 1rem; }     /* 16px */

/* Viewport units: Full screen hero */
.hero-section {
  width: 100vw;
  height: 100vh;
}

/* Percentage: Relative to parent width */
.col-half {
  width: 50%;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .rem-box { font-size: 1.25rem; color: #4f46e5; font-weight: bold; }
    .percent-bar { width: 75%; background: #0284c7; color: white; padding: 8px 12px; border-radius: 6px; margin: 10px 0; }
  </style>
</head>
<body>
  <div class="rem-box">1.25rem Font Size (20px)</div>
  <div class="percent-bar">75% Width Bar</div>
</body>
</html>`,
          tips: [
            'Use rem for font sizes and margins so they scale when visually impaired users zoom in their browser.',
            'Use vw and vh for full-bleed background banners and modal dialog overlays.'
          ]
        }
      ]
    }
  },

  // 42. CSS Specificity
  {
    id: 'css-specificity',
    title: 'CSS Specificity',
    slug: 'css-specificity',
    summary: 'Specificity determines which CSS rule is applied by browsers when multiple rules match an element.',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'If two or more conflicting CSS rules point to the same element, the browser follows rules of specificity to determine which one wins. Think of specificity as a score ranking: Inline styles (1000) > ID selectors (100) > Class/Attribute/Pseudo-class (10) > Elements/Pseudo-elements (1).',
      sections: [
        {
          heading: 'Specificity Hierarchy',
          body: 'Specificity calculates as (Inline, IDs, Classes, Elements). For instance, #main .nav a has specificity 0-1-1-1 (111 points), beating .nav a with 0-0-1-1 (11 points).',
          code: `/* Specificity 0-0-0-1 (Score: 1) */
p { color: #64748b; }

/* Specificity 0-0-1-0 (Score: 10) - Wins over element! */
.intro-text { color: #0284c7; }

/* Specificity 0-1-0-0 (Score: 100) - Wins over class! */
#hero-lead { color: #4f46e5; }

/* Specificity 1-0-0-0 (Score: 1000) - Inline wins over ID! */
/* <p id="hero-lead" style="color: #dc2626;"> */`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Lower specificity */
    p { color: #94a3b8; }
    /* Higher specificity */
    .special { color: #0284c7; }
    /* Highest specificity */
    #highlight { color: #4f46e5; font-weight: bold; }
  </style>
</head>
<body>
  <p>Standard paragraph (Element selector: Grey)</p>
  <p class="special">Special paragraph (Class selector: Sky Blue)</p>
  <p id="highlight" class="special">ID highlighted paragraph (ID selector: Indigo)</p>
</body>
</html>`,
          tips: [
            'When two rules have identical specificity, the rule written latest in the CSS file wins.',
            'Universal selector (*), combinators (+, >, ~), and :where() have 0 specificity.'
          ]
        }
      ]
    }
  },

  // 43. CSS !important
  {
    id: 'css-important',
    title: 'CSS !important',
    slug: 'css-important',
    summary: 'The !important rule overrides all previous styling rules for that specific property.',
    readTime: '4 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'The !important rule in CSS is used to add more importance to a property/value than normal. In fact, if you use !important, it will override ALL previous styling rules for that specific property on that element, even inline styles.',
      sections: [
        {
          heading: 'When to Use and When to Avoid !important',
          body: 'While powerful, overusing !important makes debugging difficult and breaks the natural cascading nature of CSS. It is best reserved for global utility classes (like .hidden { display: none !important; }).',
          code: `/* Normal rule */
p {
  color: #334155;
}

/* Forced override */
.alert-text {
  color: #ef4444 !important;
}

/* Common utility override */
.u-hidden {
  display: none !important;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    #unique-box { color: #4f46e5; }
    .override-box { color: #ef4444 !important; }
  </style>
</head>
<body>
  <div id="unique-box" class="override-box">
    Even though ID #unique-box has higher specificity, <code>!important</code> on .override-box forces this red color.
  </div>
</body>
</html>`,
          tips: [
            'Always look for ways to use higher specificity before resorting to !important.',
            'The only way to override an !important rule is with another !important rule with higher specificity.'
          ]
        }
      ]
    }
  },

  // 44. CSS Math Functions
  {
    id: 'css-math-functions',
    title: 'CSS Math Functions',
    slug: 'css-math-functions',
    summary: 'Perform dynamic calculations with CSS math functions: calc(), min(), max(), and clamp().',
    readTime: '6 min',
    category: 'CSS Tutorial',
    content: {
      overview: 'CSS math functions allow mathematical expressions to be used as property values: calc() performs mathematical calculations mixing units (like 100% - 20px), max() selects the largest value, min() selects the smallest value, and clamp() locks a value between an upper and lower bound.',
      sections: [
        {
          heading: 'Fluid Typography with clamp()',
          body: 'clamp(MIN, PREFERRED, MAX) is the modern gold standard for fluid typography and responsive sizing without media queries.',
          code: `/* Dynamic width with calc() */
.sidebar-layout {
  width: calc(100% - 260px);
}

/* Fluid Responsive Font Size */
/* Min: 1.5rem, Preferred: 4vw, Max: 3rem */
h1.fluid-title {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Responsive padding */
.card {
  padding: max(16px, 2vw);
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .fluid-heading {
      font-size: clamp(1.2rem, 3.5vw, 2.5rem);
      color: #4f46e5;
      margin: 0;
    }
    .calc-box {
      width: calc(100% - 40px);
      background: #e0f2fe;
      color: #0369a1;
      padding: 16px;
      border-radius: 8px;
      margin-top: 14px;
    }
  </style>
</head>
<body>
  <h2 class="fluid-heading">Fluid Title with clamp()</h2>
  <div class="calc-box">calc(100% - 40px) Width Container</div>
</body>
</html>`,
          tips: [
            'In calc(), you must always put whitespace around addition (+) and subtraction (-) operators: calc(100% - 20px).',
            'clamp() eliminates the need for dozens of repetitive media query breakpoints.'
          ]
        }
      ]
    }
  }
];
