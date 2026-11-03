import { TutorialChapter } from '../../../types';

export const phpAdvancedAndOopChapters: TutorialChapter[] = [
  // 21. PHP Form Handling
  {
    id: 'php-form-handling',
    title: 'PHP Form Handling',
    slug: 'php-form-handling',
    summary: 'The PHP superglobals $_GET and $_POST are used to collect form-data: GET vs POST.',
    readTime: '5 min',
    category: 'PHP Forms',
    content: {
      overview: 'The PHP superglobals $_GET and $_POST are used to collect form-data. When a user fills out a form and clicks the submit button, the form data is sent for processing to a PHP file. Both GET and POST create an array that holds key/value pairs, where keys are the names of the form controls and values are the input data from the user.',
      sections: [
        {
          heading: 'GET vs. POST Method',
          body: 'GET sends parameters visible in the URL (suitable for bookmarkable searches). POST sends parameters in the HTTP body (required for passwords and updates).',
          code: `<!-- HTML Form -->
<form action="welcome.php" method="post">
  Name: <input type="text" name="name"><br>
  E-mail: <input type="text" name="email"><br>
  <input type="submit">
</form>

<!-- PHP Processing (welcome.php) -->
<?php
$name = $_POST["name"] ?? "";
$email = $_POST["email"] ?? "";
echo "Welcome " . htmlspecialchars($name) . "<br>";
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Form Handling Security</h3>
  <div style="background:#eff6ff; border:1px solid #93c5fd; padding:12px; border-radius:6px;">
    Always use <code>POST</code> for passwords, credit cards, and state mutations; never send sensitive data over <code>GET</code>.
  </div>
</body>
</html>`,
          tips: [
            'GET has limits on the amount of information to send (about 2000 characters).'
          ]
        }
      ]
    }
  },

  // 22. PHP Form Validation
  {
    id: 'php-form-validation',
    title: 'PHP Form Validation',
    slug: 'php-form-validation',
    summary: 'Sanitize user input to protect against Cross-Site Scripting (XSS): htmlspecialchars(), trim(), stripslashes().',
    readTime: '6 min',
    category: 'PHP Forms',
    content: {
      overview: 'Security is paramount when processing PHP forms. Never trust user input. Without validation and sanitization, malicious users can inject JavaScript tags (<script>) into forms, executing Cross-Site Scripting (XSS) attacks on other users.',
      sections: [
        {
          heading: 'Input Sanitization Helper Function',
          body: 'Strip unnecessary whitespace, slashes, and convert special HTML characters.',
          code: `<?php
function clean_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data); // Converts < and > to &lt; and &gt;
  return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = clean_input($_POST["name"]);
  $email = clean_input($_POST["email"]);
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>XSS Neutralization</h3>
  <p>Input: <code>&lt;script&gt;alert(1)&lt;/script&gt;</code></p>
  <p>After <code>htmlspecialchars()</code>: <code>&amp;lt;script&amp;gt;...</code> (Rendered as safe text!)</p>
</body>
</html>`,
          tips: [
            'htmlspecialchars() converts special characters to HTML entities, defusing script injection.'
          ]
        }
      ]
    }
  },

  // 23. PHP Form Required Fields
  {
    id: 'php-form-required',
    title: 'PHP Form Required Fields',
    slug: 'php-form-required',
    summary: 'Validating required fields and displaying error messages when inputs are empty.',
    readTime: '5 min',
    category: 'PHP Forms',
    content: {
      overview: 'From the validation rules table, we see that "Name", "E-mail", and "Gender" fields are required. These fields cannot be empty and must be filled out in the HTML form. In PHP, check empty() and assign error messages to display alongside inputs.',
      sections: [
        {
          heading: 'Validating Required Fields',
          body: 'Check empty($_POST["field"]) and record error messages.',
          code: `<?php
$nameErr = $emailErr = "";
$name = $email = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = clean_input($_POST["name"]);
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = clean_input($_POST["email"]);
    // Validate e-mail format:
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Validation Error Feedback</h3>
  <p style="color:red;">* Email is required</p>
</body>
</html>`,
          tips: [
            'Always combine frontend HTML required attributes with backend PHP validation, because frontend checks can easily be bypassed.'
          ]
        }
      ]
    }
  },

  // 24. PHP Date & Time
  {
    id: 'php-date-time',
    title: 'PHP Date and Time',
    slug: 'php-date-time',
    summary: 'The PHP date() function is used to format a date and/or a time: date(), strtotime().',
    readTime: '5 min',
    category: 'PHP Advanced',
    content: {
      overview: 'The PHP date() function formats a timestamp to a more readable date and time. Syntax: date(format, timestamp). Common format characters: d (day 01-31), m (month 01-12), Y (year 4 digits), H (hour 00-23), i (minutes 00-59), s (seconds 00-59).',
      sections: [
        {
          heading: 'Setting Timezone & strtotime()',
          body: 'strtotime() parses natural human English phrases like "+1 week" into timestamps.',
          code: `<?php
// Set timezone:
date_default_timezone_set("America/New_York");

echo "Today is " . date("Y/m/d") . "<br>";
echo "Current Time: " . date("h:i:sa") . "<br>";

// Human readable string parsing:
$d = strtotime("next Saturday");
echo "Next Saturday: " . date("Y-m-d", $d) . "<br>";

$future = strtotime("+3 months");
echo "3 Months from now: " . date("Y-m-d", $future);
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>strtotime() Magic</h3>
  <p><code>strtotime("+2 weeks")</code> calculates the future Unix timestamp instantly.</p>
</body>
</html>`,
          tips: [
            'Always configure date_default_timezone_set() to ensure accurate server timestamps.'
          ]
        }
      ]
    }
  },

  // 25. PHP Include & Require
  {
    id: 'php-include',
    title: 'PHP Include & Require',
    slug: 'php-include',
    summary: 'Insert the content of one PHP file into another PHP file: include vs. require, include_once, require_once.',
    readTime: '5 min',
    category: 'PHP Advanced',
    content: {
      overview: 'The include (or require) statement takes all the text/code/markup that exists in the specified file and copies it into the file that uses the include statement. The require statement is identical to include, except upon failure: require produces a fatal error (E_COMPILE_ERROR) and stops script execution; include only produces a warning (E_WARNING) and the script will continue.',
      sections: [
        {
          heading: 'require_once for Critical Libraries',
          body: 'Use require_once for database connectors and classes to prevent duplicate class definition errors.',
          code: `<?php
// Include template header:
include 'header.php';

// Require critical configuration:
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Modular Page Architecture</h3>
  <div style="background:#f1f5f9; padding:12px; border-radius:6px;">
    Header &rarr; Navigation &rarr; Body Content &rarr; Footer
  </div>
</body>
</html>`,
          tips: [
            'Use require when the file is required by the application. Use include when the file is optional.'
          ]
        }
      ]
    }
  },

  // 26. PHP File Handling
  {
    id: 'php-file-handling',
    title: 'PHP File Handling',
    slug: 'php-file-handling',
    summary: 'Open, read, write, and close server files: fopen(), fread(), fgets(), feof(), fclose().',
    readTime: '5 min',
    category: 'PHP Advanced',
    content: {
      overview: 'File handling is an important part of any web application. You often need to open and process a file for different tasks. PHP has several functions for creating, reading, uploading, and editing files.',
      sections: [
        {
          heading: 'fopen(), fgets(), and feof()',
          body: 'fgets() reads a single line from a file stream. feof() checks if end-of-file has been reached.',
          code: `<?php
// Simple read:
// echo readfile("webdictionary.txt");

// Stream-based read line by line:
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");

while(!feof($myfile)) {
    echo fgets($myfile) . "<br>";
}

fclose($myfile);
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Buffered File Streaming</h3>
  <p>Reading line-by-line with <code>fgets()</code> processes multi-gigabyte log files without exhausting PHP memory limits.</p>
</body>
</html>`,
          tips: [
            'Always close an open file with fclose($handle) when reading or writing finishes.'
          ]
        }
      ]
    }
  },

  // 27. PHP File Upload
  {
    id: 'php-file-upload',
    title: 'PHP File Upload',
    slug: 'php-file-upload',
    summary: 'Allow users to upload files to the server safely using $_FILES and move_uploaded_file().',
    readTime: '6 min',
    category: 'PHP Advanced',
    content: {
      overview: 'With PHP, it is easy to upload files to the server. However, with ease comes danger, so always be careful when allowing file uploads! Make sure the form uses method="post" and enctype="multipart/form-data".',
      sections: [
        {
          heading: 'Handling Uploads Safely',
          body: 'Validate file extensions, MIME types, and file size before saving.',
          code: `<!-- Form must have enctype="multipart/form-data" -->
<form action="upload.php" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="fileToUpload">
  <input type="submit" value="Upload Image">
</form>

<?php
// Processing in upload.php:
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Check size (Limit to 2MB):
if ($_FILES["fileToUpload"]["size"] > 2000000) {
    die("File is too large.");
}

// Move from temporary upload directory to permanent location:
if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "File uploaded successfully!";
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>File Upload Checklist</h3>
  <ul>
    <li>Form has <code>enctype="multipart/form-data"</code></li>
    <li>Check <code>$_FILES["file"]["size"]</code></li>
    <li>Validate extension against whitelist (jpg, png, pdf)</li>
  </ul>
</body>
</html>`,
          tips: [
            'Never trust the file extension alone; verify MIME type using finfo_file().'
          ]
        }
      ]
    }
  },

  // 28. PHP Cookies
  {
    id: 'php-cookies',
    title: 'PHP Cookies',
    slug: 'php-cookies',
    summary: 'A cookie is often used to identify a user: setcookie() and the $_COOKIE superglobal.',
    readTime: '5 min',
    category: 'PHP Advanced',
    content: {
      overview: 'A cookie is often used to identify a user. A cookie is a small file that the server embeds on the user computer. Each time the same computer requests a page with a browser, it will send the cookie too. With PHP, you can both create and retrieve cookie values.',
      sections: [
        {
          heading: 'Creating, Reading, and Deleting Cookies',
          body: 'The setcookie() function must appear BEFORE the <html> tag.',
          code: `<?php
// Set cookie (name, value, expire, path):
// 86400 = 1 day (86400 * 30 = 30 days)
setcookie("user", "John Doe", time() + (86400 * 30), "/");

// Read cookie:
if(isset($_COOKIE["user"])) {
    echo "Welcome " . $_COOKIE["user"];
}

// Delete cookie (set expiration in the past):
setcookie("user", "", time() - 3600, "/");
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Cookie Retrieval</h3>
  <p><code>$_COOKIE['theme']</code> remembers preferences across browser sessions.</p>
</body>
</html>`,
          tips: [
            'Always set the httponly and secure flags on cookies storing authentication tokens.'
          ]
        }
      ]
    }
  },

  // 29. PHP Sessions
  {
    id: 'php-sessions',
    title: 'PHP Sessions',
    slug: 'php-sessions',
    summary: 'A session is a way to store information (in variables) to be used across multiple pages: session_start().',
    readTime: '5 min',
    category: 'PHP Advanced',
    content: {
      overview: 'Unlike cookies, session information is not stored on the users computer. When you work with an application, you open it, do some changes, and then you close it. This is much like a Session. The computer knows who you are. It knows when you start the application and when you end. But on the internet there is one problem: the web server does not know who you are or what you do, because the HTTP address does not maintain state.',
      sections: [
        {
          heading: 'Starting and Storing Sessions',
          body: 'session_start() must be the very first thing in your document, before any HTML tags.',
          code: `<?php
// Start the session:
session_start();

// Set session variables:
$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "cat";
$_SESSION["user_id"] = 101;

// Access session variables on any subsequent page:
echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>";

// Destroy all session data upon logout:
session_unset();
session_destroy();
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Server-Side Session State</h3>
  <p>User authentication state is persisted in <code>$_SESSION['user_id']</code> across page navigation.</p>
</body>
</html>`,
          tips: [
            'Call session_regenerate_id(true) upon login to protect against Session Fixation attacks.'
          ]
        }
      ]
    }
  },

  // 30. PHP Filters
  {
    id: 'php-filters',
    title: 'PHP Filters',
    slug: 'php-filters',
    summary: 'Validating and sanitizing external data using filter_var() and filter_input().',
    readTime: '5 min',
    category: 'PHP Advanced',
    content: {
      overview: 'Validating data = Determine if the data is in proper form. Sanitizing data = Remove any illegal character from the data. The PHP filter extension has many of the functions needed for checking user input, and is designed to make data validation easier and quicker.',
      sections: [
        {
          heading: 'Validating Emails, Integers, and URLs',
          body: 'filter_var() returns false if validation fails.',
          code: `<?php
// Validate Email:
$email = "john.doe@example.com";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "$email is a valid email address";
}

// Validate Integer in Range:
$age = 25;
if (filter_var($age, FILTER_VALIDATE_INT, ["options" => ["min_range"=>18, "max_range"=>100]])) {
    echo "Age is valid";
}

// Validate URL:
$url = "https://devaura.dev";
if (filter_var($url, FILTER_VALIDATE_URL)) {
    echo "Valid URL";
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>filter_var() Validation</h3>
  <p><code>filter_var($email, FILTER_VALIDATE_EMAIL)</code> accurately validates RFC email formats.</p>
</body>
</html>`,
          tips: [
            'Use filter_input(INPUT_POST, \'email\', FILTER_VALIDATE_EMAIL) to directly filter inputs from POST.'
          ]
        }
      ]
    }
  },

  // 31. PHP JSON
  {
    id: 'php-json',
    title: 'PHP JSON',
    slug: 'php-json',
    summary: 'Encode and decode JSON objects in PHP: json_encode() and json_decode().',
    readTime: '5 min',
    category: 'PHP Advanced',
    content: {
      overview: 'JSON stands for JavaScript Object Notation, and is a syntax for storing and exchanging data. Since the JSON format is a text-based format, it can easily be sent to and from a server, and used as any data format by any programming language. PHP has built-in functions: json_encode() and json_decode().',
      sections: [
        {
          heading: 'Encoding Arrays & Decoding JSON',
          body: 'Pass true as the second parameter to json_decode() to get an associative array instead of an object.',
          code: `<?php
// Array to JSON string:
$age = ["Peter"=>35, "Ben"=>37, "Joe"=>43];
$json_str = json_encode($age); // '{"Peter":35,"Ben":37,"Joe":43}'

// JSON string to Associative Array:
$json_data = '{"name":"John", "age":30, "city":"New York"}';
$arr = json_decode($json_data, true); // true = associative array
echo $arr["name"]; // "John"
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>REST API JSON Response</h3>
  <pre style="background:#f1f5f9; padding:12px; border-radius:6px;">header('Content-Type: application/json');
echo json_encode(["status" =&gt; "success"]);</pre>
</body>
</html>`,
          tips: [
            'Always check json_last_error() === JSON_ERROR_NONE to verify JSON was parsed correctly.'
          ]
        }
      ]
    }
  },

  // 32. PHP Exceptions
  {
    id: 'php-exceptions',
    title: 'PHP Exceptions',
    slug: 'php-exceptions',
    summary: 'An exception is an object that describes an error or unexpected behaviour of a PHP script: try, catch, finally.',
    readTime: '5 min',
    category: 'PHP Advanced',
    content: {
      overview: 'Exceptions are thrown by many PHP functions and classes. User defined functions and classes can also throw exceptions. Exceptions are a good way to stop a function when it comes across data that it cannot use: try, catch, finally, throw.',
      sections: [
        {
          heading: 'Exception Handling Flow',
          body: 'The finally block will always execute even if an exception was caught.',
          code: `<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero");
  }
  return $dividend / $divisor;
}

try {
  echo divide(5, 0);
} catch(Exception $e) {
  echo "Unable to divide: " . $e->getMessage();
} finally {
  echo "<br>Process complete.";
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Exception Recovery in PHP</h3>
  <p style="color:#16a34a; font-weight:bold;">Caught exception: "Division by zero". Execution resumed cleanly.</p>
</body>
</html>`,
          tips: [
            'In PHP 8+, internal fatal errors now throw Error exceptions that can be caught in try...catch blocks.'
          ]
        }
      ]
    }
  },

  // 33. PHP OOP
  {
    id: 'php-oop',
    title: 'PHP OOP Concepts',
    slug: 'php-oop',
    summary: 'From PHP 5 onwards, you can also write PHP code in an Object-Oriented style: classes and objects.',
    readTime: '5 min',
    category: 'PHP OOP',
    content: {
      overview: 'OOP stands for Object-Oriented Programming. Procedural programming is about writing procedures or functions that perform operations on the data, while object-oriented programming is about creating objects that contain both data and functions.',
      sections: [
        {
          heading: 'Classes and Objects with $this',
          body: 'A class is defined by using the class keyword, followed by the name of the class and a pair of curly braces ({}).',
          code: `<?php
class Fruit {
  // Properties:
  public $name;
  public $color;

  // Methods:
  function set_name($name) {
    $this->name = $name;
  }
  function get_name() {
    return $this->name;
  }
}

$apple = new Fruit();
$apple->set_name('Apple');
echo $apple->get_name(); // "Apple"
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>The $this Keyword</h3>
  <p><code>$this-&gt;name</code> refers to the property of the current object instance.</p>
</body>
</html>`,
          tips: [
            'Use $this inside class methods to refer to the current object instance.'
          ]
        }
      ]
    }
  },

  // 34. PHP Constructor & Destructor
  {
    id: 'php-constructors',
    title: 'PHP Constructor & Destructor',
    slug: 'php-constructors',
    summary: 'A constructor allows you to initialize an object properties upon creation of the object: __construct().',
    readTime: '5 min',
    category: 'PHP OOP',
    content: {
      overview: 'If you create a __construct() function, PHP will automatically call this function when you create an object from a class. Notice that the construct function starts with two underscores (__!). PHP 8 also introduced Constructor Property Promotion to drastically shorten boilerplate.',
      sections: [
        {
          heading: 'Constructor Property Promotion (PHP 8)',
          body: 'Promoting properties right in the constructor parameters eliminate repetitive property assignments.',
          code: `<?php
// Traditional PHP constructor:
class Fruit {
  public $name;
  function __construct($name) {
    $this->name = $name;
  }
}

// PHP 8 Constructor Property Promotion (Clean & concise!):
class ModernUser {
  public function __construct(
    public string $name,
    public string $email,
    public int $age = 18
  ) {}
}

$user = new ModernUser("Alex", "alex@devaura.dev");
echo $user->email; // "alex@devaura.dev"
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>PHP 8 Constructor Property Promotion</h3>
  <p>Defines fields and assigns them automatically in a single line!</p>
</body>
</html>`,
          tips: [
            '__destruct() is called automatically when the object is destructed or the script finishes.'
          ]
        }
      ]
    }
  },

  // 35. PHP Access Modifiers
  {
    id: 'php-access-modifiers',
    title: 'PHP Access Modifiers',
    slug: 'php-access-modifiers',
    summary: 'Properties and methods can have access modifiers which control where they can be accessed: public, protected, private.',
    readTime: '5 min',
    category: 'PHP OOP',
    content: {
      overview: 'There are three access modifiers: public (the property or method can be accessed from everywhere), protected (the property or method can be accessed within the class and by classes derived from that class), private (the property or method can ONLY be accessed within the class).',
      sections: [
        {
          heading: 'Access Modifier Rules',
          body: 'Enforce encapsulation by making properties private or protected.',
          code: `<?php
class Fruit {
  public $name;        // Public
  protected $color;    // Protected (Subclasses can access)
  private $weight;     // Private (Only Fruit class can access)
}

$mango = new Fruit();
$mango->name = 'Mango';   // OK
// $mango->color = 'Yellow'; // ERROR
// $mango->weight = '300';   // ERROR
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Encapsulation Rules</h3>
  <ul>
    <li><code>public</code>: Accessible anywhere</li>
    <li><code>protected</code>: Class + Subclasses</li>
    <li><code>private</code>: Class only</li>
  </ul>
</body>
</html>`,
          tips: [
            'If an access modifier is omitted on a method, PHP defaults to public.'
          ]
        }
      ]
    }
  },

  // 36. PHP Inheritance
  {
    id: 'php-inheritance',
    title: 'PHP Inheritance',
    slug: 'php-inheritance',
    summary: 'Inheritance in OOP = When a class derives from another class: extends keyword and final.',
    readTime: '5 min',
    category: 'PHP OOP',
    content: {
      overview: 'The child class will inherit all the public and protected properties and methods from the parent class. In addition, it can have its own properties and methods. An inherited class is defined by using the extends keyword.',
      sections: [
        {
          heading: 'Overriding Inherited Methods',
          body: 'Inherited methods can be overridden by re-declaring the method with the same name in the child class.',
          code: `<?php
class Fruit {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  public function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

// Strawberry is inherited from Fruit:
class Strawberry extends Fruit {
  public function message() {
    echo "Am I a fruit or a berry? ";
  }
}

$strawberry = new Strawberry("Strawberry", "red");
$strawberry->message();
$strawberry->intro(); // Calls inherited method!
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Inheritance in PHP</h3>
  <p><code>class Strawberry extends Fruit</code> inherits Fruit attributes and methods.</p>
</body>
</html>`,
          tips: [
            'Use the final keyword to prevent class inheritance or method overriding.'
          ]
        }
      ]
    }
  },

  // 37. PHP Class Constants
  {
    id: 'php-class-constants',
    title: 'PHP Class Constants',
    slug: 'php-class-constants',
    summary: 'Class constants can be useful if you need to define some constant data inside a class: const and self::.',
    readTime: '4 min',
    category: 'PHP OOP',
    content: {
      overview: 'Class constants are case-sensitive. However, it is recommended to name the constants in all uppercase letters. We can access a constant from outside the class by using the class name followed by the scope resolution operator (::) followed by the constant name.',
      sections: [
        {
          heading: 'Accessing Class Constants with self::',
          body: 'Inside the class, access constants using self::CONSTANT_NAME.',
          code: `<?php
class Goodbye {
  const LEAVING_MESSAGE = "Thank you for visiting DevAura!";

  public function byebye() {
    echo self::LEAVING_MESSAGE; // Inside class
  }
}

// Outside class using Scope Resolution Operator (::):
echo Goodbye::LEAVING_MESSAGE;
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Scope Resolution (::)</h3>
  <p><code>Goodbye::LEAVING_MESSAGE</code> accesses the constant without instantiating an object.</p>
</body>
</html>`,
          tips: [
            'In PHP 7.1+, class constants can also have access modifiers (public, private, protected).'
          ]
        }
      ]
    }
  },

  // 38. PHP Abstract Classes
  {
    id: 'php-abstract-classes',
    title: 'PHP Abstract Classes',
    slug: 'php-abstract-classes',
    summary: 'Abstract classes and methods are when the parent class has a named method, but need its child class to fill out the tasks.',
    readTime: '5 min',
    category: 'PHP OOP',
    content: {
      overview: 'An abstract class is a class that contains at least one abstract method. An abstract method is a method that is declared, but not implemented in the code. An abstract class or method is defined with the abstract keyword.',
      sections: [
        {
          heading: 'Defining and Implementing Abstract Classes',
          body: 'Child classes must implement all abstract methods with the same or less restricted access modifier.',
          code: `<?php
abstract class Car {
  public $name;
  public function __construct($name) {
    $this->name = $name;
  }
  // Abstract method must be implemented by child:
  abstract public function intro() : string;
}

class Audi extends Car {
  public function intro() : string {
    return "Choose German quality! I'm an $this->name!";
  }
}

$audi = new Audi("Audi");
echo $audi->intro();
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Abstract Class Enforcement</h3>
  <p>Subclasses are forced by compiler to implement the <code>intro()</code> method contract.</p>
</body>
</html>`,
          tips: [
            'You cannot instantiate an abstract class directly ($car = new Car() fails).'
          ]
        }
      ]
    }
  },

  // 39. PHP Interfaces
  {
    id: 'php-interfaces',
    title: 'PHP Interfaces',
    slug: 'php-interfaces',
    summary: 'Interfaces allow you to specify what methods a class should implement: interface and implements.',
    readTime: '5 min',
    category: 'PHP OOP',
    content: {
      overview: 'Interfaces make it easy to use a variety of different classes in the same way. When one or more classes use the same interface, it is referred to as "polymorphism". Interfaces are declared with the interface keyword. To implement an interface, a class must use the implements keyword.',
      sections: [
        {
          heading: 'Interfaces vs. Abstract Classes',
          body: 'Interfaces cannot have properties, and all methods are public. A class can implement multiple interfaces.',
          code: `<?php
interface Animal {
  public function makeSound();
}

class Cat implements Animal {
  public function makeSound() {
    echo "Meow";
  }
}

class Dog implements Animal {
  public function makeSound() {
    echo "Bark";
  }
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Interface Polymorphism</h3>
  <p><code>class Cat implements Animal</code> guarantees Cat has a <code>makeSound()</code> method.</p>
</body>
</html>`,
          tips: [
            'A class can implement multiple interfaces separated by commas: class C implements I1, I2.'
          ]
        }
      ]
    }
  },

  // 40. PHP Traits
  {
    id: 'php-traits',
    title: 'PHP Traits',
    slug: 'php-traits',
    summary: 'Traits are used to declare methods that can be used in multiple classes, overcoming single inheritance limits.',
    readTime: '5 min',
    category: 'PHP OOP',
    content: {
      overview: 'PHP only supports single inheritance: a child class can inherit only from one single parent. So, what if a class needs to inherit multiple behaviors? OOP traits solve this problem. Traits are used to declare methods that can be used in multiple classes.',
      sections: [
        {
          heading: 'Using Traits for Code Reuse',
          body: 'A trait is defined with the trait keyword and used inside a class with use.',
          code: `<?php
trait Loggable {
  public function log($msg) {
    echo "Log: $msg<br>";
  }
}

trait Timestampable {
  public function getTimestamp() {
    return date("Y-m-d H:i:s");
  }
}

class UserService {
  use Loggable, Timestampable; // Horizontal code reuse!
}

$service = new UserService();
$service->log("User logged in at " . $service->getTimestamp());
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Trait Horizontal Composition</h3>
  <p>Allows sharing methods between unrelated classes without complex inheritance trees.</p>
</body>
</html>`,
          tips: [
            'Traits cannot be instantiated directly; they are composed into classes.'
          ]
        }
      ]
    }
  },

  // 41. PHP Static Methods
  {
    id: 'php-static-methods',
    title: 'PHP Static Methods & Properties',
    slug: 'php-static-methods',
    summary: 'Static methods and properties can be called directly - without creating an instance of the class first: ::.',
    readTime: '5 min',
    category: 'PHP OOP',
    content: {
      overview: 'Static methods can be called directly - without creating an instance of the class first. Static methods are declared with the static keyword. To access a static method use the class name, double colon (::), and the method name.',
      sections: [
        {
          heading: 'Static Methods and parent::',
          body: 'Use self:: to call static methods within the same class, and parent:: in subclasses.',
          code: `<?php
class Greeting {
  public static function welcome() {
    echo "Hello World!";
  }
}

// Call directly:
Greeting::welcome();

class SomeOtherClass {
  public function message() {
    Greeting::welcome();
  }
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Static Method Call</h3>
  <p><code>MathHelper::calculateTax($amount)</code> executes without object instantiation.</p>
</body>
</html>`,
          tips: [
            'Static methods cannot access non-static properties via $this.'
          ]
        }
      ]
    }
  },

  // 42. PHP Namespaces
  {
    id: 'php-namespaces',
    title: 'PHP Namespaces',
    slug: 'php-namespaces',
    summary: 'Namespaces are qualifiers that solve two problems: name collisions between classes, and organizing code.',
    readTime: '5 min',
    category: 'PHP OOP',
    content: {
      overview: 'Namespaces are qualifiers that solve two different problems: They allow for better organization by grouping classes that work together to perform a task. They allow the same name to be used for more than one class. Namespaces are declared at the beginning of a file with the namespace keyword.',
      sections: [
        {
          heading: 'Declaring and Using Namespaces',
          body: 'Use use keyword to import classes from other namespaces.',
          code: `<?php
// File: src/Services/Payment.php
namespace App\\Services;

class Payment {
    public function process() { return "Paid"; }
}

// File: index.php
use App\\Services\\Payment;

$pay = new Payment();
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>PSR-4 Autoloading</h3>
  <p>Namespaces map directly to folder paths (e.g. <code>App\\Services\\Payment</code> &rarr; <code>src/Services/Payment.php</code>).</p>
</body>
</html>`,
          tips: [
            'Composer autoloading automatically loads classes based on namespace declarations.'
          ]
        }
      ]
    }
  },

  // 43. PHP MySQL Intro
  {
    id: 'php-mysql-intro',
    title: 'PHP MySQL Database Intro',
    slug: 'php-mysql-intro',
    summary: 'PHP 5 and later can work with a MySQL database using MySQLi extension or PDO (PHP Data Objects).',
    readTime: '5 min',
    category: 'PHP MySQL',
    content: {
      overview: 'MySQL is the most popular database system used with PHP. PHP 5 and later can work with a MySQL database using: MySQLi extension (the "i" stands for improved) or PDO (PHP Data Objects). PDO will work on 12 different database systems, whereas MySQLi will only work with MySQL databases. PDO is strongly recommended.',
      sections: [
        {
          heading: 'Why PDO is the Industry Standard',
          body: 'PDO supports prepared statements natively, supports 12 different database drivers, and provides object-oriented exception handling.',
          code: `<?php
// Connecting via PDO (Recommended):
$dsn = "mysql:host=localhost;dbname=myDB;charset=utf8mb4";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, "username", "password", $options);
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), (int)$e->getCode());
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>PDO Database Connection</h3>
  <p style="color:#16a34a; font-weight:bold;">Connected to MySQL database via PDO successfully!</p>
</body>
</html>`,
          tips: [
            'If you have to switch your project to use another database, PDO makes the process easy by only changing the connection string.'
          ]
        }
      ]
    }
  },

  // 44. PHP Connect to MySQL
  {
    id: 'php-mysql-connect',
    title: 'PHP Connect to MySQL',
    slug: 'php-mysql-connect',
    summary: 'Establish secure database connections using PDO with proper character sets and error modes.',
    readTime: '5 min',
    category: 'PHP MySQL',
    content: {
      overview: 'To establish a connection to a MySQL database, use the PDO constructor. A DSN (Data Source Name) string defines the database driver, host, database name, and charset.',
      sections: [
        {
          heading: 'Production PDO Connection Pattern',
          body: 'Always specify charset=utf8mb4 to fully support international characters and emojis.',
          code: `<?php
$servername = "localhost";
$username = "root";
$password = "secret";
$dbname = "devaura_db";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8mb4", $username, $password);
  // Set the PDO error mode to exception:
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Connection State</h3>
  <p><code>$conn = null;</code> closes the database connection and frees server sockets.</p>
</body>
</html>`,
          tips: [
            'The connection will be closed automatically when the script ends. To close it explicitly: $conn = null;'
          ]
        }
      ]
    }
  },

  // 45. PHP MySQL Prepared Statements & SELECT
  {
    id: 'php-mysql-select',
    title: 'PHP MySQL Prepared Statements & SELECT',
    slug: 'php-mysql-select',
    summary: 'A prepared statement is a feature used to execute the same SQL statements repeatedly with high efficiency and 100% security.',
    readTime: '6 min',
    category: 'PHP MySQL',
    content: {
      overview: 'Prepared statements are very useful against SQL injections. When using prepared statements, the database compiles the SQL query structure first, and then binds user input parameters separately, making SQL injection impossible.',
      sections: [
        {
          heading: 'Prepared SELECT with Named Placeholders',
          body: 'Use named placeholders (:id) or positional placeholders (?) and fetchAll().',
          code: `<?php
// Prepare statement:
$stmt = $pdo->prepare("SELECT id, name, email FROM Users WHERE role = :role");

// Execute with parameters:
$stmt->execute(['role' => 'admin']);

// Fetch all rows as associative array:
$admins = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($admins as $admin) {
    echo $admin['name'] . " - " . $admin['email'] . "<br>";
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Prepared Statement Result</h3>
  <ul>
    <li>Alex - alex@devaura.dev</li>
    <li>Sarah - sarah@devaura.dev</li>
  </ul>
</body>
</html>`,
          tips: [
            'Never concatenate variables into SQL strings; always use prepare() and execute().'
          ]
        }
      ]
    }
  },

  // 46. PHP MySQL CRUD Operations
  {
    id: 'php-mysql-crud',
    title: 'PHP MySQL CRUD Operations',
    slug: 'php-mysql-crud',
    summary: 'Perform Create, Read, Update, and Delete operations with PDO and lastInsertId().',
    readTime: '6 min',
    category: 'PHP MySQL',
    content: {
      overview: 'CRUD stands for Create, Read, Update, and Delete. In PHP with PDO, you can insert rows, get the auto-generated primary key with lastInsertId(), update records, and safely delete entries within transactions.',
      sections: [
        {
          heading: 'INSERT, UPDATE, and DELETE with PDO',
          body: 'Complete examples of mutating database records safely:',
          code: `<?php
// 1. INSERT:
$stmt = $pdo->prepare("INSERT INTO Users (name, email) VALUES (:name, :email)");
$stmt->execute(['name' => 'John Doe', 'email' => 'john@example.com']);
$newId = $pdo->lastInsertId(); // Gets auto-increment ID!

// 2. UPDATE:
$updateStmt = $pdo->prepare("UPDATE Users SET email = :email WHERE id = :id");
$updateStmt->execute(['email' => 'newjohn@example.com', 'id' => $newId]);

// 3. DELETE:
$delStmt = $pdo->prepare("DELETE FROM Users WHERE id = :id");
$delStmt->execute(['id' => $newId]);
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>lastInsertId()</h3>
  <p><code>$pdo-&gt;lastInsertId()</code> retrieves the primary key generated by the database engine for the new row.</p>
</body>
</html>`,
          tips: [
            'Use $pdo->beginTransaction() and $pdo->commit() when modifying multiple related tables.'
          ]
        }
      ]
    }
  }
];
