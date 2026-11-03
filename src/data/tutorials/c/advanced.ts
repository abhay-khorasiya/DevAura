import { TutorialChapter } from '../../../types';

export const cAdvancedChapters: TutorialChapter[] = [
  // 17. C Arrays
  {
    id: 'c-arrays',
    title: 'C Arrays & Multidimensional Arrays',
    slug: 'c-arrays',
    summary: 'Fixed-size contiguous memory blocks, 0-indexed elements, and 2D matrices.',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. In C, array elements occupy contiguous memory slots.',
      sections: [
        {
          heading: 'Single-Dimensional and 2D Arrays',
          body: 'Calculate the number of elements using sizeof(arr) / sizeof(arr[0]).',
          code: `#include <stdio.h>

int main() {
    int scores[4] = {95, 88, 72, 90};
    int length = sizeof(scores) / sizeof(scores[0]);

    for (int i = 0; i < length; i++) {
        printf("Score %d: %d\\n", i, scores[i]);
    }

    // 2D Matrix (2 rows x 3 columns)
    int matrix[2][3] = { {1, 2, 3}, {4, 5, 6} };
    printf("Matrix[1][2] = %d\\n", matrix[1][2]); // 6
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Score 0: 95<br>
    Score 1: 88<br>
    Score 2: 72<br>
    Score 3: 90<br>
    Matrix[1][2] = 6
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 18. C Strings
  {
    id: 'c-strings',
    title: 'C Strings & The Null Terminator (\\0)',
    slug: 'c-strings',
    summary: 'In C, strings are null-terminated character arrays ending with \\0.',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'Strings in C are not a primitive object type. They are simply one-dimensional arrays of characters terminated by a null character \'\\0\' (ASCII value 0).',
      sections: [
        {
          heading: 'String Creation & The Null Byte',
          body: 'When declaring char greetings[] = "Hello"; C automatically allocates 6 bytes: 5 characters plus the invisible trailing \'\\0\'.',
          code: `#include <stdio.h>

int main() {
    char greetings[] = "Hello";
    printf("%s World!\\n", greetings);

    // Explicit character array with null byte
    char explicitStr[] = {'D', 'e', 'v', 'A', 'u', 'r', 'a', '\\0'};
    printf("%s\\n", explicitStr);
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin:0 0 10px;">Memory Layout of "Hello":</h4>
    <div style="display:flex; gap:6px; font-family:monospace;">
      <span style="border:1px solid #6366f1; background:#e0e7ff; padding:8px 12px; border-radius:4px;">'H'</span>
      <span style="border:1px solid #6366f1; background:#e0e7ff; padding:8px 12px; border-radius:4px;">'e'</span>
      <span style="border:1px solid #6366f1; background:#e0e7ff; padding:8px 12px; border-radius:4px;">'l'</span>
      <span style="border:1px solid #6366f1; background:#e0e7ff; padding:8px 12px; border-radius:4px;">'l'</span>
      <span style="border:1px solid #6366f1; background:#e0e7ff; padding:8px 12px; border-radius:4px;">'o'</span>
      <span style="border:1px solid #ef4444; background:#fee2e2; color:#b91c1c; padding:8px 12px; border-radius:4px;">'\\0'</span>
    </div>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 19. C String Functions
  {
    id: 'c-string-functions',
    title: 'C String Functions (strlen, strcat, strcpy, strcmp)',
    slug: 'c-string-functions',
    summary: 'Standard library string manipulation functions from <string.h>.',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'C provides a library called <string.h> that provides essential functions to measure, concatenate, copy, and compare character arrays.',
      sections: [
        {
          heading: 'Core String Utilities',
          body: 'strlen() computes length, strcat() appends, strcpy() copies, and strcmp() tests alphabetical equality (returning 0 if equal).',
          code: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[50] = "Dev";
    char str2[] = "Aura";
    char copy[50];

    printf("Length of str1: %zu\\n", strlen(str1)); // 3

    strcat(str1, str2); // str1 is now "DevAura"
    printf("Concatenated: %s\\n", str1);

    strcpy(copy, str1);
    printf("Copied string: %s\\n", copy);

    // Compare
    int result = strcmp("Apple", "Apple");
    printf("strcmp result (0 means identical): %d\\n", result);
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Length of str1: 3<br>
    Concatenated: DevAura<br>
    Copied string: DevAura<br>
    strcmp result (0 means identical): 0
  </div>
</body>
</html>`,
          tips: ['Always make sure destination buffers have sufficient byte capacity before calling strcat or strcpy to avoid buffer overflows.']
        }
      ]
    }
  },

  // 20. C User Input
  {
    id: 'c-user-input',
    title: 'C User Input (scanf & fgets)',
    slug: 'c-user-input',
    summary: 'Reading console inputs from users using scanf() and fgets() for line inputs.',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'You have already learned that printf() is used to output values. To get user input, you can use the scanf() function.',
      sections: [
        {
          heading: 'scanf() and Buffer Safety',
          body: 'Notice the memory address operator (&) passed to scanf() so it knows where to store the typed bytes. For full strings containing spaces, prefer fgets() over scanf().',
          code: `#include <stdio.h>

int main() {
    int age;
    char fullName[50];

    printf("Enter your age: ");
    scanf("%d", &age); // Pass memory address of age

    // Clear newline from buffer before reading line
    while (getchar() != '\\n');

    printf("Enter full name: ");
    fgets(fullName, sizeof(fullName), stdin);

    printf("Welcome %s, age %d!\\n", fullName, age);
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Interactive Input Simulator:</h4>
    <p>Enter your age: <span style="background:#e0e7ff; padding:2px 8px; border-radius:4px; font-family:monospace;">24</span></p>
    <p>Enter full name: <span style="background:#e0e7ff; padding:2px 8px; border-radius:4px; font-family:monospace;">Alex Mercer</span></p>
    <hr style="border:0; border-top:1px solid #cbd5e1;">
    <p style="color:#4f46e5; font-weight:bold;">Output: Welcome Alex Mercer, age 24!</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 21. C Memory Address
  {
    id: 'c-memory-address',
    title: 'C Memory Address (& Reference Operator)',
    slug: 'c-memory-address',
    summary: 'Every variable occupies an address in computer RAM, accessible using &.',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'When a variable is created in C, a memory address is assigned to the variable. The memory address is the location of where the variable is stored on the computer RAM.',
      sections: [
        {
          heading: 'Displaying Hexadecimal Addresses with %p',
          body: 'Use the & (address-of) operator with format specifier %p:',
          code: `#include <stdio.h>

int main() {
    int myAge = 43;
    printf("Value: %d\\n", myAge);
    printf("RAM Address of myAge: %p\\n", (void*)&myAge);
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Value: 43<br>
    RAM Address of myAge: 0x7ffeefbff568
  </div>
  <p style="color:#64748b; font-size:13px; margin-top:10px;">The address is printed in hexadecimal format (e.g. 0x...).</p>
</body>
</html>`
        }
      ]
    }
  },

  // 22. C Pointers
  {
    id: 'c-pointers',
    title: 'C Pointers & Dereferencing (*)',
    slug: 'c-pointers',
    summary: 'A pointer is a variable that stores the memory address of another variable.',
    readTime: '6 min',
    category: 'C Tutorial',
    content: {
      overview: 'Pointers are the cornerstone of high-performance C programming. Pointers allow dynamic memory allocation, efficient array manipulation, and passing data structures without copying overhead.',
      sections: [
        {
          heading: 'Pointer Declaration and Dereferencing',
          body: 'int* ptr declares a pointer to an integer. The dereference operator *ptr retrieves the value stored at that address.',
          code: `#include <stdio.h>

int main() {
    int myAge = 43;     // An int variable
    int* ptr = &myAge;  // A pointer variable that stores the address of myAge

    printf("Value of myAge: %d\\n", myAge);
    printf("Memory address of myAge: %p\\n", (void*)ptr);
    printf("Dereferenced value (*ptr): %d\\n", *ptr);

    // Modify the variable through the pointer
    *ptr = 44;
    printf("Updated myAge: %d\\n", myAge); // 44
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Value of myAge: 43<br>
    Memory address of myAge: 0x7ffee4b6a4a4<br>
    Dereferenced value (*ptr): 43<br>
    Updated myAge: 44
  </div>
</body>
</html>`,
          tips: ['Always initialize pointers. Uninitialized pointers point to random memory addresses and cause segmentation faults.']
        }
      ]
    }
  },

  // 23. C Pointers & Arrays
  {
    id: 'c-pointers-arrays',
    title: 'C Pointers & Arrays',
    slug: 'c-pointers-arrays',
    summary: 'The name of an array points to its first element: pointer arithmetic with *(arr + i).',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'In C, an array name decays into a pointer to its first element. That means arr is equivalent to &arr[0].',
      sections: [
        {
          heading: 'Pointer Arithmetic',
          body: 'Incrementing a pointer (ptr + 1) moves forward by sizeof(type) bytes in memory.',
          code: `#include <stdio.h>

int main() {
    int numbers[4] = {10, 20, 30, 40};

    // Access elements via pointer arithmetic
    for (int i = 0; i < 4; i++) {
        printf("Element %d: %d (at %p)\\n", i, *(numbers + i), (void*)(numbers + i));
    }
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Element 0: 10 (at 0x7ffcc12)<br>
    Element 1: 20 (at 0x7ffcc16)<br>
    Element 2: 30 (at 0x7ffcc1a)<br>
    Element 3: 40 (at 0x7ffcc1e)
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 24. C Functions
  {
    id: 'c-functions',
    title: 'C Functions',
    slug: 'c-functions',
    summary: 'Defining and executing modular functions with return types.',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. Functions are used to perform certain actions and ensure code reuse.',
      sections: [
        {
          heading: 'Declaring and Invoking Functions',
          body: 'void functions return no data; typed functions return a value using the return keyword:',
          code: `#include <stdio.h>

void printGreeting() {
    printf("Hello from inside a C function!\\n");
}

int calculateSum(int a, int b) {
    return a + b;
}

int main() {
    printGreeting();
    int total = calculateSum(15, 27);
    printf("Sum: %d\\n", total);
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Hello from inside a C function!<br>
    Sum: 42
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 25. C Function Parameters
  {
    id: 'c-function-parameters',
    title: 'C Function Parameters & Pass by Reference',
    slug: 'c-function-parameters',
    summary: 'Passing arguments by value vs passing pointers by reference to mutate caller state.',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'By default, C passes parameters by value (copying values). To modify a variable inside a function so changes reflect in the caller, you must pass a pointer (pass by reference).',
      sections: [
        {
          heading: 'Pass by Value vs Reference (Swapping Values)',
          body: 'Without pointers, swapping inside a function has no effect on the caller variables.',
          code: `#include <stdio.h>

void swap(int* x, int* y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

int main() {
    int a = 100, b = 200;
    printf("Before swap: a = %d, b = %d\\n", a, b);

    swap(&a, &b); // Pass addresses
    printf("After swap:  a = %d, b = %d\\n", a, b);
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin:0 0 10px;">Pass by Reference Output:</h4>
    <p>Before swap: a = 100, b = 200</p>
    <p style="color:#0284c7; font-weight:bold;">After swap:  a = 200, b = 100</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 26. C Function Declaration
  {
    id: 'c-function-declaration',
    title: 'C Function Declaration & Header Prototypes',
    slug: 'c-function-declaration',
    summary: 'Forward function prototypes allow functions to be placed anywhere in source files.',
    readTime: '3 min',
    category: 'C Tutorial',
    content: {
      overview: 'A function consists of two parts: Declaration (return type, name, and parameters) and Definition (the body of the function). Declaring prototypes before main() prevents implicit declaration warnings.',
      sections: [
        {
          heading: 'Prototypes and Separation',
          body: 'Declare the prototype above main and define the body below main:',
          code: `#include <stdio.h>

// Function declaration (prototype)
int multiply(int x, int y);

int main() {
    int result = multiply(6, 7);
    printf("6 * 7 = %d\\n", result);
    return 0;
}

// Function definition
int multiply(int x, int y) {
    return x * y;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    6 * 7 = 42
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 27. C Recursion
  {
    id: 'c-recursion',
    title: 'C Recursion',
    slug: 'c-recursion',
    summary: 'Functions calling themselves to solve divide-and-conquer problems, with a base case.',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve.',
      sections: [
        {
          heading: 'Factorial with Recursion',
          body: 'Every recursive function MUST have a base condition where it returns without recurring, or it will cause stack overflow.',
          code: `#include <stdio.h>

int factorial(int n) {
    // Base case
    if (n <= 1) return 1;
    // Recursive call
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    printf("%d! = %d\\n", num, factorial(num)); // 120
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    5! = 120
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 28. C Math Functions
  {
    id: 'c-math',
    title: 'C Math Functions (<math.h>)',
    slug: 'c-math',
    summary: 'Square roots (sqrt), powers (pow), ceil, floor, and trigonometry in <math.h>.',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'The <math.h> library includes standard mathematical functions for advanced numerical computations. (Remember to link with -lm when compiling with GCC on Linux).',
      sections: [
        {
          heading: 'Standard Math Functions',
          body: 'sqrt() calculates square root, ceil() rounds up, floor() rounds down, and pow() raises to an exponent:',
          code: `#include <stdio.h>
#include <math.h>

int main() {
    printf("Square root of 64: %.2f\\n", sqrt(64));
    printf("Ceiling of 3.14: %.2f\\n", ceil(3.14));
    printf("Floor of 3.89: %.2f\\n", floor(3.89));
    printf("2 raised to 8: %.2f\\n", pow(2, 8));
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Square root of 64: 8.00<br>
    Ceiling of 3.14: 4.00<br>
    Floor of 3.89: 3.00<br>
    2 raised to 8: 256.00
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 29. C Files
  {
    id: 'c-files',
    title: 'C Files (Create, Write, Read with fopen & fclose)',
    slug: 'c-files',
    summary: 'Working with disk files using FILE*, fopen(), fprintf(), fgets(), and fclose().',
    readTime: '6 min',
    category: 'C Tutorial',
    content: {
      overview: 'In C, files are handled using a pointer of type FILE. Common file modes include "w" (write), "a" (append), and "r" (read).',
      sections: [
        {
          heading: 'Writing and Reading a Text File',
          body: 'Always verify if the file pointer is non-null before reading or writing, and always call fclose() when finished.',
          code: `#include <stdio.h>

int main() {
    // 1. Create and write to a file
    FILE *fptr = fopen("test.txt", "w");
    if (fptr != NULL) {
        fprintf(fptr, "Hello from DevAura File System!\\n");
        fclose(fptr);
    }

    // 2. Read from file
    fptr = fopen("test.txt", "r");
    char buffer[100];
    if (fptr != NULL) {
        while (fgets(buffer, sizeof(buffer), fptr)) {
            printf("Read: %s", buffer);
        }
        fclose(fptr);
    }
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">File I/O Simulation</h4>
    <p>File created: <code>test.txt</code></p>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Read: Hello from DevAura File System!</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 30. C Structures
  {
    id: 'c-structures',
    title: 'C Structures (struct)',
    slug: 'c-structures',
    summary: 'Grouping different data types into a single custom compound data structure.',
    readTime: '5 min',
    category: 'C Tutorial',
    content: {
      overview: 'Structures (also called structs) are a way to group several related variables into one place. Each variable in the structure is known as a member of the structure.',
      sections: [
        {
          heading: 'Defining and Accessing Structs',
          body: 'Use the dot (.) operator to access members of a struct variable, or arrow (->) for struct pointers.',
          code: `#include <stdio.h>
#include <string.h>

struct Student {
    char name[30];
    int rollNumber;
    float gpa;
};

int main() {
    struct Student s1;
    strcpy(s1.name, "Elena Vance");
    s1.rollNumber = 1042;
    s1.gpa = 3.92;

    printf("Student: %s (ID: %d), GPA: %.2f\\n", s1.name, s1.rollNumber, s1.gpa);
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Student: Elena Vance (ID: 1042), GPA: 3.92
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 31. C Enums
  {
    id: 'c-enums',
    title: 'C Enums (Enumerations)',
    slug: 'c-enums',
    summary: 'Named integer constants to improve code readability and represent state machines.',
    readTime: '4 min',
    category: 'C Tutorial',
    content: {
      overview: 'An enum is a special type that represents a group of constants (unchangeable values). By default, the first item has the value 0, the second has the value 1, and so on.',
      sections: [
        {
          heading: 'Using Enums in Switch Logic',
          body: 'Enums make status codes and states clean and self-documenting:',
          code: `#include <stdio.h>

enum Level {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
};

int main() {
    enum Level currentSetting = MEDIUM;

    switch (currentSetting) {
        case LOW: printf("Low speed\\n"); break;
        case MEDIUM: printf("Optimal speed\\n"); break;
        case HIGH: printf("Maximum turbo\\n"); break;
    }
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Optimal speed
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 32. C Memory Management
  {
    id: 'c-memory-management',
    title: 'C Memory Management (malloc, calloc, realloc, free)',
    slug: 'c-memory-management',
    summary: 'Dynamic heap memory allocation, resizing buffers, and preventing memory leaks with free().',
    readTime: '6 min',
    category: 'C Tutorial',
    content: {
      overview: 'Dynamic memory is allocated at runtime from the heap using malloc() or calloc(). Unlike stack variables, heap memory persists until explicitly released with free().',
      sections: [
        {
          heading: 'malloc(), free(), and NULL Pointer Checks',
          body: 'Always check if malloc returned NULL before using allocated pointers to handle out-of-memory states:',
          code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 3;
    int *arr = (int*)malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    arr[0] = 10;
    arr[1] = 20;
    arr[2] = 30;

    printf("Dynamic array: %d, %d, %d\\n", arr[0], arr[1], arr[2]);

    // Free allocated memory to prevent memory leaks
    free(arr);
    arr = NULL; // Prevent dangling pointer
    printf("Memory freed successfully.\\n");
    return 0;
}`,
          codeLanguage: 'c',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Dynamic array: 10, 20, 30<br>
    Memory freed successfully.
  </div>
</body>
</html>`,
          tips: ['Every call to malloc() or calloc() must have a matching free() call when the buffer is no longer needed.']
        }
      ]
    }
  }
];
