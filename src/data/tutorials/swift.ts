import { TutorialChapter } from '../../types';

export const swiftChapters: TutorialChapter[] = [
  // 1. Swift HOME
  {
    id: 'swift-home',
    title: 'Swift HOME',
    slug: 'swift-home',
    summary: 'Swift is a powerful, fast, modern, and safe programming language developed by Apple for iOS, iPadOS, macOS, watchOS, tvOS, and visionOS.',
    readTime: '3 min',
    category: 'Swift Tutorial',
    content: {
      overview: 'Introduced by Apple in 2014 to succeed Objective-C, Swift is designed to make writing software fast, safe, and expressive. It combines the performance and efficiency of compiled languages with the clean simplicity of modern scripting languages.',
      sections: [
        {
          heading: 'Your First Swift Program',
          body: 'Printing a message in Swift:',
          code: `import Foundation

print("Hello, DevAura Apple Developers!")`,
          codeLanguage: 'swift',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Swift Xcode Playground Console</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Hello, DevAura Apple Developers!</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Swift Intro
  {
    id: 'swift-intro',
    title: 'Swift Introduction',
    slug: 'swift-intro',
    summary: 'Why develop in Swift? Type safety, automatic memory management (ARC), closure support, and SwiftUI integration.',
    readTime: '4 min',
    category: 'Swift Tutorial',
    content: {
      overview: 'Swift is backed by the LLVM compiler technology and is completely open source (swift.org). It is the exclusive foundation for developing modern native apps across Apple platforms and SwiftUI user interfaces.',
      sections: [
        {
          heading: 'Key Architectural Features of Swift',
          body: '1. Safe by Design: Optionals prevent null pointer crashes at compile time.\n2. Fast Performance: Compiles down to optimized native ARM64 and x86_64 machine code.\n3. Automatic Reference Counting (ARC): Manages memory deterministically without a runtime garbage collector.',
          code: `// SwiftUI declarative UI preview:
import SwiftUI

struct WelcomeCard: View {
    var body: some View {
        Text("Build with Swift & SwiftUI")
            .font(.headline)
            .foregroundColor(.indigo)
    }
}`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 3. Swift Get Started
  {
    id: 'swift-getstarted',
    title: 'Swift Get Started',
    slug: 'swift-getstarted',
    summary: 'Develop using Apple Xcode, Swift Playgrounds on iPad/Mac, or the swift CLI tool on Linux and Windows.',
    readTime: '3 min',
    category: 'Swift Tutorial',
    content: {
      overview: 'Xcode is Apple’s flagship Integrated Development Environment (IDE), available for free from the Mac App Store. It includes simulators, profiling tools (Instruments), and interactive Swift Playgrounds.',
      sections: [
        {
          heading: 'Using the Swift Command Line',
          body: 'Running Swift code directly from terminal:',
          code: `# Run a Swift script immediately:
swift main.swift

# Initialize a package using Swift Package Manager (SPM):
swift package init --type executable

# Build and run SPM project:
swift run`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 4. Swift Syntax
  {
    id: 'swift-syntax',
    title: 'Swift Syntax',
    slug: 'swift-syntax',
    summary: 'Understanding standard structure, module imports (Foundation), and semicolon-free line endings.',
    readTime: '3 min',
    category: 'Swift Basics',
    content: {
      overview: 'Swift statements do not require semicolons. Code is organized into modules and imports.',
      sections: [
        {
          heading: 'Writing Swift Statements',
          body: 'Basic syntax structure:',
          code: `import Foundation

let greeting = "Hello, Swift!"
print(greeting)`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 5. Swift Comments
  {
    id: 'swift-comments',
    title: 'Swift Comments',
    slug: 'swift-comments',
    summary: 'Single-line (//), multi-line (/* */), and nested block comments in Swift.',
    readTime: '3 min',
    category: 'Swift Basics',
    content: {
      overview: 'Swift supports single-line and multi-line comments. Similar to Kotlin, multi-line comments can be nested.',
      sections: [
        {
          heading: 'Comment Examples',
          body: 'Writing comments:',
          code: `// This is a single line comment

/* Multi-line comment
   /* Nested comment inside */
   Still in comment block */
let score = 100`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 6. Swift Variables: let vs var
  {
    id: 'swift-variables',
    title: 'Swift Variables: let vs var',
    slug: 'swift-variables',
    summary: 'Declare constants with let and mutable variables with var, using Swift’s type inference.',
    readTime: '4 min',
    category: 'Swift Basics',
    content: {
      overview: 'Swift strongly encourages defining values as constants using let whenever their values do not need to change. This improves compiler optimizations and code clarity.',
      sections: [
        {
          heading: 'let (Constant) vs var (Variable)',
          body: 'Declaring values in Swift:',
          code: `// Constant (immutable)
let appVersion = "3.2.0"
let maxUploadLimit = 50

// Variable (mutable)
var downloadProgress = 0.0
downloadProgress = 0.45 // Valid

// Explicit type annotation vs Type inference:
let welcomeText: String = "Welcome!"
let activeUsers: Int = 10500`,
          codeLanguage: 'swift',
          interactive: true,
          tips: [
            'Best Practice: Always default to let. Change it to var only when mutation is genuinely required.'
          ]
        }
      ]
    }
  },

  // 7. Swift Data Types
  {
    id: 'swift-data-types',
    title: 'Swift Data Types',
    slug: 'swift-data-types',
    summary: 'Int, Double (64-bit), Float (32-bit), Bool, String, and Character primitives.',
    readTime: '4 min',
    category: 'Swift Basics',
    content: {
      overview: 'Swift is a type-safe language. It performs type checks when compiling your code and flags any mismatched types as errors.',
      sections: [
        {
          heading: 'Scalar Types in Swift',
          body: 'Standard data types:',
          code: `let meaningOfLife: Int = 42
let pi: Double = 3.14159265359
let isSimulator: Bool = false
let initial: Character = "A"
let username: String = "Abhay"`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 8. Swift Operators
  {
    id: 'swift-operators',
    title: 'Swift Operators & Ranges',
    slug: 'swift-operators',
    summary: 'Arithmetic, compound assignment, comparison, and signature Range operators (1...5 and 1..<5).',
    readTime: '4 min',
    category: 'Swift Basics',
    content: {
      overview: 'Swift provides standard arithmetic operators with overflow protection, plus closed range (a...b) and half-open range (a..<b) operators.',
      sections: [
        {
          heading: 'Range Operators',
          body: 'Using ranges in Swift:',
          code: `// Closed range: 1 to 5 inclusive
let closed = 1...5

// Half-open range: 1 up to (not including) 5:
let halfOpen = 1..<5

for i in 1...3 {
    print("Step \\(i)")
}`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 9. Swift Strings & Interpolation
  {
    id: 'swift-strings',
    title: 'Swift Strings & String Interpolation',
    slug: 'swift-strings',
    summary: 'Multiline literals ("""), string interpolation using \\(expression), and string manipulation.',
    readTime: '4 min',
    category: 'Swift Basics',
    content: {
      overview: 'A String is an ordered collection of characters. Swift strings are Unicode-compliant and support string interpolation using the \\() syntax.',
      sections: [
        {
          heading: 'String Interpolation in Swift',
          body: 'Embedding expressions inside strings:',
          code: `let name = "Developer"
let batteryLevel = 87
let isCharging = true

// String interpolation with \\(expression)
let status = "User: \\(name), Battery: \\(batteryLevel)%, Charging: \\(isCharging)"
print(status)

// Multiline string literal:
let emailTemplate = """
Hello \\(name),
Thank you for creating an account on DevAura.
Your activation token has been validated.
"""
print(emailTemplate)`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 10. Swift Booleans
  {
    id: 'swift-booleans',
    title: 'Swift Booleans',
    slug: 'swift-booleans',
    summary: 'Logical evaluations (true / false), comparison checks, and toggle() method.',
    readTime: '3 min',
    category: 'Swift Basics',
    content: {
      overview: 'Swift has a basic Boolean type called Bool. Swift provides two Boolean constant values: true and false.',
      sections: [
        {
          heading: 'Mutating Booleans with toggle()',
          body: 'Working with booleans:',
          code: `var isLightMode = true
isLightMode.toggle() // Flips to false

if !isLightMode {
    print("Dark theme enabled")
}`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 11. Swift Conditions: If...Else & Switch
  {
    id: 'swift-conditions',
    title: 'Swift Conditions: If...Else & Switch',
    slug: 'swift-conditions',
    summary: 'Branching decisions with if, else if, else, and pattern-matching switch statements.',
    readTime: '4 min',
    category: 'Swift Control Flow',
    content: {
      overview: 'Swift condition expressions do not require parentheses around the test expression. Switch statements in Swift are exhaustive and do not fall through automatically.',
      sections: [
        {
          heading: 'Exhaustive Switch & Ranges',
          body: 'Pattern matching over numbers and strings:',
          code: `let batteryPercentage = 65

switch batteryPercentage {
case 100:
    print("Battery is fully charged")
case 70...99:
    print("Battery is high")
case 20...69:
    print("Battery is moderate")
case 0..<20:
    print("Low Battery Warning!")
default:
    print("Invalid battery state")
}`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 12. Swift While Loops
  {
    id: 'swift-while-loops',
    title: 'Swift While & Repeat-While Loops',
    slug: 'swift-while-loops',
    summary: 'Execute loops with while (condition checked first) and repeat-while (condition checked after).',
    readTime: '4 min',
    category: 'Swift Control Flow',
    content: {
      overview: 'A while loop performs a set of statements until a condition becomes false. repeat-while is Swift’s equivalent to do-while in other languages.',
      sections: [
        {
          heading: 'While and Repeat-While Syntax',
          body: 'Loop examples:',
          code: `var count = 3
while count > 0 {
    print("Countdown: \\(count)")
    count -= 1
}

var x = 1
repeat {
    print("Repeat value: \\(x)")
    x += 1
} while x <= 2`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 13. Swift For-In Loops
  {
    id: 'swift-for-loops',
    title: 'Swift For-In Loops',
    slug: 'swift-for-loops',
    summary: 'Iterate across sequences, collections, and ranges using for-in.',
    readTime: '4 min',
    category: 'Swift Control Flow',
    content: {
      overview: 'The for-in loop is the standard loop in Swift to iterate through arrays, dictionaries, strings, and integer ranges.',
      sections: [
        {
          heading: 'For-In Loop Examples',
          body: 'Looping through collections and ranges:',
          code: `// Closed range (1 to 5 inclusive):
for index in 1...5 {
    print("Step: \\(index)")
}

// Half-open range (0 up to 3):
for i in 0..<3 {
    print("Index: \\(i)")
}

// Iterating over an array:
let frameworks = ["SwiftUI", "Combine", "CoreData", "Metal"]
for framework in frameworks {
    print("Learning \\(framework)")
}`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 14. Swift Arrays
  {
    id: 'swift-arrays',
    title: 'Swift Arrays',
    slug: 'swift-arrays',
    summary: 'Ordered collections of values: append, insert, remove, count, and isEmpty.',
    readTime: '4 min',
    category: 'Swift Data Structures',
    content: {
      overview: 'An array stores values of the same type in an ordered list. Arrays in Swift are typed as Array<Element> or [Element].',
      sections: [
        {
          heading: 'Array Operations',
          body: 'Adding, removing, and indexing array items:',
          code: `var fruits = ["Apple", "Banana", "Cherry"]
fruits.append("Orange")
fruits.insert("Mango", at: 0)

print("First fruit: \\(fruits[0]), count: \\(fruits.count)")

// Remove item:
let removed = fruits.remove(at: 1)`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 15. Swift Sets
  {
    id: 'swift-sets',
    title: 'Swift Sets',
    slug: 'swift-sets',
    summary: 'Unordered collections of unique values with Set operations (union, intersection, subtracting).',
    readTime: '4 min',
    category: 'Swift Data Structures',
    content: {
      overview: 'A set stores distinct values of the same type in a collection with no defined ordering. Use a set instead of an array when the order of items is not important or when values must be unique.',
      sections: [
        {
          heading: 'Working with Sets',
          body: 'Set syntax:',
          code: `var genres: Set<String> = ["Rock", "Classical", "Hip hop"]
genres.insert("Jazz")
genres.insert("Rock") // Duplicate is ignored!

print("Unique genre count: \\(genres.count)") // 4`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 16. Swift Dictionaries
  {
    id: 'swift-dictionaries',
    title: 'Swift Dictionaries',
    slug: 'swift-dictionaries',
    summary: 'Unordered associations between unique keys and corresponding values [KeyType: ValueType].',
    readTime: '4 min',
    category: 'Swift Data Structures',
    content: {
      overview: 'A dictionary stores associations between keys of the same type and values of the same type. Each value is associated with a unique key.',
      sections: [
        {
          heading: 'Dictionary Syntax',
          body: 'Accessing and updating dictionaries:',
          code: `var airports: [String: String] = [
    "JFK": "John F. Kennedy Airport",
    "LHR": "London Heathrow Airport",
    "HND": "Tokyo Haneda Airport"
]

// Adding or updating:
airports["DXB"] = "Dubai International Airport"

// Safe dictionary access returns an Optional:
if let airportName = airports["JFK"] {
    print("Found: \\(airportName)")
}`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 17. Swift Functions
  {
    id: 'swift-functions',
    title: 'Swift Functions',
    slug: 'swift-functions',
    summary: 'Function definitions, argument labels, parameter names, default values, and return types.',
    readTime: '5 min',
    category: 'Swift Functions',
    content: {
      overview: 'Swift functions have rich argument labels that make code read like natural English sentences when called.',
      sections: [
        {
          heading: 'Argument Labels in Swift Functions',
          body: 'Defining external argument labels and internal parameter names:',
          code: `// 'for' is the external argument label, 'person' is the internal parameter:
func greet(for person: String, from hometown: String = "Cupertino") -> String {
    return "Hello \\(person), welcome from \\(hometown)!"
}

// Calling the function reads like an English sentence:
let message = greet(for: "Alice", from: "San Francisco")
print(message)

// Omitting the argument label with underscore _:
func square(_ number: Int) -> Int {
    return number * number
}
print(square(8)) // 64`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 18. Swift Optionals & Safe Unwrapping
  {
    id: 'swift-optionals',
    title: 'Swift Optionals & Safe Unwrapping',
    slug: 'swift-optionals',
    summary: 'Eliminate null pointer crashes using Optionals (Type?), if let, guard let, and nil-coalescing (??).',
    readTime: '6 min',
    category: 'Swift Advanced',
    content: {
      overview: 'An Optional represents two possibilities: either there is a value and you can unwrap it, or there is no value at all (nil). Non-optional types can never be nil in Swift.',
      sections: [
        {
          heading: 'Optional Binding: if let and guard let',
          body: 'Safe unwrapping techniques:',
          code: `var serverResponse: String? = "200 OK"

// 1. Optional binding with if let:
if let response = serverResponse {
    print("Response received: \\(response)")
} else {
    print("No response from server")
}

// 2. Nil-coalescing operator (??) provides fallback:
let finalMessage = serverResponse ?? "Default Fallback"

// 3. guard let for early exit inside functions:
func processUsername(_ input: String?) {
    guard let username = input, !username.isEmpty else {
        print("Invalid username provided")
        return
    }
    print("Processing user: \\(username)")
}`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 19. Swift Structs
  {
    id: 'swift-structs',
    title: 'Swift Structs (Value Types)',
    slug: 'swift-structs',
    summary: 'Value type data models, automatic memberwise initializers, and mutating methods.',
    readTime: '5 min',
    category: 'Swift OOP',
    content: {
      overview: 'Structs are value types in Swift, meaning instances are copied when assigned to a new variable or passed to a function. Apple strongly recommends using Structs by default for models.',
      sections: [
        {
          heading: 'Defining Structs and Mutating Methods',
          body: 'Struct syntax in Swift:',
          code: `struct Resolution {
    var width = 1920
    var height = 1080

    mutating func set4K() {
        self.width = 3840
        self.height = 2160
    }
}

var hd = Resolution()
var cinema = hd // Creates a complete independent COPY
cinema.set4K()

print("HD width: \\(hd.width)")         // 1920 (unchanged)
print("Cinema width: \\(cinema.width)") // 3840`,
          codeLanguage: 'swift',
          interactive: true
        }
      ]
    }
  },

  // 20. Swift Classes & Inheritance
  {
    id: 'swift-classes',
    title: 'Swift Classes & Inheritance (Reference Types)',
    slug: 'swift-classes',
    summary: 'Reference type objects, single inheritance, designated initializers (init), deinitializers (deinit), and ARC.',
    readTime: '5 min',
    category: 'Swift OOP',
    content: {
      overview: 'Classes in Swift are reference types: instances share a single copy of data when assigned to multiple variables. Classes support single inheritance and polymorphism.',
      sections: [
        {
          heading: 'Classes and Inheritance',
          body: 'Class syntax with inheritance:',
          code: `class Vehicle {
    var currentSpeed = 0.0

    func makeNoise() {
        // base vehicle makes no noise
    }
}

class Bicycle: Vehicle {
    var hasBasket = false

    override func makeNoise() {
        print("Ring ring!")
    }
}

let bike = Bicycle()
bike.makeNoise() // "Ring ring!"`,
          codeLanguage: 'swift',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Swift OOP Engine</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Bicycle instantiated: reference type
Speed: 0.0 mph
makeNoise() overridden -> "Ring ring!"</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
