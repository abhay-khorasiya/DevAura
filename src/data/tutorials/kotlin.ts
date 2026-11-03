import { TutorialChapter } from '../../types';

export const kotlinChapters: TutorialChapter[] = [
  // 1. Kotlin HOME
  {
    id: 'kotlin-home',
    title: 'Kotlin HOME',
    slug: 'kotlin-home',
    summary: 'Kotlin is a modern, statically-typed programming language used by over 60% of professional Android developers.',
    readTime: '3 min',
    category: 'Kotlin Tutorial',
    content: {
      overview: 'Developed by JetBrains and officially designated by Google as the premier language for Android development, Kotlin is fully interoperable with Java while eliminating boilerplate code and null pointer exceptions.',
      sections: [
        {
          heading: 'Your First Kotlin Program',
          body: 'Writing the main function in Kotlin:',
          code: `fun main() {
    println("Hello, DevAura Kotlin!")
}`,
          codeLanguage: 'kotlin',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Kotlin JVM Output</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Hello, DevAura Kotlin!</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Kotlin Intro
  {
    id: 'kotlin-intro',
    title: 'Kotlin Introduction',
    slug: 'kotlin-intro',
    summary: 'Why developers love Kotlin: 100% Java interoperability, null safety by design, and concise expressive syntax.',
    readTime: '4 min',
    category: 'Kotlin Tutorial',
    content: {
      overview: 'Kotlin runs on the Java Virtual Machine (JVM) and can also compile to JavaScript and native binaries (Kotlin Multiplatform). It delivers concise syntax, eliminating Java getters/setters, semicolons, and verbose boilerplate.',
      sections: [
        {
          heading: 'Key Benefits of Kotlin',
          body: '1. Null Safety: The type system distinguishes between nullable and non-nullable references, preventing NullPointerExceptions.\n2. Concise Syntax: Data classes automatically generate equals, hashCode, and toString.\n3. Java Interoperable: You can call Java from Kotlin and Kotlin from Java without conversion wrappers.',
          code: `// A full POJO / Model in 1 line:
data class User(val id: Int, val name: String, val email: String)`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 3. Kotlin Get Started
  {
    id: 'kotlin-getstarted',
    title: 'Kotlin Get Started',
    slug: 'kotlin-getstarted',
    summary: 'Setting up Kotlin with IntelliJ IDEA, Android Studio, or command-line kotlinc.',
    readTime: '3 min',
    category: 'Kotlin Tutorial',
    content: {
      overview: 'JetBrains IntelliJ IDEA and Android Studio come with built-in Kotlin support. You can also compile using the Kotlin CLI compiler or Gradle build tool.',
      sections: [
        {
          heading: 'Compiling with kotlinc',
          body: 'Compiling Kotlin files to JVM bytecode:',
          code: `# Compile to JAR executable:
kotlinc Main.kt -include-runtime -d Main.jar

# Run using standard Java runtime:
java -jar Main.jar`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 4. Kotlin Syntax
  {
    id: 'kotlin-syntax',
    title: 'Kotlin Syntax',
    slug: 'kotlin-syntax',
    summary: 'Standard program structure, fun main() entry point, and clean statement endings without semicolons.',
    readTime: '4 min',
    category: 'Kotlin Basics',
    content: {
      overview: 'Kotlin code execution begins at the fun main() entry point. Semicolons are optional and rarely used.',
      sections: [
        {
          heading: 'Writing Kotlin Statements',
          body: 'Entry point definition:',
          code: `package com.devaura.demo

fun main() {
    println("Welcome to Kotlin Programming!")
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 5. Kotlin Output
  {
    id: 'kotlin-output',
    title: 'Kotlin Output: print vs println',
    slug: 'kotlin-output',
    summary: 'Printing to stdout with print() (no newline) vs println() (appends newline).',
    readTime: '3 min',
    category: 'Kotlin Basics',
    content: {
      overview: 'The print() function outputs text without appending a newline, whereas println() adds a newline at the end.',
      sections: [
        {
          heading: 'Outputting Text and Numbers',
          body: 'Printing examples:',
          code: `fun main() {
    print("Dev")
    print("Aura ")
    println("Platform")
    println(100 + 42)
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 6. Kotlin Comments
  {
    id: 'kotlin-comments',
    title: 'Kotlin Comments',
    slug: 'kotlin-comments',
    summary: 'Documenting code with single-line (//), multi-line (/* */), and nested block comments.',
    readTime: '3 min',
    category: 'Kotlin Basics',
    content: {
      overview: 'Kotlin supports single-line and multi-line comments. Unlike C and Java, multi-line comments in Kotlin can be nested.',
      sections: [
        {
          heading: 'Nested Comments',
          body: 'Writing comments in Kotlin:',
          code: `// This is a single-line comment

/* This is a multi-line comment
   /* Nested comment inside! */
   Still inside the outer comment */
val pi = 3.14159`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 7. Kotlin Variables: val vs var
  {
    id: 'kotlin-variables',
    title: 'Kotlin Variables: val vs var',
    slug: 'kotlin-variables',
    summary: 'Immutable references with val versus mutable state with var, plus type inference.',
    readTime: '4 min',
    category: 'Kotlin Basics',
    content: {
      overview: 'Kotlin encourages immutability. val creates read-only (immutable) variables, while var creates mutable variables that can be reassigned.',
      sections: [
        {
          heading: 'val and var Declarations',
          body: 'Always prefer val unless reassignment is required:',
          code: `fun main() {
    val birthYear = 2002  // Read-only (cannot be reassigned)
    var currentScore = 10 // Mutable

    currentScore = 15     // Allowed
    // birthYear = 2003   // Compilation error: Val cannot be reassigned

    // Explicit type vs inferred type:
    val platform: String = "DevAura"
    val count = 42        // Inferred as Int
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 8. Kotlin Data Types
  {
    id: 'kotlin-data-types',
    title: 'Kotlin Data Types',
    slug: 'kotlin-data-types',
    summary: 'Numbers (Byte, Short, Int, Long, Float, Double), Booleans, Characters, and Strings.',
    readTime: '4 min',
    category: 'Kotlin Basics',
    content: {
      overview: 'In Kotlin, all types are objects (there are no primitive types at the language level, though the compiler optimizes them into JVM primitives).',
      sections: [
        {
          heading: 'Numeric Types and Literals',
          body: 'Explicit numeric types:',
          code: `val myNum: Int = 100000
val myDouble: Double = 19.99
val myLetter: Char = 'D'
val myBool: Boolean = true
val myText: String = "DevAura"

// Type conversions:
val x: Int = 5
val y: Long = x.toLong()`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 9. Kotlin Operators
  {
    id: 'kotlin-operators',
    title: 'Kotlin Operators',
    slug: 'kotlin-operators',
    summary: 'Arithmetic (+, -, *, /, %), Assignment (+=, -=), Comparison (==, !=, <, >), and Logical (&&, ||, !).',
    readTime: '3 min',
    category: 'Kotlin Basics',
    content: {
      overview: 'Kotlin provides arithmetic, assignment, comparison, and logical operators.',
      sections: [
        {
          heading: 'Arithmetic and Comparisons',
          body: 'Evaluating operators:',
          code: `val sum = 50 + 25
val quotient = 9 / 2 // Integer division: 4
val remainder = 9 % 2 // 1

val isGreater = sum > 70 // true`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 10. Kotlin Strings & Templates
  {
    id: 'kotlin-strings',
    title: 'Kotlin Strings & String Templates',
    slug: 'kotlin-strings',
    summary: 'String methods (.length, .uppercase()) and string template interpolation ($var and ${expr}).',
    readTime: '4 min',
    category: 'Kotlin Basics',
    content: {
      overview: 'String literals can contain template expressions: pieces of code evaluated and concatenated into the string.',
      sections: [
        {
          heading: 'String Templates',
          body: 'Interpolating expressions:',
          code: `fun main() {
    val items = 4
    val unitPrice = 19.99
    val productName = "Wireless Earbuds"

    // String templates using $variable and \${expression}:
    println("Item: $productName")
    println("Total: \${items * unitPrice}")
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 11. Kotlin Booleans
  {
    id: 'kotlin-booleans',
    title: 'Kotlin Booleans',
    slug: 'kotlin-booleans',
    summary: 'Boolean logic, true/false values, and condition evaluations.',
    readTime: '3 min',
    category: 'Kotlin Basics',
    content: {
      overview: 'The Boolean type represents values that can only be either true or false.',
      sections: [
        {
          heading: 'Boolean Expressions',
          body: 'Evaluating truthiness:',
          code: `val isKotlinFun = true
val isFishTasty = false

val age = 22
println(age >= 18) // true`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 12. Kotlin If...Else
  {
    id: 'kotlin-conditions',
    title: 'Kotlin If...Else as Expression',
    slug: 'kotlin-conditions',
    summary: 'Using if...else as both control flow statements and returnable ternary replacement expressions.',
    readTime: '4 min',
    category: 'Kotlin Control Flow',
    content: {
      overview: 'In Kotlin, if is an expression that returns a value. Because of this, Kotlin has no ternary operator (condition ? a : b); if...else expressions fulfill this role.',
      sections: [
        {
          heading: 'If as an Expression',
          body: 'Assigning the result of an if expression to a variable:',
          code: `fun main() {
    val a = 25
    val b = 40

    // Ternary replacement:
    val max = if (a > b) a else b
    println("The maximum value is: $max")
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 13. Kotlin When
  {
    id: 'kotlin-when',
    title: 'Kotlin When Expression',
    slug: 'kotlin-when',
    summary: 'Replacing complex switch statements with Kotlin’s expressive when expression.',
    readTime: '4 min',
    category: 'Kotlin Control Flow',
    content: {
      overview: 'The when construct matches its argument against all branches sequentially until a condition is satisfied. It can be used as a statement or an expression.',
      sections: [
        {
          heading: 'Pattern Matching with When',
          body: 'Branch conditions and range checks:',
          code: `fun main() {
    val statusCode = 200

    val response = when (statusCode) {
        200, 201 -> "HTTP Success"
        400 -> "Bad Request"
        401, 403 -> "Authentication Error"
        404 -> "Not Found"
        in 500..599 -> "Server Error"
        else -> "Unknown status code"
    }

    println("Status result: $response")
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 14. Kotlin While Loops
  {
    id: 'kotlin-while',
    title: 'Kotlin While & Do...While Loops',
    slug: 'kotlin-while',
    summary: 'Iterate while condition is true, with break and continue control statements.',
    readTime: '4 min',
    category: 'Kotlin Control Flow',
    content: {
      overview: 'While loops execute a block of code as long as a condition is true. Do-while loops execute the block at least once before checking condition.',
      sections: [
        {
          heading: 'While and Do...While',
          body: 'Loop control in Kotlin:',
          code: `fun main() {
    var i = 0
    while (i < 5) {
        println(i)
        i++
    }

    var j = 0
    do {
        println(j)
        j++
    } while (j < 3)
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 15. Kotlin Arrays
  {
    id: 'kotlin-arrays',
    title: 'Kotlin Arrays',
    slug: 'kotlin-arrays',
    summary: 'Array creation with arrayOf(), index element access [i], and size property.',
    readTime: '4 min',
    category: 'Kotlin Data Structures',
    content: {
      overview: 'Arrays in Kotlin are represented by the Array class, providing get/set methods and size property.',
      sections: [
        {
          heading: 'Array Syntax',
          body: 'Creating and modifying arrays:',
          code: `fun main() {
    val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
    println(cars[0]) // "Volvo"
    cars[0] = "Opel"

    println("Total cars: \${cars.size}")
    if ("BMW" in cars) {
        println("BMW exists in array!")
    }
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 16. Kotlin For Loops
  {
    id: 'kotlin-for',
    title: 'Kotlin For Loops',
    slug: 'kotlin-for',
    summary: 'Iterate through arrays, collections, and iterators using for (item in collection).',
    readTime: '4 min',
    category: 'Kotlin Control Flow',
    content: {
      overview: 'The for loop iterates through anything that provides an iterator.',
      sections: [
        {
          heading: 'For Loop over Arrays',
          body: 'Traversing elements and indices:',
          code: `fun main() {
    val cars = arrayOf("Volvo", "BMW", "Ford")
    for (car in cars) {
        println(car)
    }

    // Iterating with index:
    for (i in cars.indices) {
        println("Car at index $i is \${cars[i]}")
    }
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 17. Kotlin Ranges
  {
    id: 'kotlin-ranges',
    title: 'Kotlin Ranges',
    slug: 'kotlin-ranges',
    summary: 'Iterate over ranges (1..10, downTo, step, until) and check membership with "in".',
    readTime: '4 min',
    category: 'Kotlin Control Flow',
    content: {
      overview: 'Kotlin provides powerful range expressions (1..5) that seamlessly integrate with for loops and step increments.',
      sections: [
        {
          heading: 'Range Iterations',
          body: 'Looping through ranges and steps:',
          code: `fun main() {
    // Range inclusive (1 through 5):
    for (chars in 'a'..'d') {
        print("$chars ")
    }
    println()

    // Step increment:
    for (i in 0..10 step 2) {
        print("$i ")
    }
    println()

    // Countdown with downTo:
    for (i in 5 downTo 1) {
        print("$i ")
    }
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 18. Kotlin Functions
  {
    id: 'kotlin-functions',
    title: 'Kotlin Functions',
    slug: 'kotlin-functions',
    summary: 'Declaring functions with named parameters, default values, and concise single-expression syntax.',
    readTime: '4 min',
    category: 'Kotlin Functions',
    content: {
      overview: 'Functions are declared with the fun keyword. When a function returns a single expression, the curly braces and return keyword can be omitted.',
      sections: [
        {
          heading: 'Single-Expression & Default Parameters',
          body: 'Clean function definitions:',
          code: `// Standard function with default parameter
fun greetUser(name: String, prefix: String = "Welcome"): String {
    return "$prefix, $name!"
}

// Single-expression function:
fun square(x: Int): Int = x * x

fun main() {
    println(greetUser("Alice"))
    println(greetUser("Bob", prefix = "Hello"))
    println("Square of 7 is: \${square(7)}")
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 19. Kotlin OOP & Classes
  {
    id: 'kotlin-oop',
    title: 'Kotlin OOP & Classes',
    slug: 'kotlin-oop',
    summary: 'Object-oriented programming in Kotlin: Class declarations, objects, properties, and member functions.',
    readTime: '5 min',
    category: 'Kotlin OOP',
    content: {
      overview: 'Kotlin classes are declared using the class keyword. Objects are instances of classes.',
      sections: [
        {
          heading: 'Creating Classes and Objects',
          body: 'Class definitions:',
          code: `class Car {
    var brand = ""
    var model = ""
    var year = 0

    fun drive() {
        println("Vroom!")
    }
}

fun main() {
    val c1 = Car()
    c1.brand = "Ford"
    c1.model = "Mustang"
    c1.year = 1969
    c1.drive()
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 20. Kotlin Constructors
  {
    id: 'kotlin-constructors',
    title: 'Kotlin Constructors & Init Block',
    slug: 'kotlin-constructors',
    summary: 'Primary constructors in class headers, property initialization, and init blocks.',
    readTime: '4 min',
    category: 'Kotlin OOP',
    content: {
      overview: 'In Kotlin, a class can have a primary constructor and one or more secondary constructors. The primary constructor is part of the class header.',
      sections: [
        {
          heading: 'Primary Constructor Syntax',
          body: 'Concise class properties:',
          code: `class Person(val firstName: String, var age: Int) {
    init {
        println("Person created: $firstName, age: $age")
    }
}

fun main() {
    val p1 = Person("Abhay", 22)
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 21. Kotlin Inheritance
  {
    id: 'kotlin-inheritance',
    title: 'Kotlin Inheritance',
    slug: 'kotlin-inheritance',
    summary: 'Subclassing with the "open" keyword, calling superclass constructors, and overriding methods.',
    readTime: '5 min',
    category: 'Kotlin OOP',
    content: {
      overview: 'By default, Kotlin classes are final and cannot be inherited. To allow a class to be subclassed, mark it with the open keyword.',
      sections: [
        {
          heading: 'Open Classes and Method Overrides',
          body: 'Inheritance example:',
          code: `// Superclass marked open:
open class Vehicle(val brand: String) {
    open fun honk() {
        println("Beep beep!")
    }
}

// Subclass inherits Vehicle:
class Car(brand: String, val model: String) : Vehicle(brand) {
    override fun honk() {
        println("Honk honk from $brand $model!")
    }
}

fun main() {
    val myCar = Car("Tesla", "Model S")
    myCar.honk()
}`,
          codeLanguage: 'kotlin',
          interactive: true
        }
      ]
    }
  },

  // 22. Kotlin Null Safety
  {
    id: 'kotlin-null-safety',
    title: 'Kotlin Null Safety',
    slug: 'kotlin-null-safety',
    summary: 'Eliminate the Billion-Dollar Mistake using nullable types (?), safe calls (?.), Elvis operator (?:), and not-null assertion (!!).',
    readTime: '5 min',
    category: 'Kotlin Advanced',
    content: {
      overview: 'Kotlin’s type system explicitly differentiates between references that can hold null (nullable types: String?) and those that cannot (non-nullable types: String).',
      sections: [
        {
          heading: 'Handling Nulls Gracefully',
          body: 'Safe navigation and Elvis operator:',
          code: `fun main() {
    val nonNullable: String = "DevAura"
    // nonNullable = null // Compilation error!

    val nullableName: String? = null

    // Safe call operator (?.)
    val length: Int? = nullableName?.length
    println("Length is: $length") // prints "null" without crashing

    // Elvis operator (?:) provides fallback default:
    val displayName: String = nullableName ?: "Guest Visitor"
    println("Hello, $displayName")
}`,
          codeLanguage: 'kotlin',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Kotlin Null-Safe Execution</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Length is: null
Hello, Guest Visitor</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
