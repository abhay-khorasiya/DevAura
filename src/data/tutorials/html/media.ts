import { TutorialChapter } from '../../../types';

export const htmlMediaAndApiChapters: TutorialChapter[] = [
  // 46. HTML Canvas
  {
    id: 'html-canvas',
    title: 'HTML Canvas Graphics',
    slug: 'html-canvas',
    summary: 'The HTML canvas element is used to draw graphics on a web page via JavaScript: paths, boxes, circles, text, and images.',
    readTime: '7 min',
    category: 'HTML Graphics',
    content: {
      overview: 'The HTML <canvas> element is used to draw graphics on a web page via JavaScript. The <canvas> element is only a container for graphics. You must use JavaScript to actually draw the graphics. Canvas has several methods for drawing paths, boxes, circles, text, and adding images.',
      sections: [
        {
          heading: 'Drawing Shapes on a Canvas',
          body: 'Accessing the 2D rendering context and drawing a rectangle and circle:',
          code: `<canvas id="myCanvas" width="300" height="150" style="border:1px solid #cbd5e1; border-radius: 8px;"></canvas>

<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Draw filled rectangle
  ctx.fillStyle = "#4f46e5";
  ctx.fillRect(20, 20, 100, 60);

  // Draw circle (arc)
  ctx.beginPath();
  ctx.arc(200, 50, 35, 0, 2 * Math.PI);
  ctx.fillStyle = "#0284c7";
  ctx.fill();

  // Draw Text
  ctx.font = "14px sans-serif";
  ctx.fillStyle = "#0f172a";
  ctx.fillText("DevAura Canvas", 20, 120);
</script>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 47. HTML SVG
  {
    id: 'html-svg',
    title: 'HTML SVG Graphics',
    slug: 'html-svg',
    summary: 'SVG stands for Scalable Vector Graphics. Vector graphics do NOT lose quality when zoomed or resized. Canvas vs SVG.',
    readTime: '7 min',
    category: 'HTML Graphics',
    content: {
      overview: 'SVG defines vector-based graphics in XML format. SVG graphics are scalable and do not lose any quality if they are zoomed or resized. Every element and every attribute in SVG files can be animated and styled via CSS and scripted with DOM events.',
      sections: [
        {
          heading: 'SVG Shapes & Canvas vs SVG Differences',
          body: 'Drawing vector circles, rectangles, and icons directly in HTML:\n- **Canvas**: Raster bitmap (resolution dependent), fast for game loops and heavy pixel operations, no DOM events.\n- **SVG**: Vector graphics (resolution independent), sharp on all screens, part of DOM tree with full CSS and click listener support.',
          code: `<svg width="300" height="100">
  <!-- Rounded Rectangle -->
  <rect x="10" y="10" rx="8" ry="8" width="80" height="80" style="fill:#4f46e5;stroke:#3730a3;stroke-width:2;" />
  
  <!-- Circle -->
  <circle cx="150" cy="50" r="35" style="fill:#0284c7;stroke:#0369a1;stroke-width:2;" />
  
  <!-- Text -->
  <text x="210" y="55" fill="#0f172a" font-family="sans-serif" font-weight="bold">SVG Vector</text>
</svg>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 48. HTML Media
  {
    id: 'html-media',
    title: 'HTML Media',
    slug: 'html-media',
    summary: 'Multimedia comes in many different formats: sound, music, videos, movies, and animations. Codecs and formats.',
    readTime: '6 min',
    category: 'HTML Media',
    content: {
      overview: 'Multimedia comes in many different formats: audio, video, recordings, animations. Modern browsers support HTML5 native multimedia tags without requiring third-party browser plugins like Flash.',
      sections: [
        {
          heading: 'Common Video & Audio Formats',
          body: 'Format support across modern web browsers:\n- **MP4**: Supported by all browsers (H.264 video + AAC audio). Recommended for universal web playback.\n- **WebM**: High quality open format developed by Google (VP8/VP9/AV1 video + Vorbis/Opus audio).\n- **MP3**: The standard universal format for digital audio.\n- **WAV**: Uncompressed raw audio format.',
          code: `<!-- Media support is handled natively via <video> and <audio> tags -->
<p>Modern HTML5 replaces obsolete plugins with native tags.</p>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 49. HTML Video
  {
    id: 'html-video',
    title: 'HTML Video',
    slug: 'html-video',
    summary: 'The video element is used to show a video on a web page: controls, autoplay, muted, loop, poster, and source fallbacks.',
    readTime: '7 min',
    category: 'HTML Media',
    content: {
      overview: 'Before HTML5, a video could only be played in a browser with a plug-in (like flash). The HTML5 <video> element specifies a standard way to embed a video in a web page.',
      sections: [
        {
          heading: 'The <video> Element and Source Fallbacks',
          body: 'Always provide width, height, controls, and fallback sources:',
          code: `<video width="480" height="270" controls poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  Your browser does not support the video tag.
</video>`,
          codeLanguage: 'html',
          tips: [
            'Autoplay policy: modern browsers only allow autoplay if the video is also muted: `<video autoplay muted>`.'
          ]
        }
      ]
    }
  },

  // 50. HTML Audio
  {
    id: 'html-audio',
    title: 'HTML Audio',
    slug: 'html-audio',
    summary: 'The audio element is used to play an audio file on a web page: controls, autoplay, loop, and source tags.',
    readTime: '6 min',
    category: 'HTML Media',
    content: {
      overview: 'The HTML5 <audio> element specifies a standard way to embed audio files in a web page. The `controls` attribute adds audio controls, like play, pause, and volume.',
      sections: [
        {
          heading: 'The <audio> Element Syntax',
          body: 'Embedding sound files with MP3 and OGG fallback sources:',
          code: `<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 51. HTML Plug-ins
  {
    id: 'html-plugins',
    title: 'HTML Plug-ins (object & embed)',
    slug: 'html-plugins',
    summary: 'Plug-ins are computer programs that extend the standard functionality of the browser: object and embed tags.',
    readTime: '5 min',
    category: 'HTML Media',
    content: {
      overview: 'Plug-ins were designed to be used for many different purposes: display maps, scan for viruses, verify bank identities. Modern web development uses native HTML5 APIs, but <object> and <embed> remain useful for embedding PDF documents.',
      sections: [
        {
          heading: 'Embedding PDF Documents',
          body: 'Displaying PDF documents directly inside the browser page:',
          code: `<!-- 1. The <object> element -->
<object data="handbook.pdf" type="application/pdf" width="100%" height="400px">
  <p>Your browser does not support inline PDFs. <a href="handbook.pdf">Download PDF</a></p>
</object>

<!-- 2. The <embed> element -->
<embed type="application/pdf" src="document.pdf" width="100%" height="400px">`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 52. HTML YouTube
  {
    id: 'html-youtube',
    title: 'HTML YouTube Videos',
    slug: 'html-youtube',
    summary: 'The easiest way to play videos in HTML is to use YouTube. Embedding via iframe with parameters.',
    readTime: '6 min',
    category: 'HTML Media',
    content: {
      overview: 'To play your video on a web page, you can upload the video to YouTube and display it in an <iframe> on your web page. YouTube will automatically play the correct format and resolution for each device.',
      sections: [
        {
          heading: 'YouTube Iframe Embed Syntax',
          body: 'Embedding a YouTube video with autoplay, mute, and loop parameters:',
          code: `<!-- Standard YouTube Embed -->
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>

<!-- YouTube with parameters: autoplay & mute -->
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1">
</iframe>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 53. HTML Geolocation
  {
    id: 'html-geolocation',
    title: 'HTML Geolocation API',
    slug: 'html-geolocation',
    summary: 'The HTML Geolocation API is used to get the geographical position of a user: getCurrentPosition and watchPosition.',
    readTime: '7 min',
    category: 'HTML APIs',
    content: {
      overview: 'The HTML Geolocation API is used to locate a user\'s position. Since this can compromise privacy, the position is not available unless the user approves it. Note: Geolocation is much more accurate for devices with GPS, like smartphones.',
      sections: [
        {
          heading: 'Using getCurrentPosition() with Error Handling',
          body: 'Retrieving user latitude and longitude safely:',
          code: `<button onclick="getLocation()">Get Coordinates</button>
<p id="geo-output"></p>

<script>
  function getLocation() {
    const output = document.getElementById("geo-output");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      output.innerText = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    document.getElementById("geo-output").innerText = 
      "Latitude: " + position.coords.latitude + 
      " | Longitude: " + position.coords.longitude;
  }

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
    }
  }
</script>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 54. HTML Drag and Drop
  {
    id: 'html-drag-drop',
    title: 'HTML Drag and Drop API',
    slug: 'html-drag-drop',
    summary: 'Drag and drop is a very common feature in HTML5. Make any element draggable with draggable="true".',
    readTime: '7 min',
    category: 'HTML APIs',
    content: {
      overview: 'In HTML5, drag and drop is part of the standard: Any element can be draggable. When an element is dragged, the dataTransfer object stores the payload and transfers it to the drop destination.',
      sections: [
        {
          heading: 'Drag and Drop Implementation',
          body: 'Three essential event handlers: ondragstart, ondragover, and ondrop:',
          code: `<div id="drop-target" ondrop="drop(event)" ondragover="allowDrop(event)" 
  style="width:200px; height:100px; padding:10px; border:2px dashed #4f46e5; border-radius:8px;">
  Drop item here
</div>

<br>
<img id="drag-item" src="icon.png" draggable="true" ondragstart="drag(event)" alt="Draggable Item">

<script>
  function allowDrop(ev) {
    ev.preventDefault(); // Default prevents dropping!
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
</script>`,
          codeLanguage: 'html'
        }
      ]
    }
  },

  // 55. HTML Web Storage
  {
    id: 'html-web-storage',
    title: 'HTML Web Storage API (localStorage & sessionStorage)',
    slug: 'html-web-storage',
    summary: 'Store data locally within the user\'s browser: localStorage (persistent) and sessionStorage (per-session).',
    readTime: '7 min',
    category: 'HTML APIs',
    content: {
      overview: 'With HTML web storage, web applications can store data locally within the user\'s browser. Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data (at least 5MB) can be stored locally, without affecting website performance.',
      sections: [
        {
          heading: 'localStorage vs sessionStorage',
          body: 'Setting, retrieving, and serializing objects:',
          code: `// 1. localStorage: Data persists with no expiration time
localStorage.setItem("user_theme", "light");
const theme = localStorage.getItem("user_theme");
console.log("Active theme:", theme);

// Storing objects: must serialize to JSON string
const userProfile = { name: "Alex", role: "Frontend Architect" };
localStorage.setItem("user", JSON.stringify(userProfile));
const loadedUser = JSON.parse(localStorage.getItem("user"));

// 2. sessionStorage: Data is deleted when the browser tab is closed
sessionStorage.setItem("session_token", "abc123xyz");`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },

  // 56. HTML Web Workers
  {
    id: 'html-web-workers',
    title: 'HTML Web Workers API',
    slug: 'html-web-workers',
    summary: 'A web worker is a JavaScript running in the background, without affecting the performance of the page.',
    readTime: '7 min',
    category: 'HTML APIs',
    content: {
      overview: 'When executing scripts in an HTML page, the page becomes unresponsive until the script is finished. A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page.',
      sections: [
        {
          heading: 'Creating and Communicating with a Worker',
          body: 'Offloading CPU-heavy algorithms to background threads:',
          code: `// 1. In main page: app.js
if (typeof(Worker) !== "undefined") {
  const worker = new Worker("heavy_worker.js");

  // Post message to worker thread
  worker.postMessage({ countTo: 10000000 });

  // Listen for completed answer
  worker.onmessage = function(event) {
    document.getElementById("result").innerText = "Result: " + event.data;
  };
}

// 2. In background thread: heavy_worker.js
onmessage = function(e) {
  let sum = 0;
  for (let i = 0; i < e.data.countTo; i++) {
    sum += i;
  }
  postMessage(sum); // Send back to UI
};`,
          codeLanguage: 'javascript'
        }
      ]
    }
  },

  // 57. HTML SSE
  {
    id: 'html-sse',
    title: 'HTML Server-Sent Events (SSE)',
    slug: 'html-sse',
    summary: 'Server-Sent Events (SSE) allow a web page to get updates from a server automatically without polling.',
    readTime: '6 min',
    category: 'HTML APIs',
    content: {
      overview: 'A server-sent event is when a web page automatically gets updates from a server. This was also possible before, but the web page had to ask if any updates were available (polling). With server-sent events, the updates come automatically (e.g. live stock tickers, news feeds, chat notifications).',
      sections: [
        {
          heading: 'The EventSource Object',
          body: 'Listening for real-time stream messages in JavaScript:',
          code: `// Connect to server event stream
if (typeof(EventSource) !== "undefined") {
  const source = new EventSource("/api/live-stream");

  source.onmessage = function(event) {
    document.getElementById("ticker").innerHTML += event.data + "<br>";
  };

  source.onerror = function(err) {
    console.error("Stream connection error:", err);
  };
} else {
  console.log("Sorry, your browser does not support server-sent events.");
}`,
          codeLanguage: 'javascript'
        }
      ]
    }
  }
];
