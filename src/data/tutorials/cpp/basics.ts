import { TutorialChapter } from '../../../types';

export const cppBasicsChapters: TutorialChapter[] = [
  // 1. C++ HOME
  {
    id: 'cpp-home',
    title: 'C++ HOME',
    slug: 'cpp-home',
    summary: 'C++ is a cross-platform language used to create high-performance software systems.',
    readTime: '3 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'C++ was developed by Bjarne Stroustrup at Bell Labs in 1979 as an extension to the C language ("C with Classes"). It provides object-oriented programming, generic programming with templates, and zero-overhead performance abstractions.',
      sections: [
        {
          heading: 'Why Learn C++?',
          body: 'C++ is one of the world\'s most popular languages. It is used to write high-end game engines (Unreal Engine), AAA video games, web browsers (Chrome, Firefox), AI backends (TensorFlow, PyTorch), operating systems, and financial trading systems.',
          code: `#include <iostream>

int main() {
    std::cout << "Hello DevAura C++!" << std::endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">C++ Program Execution</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">$ g++ -O3 main.cpp -o main
$ ./main
Hello DevAura C++!</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. C++ Intro
  {
    id: 'cpp-intro',
    title: 'C++ Introduction',
    slug: 'cpp-intro',
    summary: 'Differences between C and C++, and why C++ gives programmers full hardware control.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'C++ is an extension of C, meaning virtually any valid C code will compile in C++. However, C++ introduces Classes, Objects, Inheritance, Operator Overloading, Exception Handling, and the Standard Template Library (STL).',
      sections: [
        {
          heading: 'The Power of C++',
          body: 'C++ combines the low-level efficiency of C with modern high-level abstractions like OOP, RAII (Resource Acquisition Is Initialization), and smart pointers.',
          code: `// C++: High-level abstractions with zero runtime cost
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {10, 20, 30};
    for (int n : numbers) {
        std::cout << n << " ";
    }
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Where C++ Excels:</h4>
    <ul style="color:#334155; line-height:1.7;">
      <li><strong>Game Development:</strong> Unreal Engine, Unity Runtime, DirectX/Vulkan</li>
      <li><strong>High-Frequency Trading:</strong> Ultra low latency microsecond execution</li>
      <li><strong>Deep Learning:</strong> C++ CUDA kernels behind PyTorch and TensorFlow</li>
    </ul>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 3. C++ Get Started
  {
    id: 'cpp-getstarted',
    title: 'C++ Get Started',
    slug: 'cpp-getstarted',
    summary: 'Setting up g++, Clang, or Visual Studio to compile and run C++20/C++23.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'To start developing C++, you need a C++ compiler such as GCC (g++), Clang (clang++), or Microsoft Visual C++ (MSVC).',
      sections: [
        {
          heading: 'Compiling with g++',
          body: 'Use standard command line flags to enable modern C++ standards:',
          code: `$ g++ -std=c++20 main.cpp -o app
$ ./app`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#f8fafc; padding:16px; border-radius:8px; font-family:monospace;">
    <span style="color:#4f46e5;">$</span> g++ -std=c++20 main.cpp -o app<br>
    <span style="color:#4f46e5;">$</span> ./app<br>
    <span style="color:#38bdf8;">Execution finished with code 0.</span>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 4. C++ Syntax
  {
    id: 'cpp-syntax',
    title: 'C++ Syntax',
    slug: 'cpp-syntax',
    summary: 'The structure of a C++ source file: #include <iostream>, namespaces, and cout.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'A C++ program consists of header imports, standard namespace declarations, a main entrypoint function, and stream operations.',
      sections: [
        {
          heading: 'iostream and the std Namespace',
          body: '<iostream> contains declarations for the objects that control input and output. using namespace std; lets you write cout instead of std::cout.',
          code: `#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to DevAura Modern C++!";
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">C++ Anatomy:</h4>
    <p>1. <code>#include &lt;iostream&gt;</code> is a preprocessor header inclusion.</p>
    <p>2. <code>using namespace std;</code> exposes the standard library symbols.</p>
    <p>3. <code>cout &lt;&lt; ...;</code> is the standard character output stream using insertion operator <code>&lt;&lt;</code>.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 5. C++ Output
  {
    id: 'cpp-output',
    title: 'C++ Output (cout & endl)',
    slug: 'cpp-output',
    summary: 'Printing text, chaining insertion operators <<, newline \\n vs endl.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'The cout object, together with the << operator, is used to output values/print text in C++.',
      sections: [
        {
          heading: '\\n vs endl',
          body: 'endl adds a newline and flushes the buffer, while \\n simply adds a newline character (which is faster in high-throughput loops).',
          code: `#include <iostream>
using namespace std;

int main() {
    cout << "Line one" << endl;
    cout << "Line two\\n";
    cout << "Number: " << 42 << ", Price: $" << 19.99 << "\\n";
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Line one<br>
    Line two<br>
    Number: 42, Price: $19.99
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 6. C++ Comments
  {
    id: 'cpp-comments',
    title: 'C++ Comments',
    slug: 'cpp-comments',
    summary: 'Single-line comments // and multi-line comments /* */.',
    readTime: '3 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Comments can be used to explain C++ code, and to make it more readable. They are ignored by the compiler.',
      sections: [
        {
          heading: 'Comment Syntax',
          body: 'Use // for single line remarks and /* ... */ for multi-line explanations.',
          code: `#include <iostream>
using namespace std;

int main() {
    // Single line comment
    /* Multi-line
       documentation */
    cout << "Comments keep code clean!" << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f1f5f9; padding:12px; border-left:4px solid #4f46e5; border-radius:4px;">
    <strong>Output:</strong> Comments keep code clean!
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 7. C++ Variables
  {
    id: 'cpp-variables',
    title: 'C++ Variables',
    slug: 'cpp-variables',
    summary: 'Declaring variables, type inference with auto, constants, and initialization.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Variables are containers for storing data values. In C++, there are different types of variables: int, double, char, string, and bool.',
      sections: [
        {
          heading: 'Type Declarations and auto Keyword',
          body: 'Modern C++ (C++11 and newer) allows the auto keyword to automatically deduce the type from the initialization expression.',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int year = 2026;
    double price = 99.95;
    char grade = 'A';
    string brand = "DevAura";
    bool isActive = true;
    auto autoSpeed = 120.5; // Deduces to double

    cout << brand << " (" << year << "): $" << price << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    DevAura (2026): $99.95
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 8. C++ User Input
  {
    id: 'cpp-user-input',
    title: 'C++ User Input (cin & getline)',
    slug: 'cpp-user-input',
    summary: 'Reading typed input using cin >> and reading full lines with getline().',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'cin is a predefined variable that reads data from the keyboard with the extraction operator (>>). To read multi-word strings with spaces, use getline(cin, stringVar).',
      sections: [
        {
          heading: 'cin and getline() Example',
          body: 'cin >> reads up to the first whitespace. getline() reads the complete line including spaces.',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int id;
    string fullName;

    cout << "Enter User ID: ";
    cin >> id;

    cin.ignore(); // Discard trailing newline

    cout << "Enter Full Name: ";
    getline(cin, fullName);

    cout << "Profile: " << fullName << " [#" << id << "]" << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Input Simulation:</h4>
    <p>User ID: <strong>881</strong></p>
    <p>Full Name: <strong>Maya Lin</strong></p>
    <div style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Profile: Maya Lin [#881]</div>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 9. C++ Data Types
  {
    id: 'cpp-data-types',
    title: 'C++ Data Types',
    slug: 'cpp-data-types',
    summary: 'Primitive data types, size of types, and numeric modifiers (signed, unsigned, long).',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'C++ data types specify the size and type of information the variable will store: boolean, char, int, float, double.',
      sections: [
        {
          heading: 'Numeric Types and Precision',
          body: 'float provides ~7 decimal digits of precision; double provides ~15 decimal digits.',
          code: `#include <iostream>
using namespace std;

int main() {
    int items = 500;
    float f1 = 35e3f; // 35000.0
    double d1 = 12E4;  // 120000.0
    char letter = 'D';
    bool isTrue = true;

    cout << "float: " << f1 << ", double: " << d1 << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    float: 35000, double: 120000
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 10. C++ Operators
  {
    id: 'cpp-operators',
    title: 'C++ Operators',
    slug: 'cpp-operators',
    summary: 'Arithmetic, assignment, comparison, logical, and bitwise operators.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Operators are used to perform operations on variables and values. C++ groups operators into arithmetic, assignment, comparison, logical, and bitwise operators.',
      sections: [
        {
          heading: 'Arithmetic and Increment Operators',
          body: 'Prefix (++x) increments before evaluation, while postfix (x++) increments after evaluation.',
          code: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int y = 3;

    cout << "x + y = " << (x + y) << endl;
    cout << "x % y = " << (x % y) << endl; // 1
    cout << "Prefix ++x: " << (++x) << endl; // 11
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    x + y = 13<br>
    x % y = 1<br>
    Prefix ++x: 11
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 11. C++ Strings
  {
    id: 'cpp-strings',
    title: 'C++ Strings (<string>)',
    slug: 'cpp-strings',
    summary: 'The std::string class: concatenation, length(), size(), index access, and mutability.',
    readTime: '5 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'In C++, strings are objects from the <string> header. Unlike raw C char arrays, std::string handles its own memory dynamically and is safe from buffer overflow vulnerabilities.',
      sections: [
        {
          heading: 'String Methods & Manipulation',
          body: 'Concatenate with +, append with .append(), find length with .length(), and access characters by index:',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string first = "Dev";
    string last = "Aura";
    string full = first + last;

    cout << "Combined: " << full << endl;
    cout << "Length: " << full.length() << endl; // 7
    cout << "First character: " << full[0] << endl; // 'D'

    full[0] = 'd'; // Strings are mutable!
    cout << "Mutated: " << full << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Combined: DevAura<br>
    Length: 7<br>
    First character: D<br>
    Mutated: devAura
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 12. C++ Math
  {
    id: 'cpp-math',
    title: 'C++ Math (<cmath>)',
    slug: 'cpp-math',
    summary: 'max, min, sqrt, round, pow, and log in the <cmath> library.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'C++ has many built-in math functions that allow you to perform mathematical tasks on numbers. Standard min and max are in <algorithm> or <iostream>, while advanced math lives in <cmath>.',
      sections: [
        {
          heading: '<cmath> Functions',
          body: 'Demonstrating common numerical operations:',
          code: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    cout << "Max(5, 10): " << max(5, 10) << endl;
    cout << "Sqrt(64): " << sqrt(64) << endl;
    cout << "Round(2.6): " << round(2.6) << endl;
    cout << "Pow(3, 3): " << pow(3, 3) << endl; // 27
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Max(5, 10): 10<br>
    Sqrt(64): 8<br>
    Round(2.6): 3<br>
    Pow(3, 3): 27
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 13. C++ Booleans
  {
    id: 'cpp-booleans',
    title: 'C++ Booleans',
    slug: 'cpp-booleans',
    summary: 'The bool type, true (1), false (0), and std::boolalpha.',
    readTime: '3 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'A boolean variable is declared with the bool keyword and can only take the values true or false. In console output, use boolalpha to print "true" instead of 1.',
      sections: [
        {
          heading: 'Using boolalpha',
          body: 'Printing boolean literals:',
          code: `#include <iostream>
using namespace std;

int main() {
    bool isCodingFun = true;
    bool isFishTasty = false;

    cout << isCodingFun << endl; // Prints 1
    cout << boolalpha << isCodingFun << endl; // Prints true
    cout << isFishTasty << endl; // Prints false
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    1<br>
    true<br>
    false
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 14. C++ Conditions
  {
    id: 'cpp-conditions',
    title: 'C++ Conditions & Shorthand If...Else',
    slug: 'cpp-conditions',
    summary: 'Conditional branching with if, else if, else, and the ternary operator ? :.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'C++ supports standard logical conditions from mathematics. You can use these conditions to perform different actions for different decisions.',
      sections: [
        {
          heading: 'If, Else If, and Ternary',
          body: 'Demonstrating condition evaluation:',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int score = 85;

    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else {
        cout << "Grade: C" << endl;
    }

    string result = (score >= 50) ? "Pass" : "Fail";
    cout << "Status: " << result << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Grade: B<br>
    Status: Pass
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 15. C++ Switch
  {
    id: 'cpp-switch',
    title: 'C++ Switch Statement',
    slug: 'cpp-switch',
    summary: 'Multi-way branch selection testing discrete values with case, break, and default.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Use the switch statement to select one of many code blocks to be executed. When a match is found, the code block is executed until a break statement is reached.',
      sections: [
        {
          heading: 'Switch Syntax',
          body: 'Example of mapping numeric days to day names:',
          code: `#include <iostream>
using namespace std;

int main() {
    int day = 4;
    switch (day) {
        case 1: cout << "Monday"; break;
        case 2: cout << "Tuesday"; break;
        case 3: cout << "Wednesday"; break;
        case 4: cout << "Thursday"; break;
        case 5: cout << "Friday"; break;
        default: cout << "Weekend"; break;
    }
    cout << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Thursday
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 16. C++ While Loop
  {
    id: 'cpp-while-loop',
    title: 'C++ While & Do/While Loop',
    slug: 'cpp-while-loop',
    summary: 'Repeating execution loops while conditions hold true.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'The while loop loops through a block of code as long as a specified condition is true. The do/while loop is a variant that executes the code block once before checking if the condition is true.',
      sections: [
        {
          heading: 'While Loop Example',
          body: 'Ensure the counter is incremented inside the block to avoid an infinite loop:',
          code: `#include <iostream>
using namespace std;

int main() {
    int count = 1;
    while (count <= 3) {
        cout << "Iteration: " << count << endl;
        count++;
    }
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Iteration: 1<br>
    Iteration: 2<br>
    Iteration: 3
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 17. C++ For Loop
  {
    id: 'cpp-for-loop',
    title: 'C++ For Loop & Range-Based For Loop',
    slug: 'cpp-for-loop',
    summary: 'Standard 3-statement for loops and modern C++ range-based for loops.',
    readTime: '5 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'In addition to traditional index loops, C++11 introduced the range-based for loop, which is exclusively used to iterate through elements in an array or collection.',
      sections: [
        {
          heading: 'Range-Based For Loop',
          body: 'for (type variable : array) iterates cleanly over any iterable container:',
          code: `#include <iostream>
using namespace std;

int main() {
    int myNumbers[5] = {10, 20, 30, 40, 50};

    // Range-based for loop (C++11)
    for (int num : myNumbers) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    10 20 30 40 50
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 18. C++ Break and Continue
  {
    id: 'cpp-break-continue',
    title: 'C++ Break and Continue',
    slug: 'cpp-break-continue',
    summary: 'Controlling loop execution flow: jump out with break, skip iteration with continue.',
    readTime: '3 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'The break statement can be used to jump out of a loop. The continue statement breaks one iteration in the loop and continues with the next iteration.',
      sections: [
        {
          heading: 'Break and Continue Demonstration',
          body: 'Using both to control flow:',
          code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 10; i++) {
        if (i == 4) continue; // Skip 4
        if (i == 7) break;    // Stop at 7
        cout << i << " ";
    }
    cout << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Loop Output:</h4>
    <p style="font-family:monospace; font-size:18px; color:#4f46e5; margin:0;">0 1 2 3 5 6</p>
    <p style="color:#64748b; margin-top:8px;">4 was skipped by continue; 7 triggered break to terminate loop.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
