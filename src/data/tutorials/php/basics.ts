import { TutorialChapter } from '../../../types';

export const phpBasicsChapters: TutorialChapter[] = [
  // 1. PHP HOME
  {
    id: 'php-home',
    title: 'PHP HOME',
    slug: 'php-home',
    summary: 'PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.',
    readTime: '4 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'PHP is an acronym for "PHP: Hypertext Preprocessor". PHP is a widely-used, open source scripting language. PHP scripts are executed on the server, generating HTML output sent to the client browser.',
      sections: [
        {
          heading: 'Your First PHP Script',
          body: 'PHP scripts start with <?php and end with ?>. Statements end with a semicolon (;).',
          code: `<!DOCTYPE html>
<html>
<body>

<?php
echo "My first PHP script!";
?>

</body>
</html>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Server-Side Rendered Output</h3>
  <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
    My first PHP script!
  </div>
</body>
</html>`,
          tips: [
            'PHP files have the extension ".php" and can contain text, HTML, CSS, JavaScript, and PHP code.'
          ]
        }
      ]
    }
  },

  // 2. PHP Intro
  {
    id: 'php-intro',
    title: 'PHP Introduction',
    slug: 'php-intro',
    summary: 'What can PHP do? Why use PHP? Modern PHP 8 performance improvements and JIT compiler.',
    readTime: '5 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'PHP can generate dynamic page content, create, open, read, write, delete, and close files on the server, collect form data, send and receive cookies, add, delete, and modify data in your database, control user-access, and encrypt data. PHP 8 introduced the JIT (Just-In-Time) compiler, Union Types, and named arguments.',
      sections: [
        {
          heading: 'Why PHP?',
          body: 'PHP runs on various platforms (Windows, Linux, Unix, Mac OS X). It is compatible with almost all servers used today (Apache, Nginx, IIS). It supports a wide range of databases.',
          code: `<?php
// PHP 8 Named Arguments:
function createUser($name, $role = "User", $active = true) {
    return "User: $name | Role: $role";
}

echo createUser(name: "Alex", active: true);
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Modern PHP 8 Powered</h3>
  <p>Over 75% of all web servers utilize PHP (including WordPress, Wikipedia, and Laravel frameworks).</p>
</body>
</html>`,
          tips: [
            'PHP is free to download and use from the official PHP resource: www.php.net.'
          ]
        }
      ]
    }
  },

  // 3. PHP Syntax
  {
    id: 'php-syntax',
    title: 'PHP Syntax',
    slug: 'php-syntax',
    summary: 'A PHP script is executed on the server, and the plain HTML result is sent back to the browser.',
    readTime: '4 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'A PHP script can be placed anywhere in the document. A PHP script starts with <?php and ends with ?>. PHP statements end with a semicolon (;). In PHP, keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are NOT case-sensitive. However; all variable names ARE case-sensitive!',
      sections: [
        {
          heading: 'Case Sensitivity in PHP',
          body: 'Variable names are case-sensitive ($color and $COLOR are different), while echo and functions are not.',
          code: `<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";

$color = "red";
echo "My car is " . $color . "<br>";
// echo "My house is " . $COLOR; // Warning: Undefined variable $COLOR!
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>PHP Case Sensitivity Demo</h3>
  <p>echo / ECHO are identical, but <code>$name</code> &ne; <code>$NAME</code>.</p>
</body>
</html>`,
          tips: [
            'If a file contains only PHP code, it is recommended to omit the closing ?> tag to prevent accidental trailing whitespace.'
          ]
        }
      ]
    }
  },

  // 4. PHP Comments
  {
    id: 'php-comments',
    title: 'PHP Comments',
    slug: 'php-comments',
    summary: 'A comment in PHP code is a line that is not executed: //, #, and /* */.',
    readTime: '3 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'Comments can be used to let others understand your code, and remind yourself of what you did. PHP supports several ways of commenting: Single-line comments with // or #, and multi-line comments with /* ... */.',
      sections: [
        {
          heading: 'Commenting Formats',
          body: 'Single-line comments can be placed at the end of a line or standalone.',
          code: `<?php
// This is a single-line comment

# This is also a single-line comment (Unix shell style)

/* This is a
   multi-line comment */

$x = 5 /* + 15 */ + 5;
echo $x; // Outputs: 10
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Comments in PHP</h3>
  <p><code>$x = 5 /* + 15 */ + 5;</code> evaluates to <b>10</b>.</p>
</body>
</html>`,
          tips: [
            'PHP supports docblocks (/** ... */) compatible with phpDocumentor.'
          ]
        }
      ]
    }
  },

  // 5. PHP Variables
  {
    id: 'php-variables',
    title: 'PHP Variables',
    slug: 'php-variables',
    summary: 'Variables are "containers" for storing information. A variable starts with the $ sign.',
    readTime: '5 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'In PHP, a variable starts with the $ sign, followed by the name of the variable: $txt = "Hello world!";. Rules for PHP variables: A variable starts with the $ sign; A variable name must start with a letter or underscore; A variable name cannot start with a number; Variable names are case-sensitive.',
      sections: [
        {
          heading: 'Declaring Variables and Outputting',
          body: 'In PHP, variables are created when you first assign a value to them.',
          code: `<?php
$txt = "DevAura";
$x = 5;
$y = 10.5;

// Variable expansion inside double quotes:
echo "Welcome to $txt!<br>";

// String concatenation with dot (.):
echo "Sum: " . ($x + $y);
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Variable Interpolation</h3>
  <p>Double quotes <code>"Hello $name"</code> expand variables; single quotes <code>'Hello $name'</code> output literal text.</p>
</body>
</html>`,
          tips: [
            'The string concatenation operator in PHP is the dot (.), NOT the plus sign (+).'
          ]
        }
      ]
    }
  },

  // 6. PHP Variable Scope
  {
    id: 'php-variables-scope',
    title: 'PHP Variable Scope',
    slug: 'php-variables-scope',
    summary: 'PHP has three different variable scopes: local, global, and static.',
    readTime: '5 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'In PHP, variables can be declared anywhere in the script. The scope of a variable is the part of the script where the variable can be referenced/used. PHP has three different variable scopes: local, global, static.',
      sections: [
        {
          heading: 'The global and static Keywords',
          body: 'The global keyword is used to access a global variable from within a function. The static keyword preserves a local variable value across function calls.',
          code: `<?php
$x = 5; // Global scope

function myTest() {
    global $x; // Target global variable
    echo "<p>Variable x inside function is: $x</p>";
}
myTest();

// Static keyword:
function incrementCounter() {
    static $count = 0; // Preserves value between calls!
    $count++;
    echo $count . " ";
}
incrementCounter(); // 1
incrementCounter(); // 2
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Static Variable Scope</h3>
  <p>Static variables retain their previous value between successive function calls.</p>
</body>
</html>`,
          tips: [
            'PHP also stores all global variables in an array called $GLOBALS[index].'
          ]
        }
      ]
    }
  },

  // 7. PHP Echo / Print
  {
    id: 'php-echo-print',
    title: 'PHP Echo / Print',
    slug: 'php-echo-print',
    summary: 'There are two basic ways to get output in PHP: echo and print. Understand the differences.',
    readTime: '4 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'echo and print are more or less the same. They are both used to output data to the screen. The differences are small: echo has no return value while print has a return value of 1 so it can be used in expressions. echo can take multiple parameters while print can take one argument. echo is marginally faster than print.',
      sections: [
        {
          heading: 'echo and print in Action',
          body: 'Both echo and print can output HTML tags and variables.',
          code: `<?php
// echo with multiple parameters:
echo "<h2>PHP is Fun!</h2>";
echo "Hello ", "world", "!", "<br>";

// print statement:
print "Study PHP at DevAura!";
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>echo HTML Output</h3>
  <h2>PHP is Fun!</h2>
  <p>Study PHP at DevAura!</p>
</body>
</html>`,
          tips: [
            'echo is a language construct, not a function, so parentheses are optional (echo "Hello" or echo("Hello")).'
          ]
        }
      ]
    }
  },

  // 8. PHP Data Types
  {
    id: 'php-data-types',
    title: 'PHP Data Types',
    slug: 'php-data-types',
    summary: 'PHP supports the following data types: String, Integer, Float, Boolean, Array, Object, NULL, Resource.',
    readTime: '5 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'Variables can store data of different types, and different data types can do different things. PHP supports the following data types: String, Integer, Float (floating point numbers - also called double), Boolean, Array, Object, NULL, Resource (reference to external resources like database connections).',
      sections: [
        {
          heading: 'The var_dump() Function',
          body: 'The var_dump() function returns the data type and value of variables.',
          code: `<?php
$str = "Hello world!";
$num = 5985;
$flt = 10.365;
$bool = true;
$cars = array("Volvo", "BMW", "Toyota");
$null_val = NULL;

var_dump($flt); // float(10.365)
var_dump($cars); // array(3) { [0]=> string(5) "Volvo" ... }
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>var_dump() Inspection</h3>
  <pre style="background:#f1f5f9; padding:12px; border-radius:6px;">float(10.365)</pre>
</body>
</html>`,
          tips: [
            'var_dump() is the most useful debugging tool for inspecting complex arrays and objects in PHP.'
          ]
        }
      ]
    }
  },

  // 9. PHP Strings
  {
    id: 'php-strings',
    title: 'PHP Strings',
    slug: 'php-strings',
    summary: 'A string is a sequence of characters: strlen(), str_word_count(), strpos(), and str_replace().',
    readTime: '5 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'A string is a sequence of characters, like "Hello world!". PHP provides a large suite of built-in string manipulation functions for finding, modifying, and measuring strings.',
      sections: [
        {
          heading: 'Common String Functions',
          body: 'Key functions for text operations:',
          code: `<?php
// String length:
echo strlen("Hello world!"); // 12

// Word count:
echo str_word_count("Hello world!"); // 2

// Reverse string:
echo strrev("Hello world!"); // "!dlrow olleH"

// Search for text position:
echo strpos("Hello world!", "world"); // 6

// Replace text:
echo str_replace("world", "DevAura", "Hello world!"); // "Hello DevAura!"
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>str_replace() Result</h3>
  <p><code>str_replace("world", "DevAura", "Hello world!")</code> &rarr; <b>"Hello DevAura!"</b></p>
</body>
</html>`,
          tips: [
            'strpos() returns 0 if the substring is found at the very start of the string; use === false to check for no match.'
          ]
        }
      ]
    }
  },

  // 10. PHP Numbers
  {
    id: 'php-numbers',
    title: 'PHP Numbers',
    slug: 'php-numbers',
    summary: 'Integers, Floats, Infinity, NaN, and checking numerical validity with is_numeric().',
    readTime: '4 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'In PHP, number types include: Integer, Float, Number Strings. PHP automatically handles data type conversions. Functions include is_int(), is_float(), is_numeric(), and constants like PHP_INT_MAX.',
      sections: [
        {
          heading: 'Checking Numeric Validity',
          body: 'is_numeric() checks whether a variable is a number or a numeric string.',
          code: `<?php
$x = 5985;
var_dump(is_int($x)); // bool(true)

$y = "5985";
var_dump(is_numeric($y)); // bool(true)

// Casting string to integer:
$int_cast = (int)$y;
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Numeric Validation</h3>
  <p><code>is_numeric("100.5")</code> returns <b>true</b>, safe for arithmetic.</p>
</body>
</html>`,
          tips: [
            'Use is_numeric() to validate numeric inputs submitted from HTML web forms.'
          ]
        }
      ]
    }
  },

  // 11. PHP Math
  {
    id: 'php-math',
    title: 'PHP Math',
    slug: 'php-math',
    summary: 'PHP has a set of built-in math functions: pi(), min(), max(), abs(), sqrt(), round(), rand().',
    readTime: '4 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'PHP has a set of math functions that allows you to perform mathematical tasks on numbers without requiring external libraries.',
      sections: [
        {
          heading: 'Standard Math Functions',
          body: 'Common functions include pi(), min(), max(), abs(), sqrt(), round(), and rand().',
          code: `<?php
echo pi(); // 3.1415926535898

echo min(0, 150, 30, 20, -8);  // -8
echo max(0, 150, 30, 20, -8);  // 150

echo abs(-6.7); // 6.7
echo sqrt(64);  // 8
echo round(0.60); // 1

// Random integer between 10 and 100:
echo rand(10, 100);
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Random Number Generator</h3>
  <p><code>rand(1, 6)</code> generates a random die roll from 1 to 6.</p>
</body>
</html>`,
          tips: [
            'For cryptographically secure random numbers (like passwords and tokens), use random_int() instead of rand().'
          ]
        }
      ]
    }
  },

  // 12. PHP Constants
  {
    id: 'php-constants',
    title: 'PHP Constants',
    slug: 'php-constants',
    summary: 'Constants are like variables except that once they are defined they cannot be changed: define() and const.',
    readTime: '4 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'A constant is an identifier (name) for a simple value. The value cannot be changed during the script. A valid constant name starts with a letter or underscore (no $ sign before the constant name). Unlike variables, constants are automatically global across the entire script.',
      sections: [
        {
          heading: 'define() vs. const',
          body: 'define() works at runtime, while const works at compile time.',
          code: `<?php
// Method 1: define(name, value)
define("GREETING", "Welcome to DevAura!");
echo GREETING;

// Method 2: const keyword
const APP_VERSION = "2.0";

// Constant array:
define("cars", ["Alpha Romeo", "BMW", "Toyota"]);
echo cars[0];
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Constant Global Availability</h3>
  <p>Constants can be accessed inside functions without requiring the <code>global</code> keyword.</p>
</body>
</html>`,
          tips: [
            'Constant names are typically written in ALL_CAPS by convention.'
          ]
        }
      ]
    }
  },

  // 13. PHP Magic Constants
  {
    id: 'php-magic-constants',
    title: 'PHP Magic Constants',
    slug: 'php-magic-constants',
    summary: 'PHP has predefined constants that change depending on where they are used: __DIR__, __FILE__, __LINE__.',
    readTime: '4 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'PHP has nine predefined constants that change value depending on where they are used, and therefore they are called "magic constants". These magic constants are written with a double underscore at the start and the end.',
      sections: [
        {
          heading: 'Key Magic Constants',
          body: '__DIR__ returns the directory of the file; __FILE__ returns full path; __LINE__ returns current line number.',
          code: `<?php
echo "Current Line: " . __LINE__ . "<br>";
echo "Current File: " . __FILE__ . "<br>";
echo "Current Directory: " . __DIR__ . "<br>";

// Inside class/method:
// __CLASS__, __METHOD__, __FUNCTION__
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>__DIR__ for Clean File Inclusions</h3>
  <code>require_once __DIR__ . '/config.php';</code>
</body>
</html>`,
          tips: [
            'Always use __DIR__ when including files to avoid path resolution errors.'
          ]
        }
      ]
    }
  },

  // 14. PHP Operators
  {
    id: 'php-operators',
    title: 'PHP Operators',
    slug: 'php-operators',
    summary: 'Arithmetic, Assignment, Comparison, Increment/Decrement, Logical, String, Array, Spaceship (<=>), and Null Coalescing (??).',
    readTime: '6 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'Operators are used to perform operations on variables and values. PHP divides operators into: Arithmetic, Assignment, Comparison, Increment/Decrement, Logical, String (dot .), Array, and modern Conditional Assignment operators (Spaceship <=> and Null coalescing ??).',
      sections: [
        {
          heading: 'Spaceship (<=>) and Null Coalescing (??)',
          body: 'The spaceship operator returns -1, 0, or 1 based on comparison. ?? returns fallback if null.',
          code: `<?php
// Spaceship Operator (<=>):
echo 1 <=> 2; // -1 (Left is smaller)
echo 2 <=> 2; //  0 (Equal)
echo 3 <=> 2; //  1 (Left is greater)

// Null Coalescing (??):
$username = $_GET['user'] ?? 'anonymous';

// String Concatenation (. and .=):
$txt1 = "Hello";
$txt2 = " World!";
echo $txt1 . $txt2; // "Hello World!"
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Spaceship (<=>) Operator</h3>
  <p>Perfect for custom sorting algorithms: <code>usort($arr, fn($a, $b) =&gt; $a &lt;=&gt; $b);</code></p>
</body>
</html>`,
          tips: [
            'Use === (Identical) instead of == (Equal) to prevent PHP type-juggling bugs.'
          ]
        }
      ]
    }
  },

  // 15. PHP If...Else
  {
    id: 'php-if-else',
    title: 'PHP If...Else',
    slug: 'php-if-else',
    summary: 'Conditional statements are used to perform different actions based on different conditions: if, else, elseif.',
    readTime: '5 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'In PHP we have the following conditional statements: if statement (executes code if condition is true), if...else statement, if...elseif...else statement, and the switch statement. PHP 8 also introduced match expressions.',
      sections: [
        {
          heading: 'If, Elseif, Else Structure',
          body: 'In PHP, elseif can be written as one word (elseif) or two words (else if).',
          code: `<?php
$t = date("H");

if ($t < "10") {
    echo "Have a good morning!";
} elseif ($t < "20") {
    echo "Have a good day!";
} else {
    echo "Have a good night!";
}

// Short hand Ternary:
$status = ($age >= 18) ? "Adult" : "Minor";
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>PHP Conditional Output</h3>
  <p>Evaluates server time to output tailored greeting message.</p>
</body>
</html>`,
          tips: [
            'PHP 8 match expression is faster than switch and returns values directly.'
          ]
        }
      ]
    }
  },

  // 16. PHP Switch
  {
    id: 'php-switch',
    title: 'PHP Switch',
    slug: 'php-switch',
    summary: 'The switch statement is used to perform different actions based on different conditions.',
    readTime: '4 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'Use the switch statement to select one of many blocks of code to be executed. The break keyword breaks out of the switch block. The default statement is used if no match is found.',
      sections: [
        {
          heading: 'Switch Syntax',
          body: 'Each case must end with break; to prevent fallthrough.',
          code: `<?php
$favcolor = "red";

switch ($favcolor) {
    case "red":
        echo "Your favorite color is red!";
        break;
    case "blue":
        echo "Your favorite color is blue!";
        break;
    default:
        echo "Your favorite color is neither red nor blue!";
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Switch Case Result</h3>
  <p>Your favorite color is red!</p>
</body>
</html>`,
          tips: [
            'Switch uses loose comparison (==); if strict comparison is needed, use PHP 8 match.'
          ]
        }
      ]
    }
  },

  // 17. PHP Loops
  {
    id: 'php-loops',
    title: 'PHP Loops',
    slug: 'php-loops',
    summary: 'Loops execute a block of code a specified number of times: while, do...while, for, and foreach.',
    readTime: '6 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'Often when you write code, you want the same block of code to run over and over again a certain number of times. Instead of adding several almost equal code-lines, we can use loops: while, do...while, for, and foreach (exclusively for arrays).',
      sections: [
        {
          heading: 'The foreach Loop for Arrays and Associative Arrays',
          body: 'foreach is the standard way to loop through arrays in PHP.',
          code: `<?php
// Standard for loop:
for ($x = 0; $x <= 5; $x++) {
    echo "The number is: $x <br>";
}

// Foreach over Indexed Array:
$colors = array("red", "green", "blue");
foreach ($colors as $value) {
    echo "$value <br>";
}

// Foreach over Associative Array (key => value):
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
foreach($age as $name => $val) {
    echo "$name = $val <br>";
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>foreach Key &rarr; Value Loop</h3>
  <p>Peter = 35<br>Ben = 37<br>Joe = 43</p>
</body>
</html>`,
          tips: [
            'Use foreach ($array as $key => $value) to unpack keys and values simultaneously.'
          ]
        }
      ]
    }
  },

  // 18. PHP Functions
  {
    id: 'php-functions',
    title: 'PHP Functions',
    slug: 'php-functions',
    summary: 'PHP has over 1000 built-in functions, and you can create your own custom user-defined functions: function.',
    readTime: '6 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'A function is a block of statements that can be used repeatedly in a program. A function will not execute automatically when a page loads. A function will be executed by a call to the function. PHP supports strict types declarations (declare(strict_types=1)).',
      sections: [
        {
          heading: 'Type Declarations and Strict Types',
          body: 'Declare parameter types and return types for robust modern PHP.',
          code: `<?php
declare(strict_types=1); // Enforce strict type checking

function addNumbers(int $a, int $b): int {
    return $a + $b;
}

echo addNumbers(5, 10); // 15
// addNumbers(5, "10"); // Throws TypeError in strict mode!

// Default parameter values:
function setHeight(int $minheight = 50) {
    echo "The height is : $minheight <br>";
}
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Strict Typing in PHP</h3>
  <p><code>function add(int $a, int $b): int</code> guarantees types compile safely.</p>
</body>
</html>`,
          tips: [
            'Always put declare(strict_types=1); as the first statement in your PHP files.'
          ]
        }
      ]
    }
  },

  // 19. PHP Arrays
  {
    id: 'php-arrays',
    title: 'PHP Arrays',
    slug: 'php-arrays',
    summary: 'An array stores multiple values in one single variable: Indexed arrays, Associative arrays, Multidimensional arrays.',
    readTime: '6 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'In PHP, there are three types of arrays: Indexed arrays (arrays with a numeric index), Associative arrays (arrays with named keys), and Multidimensional arrays (arrays containing one or more arrays). In PHP, arrays can be created using [] or array().',
      sections: [
        {
          heading: 'Indexed vs. Associative Arrays',
          body: 'Associative arrays use key => value mapping pairs.',
          code: `<?php
// Indexed array:
$cars = ["Volvo", "BMW", "Toyota"];
echo $cars[0]; // "Volvo"
echo count($cars); // 3

// Associative array:
$age = [
    "Peter" => 35,
    "Ben" => 37,
    "Joe" => 43
];
echo $age["Peter"]; // 35

// Sorting:
sort($cars);   // Sorts indexed array ascending
asort($age);   // Sorts associative array by value
ksort($age);   // Sorts associative array by key
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Associative Array in PHP</h3>
  <p><code>$user["role"]</code> fetches the mapped value in O(1) time.</p>
</body>
</html>`,
          tips: [
            'Use square brackets [] for array creation in modern PHP instead of the legacy array() syntax.'
          ]
        }
      ]
    }
  },

  // 20. PHP Superglobals
  {
    id: 'php-superglobals',
    title: 'PHP Superglobals',
    slug: 'php-superglobals',
    summary: 'Superglobals are built-in variables that are always available in all scopes: $_GET, $_POST, $_SERVER, $_SESSION.',
    readTime: '6 min',
    category: 'PHP Tutorial',
    content: {
      overview: 'Some predefined variables in PHP are "superglobals", which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special. The PHP superglobal variables are: $GLOBALS, $_SERVER, $_REQUEST, $_POST, $_GET, $_FILES, $_ENV, $_COOKIE, $_SESSION.',
      sections: [
        {
          heading: 'Key Superglobal Variables',
          body: '$_SERVER holds server headers and paths; $_GET and $_POST capture form data.',
          code: `<?php
// Inspect server metadata:
echo $_SERVER['PHP_SELF'];
echo $_SERVER['SERVER_NAME'];
echo $_SERVER['HTTP_HOST'];
echo $_SERVER['REQUEST_METHOD']; // "GET" or "POST"

// URL Query Parameters (?id=101):
$id = $_GET['id'] ?? null;

// Form Submission Data:
$email = $_POST['email'] ?? null;
?>`,
          codeLanguage: 'php',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>$_SERVER Inspection</h3>
  <p>REQUEST_METHOD: <b>GET</b><br>SERVER_NAME: <b>localhost</b></p>
</body>
</html>`,
          tips: [
            'Never trust raw input from $_GET or $_POST; always sanitize and validate before using in queries.'
          ]
        }
      ]
    }
  }
];
