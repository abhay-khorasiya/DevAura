import { TutorialChapter } from '../../types';

export const nodejsChapters: TutorialChapter[] = [
  // 1. Node.js HOME
  {
    id: 'nodejs-home',
    title: 'Node.js HOME',
    slug: 'nodejs-home',
    summary: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.',
    readTime: '3 min',
    category: 'Node.js Tutorial',
    content: {
      overview: 'Node.js allows developers to write server-side applications in JavaScript. Created by Ryan Dahl in 2009, it is powered by Google Chrome\'s V8 JavaScript engine and utilizes an event-driven, non-blocking I/O model that makes it lightweight and efficient.',
      sections: [
        {
          heading: 'Your First Node.js HTTP Web Server',
          body: 'A complete web server in 6 lines of JavaScript:',
          code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to DevAura Node.js Server!\\n');
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Node.js HTTP Server Simulation</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">$ node server.js
Server running at http://localhost:8080/
HTTP 200 OK &rarr; Welcome to DevAura Node.js Server!</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Node.js Intro
  {
    id: 'nodejs-intro',
    title: 'Node.js Introduction',
    slug: 'nodejs-intro',
    summary: 'Why use Node.js? Non-blocking asynchronous architecture, single-threaded event loop, and JSON universality.',
    readTime: '4 min',
    category: 'Node.js Tutorial',
    content: {
      overview: 'Traditional multi-threaded web servers (like Apache) create a new operating system thread for each incoming network request, which consumes memory and slows down under heavy concurrency. Node.js processes requests asynchronously on a single main thread using an event loop.',
      sections: [
        {
          heading: 'Blocking vs Non-Blocking I/O',
          body: 'How Node.js handles database queries or file operations without freezing execution:',
          code: `// BLOCKING (Sync): Server waits idle while disk reads file
// const data = fs.readFileSync('/large-file.zip');
// console.log("Done reading");

// NON-BLOCKING (Async): Server immediately accepts other user requests!
fs.readFile('/large-file.zip', (err, data) => {
  if (err) throw err;
  console.log("File processed in background without blocking!");
});
console.log("This executes immediately while file is reading!");`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 3. Node.js Get Started
  {
    id: 'nodejs-getstarted',
    title: 'Node.js Get Started',
    slug: 'nodejs-getstarted',
    summary: 'Download Node.js from nodejs.org, inspect CLI version flags, and execute scripts with the node command.',
    readTime: '4 min',
    category: 'Node.js Tutorial',
    content: {
      overview: 'Node.js comes bundled with NPM (Node Package Manager). You can verify your installation by typing node -v and npm -v in your terminal.',
      sections: [
        {
          heading: 'Running Scripts from Terminal',
          body: 'Executing JavaScript files directly from the command line:',
          code: `# Check installed Node.js version:
node -v
# v20.14.0

# Start interactive REPL:
node

# Execute script file:
node app.js`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 4. Node.js Modules
  {
    id: 'nodejs-modules',
    title: 'Node.js Modules',
    slug: 'nodejs-modules',
    summary: 'Encapsulate and reuse code with module.exports, require(), and modern ES Modules (import/export).',
    readTime: '4 min',
    category: 'Node.js Tutorial',
    content: {
      overview: 'A module in Node.js is a reusable block of code that lives in its own scope. Built-in modules include http, fs, path, and os.',
      sections: [
        {
          heading: 'Creating and Exporting Custom Modules',
          body: 'Using CommonJS module.exports and require():',
          code: `// myDateTime.js (Custom Module)
exports.myDateTime = function () {
  return new Date();
};

// app.js (Consumer File)
const dt = require('./myDateTime');
console.log("Current date & time is:", dt.myDateTime());`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 5. Node.js HTTP Module
  {
    id: 'nodejs-http',
    title: 'Node.js HTTP Module',
    slug: 'nodejs-http',
    summary: 'Create custom HTTP web servers, read request headers/URL, and stream HTML responses.',
    readTime: '5 min',
    category: 'Node.js Tutorial',
    content: {
      overview: 'The built-in http module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).',
      sections: [
        {
          heading: 'Reading the Request URL',
          body: 'Inspecting request endpoints with req.url:',
          code: `const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  if (req.url === '/') {
    res.write('<h1>DevAura Home</h1>');
  } else if (req.url === '/about') {
    res.write('<h1>About DevAura Learning</h1>');
  } else {
    res.writeHead(404);
    res.write('<h1>Page Not Found</h1>');
  }
  
  res.end();
}).listen(8080);`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 6. Node.js File System Module
  {
    id: 'nodejs-filesystem',
    title: 'Node.js File System (fs Module)',
    slug: 'nodejs-filesystem',
    summary: 'CRUD operations on physical disk files: readFile, appendFile, writeFile, unlink, and rename.',
    readTime: '5 min',
    category: 'Node.js Tutorial',
    content: {
      overview: 'The Node.js File System module (fs) allows you to work with the file system on your computer.',
      sections: [
        {
          heading: 'Reading, Writing and Deleting Files',
          body: 'Core file system methods:',
          code: `const fs = require('fs');

// 1. Read File
fs.readFile('demofile.html', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 2. Append or Create File
fs.appendFile('mynewfile.txt', 'Hello Content!\\n', (err) => {
  if (err) throw err;
  console.log('Saved!');
});

// 3. Delete File
fs.unlink('mynewfile.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 7. Node.js URL Module
  {
    id: 'nodejs-url',
    title: 'Node.js URL Module',
    slug: 'nodejs-url',
    summary: 'Split web addresses into readable parts (protocol, host, pathname, query parameters) using the URL API.',
    readTime: '4 min',
    category: 'Node.js Tutorial',
    content: {
      overview: 'The URL module splits up a web address into readable parts. Node.js supports both the legacy url.parse() and the modern WHATWG URL API.',
      sections: [
        {
          heading: 'Parsing URL and Query Parameters',
          body: 'Extracting search parameters:',
          code: `const url = require('url');
const addr = 'http://localhost:8080/course.html?year=2026&month=november';

// Parse address:
const q = url.parse(addr, true);

console.log("Host:", q.host);         // "localhost:8080"
console.log("Pathname:", q.pathname); // "/course.html"
console.log("Query Year:", q.query.year); // "2026"

// Modern WHATWG URL object:
const myURL = new URL(addr);
console.log("Search param:", myURL.searchParams.get("month")); // "november"`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 8. Node.js NPM
  {
    id: 'nodejs-npm',
    title: 'Node.js NPM (Node Package Manager)',
    slug: 'nodejs-npm',
    summary: 'Install third-party packages, manage dependencies with package.json, and run npm scripts.',
    readTime: '4 min',
    category: 'Node.js Tutorial',
    content: {
      overview: 'NPM is the world’s largest software registry. It is both an online repository for open-source Node.js projects and a CLI tool for installing and versioning packages.',
      sections: [
        {
          heading: 'NPM Workflow',
          body: 'Common package management commands:',
          code: `# Initialize a new project with defaults:
npm init -y

# Install a runtime dependency (e.g., express):
npm install express

# Install a development tool (e.g., nodemon):
npm install -D nodemon

# Run project script defined in package.json:
npm start`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 9. Node.js Events
  {
    id: 'nodejs-events',
    title: 'Node.js Events (EventEmitter)',
    slug: 'nodejs-events',
    summary: 'Handle custom event-driven workflows with the EventEmitter class (.on() listener and .emit() trigger).',
    readTime: '4 min',
    category: 'Node.js Tutorial',
    content: {
      overview: 'Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.',
      sections: [
        {
          heading: 'Creating and Emitting Events',
          body: 'EventEmitter example:',
          code: `const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Create an event handler listener:
eventEmitter.on('userRegistered', (user) => {
  console.log('Sending welcome email to:', user.email);
});

// Fire / emit the event:
eventEmitter.emit('userRegistered', { name: 'Abhay', email: 'abhay@example.com' });`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 10. Node.js Upload Files
  {
    id: 'nodejs-upload',
    title: 'Node.js Upload Files (Formidable)',
    slug: 'nodejs-upload',
    summary: 'Accept file uploads through multipart/form-data HTML forms using the Formidable module.',
    readTime: '5 min',
    category: 'Node.js Tutorial',
    content: {
      overview: 'When users submit files through web forms, the request body is encoded as multipart/form-data. Formidable parses incoming form files and saves them to temporary storage.',
      sections: [
        {
          heading: 'Handling Uploads with Formidable',
          body: 'Receiving and moving uploaded files:',
          code: `const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url === '/fileupload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      const oldPath = files.filetoupload.filepath;
      const newPath = './uploads/' + files.filetoupload.originalFilename;
      fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        res.write('File uploaded and moved successfully!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
  }
}).listen(8080);`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 11. Node.js Send an Email
  {
    id: 'nodejs-email',
    title: 'Node.js Send an Email (Nodemailer)',
    slug: 'nodejs-email',
    summary: 'Send plain text and HTML emails through SMTP providers (Gmail, SendGrid, Amazon SES) using Nodemailer.',
    readTime: '4 min',
    category: 'Node.js Tutorial',
    content: {
      overview: 'The Nodemailer module makes it simple to send transactional emails, password resets, and notifications directly from your Node.js backend.',
      sections: [
        {
          heading: 'Sending Mail with Nodemailer',
          body: 'Configuring an SMTP transporter and dispatching:',
          code: `const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_app_password' // Use App Passwords for security
  }
});

const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'student@devaura.dev',
  subject: 'Welcome to DevAura Learning!',
  html: '<h1>Account Activated</h1><p>Start learning full-stack development today.</p>'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 12. Node.js MySQL Database
  {
    id: 'nodejs-mysql',
    title: 'Node.js MySQL Database',
    slug: 'nodejs-mysql',
    summary: 'Connect to relational MySQL databases, execute queries, insert records, and prevent SQL injection.',
    readTime: '5 min',
    category: 'Node.js Database',
    content: {
      overview: 'Node.js connects to MySQL relational databases using the mysql or mysql2 npm packages, executing asynchronous SQL queries.',
      sections: [
        {
          heading: 'Connecting and Querying MySQL in Node.js',
          body: 'Establishing connection and executing parameterized queries:',
          code: `const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password123",
  database: "shop_db"
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");

  // Safe parameterized query (avoids SQL injection):
  const sql = "SELECT id, name, price FROM products WHERE price > ? ORDER BY price DESC";
  con.query(sql, [50.00], (err, results) => {
    if (err) throw err;
    console.log("Matching products:", results);
  });
});`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 13. Node.js MongoDB Database
  {
    id: 'nodejs-mongodb',
    title: 'Node.js MongoDB Database',
    slug: 'nodejs-mongodb',
    summary: 'Connect to NoSQL MongoDB clusters using the official mongodb MongoClient driver.',
    readTime: '5 min',
    category: 'Node.js Database',
    content: {
      overview: 'The official mongodb package allows Node.js applications to connect to MongoDB and perform document CRUD operations asynchronously.',
      sections: [
        {
          heading: 'MongoDB Driver Example',
          body: 'Connecting with MongoClient and finding documents:',
          code: `const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('devdb');
    const customers = database.collection('customers');

    // Query documents:
    const query = { status: "active" };
    const cursor = customers.find(query);
    
    await cursor.forEach(doc => console.log(doc.name, doc.plan));
  } finally {
    await client.close();
  }
}

run().catch(console.dir);`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 14. Node.js Streams & Buffers
  {
    id: 'nodejs-streams',
    title: 'Node.js Streams & Buffers',
    slug: 'nodejs-streams',
    summary: 'Process massive files chunk-by-chunk with Readable, Writable, and Transform streams without exhausting RAM.',
    readTime: '5 min',
    category: 'Node.js Advanced',
    content: {
      overview: 'Streams are collections of data that might not be available all at once and don’t have to fit in memory. Buffers hold raw binary allocations outside the V8 heap.',
      sections: [
        {
          heading: 'Piping Large Files',
          body: 'Piping a 10GB file from disk directly to HTTP response in constant ~20MB RAM:',
          code: `const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  // Good: Constant memory usage regardless of file size!
  const src = fs.createReadStream('./big_movie.mp4');
  src.pipe(res);
}).listen(8000);`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 15. Node.js Architecture & The Event Loop
  {
    id: 'nodejs-eventloop',
    title: 'Node.js Architecture & The Event Loop',
    slug: 'nodejs-eventloop',
    summary: 'Understand libuv, the 6 event loop phases, microtask queues (Promise, process.nextTick), and timers.',
    readTime: '6 min',
    category: 'Node.js Advanced',
    content: {
      overview: 'The event loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It offloads operations to the system kernel whenever possible via libuv.',
      sections: [
        {
          heading: 'Event Loop Phases & Microtasks',
          body: 'Order of execution: Call Stack -> process.nextTick -> Promise Microtasks -> Timers -> Poll (I/O) -> Check (setImmediate) -> Close.',
          code: `console.log('1. Synchronous script start');

setTimeout(() => {
  console.log('4. Timer callback executed');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Microtask Promise resolved');
});

process.nextTick(() => {
  console.log('2. process.nextTick executed before microtasks');
});

console.log('1.5. Synchronous script end');

// Output order:
// 1. Synchronous script start
// 1.5. Synchronous script end
// 2. process.nextTick executed before microtasks
// 3. Microtask Promise resolved
// 4. Timer callback executed`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 16. Node.js Express Framework
  {
    id: 'nodejs-express',
    title: 'Node.js Express Framework & REST API',
    slug: 'nodejs-express',
    summary: 'Building lightweight REST APIs and web servers using Express.js middleware and routing.',
    readTime: '5 min',
    category: 'Node.js Frameworks',
    content: {
      overview: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is the de-facto standard server framework for Node.js.',
      sections: [
        {
          heading: 'Express REST Endpoints',
          body: 'Building GET and POST JSON endpoints:',
          code: `const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON body

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(port, () => console.log('API active on port ' + port));`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 17. Node.js Async/Await & Promises
  {
    id: 'nodejs-async',
    title: 'Node.js Asynchronous Patterns (Async/Await)',
    slug: 'nodejs-async',
    summary: 'Escaping callback hell with Promises, fs/promises, and modern async/await syntax.',
    readTime: '5 min',
    category: 'Node.js Advanced',
    content: {
      overview: 'In modern Node.js, asynchronous tasks should use Promises and async/await rather than deeply nested callbacks. Node.js includes built-in promise support across all modules via fs/promises and timers/promises.',
      sections: [
        {
          heading: 'Clean Async/Await Workflow',
          body: 'Using fs/promises with try/catch:',
          code: `const fs = require('fs/promises');

async function processConfigFile() {
  try {
    const rawData = await fs.readFile('config.json', 'utf8');
    const config = JSON.parse(rawData);
    console.log("App port configured to:", config.port);
  } catch (err) {
    console.error("Failed to read configuration:", err.message);
  }
}

processConfigFile();`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 18. Node.js Raspberry Pi & Hardware IoT
  {
    id: 'nodejs-raspberrypi',
    title: 'Node.js Raspberry Pi & IoT Hardware',
    slug: 'nodejs-raspberrypi',
    summary: 'Interact with physical computing devices, GPIO pins, LEDs, and sensors using Node.js.',
    readTime: '4 min',
    category: 'Node.js IoT',
    content: {
      overview: 'Because of its lightweight memory footprint and event-driven architecture, Node.js is widely used on single-board computers like the Raspberry Pi for Internet of Things (IoT) hardware automation.',
      sections: [
        {
          heading: 'Controlling GPIO Pins with onoff',
          body: 'Blinking an LED wired to Raspberry Pi GPIO pin 4:',
          code: `const Gpio = require('onoff').Gpio;
const led = new Gpio(4, 'out'); // GPIO pin 4 as output

// Blink LED every 500ms:
const blinkInterval = setInterval(() => {
  if (led.readSync() === 0) {
    led.writeSync(1); // Turn on
  } else {
    led.writeSync(0); // Turn off
  }
}, 500);

// Stop blinking after 10 seconds:
setTimeout(() => {
  clearInterval(blinkInterval);
  led.writeSync(0); // Turn off
  led.unexport();   // Free GPIO resource
}, 10000);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Raspberry Pi GPIO Hardware Simulator</h3>
    <div style="display:flex; align-items:center; gap:12px; margin-top:8px;">
      <div style="width:20px; height:20px; border-radius:50%; background:#22c55e; box-shadow:0 0 10px #22c55e;"></div>
      <span style="font-weight:bold; color:#0f172a;">GPIO Pin 4: HIGH (LED Active)</span>
    </div>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace; margin-top:12px;">$ node blink.js
[GPIO] Pin 4 exported as OUTPUT
[Event] Blinking frequency: 2Hz
[Status] Running on Raspberry Pi Linux ARM64</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
