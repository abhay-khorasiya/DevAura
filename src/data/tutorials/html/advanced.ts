import { TutorialChapter } from '../../../types';

export const htmlAdvancedChapters: TutorialChapter[] = [
  // 21. HTML Block & Inline
  {
    id: 'html-block-inline',
    title: 'HTML Block and Inline Elements',
    slug: 'html-block-inline',
    summary: 'Every HTML element has a default display value (block or inline). Understand spacing, line breaks, and flow.',
    readTime: '6 min',
    category: 'HTML Advanced',
    content: {
      overview: 'Every HTML element has a default display value, depending on what type of element it is. There are two display values: block and inline. A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and only takes up as much width as necessary.',
      sections: [
        {
          heading: 'Block vs Inline Comparison',
          body: 'Common block elements: <div>, <h1>-<h6>, <p>, <form>, <header>, <footer>. Common inline elements: <span>, <a>, <img>, <strong>, <em>, <label>.',
          code: `<!-- Block element takes full width -->
<div style="background-color: #e0e7ff; padding: 10px; margin-bottom: 10px;">
  I am a block-level &lt;div&gt; element.
</div>

<!-- Inline elements sit side-by-side on the same line -->
<p>
  This is normal text with an <span style="background-color: #fef08a; padding: 2px 6px;">inline &lt;span&gt;</span> 
  and an <a href="#" style="color: #4f46e5; font-weight: bold;">inline link</a>.
</p>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 22. HTML Div
  {
    id: 'html-div',
    title: 'HTML The <div> Element',
    slug: 'html-div',
    summary: 'The div element is used as a container for other HTML elements. Styling with CSS and grouping content.',
    readTime: '5 min',
    category: 'HTML Advanced',
    content: {
      overview: 'The <div> element is by default a block element, meaning that it takes up all available width, and comes with line breaks before and after. The <div> element has no required attributes, but style, class and id are common. When used together with CSS, the <div> element can be used to style blocks of content.',
      sections: [
        {
          heading: 'Centering and Styling Divs',
          body: 'Using CSS with divs to create modern cards and containers:',
          code: `<div style="max-width: 500px; margin: 20px auto; padding: 24px; border-radius: 12px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
  <h2 style="color: #4f46e5; margin-top: 0;">Card Container</h2>
  <p style="color: #64748b;">The &lt;div&gt; element is the primary layout building block in web development.</p>
</div>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 23. HTML Classes
  {
    id: 'html-classes',
    title: 'HTML The class Attribute',
    slug: 'html-classes',
    summary: 'The class attribute is used to specify a class for an HTML element. Multiple elements can share the same class.',
    readTime: '6 min',
    category: 'HTML Advanced',
    content: {
      overview: 'The HTML class attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class. The class attribute is often used to point to a class name in a style sheet. It can also be used by JavaScript to access and manipulate elements with the specific class name.',
      sections: [
        {
          heading: 'Using Classes for Styling & JavaScript',
          body: 'Multiple classes separated by spaces, selecting with dot (.) in CSS:',
          code: `<style>
  .city {
    background-color: #f1f5f9;
    color: #0f172a;
    padding: 16px;
    margin: 10px 0;
    border-radius: 8px;
    border-left: 4px solid #4f46e5;
  }
  .highlight {
    font-weight: bold;
  }
</style>

<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city highlight">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 24. HTML Id
  {
    id: 'html-id',
    title: 'HTML The id Attribute',
    slug: 'html-id',
    summary: 'The id attribute specifies a unique id for an HTML element. Must be unique within the page.',
    readTime: '6 min',
    category: 'HTML Advanced',
    content: {
      overview: 'The HTML id attribute is used to specify a unique id for an HTML element. You cannot have more than one element with the same id in an HTML document. The id attribute is used to point to a specific style declaration in a style sheet (using #), and is used by JavaScript to access and manipulate the unique element with getElementById().',
      sections: [
        {
          heading: 'Class vs ID Comparison',
          body: 'A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page:',
          code: `<style>
  /* ID selector with # */
  #header-banner {
    background-color: #4f46e5;
    color: white;
    padding: 20px;
    text-align: center;
  }
</style>

<div id="header-banner">
  <h1>Welcome to DevAura</h1>
</div>

<script>
  // Access unique element in JavaScript
  const banner = document.getElementById("header-banner");
  console.log("Banner content:", banner.innerText);
</script>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 25. HTML Iframes
  {
    id: 'html-iframes',
    title: 'HTML Iframes',
    slug: 'html-iframes',
    summary: 'An HTML iframe is used to display a web page within a web page: iframe syntax, height, width, and targets.',
    readTime: '6 min',
    category: 'HTML Advanced',
    content: {
      overview: 'The HTML <iframe> tag specifies an inline frame. An inline frame is used to embed another document within the current HTML document. Always include a title attribute for screen readers and accessibility.',
      sections: [
        {
          heading: 'Iframe Syntax and Link Targeting',
          body: 'Embedding another webpage and targeting link clicks into an iframe:',
          code: `<!-- Standard Iframe -->
<iframe src="https://example.com" title="External Site Preview" width="100%" height="300" style="border: 1px solid #cbd5e1; border-radius: 8px;"></iframe>

<!-- Target for a link -->
<iframe src="demo_default.html" name="iframe_a" height="300px" width="100%" title="Target Frame"></iframe>
<p><a href="https://devaura.dev" target="iframe_a">Load DevAura in Frame above</a></p>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 26. HTML JavaScript
  {
    id: 'html-javascript',
    title: 'HTML JavaScript',
    slug: 'html-javascript',
    summary: 'JavaScript makes HTML pages more dynamic and interactive. The script tag, DOM manipulation, and noscript.',
    readTime: '7 min',
    category: 'HTML Advanced',
    content: {
      overview: 'The HTML <script> tag is used to define a client-side script (JavaScript). The <script> element either contains script statements, or it points to an external script file through the src attribute. The <noscript> tag provides an alternate content for users that have disabled scripts in their browser.',
      sections: [
        {
          heading: 'Manipulating HTML with JavaScript',
          body: 'Changing text, attributes, and styles dynamically:',
          code: `<h2 id="demo">JavaScript can change HTML content</h2>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello DevAura!"' 
  style="background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
  Click Me!
</button>

<noscript>
  <p style="color: red;">Sorry, your browser does not support or has disabled JavaScript!</p>
</noscript>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 27. HTML File Paths
  {
    id: 'html-file-paths',
    title: 'HTML File Paths',
    slug: 'html-file-paths',
    summary: 'A file path describes the location of a file in a website\'s folder structure. Absolute vs relative paths.',
    readTime: '6 min',
    category: 'HTML Advanced',
    content: {
      overview: 'A file path describes the location of a file in a website\'s folder structure. File paths are used when linking to external files, like Web pages, Images, Style sheets, and JavaScripts.',
      sections: [
        {
          heading: 'Relative vs Absolute Paths',
          body: 'File path conventions:\n- `https://.../img.jpg` -> Absolute URL\n- `picture.jpg` -> located in the same folder as the current page\n- `images/picture.jpg` -> located in the images folder in the current folder\n- `/images/picture.jpg` -> located in the images folder at the root of the current web\n- `../picture.jpg` -> located in the folder one level up from the current folder',
          code: `<!-- 1. Absolute Path -->
<img src="https://devaura.dev/assets/logo.png" alt="Absolute URL">

<!-- 2. Relative: inside images subfolder -->
<img src="images/banner.jpg" alt="Subfolder relative">

<!-- 3. Relative: one directory up -->
<img src="../assets/icon.svg" alt="Parent folder relative">`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 28. HTML Head
  {
    id: 'html-head',
    title: 'HTML The Head Element & Metadata',
    slug: 'html-head',
    summary: 'The head container for metadata: title, style, meta, link, script, and base elements.',
    readTime: '7 min',
    category: 'HTML Advanced',
    content: {
      overview: 'The HTML <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag. Metadata is not displayed. Metadata typically define the document title, character set, styles, scripts, and other meta information.',
      sections: [
        {
          heading: 'Complete Production <head> Template',
          body: 'Standard metadata for responsive design, SEO, and social sharing:',
          code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DevAura - Next-Gen Developer Learning</title>
  <meta name="description" content="Free, modern developer learning platform with live interactive sandboxes.">
  <meta name="keywords" content="HTML, CSS, JavaScript, React, Python">
  <meta name="author" content="DevAura Team">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="stylesheet" href="styles.css">
</head>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 29. HTML Layout
  {
    id: 'html-layout',
    title: 'HTML Layout Elements and Techniques',
    slug: 'html-layout',
    summary: 'Websites often display content in multiple columns: header, nav, section, article, aside, and footer.',
    readTime: '7 min',
    category: 'HTML Advanced',
    content: {
      overview: 'A website layout provides a structured visual grid for users. HTML provides semantic layout elements: <header>, <nav>, <section>, <article>, <aside>, and <footer>.',
      sections: [
        {
          heading: 'Modern Semantic Layout Structure',
          body: 'Standard multi-column webpage layout:',
          code: `<header style="background: #4f46e5; color: white; padding: 20px; text-align: center;">
  <h2>DevAura Portal</h2>
</header>

<nav style="background: #e0e7ff; padding: 10px; display: flex; gap: 15px;">
  <a href="#">Home</a>
  <a href="#">Tutorials</a>
  <a href="#">Certificates</a>
</nav>

<div style="display: flex; gap: 20px; padding: 20px;">
  <section style="flex: 3; background: #f8fafc; padding: 15px; border-radius: 8px;">
    <h2>Main Learning Content</h2>
    <p>Articles and tutorials go here.</p>
  </section>
  <aside style="flex: 1; background: #f1f5f9; padding: 15px; border-radius: 8px;">
    <h3>Related Links</h3>
    <p>Sidebar navigation and ads.</p>
  </aside>
</div>

<footer style="background: #0f172a; color: white; padding: 15px; text-align: center;">
  <p>&copy; 2026 DevAura. All rights reserved.</p>
</footer>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 30. HTML Responsive
  {
    id: 'html-responsive',
    title: 'HTML Responsive Web Design',
    slug: 'html-responsive',
    summary: 'Responsive Web Design makes your web page look good on all devices (desktops, tablets, and phones).',
    readTime: '7 min',
    category: 'HTML Advanced',
    content: {
      overview: 'Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge a website, to make it look good on all devices (desktops, tablets, and phones).',
      sections: [
        {
          heading: 'Setting the Viewport & Responsive Images',
          body: 'Crucial viewport tag and fluid images:',
          code: `<!-- 1. Mandatory Viewport Meta Tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- 2. Responsive Image with 100% width and auto height -->
<img src="banner.jpg" style="width: 100%; max-width: 800px; height: auto;" alt="Responsive Banner">

<!-- 3. Using <picture> for art direction -->
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 480px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Responsive device optimized image">
</picture>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 31. HTML Computercode
  {
    id: 'html-computercode',
    title: 'HTML Computer Code Elements',
    slug: 'html-computercode',
    summary: 'code for snippets, kbd for keyboard input, samp for output, var for variables, and pre for formatting.',
    readTime: '5 min',
    category: 'HTML Advanced',
    content: {
      overview: 'HTML contains several elements for defining user input and computer code: <code>, <kbd>, <samp>, <var>, and <pre>.',
      sections: [
        {
          heading: 'Displaying Code and Keyboard Shortcuts',
          body: 'Semantic computer code formatting:',
          code: `<p>Save your code by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd> on Windows.</p>

<p>The JavaScript code <code>console.log("Hello")</code> writes text to the console.</p>

<p>Sample program output: <samp>Error 404: File not found</samp></p>

<p>The area of a triangle is: 1/2 &times; <var>b</var> &times; <var>h</var></p>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 32. HTML Semantics
  {
    id: 'html-semantics',
    title: 'HTML Semantic Elements',
    slug: 'html-semantics',
    summary: 'Semantic elements clearly describe their meaning to both browser and developer: article, aside, details, figcaption, figure, footer, header, main, mark, nav, section, summary, time.',
    readTime: '7 min',
    category: 'HTML Advanced',
    content: {
      overview: 'A semantic element clearly describes its meaning to both the browser and the developer. Non-semantic elements: <div> and <span> (tells nothing about its content). Semantic elements: <form>, <table>, and <article> (clearly defines its content).',
      sections: [
        {
          heading: 'Why Use Semantic Elements?',
          body: 'According to the W3C: "A semantic Web allows data to be shared and reused across applications, enterprises, and communities." Screen readers and search engine crawlers rely on semantic tags to interpret website hierarchy.',
          code: `<main>
  <article>
    <header>
      <h1>Understanding Semantic HTML</h1>
      <p>Published <time datetime="2026-11-03">November 3, 2026</time></p>
    </header>
    <section>
      <p>Semantic tags improve accessibility and SEO rankings.</p>
    </section>
    <figure>
      <img src="chart.png" alt="SEO Traffic Graph">
      <figcaption>Fig.1 - Traffic increase after semantic migration.</figcaption>
    </figure>
  </article>
</main>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 33. HTML Style Guide
  {
    id: 'html-style-guide',
    title: 'HTML Style Guide and Coding Conventions',
    slug: 'html-style-guide',
    summary: 'A consistent, clean, and tidy HTML code makes it easier for others to read and understand your code.',
    readTime: '6 min',
    category: 'HTML Advanced',
    content: {
      overview: 'Consistent coding conventions are important in every development team. They create clean code, improve readability, and enable easier maintenance over time.',
      sections: [
        {
          heading: 'W3C Best Practice Rules',
          body: '1. Always declare <!DOCTYPE html>\n2. Use lowercase element names and attribute names\n3. Always close all HTML elements\n4. Always quote attribute values (e.g. class="btn")\n5. Always specify alt, width, and height for images\n6. Use 2 spaces for indentation (avoid tabs)\n7. Never omit <title> in <head>',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Clean HTML Code Example</title>
</head>
<body>
  <h1>Title in Lowercase Tags</h1>
  <img src="avatar.jpg" alt="User avatar" width="80" height="80">
</body>
</html>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 34. HTML Entities
  {
    id: 'html-entities',
    title: 'HTML Entities',
    slug: 'html-entities',
    summary: 'Reserved characters in HTML must be replaced with character entities: &lt;, &gt;, &amp;, &quot;, &copy;.',
    readTime: '6 min',
    category: 'HTML Advanced',
    content: {
      overview: 'If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags. Character entities are used to display reserved characters in HTML. A character entity looks like this: &entity_name; or &#entity_number;.',
      sections: [
        {
          heading: 'Common Character Entities Table',
          body: 'Entity names and numbers for special characters:',
          code: `<!-- Less than: < -->
<p>5 &lt; 10</p>

<!-- Greater than: > -->
<p>10 &gt; 5</p>

<!-- Ampersand: & -->
<p>AT&amp;T</p>

<!-- Copyright symbol: © -->
<p>&copy; 2026 DevAura Platform</p>

<!-- Euro currency: € -->
<p>Price: &euro; 99.99</p>

<!-- Non-breaking space: prevents automatic line wrap -->
<p>10&nbsp;km/h</p>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 35. HTML Symbols
  {
    id: 'html-symbols',
    title: 'HTML Symbols',
    slug: 'html-symbols',
    summary: 'Mathematical, technical, and currency symbols that are not present on a normal keyboard: plusmn, sum, radic, infin, alpha, spades.',
    readTime: '6 min',
    category: 'HTML Advanced',
    content: {
      overview: 'Many mathematical, technical, and currency symbols are not present on a normal keyboard. To add such symbols to an HTML page, you can use the entity name or the entity number (a decimal or a hexadecimal reference).',
      sections: [
        {
          heading: 'Math, Greek & Suit Symbols',
          body: 'Using entity names and numbers for symbols:',
          code: `<p>Plus or Minus: &plusmn; (&#177;)</p>
<p>Summation: &sum; (&#8721;)</p>
<p>Square Root: &radic; (&#8730;)</p>
<p>Infinity: &infin; (&#8734;)</p>
<p>Not Equal: &ne; (&#8800;)</p>
<p>Greek Alpha: &alpha; and Omega: &Omega;</p>
<p>Playing Card Spades: &spades; Hearts: &hearts;</p>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 36. HTML Emojis
  {
    id: 'html-emojis',
    title: 'HTML Emojis',
    slug: 'html-emojis',
    summary: 'Emojis look like images, or icons, but they are not. They are letters (characters) from the UTF-8 (Unicode) character set.',
    readTime: '5 min',
    category: 'HTML Advanced',
    content: {
      overview: 'Emojis look like images, or icons, but they are not. They are letters (characters) from the UTF-8 (Unicode) character set. To display an emoji in HTML, you declare the UTF-8 charset and use decimal or hexadecimal entity codes.',
      sections: [
        {
          heading: 'Displaying Emojis with Decimal Entities',
          body: 'Rendering emojis with HTML numbers:',
          code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>My First Emojis in HTML</h1>
  <p style="font-size: 32px;">
    &#128512; <!-- Grinning Face 😀 -->
    &#128516; <!-- Smiling Eyes 😄 -->
    &#128187; <!-- Laptop Computer 💻 -->
    &#128640; <!-- Rocket 🚀 -->
    &#127881; <!-- Party Popper 🎉 -->
  </p>
</body>
</html>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 37. HTML Charset
  {
    id: 'html-charset',
    title: 'HTML Character Sets (UTF-8 Standard)',
    slug: 'html-charset',
    summary: 'To display an HTML page correctly, a web browser must know which character set to use: ASCII, ANSI, ISO-8859-1, and UTF-8.',
    readTime: '6 min',
    category: 'HTML Advanced',
    content: {
      overview: 'An encoding standard tells the browser how to translate raw bytes into characters. ASCII was the first character encoding standard (128 characters). UTF-8 covers almost all of the characters and symbols in the world, and is the default character encoding for HTML5.',
      sections: [
        {
          heading: 'Declaring the Character Set',
          body: 'The HTML5 specification recommends UTF-8 in the first line of the <head> element:',
          code: `<head>
  <meta charset="UTF-8">
</head>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 38. HTML URL Encode
  {
    id: 'html-url-encode',
    title: 'HTML URL Encode',
    slug: 'html-url-encode',
    summary: 'URL encoding converts characters into a format that can be transmitted over the Internet using percent encoding (%20).',
    readTime: '6 min',
    category: 'HTML Advanced',
    content: {
      overview: 'URLs can only be sent over the Internet using the ASCII character-set. Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format. URL encoding replaces non-ASCII characters with a "%" followed by two hexadecimal digits.',
      sections: [
        {
          heading: 'Common URL Encoded Characters',
          body: 'URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign or with %20:',
          code: `Character | From ASCII | URL-Encoded
----------|------------|------------
space     | 32         | %20 or +
!         | 33         | %21
"         | 34         | %22
#         | 35         | %23
$         | 36         | %24
%         | 37         | %25
&         | 38         | %26
+         | 43         | %2B
/         | 47         | %2F
:         | 58         | %3A
=         | 61         | %3D
?         | 63         | %3F`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 39. HTML vs. XHTML
  {
    id: 'html-xhtml',
    title: 'HTML vs. XHTML',
    slug: 'html-xhtml',
    summary: 'XHTML is HTML defined as an XML application. Strict syntax rules: lowercase tags, quoted attributes, and closing tags.',
    readTime: '6 min',
    category: 'HTML Advanced',
    content: {
      overview: 'XHTML stands for EXtensible HyperText Markup Language. XHTML is a stricter, more XML-based version of HTML. XHTML is supported by all major browsers. Today, HTML5 is the living standard, but understanding XHTML ensures robust, error-free markup.',
      sections: [
        {
          heading: 'The Most Important Differences in XHTML',
          body: '1. <!DOCTYPE> is mandatory\n2. The xmlns attribute in <html> is mandatory\n3. <html>, <head>, <title>, and <body> are mandatory\n4. Elements must always be properly nested\n5. Elements must always be closed (including empty tags: <br />)\n6. Elements and attributes must always be in lowercase\n7. Attribute values must always be quoted',
          code: `<!-- Correct XHTML Format -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Title of document</title>
</head>
<body>
  <p>Properly closed paragraph with self-closing line break.<br /></p>
</body>
</html>`,
          codeLanguage: 'html'
        }
      ]
    }
  }
];
