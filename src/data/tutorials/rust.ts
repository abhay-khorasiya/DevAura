import { TutorialChapter } from '../../types';

export const rustChapters: TutorialChapter[] = [
  // 1. Rust HOME
  {
    id: 'rust-home',
    title: 'Rust HOME',
    slug: 'rust-home',
    summary: 'Rust is a systems programming language that empowers everyone to build reliable and efficient software.',
    readTime: '3 min',
    category: 'Rust Tutorial',
    content: {
      overview: 'Rust provides blazingly fast performance with memory safety guaranteed at compile time, eliminating null dereferences, data races, and buffer overflows without needing a garbage collector.',
      sections: [
        {
          heading: 'Your First Rust Program',
          body: 'Printing with the println! macro:',
          code: `fn main() {
    println!("Hello, DevAura Rustaceans!");
}`,
          codeLanguage: 'rust',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Cargo Terminal Output</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Hello, DevAura Rustaceans!</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Rust Intro
  {
    id: 'rust-intro',
    title: 'Rust Introduction',
    slug: 'rust-intro',
    summary: 'Why Rust has been voted the most loved programming language for 8 consecutive years.',
    readTime: '4 min',
    category: 'Rust Tutorial',
    content: {
      overview: 'Originally created at Mozilla by Graydon Hoare, Rust is used by Microsoft (Windows kernel components), Linux kernel, AWS (Firecracker microVM), Google (Android OS), and Cloudflare. It delivers C/C++ speed while mathematically preventing memory corruption bugs at compile time.',
      sections: [
        {
          heading: 'Core Pillars of Rust',
          body: '1. Zero-Cost Abstractions: High-level constructs compile down to machine code just as efficient as handwritten assembly.\n2. Ownership System: Safe memory allocation and deallocation without a Garbage Collector runtime.\n3. Fearless Concurrency: The compiler prevents data races at compile time.',
          code: `// Compile-time safety guarantee:
fn main() {
    let message = String::from("Rust memory safety");
    // Ownership rules guarantee zero dangling pointers
    println!("{}", message);
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 3. Rust Get Started & Cargo
  {
    id: 'rust-getstarted',
    title: 'Rust Get Started & Cargo',
    slug: 'rust-getstarted',
    summary: 'Install Rust via rustup, and manage projects with Cargo (build system and package manager).',
    readTime: '3 min',
    category: 'Rust Tutorial',
    content: {
      overview: 'Rust comes with Cargo, an industry-standard package manager and build orchestrator.',
      sections: [
        {
          heading: 'Cargo Commands Workflow',
          body: 'Standard commands for Rust development:',
          code: `# Create a new binary project:
cargo new my_app

# Navigate to project:
cd my_app

# Compile and run immediately:
cargo run

# Check code for compilation errors without building binary (fast):
cargo check

# Compile optimized release build:
cargo build --release`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 4. Rust Syntax
  {
    id: 'rust-syntax',
    title: 'Rust Syntax & Statements vs Expressions',
    slug: 'rust-syntax',
    summary: 'Standard program structure, fn main() entry point, statements (ending in semicolon) vs expressions (no semicolon).',
    readTime: '4 min',
    category: 'Rust Basics',
    content: {
      overview: 'Rust code execution begins at the fn main() function. Statements perform actions and return nothing; expressions evaluate to a resulting value.',
      sections: [
        {
          heading: 'Writing Rust Statements',
          body: 'Expressions return values automatically:',
          code: `fn main() {
    let x = 5; // Statement (ends in semicolon)

    let y = {
        let price = 100;
        price * 2 // Expression (no semicolon: evaluates to 200!)
    };

    println!("Value of y: {}", y);
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 5. Rust Comments
  {
    id: 'rust-comments',
    title: 'Rust Comments & Documentation',
    slug: 'rust-comments',
    summary: 'Line comments (//), block comments (/* */), and documentation comments (///) that generate HTML docs with cargo doc.',
    readTime: '3 min',
    category: 'Rust Basics',
    content: {
      overview: 'Rust supports standard line comments and documentation comments (///) that support Markdown formatting.',
      sections: [
        {
          heading: 'Doc Comments in Rust',
          body: 'Writing documentation:',
          code: `// Standard line comment

/// Adds two 32-bit integers together.
/// # Examples
/// \`\`\`
/// let sum = add(5, 10);
/// assert_eq!(sum, 15);
/// \`\`\`
fn add(a: i32, b: i32) -> i32 {
    a + b
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 6. Rust Variables & Mutability
  {
    id: 'rust-variables',
    title: 'Rust Variables & Mutability',
    slug: 'rust-variables',
    summary: 'Variables are immutable by default in Rust. Use the mut keyword to enable mutation, or shadow variables.',
    readTime: '4 min',
    category: 'Rust Basics',
    content: {
      overview: 'Rust strongly enforces immutability by default to encourage safe, bug-free concurrent programming.',
      sections: [
        {
          heading: 'Immutable by Default & Shadowing',
          body: 'Declaring immutable, mutable, and shadowed variables:',
          code: `fn main() {
    let x = 5;
    // x = 6; // Compilation error! Cannot assign twice to immutable variable

    let mut y = 10;
    y += 5; // Valid because of 'mut'

    // Variable Shadowing: re-declaring with 'let'
    let spaces = "   ";
    let spaces = spaces.len(); // Changes type from &str to usize!

    println!("y: {}, spaces count: {}", y, spaces);
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 7. Rust Constants
  {
    id: 'rust-constants',
    title: 'Rust Constants',
    slug: 'rust-constants',
    summary: 'Constants declared with const, mandatory type annotations, and compile-time evaluation.',
    readTime: '3 min',
    category: 'Rust Basics',
    content: {
      overview: 'Like immutable variables, constants are values bound to a name that cannot change. However, constants are always immutable (you cannot use mut) and their type must always be explicitly annotated.',
      sections: [
        {
          heading: 'Declaring Constants',
          body: 'Constants in Rust:',
          code: `const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;

fn main() {
    println!("Seconds: {}", THREE_HOURS_IN_SECONDS);
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 8. Rust Data Types
  {
    id: 'rust-data-types',
    title: 'Rust Data Types',
    slug: 'rust-data-types',
    summary: 'Scalar types (i8-i128, u8-u128, f32, f64, bool, char) and compound types (tuples and fixed-size arrays).',
    readTime: '4 min',
    category: 'Rust Basics',
    content: {
      overview: 'Rust is statically typed. It must know the type of all variables at compile time, though it provides excellent type inference.',
      sections: [
        {
          heading: 'Tuples and Arrays',
          body: 'Compound data structures:',
          code: `fn main() {
    // Tuple: fixed size, can hold different types:
    let person: (&str, i32, bool) = ("Abhay", 22, true);
    let (name, age, is_active) = person; // destructuring
    let first_elem = person.0;           // dot index

    // Array: fixed size, single type, stack allocated:
    let primes: [i32; 4] = [2, 3, 5, 7];
    println!("First prime: {}, length: {}", primes[0], primes.len());
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 9. Rust Operators
  {
    id: 'rust-operators',
    title: 'Rust Operators',
    slug: 'rust-operators',
    summary: 'Arithmetic (+, -, *, /, %), Comparison (==, !=, <, >), and Logical (&&, ||, !).',
    readTime: '3 min',
    category: 'Rust Basics',
    content: {
      overview: 'Rust supports standard mathematical operations. Overflow checks in debug mode panic if an integer exceeds its bounds.',
      sections: [
        {
          heading: 'Operator Expressions',
          body: 'Evaluating arithmetic and logic:',
          code: `fn main() {
    let sum = 5 + 10;
    let difference = 95.5 - 4.3;
    let quotient = 56.7 / 32.2;
    let remainder = 43 % 5;
    let is_equal = (sum == 15);

    println!("Sum: {}, Equal: {}", sum, is_equal);
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 10. Rust Strings
  {
    id: 'rust-strings',
    title: 'Rust Strings: String vs &str',
    slug: 'rust-strings',
    summary: 'String slice (&str) stored in binary vs heap-allocated, growable String.',
    readTime: '4 min',
    category: 'Rust Basics',
    content: {
      overview: 'Rust has two main string types: &str (an immutable string slice pointing to UTF-8 bytes) and String (a heap-allocated, growable buffer).',
      sections: [
        {
          heading: 'Working with Strings',
          body: 'Creating and mutating strings:',
          code: `fn main() {
    // &str (string literal, immutable reference):
    let greeting: &str = "Hello";

    // String (heap allocated, mutable):
    let mut s = String::from(greeting);
    s.push_str(", DevAura!");

    println!("{}", s);
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 11. Rust Control Flow
  {
    id: 'rust-control-flow',
    title: 'Rust Control Flow',
    slug: 'rust-control-flow',
    summary: 'If expressions, infinite loops with loop/break, while loops, and for..in iterators.',
    readTime: '4 min',
    category: 'Rust Control Flow',
    content: {
      overview: 'Control flow in Rust can be used as expressions to assign values to variables.',
      sections: [
        {
          heading: 'If as Expression & Loop Returns',
          body: 'Iterating and assigning with control flow:',
          code: `fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    // Loop with return value via break:
    let mut counter = 0;
    let result = loop {
        counter += 1;
        if counter == 10 {
            break counter * 2; // Returns 20
        }
    };

    // For in iterator:
    for item in [10, 20, 30].iter() {
        println!("Value: {}", item);
    }
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 12. Rust Functions
  {
    id: 'rust-functions',
    title: 'Rust Functions',
    slug: 'rust-functions',
    summary: 'Function signatures, return type notation (->), and expression returns without semicolons.',
    readTime: '4 min',
    category: 'Rust Basics',
    content: {
      overview: 'In Rust, statements perform an action and do not return a value (ended with semicolon). Expressions evaluate to a value and do not end with a semicolon.',
      sections: [
        {
          heading: 'Expression Returns in Functions',
          body: 'Returning values implicitly from functions:',
          code: `fn add(a: i32, b: i32) -> i32 {
    a + b // No semicolon: this is the returned expression!
}

fn calculate_hypotenuse(a: f64, b: f64) -> f64 {
    (a.powi(2) + b.powi(2)).sqrt()
}

fn main() {
    let sum = add(15, 25);
    println!("Sum is: {}", sum);
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 13. Rust Ownership
  {
    id: 'rust-ownership',
    title: 'Rust Ownership: The Core Rule',
    slug: 'rust-ownership',
    summary: 'Master the 3 rules of ownership that guarantee compile-time memory safety without a garbage collector.',
    readTime: '6 min',
    category: 'Rust Ownership',
    content: {
      overview: 'Ownership is Rust’s most unique feature. It governs memory management completely at compile time.',
      sections: [
        {
          heading: 'The Three Rules of Ownership',
          body: '1. Each value in Rust has an owner.\n2. There can only be one owner at a time.\n3. When the owner goes out of scope, the value is dropped automatically.',
          code: `fn main() {
    let s1 = String::from("DevAura");
    
    // Ownership MOVES from s1 to s2:
    let s2 = s1;

    // println!("{}", s1); // Compilation error: value borrowed here after move!
    println!("s2 owns the heap string: {}", s2);

    // Deep clone if you need two copies:
    let s3 = s2.clone();
    println!("Both exist: s2={}, s3={}", s2, s3);
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 14. Rust Borrowing & References
  {
    id: 'rust-borrowing',
    title: 'Rust References & Borrowing',
    slug: 'rust-borrowing',
    summary: 'Borrow values without taking ownership using immutable references (&T) and mutable references (&mut T).',
    readTime: '6 min',
    category: 'Rust Ownership',
    content: {
      overview: 'Borrowing lets you access data without acquiring ownership. The borrowing rules ensure no data races can ever occur.',
      sections: [
        {
          heading: 'Borrowing Rules',
          body: 'At any given time, you can have either one mutable reference OR any number of immutable references, and references must always be valid.',
          code: `fn calculate_length(s: &String) -> usize {
    s.len() // Borrowed reference; s does NOT take ownership!
}

fn append_suffix(s: &mut String) {
    s.push_str(" [Verified]");
}

fn main() {
    let mut title = String::from("DevAura Cloud");

    let len = calculate_length(&title);
    println!("Length: {}", len);

    append_suffix(&mut title);
    println!("Updated title: {}", title);
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 15. Rust Slices
  {
    id: 'rust-slices',
    title: 'Rust Slices',
    slug: 'rust-slices',
    summary: 'Reference contiguous sequences of elements in collections without copying with &[start..end].',
    readTime: '4 min',
    category: 'Rust Ownership',
    content: {
      overview: 'A slice is a kind of reference, so it does not have ownership. Slices let you reference a contiguous sequence of elements in a collection rather than the whole collection.',
      sections: [
        {
          heading: 'String and Array Slices',
          body: 'Creating slice references:',
          code: `fn main() {
    let s = String::from("hello world");

    let hello: &str = &s[0..5];
    let world: &str = &s[6..11];

    let a = [1, 2, 3, 4, 5];
    let slice: &[i32] = &a[1..3]; // references [2, 3]

    println!("{} {}", hello, world);
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 16. Rust Structs
  {
    id: 'rust-structs',
    title: 'Rust Structs & Impl Blocks',
    slug: 'rust-structs',
    summary: 'Define custom data schemas with structs and implement methods with &self.',
    readTime: '5 min',
    category: 'Rust OOP',
    content: {
      overview: 'Structs allow grouping related data together. Methods are attached inside impl blocks.',
      sections: [
        {
          heading: 'Struct Definition and Methods',
          body: 'Implementing methods on structs:',
          code: `struct ServerConfig {
    host: String,
    port: u16,
    max_connections: u32,
}

impl ServerConfig {
    fn new(host: &str, port: u16) -> Self {
        ServerConfig {
            host: host.to_string(),
            port,
            max_connections: 10_000,
        }
    }

    fn url(&self) -> String {
        format!("http://{}:{}", self.host, self.port)
    }
}

fn main() {
    let srv = ServerConfig::new("127.0.0.1", 8080);
    println!("Connected to: {}", srv.url());
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 17. Rust Enums & Pattern Matching
  {
    id: 'rust-enums',
    title: 'Rust Enums & Pattern Matching',
    slug: 'rust-enums',
    summary: 'Express rich states with enums, Option<T> for null safety, and exhaustive match expressions.',
    readTime: '5 min',
    category: 'Rust Types',
    content: {
      overview: 'Rust enums can hold data within variants. The built-in Option<T> enum (Some(T) | None) replaces null entirely.',
      sections: [
        {
          heading: 'Option<T> and Pattern Matching',
          body: 'Handling optional values without null exceptions:',
          code: `enum WebEvent {
    PageLoad,
    KeyPress(char),
    Click { x: i64, y: i64 },
}

fn inspect_event(event: WebEvent) {
    match event {
        WebEvent::PageLoad => println!("Page loaded"),
        WebEvent::KeyPress(c) => println!("Key pressed: {}", c),
        WebEvent::Click { x, y } => println!("Clicked at ({}, {})", x, y),
    }
}

fn main() {
    let opt: Option<i32> = Some(42);

    match opt {
        Some(val) => println!("Got value: {}", val),
        None => println!("No value found"),
    }
}`,
          codeLanguage: 'rust',
          interactive: true
        }
      ]
    }
  },

  // 18. Rust Error Handling
  {
    id: 'rust-error-handling',
    title: 'Rust Error Handling: Result & ?',
    slug: 'rust-error-handling',
    summary: 'Recoverable errors with Result<T, E>, unwrap, expect, and the propagating ? operator.',
    readTime: '5 min',
    category: 'Rust Advanced',
    content: {
      overview: 'Rust distinguishes between recoverable errors (Result<T, E>) and unrecoverable errors (panic!). The ? operator enables clean error propagation.',
      sections: [
        {
          heading: 'Working with Result<T, E>',
          body: 'Handling errors without try-catch blocks:',
          code: `fn divide(numerator: f64, denominator: f64) -> Result<f64, String> {
    if denominator == 0.0 {
        Err(String::from("Cannot divide by zero"))
    } else {
        Ok(numerator / denominator)
    }
}

fn main() {
    match divide(100.0, 4.0) {
        Ok(res) => println!("Division result: {}", res),
        Err(e) => println!("Error encountered: {}", e),
    }
}`,
          codeLanguage: 'rust',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Rust Error Handling Engine</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Division result: 25</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
