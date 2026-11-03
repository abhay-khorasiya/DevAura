import { TutorialChapter } from '../../../types';

export const csharpBasicsChapters: TutorialChapter[] = [
  // 1. C# HOME
  {
    id: 'cs-home',
    title: 'C# HOME',
    slug: 'cs-home',
    summary: 'C# is a modern, object-oriented, and type-safe programming language developed by Microsoft.',
    readTime: '3 min',
    category: 'C# Tutorial',
    content: {
      overview: 'C# (pronounced "C-Sharp") was created by Anders Hejlsberg and Microsoft in 2000. It is an open-source, cross-platform language running on the modern .NET runtime. It is used for web applications (ASP.NET Core), game development (Unity), desktop apps (.NET MAUI, WPF), and cloud microservices on Azure and AWS.',
      sections: [
        {
          heading: 'Hello World in Modern C#',
          body: 'With modern C# 10/12/13 top-level statements, starting out is straightforward and concise:',
          code: `// Modern C# Top-Level Statements
Console.WriteLine("Hello DevAura C#!");

// Or Classic C# 
using System;

namespace HelloWorld {
  class Program {
    static void Main(string[] args) {
      Console.WriteLine("Hello DevAura C#!");
    }
  }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">.NET CLI Execution</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">$ dotnet new console -o MyApp
$ dotnet run
Hello DevAura C#!</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. C# Intro
  {
    id: 'cs-intro',
    title: 'C# Introduction & .NET Ecosystem',
    slug: 'cs-intro',
    summary: 'Why use C#? Cross-platform development, Common Language Runtime (CLR), and JIT compilation.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'C# code compiles down to Intermediate Language (IL) bytecode, which is executed by the Common Language Runtime (CLR). The CLR handles automatic memory garbage collection, thread management, type safety, and security.',
      sections: [
        {
          heading: 'Why Learn C#?',
          body: 'C# ranks consistently among the top 5 most utilized languages globally. It powers the Unity game engine (which runs over 70% of mobile and VR games) and powers high-throughput enterprise enterprise backends with ASP.NET Core.',
          code: `// C# brings safety, high speed, and vast ecosystem libraries
using System;

class Intro {
    static void Main() {
        Console.WriteLine($"Running on .NET Runtime {Environment.Version}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">What Can You Build With C#?</h4>
    <ul style="color:#334155; line-height:1.7;">
      <li><strong>Mobile & Desktop:</strong> .NET MAUI (iOS, Android, macOS, Windows)</li>
      <li><strong>Web APIs & Cloud:</strong> ASP.NET Core, Blazor, SignalR</li>
      <li><strong>Video Games:</strong> Unity 3D/2D, Godot C#</li>
      <li><strong>Machine Learning:</strong> ML.NET, ONNX Runtime</li>
    </ul>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 3. C# Get Started
  {
    id: 'cs-getstarted',
    title: 'C# Get Started',
    slug: 'cs-getstarted',
    summary: 'Installing the .NET SDK and running your first project from the terminal.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'To start using C#, download and install the official .NET SDK from microsoft.com. You can develop in Visual Studio, VS Code (with the C# Dev Kit extension), or JetBrains Rider.',
      sections: [
        {
          heading: 'Creating and Running a Project',
          body: 'Run the dotnet CLI commands to initialize a new console project:',
          code: `$ dotnet --version
8.0.200

$ dotnet new console -n DevAuraConsole
$ cd DevAuraConsole
$ dotnet run
Hello, World!`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#f8fafc; padding:16px; border-radius:8px; font-family:monospace;">
    <span style="color:#4f46e5;">$</span> dotnet run<br>
    <span style="color:#38bdf8;">Hello, World!</span>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 4. C# Syntax
  {
    id: 'cs-syntax',
    title: 'C# Syntax',
    slug: 'cs-syntax',
    summary: 'Namespaces, class declarations, Main method, and statements.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Every C# program has a structure containing namespaces, classes, and methods. C# is case-sensitive, and every statement ends with a semicolon (;).',
      sections: [
        {
          heading: 'Anatomy of a C# File',
          body: 'Line 1 is using System; which lets us use classes from the System namespace. Console is a class of the System namespace, and WriteLine() is a method.',
          code: `using System;

namespace MyApplication {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Line 1");
            Console.WriteLine("Line 2");
        }
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Key Syntax Principles:</h4>
    <p>1. <strong>Namespaces:</strong> Used to organize code and avoid name collisions.</p>
    <p>2. <strong>Classes:</strong> Container for data and methods.</p>
    <p>3. <strong>Main():</strong> The starting point of execution in every C# application.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 5. C# Output
  {
    id: 'cs-output',
    title: 'C# Output (WriteLine vs Write)',
    slug: 'cs-output',
    summary: 'Printing text and data to standard console output: WriteLine() vs Write().',
    readTime: '3 min',
    category: 'C# Tutorial',
    content: {
      overview: 'To output values or print text in C#, you can use the Console.WriteLine() method or the Console.Write() method.',
      sections: [
        {
          heading: 'WriteLine() vs Write()',
          body: 'Console.WriteLine() prints on a new line; Console.Write() outputs on the same line.',
          code: `using System;

class Program {
    static void Main() {
        Console.Write("Hello ");
        Console.Write("World! ");
        Console.WriteLine("(Same Line)");
        Console.WriteLine("Second Line");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Hello World! (Same Line)<br>
    Second Line
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 6. C# Comments
  {
    id: 'cs-comments',
    title: 'C# Comments',
    slug: 'cs-comments',
    summary: 'Single-line //, multi-line /* */, and XML documentation comments ///.',
    readTime: '3 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Comments can be used to explain C# code, and to make it more readable. In addition to // and /* */, C# supports triple-slash (///) XML documentation comments for IDE tooltips.',
      sections: [
        {
          heading: 'XML Doc Comments (///)',
          body: 'XML comments allow IDEs like Visual Studio to generate intellisense documentation:',
          code: `/// <summary>
/// Calculates the total cost with tax.
/// </summary>
/// <param name="price">The base unit price</param>
/// <returns>Final price including 10% tax</returns>
static double CalculateTax(double price) {
    return price * 1.10;
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border-left:4px solid #4f46e5; padding:12px;">
    <strong>C# XML Docs:</strong> IDEs parse <code>/// &lt;summary&gt;</code> tags to give programmers helpful hover information and auto-generated API reference pages.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 7. C# Variables
  {
    id: 'cs-variables',
    title: 'C# Variables & Data Types',
    slug: 'cs-variables',
    summary: 'Variables, primitive types (int, double, char, string, bool), constants, and implicit typing with var.',
    readTime: '5 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Variables are containers for storing data values. In C#, there are different types of variables: int, double, char, string, and bool.',
      sections: [
        {
          heading: 'Explicit Types, const, and var',
          body: 'Use const to make values immutable. var infers type during compilation while remaining 100% strictly type-safe.',
          code: `using System;

class Program {
    static void Main() {
        int age = 28;
        double price = 49.99;
        char currency = '$';
        string product = "DevAura Studio";
        bool inStock = true;

        const double TAX_RATE = 0.08;
        var inferredScore = 98.5; // type is double

        Console.WriteLine($"{product} is {currency}{price}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    DevAura Studio is $49.99
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 8. C# Type Casting
  {
    id: 'cs-type-casting',
    title: 'C# Type Casting',
    slug: 'cs-type-casting',
    summary: 'Implicit casting, explicit casting (type), and conversion methods with Convert.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Type casting is when you assign a value of one data type to another type. In C#, there are two types of casting: Implicit Casting (automatic) and Explicit Casting (manual).',
      sections: [
        {
          heading: 'Implicit, Explicit, and Convert Class',
          body: 'Converting between strings and numeric types:',
          code: `using System;

class Program {
    static void Main() {
        // Implicit casting (char -> int -> long -> float -> double)
        int myInt = 9;
        double myDouble = myInt; // Automatic casting

        // Explicit casting (manual with parentheses)
        double pi = 3.14;
        int intPi = (int)pi; // 3

        // Convert class methods
        string strNum = "125";
        int parsed = Convert.ToInt32(strNum);
        string strBool = Convert.ToString(true);

        Console.WriteLine($"Parsed: {parsed}, StringBool: {strBool}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Parsed: 125, StringBool: True
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 9. C# User Input
  {
    id: 'cs-user-input',
    title: 'C# User Input (Console.ReadLine)',
    slug: 'cs-user-input',
    summary: 'Reading string input from the terminal and parsing into numbers.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Console.ReadLine() reads the next line of characters from the standard input stream. Because it returns a string, you must convert it if you want numeric input.',
      sections: [
        {
          heading: 'Console.ReadLine() and int.Parse()',
          body: 'Example of reading and parsing input:',
          code: `using System;

class Program {
    static void Main() {
        Console.Write("Enter your name: ");
        string userName = Console.ReadLine();

        Console.Write("Enter your birth year: ");
        int birthYear = Convert.ToInt32(Console.ReadLine());

        int currentAge = 2026 - birthYear;
        Console.WriteLine($"Hello {userName}, you are {currentAge} years old!");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Input Simulation:</h4>
    <p>Enter your name: <strong>Sarah</strong></p>
    <p>Enter your birth year: <strong>2001</strong></p>
    <div style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">
      Hello Sarah, you are 25 years old!
    </div>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 10. C# Operators
  {
    id: 'cs-operators',
    title: 'C# Operators',
    slug: 'cs-operators',
    summary: 'Arithmetic, assignment, comparison, logical, and null-coalescing (??, ??=).',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Operators are used to perform operations on variables and values. C# supports all standard operators plus modern null-coalescing operators.',
      sections: [
        {
          heading: 'Null-Coalescing Operators (?? and ??=)',
          body: 'Provide default fallback values when a variable is null:',
          code: `using System;

class Program {
    static void Main() {
        string? username = null;
        // ?? returns right operand if left is null
        string displayName = username ?? "Guest User";
        Console.WriteLine($"Welcome, {displayName}!");

        // ??= assigns only if currently null
        username ??= "DefaultProfile";
        Console.WriteLine($"Username set to: {username}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Welcome, Guest User!<br>
    Username set to: DefaultProfile
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 11. C# Math
  {
    id: 'cs-math',
    title: 'C# Math (System.Math)',
    slug: 'cs-math',
    summary: 'Max, Min, Sqrt, Abs, Round, and Pow methods in the System.Math class.',
    readTime: '3 min',
    category: 'C# Tutorial',
    content: {
      overview: 'The C# Math class has many methods that allows you to perform mathematical tasks on numbers without needing to instantiate any objects.',
      sections: [
        {
          heading: 'Math Methods',
          body: 'Common calculations:',
          code: `using System;

class Program {
    static void Main() {
        Console.WriteLine($"Math.Max(5, 10): {Math.Max(5, 10)}");
        Console.WriteLine($"Math.Sqrt(81): {Math.Sqrt(81)}");
        Console.WriteLine($"Math.Abs(-4.7): {Math.Abs(-4.7)}");
        Console.WriteLine($"Math.Round(9.99): {Math.Round(9.99)}");
        Console.WriteLine($"Math.Pow(2, 5): {Math.Pow(2, 5)}"); // 32
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Math.Max(5, 10): 10<br>
    Math.Sqrt(81): 9<br>
    Math.Abs(-4.7): 4.7<br>
    Math.Round(9.99): 10<br>
    Math.Pow(2, 5): 32
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 12. C# Strings
  {
    id: 'cs-strings',
    title: 'C# Strings & String Interpolation',
    slug: 'cs-strings',
    summary: 'String methods (ToUpper, ToLower, Substring, IndexOf) and string interpolation $\"{}\".',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Strings are used for storing text. A string variable contains a collection of characters surrounded by double quotes. String interpolation ($) is the modern way to format strings in C#.',
      sections: [
        {
          heading: 'String Interpolation and Methods',
          body: 'Clean syntax without manual string concatenation:',
          code: `using System;

class Program {
    static void Main() {
        string firstName = "John";
        string lastName = "Doe";

        // String Interpolation
        string fullName = $"{firstName} {lastName}";
        Console.WriteLine($"Full: {fullName}");
        Console.WriteLine($"Length: {fullName.Length}");
        Console.WriteLine($"Upper: {fullName.ToUpper()}");
        Console.WriteLine($"Substring(0, 4): {fullName.Substring(0, 4)}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Full: John Doe<br>
    Length: 8<br>
    Upper: JOHN DOE<br>
    Substring(0, 4): John
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 13. C# Booleans
  {
    id: 'cs-booleans',
    title: 'C# Booleans',
    slug: 'cs-booleans',
    summary: 'Boolean types, expressions, comparison logic, and truth values.',
    readTime: '3 min',
    category: 'C# Tutorial',
    content: {
      overview: 'A boolean type is declared with the bool keyword and can only take the values true or false.',
      sections: [
        {
          heading: 'Boolean Evaluation',
          body: 'Direct conditional expressions:',
          code: `using System;

class Program {
    static void Main() {
        int myAge = 25;
        int votingAge = 18;

        bool canVote = myAge >= votingAge;
        Console.WriteLine($"Can vote: {canVote}"); // True
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Can vote: True
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 14. C# Conditions
  {
    id: 'cs-conditions',
    title: 'C# If...Else & Ternary Operator',
    slug: 'cs-conditions',
    summary: 'Branching decisions with if, else if, else, and the shorthand ternary operator ? :.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'C# supports the usual logical conditions from mathematics. You can use these conditions to perform different actions for different decisions.',
      sections: [
        {
          heading: 'Condition Evaluation',
          body: 'Example of grading and ternary assignment:',
          code: `using System;

class Program {
    static void Main() {
        int time = 20;
        string greeting = (time < 18) ? "Good day." : "Good evening.";
        Console.WriteLine(greeting);
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Good evening.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 15. C# Switch
  {
    id: 'cs-switch',
    title: 'C# Switch & Pattern Matching Switch Expressions',
    slug: 'cs-switch',
    summary: 'Traditional switch statements and modern C# pattern-matching switch expressions.',
    readTime: '5 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Use the switch statement to select one of many code blocks to be executed. Modern C# also introduces switch expressions which return values directly with clean arrow (=>) syntax.',
      sections: [
        {
          heading: 'Switch Expressions (C# 8+)',
          body: 'Concise functional pattern matching:',
          code: `using System;

class Program {
    static void Main() {
        int day = 3;

        // Modern Switch Expression
        string dayName = day switch {
            1 => "Monday",
            2 => "Tuesday",
            3 => "Wednesday",
            4 => "Thursday",
            5 => "Friday",
            _ => "Weekend" // Discard pattern acts as default
        };

        Console.WriteLine($"Day 3 is {dayName}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Day 3 is Wednesday
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 16. C# While Loop
  {
    id: 'cs-while-loop',
    title: 'C# While & Do/While Loop',
    slug: 'cs-while-loop',
    summary: 'Loops executing while conditions remain true.',
    readTime: '3 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Loops can execute a block of code as long as a specified condition is reached. While loops verify condition first; do/while loops execute at least once.',
      sections: [
        {
          heading: 'While Loop Example',
          body: 'Iterating up to a boundary:',
          code: `using System;

class Program {
    static void Main() {
        int i = 1;
        while (i <= 4) {
            Console.WriteLine($"Count: {i}");
            i++;
        }
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Count: 1<br>
    Count: 2<br>
    Count: 3<br>
    Count: 4
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 17. C# For Loop
  {
    id: 'cs-for-loop',
    title: 'C# For Loop & Foreach Loop',
    slug: 'cs-for-loop',
    summary: 'Traditional 3-clause for loops and the idiomatic C# foreach loop for collections.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'When you know exactly how many times you want to loop, use the for loop. To iterate through arrays and collections, use the foreach loop.',
      sections: [
        {
          heading: 'Foreach Loop Example',
          body: 'foreach (var item in collection) is safe, elegant, and avoids out-of-bounds index errors:',
          code: `using System;

class Program {
    static void Main() {
        string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};

        foreach (string car in cars) {
            Console.WriteLine($"Car: {car}");
        }
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Car: Volvo<br>
    Car: BMW<br>
    Car: Ford<br>
    Car: Mazda
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 18. C# Break and Continue
  {
    id: 'cs-break-continue',
    title: 'C# Break and Continue',
    slug: 'cs-break-continue',
    summary: 'Jumping out of loops with break and skipping iterations with continue.',
    readTime: '3 min',
    category: 'C# Tutorial',
    content: {
      overview: 'The break statement jumps entirely out of a loop, while continue breaks one iteration and continues with the next iteration in the loop.',
      sections: [
        {
          heading: 'Break and Continue Demonstration',
          body: 'Controlling loop flow:',
          code: `using System;

class Program {
    static void Main() {
        for (int i = 0; i < 10; i++) {
            if (i == 4) continue; // Skip 4
            if (i == 7) break;    // Stop loop at 7
            Console.Write($"{i} ");
        }
        Console.WriteLine();
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Loop Output:</h4>
    <p style="font-family:monospace; font-size:18px; color:#4f46e5; margin:0;">0 1 2 3 5 6</p>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
