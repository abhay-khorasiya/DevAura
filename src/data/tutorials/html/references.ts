import { TutorialChapter } from '../../../types';

export const htmlReferencesChapters: TutorialChapter[] = [
  // 58. HTML Tag List
  {
    id: 'html-tag-list',
    title: 'HTML Tag List (Alphabetical)',
    slug: 'html-tag-list',
    summary: 'An alphabetical list of all standard HTML tags defined by W3C and WHATWG specifications.',
    readTime: '8 min',
    category: 'HTML References',
    content: {
      overview: 'DevAura maintains an authoritative alphabetical reference of all standard HTML elements, including descriptions, tag syntax, and browser support.',
      sections: [
        {
          heading: 'Core HTML Tags Reference Table',
          body: 'Common HTML tags grouped alphabetically:',
          code: `Tag         | Description
------------|---------------------------------------------------------
<!--...-->   | Defines an invisible developer comment
<!DOCTYPE>  | Defines the document type declaration (HTML5 standard)
<a>         | Defines a hyperlink
<abbr>      | Defines an abbreviation or an acronym
<address>   | Defines contact information for author/owner
<article>   | Defines independent, self-contained article content
<aside>     | Defines content aside from page content (sidebar)
<audio>     | Defines sound or music content
<b>         | Defines bold text without extra semantic importance
<base>      | Specifies base URL/target for all relative URLs in document
<body>      | Defines document body container
<br>        | Inserts a single line break
<button>    | Defines a clickable form button
<canvas>    | Container to draw graphics via JavaScript
<caption>   | Defines a table caption
<code>      | Defines a piece of computer code
<col>       | Specifies column properties for each column in colgroup
<colgroup>  | Specifies a group of one or more columns in table
<data>      | Links content with machine-readable translation
<datalist>  | Specifies list of pre-defined options for input controls
<dd>        | Defines description/value of a term in description list
<del>       | Defines text that has been deleted from document
<details>   | Defines additional details that user can open/close
<div>       | Defines generic section or block division in document
<dl>        | Defines a description list
<dt>        | Defines a term/name in a description list
<em>        | Defines emphasized text with verbal stress
<embed>     | Defines container for external resource (like PDF)
<fieldset>  | Groups related elements in a form
<figcaption>| Defines caption for figure element
<figure>    | Specifies self-contained content (illustrations, photos)
<footer>    | Defines footer for document or section
<form>      | Defines HTML form for user input
<h1>-<h6>   | Defines HTML headings level 1 to 6
<head>      | Contains metadata/information for document
<header>    | Defines header for document or section
<hr>        | Defines thematic change or horizontal rule
<html>      | Defines root of an HTML document
<i>         | Defines text in an alternate voice or mood
<iframe>    | Defines inline nested browser frame
<img>       | Defines an embedded image
<input>     | Defines an input control in a form
<ins>       | Defines text that has been inserted into document
<kbd>       | Defines keyboard input
<label>     | Defines label for input element
<legend>    | Defines caption for fieldset element
<li>        | Defines list item
<link>      | Defines relationship between document and external resource
<main>      | Specifies main content of document
<map>       | Defines client-side image map
<mark>      | Defines marked/highlighted text
<meta>      | Defines metadata about an HTML document
<nav>       | Defines navigation links
<noscript>  | Defines alternate content for users that do not support JS
<object>    | Defines container for external resource
<ol>        | Defines ordered list
<optgroup>  | Defines group of related options in drop-down list
<option>    | Defines option in a drop-down list
<output>    | Defines result of a calculation
<p>         | Defines paragraph
<picture>   | Defines container for multiple image resources
<pre>       | Defines preformatted text preserving whitespace
<progress>  | Represents progress of a task
<q>         | Defines short inline quotation
<script>    | Defines client-side JavaScript script
<section>   | Defines section in a document
<select>    | Defines drop-down list
<small>     | Defines smaller text
<source>    | Defines multiple media resources for video/audio
<span>      | Defines generic inline container
<strong>    | Defines important text with strong semantic weight
<style>     | Defines style information for a document
<sub>       | Defines subscripted text
<summary>   | Defines visible heading for details element
<sup>       | Defines superscripted text
<svg>       | Defines container for SVG graphics
<table>     | Defines a table
<tbody>     | Groups body content in a table
<td>        | Defines a cell in a table
<template>  | Container for content that should be hidden on load
<textarea>  | Defines multi-line text input control
<tfoot>     | Groups footer content in a table
<th>        | Defines header cell in a table
<thead>     | Groups header content in a table
<time>      | Defines specific time (or datetime)
<title>     | Defines title for document
<tr>        | Defines row in a table
<track>     | Defines text tracks for video/audio (subtitles)
<u>         | Defines text that should be stylistically different
<ul>        | Defines unordered list
<var>       | Defines a variable in programming/math
<video>     | Defines embedded video content
<wbr>       | Defines possible line-break opportunity`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 59. HTML Attributes Reference
  {
    id: 'html-attributes-ref',
    title: 'HTML Attributes Reference',
    slug: 'html-attributes-ref',
    summary: 'A reference list of standard HTML attributes, the elements they belong to, and their functional purpose.',
    readTime: '7 min',
    category: 'HTML References',
    content: {
      overview: 'HTML attributes provide additional information about HTML elements. Some attributes can be used on any element (Global Attributes), while others are specific to certain elements (like href for <a> or src for <img>).',
      sections: [
        {
          heading: 'Common Element-Specific Attributes',
          body: 'Mapping attributes to their parent elements:',
          code: `Attribute    | Belongs to Elements       | Purpose
-------------|---------------------------|------------------------------------------
accept       | <input type="file">       | Types of files that server accepts
action       | <form>                    | Where to send form data on submission
alt          | <area>, <img>, <input>    | Alternate text when element cannot render
autoplay     | <audio>, <video>          | Media automatically starts playing
checked      | <input type="checkbox">   | Specifies that input should be pre-selected
controls     | <audio>, <video>          | Displays play/pause/volume media controls
disabled     | <button>, <input>, etc.   | Disables user interaction
download     | <a>, <area>               | Target will be downloaded when clicked
href         | <a>, <area>, <base>, <link>| Hyperlink destination URL
method       | <form>                    | HTTP method for sending data (GET/POST)
multiple     | <input>, <select>         | Allows user to select multiple values
name         | <input>, <select>, etc.   | Name of form control sent to server
placeholder  | <input>, <textarea>       | Hint displayed before user enters value
readonly     | <input>, <textarea>       | Value cannot be modified by user
required     | <input>, <select>, etc.   | Element must be filled out before submit
src          | <audio>, <img>, <script>  | URL of embedded media/script resource
target       | <a>, <area>, <form>       | Where to open response (_blank, _self)
type         | <button>, <input>, <link> | Type of element or MIME type`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 60. HTML Global Attributes
  {
    id: 'html-global-attributes',
    title: 'HTML Global Attributes',
    slug: 'html-global-attributes',
    summary: 'Global attributes are attributes that can be used with ALL HTML elements: class, id, data-*, style, title, etc.',
    readTime: '7 min',
    category: 'HTML References',
    content: {
      overview: 'Global attributes are attributes that can be used on any HTML element. They apply universally across semantic, structural, and interactive elements.',
      sections: [
        {
          heading: 'All HTML Global Attributes Reference',
          body: 'The universal attributes table:',
          code: `Attribute         | Description
------------------|-----------------------------------------------------------
accesskey         | Specifies a shortcut key to activate/focus on an element
class             | Specifies one or more classnames for styling/JS selection
contenteditable   | Specifies whether the content of an element is editable
data-*            | Used to store custom data private to the page or application
dir               | Specifies the text direction for the content (ltr / rtl)
draggable         | Specifies whether an element is draggable (true / false)
hidden            | Specifies that an element is not yet, or is no longer, relevant
id                | Specifies a unique id for an element
lang              | Specifies the language of the element's content
spellcheck        | Specifies whether element should be checked for spelling
style             | Specifies an inline CSS style for an element
tabindex          | Specifies the tabbing order of an element (keyboard navigation)
title             | Specifies extra information about an element (tooltip)
translate         | Specifies whether content of an element should be translated`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 61. HTML Browser Support Reference
  {
    id: 'html-browser-support',
    title: 'HTML Browser Support Reference',
    slug: 'html-browser-support',
    summary: 'Compatibility standards across major rendering engines: Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge.',
    readTime: '6 min',
    category: 'HTML References',
    content: {
      overview: 'Modern browsers implement the WHATWG HTML Living Standard. This reference outlines element compatibility and how browsers handle unrecognized tags by falling back to inline formatting.',
      sections: [
        {
          heading: 'Modern HTML5 Support Overview',
          body: 'All modern browsers (Chrome 120+, Firefox 120+, Safari 17+, Edge 120+) fully support the semantic tags, canvas, SVG, Web Storage, and multimedia elements natively without polyfills.',
          code: `Feature / Tag     | Chrome | Firefox | Safari | Edge
------------------|--------|---------|--------|------
<article>, <nav>  | Yes    | Yes     | Yes    | Yes
<canvas> 2D       | Yes    | Yes     | Yes    | Yes
<video>, <audio>  | Yes    | Yes     | Yes    | Yes
localStorage      | Yes    | Yes     | Yes    | Yes
Web Workers       | Yes    | Yes     | Yes    | Yes
Dialog <dialog>   | Yes    | Yes     | Yes    | Yes`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 62. HTML Events Reference
  {
    id: 'html-events-ref',
    title: 'HTML Event Attributes Reference',
    slug: 'html-events-ref',
    summary: 'HTML has the ability to let events trigger actions in a browser: Window, Form, Keyboard, Mouse, and Media events.',
    readTime: '8 min',
    category: 'HTML References',
    content: {
      overview: 'HTML events allow JavaScript to execute when users interact with the webpage (clicking buttons, pressing keys, resizing the window, submitting forms, or scrolling).',
      sections: [
        {
          heading: 'Categorized HTML Events Table',
          body: 'Common events used in HTML attributes and JavaScript listeners:',
          code: `Category  | Event Attributes
----------|-----------------------------------------------------------
Window    | onload, onunload, onresize, onscroll, onerror
Form      | onchange, onsubmit, onreset, onselect, oninput, oninvalid
Keyboard  | onkeydown, onkeypress, onkeyup
Mouse     | onclick, ondblclick, onmousedown, onmousemove, onmouseout, onmouseover, onmouseup, onwheel
Drag      | ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop
Clipboard | oncopy, oncut, onpaste
Media     | onplay, onpause, onended, onvolumechange, onwaiting, ontimeupdate`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 63. HTML Colors Reference
  {
    id: 'html-colors-ref',
    title: 'HTML Color Names, HEX and RGB Reference',
    slug: 'html-colors-ref',
    summary: 'All 140 HTML color names supported by all modern browsers, with their corresponding HEX and RGB values.',
    readTime: '7 min',
    category: 'HTML References',
    content: {
      overview: 'All modern browsers support 140 standard color names defined in the CSS color specification. Below is a curated reference of the most popular UI color names along with their HEX and RGB representations.',
      sections: [
        {
          heading: 'Popular Web Colors Reference Table',
          body: 'Standard colors table:',
          code: `Color Name       | HEX Code | RGB Value
-----------------|----------|--------------------
Tomato           | #FF6347  | rgb(255, 99, 71)
Orange           | #FFA500  | rgb(255, 165, 0)
DodgerBlue       | #1E90FF  | rgb(30, 144, 255)
MediumSeaGreen   | #3CB371  | rgb(60, 179, 113)
SlateBlue        | #6A5ACD  | rgb(106, 90, 205)
Violet           | #EE82EE  | rgb(238, 130, 238)
LightGray        | #D3D3D3  | rgb(211, 211, 211)
White            | #FFFFFF  | rgb(255, 255, 255)
Black            | #000000  | rgb(0, 0, 0)`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 64. HTML Canvas Reference
  {
    id: 'html-canvas-ref',
    title: 'HTML Canvas 2D API Reference',
    slug: 'html-canvas-ref',
    summary: 'The HTML5 canvas tag is used to draw graphics on the fly with JavaScript. Properties, methods, and rendering context.',
    readTime: '8 min',
    category: 'HTML References',
    content: {
      overview: 'The HTML5 `<canvas>` element provides a 2D drawing context with comprehensive methods for vector shapes, raster graphics, text manipulation, and composite blending modes.',
      sections: [
        {
          heading: 'Canvas 2D Context Methods & Properties',
          body: 'Core API reference:',
          code: `Method / Property  | Purpose
-------------------|-------------------------------------------------------
fillStyle          | Sets or returns color, gradient, or pattern for fills
strokeStyle        | Sets or returns color, gradient, or pattern for lines
lineWidth          | Sets or returns current line width
fillRect(x,y,w,h)  | Draws a "filled" rectangle
strokeRect(x,y,w,h)| Draws a rectangle (no fill)
clearRect(x,y,w,h) | Clears pixels within a rectangle
beginPath()        | Begins a path, or resets the current path
moveTo(x,y)        | Moves the path to a specified coordinate
lineTo(x,y)        | Adds a new point and creates a line to that point
arc(x,y,r,sA,eA)   | Creates an arc/curve (used to draw circles)
stroke()           | Actually draws the path you have defined
fill()             | Fills the current drawing (path)
font               | Sets or returns current font properties for text
fillText(text,x,y) | Draws "filled" text on canvas`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 65. HTML Audio/Video DOM Reference
  {
    id: 'html-media-ref',
    title: 'HTML Audio/Video DOM Reference',
    slug: 'html-media-ref',
    summary: 'HTML5 DOM methods, properties, and events for manipulating audio and video elements with JavaScript.',
    readTime: '7 min',
    category: 'HTML References',
    content: {
      overview: 'The HTML5 DOM specifies methods, properties, and events for the <video> and <audio> elements, allowing developers to build custom video players with play, pause, volume, and seek bars.',
      sections: [
        {
          heading: 'Media Methods and Properties',
          body: 'Key properties and methods:',
          code: `Property / Method | Description
------------------|---------------------------------------------------------
play()            | Starts playing the audio/video
pause()           | Pauses the currently playing audio/video
currentTime       | Sets or returns the current playback position (in seconds)
duration          | Returns the total length of the audio/video (in seconds)
paused            | Returns whether the audio/video is paused (boolean)
volume            | Sets or returns the volume (0.0 to 1.0)
muted             | Sets or returns whether audio is muted (boolean)
playbackRate      | Sets or returns speed of video playback (1.0 = normal)`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 66. HTML Doctypes Reference
  {
    id: 'html-doctypes',
    title: 'HTML Doctypes Reference',
    slug: 'html-doctypes',
    summary: 'The <!DOCTYPE> declaration must be the very first thing in your HTML document, before the <html> tag.',
    readTime: '6 min',
    category: 'HTML References',
    content: {
      overview: 'The <!DOCTYPE> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in. The doctype declaration is not case-sensitive.',
      sections: [
        {
          heading: 'HTML5 vs Historical Doctypes',
          body: 'In HTML5, the declaration is simple and clean. In older specifications (HTML 4.01, XHTML), doctypes referred to a DTD (Document Type Definition):',
          code: `<!-- 1. HTML5 (Modern Standard) -->
<!DOCTYPE html>

<!-- 2. HTML 4.01 Strict (Historical) -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- 3. XHTML 1.0 Transitional (Historical) -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 67. HTML Character Sets Reference
  {
    id: 'html-charset-ref',
    title: 'HTML Character Sets Reference (ASCII, ANSI, ISO, UTF-8)',
    slug: 'html-charset-ref',
    summary: 'Complete overview of character encoding standards: 128-char ASCII, Windows-1252 ANSI, ISO-8859-1, and modern UTF-8.',
    readTime: '6 min',
    category: 'HTML References',
    content: {
      overview: 'An encoding standard tells the browser how to translate raw bytes into characters. This reference explains the history from 7-bit ASCII to modern UTF-8.',
      sections: [
        {
          heading: 'Encoding Comparison Table',
          body: 'Character sets comparison:',
          code: `Character Set | Number of Characters | Notes
--------------|----------------------|---------------------------------------
ASCII         | 128 (7-bit)          | Basic English alphabet, numbers, controls
ANSI (Win-1252| 256 (8-bit)          | Extended ASCII for Windows
ISO-8859-1    | 256 (8-bit)          | Latin-1 default in HTML 4
UTF-8         | 1,112,064+ (Variable)| Standard for HTML5. Covers ALL languages & emojis`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 68. HTML URL Encoding Reference
  {
    id: 'html-url-encode-ref',
    title: 'HTML URL Encoding Reference',
    slug: 'html-url-encode-ref',
    summary: 'URL encoding converts characters into a format that can be transmitted over the Internet with % and hexadecimal digits.',
    readTime: '6 min',
    category: 'HTML References',
    content: {
      overview: 'URLs can only be sent over the Internet using the ASCII character-set. Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format. URL encoding replaces non-ASCII characters with a "%" followed by two hexadecimal digits.',
      sections: [
        {
          heading: 'URL Encoding Reference Table',
          body: 'Hex percent-encodings for special ASCII characters:',
          code: `Character | Hex Encoding | URL Purpose
----------|--------------|--------------------------------------------
Space     | %20 or +     | Separates words
!         | %21          | Exclamation mark
"         | %22          | Double quote
#         | %23          | Fragment anchor identifier
$         | %24          | Dollar sign
%         | %25          | Percent symbol itself
&         | %26          | Query parameter separator
'         | %27          | Single quote
+         | %2B          | Plus symbol
/         | %2F          | URL path separator
:         | %3A          | Protocol & port separator
=         | %3D          | Query parameter assignment
?         | %3F          | Query string delimiter`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 69. HTML Language Codes Reference
  {
    id: 'html-lang-codes',
    title: 'HTML Language Code Reference (ISO 639-1)',
    slug: 'html-lang-codes',
    summary: 'Language codes are used in HTML with the lang attribute to declare the language of the webpage or element.',
    readTime: '6 min',
    category: 'HTML References',
    content: {
      overview: 'The HTML `lang` attribute is used to declare the language of a Web page or a section of a Web page. This is meant to assist search engines and screen readers. In HTML5, the language code is defined by the ISO 639-1 two-letter standard.',
      sections: [
        {
          heading: 'ISO 639-1 Language Codes Table',
          body: 'Common two-letter language declarations:',
          code: `Language Name | ISO Code | Declaration Example
--------------|----------|----------------------------------------
English       | en       | <html lang="en">
Spanish       | es       | <html lang="es">
French        | fr       | <html lang="fr">
German        | de       | <html lang="de">
Hindi         | hi       | <html lang="hi">
Gujarati      | gu       | <html lang="gu">
Chinese       | zh       | <html lang="zh">
Japanese      | ja       | <html lang="ja">
Arabic        | ar       | <html lang="ar" dir="rtl">`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 70. HTTP Status Messages
  {
    id: 'http-messages',
    title: 'HTTP Status Messages & Response Codes',
    slug: 'http-messages',
    summary: 'When a browser requests a page from a web server, the server returns an HTTP status code: 1xx, 2xx, 3xx, 4xx, 5xx.',
    readTime: '8 min',
    category: 'HTTP & Networking',
    content: {
      overview: 'When a browser requests a service from a web server, an error might occur, or the page is returned successfully. A status code is a three-digit integer returned in the HTTP response headers.',
      sections: [
        {
          heading: 'HTTP Status Code Classes & Common Codes',
          body: 'Categorized HTTP status codes:',
          code: `Class | Meaning       | Common Codes
------|---------------|--------------------------------------------------
1xx   | Informational | 100 Continue, 101 Switching Protocols
2xx   | Success       | 200 OK (Standard success)
      |               | 201 Created (Resource successfully created)
      |               | 204 No Content (Action performed, no body)
3xx   | Redirection   | 301 Moved Permanently (Permanent redirect)
      |               | 302 Found (Temporary redirect)
      |               | 304 Not Modified (Cached resource valid)
4xx   | Client Error  | 400 Bad Request (Malformed request syntax)
      |               | 401 Unauthorized (Authentication required)
      |               | 403 Forbidden (Server refuses authorization)
      |               | 404 Not Found (Resource does not exist)
      |               | 429 Too Many Requests (Rate limit exceeded)
5xx   | Server Error  | 500 Internal Server Error (Server crashed)
      |               | 502 Bad Gateway (Upstream server error)
      |               | 503 Service Unavailable (Overloaded/Maintenance)
      |               | 504 Gateway Timeout (Upstream timed out)`,
          codeLanguage: 'text'
        }
      ]
    }
  },

  // 71. HTTP Request Methods
  {
    id: 'http-methods',
    title: 'HTTP Request Methods (GET, POST, PUT, DELETE, PATCH, etc.)',
    slug: 'http-methods',
    summary: 'The set of request methods to indicate the desired action to be performed: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS.',
    readTime: '8 min',
    category: 'HTTP & Networking',
    content: {
      overview: 'HTTP (Hypertext Transfer Protocol) is designed to enable communications between clients and servers. HTTP works as a request-response protocol between a client (web browser) and a server. A web browser may submit an HTTP request to the server; then the server returns a response to the browser.',
      sections: [
        {
          heading: 'The 8 HTTP Methods Reference',
          body: 'The primary methods used in REST APIs and web forms:',
          code: `Method  | Description                    | Safe? | Idempotent? | Request Body?
--------|--------------------------------|-------|-------------|--------------
GET     | Requests data from resource    | YES   | YES         | No
POST    | Submits data to be processed   | NO    | NO          | YES
PUT     | Replaces target resource       | NO    | YES         | YES
DELETE  | Deletes target resource        | NO    | YES         | Optional
PATCH   | Applies partial modifications  | NO    | NO          | YES
HEAD    | Same as GET, but headers only  | YES   | YES         | No
OPTIONS | Describes communication options| YES   | YES         | No
TRACE   | Performs loop-back test        | YES   | YES         | No`,
          codeLanguage: 'text'
        },
        {
          heading: 'GET vs POST Detailed Comparison',
          body: 'Why and when to use GET versus POST in forms and APIs:',
          code: `Feature       | GET                          | POST
--------------|------------------------------|-------------------------------
BACK button   | Harmless                     | Data re-submitted (browser warning)
Bookmarked    | Can be bookmarked            | Cannot be bookmarked
Cached        | Can be cached                | Not cached by default
Encoding type | application/x-www-form...    | Supports multipart/form-data (files)
History       | Parameters remain in history | Parameters not saved in history
Restrictions  | Max URL length (~2048 chars) | No size restriction
Security      | Poor (Data visible in URL)   | Better (Data sent in HTTP body)`,
          codeLanguage: 'text'
        }
      ]
    }
  }
];
