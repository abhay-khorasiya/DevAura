import { TutorialChapter } from '../../types';

export const goChapters: TutorialChapter[] = [
  // 1. Go HOME
  {
    id: 'go-home',
    title: 'Go HOME',
    slug: 'go-home',
    summary: 'Go (Golang) is an open-source, statically-typed, compiled programming language developed by Google for high-concurrency cloud computing.',
    readTime: '3 min',
    category: 'Go Tutorial',
    content: {
      overview: 'Created by Robert Griesemer, Rob Pike, and Ken Thompson at Google, Go combines the high performance of C++ with the syntactic cleanliness and development velocity of Python. It powers Docker, Kubernetes, Terraform, and cloud-native backends worldwide.',
      sections: [
        {
          heading: 'Your First Go Program',
          body: 'A classic "Hello, World!" program in Go:',
          code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, DevAura Gophers!")
}`,
          codeLanguage: 'go',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Go Terminal Output (go run main.go)</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Hello, DevAura Gophers!</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Go Intro
  {
    id: 'go-intro',
    title: 'Go Introduction',
    slug: 'go-intro',
    summary: 'Why use Go? Statically compiled binaries, lightning-fast compilation, zero external runtime dependencies, and native goroutines.',
    readTime: '4 min',
    category: 'Go Tutorial',
    content: {
      overview: 'Go was designed to solve real software engineering challenges at Google: slow build times, uncontrolled dependencies, and difficult concurrent network programming.',
      sections: [
        {
          heading: 'Core Advantages of Go',
          body: '1. Fast Compilation: Compiles directly to machine code in fractions of a second.\n2. Built-in Concurrency: Lightweight goroutines (starting at ~2KB stack size) instead of heavyweight OS threads.\n3. Simple & Opinionated: Only 25 keywords, strict code formatting via gofmt, and no inheritance complexity.',
          code: `// Goroutine simplicity:
go func() {
    fmt.Println("Running concurrently in the background!")
}()`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 3. Go Get Started
  {
    id: 'go-getstarted',
    title: 'Go Get Started',
    slug: 'go-getstarted',
    summary: 'Initialize Go modules with go mod init, run scripts with go run, and compile binaries with go build.',
    readTime: '3 min',
    category: 'Go Tutorial',
    content: {
      overview: 'Go uses module files (go.mod) to manage dependencies and versioning.',
      sections: [
        {
          heading: 'CLI Commands for Go Projects',
          body: 'Common workflow commands:',
          code: `# Initialize a new module:
go mod init example.com/myapp

# Run a file without manual compile step:
go run main.go

# Build an optimized, standalone binary executable:
go build -o myapp.exe main.go

# Format all files in current directory according to Go standard:
go fmt ./...`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 4. Go Syntax
  {
    id: 'go-syntax',
    title: 'Go Syntax',
    slug: 'go-syntax',
    summary: 'Understanding Go program structure: package declarations, imports, and entry function main().',
    readTime: '4 min',
    category: 'Go Basics',
    content: {
      overview: 'Every Go source file begins with a package declaration. Executable applications must declare package main with a func main() entry point.',
      sections: [
        {
          heading: 'Go Program Anatomy',
          body: 'Examining the parts of a Go source file:',
          code: `package main // Mandatory entry package

import (
    "fmt"   // Formatting package
    "time"  // Standard library time utilities
)

func main() {
    currentTime := time.Now()
    fmt.Println("Server booted at:", currentTime.Format(time.RFC3339))
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 5. Go Comments
  {
    id: 'go-comments',
    title: 'Go Comments',
    slug: 'go-comments',
    summary: 'Documenting Go code with single-line (//) and multi-line (/* */) comments, plus godoc standards.',
    readTime: '3 min',
    category: 'Go Basics',
    content: {
      overview: 'Comments explain code logic and document exported symbols for automated documentation tools like godoc.',
      sections: [
        {
          heading: 'Comment Formatting',
          body: 'Writing clear comments:',
          code: `// Package storage provides in-memory caching utilities.
package storage

// Cache stores transient key-value pairs.
type Cache struct {
    /* Multi-line comment:
       items is an internal hash map */
    items map[string]string
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 6. Go Variables
  {
    id: 'go-variables',
    title: 'Go Variables',
    slug: 'go-variables',
    summary: 'Variable declaration with var, type inference, short declaration (:=), and multi-variable assignments.',
    readTime: '4 min',
    category: 'Go Basics',
    content: {
      overview: 'Go offers explicit type declarations and short-variable type inference via the := operator (available inside functions).',
      sections: [
        {
          heading: 'Variable Declarations in Go',
          body: 'Ways to declare variables:',
          code: `package main
import "fmt"

func main() {
    // 1. Explicit type declaration:
    var port int = 8080

    // 2. Type inference with var:
    var host = "127.0.0.1"

    // 3. Short declaration := (most idiomatic inside functions):
    activeUsers := 1420
    isSSL := true

    fmt.Println(host, port, activeUsers, isSSL)
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 7. Go Constants
  {
    id: 'go-constants',
    title: 'Go Constants',
    slug: 'go-constants',
    summary: 'Immutable values declared with const, typed vs untyped constants, and iota enumeration.',
    readTime: '4 min',
    category: 'Go Basics',
    content: {
      overview: 'Constants are declared with const. Once declared, their value cannot be changed. Untyped constants have high precision until used in an expression.',
      sections: [
        {
          heading: 'Const and iota Enumerator',
          body: 'Auto-incrementing constants:',
          code: `package main
import "fmt"

const (
    StatusPending = iota // 0
    StatusActive         // 1
    StatusSuspended      // 2
)

func main() {
    fmt.Println("Active status enum value:", StatusActive) // 1
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 8. Go Output Formatting
  {
    id: 'go-output',
    title: 'Go Output & Printf Verbs',
    slug: 'go-output',
    summary: 'Format string outputs using fmt.Print, fmt.Println, and fmt.Printf format specifiers (%v, %T, %d, %s, %f).',
    readTime: '4 min',
    category: 'Go Basics',
    content: {
      overview: 'The fmt package contains functions to format and print text. fmt.Printf uses formatting verbs starting with % to interpolate data types.',
      sections: [
        {
          heading: 'Essential Printf Verbs',
          body: 'Common format specifiers:',
          code: `package main
import "fmt"

func main() {
    name := "Gopher"
    score := 98.75
    rank := 1

    fmt.Printf("Default format (%%v): %v\\n", name)
    fmt.Printf("Go-syntax representation (%%#v): %#v\\n", name)
    fmt.Printf("Type inspection (%%T): %T\\n", score)
    fmt.Printf("Decimal integer (%%d): %d\\n", rank)
    fmt.Printf("Floating point with 2 decimals (%%.2f): %.2f\\n", score)
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 9. Go Data Types
  {
    id: 'go-data-types',
    title: 'Go Data Types',
    slug: 'go-data-types',
    summary: 'Scalar types: bool, string, int/uint sizes, float32, float64, and zero-values.',
    readTime: '4 min',
    category: 'Go Basics',
    content: {
      overview: 'Go is strongly typed. When a variable is declared without an initial value, it is automatically initialized to its type’s zero-value (0 for numbers, false for booleans, "" for strings, and nil for pointers/slices).',
      sections: [
        {
          heading: 'Zero Values in Go',
          body: 'Declared variables with default zero-values:',
          code: `package main
import "fmt"

func main() {
    var count int         // zero-value is 0
    var balance float64   // zero-value is 0.0
    var title string      // zero-value is ""
    var isReady bool      // zero-value is false

    fmt.Printf("int: %d, float: %f, string: '%s', bool: %t\\n",
               count, balance, title, isReady)
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 10. Go Operators
  {
    id: 'go-operators',
    title: 'Go Operators',
    slug: 'go-operators',
    summary: 'Arithmetic (+, -, *, /, %), Assignment (=, +=), Comparison (==, !=, <, >), and Logical (&&, ||, !).',
    readTime: '3 min',
    category: 'Go Basics',
    content: {
      overview: 'Go provides standard mathematical, comparison, and logical operators. Note that ++ and -- are statements in Go, NOT expressions (e.g., x++ is valid, but y = x++ is a syntax error).',
      sections: [
        {
          heading: 'Operator Expressions',
          body: 'Evaluating arithmetic and logic:',
          code: `package main
import "fmt"

func main() {
    a, b := 10, 3
    fmt.Println("Quotient:", a / b)  // 3 (integer division)
    fmt.Println("Remainder:", a % b) // 1

    // Postfix statement:
    a++
    fmt.Println("Incremented a:", a) // 11
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 11. Go Conditions
  {
    id: 'go-conditions',
    title: 'Go Conditions: If...Else',
    slug: 'go-conditions',
    summary: 'Branching logic with if statements, else if, else, and short statement variable initializations.',
    readTime: '4 min',
    category: 'Go Control Flow',
    content: {
      overview: 'Go if statements do not require parentheses around the condition. Go also allows a short statement to execute before the condition is evaluated.',
      sections: [
        {
          heading: 'If with Short Initializer',
          body: 'Scope-limited variables in conditionals:',
          code: `package main
import "fmt"

func main() {
    // If with short statement initialization:
    // 'length' is only available inside this if/else block!
    if length := 15; length > 10 {
        fmt.Println("Length is long:", length)
    } else {
        fmt.Println("Length is standard:", length)
    }
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 12. Go Switch
  {
    id: 'go-switch',
    title: 'Go Switch Statement',
    slug: 'go-switch',
    summary: 'Clean multi-branch switching without break keywords, multiple expressions per case, and type switches.',
    readTime: '4 min',
    category: 'Go Control Flow',
    content: {
      overview: 'Switch statements in Go execute only the selected case, removing the need for break statements at the end of every case.',
      sections: [
        {
          heading: 'Switch Examples',
          body: 'Multiple case values and expressionless switch:',
          code: `package main
import "fmt"

func main() {
    day := "Monday"
    switch day {
    case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday":
        fmt.Println("Weekday work mode")
    case "Saturday", "Sunday":
        fmt.Println("Weekend break")
    default:
        fmt.Println("Invalid day")
    }
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 13. Go Loops
  {
    id: 'go-loops',
    title: 'Go Loops: The For Statement',
    slug: 'go-loops',
    summary: 'Go has only one looping construct: for. Use it as standard for, while loop, infinite loop, or range iterator.',
    readTime: '4 min',
    category: 'Go Control Flow',
    content: {
      overview: 'Unlike other languages that have while and do-while loops, Go unifies all looping mechanisms inside the for keyword.',
      sections: [
        {
          heading: 'Different Forms of For in Go',
          body: 'Iterating in Go:',
          code: `package main
import "fmt"

func main() {
    // 1. Standard 3-component loop:
    for i := 0; i < 3; i++ {
        fmt.Println("Standard loop:", i)
    }

    // 2. While-loop equivalent (condition only):
    n := 1
    for n < 5 {
        n *= 2
    }
    fmt.Println("While equivalent result:", n)

    // 3. Iterating with range over a slice:
    languages := []string{"Go", "Rust", "TypeScript"}
    for idx, lang := range languages {
        fmt.Printf("%d: %s\\n", idx, lang)
    }
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 14. Go Functions
  {
    id: 'go-functions',
    title: 'Go Functions & Multiple Returns',
    slug: 'go-functions',
    summary: 'Parameters, return values, multiple return values, named returns, and error handling conventions.',
    readTime: '5 min',
    category: 'Go Functions',
    content: {
      overview: 'Functions can return multiple values. In idiomatic Go, functions that can fail return a result along with an error value as the final return parameter.',
      sections: [
        {
          heading: 'Multiple Return Values Idiom',
          body: 'Returning result and error:',
          code: `package main
import (
    "errors"
    "fmt"
)

func safeDivide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

func main() {
    result, err := safeDivide(100, 4)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Result:", result)
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 15. Go Arrays
  {
    id: 'go-arrays',
    title: 'Go Arrays',
    slug: 'go-arrays',
    summary: 'Fixed-size sequential elements with [size]Type, length evaluation with len(), and array literals.',
    readTime: '4 min',
    category: 'Go Data Structures',
    content: {
      overview: 'In Go, an array has a fixed length defined at compile time. Arrays are value types: assigning an array copies all elements.',
      sections: [
        {
          heading: 'Array Declarations',
          body: 'Fixed array syntax:',
          code: `package main
import "fmt"

func main() {
    var numbers [5]int // defaults to [0 0 0 0 0]
    numbers[0] = 10
    numbers[4] = 50

    // Array literal with inferred size (...):
    primes := [...]int{2, 3, 5, 7, 11}

    fmt.Println("Length of primes:", len(primes))
    fmt.Println("Primes array:", primes)
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 16. Go Slices
  {
    id: 'go-slices',
    title: 'Go Slices',
    slug: 'go-slices',
    summary: 'Dynamic views into arrays: make([]T, len, cap), append(), sub-slicing [low:high], and copy().',
    readTime: '5 min',
    category: 'Go Data Structures',
    content: {
      overview: 'A slice is a dynamically-sized, flexible view into the elements of an array. Slices are far more common than arrays in real-world Go code.',
      sections: [
        {
          heading: 'Creating and Appending Slices',
          body: 'Using append and make:',
          code: `package main
import "fmt"

func main() {
    // Dynamic slice literal:
    items := []string{"Laptop", "Monitor"}

    // Append expands slice capacity dynamically:
    items = append(items, "Keyboard", "Mouse")

    // Slicing sub-ranges:
    firstTwo := items[:2] // ["Laptop", "Monitor"]

    // make() pre-allocates length and capacity:
    buffer := make([]int, 0, 100)

    fmt.Printf("items len=%d, cap=%d\\n", len(items), cap(items))
    fmt.Println("First two:", firstTwo)
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 17. Go Maps
  {
    id: 'go-maps',
    title: 'Go Maps',
    slug: 'go-maps',
    summary: 'Key-value hash maps with make(map[K]V), comma-ok idiom, and delete().',
    readTime: '4 min',
    category: 'Go Data Structures',
    content: {
      overview: 'A map is an unordered hash table of key-value pairs. All keys must be comparable types.',
      sections: [
        {
          heading: 'Working with Maps',
          body: 'Map creation, lookup, and delete:',
          code: `package main
import "fmt"

func main() {
    // Map initialization:
    userRoles := map[string]string{
        "alice": "admin",
        "bob":   "developer",
    }

    // Insert or update:
    userRoles["charlie"] = "viewer"

    // Comma-ok idiom to test if key exists:
    role, exists := userRoles["diana"]
    if !exists {
        fmt.Println("Diana was not found in userRoles")
    }

    // Delete a key:
    delete(userRoles, "bob")

    fmt.Println("Active user count:", len(userRoles))
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 18. Go Structs & Methods
  {
    id: 'go-structs',
    title: 'Go Structs & Methods',
    slug: 'go-structs',
    summary: 'Define custom data schemas with structs and attach methods via receiver functions.',
    readTime: '5 min',
    category: 'Go OOP',
    content: {
      overview: 'Go does not have classes or classical inheritance. Instead, it uses structs and method receivers for object-oriented encapsulation and composition.',
      sections: [
        {
          heading: 'Defining Structs and Receiver Methods',
          body: 'Creating structs and adding behaviors:',
          code: `package main
import "fmt"

type Rectangle struct {
    Width  float64
    Height float64
}

// Value receiver method:
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// Pointer receiver method (can mutate state):
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    fmt.Println("Initial Area:", rect.Area()) // 50

    rect.Scale(2)
    fmt.Println("Scaled Area:", rect.Area())  // 200
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 19. Go Goroutines
  {
    id: 'go-goroutines',
    title: 'Go Goroutines (Concurrency)',
    slug: 'go-goroutines',
    summary: 'Launch lightweight concurrent green threads with the "go" keyword.',
    readTime: '5 min',
    category: 'Go Concurrency',
    content: {
      overview: 'A goroutine is a lightweight thread managed by the Go runtime scheduler. Millions of goroutines can run concurrently on standard hardware.',
      sections: [
        {
          heading: 'Launching Goroutines',
          body: 'Concurrent execution:',
          code: `package main
import (
    "fmt"
    "time"
)

func printMessage(text string) {
    for i := 0; i < 3; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Println(text, i)
    }
}

func main() {
    // Launch background goroutine:
    go printMessage("Async Task")

    // Run on main thread:
    printMessage("Main Task")
}`,
          codeLanguage: 'go',
          interactive: true
        }
      ]
    }
  },

  // 20. Go Channels
  {
    id: 'go-channels',
    title: 'Go Channels & Select',
    slug: 'go-channels',
    summary: 'Safe communication between goroutines with typed channels (make(chan T)), send/receive (<-), and select.',
    readTime: '6 min',
    category: 'Go Concurrency',
    content: {
      overview: 'Channels are the conduits through which concurrent goroutines synchronize execution and communicate safely without shared memory race conditions ("Do not communicate by sharing memory; instead, share memory by communicating").',
      sections: [
        {
          heading: 'Channels in Action',
          body: 'Passing data safely between goroutines:',
          code: `package main
import "fmt"

func computeSquare(num int, ch chan int) {
    ch <- num * num // Send result into channel
}

func main() {
    // Create an unbuffered channel:
    ch := make(chan int)

    // Launch worker goroutines:
    go computeSquare(5, ch)
    go computeSquare(9, ch)

    // Receive values from channel (blocks until available):
    result1 := <-ch
    result2 := <-ch

    fmt.Println("Computed results:", result1, result2)
}`,
          codeLanguage: 'go',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Go Concurrency Engine</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Goroutine 1 -> computed square(5) = 25
Goroutine 2 -> computed square(9) = 81
Channel synchronization: ALL RESULTS RECEIVED</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
