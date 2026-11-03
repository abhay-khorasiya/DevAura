import { TutorialChapter } from '../../../types';

export const pythonBasicsChapters: TutorialChapter[] = [
  // 1. Python HOME
  {
    id: 'py-home',
    title: 'Python HOME',
    slug: 'py-home',
    summary: 'Python is a popular, general-purpose programming language used in web dev, data science, and AI.',
    readTime: '4 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Python is a popular programming language created by Guido van Rossum, and released in 1991. It is used for web development (server-side), software development, mathematics, system scripting, data science, and artificial intelligence.',
      sections: [
        {
          heading: 'Python "Hello, World!"',
          body: 'Python has a simple syntax similar to the English language. In Python, you can print text in a single line:',
          code: `print("Hello, World!")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Python Terminal Output</h3>
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    $ python main.py<br>
    Hello, World!
  </div>
</body>
</html>`,
          tips: [
            'Python relies on indentation (whitespace) to define scope, rather than curly brackets ({}) used in C/C++/Java.'
          ]
        }
      ]
    }
  },

  // 2. Python Intro
  {
    id: 'py-intro',
    title: 'Python Introduction',
    slug: 'py-intro',
    summary: 'What is Python? Why Python? Syntax compared to other programming languages.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Python was designed for readability, and has some similarities to the English language with influence from mathematics. Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.',
      sections: [
        {
          heading: 'Why Learn Python?',
          body: 'Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.). It allows developers to write programs with fewer lines of code than other languages.',
          code: `# Python vs Java comparison
# In Java: public class Main { public static void main(String[] args) { System.out.println("Hi"); } }
# In Python:
print("Hi")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Clean Python Readability</h3>
  <div style="background:#eff6ff; border:2px solid #3b82f6; padding:16px; border-radius:8px;">
    <code>if 5 &gt; 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Five is greater than two!")</code>
  </div>
</body>
</html>`,
          tips: [
            'The most recent major version of Python is Python 3. Python 2 was retired in 2020.'
          ]
        }
      ]
    }
  },

  // 3. Python Syntax
  {
    id: 'py-syntax',
    title: 'Python Syntax',
    slug: 'py-syntax',
    summary: 'Python indentation refers to the spaces at the beginning of a code line, used to indicate a block of code.',
    readTime: '4 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important. Python uses indentation to indicate a block of code. Python will give you an error if you skip the indentation.',
      sections: [
        {
          heading: 'Indentation Rules',
          body: 'The number of spaces is up to you as a programmer, the most common use is four, but it has to be at least one. You must use the same number of spaces in the same block of code.',
          code: `if 5 > 2:
    print("Five is greater than two!")

# SyntaxError if indentation is omitted:
# if 5 > 2:
# print("Five is greater than two!") # IndentationError!`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Indentation Scope Demo</h3>
  <pre style="background:#f1f5f9; padding:12px; border-radius:6px;">if score &gt;= 90:
    grade = "A"
    print("Distinction!")
print("Evaluation Complete")</pre>
</body>
</html>`,
          tips: [
            'Standard Python style guide (PEP 8) recommends exactly 4 spaces per indentation level. Avoid mixing tabs and spaces.'
          ]
        }
      ]
    }
  },

  // 4. Python Comments
  {
    id: 'py-comments',
    title: 'Python Comments',
    slug: 'py-comments',
    summary: 'Comments can be used to explain Python code, make it readable, and prevent execution: # and docstrings.',
    readTime: '3 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Comments start with a #, and Python will ignore them. Comments can be placed at the end of a line, and Python will ignore the rest of the line. Multiline strings (""" """) can also be used as multiline comments.',
      sections: [
        {
          heading: 'Single-line and Multi-line Comments',
          body: 'Python does not have a dedicated multiline comment syntax, but triple-quoted strings (""" or \'\'\') serve as multiline comments or docstrings.',
          code: `# This is a single-line comment
print("Hello, World!") # In-line comment

"""
This is a comment
written in
more than just one line
"""
print("Cheers, Mate!")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Python Comments in Terminal</h3>
  <p>Only <code>print("Active Code")</code> executes; all lines beginning with <code>#</code> are skipped by the interpreter.</p>
</body>
</html>`,
          tips: [
            'Use docstrings right below function definitions to generate automated documentation (help(func)).'
          ]
        }
      ]
    }
  },

  // 5. Python Variables
  {
    id: 'py-variables',
    title: 'Python Variables',
    slug: 'py-variables',
    summary: 'Variables are containers for storing data values. In Python, variables are created the moment you assign a value.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Python has no command for declaring a variable. A variable is created the moment you first assign a value to it. Variables do not need to be declared with any particular type, and can even change type after they have been set.',
      sections: [
        {
          heading: 'Casting and Getting the Type',
          body: 'You can verify the data type of a variable with the type() function.',
          code: `x = 5           # x is of type int
y = "John"      # y is of type str
print(type(x))  # <class 'int'>
print(type(y))  # <class 'str'>

# Explicit Casting:
a = str(3)      # a will be '3'
b = int(3)      # b will be 3
c = float(3)    # c will be 3.0`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Dynamic Typing in Python</h3>
  <p><code>x = 4</code> &rarr; <code>type(x)</code> is <b>int</b></p>
  <p><code>x = "Sally"</code> &rarr; <code>type(x)</code> is now <b>str</b></p>
</body>
</html>`,
          tips: [
            'String variables can be declared either by using single or double quotes: \'John\' is equivalent to "John".'
          ]
        }
      ]
    }
  },

  // 6. Python Variable Names
  {
    id: 'py-variable-names',
    title: 'Python Variable Names',
    slug: 'py-variable-names',
    summary: 'Variable names must start with a letter or underscore, and are case-sensitive: snake_case standard.',
    readTime: '4 min',
    category: 'Python Tutorial',
    content: {
      overview: 'A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume). Rules for Python variables: A variable name must start with a letter or the underscore character; A variable name cannot start with a number; Variable names are case-sensitive (age, Age and AGE are three different variables).',
      sections: [
        {
          heading: 'Naming Conventions: snake_case',
          body: 'Python PEP 8 style guide strongly prefers snake_case for variable names.',
          code: `# Legal variable names:
myvar = "John"
my_var = "John"      # Preferred Python style (snake_case)
_my_var = "John"
myVar = "John"       # CamelCase
MYVAR = "John"       # UPPERCASE (Constants convention)
myvar2 = "John"

# Illegal variable names:
# 2myvar = "John"    # Cannot start with number!
# my-var = "John"    # Cannot contain hyphens!
# my var = "John"    # Cannot contain spaces!`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Python snake_case Standard</h3>
  <code style="background:#f1f5f9; padding:8px 12px; border-radius:6px;">user_profile_name = "alex_99"</code>
</body>
</html>`,
          tips: [
            'In Python, uppercase variable names like DATABASE_URL or MAX_RETRIES signify constant values.'
          ]
        }
      ]
    }
  },

  // 7. Python Assign Multiple Values
  {
    id: 'py-assign-multiple',
    title: 'Python Multiple Variable Assignment',
    slug: 'py-assign-multiple',
    summary: 'Assign multiple values to multiple variables, one value to multiple, or unpack collections in one line.',
    readTime: '4 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Python allows you to assign values to multiple variables in one line. You can also assign the same value to multiple variables in one line, and unpack a collection (list or tuple) into variables.',
      sections: [
        {
          heading: 'Multiple Assignment & Unpacking',
          body: 'Unpacking extracts collection items directly into variables.',
          code: `# Many values to multiple variables:
x, y, z = "Orange", "Banana", "Cherry"

# One value to multiple variables:
a = b = c = "Orange"

# Unpack a list:
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Tuple/List Unpacking</h3>
  <p><code>x, y, z = ["Python", "Java", "C++"]</code></p>
  <p>x = "Python", y = "Java", z = "C++"</p>
</body>
</html>`,
          tips: [
            'The number of variables on the left must match the number of values in the collection, unless using *rest syntax.'
          ]
        }
      ]
    }
  },

  // 8. Python Output Variables
  {
    id: 'py-output-variables',
    title: 'Python Output Variables',
    slug: 'py-output-variables',
    summary: 'The Python print() function is often used to output variables: commas, string concatenation, and f-strings.',
    readTime: '4 min',
    category: 'Python Tutorial',
    content: {
      overview: 'The Python print() function is often used to output variables. In the print() function, you output multiple variables, separated by a comma, which automatically inserts spaces and supports different data types.',
      sections: [
        {
          heading: 'Commas vs. Plus Sign in print()',
          body: 'Using commas in print() allows mixing strings and numbers safely without TypeError.',
          code: `name = "John"
age = 25

# Comma separation (Handles mixed types & adds space automatically):
print("Name:", name, "Age:", age) # Name: John Age: 25

# Modern f-string (Best practice):
print(f"User {name} is {age} years old.")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>print() Comma Flexibility</h3>
  <p><code>print("Price:", 19.99, "USD")</code> &rarr; Output: <b>Price: 19.99 USD</b></p>
</body>
</html>`,
          tips: [
            'Avoid writing print("Age: " + age) because concatenating str + int throws a TypeError.'
          ]
        }
      ]
    }
  },

  // 9. Python Global Variables
  {
    id: 'py-global-variables',
    title: 'Python Global Variables',
    slug: 'py-global-variables',
    summary: 'Variables that are created outside of a function are known as global variables. Use the global keyword to modify them.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Variables that are created outside of a function are known as global variables. Global variables can be used by everyone, both inside of functions and outside. If you create a variable with the same name inside a function, this variable will be local. To modify a global variable inside a function, use the global keyword.',
      sections: [
        {
          heading: 'The global Keyword',
          body: 'Normally, assigning to a variable inside a function creates a new local variable. Use global to target the module-level variable.',
          code: `x = "awesome"

def myfunc():
    global x
    x = "fantastic" # Overwrites global x!

myfunc()
print("Python is " + x) # "Python is fantastic"`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Global Scope Modification</h3>
  <p>The <code>global x</code> statement tells the function that x belongs to the module-level global namespace.</p>
</body>
</html>`,
          tips: [
            'Minimize use of global variables in large programs to avoid side effects across modules.'
          ]
        }
      ]
    }
  },

  // 10. Python Data Types
  {
    id: 'py-data-types',
    title: 'Python Data Types',
    slug: 'py-data-types',
    summary: 'Built-in Data Types in Python: Text, Numeric, Sequence, Mapping, Set, Boolean, and Binary types.',
    readTime: '6 min',
    category: 'Python Tutorial',
    content: {
      overview: 'In programming, data type is an important concept. Variables can store data of different types, and different types can do different things. Built-in types: Text (str), Numeric (int, float, complex), Sequence (list, tuple, range), Mapping (dict), Set (set, frozenset), Boolean (bool), Binary (bytes, bytearray, memoryview), None (NoneType).',
      sections: [
        {
          heading: 'Data Type Constructors',
          body: 'You can explicitly set the data type using constructor functions.',
          code: `x = "Hello World"                   # str
x = 20                              # int
x = 20.5                            # float
x = 1j                              # complex
x = ["apple", "banana", "cherry"]   # list
x = ("apple", "banana", "cherry")   # tuple
x = range(6)                        # range
x = {"name" : "John", "age" : 36}   # dict
x = {"apple", "banana", "cherry"}   # set
x = True                            # bool
x = None                            # NoneType`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Python Built-in Types</h3>
  <ul>
    <li><code>[1, 2]</code> &rarr; <b>list</b> (Mutable)</li>
    <li><code>(1, 2)</code> &rarr; <b>tuple</b> (Immutable)</li>
    <li><code>{"a": 1}</code> &rarr; <b>dict</b> (Key-Value)</li>
    <li><code>{1, 2}</code> &rarr; <b>set</b> (Unique)</li>
  </ul>
</body>
</html>`,
          tips: [
            'None represents the absence of a value (equivalent to null in JavaScript/Java).'
          ]
        }
      ]
    }
  },

  // 11. Python Numbers
  {
    id: 'py-numbers',
    title: 'Python Numbers',
    slug: 'py-numbers',
    summary: 'There are three numeric types in Python: int, float, and complex numbers.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Variables of numeric types are created when you assign a value to them: int (integer, positive or negative of unlimited length), float (floating point number with decimals, or scientific numbers with e), and complex (numbers written with a j as the imaginary part).',
      sections: [
        {
          heading: 'Integer Precision and Scientific Notation',
          body: 'Python integers have arbitrary precision (they never overflow, limited only by available RAM).',
          code: `x = 1    # int
y = 2.8  # float
z = 1j   # complex

# Scientific notation:
a = 35e3   # 35000.0
b = 12E4   # 120000.0

# Type Conversion:
int_val = int(y)     # 2 (Truncates decimals)
float_val = float(x) # 1.0`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Arbitrary Precision Integers</h3>
  <p><code>2 ** 100 = 1267650600228229401496703205376</code></p>
  <p>Python calculates massive integers without 32-bit/64-bit overflow!</p>
</body>
</html>`,
          tips: [
            'Python does not have a random() function built-in, but has a built-in module called random.'
          ]
        }
      ]
    }
  },

  // 12. Python Casting
  {
    id: 'py-casting',
    title: 'Python Casting',
    slug: 'py-casting',
    summary: 'Specify a type on to a variable using constructor functions: int(), float(), str().',
    readTime: '4 min',
    category: 'Python Tutorial',
    content: {
      overview: 'There may be times when you want to specify a type on to a variable. This can be done with casting. Python is an object-orientated language, and as such it uses classes to define data types, including its primitive types.',
      sections: [
        {
          heading: 'Casting Functions',
          body: 'int() constructs an integer, float() constructs a float, and str() constructs a string.',
          code: `x = int(1)     # x will be 1
y = int(2.8)   # y will be 2
z = int("3")   # z will be 3

a = float("4.2") # 4.2
b = str(2)       # '2'`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Casting String Input</h3>
  <p><code>val = int("25") + 5</code> &rarr; Output: <b>30</b></p>
</body>
</html>`,
          tips: [
            'Passing an invalid string to int() like int("hello") raises a ValueError.'
          ]
        }
      ]
    }
  },

  // 13. Python Strings
  {
    id: 'py-strings',
    title: 'Python Strings',
    slug: 'py-strings',
    summary: 'Strings in python are surrounded by either single quotation marks, or double quotation marks.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Strings in python are surrounded by either single quotation marks, or double quotation marks. \'hello\' is the same as "hello". Multiline strings can be assigned to a variable by using three quotes (""" or \'\'\'). In Python, strings are arrays of bytes representing unicode characters.',
      sections: [
        {
          heading: 'Strings are Arrays & in Keyword',
          body: 'Square brackets can be used to access elements of the string. Check if a phrase is present with in.',
          code: `a = "Hello, World!"
print(a[1]) # 'e' (0-indexed)

# Loop through characters:
for char in "banana":
    print(char)

# String length:
print(len(a)) # 13

# Check if substring is present:
txt = "The best things in life are free!"
print("free" in txt) # True`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>String Inspection</h3>
  <p><code>"free" in "The best things are free"</code> &rarr; <b>True</b></p>
  <p><code>"expensive" not in "The best things are free"</code> &rarr; <b>True</b></p>
</body>
</html>`,
          tips: [
            'Python strings are immutable; you cannot change a character using a[0] = "J".'
          ]
        }
      ]
    }
  },

  // 14. Python Slicing Strings
  {
    id: 'py-slicing-strings',
    title: 'Python Slicing Strings',
    slug: 'py-slicing-strings',
    summary: 'Return a range of characters by using the slice syntax: [start:end:step].',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'You can return a range of characters by using the slice syntax. Specify the start index and the end index, separated by a colon, to return a part of the string. The end index is not included.',
      sections: [
        {
          heading: 'Slicing from Start, End, and Step',
          body: 'Slice syntax: [start:end:step]. Leaving out start slices from beginning. Negative indexing counts from end.',
          code: `b = "Hello, World!"

# Slice from index 2 to 5 (not included):
print(b[2:5]) # "llo"

# Slice from start to index 5:
print(b[:5])  # "Hello"

# Slice from index 2 to the end:
print(b[2:])  # "llo, World!"

# Negative Indexing (From the end):
print(b[-5:-2]) # "orl"

# Reverse a string with step -1:
reversed_str = b[::-1] # "!dlroW ,olleH"`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Python String Reversal Trick</h3>
  <p><code>"DevAura"[::-1]</code> &rarr; <b>"aruaVeD"</b></p>
</body>
</html>`,
          tips: [
            'The step parameter [::-1] is the most efficient idiomatic way to reverse a string or list in Python.'
          ]
        }
      ]
    }
  },

  // 15. Python Modify Strings
  {
    id: 'py-modify-strings',
    title: 'Python Modify Strings',
    slug: 'py-modify-strings',
    summary: 'Built-in methods for modifying strings: upper(), lower(), strip(), replace(), and split().',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Python has a set of built-in methods that you can use on strings to format, trim, replace, and split text into lists.',
      sections: [
        {
          heading: 'Common String Methods',
          body: 'Methods return new string copies because Python strings are immutable.',
          code: `a = "  Hello, World!  "

print(a.upper())       # "  HELLO, WORLD!  "
print(a.lower())       # "  hello, world!  "
print(a.strip())       # "Hello, World!" (Removes whitespace from edges)
print(a.replace("H", "J")) # "  Jello, World!  "

# Split string into list:
b = "apple,banana,cherry"
fruits = b.split(",")  # ['apple', 'banana', 'cherry']`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>String Modification Results</h3>
  <p><code>"   DevAura   ".strip()</code> &rarr; <b>"DevAura"</b></p>
  <p><code>"a-b-c".split("-")</code> &rarr; <b>['a', 'b', 'c']</b></p>
</body>
</html>`,
          tips: [
            'The split() method splits the string into substrings if it finds instances of the separator.'
          ]
        }
      ]
    }
  },

  // 16. Python Format Strings
  {
    id: 'py-format-strings',
    title: 'Python Format Strings (F-Strings)',
    slug: 'py-format-strings',
    summary: 'F-strings were introduced in Python 3.6, and are now the preferred way of formatting strings: f"...".',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'F-String was introduced in Python 3.6, and is now the preferred way of formatting strings. To specify a string as an f-string, simply put an f in front of the string literal, and add curly brackets {} as placeholders for variables and other operations.',
      sections: [
        {
          heading: 'F-Strings & Format Modifiers',
          body: 'Modifiers like :.2f format floating point numbers to 2 decimal places.',
          code: `age = 36
name = "John"
txt = f"My name is {name}, and I am {age}"

# Format Modifiers:
price = 59
txt = f"The price is {price:.2f} dollars" # "59.00 dollars"

# Performing Math inside f-string:
print(f"Total: {20 * 5}") # "Total: 100"`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>F-String Evaluation</h3>
  <p><code>f"Price: {49.5:.2f}"</code> &rarr; <b>"Price: 49.50"</b></p>
</body>
</html>`,
          tips: [
            'In Python 3.8+, f"{var=}" outputs both the variable name and its value (e.g. f"{price=}" &rarr; "price=59"), perfect for debugging.'
          ]
        }
      ]
    }
  },

  // 17. Python Escape Characters
  {
    id: 'py-escape-characters',
    title: 'Python Escape Characters',
    slug: 'py-escape-characters',
    summary: 'To insert characters that are illegal in a string, use an escape character: backslash \\.',
    readTime: '4 min',
    category: 'Python Tutorial',
    content: {
      overview: 'To insert characters that are illegal in a string, use an escape character. An escape character is a backslash \\ followed by the character you want to insert. Common escape characters: \\\' (single quote), \\\" (double quote), \\\\ (backslash), \\n (new line), \\t (tab).',
      sections: [
        {
          heading: 'Escaping Quotes and Raw Strings',
          body: 'Raw strings (r"...") ignore escape characters, essential for Windows file paths and Regular Expressions.',
          code: `# Escaping double quote:
txt = "We are the so-called \\"Vikings\\" from the north."

# Newline and Tab:
multiline = "Hello\\nWorld"
tabbed = "Col1\\tCol2"

# Raw String (No escape interpretation):
path = r"C:\\Users\\name\\Desktop"`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Raw Strings for File Paths</h3>
  <p><code>r"C:\\new\\test"</code> prevents <code>\\n</code> from turning into a newline character.</p>
</body>
</html>`,
          tips: [
            'Always use raw strings (r"...") when defining regex patterns with the re module.'
          ]
        }
      ]
    }
  },

  // 18. Python Booleans
  {
    id: 'py-booleans',
    title: 'Python Booleans',
    slug: 'py-booleans',
    summary: 'Booleans represent one of two values: True or False. Understand truthy and falsy values.',
    readTime: '4 min',
    category: 'Python Tutorial',
    content: {
      overview: 'In programming you often need to know if an expression is True or False. You can evaluate any expression in Python, and get one of two answers, True or False. When you compare two values, the expression is evaluated and Python returns the Boolean answer.',
      sections: [
        {
          heading: 'The bool() Function and Falsy Values',
          body: 'Almost any value is evaluated to True if it has some sort of content. Exactly empty or zero values evaluate to False.',
          code: `# Falsy values in Python:
bool(False)
bool(None)
bool(0)
bool("")
bool(())   # Empty tuple
bool([])   # Empty list
bool({})   # Empty dict

# Truthy values:
bool("abc") # True
bool(123)   # True
bool([1])   # True`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Truthy vs Falsy in Python</h3>
  <p><code>bool([])</code> is <b>False</b> (Empty list)</p>
  <p><code>bool([0])</code> is <b>True</b> (List containing number 0 is non-empty!)</p>
</body>
</html>`,
          tips: [
            'In Python, True and False MUST be capitalized. true or false will raise a NameError.'
          ]
        }
      ]
    }
  },

  // 19. Python Operators
  {
    id: 'py-operators',
    title: 'Python Operators',
    slug: 'py-operators',
    summary: 'Operators perform operations on variables: Arithmetic, Assignment, Comparison, Logical, Identity, Membership.',
    readTime: '6 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Python divides operators into: Arithmetic (+, -, *, /, %, **, //), Assignment (=, +=, -=), Comparison (==, !=, >, <, >=, <=), Logical (and, or, not), Identity (is, is not), Membership (in, not in), and Bitwise operators.',
      sections: [
        {
          heading: 'Floor Division (//), is vs ==, and in',
          body: 'Floor division (//) rounds down to nearest integer. is checks memory identity, whereas == checks value equality.',
          code: `# Floor division:
print(15 // 2) # 7 (Not 7.5)

# Identity vs Equality:
x = [1, 2, 3]
y = [1, 2, 3]
print(x == y) # True (Values match)
print(x is y) # False (Different memory locations!)

# Membership:
print(2 in x) # True`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Identity (is) vs Equality (==)</h3>
  <p><code>[1] == [1]</code> is <b>True</b> (Equal values)</p>
  <p><code>[1] is [1]</code> is <b>False</b> (Distinct objects in memory)</p>
</body>
</html>`,
          tips: [
            'Always use is when comparing to None (e.g. if val is None:).'
          ]
        }
      ]
    }
  },

  // 20. Python Lists Overview
  {
    id: 'py-lists',
    title: 'Python Lists',
    slug: 'py-lists',
    summary: 'Lists are used to store multiple items in a single variable: ordered, changeable, and allow duplicates.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Lists are one of 4 built-in data types in Python used to store collections of data. Lists are created using square brackets []. List items are ordered, changeable, and allow duplicate values. List items are indexed, the first item has index [0].',
      sections: [
        {
          heading: 'List Characteristics',
          body: 'Lists can contain different data types, and can contain another list (nested lists).',
          code: `thislist = ["apple", "banana", "cherry", "apple"]
print(len(thislist)) # 4

# Mixed types:
list1 = ["abc", 34, True, 40, "male"]

# Using the list() constructor:
fruits = list(("apple", "banana", "cherry"))`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Python List</h3>
  <p><code>["Python", 3.12, True]</code> is a valid heterogeneous list in Python.</p>
</body>
</html>`,
          tips: [
            'Python lists are dynamic arrays under the hood; appending items is amortized O(1).'
          ]
        }
      ]
    }
  },

  // 21. Python Access and Modify List Items
  {
    id: 'py-access-list-items',
    title: 'Python Access and Modify List Items',
    slug: 'py-access-list-items',
    summary: 'Index list items, slice ranges, and update elements: thislist[1] = "blackcurrant".',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'List items are indexed and you can access them by referring to the index number. Negative indexing means start from the end: -1 refers to the last item, -2 refers to the second last item. You can also change the value of a specific item or a range of items.',
      sections: [
        {
          heading: 'Indexing and Range Slicing',
          body: 'Access and change ranges of values with slice syntax.',
          code: `fruits = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]

# Accessing:
print(fruits[1])    # "banana"
print(fruits[-1])   # "mango"
print(fruits[2:5])  # ['cherry', 'orange', 'kiwi']

# Modifying items:
fruits[1] = "blackcurrant"

# Changing a range of values:
fruits[1:3] = ["blackcurrant", "watermelon"]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Negative Indexing</h3>
  <p><code>fruits[-1]</code> fetches the last item without having to calculate <code>len(fruits) - 1</code>.</p>
</body>
</html>`,
          tips: [
            'Specifying a slice range with step [::2] returns every alternate item.'
          ]
        }
      ]
    }
  }
];
