import { TutorialChapter } from '../../../types';

export const htmlBasicsChapters: TutorialChapter[] = [
  // 1. HTML HOME
  {
    id: 'html-home',
    title: 'HTML HOME',
    slug: 'html-home',
    summary: 'The standard markup language for Web pages. Learn HTML to build and structure your own websites.',
    readTime: '5 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it! This tutorial contains hundreds of HTML examples with our online "Try it Yourself" editor, where you can edit the HTML and click on a button to view the result.',
      sections: [
        {
          heading: '1. What is HTML and Why Learn It?',
          body: `HTML stands for **HyperText Markup Language**. It is the standard code used by every website on the Internet to define structure and content.

• **HyperText:** Links that connect web pages to one another, either within a single website or between different websites.
• **Markup Language:** A computer language that uses tags to annotate text, images, and layout so web browsers know how to display them.
• **Universal Standard:** Every web page you visit (Google, YouTube, GitHub, Wikipedia) is rendered using HTML at its core.

> **Key Takeaway:** You cannot build web applications or front-end user interfaces without understanding HTML fundamentals. It is step 1 in every developer's journey.`,
          code: `<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Welcome to Web Development</h1>
  <p>HTML is the skeleton of the entire web!</p>
</body>
</html>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; background: #ffffff; color: #0f172a; }
    h1 { color: #4f46e5; margin-bottom: 8px; }
    p { color: #475569; font-size: 16px; }
    .badge { display: inline-block; background: #e0e7ff; color: #4338ca; padding: 4px 12px; border-radius: 9999px; font-weight: bold; font-size: 12px; }
  </style>
</head>
<body>
  <span class="badge">Lesson 01</span>
  <h1>Welcome to DevAura HTML</h1>
  <p>Edit this text in the editor and click Run to see live changes instantly!</p>
</body>
</html>`,
          tips: [
            'HTML provides the structure of web pages; CSS handles styling, and JavaScript adds interactivity.',
            'HTML is not a programming language—it is a declarative markup language.'
          ]
        },
        {
          heading: '2. Live Interactive Learning with "Try It Yourself"',
          body: `Every example in this tutorial comes equipped with our live in-browser code runner. 

You can modify tags, change attributes, add text, and preview the output instantaneously without installing any software on your computer.`,
          code: `<h1>Try Modifying This Heading</h1>
<p>Change this paragraph text, then click "Try It Yourself" to run live.</p>
<button style="background:#4f46e5;color:white;padding:8px 16px;border-radius:6px;border:none;">
  Click Me
</button>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;padding:24px;">
  <h2 style="color:#0284c7;">Interactive Sandbox</h2>
  <p>Try adding a new paragraph below this line:</p>
  <p style="color:#10b981;font-weight:bold;">✨ Add your own HTML code here!</p>
</body>
</html>`,
          tips: [
            'Use the "Try It Yourself" button on any code card to launch the sandbox.',
            'You can press Ctrl + Enter inside the editor to quickly run your code.'
          ]
        },
        {
          heading: '3. The Three Core Pillars of the Web',
          body: `Modern web development relies on three foundational technologies working together seamlessly:

1. **HTML (Structure):** Defines headings, paragraphs, images, tables, forms, and layout blocks.
2. **CSS (Presentation):** Controls colors, fonts, spacing, responsive flexbox/grid layouts, and animations.
3. **JavaScript (Behavior):** Powers dynamic logic, API fetching, animations, form validation, and state changes.`,
          code: `<!-- 1. HTML defines the button -->
<button id="myBtn" style="background:#4f46e5;color:#fff;padding:8px 16px;border-radius:6px;border:none;">
  Click Me
</button>

<!-- 2. JavaScript handles the click behavior -->
<script>
  document.getElementById("myBtn").onclick = function() {
    alert("Hello from JavaScript!");
  };
</script>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Master HTML first before moving on to CSS and JavaScript.',
            'Clean semantic HTML is vital for search engine rankings and screen-reader accessibility.'
          ]
        }
      ]
    }
  },

  // 2. HTML Introduction
  {
    id: 'html-intro',
    title: 'HTML Introduction',
    slug: 'html-intro',
    summary: 'What is HTML? What is an element? Document structure, web browsers, and the history of HTML.',
    readTime: '6 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages. HTML describes the structure of a Web page and consists of a series of elements that tell the browser how to display the content.',
      sections: [
        {
          heading: '1. What is an HTML Element?',
          body: `An HTML element is everything from the start tag to the end tag:

• **Start Tag:** Indicates where the element begins (e.g., \`<h1>\`, \`<p>\`, \`<a>\`).
• **Element Content:** The actual text, media, or child elements placed inside.
• **End Tag:** Indicates where the element ends (e.g., \`</h1>\`, \`</p>\`, \`</a>\`). Notice the forward slash \`/\`.

> **Syntax Rule:** \`<tagname> Content goes here... </tagname>\``,
          code: `<h1>This is a Top-Level Heading</h1>
<p>This is a standard text paragraph.</p>
<a href="https://devaura.dev">This is a hyperlink</a>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Some HTML elements have no content and no end tag (e.g., <br>, <img>, <hr>). These are called "Empty" or "Void" elements.',
            'Always remember the forward slash in closing tags!'
          ]
        },
        {
          heading: '2. Anatomy of a Standard HTML5 Document',
          body: `Every valid HTML5 webpage follows a standard boilerplate structure:

• \`<!DOCTYPE html>\` — Informs the browser that the document is written in HTML5.
• \`<html lang="en">\` — The root element of the entire page; \`lang\` defines primary language.
• \`<head>\` — Holds metadata, page title, character encoding, and stylesheet links (not visible to visitors).
• \`<body>\` — Contains all visible content: text, images, videos, tables, and buttons.`,
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph content.</p>
</body>
</html>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Structure Demo</title>
</head>
<body style="font-family:sans-serif;padding:20px;">
  <h1 style="color:#4f46e5;">Inside the &lt;body&gt; Tag</h1>
  <p>Only tags inside &lt;body&gt; are rendered on the screen!</p>
</body>
</html>`,
          tips: [
            'Always include <!DOCTYPE html> at the very first line of your HTML files.',
            'The <meta charset="UTF-8"> tag ensures characters from all human languages display correctly.'
          ]
        },
        {
          heading: '3. How Web Browsers Read and Render HTML',
          body: `Web browsers like Google Chrome, Apple Safari, Microsoft Edge, and Mozilla Firefox do not display HTML tags directly. 

Instead, browsers read the tags to construct the **DOM (Document Object Model)** tree and determine how to visually render headings, paragraphs, lists, and images on the screen.`,
          code: `<!-- The browser reads this markup: -->
<p>This is <strong>bold</strong> and this is <em>italic</em>.</p>

<!-- The browser renders formatted visual text on screen: -->
<!-- This is [bold] and this is [italic]. -->`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'You can right-click any webpage in Chrome and select "Inspect" to see its live DOM tree.',
            'Browsers collapse multiple consecutive spaces into a single space by default.'
          ]
        }
      ]
    }
  },

  // 3. HTML Editors
  {
    id: 'html-editors',
    title: 'HTML Editors',
    slug: 'html-editors',
    summary: 'Write HTML using simple text editors like Notepad, TextEdit, or modern IDEs like VS Code.',
    readTime: '5 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'Web pages can be created and modified by using professional HTML editors. However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac), or modern free editors like Visual Studio Code.',
      sections: [
        {
          heading: '1. Recommended Modern HTML Editors',
          body: `While you can write HTML in basic Notepad, professional developers use specialized code editors with syntax highlighting, autocomplete, and live reload:

• **Visual Studio Code (VS Code):** Free, cross-platform, industry standard with extensions like Live Server and Emmet.
• **Sublime Text:** Super lightweight, fast startup time.
• **Notepad++ (Windows):** Clean open-source text editor with syntax coloring.
• **DevAura Online Editor:** Zero-install in-browser playground for testing snippets.`,
          code: `<!-- Writing HTML in VS Code is enhanced with Emmet shortcuts: -->
<!-- Typing '!' and pressing Tab generates full HTML5 boilerplate automatically! -->`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'Install the "Live Server" extension in VS Code to see changes instantly whenever you save.',
            'Always save your primary homepage as "index.html".'
          ]
        },
        {
          heading: '2. Four Steps to Create Your First Local Web Page',
          body: `Follow these four simple steps on your Windows, Mac, or Linux computer:

1. **Step 1 — Open Text Editor:** Open VS Code, Notepad (Windows), or TextEdit (Mac).
2. **Step 2 — Write HTML Code:** Type or paste basic HTML markup into the editor.
3. **Step 3 — Save the File:** Save the file as \`index.html\` with **UTF-8** encoding.
4. **Step 4 — View in Browser:** Double-click \`index.html\` or drag it into Chrome/Edge to view your page.`,
          code: `<!DOCTYPE html>
<html>
<head>
  <title>My Local Website</title>
</head>
<body>
  <h1>Congratulations!</h1>
  <p>This file was created on my own computer and opened in a browser.</p>
</body>
</html>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Ensure the file extension is .html, not .txt or .html.txt.',
            'Keep your HTML files organized in a dedicated project folder.'
          ]
        }
      ]
    }
  },

  // 4. HTML Basic
  {
    id: 'html-basic',
    title: 'HTML Basic Examples',
    slug: 'html-basic',
    summary: 'Core HTML tags: <!DOCTYPE>, <html>, <body>, <h1> to <h6> headings, <p> paragraphs, <a> links, and <img> images.',
    readTime: '6 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'In this chapter we will show some basic HTML examples. Do not worry if we have not discussed the tags yet; you will learn about them in detail in the following chapters.',
      sections: [
        {
          heading: '1. Headings & Paragraphs',
          body: `HTML headings are defined with \`<h1>\` to \`<h6>\` tags. \`<h1>\` defines the most important heading, while \`<h6>\` defines the least important heading.

Paragraphs are defined with the \`<p>\` tag and automatically include vertical margins:`,
          code: `<h1>Main Page Title (h1)</h1>
<h2>Section Subheading (h2)</h2>
<h3>Subsection Header (h3)</h3>

<p>This is a standard paragraph containing descriptive text.</p>
<p>Each paragraph automatically starts on a brand-new line.</p>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;padding:20px;">
  <h1 style="color:#4f46e5;">Heading 1</h1>
  <h2 style="color:#6366f1;">Heading 2</h2>
  <h3 style="color:#818cf8;">Heading 3</h3>
  <p>Notice how headings decrease in font size and importance.</p>
</body>
</html>`,
          tips: [
            'Use headings for structure and hierarchy, never just to make text bold or big.',
            'Search engines prioritize words found inside <h1> tags.'
          ]
        },
        {
          heading: '2. HTML Hyperlinks (The Anchor Tag)',
          body: `HTML links are defined with the \`<a>\` (anchor) tag. The destination URL is specified in the \`href\` attribute:`,
          code: `<a href="https://devaura.dev">Visit DevAura Platform</a>
<br><br>
<a href="https://google.com" target="_blank">Search on Google (Opens in New Tab)</a>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;padding:20px;">
  <h3>Testing HTML Links</h3>
  <p><a href="https://github.com" target="_blank" style="color:#4f46e5;font-weight:bold;">Visit GitHub &raquo;</a></p>
</body>
</html>`,
          tips: [
            'target="_blank" tells the browser to open the destination link in a new browser tab.',
            'Always test links to ensure destination URLs are accurate.'
          ]
        },
        {
          heading: '3. HTML Images (The Image Tag)',
          body: `HTML images are embedded using the \`<img>\` tag. Images are empty elements with no closing tag.

• \`src\` specifies the path or URL to the image file.
• \`alt\` specifies alternative text for accessibility and screen readers.
• \`width\` & \`height\` define dimensions in pixels.`,
          code: `<img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400" 
     alt="Computer code on a monitor" 
     width="400" 
     height="250">`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;padding:20px;">
  <h3>Image Embedding Example</h3>
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=350" 
       alt="Laptop on workspace" 
       style="border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.15);max-width:100%;">
</body>
</html>`,
          tips: [
            'Always include the alt attribute—it is required by W3C accessibility guidelines.',
            'Setting width and height prevents Cumulative Layout Shift (CLS) as the page loads.'
          ]
        }
      ]
    }
  },

  // 5. HTML Elements
  {
    id: 'html-elements',
    title: 'HTML Elements',
    slug: 'html-elements',
    summary: 'Anatomy of an element: start tag, attributes, content, end tag. Nested elements and empty elements.',
    readTime: '6 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'An HTML element is defined by a start tag, some content, and an end tag. The HTML element is everything from the start tag to the end tag. HTML elements can be nested (this means that elements can contain other elements).',
      sections: [
        {
          heading: '1. Anatomy of an Element: Tag vs Content',
          body: `Every standard HTML element follows this structure:

• \`<p>\` = Start tag
• \`My first paragraph.\` = Element content
• \`</p>\` = End tag (with slash \`/\`)

> **Note:** The entire combination is called an **HTML Element**. The tag name itself is enclosed in angle brackets \`< >\`.`,
          code: `<!-- Start Tag | Content | End Tag -->
<h1>This is the heading content</h1>
<p>This is the paragraph content</p>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Never forget the forward slash in closing tags.',
            'Closing tags do not take attributes.'
          ]
        },
        {
          heading: '2. Nested HTML Elements',
          body: `HTML elements can be nested inside other elements to create rich layout hierarchies. 

For instance, the \`<body>\` element contains \`<h1>\` and \`<p>\`, and \`<p>\` can contain \`<strong>\` or \`<a>\`:`,
          code: `<!DOCTYPE html>
<html>
  <body>
    <!-- Nested inside body -->
    <h1>My Main Heading</h1>
    
    <p>
      This paragraph contains a 
      <!-- Nested inside p -->
      <strong>bold word</strong> and a 
      <a href="https://devaura.dev">link</a>.
    </p>
  </body>
</html>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Always close tags in the reverse order they were opened (LIFO: Last In, First Out).',
            'Use consistent 2-space or 4-space indentation to make nested hierarchies easy to read.'
          ]
        },
        {
          heading: '3. Empty / Void Elements (No Closing Tag)',
          body: `HTML elements without content are called **Empty Elements** or **Void Elements**. 

They do not have an end tag. The most common empty elements include:

• \`<br>\` — Forces a line break within text.
• \`<hr>\` — Renders a horizontal divider rule.
• \`<img>\` — Embeds an image.
• \`<input>\` — Form input field.
• \`<meta>\` — Metadata in head.
• \`<link>\` — Stylesheet link.`,
          code: `<p>First line of text.<br>Second line after line break.</p>
<hr>
<p>Content after horizontal divider rule.</p>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'In HTML5, self-closing slashes like <br /> are optional; <br> is standard and preferred.',
            'Never try to put text inside an empty tag like <br>text</br>—it is invalid.'
          ]
        }
      ]
    }
  },

  // 6. HTML Attributes
  {
    id: 'html-attributes',
    title: 'HTML Attributes',
    slug: 'html-attributes',
    summary: 'Provide additional information about HTML elements. href, src, width, height, alt, style, title, lang.',
    readTime: '7 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'HTML attributes provide additional information about HTML elements. All HTML elements can have attributes. Attributes are always specified in the start tag and usually come in name/value pairs like: name="value".',
      sections: [
        {
          heading: '1. What are Attributes & How are They Written?',
          body: `Attributes modify or configure the behavior of elements:

• Attributes are **always** placed inside the opening start tag.
• Attributes follow the key-value format: \`name="value"\`.
• Attribute names are lowercase (W3C standard).
• Values should **always** be enclosed in double quotes.`,
          code: `<!-- tagname attribute="value" -->
<a href="https://devaura.dev">Link Attribute</a>
<p title="Tooltip text">Hover over me to see the title attribute!</p>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Never place attributes in closing tags (e.g., </a href="..."> is invalid).',
            'Multiple attributes can be placed on a single tag separated by spaces.'
          ]
        },
        {
          heading: '2. The href, src & alt Attributes',
          body: `The three most common attributes on the web:

• \`href\` (Hypertext Reference): Destination address for anchor links.
• \`src\` (Source): File path or URL to an image, audio, or video file.
• \`alt\` (Alternative Text): Essential fallback text displayed if the image fails to load and read aloud by screen readers.`,
          code: `<!-- Link Destination -->
<a href="https://devaura.dev" target="_blank">DevAura Learning</a>

<!-- Image Source and Alt Text -->
<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300" 
     alt="Laptop showing web development code" 
     width="300">`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Never leave alt empty unless the image is purely decorative.',
            'Avoid writing "image of..." in your alt text; screen readers already announce that it is an image.'
          ]
        },
        {
          heading: '3. Global Attributes: style, title, lang & id',
          body: `Global attributes are supported on almost every HTML element:

• \`style\` — Specifies inline CSS styling (color, font, margin).
• \`title\` — Displays a native hover tooltip in desktop browsers.
• \`lang\` — Declares the language of the element or document.
• \`id\` & \`class\` — Unique identifiers and group classes used by CSS and JavaScript.`,
          code: `<p style="color:#4f46e5;font-weight:bold;">Styled with style attribute</p>
<span title="This tooltip appears on hover!">Hover your mouse here</span>
<div id="main-container" class="card shadow-lg">Card Container</div>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'id values must be unique across the entire webpage.',
            'class values can be shared across hundreds of elements.'
          ]
        }
      ]
    }
  },

  // 7. HTML Headings
  {
    id: 'html-headings',
    title: 'HTML Headings',
    slug: 'html-headings',
    summary: 'Six levels of headings: <h1> to <h6>. Importance of headings for SEO, structure, and accessibility.',
    readTime: '5 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'HTML headings are titles or subtitles that you want to display on a webpage. HTML headings are defined with the <h1> to <h6> tags. <h1> defines the most important heading. <h6> defines the least important heading.',
      sections: [
        {
          heading: '1. The Six Heading Levels (h1 to h6)',
          body: `HTML provides six heading tags in descending order of hierarchy and font size:

• \`<h1>\` — Top-level page title (most important).
• \`<h2>\` — Major topic or section header.
• \`<h3>\` — Sub-topic under an h2.
• \`<h4>\`, \`<h5>\`, \`<h6>\` — Further nested subsections.`,
          code: `<h1>Heading 1 — 32px standard</h1>
<h2>Heading 2 — 24px standard</h2>
<h3>Heading 3 — 18.72px standard</h3>
<h4>Heading 4 — 16px standard</h4>
<h5>Heading 5 — 13.28px standard</h5>
<h6>Heading 6 — 10.72px standard</h6>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;padding:20px;">
  <h1>Heading Level 1</h1>
  <h2>Heading Level 2</h2>
  <h3>Heading Level 3</h3>
  <h4>Heading Level 4</h4>
  <h5>Heading Level 5</h5>
  <h6>Heading Level 6</h6>
</body>
</html>`,
          tips: [
            'Each heading has default bold styling and vertical margins provided by user-agent stylesheets.',
            'Never skip levels (e.g. going from h1 directly to h4 breaks document outline).'
          ]
        },
        {
          heading: '2. Why Headings are Crucial for Search Engines (SEO)',
          body: `Search engine crawlers (Google, Bing) use headings to index the structure and content of your web pages.

• **H1 Rule:** Have exactly **one** \`<h1>\` tag per page that accurately summarizes the page topic.
• **Document Outline:** Users skim pages by reading headings; clean headings dramatically improve user engagement and dwell time.
• **Accessibility:** Screen-reader users can press keyboard shortcuts (like \`H\` in NVDA/VoiceOver) to jump between headings.`,
          code: `<!-- Best Practice SEO Structure -->
<h1>Complete Guide to Web Development</h1>

<h2>1. Introduction to HTML</h2>
<p>HTML basics...</p>

<h2>2. Introduction to CSS</h2>
<p>CSS basics...</p>`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'Never use headings solely to make text big or bold; use CSS font-weight and font-size instead.',
            'Keep headings concise and descriptive.'
          ]
        }
      ]
    }
  },

  // 8. HTML Paragraphs
  {
    id: 'html-paragraphs',
    title: 'HTML Paragraphs',
    slug: 'html-paragraphs',
    summary: 'The p element, display characteristics, line breaks with br, horizontal rules with hr, and pre element.',
    readTime: '6 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'The HTML <p> element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.',
      sections: [
        {
          heading: '1. HTML Paragraphs and Whitespace Collapsing',
          body: `In HTML source code, you cannot add extra spaces or line breaks simply by hitting Enter or Space. 

Browsers automatically **collapse** multiple spaces and line breaks into a single space:`,
          code: `<p>
  This paragraph has
  lots of      spaces
  and line breaks in the code,
  but the browser collapses them!
</p>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;padding:20px;">
  <p>
    Notice     how      all
    these      extra     spaces
    and line breaks disappear in the browser output!
  </p>
</body>
</html>`,
          tips: [
            'Use CSS margin/padding for spacing, not multiple empty paragraph tags.',
            'To force a non-breaking space, use the HTML entity &nbsp;.'
          ]
        },
        {
          heading: '2. Line Breaks (<br>) & Horizontal Rules (<hr>)',
          body: `When you need a new line inside a paragraph without starting an entirely new paragraph block, use \`<br>\`.

To divide content sections with a visible line, use \`<hr>\`:`,
          code: `<p>
  Roses are red,<br>
  Violets are blue,<br>
  DevAura makes learning<br>
  Super easy for you!
</p>

<hr>

<p>Content after the horizontal thematic break.</p>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            '<br> is perfect for addresses and poems where line breaks are meaningful.',
            '<hr> represents a thematic break in content and can be styled with CSS.'
          ]
        },
        {
          heading: '3. Preformatted Text (<pre>)',
          body: `The \`<pre>\` element displays text in a fixed-width (monospace) font and preserves **both** spaces and line breaks exactly as written in the source code:`,
          code: `<pre>
  Text in a pre element
  preserves     spaces
  and line
  breaks!
</pre>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            '<pre> is ideal for poems, ASCII art, and source code blocks.',
            'Combine <pre><code> for highlighting programming language syntax.'
          ]
        }
      ]
    }
  },

  // 9. HTML Styles
  {
    id: 'html-styles',
    title: 'HTML Styles',
    slug: 'html-styles',
    summary: 'The style attribute. Setting background-color, color, font-family, font-size, and text-align.',
    readTime: '6 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'The HTML style attribute is used to add styles to an element, such as color, font, size, and more. Setting the style of an HTML element can be done with the style attribute: <tagname style="property:value;">.',
      sections: [
        {
          heading: '1. The style Attribute Syntax',
          body: `The syntax for the inline style attribute is:

\`<tagname style="property: value; property: value;">\`

• **Property:** The CSS property you want to change (e.g. \`color\`, \`font-size\`).
• **Value:** The CSS value assigned to that property (e.g. \`red\`, \`18px\`).
• Separate multiple declarations with semicolons (\`;\`).`,
          code: `<p style="color: #4f46e5; font-size: 20px; font-weight: bold;">
  Styled with inline CSS properties!
</p>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Always remember the colon : between property and value, and semicolon ; at the end.',
            'Inline styles have high CSS specificity and override external stylesheets.'
          ]
        },
        {
          heading: '2. Background Color, Text Color & Alignment',
          body: `Commonly used style properties:

• \`background-color:\` sets element background.
• \`color:\` sets text foreground color.
• \`text-align:\` aligns text horizontally (\`left\`, \`center\`, \`right\`, \`justify\`).`,
          code: `<div style="background-color: #f1f5f9; padding: 20px; text-align: center;">
  <h2 style="color: #4338ca;">Centered Styled Heading</h2>
  <p style="color: #64748b;">Text with custom colors and alignment.</p>
</div>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body>
  <div style="background-color:#e0e7ff;padding:24px;border-radius:12px;text-align:center;">
    <h2 style="color:#3730a3;margin:0;">DevAura Styled Box</h2>
    <p style="color:#4f46e5;">Try changing background-color to #fef3c7!</p>
  </div>
</body>
</html>`,
          tips: [
            'Use HEX (#ffffff) or RGB values for exact brand colors.',
            'While style attributes are quick for testing, use external CSS for full websites.'
          ]
        }
      ]
    }
  },

  // 10. HTML Text Formatting
  {
    id: 'html-formatting',
    title: 'HTML Text Formatting',
    slug: 'html-formatting',
    summary: '<b> bold, <strong> important, <i> italic, <em> emphasized, <mark> highlighted, <small>, <del>, <ins>, <sub>, <sup>.',
    readTime: '7 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'HTML contains several elements for defining text with a special meaning. Formatting elements were designed to display special types of text: bold, italic, subscript, superscript, deleted, and highlighted text.',
      sections: [
        {
          heading: '1. Visual vs Semantic Text Tags (b vs strong, i vs em)',
          body: `In modern HTML5, formatting tags carry semantic meaning for accessibility:

• \`<b>\` — Bold text for purely visual styling without extra importance.
• \`<strong>\` — Defines text with strong importance (screen readers emphasize it).
• \`<i>\` — Italic text for technical terms, alternate voice, or phrases.
• \`<em>\` — Emphasized text that stresses pronunciation.`,
          code: `<p>This is standard text.</p>
<p>This is <b>bold text</b>.</p>
<p>This is <strong>important strong text</strong>.</p>
<p>This is <i>italic text</i>.</p>
<p>This is <em>emphasized text</em>.</p>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Prefer <strong> and <em> over <b> and <i> for better accessibility.',
            'Search engines pay extra attention to words enclosed in <strong>.'
          ]
        },
        {
          heading: '2. Small, Mark, Deleted & Inserted Elements',
          body: `Special text formatting elements:

• \`<small>\` — Defines smaller text (copyrights, side comments).
• \`<mark>\` — Defines highlighted text (like a yellow highlighter marker).
• \`<del>\` — Strikethrough text representing deleted information.
• \`<ins>\` — Underlined text representing newly inserted information.`,
          code: `<p>Regular size and <small>fine print terms text</small>.</p>
<p>Do not forget to buy <mark>fresh milk</mark> today!</p>
<p>My favorite color is <del>blue</del> <ins>indigo</ins>!</p>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            '<del> and <ins> are widely used in e-commerce discount prices: <del>$100</del> $79.',
            '<mark> provides native yellow background without writing custom CSS.'
          ]
        },
        {
          heading: '3. Subscript (sub) & Superscript (sup)',
          body: `Subscript and superscript elements are essential for mathematical and chemical formulas:

• \`<sub>\` — Subscript text appears half a character below the baseline (e.g. H₂O).
• \`<sup>\` — Superscript text appears half a character above the baseline (e.g. x² + y² = z²).`,
          code: `<p>Chemical formula: H<sub>2</sub>O (Water)</p>
<p>Math equation: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>
<p>Date notation: November 3<sup>rd</sup>, 2026</p>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Use <sub> for chemical formulas and footnoted references.',
            'Use <sup> for exponents, registered trademark symbols ®, and ordinal indicators (1st, 2nd).'
          ]
        }
      ]
    }
  },

  // 11. HTML Quotations
  {
    id: 'html-quotations',
    title: 'HTML Quotation and Citation Elements',
    slug: 'html-quotations',
    summary: '<blockquote> for long quotes, <q> for inline quotes, <abbr> abbreviations, <address> contact, <cite>, <bdo>.',
    readTime: '6 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'HTML quotation and citation elements allow you to present quotes, citations, abbreviations, and contact info in a structured, accessible format.',
      sections: [
        {
          heading: '1. Blockquotes for Long Quotations',
          body: `The \`<blockquote>\` element specifies a section quoted from another source. 

Browsers automatically indent \`<blockquote>\` elements with left and right margins:`,
          code: `<p>Here is a famous quote from Albert Einstein:</p>
<blockquote cite="https://en.wikipedia.org/wiki/Albert_Einstein">
  "Learn from yesterday, live for today, hope for tomorrow. 
  The important thing is not to stop questioning."
</blockquote>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Use the cite attribute to specify the URL source of the quote (invisible to readers but parsed by search engines).',
            'Style blockquotes with CSS borders and custom quotation marks for modern UI.'
          ]
        },
        {
          heading: '2. Inline Quotes (<q>) & Abbreviations (<abbr>)',
          body: `• \`<q>\` — Automatically inserts surrounding quotation marks around short inline quotes.
• \`<abbr>\` — Defines an abbreviation or acronym. The \`title\` attribute provides the full expansion on hover.`,
          code: `<p>Steve Jobs said: <q>Stay hungry, stay foolish.</q></p>

<p>The <abbr title="World Wide Web Consortium">W3C</abbr> was founded in 1994.</p>
<p>Learn <abbr title="HyperText Markup Language">HTML</abbr> with DevAura!</p>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            '<q> automatically adapts quote punctuation marks to the language specified in lang="".',
            '<abbr> displays a dotted underline in most browsers to indicate hoverable expansion.'
          ]
        },
        {
          heading: '3. Contact Info (<address>) & Bidirectional Override (<bdo>)',
          body: `• \`<address>\` — Defines contact information for the author/owner of a document or article.
• \`<bdo dir="rtl">\` — Overrides the current text direction (e.g. right-to-left for Arabic or Hebrew).`,
          code: `<address>
  Written by DevAura Team<br>
  Visit us at: devaura.dev<br>
  Silicon Valley, CA, USA
</address>

<!-- Right-to-Left Text Override -->
<bdo dir="rtl">This text will be written from right to left!</bdo>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Text inside <address> is italicized by default and wrapped in its own block.',
            '<bdo dir="rtl"> reverses characters on screen—ideal for multi-lingual internationalization.'
          ]
        }
      ]
    }
  },

  // 12. HTML Comments
  {
    id: 'html-comments',
    title: 'HTML Comments',
    slug: 'html-comments',
    summary: 'HTML comments are not displayed in the browser, but they help document source code, leave developer notes, and temporarily hide code during debugging.',
    readTime: '6 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'HTML comments are snippets of text placed in HTML source code that are completely ignored by the web browser. They are written using the <!-- and --> syntax. Comments are essential for documenting layouts, collaborating in development teams, and temporarily disabling code without deleting it.',
      sections: [
        {
          heading: '1. HTML Comment Syntax & Rules',
          body: `You can add comments to your HTML source by using the standard comment tag:

• **Opening Tag:** Begins with \`<!--\` (less-than, exclamation mark, two hyphens).
• **Comment Body:** Any explanation, text, or HTML code you want to document.
• **Closing Tag:** Ends with \`-->\` (two hyphens, greater-than).

> **Important Rule:** There is an exclamation point (\`!\`) in the opening tag, but **no** exclamation point in the closing tag.`,
          code: `<!-- This is a standard HTML comment -->
<p>This paragraph is visible on the webpage.</p>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body>
  <!-- This is a standard single-line comment -->
  <h1>Welcome to DevAura</h1>
  <p>This paragraph is visible to users in the browser.</p>
  <!-- Comments are not shown on the page! -->
</body>
</html>`,
          tips: [
            'Browsers completely skip comments during rendering.',
            'Always remember the exclamation mark in the opening tag: <!-- not <--.'
          ]
        },
        {
          heading: '2. Multi-Line Comments & Developer Documentation',
          body: `When documenting complex sections, page headers, navigation bars, or author details, comments can span multiple lines.

Everything between the opening \`<!--\` and closing \`-->\` will be treated as part of the comment:`,
          code: `<!--
  Author: DevAura Team
  Module: Primary Hero Section
  TODO: Optimize hero image loading with webp format
-->
<section class="hero">
  <h1>Learn Web Development</h1>
</section>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body>
  <!--
    Multi-line developer comment:
    This block is great for explaining complex components
    or leaving notes for teammates.
  -->
  <h2>Multi-Line Comments Example</h2>
  <p>The comment above is completely invisible to visitors.</p>
</body>
</html>`,
          tips: [
            'Use multi-line comments at the start of major HTML sections to make large templates readable.',
            'Never nest comments inside comments (<!-- <!-- --> --> will break).'
          ]
        },
        {
          heading: '3. Hiding HTML Code for Debugging',
          body: `Comments are an invaluable tool during development and debugging. If an element is causing issues or you want to test an alternative design, you can "comment out" the HTML tags without deleting them.

The browser will treat the enclosed HTML tags as plain comments and will not render them on the screen:`,
          code: `<h1>My Portfolio</h1>
<!-- <p>This temporary paragraph is hidden during site maintenance.</p> -->
<p>This paragraph remains visible to all visitors.</p>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body>
  <h1>Debugging with Comments</h1>
  
  <!-- <p style="color:red;">This paragraph is commented out and won't appear!</p> -->
  
  <p style="color:green;">This paragraph is active and visible.</p>
  
  <!-- <button>Deprecated Old Button</button> -->
  <button style="background:#4f46e5;color:white;padding:8px 16px;border-radius:6px;border:none;">New Active Button</button>
</body>
</html>`,
          tips: [
            'Commenting out code is safer than deleting it when troubleshooting bugs.',
            'You can comment out single tags, multi-line blocks, or entire <div> sections.'
          ]
        },
        {
          heading: '4. Inline Comments (Hiding Code Inside a Line)',
          body: `HTML comments can even be placed in the middle of a line or between tags. This allows you to hide specific words, attribute placeholders, or inline elements:`,
          code: `<p>This is a <!-- temporary hidden phrase --> paragraph with inline comments.</p>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body>
  <p>This is a <!-- hidden comment --> visible sentence.</p>
  <p>You can hide <!-- <b>bold words</b> --> parts of text seamlessly.</p>
</body>
</html>`,
          tips: [
            'Useful when drafting copy or toggling specific inline phrases.',
            'Ensure the comment syntax is fully closed so subsequent text is not hidden.'
          ]
        },
        {
          heading: '5. Critical Security Note: Comments are 100% Public!',
          body: `A common beginner mistake is assuming that because comments are not rendered on the screen, they are secret or private.

> **CRITICAL SECURITY WARNING:**
> Anyone who visits your webpage can right-click and select **"View Page Source"** (or press \`Ctrl + U\`) to inspect your full HTML code, including every single comment!
> 
> • **NEVER** put passwords, database connection strings, or API secrets in HTML comments.
> • **NEVER** leave sensitive internal URLs or private customer data in client-side code.
> • Use server-side comments (like in PHP, Node.js, Python) for private developer logic.`,
          code: `<!-- ❌ BAD PRACTICE - NEVER DO THIS: -->
<!-- Admin password is: SuperSecret123 -->

<!-- ✅ GOOD PRACTICE - Public UI documentation: -->
<!-- Main Navigation Container -->`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'Assume everything in HTML is 100% public to all users and search engines.',
            'Keep HTML comments strictly focused on markup structure and public accessibility notes.'
          ]
        }
      ]
    }
  },

  // 13. HTML Colors
  {
    id: 'html-colors',
    title: 'HTML Colors (Names, RGB, HEX, HSL, RGBA)',
    slug: 'html-colors',
    summary: 'HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.',
    readTime: '7 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'In HTML, a color can be specified by using a color name (like Tomato, DodgerBlue), an RGB value, a HEX value, an HSL value, or RGBA/HSLA with alpha transparency.',
      sections: [
        {
          heading: '1. Predefined Color Names',
          body: `HTML supports 140 standard color names by default. Common examples include \`Tomato\`, \`DodgerBlue\`, \`MediumSeaGreen\`, \`SlateBlue\`, and \`Violet\`:`,
          code: `<h2 style="background-color:Tomato; color:white; padding:10px;">Tomato</h2>
<h2 style="background-color:DodgerBlue; color:white; padding:10px;">DodgerBlue</h2>
<h2 style="background-color:MediumSeaGreen; color:white; padding:10px;">MediumSeaGreen</h2>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;padding:20px;">
  <div style="background-color:DodgerBlue;color:white;padding:12px;border-radius:8px;margin-bottom:8px;">DodgerBlue</div>
  <div style="background-color:Tomato;color:white;padding:12px;border-radius:8px;margin-bottom:8px;">Tomato</div>
  <div style="background-color:MediumSeaGreen;color:white;padding:12px;border-radius:8px;">MediumSeaGreen</div>
</body>
</html>`,
          tips: [
            'Color names are case-insensitive in HTML and CSS.',
            'Great for quick prototyping, but professional projects use HEX or RGB.'
          ]
        },
        {
          heading: '2. RGB & RGBA Colors (Red, Green, Blue, Alpha)',
          body: `• **RGB:** \`rgb(red, green, blue)\` — Each parameter defines color intensity between 0 and 255.
• **RGBA:** \`rgba(red, green, blue, alpha)\` — Adds an alpha parameter between 0.0 (fully transparent) and 1.0 (fully opaque).`,
          code: `<!-- Pure Red -->
<div style="background-color: rgb(255, 0, 0); color: white;">rgb(255, 0, 0)</div>

<!-- Indigo Brand Color -->
<div style="background-color: rgb(79, 70, 229); color: white;">rgb(79, 70, 229)</div>

<!-- 50% Semi-Transparent Overlay -->
<div style="background-color: rgba(79, 70, 229, 0.5); color: white;">rgba(79, 70, 229, 0.5)</div>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'rgb(0, 0, 0) is pure Black; rgb(255, 255, 255) is pure White.',
            'RGBA is widely used for modal overlays and glassmorphism backdrops.'
          ]
        },
        {
          heading: '3. HEX Color Codes (#RRGGBB)',
          body: `A hexadecimal color is specified with: \`#RRGGBB\`, where RR (red), GG (green), and BB (blue) are hexadecimal values between \`00\` and \`FF\`:`,
          code: `<!-- #4f46e5: Red 4f (79), Green 46 (70), Blue e5 (229) -->
<h2 style="background-color: #4f46e5; color: #ffffff; padding: 12px; border-radius: 8px;">
  #4f46e5 (DevAura Electric Indigo)
</h2>
<h2 style="background-color: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;">
  #0f172a (Slate Midnight)
</h2>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'HEX is the most popular color notation among designers and front-end engineers.',
            '3-digit shorthand is allowed when pairs match: #f00 is equal to #ff0000.'
          ]
        }
      ]
    }
  },

  // 14. HTML CSS
  {
    id: 'html-css',
    title: 'HTML Styles - CSS',
    slug: 'html-css',
    summary: 'CSS stands for Cascading Style Sheets. Inline CSS, Internal CSS in head, and External CSS with link.',
    readTime: '7 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'CSS is used to format the layout of a webpage. With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, and different displays for different devices and screen sizes.',
      sections: [
        {
          heading: '1. Three Ways to Add CSS to HTML',
          body: `There are three primary ways to insert CSS into an HTML document:

1. **Inline CSS:** Using the \`style\` attribute directly inside HTML elements.
2. **Internal CSS:** Using a \`<style>\` block inside the \`<head>\` section.
3. **External CSS:** Using a \`<link rel="stylesheet">\` tag to link an external \`.css\` file.

> **Industry Standard:** External CSS is the most common method in production because it keeps markup separate from design and allows one stylesheet to control hundreds of pages!`,
          code: `<!-- 1. External CSS Link in <head> -->
<link rel="stylesheet" href="styles.css">

<!-- 2. Internal CSS in <head> -->
<style>
  body { background-color: #f8fafc; font-family: sans-serif; }
  h1 { color: #4f46e5; }
</style>

<!-- 3. Inline CSS in <body> -->
<p style="color: #64748b; font-size: 14px;">Inline styled paragraph.</p>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'External stylesheets are cached by browsers, dramatically speeding up subsequent page loads.',
            'Inline styles should only be used for dynamic values or quick email templates.'
          ]
        },
        {
          heading: '2. CSS Colors, Fonts, Borders & Padding',
          body: `Key CSS properties every developer needs to know:

• \`color:\` text color.
• \`font-family:\` font typeface.
• \`border:\` thickness, style, and color (\`1px solid #e2e8f0\`).
• \`padding:\` space **inside** the border.
• \`margin:\` space **outside** the border.`,
          code: `<div style="background:#ffffff; border:2px solid #4f46e5; border-radius:12px; padding:20px; margin:20px 0;">
  <h3 style="color:#4f46e5; margin-top:0;">Styled Card Element</h3>
  <p style="color:#475569; font-size:15px; line-height:1.6;">
    Notice the breathing room provided by padding inside the border!
  </p>
</div>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Remember: Padding is INSIDE the element; Margin is OUTSIDE the element.',
            'Always set box-sizing: border-box in modern CSS for predictable layout sizing.'
          ]
        }
      ]
    }
  },

  // 15. HTML Links
  {
    id: 'html-links',
    title: 'HTML Links - Hyperlinks',
    slug: 'html-links',
    summary: 'The a element, href attribute, target attribute (_blank, _self), mailto links, and bookmarks with id.',
    readTime: '7 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'HTML links are hyperlinks. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand.',
      sections: [
        {
          heading: '1. Link Syntax & The href Attribute',
          body: `HTML links are defined with the \`<a>\` (anchor) tag:

\`<a href="url">link text</a>\`

The most important attribute is \`href\`, which indicates the link's destination. The link text is what visitors see on the page.`,
          code: `<a href="https://devaura.dev">Visit DevAura Platform</a>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;padding:20px;">
  <h2>Hyperlinks in Action</h2>
  <p><a href="https://github.com" style="color:#4f46e5;font-weight:bold;">Click here to visit GitHub</a></p>
</body>
</html>`,
          tips: [
            'By default: unvisited links are underlined and blue; visited links are purple; active links are red.',
            'Style links with CSS text-decoration: none to remove default underlines.'
          ]
        },
        {
          heading: '2. The target Attribute (_blank vs _self)',
          body: `The \`target\` attribute specifies where to open the linked document:

• \`target="_self"\` — Default. Opens the link in the same window/tab.
• \`target="_blank"\` — Opens the link in a brand-new browser tab.
• \`target="_parent"\` — Opens the document in the parent frame.
• \`target="_top"\` — Opens the document in the full body of the window.`,
          code: `<!-- Opens in a new tab -->
<a href="https://devaura.dev" target="_blank" rel="noopener noreferrer">
  Open DevAura in New Tab
</a>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'When using target="_blank", always add rel="noopener noreferrer" for security and performance.',
            'Use _blank for external resources so visitors do not lose their place on your website.'
          ]
        },
        {
          heading: '3. Images as Links, Email Links & Bookmarks',
          body: `• **Image Link:** Place an \`<img>\` tag inside an \`<a>\` tag.
• **Email Link:** Use \`mailto:\` inside \`href\` to trigger the user's default email client.
• **Page Bookmarks:** Use \`href="#section-id"\` to smoothly jump to a specific element on the page.`,
          code: `<!-- 1. Clickable Image Link -->
<a href="https://devaura.dev">
  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200" alt="DevAura" width="200">
</a>

<!-- 2. Send Email Link -->
<a href="mailto:support@devaura.dev">Contact Support via Email</a>

<!-- 3. Jump to Internal Bookmark -->
<a href="#section-faq">Jump down to FAQ Section</a>
...
<h2 id="section-faq">Frequently Asked Questions</h2>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'You can also use tel:+1234567890 to create tap-to-call links on smartphones.',
            'Ensure section IDs are unique when linking bookmarks.'
          ]
        }
      ]
    }
  },

  // 16. HTML Images
  {
    id: 'html-images',
    title: 'HTML Images',
    slug: 'html-images',
    summary: 'The img element, src, alt, width, height attributes, responsive image styling, and image links.',
    readTime: '7 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'Images can improve the design and the appearance of a web page. The HTML <img> tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.',
      sections: [
        {
          heading: '1. Image Syntax: src and alt Attributes',
          body: `The \`<img>\` tag is empty (it contains attributes only and has no closing tag):

• \`src\` specifies the image path or internet URL.
• \`alt\` provides required alternative text for screen readers and SEO.`,
          code: `<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" 
     alt="MacBook on a clean wooden desk showing code" 
     width="400" 
     height="250">`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'If the image path is broken, the browser displays the alt text instead.',
            'Accurate alt text is essential for visually impaired users.'
          ]
        },
        {
          heading: '2. Setting Image Width, Height & Responsive Sizing',
          body: `You can set image dimensions using attributes or CSS:

• **Attributes:** \`width="500" height="300"\` (values are in pixels).
• **Responsive CSS:** \`style="max-width: 100%; height: auto;"\` ensures images scale down smoothly on mobile phones without overflowing.`,
          code: `<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600" 
     alt="Modern Coding Setup" 
     style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Always set both width and height attributes in HTML to reserve aspect ratio, then override with CSS max-width: 100%.',
            'Use modern web formats like WebP or AVIF for 3x smaller file sizes.'
          ]
        }
      ]
    }
  },

  // 17. HTML Favicon
  {
    id: 'html-favicon',
    title: 'HTML Favicon',
    slug: 'html-favicon',
    summary: 'A favicon is a small image displayed next to the page title in the browser tab. How to add with link tag.',
    readTime: '5 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'A favicon is a small image displayed next to the page title in the browser tab. You can use any image you like as your favicon. You can also create your own favicon on sites like favicon.cc.',
      sections: [
        {
          heading: '1. What is a Favicon and Where Does it Appear?',
          body: `A favicon ("favorite icon") appears in:

• The browser tab next to your page title.
• The browser's bookmarks / favorites list.
• Search engine mobile result snippets.
• Pinned tabs and mobile home screen shortcuts.`,
          code: `<!-- Standard Favicon Tag inside <head> -->
<head>
  <title>DevAura Learning</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'Place the <link rel="icon"> tag inside the <head> element.',
            'Standard sizes: 16x16 px for desktop tabs, 32x32 px for high-DPI displays.'
          ]
        },
        {
          heading: '2. Modern SVG and PNG Favicon Support',
          body: `Modern browsers support SVG vector favicons, allowing crisp rendering on all retina screens:`,
          code: `<head>
  <!-- Vector SVG Favicon (Sharp on 4K/Retina) -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Fallback PNG Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  
  <!-- Apple Touch Icon for iOS Homescreens -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
</head>`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'SVG favicons can even support Dark Mode via @media (prefers-color-scheme: dark)!',
            'Always save a root fallback /favicon.ico file for legacy crawlers.'
          ]
        }
      ]
    }
  },

  // 18. HTML Page Title
  {
    id: 'html-title',
    title: 'HTML Page Title',
    slug: 'html-title',
    summary: 'The title element defines the title of the document. Crucial for SEO, browser tabs, and search engine results.',
    readTime: '5 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'The <title> tag defines the title of the document. The title must be text-only, and it is shown in the browser\'s title bar or in the page\'s tab. The <title> tag is required in all HTML documents!',
      sections: [
        {
          heading: '1. The Importance of the title Element',
          body: `The \`<title>\` tag serves three vital purposes:

1. **Browser Tab:** Defines a title in the browser tab so users identify your open page.
2. **Search Engine Results (SERP):** Google and Bing use the \`<title>\` as the main clickable headline in search results.
3. **Bookmarks:** When a user bookmarks your page, the \`<title>\` becomes the default bookmark name.`,
          code: `<!DOCTYPE html>
<html>
<head>
  <!-- Concise, keyword-rich page title -->
  <title>Learn HTML5 Online — Interactive Developer Platform | DevAura</title>
</head>
<body>
  <h1>Page Content</h1>
</body>
</html>`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'The <title> tag must be text-only; you cannot put other HTML tags inside it.',
            'Keep titles between 50 to 60 characters so they are not cut off in Google search results.'
          ]
        },
        {
          heading: '2. Writing SEO-Friendly Page Titles',
          body: `Best practices for writing titles that rank well and attract clicks:

• Include primary target keywords near the beginning.
• Add your brand or platform name at the end (e.g. \`Primary Keyword - Brand\`).
• Make each title unique across your entire website.
• Avoid keyword stuffing (e.g. \`HTML, learn html, best html, html guide\` is penalized by Google).`,
          code: `<!-- ✅ High-Performing Title Example: -->
<title>HTML Forms Tutorial - Input Types & Validation | DevAura</title>`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'Test your titles using SERP preview tools to ensure they fit desktop and mobile viewports.',
            'Every HTML page MUST have a <title> element inside <head>.'
          ]
        }
      ]
    }
  },

  // 19. HTML Tables
  {
    id: 'html-tables',
    title: 'HTML Tables',
    slug: 'html-tables',
    summary: 'HTML tables allow web developers to arrange data into rows and columns: table, tr, th, td, colspan, rowspan.',
    readTime: '8 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'HTML tables allow web developers to arrange data into rows and columns: <table> defines the table, <tr> defines rows, <th> defines header cells, and <td> defines standard data cells.',
      sections: [
        {
          heading: '1. Basic Table Structure (table, tr, th, td)',
          body: `Every HTML table is built using four fundamental tags:

• \`<table>\` — The container element for the table.
• \`<tr>\` (Table Row) — Defines a horizontal row of cells.
• \`<th>\` (Table Header) — Defines a header cell (bold and centered by default).
• \`<td>\` (Table Data) — Defines a standard content cell.`,
          code: `<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr style="background-color: #f1f5f9;">
      <th>Company</th>
      <th>Contact Person</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DevAura Inc.</td>
      <td>Alex Miller</td>
      <td>USA</td>
    </tr>
    <tr>
      <td>TechCorp Ltd.</td>
      <td>Maria Garcia</td>
      <td>Germany</td>
    </tr>
  </tbody>
</table>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    table { width: 100%; border-collapse: collapse; font-family: sans-serif; }
    th, td { border: 1px solid #cbd5e1; padding: 10px 14px; text-align: left; }
    th { background-color: #4f46e5; color: white; }
    tr:nth-child(even) { background-color: #f8fafc; }
  </style>
</head>
<body>
  <h2>Styled Customer Table</h2>
  <table>
    <tr>
      <th>Student</th>
      <th>Course</th>
      <th>Grade</th>
    </tr>
    <tr>
      <td>John Doe</td>
      <td>HTML5 Masterclass</td>
      <td>A+</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>React 19 Foundations</td>
      <td>A</td>
    </tr>
  </table>
</body>
</html>`,
          tips: [
            'Always use border-collapse: collapse in CSS so table cells share clean single borders.',
            'Use <thead>, <tbody>, and <tfoot> to provide semantic grouping for long tables.'
          ]
        },
        {
          heading: '2. Merging Cells with colspan and rowspan',
          body: `• \`colspan\` — Merges two or more columns into a single wide cell.
• \`rowspan\` — Merges two or more rows into a single tall cell.`,
          code: `<table border="1" style="border-collapse: collapse; width: 100%;">
  <tr>
    <th colspan="2">Full Contact Information</th>
  </tr>
  <tr>
    <td>Email</td>
    <td>support@devaura.dev</td>
  </tr>
  <tr>
    <td rowspan="2">Phone Numbers</td>
    <td>+1 (555) 019-2834 (Office)</td>
  </tr>
  <tr>
    <td>+1 (555) 019-5821 (Mobile)</td>
  </tr>
</table>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'colspan spans horizontally; rowspan spans vertically.',
            'Never use tables for entire webpage layout—use CSS Flexbox or CSS Grid instead.'
          ]
        }
      ]
    }
  },

  // 20. HTML Lists
  {
    id: 'html-lists',
    title: 'HTML Lists (Unordered, Ordered, Description)',
    slug: 'html-lists',
    summary: 'HTML lists allow web developers to group a set of related items in lists: <ul> unordered, <ol> ordered, and <dl> description lists.',
    readTime: '7 min',
    category: 'HTML Tutorial',
    content: {
      overview: 'HTML lists allow web developers to group a set of related items in lists: Unordered lists <ul> with bullets, Ordered lists <ol> with numbers/letters, and Description lists <dl> for terms and definitions.',
      sections: [
        {
          heading: '1. Unordered Lists (ul) & Ordered Lists (ol)',
          body: `• **Unordered List (\`<ul>\`):** Displays list items (\`<li>\`) with bullet points.
• **Ordered List (\`<ol>\`):** Displays list items (\`<li>\`) numbered sequentially (1, 2, 3...).`,
          code: `<!-- Unordered Bulleted List -->
<ul>
  <li>HTML5 Structure</li>
  <li>CSS3 Styling</li>
  <li>JavaScript Interactivity</li>
</ul>

<!-- Ordered Numbered List -->
<ol>
  <li>Plan website requirements</li>
  <li>Write semantic HTML tags</li>
  <li>Style with modern CSS</li>
</ol>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;padding:20px;">
  <h3 style="color:#4f46e5;">Unordered List</h3>
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
  </ul>

  <h3 style="color:#0284c7;">Ordered List</h3>
  <ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
  </ol>
</body>
</html>`,
          tips: [
            'All list items must be enclosed within <li> tags.',
            'You can change ordered list numbering types using type="A", type="a", type="I", or type="i".'
          ]
        },
        {
          heading: '2. Nested Lists & Navigation Menus',
          body: `Lists can be nested inside other list items to build hierarchical category menus and navigation bars:`,
          code: `<ul>
  <li>Frontend
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>React</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Ensure nested <ul> or <ol> tags are placed INSIDE an <li> tag.',
            'Most website navigation bars (<nav>) are built using styled <ul> and <li> elements.'
          ]
        },
        {
          heading: '3. Description Lists (<dl>, <dt>, <dd>)',
          body: `A description list is a list of terms, with a description of each term:

• \`<dl>\` — Defines the description list container.
• \`<dt>\` — Defines the term (name).
• \`<dd>\` — Defines the description of the term.`,
          code: `<dl>
  <dt><b>HTML</b></dt>
  <dd>HyperText Markup Language for creating web pages.</dd>

  <dt><b>CSS</b></dt>
  <dd>Cascading Style Sheets for describing presentation and design.</dd>

  <dt><b>JS</b></dt>
  <dd>JavaScript for programming dynamic interactivity.</dd>
</dl>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Browsers indent <dd> descriptions automatically.',
            'Description lists are ideal for glossaries, dictionaries, and key-value metadata.'
          ]
        }
      ]
    }
  }
];
