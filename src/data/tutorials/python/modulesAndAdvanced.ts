import { TutorialChapter } from '../../../types';

export const pythonModulesAndAdvancedChapters: TutorialChapter[] = [
  // 46. Python Modules
  {
    id: 'py-modules',
    title: 'Python Modules',
    slug: 'py-modules',
    summary: 'Consider a module to be the same as a code library: import, from ... import, and dir().',
    readTime: '5 min',
    category: 'Python Modules',
    content: {
      overview: 'A module is a file containing a set of functions you want to include in your application. To create a module just save the code you want in a file with the file extension .py. To use a module, use the import statement.',
      sections: [
        {
          heading: 'Importing and Aliasing Modules',
          body: 'Use as to create an alias, and from ... import to import specific functions.',
          code: `# Importing whole module:
import math
print(math.sqrt(16)) # 4.0

# Aliasing a module:
import numpy as np

# Importing specific members:
from math import pi, ceil
print(ceil(pi)) # 4

# Inspecting module contents:
print(dir(math))`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Python Module Architecture</h3>
  <p><code>from datetime import datetime</code> imports only the datetime class.</p>
</body>
</html>`,
          tips: [
            'Avoid from module import * in production because it clutters the local namespace and can silently overwrite existing variables.'
          ]
        }
      ]
    }
  },

  // 47. Python Dates
  {
    id: 'py-dates',
    title: 'Python Dates',
    slug: 'py-dates',
    summary: 'A date in Python is not a data type of its own, but we can import a module named datetime.',
    readTime: '5 min',
    category: 'Python Modules',
    content: {
      overview: 'A date in Python is not a data type of its own, but we can import a module named datetime to work with the date as well as time. The datetime object has methods for formatting date objects into readable strings using strftime().',
      sections: [
        {
          heading: 'Current Date and strftime Formatting',
          body: 'Common format directives: %Y (Year), %m (Month 01-12), %d (Day of month 01-31), %H (Hour 00-23), %M (Minute), %A (Weekday name).',
          code: `import datetime

# Current time:
now = datetime.datetime.now()
print(now) # e.g. 2026-11-03 14:30:00

# Formatting with strftime():
print(now.strftime("%B %d, %Y")) # "November 03, 2026"
print(now.strftime("%A"))        # "Tuesday"

# Creating specific date:
launch = datetime.datetime(2026, 5, 17, 12, 0, 0)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>strftime() Formatting</h3>
  <p><code>now.strftime("%Y-%m-%d")</code> &rarr; <b>2026-11-03</b></p>
</body>
</html>`,
          tips: [
            'Use strptime() to parse date strings into datetime objects.'
          ]
        }
      ]
    }
  },

  // 48. Python Math
  {
    id: 'py-math',
    title: 'Python Math',
    slug: 'py-math',
    summary: 'Python has a set of built-in math functions, and an extensive math module for advanced operations.',
    readTime: '5 min',
    category: 'Python Modules',
    content: {
      overview: 'Python has a set of built-in math functions, including an extensive math module, that allows you to perform mathematical tasks on numbers.',
      sections: [
        {
          heading: 'Built-in vs. math Module Functions',
          body: 'Built-in functions include min(), max(), abs(), round(), and pow(). The math module adds math.sqrt(), math.ceil(), math.floor(), math.pi.',
          code: `# Built-in math:
min_val = min(5, 10, 25)
max_val = max(5, 10, 25)
abs_val = abs(-7.25) # 7.25
pow_val = pow(4, 3)  # 64

# math module:
import math
print(math.sqrt(64)) # 8.0
print(math.ceil(1.4)) # 2
print(math.floor(1.4)) # 1
print(math.pi)       # 3.141592653589793`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>math Module Methods</h3>
  <p><code>math.sqrt(144)</code> = <b>12.0</b></p>
</body>
</html>`,
          tips: [
            'math.isclose(a, b) is the recommended way to compare floats for equality safely.'
          ]
        }
      ]
    }
  },

  // 49. Python JSON
  {
    id: 'py-json',
    title: 'Python JSON',
    slug: 'py-json',
    summary: 'JSON is a syntax for storing and exchanging data. Python has a built-in package called json.',
    readTime: '5 min',
    category: 'Python Modules',
    content: {
      overview: 'JSON is text, written with JavaScript object notation. Python has a built-in package called json, which can be used to work with JSON data: json.loads() to parse JSON strings, and json.dumps() to convert Python objects to JSON strings.',
      sections: [
        {
          heading: 'json.loads() and json.dumps()',
          body: 'json.loads(string) parses JSON to a Python dictionary. json.dumps(dict) serializes a Python dictionary to a JSON string.',
          code: `import json

# JSON String to Python Dict:
person_json = '{"name": "John", "age": 30, "city": "New York"}'
person_dict = json.loads(person_json)
print(person_dict["name"]) # "John"

# Python Dict to JSON String:
car = {"brand": "Ford", "electric": False}
car_json = json.dumps(car, indent=2)
print(car_json)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Python json Module</h3>
  <p><code>json.loads()</code> = String &rarr; Dict</p>
  <p><code>json.dumps()</code> = Dict &rarr; String</p>
</body>
</html>`,
          tips: [
            'Use json.load(file) and json.dump(obj, file) to read and write directly to file streams.'
          ]
        }
      ]
    }
  },

  // 50. Python RegEx
  {
    id: 'py-regex',
    title: 'Python RegEx',
    slug: 'py-regex',
    summary: 'A RegEx, or Regular Expression, is a sequence of characters that forms a search pattern: re module.',
    readTime: '6 min',
    category: 'Python Modules',
    content: {
      overview: 'Python has a built-in package called re, which can be used to work with Regular Expressions. Key re functions: findall() returns a list containing all matches, search() returns a Match object if there is a match anywhere in the string, split() returns a list where the string has been split, sub() replaces matches with text.',
      sections: [
        {
          heading: 're.search() and re.findall()',
          body: 'Use raw strings (r"...") for regex patterns to prevent Python from escaping backslashes.',
          code: `import re

txt = "The rain in Spain"

# Search for pattern:
x = re.search(r"^The.*Spain$", txt)
if x:
    print("YES! We have a match!")

# Find all occurrences:
matches = re.findall(r"ai", txt) # ['ai', 'ai']

# Replace pattern:
new_txt = re.sub(r"\\s", "_", txt) # "The_rain_in_Spain"`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>re.sub() Replacement</h3>
  <p><code>re.sub(r"\\s+", " ", "Clean    multiple   spaces")</code> &rarr; <b>"Clean multiple spaces"</b></p>
</body>
</html>`,
          tips: [
            'Use re.compile(pattern) when executing the same regular expression repeatedly in high-performance loops.'
          ]
        }
      ]
    }
  },

  // 51. Python PIP
  {
    id: 'py-pip',
    title: 'Python PIP & Virtual Environments',
    slug: 'py-pip',
    summary: 'PIP is a package manager for Python packages, or modules. Learn pip install and venv.',
    readTime: '5 min',
    category: 'Python Modules',
    content: {
      overview: 'PIP is the package installer for Python. A package contains all the files you need for a module. Modules are Python code libraries you can include in your project. You can download and install third-party packages from PyPI (Python Package Index).',
      sections: [
        {
          heading: 'Virtual Environments and requirements.txt',
          body: 'Always create an isolated virtual environment (venv) for your projects.',
          code: `# Terminal commands:

# 1. Create virtual environment:
# python -m venv venv

# 2. Activate virtual environment:
# source venv/bin/activate (macOS/Linux)
# venv\\Scripts\\activate (Windows)

# 3. Install packages:
# pip install requests pandas fastapi

# 4. Freeze dependencies:
# pip freeze > requirements.txt

# 5. Install from requirements.txt:
# pip install -r requirements.txt`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Modern Python Workflow</h3>
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    $ python -m venv .venv<br>
    $ pip install fastapi uvicorn
  </div>
</body>
</html>`,
          tips: [
            'Virtual environments ensure dependencies from one project never conflict with another project.'
          ]
        }
      ]
    }
  },

  // 52. Python Try...Except
  {
    id: 'py-try-except',
    title: 'Python Try...Except',
    slug: 'py-try-except',
    summary: 'Handle errors gracefully: try, except, else, finally, and raising custom exceptions with raise.',
    readTime: '6 min',
    category: 'Python Modules',
    content: {
      overview: 'The try block lets you test a block of code for errors. The except block lets you handle the error. The else block lets you execute code when there is no error. The finally block lets you execute code, regardless of the result of the try- and except blocks.',
      sections: [
        {
          heading: 'Handling Specific Exception Types',
          body: 'Catch specific exceptions like FileNotFoundError or ValueError rather than catching bare Exception.',
          code: `try:
    f = open("demofile.txt")
    f.write("Lorum Ipsum")
except FileNotFoundError:
    print("Something went wrong when writing to the file")
except Exception as e:
    print("Unexpected error:", e)
else:
    print("Executed successfully with no errors!")
finally:
    print("The 'try except' is finished")

# Raising Custom Exceptions:
x = -1
if x < 0:
    raise ValueError("Sorry, no numbers below zero allowed.")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>try...except...finally Flow</h3>
  <p>The <code>finally</code> block executes regardless of whether an exception occurred or was handled.</p>
</body>
</html>`,
          tips: [
            'Never use bare except: pass; it silently swallows critical crashes and KeyboardInterrupt signals.'
          ]
        }
      ]
    }
  },

  // 53. Python User Input
  {
    id: 'py-user-input',
    title: 'Python User Input',
    slug: 'py-user-input',
    summary: 'Python allows for user input via the built-in input() function.',
    readTime: '4 min',
    category: 'Python Modules',
    content: {
      overview: 'Python allows for user input. That means we are able to ask the user for input. The method is a bit different in Python 3.6 than Python 2.7. Python 3.6 uses the input() method. Python 2.7 uses the raw_input() method. The input() function always returns a String.',
      sections: [
        {
          heading: 'Reading and Casting User Input',
          body: 'Because input() returns a string, cast to int() or float() for numerical operations.',
          code: `# Reading string input:
username = input("Enter username: ")
print("Username is: " + username)

# Reading numbers:
age = int(input("Enter your age: "))
years_left = 65 - age
print(f"Years until retirement: {years_left}")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>CLI User Interaction</h3>
  <p><code>name = input("Your name: ")</code> pauses execution until the user presses Enter in terminal.</p>
</body>
</html>`,
          tips: [
            'Wrap int(input(...)) inside a try...except ValueError to handle non-numeric user inputs gracefully.'
          ]
        }
      ]
    }
  },

  // 54. Python File Handling
  {
    id: 'py-file-handling',
    title: 'Python File Handling',
    slug: 'py-file-handling',
    summary: 'File handling is an important part of any web application. Learn open(), read(), and with open(...) as f.',
    readTime: '6 min',
    category: 'Python File I/O',
    content: {
      overview: 'The key function for working with files in Python is the open() function. The open() function takes two parameters: filename, and mode. Four different methods (modes) for opening a file: "r" (Read), "a" (Append), "w" (Write), "x" (Create).',
      sections: [
        {
          heading: 'The with Statement (Context Manager)',
          body: 'Always use with open(...) as f because it automatically closes the file even if exceptions occur.',
          code: `# Modern Context Manager (Auto-closes file!):
with open("demofile.txt", "r") as f:
    content = f.read()
    print(content)

# Reading line by line:
with open("demofile.txt", "r") as f:
    for line in f:
        print(line.strip())`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Context Manager (with open)</h3>
  <div style="background:#f1f5f9; padding:12px; border-radius:6px;">
    <code>with open("log.txt") as f:<br>&nbsp;&nbsp;&nbsp;&nbsp;lines = f.readlines()</code>
    <p style="margin-top:6px; color:#475569;">Guarantees file descriptors are safely freed without explicit f.close().</p>
  </div>
</body>
</html>`,
          tips: [
            'Using the with statement guarantees files are properly closed even if an unexpected exception occurs inside the block.'
          ]
        }
      ]
    }
  },

  // 55. Python Write/Create Files
  {
    id: 'py-file-write',
    title: 'Python Write/Create Files',
    slug: 'py-file-write',
    summary: 'Write to existing files or create new files using modes "a" (append) and "w" (overwrite).',
    readTime: '5 min',
    category: 'Python File I/O',
    content: {
      overview: 'To write to an existing file, you must add a parameter to the open() function: "a" (Append - will append to the end of the file) or "w" (Write - will overwrite any existing content).',
      sections: [
        {
          heading: 'Writing and Appending',
          body: 'Mode "w" overwrites the entire file. Mode "a" appends text to the existing end.',
          code: `# Appending to file:
with open("demofile2.txt", "a") as f:
    f.write("\\nNow the file has more content!")

# Overwriting file completely:
with open("demofile3.txt", "w") as f:
    f.write("Woops! I have deleted the previous content!")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Append vs Write Mode</h3>
  <p><code>"a"</code> = Preserves existing lines and appends.</p>
  <p><code>"w"</code> = Overwrites the file from scratch.</p>
</body>
</html>`,
          tips: [
            'Mode "x" (create) will create a file, returning an error if the file already exists.'
          ]
        }
      ]
    }
  },

  // 56. Python Delete Files
  {
    id: 'py-file-delete',
    title: 'Python Delete Files',
    slug: 'py-file-delete',
    summary: 'To delete a file, you must import the OS module, and run its os.remove() function.',
    readTime: '4 min',
    category: 'Python File I/O',
    content: {
      overview: 'To delete a file, you must import the OS module, and run its os.remove() function. To avoid getting an error, you might want to check if the file exists before you try to delete it with os.path.exists().',
      sections: [
        {
          heading: 'Safe File Deletion',
          body: 'Check file existence first using os.path.exists() or pathlib.Path.',
          code: `import os

if os.path.exists("demofile.txt"):
    os.remove("demofile.txt")
    print("File removed successfully.")
else:
    print("The file does not exist")

# To delete an entire empty folder:
# os.rmdir("myfolder")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>os.remove() Safe Deletion</h3>
  <p>Always verify with <code>os.path.exists()</code> to prevent FileNotFoundError crashes.</p>
</body>
</html>`,
          tips: [
            'Modern Python (3.4+) also provides pathlib.Path("file.txt").unlink() for object-oriented filesystem operations.'
          ]
        }
      ]
    }
  },

  // 57. Python Decorators and Generators
  {
    id: 'py-decorators-generators',
    title: 'Python Decorators & Generators',
    slug: 'py-decorators-generators',
    summary: 'Advanced Python features: @decorator syntax and memory-efficient generators with yield.',
    readTime: '6 min',
    category: 'Python Advanced',
    content: {
      overview: 'Decorators and Generators are two of Python most powerful advanced features. Decorators allow you to wrap another function in order to extend the behavior of the wrapped function, without permanently modifying it. Generators are functions that return an iterator that yields one item at a time.',
      sections: [
        {
          heading: 'Decorators and Generators in Practice',
          body: 'Decorators use @ syntax (common in web frameworks like Flask and FastAPI). Generators use yield.',
          code: `# Decorator Function:
def my_timer_decorator(func):
    def wrapper(*args, **kwargs):
        print("Starting task...")
        result = func(*args, **kwargs)
        print("Task finished!")
        return result
    return wrapper

@my_timer_decorator
def calculate():
    print("Calculating data...")

calculate()

# Generator Function (Memory-efficient streaming):
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for num in countdown(3):
    print(num) # 3, 2, 1`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Generator Memory Advantage</h3>
  <p>Generators compute values on-the-fly, allowing you to iterate over 1,000,000,000 records without loading them into RAM!</p>
</body>
</html>`,
          tips: [
            'Generators maintain their state between yield statements, resuming execution right where they left off.'
          ]
        }
      ]
    }
  }
];
