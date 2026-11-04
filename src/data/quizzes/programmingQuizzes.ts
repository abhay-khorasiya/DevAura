import { QuizQuestion } from '../../types';

export const programmingQuizzes: QuizQuestion[] = [
  // ==================== PYTHON ====================
  {
    id: 'q-py-1',
    language: 'python',
    question: 'How do you start writing an IF statement in Python?',
    options: ['if x > y then:', 'if (x > y)', 'if x > y:', 'if x > y then'],
    correctAnswerIndex: 2,
    explanation: 'Python uses `if condition:` followed by an indented block of code.'
  },
  {
    id: 'q-py-2',
    language: 'python',
    question: 'Which method can be used to remove any whitespace from both the beginning and end of a string in Python?',
    options: ['strip()', 'trim()', 'clean()', 'len()'],
    correctAnswerIndex: 0,
    explanation: 'In Python, `strip()` removes leading and trailing whitespace. (`trim()` is used in JavaScript).'
  },
  {
    id: 'q-py-3',
    language: 'python',
    question: 'What is the output of `type(10.5)` in Python?',
    options: ['<class \'int\'>', '<class \'double\'>', '<class \'float\'>', '<class \'decimal\'>'],
    correctAnswerIndex: 2,
    explanation: 'Decimal numbers in Python belong to the `<class \'float\'>` data type.'
  },
  {
    id: 'q-py-4',
    language: 'python',
    question: 'Which collection type in Python is ordered, changeable, and allows duplicate members?',
    options: ['Set', 'Dictionary', 'Tuple', 'List'],
    correctAnswerIndex: 3,
    explanation: 'A `List` is ordered, mutable (changeable), and permits duplicate items. Tuples are immutable; Sets are unordered and unique.'
  },
  {
    id: 'q-py-5',
    language: 'python',
    question: 'How do you create a function in Python?',
    options: ['function myFunc():', 'def myFunc():', 'create myFunc():', 'func myFunc():'],
    correctAnswerIndex: 1,
    explanation: 'The `def` keyword introduces a function definition in Python.'
  },
  {
    id: 'q-py-6',
    language: 'python',
    question: 'What is the result of `[x * 2 for x in [1, 2, 3]]` in Python?',
    options: ['[1, 2, 3, 1, 2, 3]', '[2, 4, 6]', '2, 4, 6', 'Error'],
    correctAnswerIndex: 1,
    explanation: 'This is a list comprehension that doubles each item, yielding `[2, 4, 6]`.'
  },
  {
    id: 'q-py-7',
    language: 'python',
    question: 'Which keyword is used to handle exceptions in Python?',
    options: ['catch', 'except', 'handle', 'rescue'],
    correctAnswerIndex: 1,
    explanation: 'Python uses `try: ... except Exception:` syntax to catch and handle exceptions.'
  },
  {
    id: 'q-py-8',
    language: 'python',
    question: 'What does the `len()` function return when passed a dictionary?',
    options: [
      'The number of characters in key names',
      'The number of key-value pairs',
      'The memory size in bytes',
      'The number of values only'
    ],
    correctAnswerIndex: 1,
    explanation: 'When passed to a dictionary, `len()` returns the total number of keys (key-value pairs).'
  },

  // ==================== JAVA ====================
  {
    id: 'q-java-1',
    language: 'java',
    question: 'What is the correct syntax to output "Hello World" in Java?',
    options: [
      'Console.WriteLine("Hello World");',
      'echo("Hello World");',
      'System.out.println("Hello World");',
      'print("Hello World");'
    ],
    correctAnswerIndex: 2,
    explanation: '`System.out.println()` prints text to the standard console followed by a newline.'
  },
  {
    id: 'q-java-2',
    language: 'java',
    question: 'Which component is responsible for executing compiled Java bytecode?',
    options: ['JDK', 'JVM', 'JRE', 'JIT Compiler only'],
    correctAnswerIndex: 1,
    explanation: 'The Java Virtual Machine (JVM) interprets and executes compiled `.class` bytecode.'
  },
  {
    id: 'q-java-3',
    language: 'java',
    question: 'Which data type is used to store whole numbers without decimals in Java?',
    options: ['float', 'double', 'int', 'String'],
    correctAnswerIndex: 2,
    explanation: '`int` is the standard 32-bit signed two\'s complement integer in Java.'
  },
  {
    id: 'q-java-4',
    language: 'java',
    question: 'How do you create a variable with the floating point number 2.8 in Java?',
    options: ['num x = 2.8', 'float x = 2.8f;', 'x = 2.8;', 'int x = 2.8;'],
    correctAnswerIndex: 1,
    explanation: 'Java requires the `f` suffix for single-precision floats (`float x = 2.8f;`), otherwise literals default to `double`.'
  },
  {
    id: 'q-java-5',
    language: 'java',
    question: 'Which keyword prevents a Java class from being subclassed (inherited)?',
    options: ['abstract', 'final', 'static', 'sealed'],
    correctAnswerIndex: 1,
    explanation: 'A `final` class cannot be extended by any other class.'
  },
  {
    id: 'q-java-6',
    language: 'java',
    question: 'Which collection class implements a resizable array in Java?',
    options: ['LinkedList', 'ArrayList', 'HashSet', 'HashMap'],
    correctAnswerIndex: 1,
    explanation: '`ArrayList` implements the `List` interface backed by a dynamically resizing array.'
  },

  // ==================== C ====================
  {
    id: 'q-c-1',
    language: 'c',
    question: 'Which function is the starting entry point for any C program?',
    options: ['start()', 'run()', 'main()', 'init()'],
    correctAnswerIndex: 2,
    explanation: 'In C, execution begins at `int main(void)` or `int main(int argc, char *argv[])`.'
  },
  {
    id: 'q-c-2',
    language: 'c',
    question: 'Which operator is used to get the memory address of a variable in C?',
    options: ['*', '&', '%', '->'],
    correctAnswerIndex: 1,
    explanation: 'The ampersand `&` is the address-of operator; `*` dereferences a pointer.'
  },
  {
    id: 'q-c-3',
    language: 'c',
    question: 'Which header file must be included to use `printf()` and `scanf()`?',
    options: ['<stdlib.h>', '<stdio.h>', '<string.h>', '<conio.h>'],
    correctAnswerIndex: 1,
    explanation: '`<stdio.h>` defines standard input/output stream functions including `printf()`.'
  },
  {
    id: 'q-c-4',
    language: 'c',
    question: 'Which function dynamically allocates memory on the heap in C?',
    options: ['alloc()', 'malloc()', 'create()', 'new()'],
    correctAnswerIndex: 1,
    explanation: '`malloc(size_t size)` allocates the requested number of bytes on the heap and returns a `void*`.'
  },
  {
    id: 'q-c-5',
    language: 'c',
    question: 'What function must be called to release dynamically allocated memory in C to prevent memory leaks?',
    options: ['delete()', 'release()', 'free()', 'clear()'],
    correctAnswerIndex: 2,
    explanation: '`free(ptr)` deallocates memory blocks previously reserved by `malloc` or `calloc`.'
  },
  {
    id: 'q-c-6',
    language: 'c',
    question: 'What character terminates strings in C?',
    options: ['\\n', '\\t', '\\0', '$'],
    correctAnswerIndex: 2,
    explanation: 'C strings are null-terminated arrays of characters ending with the null byte `\\0` (ASCII 0).'
  },

  // ==================== C++ ====================
  {
    id: 'q-cpp-1',
    language: 'cpp',
    question: 'Which header file is typically included for standard input and output streams in C++?',
    options: ['<stdio.h>', '<iostream>', '<stream>', '<iomanip>'],
    correctAnswerIndex: 1,
    explanation: '`<iostream>` contains standard stream objects like `std::cout` and `std::cin`.'
  },
  {
    id: 'q-cpp-2',
    language: 'cpp',
    question: 'Which operator is used to dynamically allocate memory for an object in C++?',
    options: ['malloc', 'create', 'new', 'alloc'],
    correctAnswerIndex: 2,
    explanation: '`new` allocates memory and invokes the object\'s constructor in C++.'
  },
  {
    id: 'q-cpp-3',
    language: 'cpp',
    question: 'What is the default access specifier for members of a `class` in C++?',
    options: ['public', 'protected', 'private', 'internal'],
    correctAnswerIndex: 2,
    explanation: 'In a C++ `class`, members are `private` by default. In a `struct`, members default to `public`.'
  },
  {
    id: 'q-cpp-4',
    language: 'cpp',
    question: 'What is the standard template library (STL) dynamic array container in C++?',
    options: ['std::list', 'std::vector', 'std::deque', 'std::array'],
    correctAnswerIndex: 1,
    explanation: '`std::vector` represents a contiguous dynamically resizable sequence container.'
  },
  {
    id: 'q-cpp-5',
    language: 'cpp',
    question: 'What keyword allows a base class method to be overridden polymorphically in derived classes?',
    options: ['override', 'virtual', 'abstract', 'dynamic'],
    correctAnswerIndex: 1,
    explanation: 'Declaring a method `virtual` enables dynamic dispatch and runtime polymorphism.'
  },
  {
    id: 'q-cpp-6',
    language: 'cpp',
    question: 'What does RAII stand for in modern C++?',
    options: [
      'Rapid Application Interface Integration',
      'Resource Acquisition Is Initialization',
      'Runtime Allocation and Initialization Index',
      'Recursive Array Iterator Instance'
    ],
    correctAnswerIndex: 1,
    explanation: 'RAII binds the lifecycle of resources (memory, file handles, sockets) to object lifetimes.'
  },

  // ==================== C# ====================
  {
    id: 'q-csharp-1',
    language: 'csharp',
    question: 'What is the runtime environment that executes C# programs?',
    options: ['JVM', 'Node.js', 'CLR (Common Language Runtime)', 'Dalvik'],
    correctAnswerIndex: 2,
    explanation: 'The .NET Common Language Runtime (CLR) manages memory, security, and execution for C# code.'
  },
  {
    id: 'q-csharp-2',
    language: 'csharp',
    question: 'Which feature in C# provides declarative querying over collections, databases, and XML?',
    options: ['SQL#', 'LINQ', 'QueryX', 'LambdaSQL'],
    correctAnswerIndex: 1,
    explanation: 'Language Integrated Query (LINQ) brings native querying syntax to C#.'
  },
  {
    id: 'q-csharp-3',
    language: 'csharp',
    question: 'Which keyword allows asynchronous operations to be awaited cleanly in C#?',
    options: ['defer', 'wait', 'await', 'async_wait'],
    correctAnswerIndex: 2,
    explanation: 'The `await` keyword suspends evaluation of the enclosing `async` method until the Task completes.'
  },
  {
    id: 'q-csharp-4',
    language: 'csharp',
    question: 'What is the base class of all types in the .NET framework?',
    options: ['System.Root', 'System.Type', 'System.Object', 'System.Base'],
    correctAnswerIndex: 2,
    explanation: '`System.Object` is the ultimate root of the .NET type hierarchy; all types inherit from it.'
  },
  {
    id: 'q-csharp-5',
    language: 'csharp',
    question: 'What syntax allows string interpolation in C#?',
    options: ['$"Hello, {name}!"', '@"Hello, {name}!"', '#"Hello, {name}!"', '&"Hello, {name}!"'],
    correctAnswerIndex: 0,
    explanation: 'The `$` character before quotation marks identifies an interpolated string.'
  },
  {
    id: 'q-csharp-6',
    language: 'csharp',
    question: 'Which keyword declares a property with automatic getter and setter in C#?',
    options: [
      'public int Age { get; set; }',
      'public int Age = get, set;',
      'property int Age;',
      'int Age -> get, set'
    ],
    correctAnswerIndex: 0,
    explanation: '`public int Age { get; set; }` defines an auto-implemented property.'
  },

  // ==================== PHP ====================
  {
    id: 'q-php-1',
    language: 'php',
    question: 'What does PHP stand for?',
    options: [
      'Private Home Page',
      'PHP: Hypertext Preprocessor',
      'Personal Hypertext Processor',
      'Precompiled HTML Program'
    ],
    correctAnswerIndex: 1,
    explanation: 'PHP is a recursive acronym standing for "PHP: Hypertext Preprocessor".'
  },
  {
    id: 'q-php-2',
    language: 'php',
    question: 'All variable names in PHP must begin with which symbol?',
    options: ['&', '@', '$', '#'],
    correctAnswerIndex: 2,
    explanation: 'Variables in PHP are denoted with a leading dollar sign, like `$username`.'
  },
  {
    id: 'q-php-3',
    language: 'php',
    question: 'Which superglobal array collects values sent from a form using `method="POST"`?',
    options: ['$_POST', '$POST', '$_REQUEST_POST', '$HTTP_POST_VARS'],
    correctAnswerIndex: 0,
    explanation: '`$_POST` contains an associative array of variables passed via HTTP POST.'
  },
  {
    id: 'q-php-4',
    language: 'php',
    question: 'Which operator is used to concatenate two strings in PHP?',
    options: ['+', '.', '&', ','],
    correctAnswerIndex: 1,
    explanation: 'The dot operator `.` concatenates string operands in PHP (`$full = $first . $last`).'
  },
  {
    id: 'q-php-5',
    language: 'php',
    question: 'What is the modern, secure database extension recommended for MySQL in PHP?',
    options: ['mysql_query', 'PDO (PHP Data Objects)', 'php_sql', 'db_driver'],
    correctAnswerIndex: 1,
    explanation: 'PDO provides a consistent, prepared-statement abstraction layer that prevents SQL injection.'
  },
  {
    id: 'q-php-6',
    language: 'php',
    question: 'How do you write a comment on a single line in PHP?',
    options: ['// or #', '<!-- -->', '/* */', 'REM'],
    correctAnswerIndex: 0,
    explanation: 'PHP supports `//` as well as `#` for single-line comments.'
  },

  // ==================== GO ====================
  {
    id: 'q-go-1',
    language: 'go',
    question: 'Which company originally created the Go programming language?',
    options: ['Microsoft', 'Apple', 'Google', 'Meta'],
    correctAnswerIndex: 2,
    explanation: 'Go was designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson.'
  },
  {
    id: 'q-go-2',
    language: 'go',
    question: 'How do you declare and initialize a variable with inferred type in Go?',
    options: ['var x := 10', 'x := 10', 'let x = 10', 'val x = 10'],
    correctAnswerIndex: 1,
    explanation: 'The short variable declaration operator `:=` initializes a variable with inferred type.'
  },
  {
    id: 'q-go-3',
    language: 'go',
    question: 'What mechanism does Go provide for concurrent execution of functions?',
    options: ['Threads', 'Tasks', 'Goroutines', 'Processes'],
    correctAnswerIndex: 2,
    explanation: 'A goroutine is a lightweight thread of execution managed by the Go runtime via the `go` keyword.'
  },
  {
    id: 'q-go-4',
    language: 'go',
    question: 'How do goroutines communicate and synchronize safely in Go?',
    options: ['Shared global mutexes', 'Channels', 'Semaphores', 'Volatile memory'],
    correctAnswerIndex: 1,
    explanation: 'Channels (`chan`) allow goroutines to synchronize and pass values following the CSP model.'
  },
  {
    id: 'q-go-5',
    language: 'go',
    question: 'How does Go handle errors without traditional try-catch exceptions?',
    options: [
      'Functions return error as an explicit second return value',
      'All errors crash the program immediately',
      'Errors are written to a global log buffer',
      'Using the throw keyword'
    ],
    correctAnswerIndex: 0,
    explanation: 'Idiomatic Go functions return `(result, error)` tuples, checked with `if err != nil`.'
  },
  {
    id: 'q-go-6',
    language: 'go',
    question: 'What keyword schedules a function call to execute right before the surrounding function returns?',
    options: ['finally', 'defer', 'delay', 'postpone'],
    correctAnswerIndex: 1,
    explanation: '`defer` postpones execution of a function until the surrounding function finishes, ideal for cleanup.'
  },

  // ==================== RUST ====================
  {
    id: 'q-rust-1',
    language: 'rust',
    question: 'What core concept ensures memory safety without a garbage collector in Rust?',
    options: ['Virtual machine', 'Ownership and Borrowing', 'Reference counting only', 'Manual malloc'],
    correctAnswerIndex: 1,
    explanation: 'Rust enforces memory safety at compile-time via its strict ownership, borrowing, and lifetime rules.'
  },
  {
    id: 'q-rust-2',
    language: 'rust',
    question: 'In Rust, are variables mutable or immutable by default?',
    options: ['Mutable', 'Immutable', 'Determined at runtime', 'Volatile'],
    correctAnswerIndex: 1,
    explanation: 'All variables in Rust are immutable by default unless declared with the `mut` keyword (`let mut x = 5;`).'
  },
  {
    id: 'q-rust-3',
    language: 'rust',
    question: 'What is the package manager and build tool for Rust?',
    options: ['npm', 'pip', 'cargo', 'gem'],
    correctAnswerIndex: 2,
    explanation: '`cargo` builds your code, downloads package dependencies, and makes packages for distribution.'
  },
  {
    id: 'q-rust-4',
    language: 'rust',
    question: 'Which enum in Rust is used for values that may be either present or absent?',
    options: ['Maybe<T>', 'Option<T>', 'Nullable<T>', 'Result<T, E>'],
    correctAnswerIndex: 1,
    explanation: '`Option<T>` can either be `Some(T)` or `None`, eliminating null pointer exceptions.'
  },
  {
    id: 'q-rust-5',
    language: 'rust',
    question: 'Which control flow construct provides powerful pattern matching in Rust?',
    options: ['switch', 'when', 'match', 'select'],
    correctAnswerIndex: 2,
    explanation: '`match` compares a value against patterns and requires exhaustive handling of all cases.'
  },
  {
    id: 'q-rust-6',
    language: 'rust',
    question: 'What does the borrow checker prevent in Rust?',
    options: [
      'Data races and dangling references at compile time',
      'Writing functions longer than 100 lines',
      'Using loops',
      'Printing to the console'
    ],
    correctAnswerIndex: 0,
    explanation: 'The borrow checker ensures references never outlive the data they point to, eliminating data races.'
  },

  // ==================== KOTLIN ====================
  {
    id: 'q-kotlin-1',
    language: 'kotlin',
    question: 'What is the difference between `val` and `var` in Kotlin?',
    options: [
      '`val` is read-only (immutable); `var` is mutable and reassignable',
      '`val` is for numbers; `var` is for text',
      '`var` is faster than `val`',
      'They are identical'
    ],
    correctAnswerIndex: 0,
    explanation: '`val` defines a read-only local variable; `var` declares a variable that can be reassigned.'
  },
  {
    id: 'q-kotlin-2',
    language: 'kotlin',
    question: 'How does Kotlin eliminate `NullPointerException` by default?',
    options: [
      'Types are non-nullable by default unless explicitly marked with a `?`',
      'All variables are initialized to empty strings',
      'It catches all exceptions automatically',
      'It disables pointers completely'
    ],
    correctAnswerIndex: 0,
    explanation: 'Kotlin’s type system distinguishes between nullable references (`String?`) and non-nullable ones (`String`).'
  },
  {
    id: 'q-kotlin-3',
    language: 'kotlin',
    question: 'Which keyword creates a concise class designed solely to hold data in Kotlin?',
    options: ['struct', 'record', 'data class', 'model class'],
    correctAnswerIndex: 2,
    explanation: '`data class` automatically generates `equals()`, `hashCode()`, `toString()`, and `copy()` methods.'
  },
  {
    id: 'q-kotlin-4',
    language: 'kotlin',
    question: 'What is the preferred Kotlin concurrency abstraction for asynchronous programming?',
    options: ['Threads', 'Coroutines', 'AsyncTasks', 'Fibers'],
    correctAnswerIndex: 1,
    explanation: 'Coroutines provide non-blocking, lightweight concurrency that simplifies asynchronous code.'
  },
  {
    id: 'q-kotlin-5',
    language: 'kotlin',
    question: 'What operator is the safe call operator in Kotlin?',
    options: ['!.', '?:', '?.', '??'],
    correctAnswerIndex: 2,
    explanation: '`?.` executes a call only if the target reference is not null, otherwise returning null safely.'
  },
  {
    id: 'q-kotlin-6',
    language: 'kotlin',
    question: 'What is the Elvis operator in Kotlin used for providing fallback default values?',
    options: ['?.', '?:', '!!', '=>'],
    correctAnswerIndex: 1,
    explanation: 'The Elvis operator `?:` returns the right-hand operand if the left-hand expression is null.'
  },

  // ==================== SWIFT ====================
  {
    id: 'q-swift-1',
    language: 'swift',
    question: 'Which company created the Swift programming language?',
    options: ['Google', 'Microsoft', 'Apple', 'Oracle'],
    correctAnswerIndex: 2,
    explanation: 'Apple introduced Swift in 2014 as the modern replacement for Objective-C.'
  },
  {
    id: 'q-swift-2',
    language: 'swift',
    question: 'In Swift, what keyword declares a constant whose value cannot change?',
    options: ['const', 'let', 'final', 'val'],
    correctAnswerIndex: 1,
    explanation: '`let` declares constants in Swift, while `var` declares mutable variables.'
  },
  {
    id: 'q-swift-3',
    language: 'swift',
    question: 'What type represents an optional value that may contain a value or `nil` in Swift?',
    options: ['Nullable<T>', 'Optional<Wrapped> (or T?)', 'Maybe<T>', 'Variant'],
    correctAnswerIndex: 1,
    explanation: 'Optionals in Swift are denoted with `?` and can hold either an unwrapped value or `nil`.'
  },
  {
    id: 'q-swift-4',
    language: 'swift',
    question: 'What keyword is used for early exit conditional unwrapping in Swift?',
    options: ['check', 'guard', 'require', 'assert'],
    correctAnswerIndex: 1,
    explanation: '`guard let ... else { return }` enforces preconditions and unwraps optionals for the remainder of the scope.'
  },
  {
    id: 'q-swift-5',
    language: 'swift',
    question: 'What is the modern declarative UI framework built for Swift across Apple platforms?',
    options: ['UIKit', 'AppKit', 'SwiftUI', 'Cocoa'],
    correctAnswerIndex: 2,
    explanation: 'SwiftUI is Apple’s modern declarative framework for creating user interfaces.'
  },
  {
    id: 'q-swift-6',
    language: 'swift',
    question: 'In Swift, are `struct` types value types or reference types?',
    options: ['Value types', 'Reference types', 'Pointer types', 'Heap-allocated types'],
    correctAnswerIndex: 0,
    explanation: 'In Swift, structures (`struct`) and enumerations (`enum`) are copied by value, while classes (`class`) are reference types.'
  },

  // ==================== R ====================
  {
    id: 'q-r-1',
    language: 'r',
    question: 'What is R primarily used for?',
    options: [
      'Building native mobile apps',
      'Statistical computing, data analysis, and graphical visualization',
      'Game engine physics',
      'Operating system kernel development'
    ],
    correctAnswerIndex: 1,
    explanation: 'R is a language and environment dedicated to statistical computing, modeling, and data graphics.'
  },
  {
    id: 'q-r-2',
    language: 'r',
    question: 'What is the standard assignment operator in R?',
    options: ['=', '<-', ':=', '=>'],
    correctAnswerIndex: 1,
    explanation: '`<-` is the idiomatic assignment operator in R (e.g., `x <- 10`).'
  },
  {
    id: 'q-r-3',
    language: 'r',
    question: 'Which function combines elements into a vector in R?',
    options: ['v()', 'c()', 'vector()', 'combine()'],
    correctAnswerIndex: 1,
    explanation: '`c()` stands for combine and is the fundamental function used to create vectors in R.'
  },
  {
    id: 'q-r-4',
    language: 'r',
    question: 'Which famous R library based on the Grammar of Graphics is widely used for plotting data?',
    options: ['matplotlib', 'ggplot2', 'seaborn', 'chartjs'],
    correctAnswerIndex: 1,
    explanation: '`ggplot2` is part of the Tidyverse and enables declarative creation of complex statistical charts.'
  },
  {
    id: 'q-r-5',
    language: 'r',
    question: 'What two-dimensional tabular data structure holds columns of different data types in R?',
    options: ['Matrix', 'Array', 'Data Frame (data.frame)', 'Vector list'],
    correctAnswerIndex: 2,
    explanation: 'A `data.frame` is a 2D table where each column can have a distinct type (numeric, character, factor).'
  },
  {
    id: 'q-r-6',
    language: 'r',
    question: 'What is the indexing convention in R (first element index)?',
    options: ['0-indexed', '1-indexed', 'Arbitrary', '-1 indexed'],
    correctAnswerIndex: 1,
    explanation: 'Unlike C or Python, R vectors and matrices are 1-indexed (the first element is `x[1]`).'
  }
];