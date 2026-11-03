import { TutorialChapter } from '../../../types';

export const cBasicsChapters: TutorialChapter[] = [
  // 1. C HOME
  {
    id: 'c-home',
    title: 'C HOME',
    slug: 'c-home',
    summary: 'C is a general-purpose, procedural computer programming language supporting structured programming.',
    readTime: '3 min',
    category: 'C Tutorial',
    content: {
      overview: 'C is a powerful general-purpose programming language developed at Bell Laboratories in 1972 by Dennis Ritchie. It is extremely fast, close to the hardware, and used for developing operating systems, databases, compilers, embedded systems, and high-performance game engines.',
      sections: [
        {
          heading: 'Why Learn C?',
          body: 'C is one of the most popular and foundational programming languages in the world. Knowing C gives you a deep, direct understanding of how computer memory, operating systems, and processors truly function.',
          code: `#include <stdio.h>

int main() {
    printf("Welcome to DevAura C Tutorial!\\n");
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">C Execution Terminal</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">$ gcc main.c -o main
$ ./main
Welcome to DevAura C Tutorial!</pre>
  </div>
</body>
</html>`,
          tips: ['C code must be compiled into machine instructions (binary) before execution.']
        }
      ]
    }
  },

  // 2. C Intro
  {
    id: 'c-intro',
    title: 'C Introduction',
    slug: 'c-intro',
    summary: 'What is C? Why was it created, and what are its primary modern use cases?',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'C was created to build the UNIX operating system. Today, the Linux kernel, macOS Darwin kernel, Windows NT kernel, PostgreSQL, Redis, and Git are all engineered in C due to its blazing speed and minimal memory footprint.',
      sections: [
        {
          heading: 'Differences Between C and Other Languages',
          body: 'Unlike Python or Java, C does not have an automatic garbage collector, virtual machine overhead, or heavy runtime abstractions. Programmers have full control over memory allocation and hardware registers.',
          code: `// C provides unmatched raw performance
#include <stdio.h>

int main() {
    printf("Raw speed and bare-metal control\\n");
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h4 style="color:#0284c7; margin-top:0;">Why C Powers System Infrastructure:</h4>
    <ul style="color:#334155; line-height:1.7;">
      <li><strong>Operating Systems:</strong> Linux, Windows, macOS kernels</li>
      <li><strong>Databases:</strong> MySQL, PostgreSQL, SQLite</li>
      <li><strong>Interpreters:</strong> CPython, Ruby MRI, PHP Zend Engine</li>
      <li><strong>Embedded Devices:</strong> IoT devices, automotive systems, routers</li>
    </ul>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 3. C Get Started
  {
    id: 'c-getstarted',
    title: 'C Get Started',
    slug: 'c-getstarted',
    summary: 'Install a C compiler (GCC, Clang, or MSVC) and run your first compiled C executable.',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'To start programming in C, you need a text editor (like VS Code or CLion) and a C compiler (like GCC or Clang). GCC is part of MinGW on Windows and comes pre-installed on Linux and macOS.',
      sections: [
        {
          heading: 'Verifying GCC Compiler',
          body: 'Open your terminal or command prompt and test if GCC is installed:',
          code: `$ gcc --version
gcc (GCC) 13.2.0
Copyright (C) 2023 Free Software Foundation, Inc.`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#f8fafc; padding:16px; border-radius:8px; font-family:monospace;">
    <span style="color:#4f46e5;">$</span> gcc myprogram.c -o myprogram<br>
    <span style="color:#4f46e5;">$</span> ./myprogram<br>
    <span style="color:#38bdf8;">Program successfully executed!</span>
  </div>
</body>
</html>`,
          tips: ['Always use the -Wall flag when compiling with GCC (e.g. gcc -Wall main.c) to view all compiler warnings.']
        }
      ]
    }
  },

  // 4. C Syntax
  {
    id: 'c-syntax',
    title: 'C Syntax',
    slug: 'c-syntax',
    summary: 'Understanding headers, the main() entrypoint, statements, and semicolons.',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'Every C program follows a standard structure consisting of preprocessor directives, the main function, statements, and a return code.',
      sections: [
        {
          heading: 'Anatomy of a C File',
          body: 'Line 1 is #include <stdio.h>, a header file library allowing input/output functions like printf(). Line 3 is main(), the function where execution begins. Every statement ends with a semicolon (;).',
          code: `#include <stdio.h>

int main() {
    printf("Line 1 of execution.\\n");
    printf("Line 2 of execution.\\n");
    return 0; // 0 indicates successful termination
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin:0 0 10px;">C Syntax Rules</h4>
    <p>1. C is case-sensitive (<code>printf</code> is valid; <code>Printf</code> is a syntax error).</p>
    <p>2. Semicolons <code>;</code> mark the end of every statement.</p>
    <p>3. Curly braces <code>{ }</code> delimit code blocks.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 5. C Output
  {
    id: 'c-output',
    title: 'C Output (printf & Escape Sequences)',
    slug: 'c-output',
    summary: 'Printing text, formatted outputs, and escape characters like newline \\n and tab \\t.',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'In C, output is performed using the printf() function from stdio.h. You must explicitly output newline characters to move to the next console line.',
      sections: [
        {
          heading: 'Newline (\\n) and Horizontal Tab (\\t)',
          body: 'Use \\n for a new line and \\t for an indented column.',
          code: `#include <stdio.h>

int main() {
    printf("First line.\\nSecond line.\\n\\n");
    printf("Item\\tPrice\\tStock\\n");
    printf("Laptop\\t$999\\t14\\n");
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#f8fafc; padding:16px; border-radius:8px; font-family:monospace;">
    First line.<br>
    Second line.<br><br>
    Item&nbsp;&nbsp;&nbsp;&nbsp;Price&nbsp;&nbsp;&nbsp;Stock<br>
    Laptop&nbsp;&nbsp;$999&nbsp;&nbsp;&nbsp;&nbsp;14
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 6. C Comments
  {
    id: 'c-comments',
    title: 'C Comments',
    slug: 'c-comments',
    summary: 'Single-line comments // and multi-line comments /* */ to document code.',
    readTime: '3 min',
    category: 'C Tutorial',
    content: {
      overview: 'Comments explain C code and make it readable for teams. Comments are completely stripped by the C preprocessor and produce zero bytes of compiled code.',
      sections: [
        {
          heading: 'Single-line and Multi-line Comments',
          body: 'Use // for brief notes and /* ... */ for documentation blocks across multiple lines.',
          code: `#include <stdio.h>

// This is a single-line comment

/*
  This is a multi-line comment
  documenting the entire application logic.
*/
int main() {
    printf("Comments do not execute!\\n");
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <p style="color:#64748b;">// Preprocessor ignores comments completely</p>
  <div style="background:#f1f5f9; padding:12px; border-left:4px solid #4f46e5; border-radius:4px;">
    <strong>Output:</strong> Comments do not execute!
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 7. C Variables
  {
    id: 'c-variables',
    title: 'C Variables & Format Specifiers',
    slug: 'c-variables',
    summary: 'Declaring variables, assigning values, and printing them with format specifiers (%d, %f, %c, %s).',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'Variables are containers for storing data values. In C, variables must be explicitly declared with their data type before they can store data.',
      sections: [
        {
          heading: 'Format Specifiers in printf()',
          body: 'Format specifiers tell printf() what data type is being printed: %d for integers, %f for floats, %c for characters, and %s for strings.',
          code: `#include <stdio.h>

int main() {
    int age = 25;
    float rating = 4.85;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Rating: %.2f\\n", rating);
    printf("Grade: %c\\n", grade);
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Age: 25<br>
    Rating: 4.85<br>
    Grade: A
  </div>
</body>
</html>`,
          tips: ['Use %.2f to format floating-point numbers to exactly two decimal places.']
        }
      ]
    }
  },

  // 8. C Data Types
  {
    id: 'c-data-types',
    title: 'C Data Types & Memory Sizes',
    slug: 'c-data-types',
    summary: 'Primitive data types (int, float, double, char), bytes consumed, and range of values.',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'Data types in C determine the memory size and layout of variable storage. The sizeof operator returns the exact byte footprint of any type.',
      sections: [
        {
          heading: 'Core Types & sizeof Operator',
          body: 'Common sizes: char is 1 byte, int is typically 4 bytes, float is 4 bytes, and double is 8 bytes.',
          code: `#include <stdio.h>

int main() {
    printf("char size: %zu byte\\n", sizeof(char));
    printf("int size: %zu bytes\\n", sizeof(int));
    printf("float size: %zu bytes\\n", sizeof(float));
    printf("double size: %zu bytes\\n", sizeof(double));
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <table style="width:100%; border-collapse:collapse; text-align:left;">
    <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1;">
      <th style="padding:8px;">Type</th><th style="padding:8px;">Size</th><th style="padding:8px;">Specifier</th>
    </tr>
    <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:8px;">int</td><td style="padding:8px;">4 bytes</td><td style="padding:8px;">%d or %i</td></tr>
    <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:8px;">float</td><td style="padding:8px;">4 bytes</td><td style="padding:8px;">%f</td></tr>
    <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:8px;">double</td><td style="padding:8px;">8 bytes</td><td style="padding:8px;">%lf</td></tr>
    <tr><td style="padding:8px;">char</td><td style="padding:8px;">1 byte</td><td style="padding:8px;">%c</td></tr>
  </table>
</body>
</html>`
        }
      ]
    }
  },

  // 9. C Constants
  {
    id: 'c-constants',
    title: 'C Constants',
    slug: 'c-constants',
    summary: 'Using the const keyword and #define preprocessor directives to create immutable values.',
    readTime: '3 min',
    category: 'C Tutorial',
    content: {
      overview: 'When you do not want others (or yourself) to change existing variable values, use the const keyword. This declares the variable as "constant", which means unchangeable and read-only.',
      sections: [
        {
          heading: 'const Keyword and #define',
          body: 'Attempting to reassign a const variable produces a compilation error.',
          code: `#include <stdio.h>

#define MAX_USERS 1000

int main() {
    const float PI = 3.14159f;
    // PI = 3.0; // ERROR: assignment of read-only variable 'PI'
    
    printf("PI = %.5f, Max Users = %d\\n", PI, MAX_USERS);
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border-left:4px solid #4f46e5; padding:12px;">
    <strong>Compiler Safety:</strong> Declaring values as <code>const</code> allows the compiler to optimize register allocation and catch unintentional mutations at compile-time.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 10. C Operators
  {
    id: 'c-operators',
    title: 'C Operators',
    slug: 'c-operators',
    summary: 'Arithmetic (+, -, *, /, %), assignment, comparison (==, !=, <, >), and logical (&&, ||, !).',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'Operators are used to perform operations on variables and values. C supports arithmetic, assignment, relational/comparison, and bitwise operators.',
      sections: [
        {
          heading: 'Arithmetic and Modulo Division',
          body: 'Integer division truncates decimals in C (e.g. 5 / 2 yields 2). Use type casting or floating-point literals to retain decimals.',
          code: `#include <stdio.h>

int main() {
    int a = 17, b = 5;
    printf("Addition: %d\\n", a + b);
    printf("Integer Division: %d\\n", a / b); // 3
    printf("Modulo (Remainder): %d\\n", a % b); // 2
    printf("Float Division: %.2f\\n", (float)a / b); // 3.40
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Addition: 22<br>
    Integer Division: 3<br>
    Modulo (Remainder): 2<br>
    Float Division: 3.40
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 11. C Booleans
  {
    id: 'c-booleans',
    title: 'C Booleans (stdbool.h)',
    slug: 'c-booleans',
    summary: 'Working with true and false conditions in C using <stdbool.h> or integer 1 and 0.',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'Traditionally, C does not have a built-in boolean data type. Any non-zero integer is treated as true, and 0 is false. With C99, <stdbool.h> introduced the bool type with true and false values.',
      sections: [
        {
          heading: 'Using <stdbool.h>',
          body: 'Include <stdbool.h> to declare bool variables with true (1) and false (0):',
          code: `#include <stdio.h>
#include <stdbool.h>

int main() {
    bool isServerOnline = true;
    bool hasErrors = false;

    printf("Server Online: %d\\n", isServerOnline); // 1
    printf("Has Errors: %d\\n", hasErrors);       // 0
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Boolean Logic in C</h4>
    <p>In conditions, C treats <code>0</code> as <strong>false</strong> and any non-zero number (such as <code>1</code>, <code>-5</code>, or <code>100</code>) as <strong>true</strong>.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 12. C If...Else
  {
    id: 'c-conditions',
    title: 'C If...Else & Ternary Operator',
    slug: 'c-conditions',
    summary: 'Conditional branching with if, else if, else, and the shorthand ternary operator ? :.',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'C uses if...else statements to execute different blocks of code depending on whether specified conditions evaluate to non-zero (true) or zero (false).',
      sections: [
        {
          heading: 'If, Else If, and Ternary Operator',
          body: 'The ternary operator condition ? expr1 : expr2 provides an inline shorthand for simple decisions.',
          code: `#include <stdio.h>

int main() {
    int score = 88;

    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else {
        printf("Grade: C or below\\n");
    }

    // Shorthand Ternary
    const char* status = (score >= 60) ? "Passed" : "Failed";
    printf("Status: %s\\n", status);
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Grade: B<br>
    Status: Passed
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 13. C Switch
  {
    id: 'c-switch',
    title: 'C Switch Statement',
    slug: 'c-switch',
    summary: 'Multi-branch selection using switch, case, break, and default.',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'Use the switch statement to select one of many code blocks to be executed. It is cleaner and faster than long chains of if...else if statements when testing single discrete values.',
      sections: [
        {
          heading: 'Syntax of C switch',
          body: 'Each case must end with a break; statement to prevent execution from falling through to the next case.',
          code: `#include <stdio.h>

int main() {
    int dayOfWeek = 3;

    switch (dayOfWeek) {
        case 1: printf("Monday\\n"); break;
        case 2: printf("Tuesday\\n"); break;
        case 3: printf("Wednesday\\n"); break;
        case 4: printf("Thursday\\n"); break;
        case 5: printf("Friday\\n"); break;
        default: printf("Weekend\\n"); break;
    }
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin:0 0 8px;">Switch Execution:</h4>
    <p>Value matches <code>case 3</code>, prints <strong>Wednesday</strong>, and hits <code>break;</code> to exit the switch block.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 14. C While Loop
  {
    id: 'c-while-loop',
    title: 'C While and Do/While Loop',
    slug: 'c-while-loop',
    summary: 'Repeating execution while a condition is true, and guaranteed execution once with do...while.',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'Loops can execute a block of code as long as a specified condition is reached. While evaluates the condition before each iteration, whereas do...while runs at least once before checking.',
      sections: [
        {
          heading: 'While vs Do/While Loop',
          body: 'Notice how the counter variable must be incremented inside the loop body to avoid infinite loops:',
          code: `#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 3) {
        printf("While count: %d\\n", i);
        i++;
    }

    int j = 10;
    do {
        printf("Do/While ran once with j = %d\\n", j);
        j++;
    } while (j < 5); // Condition is false, loop terminates

    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    While count: 1<br>
    While count: 2<br>
    While count: 3<br>
    Do/While ran once with j = 10
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 15. C For Loop
  {
    id: 'c-for-loop',
    title: 'C For Loop & Nested Loops',
    slug: 'c-for-loop',
    summary: 'Counting loops with initialization, condition, increment, and multi-dimensional nested loops.',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop.',
      sections: [
        {
          heading: 'Nested Loops for 2D Grid Printing',
          body: 'An outer loop controls rows and an inner loop controls columns:',
          code: `#include <stdio.h>

int main() {
    for (int r = 1; r <= 3; r++) {
        for (int c = 1; c <= 3; c++) {
            printf("[%d,%d] ", r, c);
        }
        printf("\\n");
    }
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    [1,1] [1,2] [1,3]<br>
    [2,1] [2,2] [2,3]<br>
    [3,1] [3,2] [3,3]
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 16. C Break and Continue
  {
    id: 'c-break-continue',
    title: 'C Break and Continue',
    slug: 'c-break-continue',
    summary: 'Early loop termination with break, and skipping current iterations with continue.',
    readTime: '3 min',
    category: 'C Tutorial',
    content: {
      overview: 'The break statement jumps entirely out of a loop, while continue breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration.',
      sections: [
        {
          heading: 'Demonstrating Break and Continue',
          body: 'Skip odd numbers with continue, and exit early when value reaches 8:',
          code: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i % 2 != 0) {
            continue; // Skip odds
        }
        if (i == 8) {
            break; // Stop loop entirely
        }
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Loop Output:</h4>
    <p style="font-family:monospace; font-size:18px; color:#4f46e5; margin:0;">2 4 6</p>
    <p style="color:#64748b; margin-top:8px;">Skipped odd numbers (1,3,5,7), printed 2,4,6, then stopped at 8.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
