import { TutorialChapter } from '../../../types';

export const cssAdvancedChapters: TutorialChapter[] = [
  // 45. CSS Rounded Corners
  {
    id: 'css-rounded-corners',
    title: 'CSS Rounded Corners',
    slug: 'css-rounded-corners',
    summary: 'Master border-radius to curve box edges, create circles, pills, and asymmetrical modern shapes.',
    readTime: '4 min',
    category: 'CSS Advanced',
    content: {
      overview: 'With the CSS border-radius property, you can give any element "rounded corners". You can specify one value for all corners, individual values for each of the four corners, or elliptical radius using the slash (/) syntax.',
      sections: [
        {
          heading: 'Border-Radius Techniques',
          body: 'A 50% border-radius on a square element creates a perfect circle. A large value like 9999px creates a smooth pill button.',
          code: `/* Standard 4-corner rounded card */
.rounded-box { border-radius: 12px; }

/* Perfect Circle (requires equal width and height) */
.avatar { width: 64px; height: 64px; border-radius: 50%; }

/* Asymmetrical Rounded Blob */
.organic-shape {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; display: flex; gap: 16px; align-items: center; }
    .card { background: #4f46e5; color: white; padding: 16px; border-radius: 12px; font-weight: bold; }
    .circle { width: 70px; height: 70px; background: #0284c7; color: white; border-radius: 50%; display: grid; place-items: center; font-weight: bold; }
    .pill { background: #10b981; color: white; padding: 10px 24px; border-radius: 9999px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">12px Radius</div>
  <div class="circle">50%</div>
  <div class="pill">Pill Shape</div>
</body>
</html>`,
          tips: [
            'border-radius also clips the background color or background image inside the element if overflow: hidden is set.'
          ]
        }
      ]
    }
  },

  // 46. CSS Border Images
  {
    id: 'css-border-images',
    title: 'CSS Border Images',
    slug: 'css-border-images',
    summary: 'The border-image property allows you to specify an image to be used as the border around an element.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'The CSS border-image property allows you to specify an image to be used instead of the normal border around an element. The property has three parts: the image to use, where to slice the image, and whether the middle sections should be repeated or stretched.',
      sections: [
        {
          heading: 'Border Image Syntax',
          body: 'The border-image shorthand combines border-image-source, border-image-slice, border-image-width, and border-image-repeat.',
          code: `/* Border image with linear gradient */
.gradient-border {
  border: 4px solid transparent;
  border-image: linear-gradient(to right, #4f46e5, #0284c7) 1;
}

/* Image slice and repeat */
.ornate-box {
  border: 15px solid transparent;
  border-image: url('border-frame.png') 30 round;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .gradient-frame {
      border: 4px solid transparent;
      border-image: linear-gradient(135deg, #4f46e5, #06b6d4, #f59e0b) 1;
      padding: 20px;
      background: #f8fafc;
      text-align: center;
      font-weight: 600;
      color: #1e293b;
    }
  </style>
</head>
<body>
  <div class="gradient-frame">
    Continuous Gradient Border via <code>border-image</code>!
  </div>
</body>
</html>`,
          tips: [
            'Notice border-image overrides border-radius in many browsers. If you need rounded gradient borders, use a pseudo-element or background-clip technique.'
          ]
        }
      ]
    }
  },

  // 47. CSS Backgrounds Advanced
  {
    id: 'css-backgrounds-adv',
    title: 'CSS Backgrounds Advanced',
    slug: 'css-backgrounds-adv',
    summary: 'Advanced background properties: background-size, background-origin, background-clip, and multiple backgrounds.',
    readTime: '6 min',
    category: 'CSS Advanced',
    content: {
      overview: 'CSS3 includes several advanced background properties: background-size (cover, contain), background-origin (border-box, padding-box, content-box), background-clip (clip to text), and stacking multiple background images on a single container.',
      sections: [
        {
          heading: 'Multiple Backgrounds and Text Clipping',
          body: 'You can apply multiple backgrounds separated by commas. background-clip: text allows creating eye-catching gradient text headlines.',
          code: `/* Multiple Backgrounds stacked (top to bottom) */
.hero {
  background-image: url('overlay-pattern.png'), linear-gradient(135deg, #4f46e5, #0284c7);
  background-repeat: no-repeat, no-repeat;
  background-size: contain, cover;
}

/* Gradient Text Effect */
.gradient-text {
  background: linear-gradient(90deg, #4f46e5, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 30px; }
    .hero-title {
      font-size: 36px;
      font-weight: 800;
      background: linear-gradient(90deg, #4f46e5, #0284c7, #10b981);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
    }
  </style>
</head>
<body>
  <h1 class="hero-title">Futuristic Gradient Text</h1>
  <p>Styled with background-clip: text and transparent fill color.</p>
</body>
</html>`,
          tips: [
            'background-size: cover scales the image to ensure the entire background is filled without aspect ratio distortion.',
            'background-size: contain ensures the entire image fits within the box without clipping.'
          ]
        }
      ]
    }
  },

  // 48. CSS Gradients
  {
    id: 'css-gradients',
    title: 'CSS Gradients',
    slug: 'css-gradients',
    summary: 'CSS gradients let you display smooth transitions between two or more specified colors: Linear, Radial, Conic.',
    readTime: '6 min',
    category: 'CSS Advanced',
    content: {
      overview: 'CSS gradients display smooth transitions between colors. CSS defines three types of gradients: Linear Gradients (goes down/up/left/right/diagonally), Radial Gradients (defined by center point), and Conic Gradients (rotated around a center point like a color wheel).',
      sections: [
        {
          heading: 'Linear, Radial, and Conic Gradients',
          body: 'Gradients do not require heavy image assets and render instantly with crisp vector fidelity.',
          code: `/* Linear Gradient (Angle direction) */
background: linear-gradient(135deg, #4f46e5 0%, #0284c7 100%);

/* Radial Gradient (Centered circle) */
background: radial-gradient(circle at center, #6366f1 0%, #1e1b4b 100%);

/* Conic Gradient (Color wheel angle) */
background: conic-gradient(from 0deg, #4f46e5, #06b6d4, #10b981, #4f46e5);`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; display: flex; gap: 16px; }
    .box { width: 140px; height: 140px; border-radius: 12px; color: white; display: grid; place-items: center; font-weight: bold; text-align: center; }
    .linear { background: linear-gradient(135deg, #4f46e5, #0284c7); }
    .radial { background: radial-gradient(circle, #0284c7 0%, #0f172a 100%); }
    .conic { background: conic-gradient(from 45deg, #4f46e5, #06b6d4, #f59e0b, #4f46e5); border-radius: 50%; }
  </style>
</head>
<body>
  <div class="box linear">Linear</div>
  <div class="box radial">Radial</div>
  <div class="box conic">Conic</div>
</body>
</html>`,
          tips: [
            'Conic gradients are perfect for pie charts, progress rings, and color pickers in pure CSS.'
          ]
        }
      ]
    }
  },

  // 49. CSS Shadows
  {
    id: 'css-shadows',
    title: 'CSS Shadows',
    slug: 'css-shadows',
    summary: 'Add depth and elevation to UI elements using box-shadow and text-shadow.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'CSS shadow effects add depth, dimension, and realism to flat interfaces. box-shadow applies one or more shadows to an element box, while text-shadow adds shadows to text characters.',
      sections: [
        {
          heading: 'box-shadow Syntax and Layering',
          body: 'box-shadow: [offset-x] [offset-y] [blur-radius] [spread-radius] [color] [inset]. Multiple shadows can be stacked by separating with commas for ultra-realistic soft elevation.',
          code: `/* Basic Card Shadow */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Layered Ultra-Smooth Elevation */
.elevation-high {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.08),
    0 4px 6px -4px rgba(0, 0, 0, 0.05);
}

/* Glowing Neon Indigo Effect */
.glow-card {
  box-shadow: 0 0 20px rgba(79, 70, 229, 0.45);
}

/* Inset (Inner) Shadow */
.pressed-well {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #f8fafc; padding: 30px; display: flex; gap: 20px; }
    .card { background: white; padding: 20px; border-radius: 10px; width: 140px; text-align: center; }
    .soft { box-shadow: 0 10px 20px rgba(0,0,0,0.06); }
    .glow { box-shadow: 0 0 16px rgba(79, 70, 229, 0.4); border: 1px solid #c7d2fe; color: #4f46e5; font-weight: bold; }
    .inset { box-shadow: inset 0 2px 6px rgba(0,0,0,0.12); background: #f1f5f9; }
  </style>
</head>
<body>
  <div class="card soft">Soft Elevation</div>
  <div class="card glow">Neon Glow</div>
  <div class="card inset">Inset Pressed</div>
</body>
</html>`,
          tips: [
            'Use subtle rgba() colors like rgba(0, 0, 0, 0.05 to 0.1) instead of solid black for realistic modern shadows.'
          ]
        }
      ]
    }
  },

  // 50. CSS Text Effects
  {
    id: 'css-text-effects',
    title: 'CSS Text Effects',
    slug: 'css-text-effects',
    summary: 'Control text overflow with ellipsis (...), word-wrapping, line clamping, and vertical writing modes.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'CSS3 includes several text effects properties: text-overflow (clip or ellipsis), word-wrap, word-break, line-clamp, and writing-mode.',
      sections: [
        {
          heading: 'Single-Line and Multi-Line Text Truncation',
          body: 'Single-line truncation uses white-space: nowrap, overflow: hidden, and text-overflow: ellipsis. Multi-line truncation uses -webkit-line-clamp.',
          code: `/* Single-Line Truncation (...) */
.truncate-single {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;
}

/* Multi-Line Truncation (3 Lines max) */
.truncate-multiline {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .badge-truncate {
      width: 220px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
      padding: 8px 12px;
      border-radius: 6px;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <h3>Text Ellipsis Truncation</h3>
  <div class="badge-truncate">
    This extremely long title will be truncated cleanly with an ellipsis
  </div>
</body>
</html>`,
          tips: [
            'word-break: break-word prevents long URLs from blowing out container widths on mobile screens.'
          ]
        }
      ]
    }
  },

  // 51. CSS Web Fonts
  {
    id: 'css-web-fonts',
    title: 'CSS Web Fonts',
    slug: 'css-web-fonts',
    summary: 'Use the @font-face rule to load custom fonts on web pages without requiring user installation.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'Web fonts allow Web designers to use fonts that are not installed on the user computer. When you have found or bought the font you wish to use, include the font file on your web server, and it will be automatically downloaded to the user browser when needed.',
      sections: [
        {
          heading: 'The @font-face Rule and font-display',
          body: 'Modern web fonts use the ultra-compressed WOFF2 format. font-display: swap prevents blank invisible text (FOIT) while the font file loads.',
          code: `@font-face {
  font-family: 'CustomSans';
  src: url('fonts/custom-sans.woff2') format('woff2'),
       url('fonts/custom-sans.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Fast fallback rendering */
}

body {
  font-family: 'CustomSans', system-ui, sans-serif;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .code-hero {
      font-family: 'Fira Code', monospace;
      background: #0f172a;
      color: #38bdf8;
      padding: 16px;
      border-radius: 8px;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h3>Web Font in Action</h3>
  <div class="code-hero">
    const greeting = "Loaded via Google Fonts Web Stack!";
  </div>
</body>
</html>`,
          tips: [
            'WOFF2 offers ~30% better compression than WOFF and is supported in all modern browsers.',
            'Always declare font-display: swap; for optimal Core Web Vitals (LCP).'
          ]
        }
      ]
    }
  },

  // 52. CSS 2D Transforms
  {
    id: 'css-2d-transforms',
    title: 'CSS 2D Transforms',
    slug: 'css-2d-transforms',
    summary: 'Translate, rotate, scale, skew, and matrix transform elements in 2D space.',
    readTime: '6 min',
    category: 'CSS Advanced',
    content: {
      overview: 'CSS transforms allow you to translate, rotate, scale, and skew elements. With the CSS transform property, you can manipulate elements along the X and Y axes.',
      sections: [
        {
          heading: '2D Transform Methods',
          body: 'Methods include translate(x, y) to move, rotate(deg) to spin, scale(x, y) to resize, and skew(x, y) to slant.',
          code: `/* Move element 20px right and 10px down */
transform: translate(20px, 10px);

/* Rotate 45 degrees clockwise */
transform: rotate(45deg);

/* Scale up 1.1x (110%) on hover */
transform: scale(1.1);

/* Skew along X axis */
transform: skewX(10deg);

/* Combined transformations */
transform: translateY(-5px) scale(1.05);`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; display: flex; gap: 24px; }
    .box {
      width: 100px;
      height: 100px;
      background: #4f46e5;
      color: white;
      border-radius: 8px;
      display: grid;
      place-items: center;
      font-weight: bold;
      transition: transform 0.3s ease;
      cursor: pointer;
    }
    .box.rot:hover { transform: rotate(15deg); background: #0284c7; }
    .box.scale:hover { transform: scale(1.2); background: #10b981; }
    .box.skew:hover { transform: skewX(-15deg); background: #f59e0b; }
  </style>
</head>
<body>
  <div class="box rot">Hover Rotate</div>
  <div class="box scale">Hover Scale</div>
  <div class="box skew">Hover Skew</div>
</body>
</html>`,
          tips: [
            'Transforms run on the GPU compositor thread, making them silky smooth at 60/120fps compared to animating top/left.',
            'transform-origin lets you change the anchor point around which an element rotates.'
          ]
        }
      ]
    }
  },

  // 53. CSS 3D Transforms
  {
    id: 'css-3d-transforms',
    title: 'CSS 3D Transforms',
    slug: 'css-3d-transforms',
    summary: 'Manipulate elements in 3D space with rotateX, rotateY, rotateZ, and perspective.',
    readTime: '6 min',
    category: 'CSS Advanced',
    content: {
      overview: 'CSS allows you to format your elements using 3D transformations. With perspective and 3D rotation, you can build 3D card flips, isometric interfaces, and cube rotations.',
      sections: [
        {
          heading: 'Perspective and 3D Rotation',
          body: 'perspective defines how far away the 3D object is from the user view (e.g. perspective: 1000px). rotateY spins an element like a swinging door.',
          code: `.stage {
  perspective: 800px; /* Essential for 3D depth */
}

.card-3d {
  transform: rotateY(30deg) rotateX(15deg);
  transform-style: preserve-3d;
  transition: transform 0.5s;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; background: #0f172a; }
    .perspective-container { perspective: 800px; }
    .card-3d {
      width: 180px;
      height: 120px;
      background: linear-gradient(135deg, #4f46e5, #06b6d4);
      color: white;
      border-radius: 12px;
      display: grid;
      place-items: center;
      font-weight: bold;
      transform: rotateY(25deg) rotateX(10deg);
      box-shadow: 10px 20px 30px rgba(0,0,0,0.5);
      transition: transform 0.4s;
    }
    .card-3d:hover {
      transform: rotateY(0deg) rotateX(0deg);
    }
  </style>
</head>
<body>
  <div class="perspective-container">
    <div class="card-3d">Hover 3D Card</div>
  </div>
</body>
</html>`,
          tips: [
            'Without perspective on the parent, 3D rotations appear flat and 2D.',
            'backface-visibility: hidden hides the reverse side of an element during 3D card flips.'
          ]
        }
      ]
    }
  },

  // 54. CSS Transitions
  {
    id: 'css-transitions',
    title: 'CSS Transitions',
    slug: 'css-transitions',
    summary: 'Create smooth state animations without JavaScript using transition properties.',
    readTime: '6 min',
    category: 'CSS Advanced',
    content: {
      overview: 'CSS transitions allow you to change property values smoothly, over a given duration, instead of an instantaneous visual jump. Transitions are triggered when a state pseudo-class (:hover, :focus, :active) or class changes.',
      sections: [
        {
          heading: 'Transition Shorthand Syntax',
          body: 'Shorthand: transition: [property] [duration] [timing-function] [delay]. Common timing functions include ease, linear, ease-in-out, and custom cubic-bezier().',
          code: `/* Individual Properties */
transition-property: background-color, transform, box-shadow;
transition-duration: 0.3s;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-delay: 0s;

/* Shorthand */
transition: all 0.25s ease-in-out;`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 30px; }
    .btn-animated {
      background-color: #4f46e5;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2);
    }
    .btn-animated:hover {
      background-color: #4338ca;
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.4);
    }
  </style>
</head>
<body>
  <button class="btn-animated">Smooth Hover Transition</button>
</body>
</html>`,
          tips: [
            'Only animate transform and opacity whenever possible for buttery smooth 60fps rendering.',
            'Avoid animating width, height, or margin because they trigger expensive browser layout recalculations.'
          ]
        }
      ]
    }
  },

  // 55. CSS Animations
  {
    id: 'css-animations',
    title: 'CSS Animations',
    slug: 'css-animations',
    summary: 'Build keyframe animations with @keyframes, animation-duration, iteration-count, and fill-mode.',
    readTime: '7 min',
    category: 'CSS Advanced',
    content: {
      overview: 'An animation lets an element gradually change from one style to another. You can change as many CSS properties you want, as many times you want. To use CSS animation, you must first specify some keyframes for the animation using the @keyframes rule.',
      sections: [
        {
          heading: '@keyframes Rule and Animation Properties',
          body: 'Use @keyframes to define steps (from/to or percentages 0% to 100%). Then bind it to an element with animation shorthand.',
          code: `/* Define Keyframes */
@keyframes pulseGlow {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.6);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 16px rgba(79, 70, 229, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
  }
}

/* Apply Animation */
.pulsing-badge {
  animation: pulseGlow 2s infinite ease-in-out;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; display: flex; align-items: center; justify-content: center; }
    @keyframes spinPulse {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .spinner {
      width: 48px;
      height: 48px;
      border: 4px solid #e0e7ff;
      border-top-color: #4f46e5;
      border-radius: 50%;
      animation: spinPulse 1s linear infinite;
    }
  </style>
</head>
<body>
  <div class="spinner"></div>
</body>
</html>`,
          tips: [
            'animation-fill-mode: forwards preserves the final keyframe styles when the animation completes.',
            'animation-play-state: paused lets you pause animations on user hover.'
          ]
        }
      ]
    }
  },

  // 56. CSS Tooltips
  {
    id: 'css-tooltips',
    title: 'CSS Tooltips',
    slug: 'css-tooltips',
    summary: 'Create helpful hover tooltips with pure CSS without JavaScript libraries.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element. A pure CSS tooltip uses position: absolute, opacity, and transitions.',
      sections: [
        {
          heading: 'Building a Tooltip with CSS',
          body: 'The parent container has position: relative. The tooltip box sits inside with position: absolute, opacity: 0, and transitions to opacity: 1 on parent :hover.',
          code: `.tooltip-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip-text {
  visibility: hidden;
  opacity: 0;
  width: 140px;
  background-color: #0f172a;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 12px;
  position: absolute;
  z-index: 10;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.2s;
}

.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 60px; text-align: center; }
    .tooltip-wrap {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted #4f46e5;
      color: #4f46e5;
      font-weight: bold;
      cursor: pointer;
    }
    .tooltip-box {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      bottom: 130%;
      left: 50%;
      transform: translateX(-50%);
      background: #1e293b;
      color: white;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 13px;
      white-space: nowrap;
      transition: opacity 0.2s ease, transform 0.2s ease;
      pointer-events: none;
    }
    .tooltip-wrap:hover .tooltip-box {
      visibility: visible;
      opacity: 1;
      transform: translateX(-50%) translateY(-4px);
    }
  </style>
</head>
<body>
  <p>Hover over this <span class="tooltip-wrap">Special Word<span class="tooltip-box">Helpful CSS Tip!</span></span> to view the tooltip.</p>
</body>
</html>`,
          tips: [
            'Add pointer-events: none to the tooltip box so it does not interfere with cursor interactions.'
          ]
        }
      ]
    }
  },

  // 57. CSS Style Images
  {
    id: 'css-style-images',
    title: 'CSS Style Images',
    slug: 'css-style-images',
    summary: 'Style pictures with rounded borders, circular avatars, thumbnail borders, and CSS filters.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'CSS offers endless ways to style images: rounded corners, thumbnails, responsive scaling, image cards, and built-in filters (grayscale, blur, brightness, contrast, sepia).',
      sections: [
        {
          heading: 'CSS Image Filters and Thumbnails',
          body: 'The filter property applies graphic effects like grayscale(100%), blur(4px), or brightness(1.2).',
          code: `/* Responsive Thumbnail */
img.thumbnail {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 4px;
  background-color: white;
}

/* Grayscale to Color on Hover */
img.filter-hover {
  filter: grayscale(100%);
  transition: filter 0.3s;
}
img.filter-hover:hover {
  filter: grayscale(0%);
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .avatar-demo {
      width: 90px;
      height: 90px;
      background: #4f46e5;
      color: white;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: 32px;
      border: 3px solid #c7d2fe;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <h3>Circular Avatar Badge</h3>
  <div class="avatar-demo">🧑‍💻</div>
</body>
</html>`,
          tips: [
            'Combine filter: drop-shadow(...) with transparent PNGs to generate authentic silhouette shadows.'
          ]
        }
      ]
    }
  },

  // 58. CSS Image Reflection
  {
    id: 'css-image-reflection',
    title: 'CSS Image Reflection',
    slug: 'css-image-reflection',
    summary: 'Create mirror reflections under elements with -webkit-box-reflect.',
    readTime: '4 min',
    category: 'CSS Advanced',
    content: {
      overview: 'The -webkit-box-reflect property allows you to create a mirror reflection under or beside an element or image, complete with gradient fading masks.',
      sections: [
        {
          heading: 'Mirror Reflection with Fading Mask',
          body: 'Specify direction (below, above, left, right), offset distance, and gradient mask.',
          code: `.reflected-img {
  -webkit-box-reflect: below 2px linear-gradient(transparent, rgba(0,0,0,0.4));
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; background: #0f172a; color: white; }
    .box-reflect {
      width: 140px;
      height: 70px;
      background: #4f46e5;
      border-radius: 8px;
      display: grid;
      place-items: center;
      font-weight: bold;
      -webkit-box-reflect: below 4px linear-gradient(transparent 40%, rgba(255,255,255,0.4));
    }
  </style>
</head>
<body>
  <div class="box-reflect">Reflect Box</div>
</body>
</html>`,
          tips: [
            '-webkit-box-reflect is a webkit-specific feature. For cross-browser reflections, use transform: scaleY(-1) and opacity.'
          ]
        }
      ]
    }
  },

  // 59. CSS object-fit & object-position
  {
    id: 'css-object-fit',
    title: 'CSS object-fit & object-position',
    slug: 'css-object-fit',
    summary: 'The object-fit property specifies how an <img> or <video> should be resized to fit its container.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'The CSS object-fit property is used to specify how an <img> or <video> should be resized to fit its container: fill (stretches), contain (scales preserving aspect ratio), cover (fills box without distortion, clipping edges), none, scale-down.',
      sections: [
        {
          heading: 'object-fit: cover for Card Images',
          body: 'object-fit: cover is the universal solution for uniform card images where photos have differing aspect ratios.',
          code: `/* Uniform card thumbnail */
.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center; /* Anchor focus */
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .demo-frame {
      width: 200px;
      height: 120px;
      background: #cbd5e1;
      border: 2px solid #94a3b8;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: bold;
      color: #334155;
    }
  </style>
</head>
<body>
  <h3>object-fit: cover Simulation</h3>
  <div class="demo-frame">Maintains Aspect Ratio</div>
</body>
</html>`,
          tips: [
            'Pair object-fit: cover with object-position: top if portraits are accidentally decapitated.'
          ]
        }
      ]
    }
  },

  // 60. CSS Masking
  {
    id: 'css-masking',
    title: 'CSS Masking',
    slug: 'css-masking',
    summary: 'Masking allows you to create a mask layer over an element to partially or fully hide portions of it.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'CSS masking gives you two main methods: mask-image (using an image or SVG as a stencil) and clip-path (cutting geometric shapes like circles, ellipses, and polygons).',
      sections: [
        {
          heading: 'clip-path Polygons and Shapes',
          body: 'clip-path cuts elements into triangles, hexagons, or stars without external image dependencies.',
          code: `/* Slanted Hero Header */
.slanted-banner {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

/* Perfect Circle Clip */
.circle-clip {
  clip-path: circle(50% at center);
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .slanted-box {
      background: linear-gradient(135deg, #4f46e5, #0284c7);
      color: white;
      padding: 30px;
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="slanted-box">
    Modern Slanted Edge created with CSS clip-path!
  </div>
</body>
</html>`,
          tips: [
            'Use online clip-path generators like Clippy to visually design complex polygon coordinate paths.'
          ]
        }
      ]
    }
  },

  // 61. CSS Buttons
  {
    id: 'css-buttons',
    title: 'CSS Buttons',
    slug: 'css-buttons',
    summary: 'Style modern clickable buttons: primary, secondary, ghost, loading, and animated ripple buttons.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'Buttons are the primary interactive call-to-action in web applications. CSS transforms bare browser buttons into tactile, engaging components with gradients, shadows, and hover micro-interactions.',
      sections: [
        {
          heading: 'Button Hierarchy: Solid, Outline, Ghost',
          body: 'A well-designed design system provides clear visual weight for different actions.',
          code: `/* Primary Button */
.btn-primary {
  background-color: #4f46e5;
  color: #fff;
  border: 1px solid transparent;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-primary:hover { background-color: #4338ca; }

/* Secondary Outline Button */
.btn-outline {
  background-color: transparent;
  color: #4f46e5;
  border: 1px solid #4f46e5;
  padding: 10px 20px;
  border-radius: 6px;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; display: flex; gap: 12px; }
    .btn { padding: 10px 18px; border-radius: 6px; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s; }
    .btn-solid { background: #4f46e5; color: white; border: none; }
    .btn-solid:hover { background: #4338ca; transform: translateY(-2px); }
    .btn-ghost { background: transparent; color: #4f46e5; border: 1.5px solid #c7d2fe; }
    .btn-ghost:hover { background: #e0e7ff; }
  </style>
</head>
<body>
  <button class="btn btn-solid">Primary Action</button>
  <button class="btn btn-ghost">Ghost Secondary</button>
</body>
</html>`,
          tips: [
            'Always specify cursor: pointer on clickable buttons for clear user affordance.'
          ]
        }
      ]
    }
  },

  // 62. CSS Pagination
  {
    id: 'css-pagination',
    title: 'CSS Pagination',
    slug: 'css-pagination',
    summary: 'Build clean, numbered pagination bars with active page indicators and hover effects.',
    readTime: '4 min',
    category: 'CSS Advanced',
    content: {
      overview: 'If you have a website with lots of pages or large data tables, you may wish to add pagination. With CSS you can style numbered pagination links with clean active indicators.',
      sections: [
        {
          heading: 'Numbered Pagination Component',
          body: 'Use inline-block or flexbox to lay out page numbers with border-radius.',
          code: `.pagination {
  display: flex;
  gap: 6px;
}

.pagination a {
  color: #334155;
  padding: 8px 14px;
  text-decoration: none;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s;
}

.pagination a.active {
  background-color: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

.pagination a:hover:not(.active) {
  background-color: #f1f5f9;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .pagination { display: flex; gap: 6px; }
    .page-link {
      padding: 6px 12px;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      color: #475569;
      text-decoration: none;
      font-weight: 500;
    }
    .page-link.active {
      background: #4f46e5;
      color: white;
      border-color: #4f46e5;
    }
  </style>
</head>
<body>
  <div class="pagination">
    <a href="#" class="page-link">&laquo;</a>
    <a href="#" class="page-link active">1</a>
    <a href="#" class="page-link">2</a>
    <a href="#" class="page-link">3</a>
    <a href="#" class="page-link">&raquo;</a>
  </div>
</body>
</html>`,
          tips: [
            'Ensure the target touch area of pagination links is at least 44x44px on mobile.'
          ]
        }
      ]
    }
  },

  // 63. CSS Multiple Columns
  {
    id: 'css-multiple-columns',
    title: 'CSS Multiple Columns',
    slug: 'css-multiple-columns',
    summary: 'The CSS multi-column layout allows easy definition of multiple columns of text, like in newspapers.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'The CSS multi-column layout allows easy definition of multiple columns of text, just like in newspapers and magazines. Key properties include column-count, column-gap, column-rule (divider line), and column-span (span all columns).',
      sections: [
        {
          heading: 'Multi-Column Properties',
          body: 'column-count specifies the number of columns, column-gap sets the gutter between them, and column-rule draws a divider.',
          code: `.newspaper {
  column-count: 3;
  column-gap: 32px;
  column-rule: 1px solid #cbd5e1;
}

h2.headline {
  column-span: all; /* Headline spans across all 3 columns */
  text-align: center;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .editorial {
      column-count: 2;
      column-gap: 24px;
      column-rule: 1px solid #e2e8f0;
      line-height: 1.6;
      color: #334155;
    }
  </style>
</head>
<body>
  <h3>Newspaper Layout</h3>
  <div class="editorial">
    CSS multi-column layout allows text to flow naturally from the bottom of column one right into the top of column two, mimicking classic printed typography seamlessly.
  </div>
</body>
</html>`,
          tips: [
            'Use column-width instead of column-count for responsive layouts that automatically add more columns as screen size increases.'
          ]
        }
      ]
    }
  },

  // 64. CSS User Interface
  {
    id: 'css-user-interface',
    title: 'CSS User Interface',
    slug: 'css-user-interface',
    summary: 'Fine-tune UI interactions: resize, outline-offset, cursor styles, user-select, and accent-color.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'CSS offers properties to customize browser UI behaviors: resize (allow users to resize elements), cursor (pointer, grab, not-allowed), user-select (prevent text selection on buttons), and accent-color (custom tint for checkboxes and radio buttons).',
      sections: [
        {
          heading: 'accent-color and user-select',
          body: 'accent-color customizes the native tint of form checkboxes and radios in one line of CSS.',
          code: `/* Custom brand color for native checkboxes and radios */
input[type="checkbox"], input[type="radio"] {
  accent-color: #4f46e5;
}

/* Prevent accidental text selection on clickable cards */
.interactive-card {
  user-select: none;
  cursor: pointer;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .brand-input { accent-color: #4f46e5; transform: scale(1.3); margin-right: 8px; }
    .no-select { user-select: none; background: #e0e7ff; color: #3730a3; padding: 10px; border-radius: 6px; display: inline-block; }
  </style>
</head>
<body>
  <h3>Modern UI Properties</h3>
  <label><input type="checkbox" checked class="brand-input"> Styled with accent-color</label>
  <br><br>
  <div class="no-select">Double click me: user-select: none prevents highlight selection!</div>
</body>
</html>`,
          tips: [
            'accent-color works on checkboxes, radio buttons, range sliders, and progress bars.'
          ]
        }
      ]
    }
  },

  // 65. CSS Variables
  {
    id: 'css-variables',
    title: 'CSS Variables',
    slug: 'css-variables',
    summary: 'Declare reusable custom properties with --name and access them with var() for theme switching and consistency.',
    readTime: '6 min',
    category: 'CSS Advanced',
    content: {
      overview: 'CSS variables (Custom Properties) are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., --main-color: #4f46e5;) and accessed using the var() function.',
      sections: [
        {
          heading: 'Root Scope and Theme Switching',
          body: 'Declare global variables inside :root so they can be accessed anywhere. You can switch themes simply by overriding variable values.',
          code: `:root {
  --color-primary: #4f46e5;
  --color-secondary: #0284c7;
  --bg-surface: #ffffff;
  --radius-md: 8px;
}

/* Dark theme overrides */
[data-theme="dark"] {
  --color-primary: #818cf8;
  --bg-surface: #0f172a;
}

.button {
  background-color: var(--color-primary);
  border-radius: var(--radius-md);
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --brand-color: #4f46e5;
      --card-bg: #f8fafc;
      --card-border: #e2e8f0;
    }
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .theme-card {
      background: var(--card-bg);
      border: 2px solid var(--card-border);
      border-radius: 8px;
      padding: 16px;
      color: var(--brand-color);
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="theme-card">Styled using CSS Variables (var(--brand-color))</div>
</body>
</html>`,
          tips: [
            'CSS variables are live and reactive; updating a CSS variable in JavaScript instantly recalculates the entire page.'
          ]
        }
      ]
    }
  },

  // 66. CSS Box Sizing
  {
    id: 'css-box-sizing',
    title: 'CSS Box Sizing',
    slug: 'css-box-sizing',
    summary: 'The box-sizing property allows you to include padding and border in an element total width and height.',
    readTime: '5 min',
    category: 'CSS Advanced',
    content: {
      overview: 'Without box-sizing: border-box, if you set an element width to 100px and add 20px padding and a 5px border, its rendered width becomes 150px! With box-sizing: border-box, the width remains exactly 100px, absorbing the padding and border inward.',
      sections: [
        {
          heading: 'The Universal Box-Sizing Reset',
          body: 'This two-line reset is the foundation of all modern web layouts:',
          code: `/* Standard modern CSS reset */
*, *::before, *::after {
  box-sizing: border-box;
}`,
          codeLanguage: 'css',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .box1 {
      box-sizing: content-box;
      width: 200px;
      padding: 20px;
      border: 4px solid #ef4444;
      background: #fee2e2;
      margin-bottom: 15px;
    }
    .box2 {
      box-sizing: border-box;
      width: 200px;
      padding: 20px;
      border: 4px solid #4f46e5;
      background: #e0e7ff;
    }
  </style>
</head>
<body>
  <div class="box1">content-box (Total width: 248px)</div>
  <div class="box2">border-box (Total width: 200px)</div>
</body>
</html>`,
          tips: [
            'Always apply box-sizing: border-box across your entire stylesheet via the universal selector (*).'
          ]
        }
      ]
    }
  }
];
