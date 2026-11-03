import { TutorialChapter } from '../../types';

export const jqueryChapters: TutorialChapter[] = [
  // 1. jQuery HOME
  {
    id: 'jquery-home',
    title: 'jQuery HOME',
    slug: 'jquery-home',
    summary: 'jQuery is a fast, small, and feature-rich JavaScript library designed to simplify HTML DOM tree traversal and event handling.',
    readTime: '3 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'jQuery revolutionized web development with its famous slogan: "write less, do more". It makes HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
      sections: [
        {
          heading: 'Your First jQuery Code',
          body: 'The famous dollar sign ($) is an alias for the jQuery function:',
          code: `$(document).ready(function() {
  $("button").click(function() {
    $("p").hide();
  });
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Interactive jQuery Demo</h3>
    <p id="demoText" style="color:#334155;">Click the button below to toggle this paragraph!</p>
    <button id="toggleBtn" style="background:#4f46e5; color:white; border:none; padding:8px 16px; border-radius:6px; cursor:pointer;">
      Toggle Paragraph
    </button>
  </div>
  <script>
    $('#toggleBtn').click(function() {
      $('#demoText').toggle(300);
    });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 2. jQuery Intro
  {
    id: 'jquery-intro',
    title: 'jQuery Introduction',
    slug: 'jquery-intro',
    summary: 'Why use jQuery? Cross-browser normalization, concise CSS selector querying, and animation engines.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'Before jQuery, writing JavaScript that worked consistently across Internet Explorer, Firefox, and Safari required hundreds of lines of browser-detection workarounds. jQuery wrapped all standard browser quirks into elegant, clean single-line methods.',
      sections: [
        {
          heading: 'What jQuery Provides',
          body: '1. HTML/DOM manipulation. 2. CSS manipulation. 3. HTML event methods. 4. Effects and animations. 5. AJAX utilities.',
          code: `// Vanilla JavaScript:
// document.querySelectorAll('.card').forEach(el => el.style.backgroundColor = 'blue');

// jQuery equivalent:
$('.card').css('background-color', '#4f46e5');`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Why Learn jQuery in 2026?</h4>
    <p>Over 75% of the top 10 million websites still rely on jQuery (including WordPress themes, legacy enterprise portals, and plugins like DataTables, Select2, and Slick Carousel).</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 3. jQuery Get Started
  {
    id: 'jquery-getstarted',
    title: 'jQuery Get Started',
    slug: 'jquery-getstarted',
    summary: 'Including jQuery in your webpages via CDN or downloading the minified library.',
    readTime: '3 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'There are two ways to start using jQuery on your web site: 1. Download the jQuery library from jQuery.com, or 2. Include jQuery from a Content Delivery Network (CDN) like Google, Cloudflare, or official jQuery CDN.',
      sections: [
        {
          heading: 'Adding jQuery via CDN',
          body: 'Place the <script> tag inside the <head> or right before the closing </body> tag:',
          code: `<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    <span id="versionNotice">Loading jQuery...</span>
  </div>
  <script>
    $('#versionNotice').text('jQuery Loaded Successfully! Version: ' + $.fn.jquery);
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 4. jQuery Syntax
  {
    id: 'jquery-syntax',
    title: 'jQuery Syntax & Document Ready',
    slug: 'jquery-syntax',
    summary: 'The basic syntax: $(selector).action() and $(document).ready() event listener.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s). Basic syntax is: $(selector).action().',
      sections: [
        {
          heading: 'Document Ready Event',
          body: 'Always wrap jQuery code in $(document).ready() so code does not run until the DOM hierarchy is fully constructed by the browser:',
          code: `// Standard Syntax:
$(document).ready(function() {
  // jQuery methods go here...
});

// Shorthand Syntax:
$(function() {
  // Same thing, shorter to write!
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Syntax Breakdown:</h4>
    <p>1. <code>$</code> : Defines/accesses jQuery</p>
    <p>2. <code>(selector)</code> : "Queries" or finds HTML elements</p>
    <p>3. <code>action()</code> : A jQuery action/method to be performed on the elements</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 5. jQuery Selectors
  {
    id: 'jquery-selectors',
    title: 'jQuery Selectors',
    slug: 'jquery-selectors',
    summary: 'Element selectors $("p"), ID selectors $("#intro"), class selectors $(".highlight"), and attribute filters.',
    readTime: '5 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'jQuery selectors allow you to select and manipulate HTML element(s). jQuery selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more.',
      sections: [
        {
          heading: 'Common jQuery Selectors',
          body: 'Selecting elements using CSS3 selector syntax:',
          code: `$("*")                // Selects all elements
$(this)               // Selects the current HTML element
$("p.intro")          // Selects all <p> elements with class="intro"
$("p:first")          // Selects the first <p> element
$("ul li:first-child")// Selects the first <li> element of every <ul>
$("[href]")           // Selects all elements with an href attribute
$(":button")          // Selects all <button> elements and <input type="button">`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <p class="highlight" style="padding:4px;">Paragraph 1 (class="highlight")</p>
  <p style="padding:4px;">Paragraph 2</p>
  <p class="highlight" style="padding:4px;">Paragraph 3 (class="highlight")</p>
  <button id="selBtn" style="background:#0284c7; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">
    Highlight (.highlight)
  </button>
  <script>
    $('#selBtn').click(function() {
      $('p.highlight').css({'background-color': '#e0e7ff', 'color': '#4338ca', 'border-left': '4px solid #4f46e5'});
    });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 6. jQuery Events
  {
    id: 'jquery-events',
    title: 'jQuery Event Methods',
    slug: 'jquery-events',
    summary: 'Binding user interactions: click, dblclick, mouseenter, mouseleave, hover, focus, blur, and on().',
    readTime: '5 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'All the different visitors\' actions that a web page can respond to are called events. An event represents the precise moment when something happens (e.g. moving mouse, clicking, submitting form).',
      sections: [
        {
          heading: 'The on() Method for Multiple Events',
          body: 'Attaching multiple event handlers to selected elements:',
          code: `$("p").on({
  mouseenter: function() {
    $(this).css("background-color", "#eff6ff");
  },
  mouseleave: function() {
    $(this).css("background-color", "transparent");
  },
  click: function() {
    $(this).css("color", "#4f46e5");
  }
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div id="hoverBox" style="padding:20px; border:2px dashed #cbd5e1; border-radius:8px; text-align:center; cursor:pointer;">
    Hover or click over this card!
  </div>
  <script>
    $('#hoverBox').on({
      mouseenter: function() { $(this).css({'background': '#e0e7ff', 'border-color': '#6366f1'}); },
      mouseleave: function() { $(this).css({'background': '#fff', 'border-color': '#cbd5e1'}); },
      click: function() { $(this).html('<strong>Clicked!</strong>'); }
    });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 7. jQuery Hide and Show
  {
    id: 'jquery-hide-show',
    title: 'jQuery Hide and Show',
    slug: 'jquery-hide-show',
    summary: 'Toggling visibility using hide(), show(), and toggle() with speed durations.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'With jQuery, you can hide and show HTML elements with the hide() and show() methods. You can also toggle between hiding and showing an element with toggle().',
      sections: [
        {
          heading: 'Speed and Callback Syntax',
          body: '$(selector).hide(speed, callback); where speed can be "slow", "fast", or milliseconds:',
          code: `$("#hideBtn").click(function() {
  $("p").hide(1000); // hides over 1000ms
});

$("#showBtn").click(function() {
  $("p").show("slow");
});

$("#toggleBtn").click(function() {
  $("p").toggle(400);
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <p id="targetPara" style="background:#eff6ff; padding:12px; border-radius:6px; color:#1e293b;">
    This is an animated paragraph widget.
  </p>
  <button id="hBtn" style="background:#64748b; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Hide</button>
  <button id="sBtn" style="background:#0284c7; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Show</button>
  <button id="tBtn" style="background:#4f46e5; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Toggle</button>
  <script>
    $('#hBtn').click(function() { $('#targetPara').hide(400); });
    $('#sBtn').click(function() { $('#targetPara').show(400); });
    $('#tBtn').click(function() { $('#targetPara').toggle(400); });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 8. jQuery Fading
  {
    id: 'jquery-fading',
    title: 'jQuery Fade Effects (fadeIn, fadeOut, fadeToggle, fadeTo)',
    slug: 'jquery-fading',
    summary: 'Adjusting opacity smoothly: fadeIn, fadeOut, fadeToggle, and fadeTo.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'With jQuery you can fade elements in and out of visibility. jQuery has the following fade methods: fadeIn(), fadeOut(), fadeToggle(), and fadeTo().',
      sections: [
        {
          heading: 'fadeTo() with Target Opacity',
          body: '$(selector).fadeTo(speed, opacity, callback); fades to a partial opacity between 0 and 1:',
          code: `$("#fadeBtn").click(function() {
  $("#box1").fadeIn();
  $("#box2").fadeOut("slow");
  $("#box3").fadeToggle(1000);
  $("#box4").fadeTo("slow", 0.35); // 35% opacity
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="display:flex; gap:10px; margin-bottom:12px;">
    <div id="b1" style="width:60px; height:60px; background:#4f46e5; border-radius:6px;"></div>
    <div id="b2" style="width:60px; height:60px; background:#0284c7; border-radius:6px;"></div>
    <div id="b3" style="width:60px; height:60px; background:#10b981; border-radius:6px;"></div>
  </div>
  <button id="fadeDemo" style="background:#4f46e5; color:white; border:none; padding:6px 14px; border-radius:4px; cursor:pointer;">
    Fade Toggle Boxes
  </button>
  <script>
    $('#fadeDemo').click(function() {
      $('#b1').fadeToggle('fast');
      $('#b2').fadeToggle('slow');
      $('#b3').fadeToggle(1200);
    });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 9. jQuery Sliding
  {
    id: 'jquery-sliding',
    title: 'jQuery Slide Effects (slideDown, slideUp, slideToggle)',
    slug: 'jquery-sliding',
    summary: 'Vertical accordion slide effects: slideDown, slideUp, and slideToggle.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'With jQuery you can create a sliding effect on elements. jQuery has the following slide methods: slideDown(), slideUp(), and slideToggle().',
      sections: [
        {
          heading: 'Accordion Panel with slideToggle()',
          body: 'Building smooth expandable accordion content cards:',
          code: `$("#flip").click(function() {
  $("#panel").slideToggle("slow");
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div id="flip" style="background:#4f46e5; color:#fff; padding:10px; border-radius:6px 6px 0 0; cursor:pointer; font-weight:bold;">
    Click to Slide Toggle Panel &#9660;
  </div>
  <div id="panel" style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:0 0 6px 6px; display:none;">
    DevAura animated accordion panel smoothly expanded via jQuery slideDown()!
  </div>
  <script>
    $('#flip').click(function() {
      $('#panel').slideToggle(350);
    });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 10. jQuery Animation
  {
    id: 'jquery-animate',
    title: 'jQuery Animation (animate)',
    slug: 'jquery-animate',
    summary: 'Creating custom CSS animations, animating multiple properties, relative values, and queues.',
    readTime: '5 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'The jQuery animate() method is used to create custom animations. Syntax: $(selector).animate({params}, speed, callback); The required params parameter defines the CSS properties to be animated.',
      sections: [
        {
          heading: 'Queueing Multiple Animations',
          body: 'By default, jQuery comes with queue functionality for animations. If you write multiple animate() calls after each other, jQuery creates an "internal" queue behind the scenes:',
          code: `$("button").click(function() {
  var div = $("div");
  div.animate({height: '300px', opacity: '0.4'}, "slow");
  div.animate({width: '300px', opacity: '0.8'}, "slow");
  div.animate({height: '100px', opacity: '0.4'}, "slow");
  div.animate({width: '100px', opacity: '0.8'}, "slow");
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div id="animBox" style="background:#4f46e5; width:80px; height:80px; border-radius:8px; margin-bottom:16px;"></div>
  <button id="runAnim" style="background:#0284c7; color:#fff; border:none; padding:8px 16px; border-radius:4px; cursor:pointer;">
    Run Queued Animation
  </button>
  <script>
    $('#runAnim').click(function() {
      var box = $('#animBox');
      box.animate({width: '160px', opacity: 0.6}, 400)
         .animate({height: '160px', opacity: 1.0}, 400)
         .animate({width: '80px', height: '80px'}, 400);
    });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 11. jQuery Stop
  {
    id: 'jquery-stop',
    title: 'jQuery Stop Animations (stop)',
    slug: 'jquery-stop',
    summary: 'Stopping running animations and clearing animation queues with stop().',
    readTime: '3 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'The jQuery stop() method is used to stop an animation or effect before it is finished. The stop() method works for all jQuery effect functions, including sliding, fading, and custom animations.',
      sections: [
        {
          heading: 'stop() Parameters',
          body: '$(selector).stop(stopAll, goToEnd); stopAll clears the queue; goToEnd immediately completes the current animation:',
          code: `$("#stop").click(function() {
  $("#panel").stop();
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <button id="startSlide" style="background:#4f46e5; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Start Slide</button>
  <button id="stopSlide" style="background:#ef4444; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Stop Immediately</button>
  <div id="slDiv" style="background:#eff6ff; border:1px solid #bfdbfe; height:120px; margin-top:10px; display:none; padding:12px;">Sliding content...</div>
  <script>
    $('#startSlide').click(function() { $('#slDiv').slideToggle(4000); });
    $('#stopSlide').click(function() { $('#slDiv').stop(); });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 12. jQuery Callback Functions
  {
    id: 'jquery-callback',
    title: 'jQuery Callback Functions',
    slug: 'jquery-callback',
    summary: 'Executing actions strictly after an animation or effect has 100% finished.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. A callback function is executed after the current effect is 100% finished.',
      sections: [
        {
          heading: 'Callback vs Immediate Code',
          body: 'Passing a completion callback:',
          code: `// With callback: alert fires AFTER paragraph hides completely
$("button").click(function() {
  $("p").hide("slow", function() {
    alert("The paragraph is now hidden");
  });
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <p id="cbPara" style="background:#eff6ff; padding:10px; border-radius:6px;">Watch this paragraph hide with a callback!</p>
  <button id="cbBtn" style="background:#4f46e5; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Hide with Callback</button>
  <span id="cbStatus" style="margin-left:12px; color:#10b981; font-weight:bold;"></span>
  <script>
    $('#cbBtn').click(function() {
      $('#cbPara').hide(800, function() {
        $('#cbStatus').text('Callback: Effect 100% Completed!');
      });
    });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 13. jQuery Chaining
  {
    id: 'jquery-chaining',
    title: 'jQuery Chaining',
    slug: 'jquery-chaining',
    summary: 'Connecting multiple jQuery methods together on the same element in a single execution.',
    readTime: '3 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'Until now we have been writing jQuery statements one at a time (one after the other). However, there is a technique called chaining, that allows us to run multiple jQuery commands, one after the other, on the same element(s).',
      sections: [
        {
          heading: 'Chaining Example',
          body: 'Methods return the jQuery object reference so calls can be chained:',
          code: `$("#p1")
  .css("color", "red")
  .slideUp(2000)
  .slideDown(2000);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <p id="chainTarget" style="font-weight:bold; color:#1e293b;">Chaining CSS + SlideUp + SlideDown</p>
  <button id="chainBtn" style="background:#4f46e5; color:white; border:none; padding:6px 14px; border-radius:4px; cursor:pointer;">
    Run Method Chain
  </button>
  <script>
    $('#chainBtn').click(function() {
      $('#chainTarget')
        .css('color', '#4f46e5')
        .slideUp(400)
        .slideDown(400);
    });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 14. jQuery HTML Get & Set
  {
    id: 'jquery-dom-get-set',
    title: 'jQuery HTML Get & Set (text, html, val, attr)',
    slug: 'jquery-dom-get-set',
    summary: 'Retrieving and updating inner text, HTML markup, form values, and element attributes.',
    readTime: '5 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'One very important part of jQuery is the possibility to manipulate the DOM (Document Object Model). Three simple, but useful, jQuery methods for DOM manipulation are: text(), html(), and val().',
      sections: [
        {
          heading: 'text(), html(), val(), and attr()',
          body: 'Get values when called with no arguments; set values when passing an argument:',
          code: `// GET:
var txt = $("#test").text();     // Retrieves text only
var html = $("#test").html();    // Retrieves HTML markup including tags
var val = $("#userName").val();  // Retrieves form input value
var link = $("#myLink").attr("href"); // Retrieves href attribute

// SET:
$("#test").text("Hello DevAura!");
$("#test").html("<strong>Formatted HTML</strong>");
$("#userName").val("John Doe");
$("#myLink").attr("href", "https://devaura.dev");`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div id="contentDiv" style="background:#eff6ff; padding:12px; border-radius:6px; margin-bottom:10px;">Original Text</div>
  <button id="setTxt" style="background:#4f46e5; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Set Text</button>
  <button id="setHtml" style="background:#0284c7; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Set HTML</button>
  <script>
    $('#setTxt').click(function() { $('#contentDiv').text('Updated plain text!'); });
    $('#setHtml').click(function() { $('#contentDiv').html('<strong style="color:#4f46e5;">Bold HTML inserted!</strong>'); });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 15. jQuery Add Elements
  {
    id: 'jquery-dom-add',
    title: 'jQuery Add Elements (append, prepend, after, before)',
    slug: 'jquery-dom-add',
    summary: 'Inserting new HTML elements inside or adjacent to selected elements.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'With jQuery, it is easy to add new elements/content. We have four jQuery methods that are used to add new content: append() (inserts at end inside), prepend() (inserts at beginning inside), after() (inserts after outside), before() (inserts before outside).',
      sections: [
        {
          heading: 'Visualizing Insertion Points',
          body: 'Inside vs Outside insertion:',
          code: `$("p").append(" <b>Appended text</b>.");
$("p").prepend("<b>Prepended text</b>: ");

$("img").before("<b>Before image</b>");
$("img").after("<i>After image</i>");`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <ul id="itemList" style="border:1px solid #cbd5e1; padding:20px; border-radius:6px;">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <button id="addEnd" style="background:#4f46e5; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Append Item</button>
  <button id="addStart" style="background:#0284c7; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Prepend Item</button>
  <script>
    $('#addEnd').click(function() { $('#itemList').append('<li style="color:#4f46e5;">New Appended Item</li>'); });
    $('#addStart').click(function() { $('#itemList').prepend('<li style="color:#0284c7;">New Prepended Item</li>'); });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 16. jQuery Remove Elements
  {
    id: 'jquery-dom-remove',
    title: 'jQuery Remove Elements (remove & empty)',
    slug: 'jquery-dom-remove',
    summary: 'Removing elements completely from the DOM with remove(), or clearing child nodes with empty().',
    readTime: '3 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'With jQuery, it is easy to remove existing HTML elements. To remove elements and content, there are mainly two jQuery methods: remove() removes the selected element (and its child elements); empty() removes the child elements from the selected element.',
      sections: [
        {
          heading: 'remove() vs empty()',
          body: 'empty() keeps the container element; remove() completely deletes the element:',
          code: `$("#div1").empty(); // Keeps #div1 but deletes all children inside

$("#div1").remove(); // Deletes #div1 and everything inside it

// Filter elements to be removed:
$("p").remove(".italic, .warning");`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div id="containerBox" style="background:#eff6ff; border:1px solid #bfdbfe; padding:12px; border-radius:6px; margin-bottom:10px;">
    <p>Child Item A</p>
    <p>Child Item B</p>
  </div>
  <button id="empBtn" style="background:#f59e0b; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Empty Children</button>
  <button id="remBtn" style="background:#ef4444; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Remove Entire Box</button>
  <script>
    $('#empBtn').click(function() { $('#containerBox').empty(); });
    $('#remBtn').click(function() { $('#containerBox').remove(); });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 17. jQuery CSS Classes
  {
    id: 'jquery-css-classes',
    title: 'jQuery CSS Classes (addClass, removeClass, toggleClass)',
    slug: 'jquery-css-classes',
    summary: 'Manipulating class attributes dynamically: addClass(), removeClass(), toggleClass(), and hasClass().',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'jQuery has several methods for CSS manipulation: addClass() adds one or more classes to the selected elements; removeClass() removes classes; toggleClass() toggles between adding/removing classes; hasClass() checks if a class exists.',
      sections: [
        {
          heading: 'Toggling Classes for Dark Mode / Active States',
          body: 'Toggling visual states cleanly:',
          code: `$("button").click(function() {
  $("h1, h2, p").toggleClass("blue-theme");
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    .active-card { background: #4f46e5 !important; color: white !important; transform: scale(1.02); }
  </style>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div id="cardToggle" style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px; transition:all 0.3s;">
    Click the button to toggle the .active-card CSS class!
  </div>
  <button id="clsBtn" style="margin-top:10px; background:#0284c7; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">
    Toggle Class
  </button>
  <script>
    $('#clsBtn').click(function() { $('#cardToggle').toggleClass('active-card'); });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 18. jQuery css() Method
  {
    id: 'jquery-css-methods',
    title: 'jQuery css() Method',
    slug: 'jquery-css-methods',
    summary: 'Setting and returning CSS style properties directly on elements.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'The css() method sets or returns one or more style properties for the selected elements. You can query a property value by passing one string argument, or set multiple properties by passing a JSON object.',
      sections: [
        {
          heading: 'Setting Multiple CSS Properties',
          body: 'Pass a JavaScript object of CSS rules:',
          code: `// Get CSS property
var bg = $("p").css("background-color");

// Set multiple properties
$("p").css({
  "background-color": "#4f46e5",
  "font-size": "20px",
  "color": "#ffffff",
  "padding": "12px",
  "border-radius": "8px"
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <p id="targetStyle">DevAura dynamically styled paragraph.</p>
  <button id="applyStyle" style="background:#4f46e5; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">
    Apply CSS Object
  </button>
  <script>
    $('#applyStyle').click(function() {
      $('#targetStyle').css({
        'background-color': '#4f46e5',
        'color': '#ffffff',
        'padding': '12px',
        'border-radius': '6px',
        'font-weight': 'bold'
      });
    });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 19. jQuery Dimensions
  {
    id: 'jquery-dimensions',
    title: 'jQuery Dimensions (width, height, inner, outer)',
    slug: 'jquery-dimensions',
    summary: 'Calculating box model measurements: width, innerWidth, and outerWidth.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'jQuery has several important methods for working with dimensions of elements and the browser window: width(), height(), innerWidth(), innerHeight(), outerWidth(), outerHeight().',
      sections: [
        {
          heading: 'Box Model Dimension Differences',
          body: 'width() is content only; innerWidth() includes padding; outerWidth() includes padding and borders; outerWidth(true) includes padding, borders, and margins.',
          code: `var w = $("#box").width();       // Content width
var iw = $("#box").innerWidth();  // Content + Padding
var ow = $("#box").outerWidth();  // Content + Padding + Border
var owm = $("#box").outerWidth(true); // Content + Padding + Border + Margin`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div id="dimBox" style="width:200px; padding:20px; border:5px solid #4f46e5; margin:10px; background:#eff6ff;">
    Dimension Test Box
  </div>
  <button id="dimBtn" style="background:#0284c7; color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Measure Dimensions</button>
  <div id="dimOutput" style="margin-top:10px; font-family:monospace; color:#334155;"></div>
  <script>
    $('#dimBtn').click(function() {
      var b = $('#dimBox');
      $('#dimOutput').html(
        'width(): ' + b.width() + 'px<br>' +
        'innerWidth(): ' + b.innerWidth() + 'px<br>' +
        'outerWidth(): ' + b.outerWidth() + 'px'
      );
    });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 20. jQuery Traversing Ancestors
  {
    id: 'jquery-traversing-ancestors',
    title: 'jQuery Traversing Ancestors (parent, parents, parentsUntil)',
    slug: 'jquery-traversing-ancestors',
    summary: 'Moving up the DOM tree to locate parent nodes and ancestors.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'An ancestor is a parent, grandparent, great-grandparent, and so on. With jQuery you can traverse up the DOM tree to find ancestors of an element: parent(), parents(), and parentsUntil().',
      sections: [
        {
          heading: 'Traversing Upwards',
          body: 'parent() returns direct parent; parents() returns all ancestors up to <html>:',
          code: `$("span").parent().css({"color": "red", "border": "2px solid red"});

// Return all ancestor <ul> elements
$("span").parents("ul");`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Ancestors Methods:</h4>
    <p><code>parent()</code> &rarr; Returns the direct parent element of selected node.</p>
    <p><code>parents()</code> &rarr; Returns all ancestor elements all the way up to document root.</p>
    <p><code>parentsUntil(stopNode)</code> &rarr; Returns all ancestors between two given elements.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 21. jQuery Traversing Descendants
  {
    id: 'jquery-traversing-descendants',
    title: 'jQuery Traversing Descendants (children & find)',
    slug: 'jquery-traversing-descendants',
    summary: 'Moving down the DOM tree to locate child elements and descendants.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'A descendant is a child, grandchild, great-grandchild, and so on. With jQuery you can traverse down the DOM tree to find descendants of an element: children() and find().',
      sections: [
        {
          heading: 'children() vs find()',
          body: 'children() only travels a single level down; find() traverses all descendants down to the last leaf node:',
          code: `// Direct children only
$("div").children("p.first");

// All descendant spans anywhere inside div
$("div").find("span");

// Find all descendants
$("div").find("*");`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    $('ul').children(); // Finds immediate &lt;li&gt; children<br>
    $('ul').find('a');  // Finds all &lt;a&gt; links anywhere inside &lt;ul&gt;
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 22. jQuery Traversing Siblings
  {
    id: 'jquery-traversing-siblings',
    title: 'jQuery Traversing Siblings (siblings, next, prev)',
    slug: 'jquery-traversing-siblings',
    summary: 'Traversing sideways across elements sharing the same parent node.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'Siblings share the same parent. With jQuery you can traverse sideways in the DOM tree to find siblings of an element: siblings(), next(), nextAll(), nextUntil(), prev(), prevAll(), prevUntil().',
      sections: [
        {
          heading: 'Sibling Methods Overview',
          body: 'Targeting adjacent elements:',
          code: `$("h2").siblings("p"); // All sibling <p> tags
$("h2").next();         // The immediately following sibling
$("h2").prev();         // The immediately preceding sibling`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Sibling Navigation:</h4>
    <p><code>next()</code> targets the immediate next sibling element.</p>
    <p><code>prev()</code> targets the immediate previous sibling element.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 23. jQuery Traversing Filtering
  {
    id: 'jquery-traversing-filtering',
    title: 'jQuery Traversing Filtering (first, last, eq, filter, not)',
    slug: 'jquery-traversing-filtering',
    summary: 'Narrowing down search results based on position or matching criteria.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'The three most basic filtering methods are first(), last(), and eq(), which allow you to select a specific element based on its position in a group of elements. Other filtering methods, like filter() and not(), select elements that match, or do not match, a specified criteria.',
      sections: [
        {
          heading: 'eq() Index Selector',
          body: 'eq(index) is 0-indexed: eq(0) is first, eq(1) is second:',
          code: `$("p").first();        // Selects first <p>
$("p").last();         // Selects last <p>
$("p").eq(2);          // Selects 3rd <p> (index 2)
$("p").filter(".intro");// Selects <p> matching .intro
$("p").not(".intro");   // Selects <p> NOT matching .intro`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div class="test-item" style="padding:4px;">Item Index 0</div>
  <div class="test-item" style="padding:4px;">Item Index 1</div>
  <div class="test-item" style="padding:4px;">Item Index 2</div>
  <button id="eqBtn" style="margin-top:10px; background:#4f46e5; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">
    Highlight eq(1)
  </button>
  <script>
    $('#eqBtn').click(function() {
      $('.test-item').eq(1).css({'background': '#e0e7ff', 'color': '#4338ca', 'font-weight': 'bold'});
    });
  </script>
</body>
</html>`
        }
      ]
    }
  },

  // 24. jQuery AJAX Intro & load()
  {
    id: 'jquery-ajax-intro',
    title: 'jQuery AJAX Intro & load() Method',
    slug: 'jquery-ajax-intro',
    summary: 'Asynchronous JavaScript and XML without page reload, and the load() method.',
    readTime: '5 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page. The jQuery load() method is a simple, but powerful AJAX method that loads data from a server and puts the returned HTML directly into the selected element.',
      sections: [
        {
          heading: 'load() Syntax and Selectors',
          body: '$(selector).load(URL, data, callback); You can also specify an element selector in the URL to load only a portion of the response:',
          code: `// Load complete content from demo.txt into #div1
$("#div1").load("demo.txt");

// Load only the #p1 element inside demo.txt:
$("#div1").load("demo.txt #p1");`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    $(&quot;#result&quot;).load(&quot;/api/snippet.html&quot;, function(response, status, xhr) {<br>
    &nbsp;&nbsp;if (status === &quot;success&quot;) console.log(&quot;Content loaded successfully!&quot;);<br>
    });
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 25. jQuery AJAX get & post
  {
    id: 'jquery-ajax-get-post',
    title: 'jQuery AJAX ($.get & $.post)',
    slug: 'jquery-ajax-get-post',
    summary: 'HTTP GET and HTTP POST requests using $.get() and $.post().',
    readTime: '5 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'The $.get() and $.post() methods are used to request data from the server with an HTTP GET or POST request. $.get() requests data from a specified resource; $.post() submits data to be processed.',
      sections: [
        {
          heading: '$.get() and $.post() Examples',
          body: 'Handling responses and sending form payloads:',
          code: `// HTTP GET
$.get("https://api.example.com/users", function(data, status) {
  console.log("Data: " + data + "\\nStatus: " + status);
});

// HTTP POST
$.post("https://api.example.com/orders", 
  { item: "DevAura Pro", quantity: 2 },
  function(data, status) {
    alert("Order Submitted: " + status);
  }
);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">AJAX Promise Interface:</h4>
    <p>Modern jQuery supports Promise chaining:</p>
    <pre style="background:#0f172a; color:#38bdf8; padding:10px; border-radius:4px; font-family:monospace;">$.get('/api/data')
  .done(data =&gt; console.log(data))
  .fail(err =&gt; console.error(err));</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 26. jQuery noConflict
  {
    id: 'jquery-noconflict',
    title: 'jQuery noConflict() Method',
    slug: 'jquery-noconflict',
    summary: 'Preventing naming conflicts when sharing the $ shortcut with other JavaScript libraries.',
    readTime: '4 min',
    category: 'jQuery Tutorial',
    content: {
      overview: 'As you already know; jQuery uses the $ sign as a shortcut for jQuery. What if other JavaScript frameworks (like Prototype, Mootools, or AngularJS) also use the $ sign as a shortcut? The noConflict() method releases the hold on the $ shortcut identifier.',
      sections: [
        {
          heading: 'Using noConflict()',
          body: 'Assigning a custom alias or using the full jQuery name:',
          code: `// Release $ back to other libraries
var jq = $.noConflict();

// Now use your custom jq variable instead of $
jq(document).ready(function() {
  jq("button").click(function() {
    jq("p").text("jQuery is still running safely without collisions!");
  });
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border-left:4px solid #4f46e5; padding:12px;">
    <strong>Best Practice:</strong> When writing reusable jQuery plugins or widgets, wrap your code in an IIFE: <code>(function($) { /* $ is safely scoped to jQuery here */ })(jQuery);</code>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
