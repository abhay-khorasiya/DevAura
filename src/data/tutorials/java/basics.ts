import { TutorialChapter } from '../../../types';

export const javaBasicsChapters: TutorialChapter[] = [
  // 1. Java HOME
  {
    id: 'java-home',
    title: 'Java HOME',
    slug: 'java-home',
    summary: 'Java is an extremely popular class-based, object-oriented language: Write Once, Run Anywhere.',
    readTime: '4 min',
    category: 'Java Tutorial',
    content: {
      overview: 'Java is a popular programming language, created in 1995 by Sun Microsystems (now owned by Oracle). More than 3 billion devices run Java. It is used for mobile apps (Android), desktop applications, web servers and application servers, enterprise software, and big data.',
      sections: [
        {
          heading: 'Your First Java Program',
          body: 'Every Java program has a class name which must match the filename, and a main() method which is the entry point.',
          code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Java Console Output</h3>
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    $ javac Main.java<br>
    $ java Main<br>
    Hello World
  </div>
</body>
</html>`,
          tips: [
            'In Java, every line of code that can be executed needs to be inside a class.'
          ]
        }
      ]
    }
  },

  // 2. Java Intro
  {
    id: 'java-intro',
    title: 'Java Introduction',
    slug: 'java-intro',
    summary: 'Why use Java? The Java Virtual Machine (JVM), JDK, JRE, and platform independence.',
    readTime: '5 min',
    category: 'Java Tutorial',
    content: {
      overview: 'Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.). It is one of the most popular programming languages in the world. It has a huge demand in the current job market. It is easy to learn and simple to use. It is open-source and free.',
      sections: [
        {
          heading: 'JVM, JRE, and JDK',
          body: 'JDK (Java Development Kit) includes tools to compile code. JRE provides libraries to run code. JVM (Java Virtual Machine) executes compiled bytecode (.class) on any operating system.',
          code: `// Java compilation workflow:
// Main.java (Source code) 
//   -> javac Main.java (Compiles to Bytecode)
//   -> Main.class (Bytecode)
//   -> java Main (JVM executes bytecode on CPU)`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Write Once, Run Anywhere (WORA)</h3>
  <div style="background:#eff6ff; border:2px solid #3b82f6; padding:16px; border-radius:8px;">
    The same compiled <code>.class</code> bytecode runs on Windows, Linux, macOS, and Android without recompilation.
  </div>
</body>
</html>`,
          tips: [
            'Java is class-based and strictly typed; every variable must have a declared type.'
          ]
        }
      ]
    }
  },

  // 3. Java Syntax
  {
    id: 'java-syntax',
    title: 'Java Syntax',
    slug: 'java-syntax',
    summary: 'The main() method, System.out.println(), curly brackets {}, and case-sensitivity.',
    readTime: '5 min',
    category: 'Java Tutorial',
    content: {
      overview: 'Every line of code that runs in Java must be inside a class. The name of the java file must match the class name. When saving the file, save it using the class name and add ".java" to the end of the filename (e.g. Main.java).',
      sections: [
        {
          heading: 'The main() Method Anatomy',
          body: 'public static void main(String[] args) is required in every Java program as the execution starting point.',
          code: `public class Main {
  // Entry point of program:
  public static void main(String[] args) {
    // System is built-in class, out is output stream, println prints line:
    System.out.println("Hello, DevAura Java!");
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Syntax Verification</h3>
  <p><code>System.out.println("Line 1");</code> prints text followed by a new line.</p>
</body>
</html>`,
          tips: [
            'Java is case-sensitive: MyClass and myclass are completely different identifiers.'
          ]
        }
      ]
    }
  },

  // 4. Java Output
  {
    id: 'java-output',
    title: 'Java Output / Print',
    slug: 'java-output',
    summary: 'Outputting text and numbers: System.out.println() vs System.out.print().',
    readTime: '4 min',
    category: 'Java Tutorial',
    content: {
      overview: 'You can add as many println() methods as you want. Note that it will add a new line for each method. There is also a print() method, which is similar to println(). The only difference is that it does not insert a new line at the end of the output.',
      sections: [
        {
          heading: 'println() vs. print()',
          body: 'println inserts a newline, while print leaves the cursor on the same line.',
          code: `System.out.println("Hello World!");
System.out.println("I will print on a new line.");

// print without newline:
System.out.print("Hello ");
System.out.print("World!"); // Output: "Hello World!"

// Printing Numbers & Calculations:
System.out.println(3 + 3);  // Outputs: 6
System.out.println(2 * 5);  // Outputs: 10`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Output Stream</h3>
  <div style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">
    3 + 3 = 6<br>
    Hello World!
  </div>
</body>
</html>`,
          tips: [
            'Text strings must be wrapped in double quotes (" "); single quotes (\' \') are reserved for single characters (char).'
          ]
        }
      ]
    }
  },

  // 5. Java Comments
  {
    id: 'java-comments',
    title: 'Java Comments',
    slug: 'java-comments',
    summary: 'Single-line comments (//), multi-line comments (/* */), and Javadoc (/** */).',
    readTime: '3 min',
    category: 'Java Tutorial',
    content: {
      overview: 'Comments can be used to explain Java code, and to make it more readable. It can also be used to prevent execution when testing alternative code. Single-line comments start with two forward slashes (//). Multi-line comments start with /* and end with */.',
      sections: [
        {
          heading: 'Javadoc Documentation Comments',
          body: 'Javadoc comments start with /** and allow automated API documentation generation.',
          code: `// Single-line comment

/* Multi-line comment
   explaining architecture */

/**
 * Calculates user account balance.
 * @param userId ID of active account
 * @return current balance in USD
 */
public double getBalance(int userId) {
    return 150.00;
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Java Documentation</h3>
  <p><code>/** ... */</code> creates structured Javadoc documentation recognized by IDEs.</p>
</body>
</html>`,
          tips: [
            'Javadoc comments placed right above methods generate standard HTML API docs via the javadoc command.'
          ]
        }
      ]
    }
  },

  // 6. Java Variables
  {
    id: 'java-variables',
    title: 'Java Variables',
    slug: 'java-variables',
    summary: 'Variables are containers for storing data values: String, int, float, char, boolean, and final.',
    readTime: '5 min',
    category: 'Java Tutorial',
    content: {
      overview: 'In Java, there are different types of variables: String (stores text, like "Hello"), int (stores integers, like 123), float (stores floating point numbers, like 19.99), char (stores single characters, like \'a\'), boolean (stores values with two states: true or false).',
      sections: [
        {
          heading: 'Declaring Variables & The final Keyword',
          body: 'Syntax: type variableName = value;. Use final to declare unchangeable constants.',
          code: `String name = "John";
int myNum = 15;
float myFloatNum = 5.99f;
char myLetter = 'D';
boolean myBool = true;

// Constant variable with final:
final int MINUTES_PER_HOUR = 60;
// MINUTES_PER_HOUR = 50; // Error: cannot assign a value to final variable`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Java Typed Declarations</h3>
  <p><code>final double PI = 3.14159;</code> guarantees PI cannot be overwritten.</p>
</body>
</html>`,
          tips: [
            'Float literals must end with an f or F (e.g. 5.99f); otherwise Java treats them as double.'
          ]
        }
      ]
    }
  },

  // 7. Java Data Types
  {
    id: 'java-data-types',
    title: 'Java Data Types',
    slug: 'java-data-types',
    summary: 'Data types are divided into two groups: Primitive data types and Non-Primitive data types.',
    readTime: '6 min',
    category: 'Java Tutorial',
    content: {
      overview: 'Data types in Java are divided into two groups: Primitive data types (byte, short, int, long, float, double, boolean, char) and Non-Primitive data types (String, Arrays, Classes, Interfaces). Primitive types have a fixed size in memory and cannot be null.',
      sections: [
        {
          heading: 'The 8 Primitive Data Types',
          body: 'Size and range of each primitive type:',
          code: `byte myByte = 100;         // 1 byte (-128 to 127)
short myShort = 5000;      // 2 bytes (-32,768 to 32,767)
int myInt = 100000;        // 4 bytes (-2B to 2B)
long myLong = 15000000000L;// 8 bytes (End with L)

float myFloat = 5.75f;     // 4 bytes (6 to 7 decimal digits)
double myDouble = 19.99d;  // 8 bytes (15 decimal digits)

boolean isJavaFun = true;  // 1 bit (true or false)
char myGrade = 'B';        // 2 bytes (Single character)`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Primitive Memory Allocation</h3>
  <p><code>int</code> takes 4 bytes. <code>long</code> takes 8 bytes. <code>double</code> takes 8 bytes.</p>
</body>
</html>`,
          tips: [
            'Non-primitive types (objects) can be used to call methods, while primitive types cannot.'
          ]
        }
      ]
    }
  },

  // 8. Java Type Casting
  {
    id: 'java-type-casting',
    title: 'Java Type Casting',
    slug: 'java-type-casting',
    summary: 'Type casting is when you assign a value of one primitive data type to another type: Widening vs. Narrowing.',
    readTime: '5 min',
    category: 'Java Tutorial',
    content: {
      overview: 'In Java, there are two types of casting: Widening Casting (automatically) - converting a smaller type to a larger type size: byte -> short -> char -> int -> long -> float -> double; Narrowing Casting (manually) - converting a larger type to a smaller type size: double -> float -> long -> int -> char -> short -> byte.',
      sections: [
        {
          heading: 'Widening vs. Narrowing Casting',
          body: 'Narrowing casting requires explicit parentheses (type) and can result in data truncation.',
          code: `// Widening Casting (Automatic, no data loss):
int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double (9.0)

// Narrowing Casting (Manual, potential precision loss):
double d = 9.78d;
int i = (int) d; // Manual casting: double to int (Truncates to 9)`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Narrowing Type Cast</h3>
  <p><code>double d = 9.78; int i = (int) d;</code> &rarr; i is <b>9</b> (decimals dropped).</p>
</body>
</html>`,
          tips: [
            'Narrowing casting truncates decimal digits towards zero; it does not round.'
          ]
        }
      ]
    }
  },

  // 9. Java Operators
  {
    id: 'java-operators',
    title: 'Java Operators',
    slug: 'java-operators',
    summary: 'Operators are used to perform operations on variables and values: Arithmetic, Assignment, Comparison, Logical.',
    readTime: '5 min',
    category: 'Java Tutorial',
    content: {
      overview: 'Java divides the operators into the following groups: Arithmetic operators (+, -, *, /, %, ++, --), Assignment operators (=, +=, -=), Comparison operators (==, !=, >, <, >=, <=), Logical operators (&&, ||, !), and Bitwise operators.',
      sections: [
        {
          heading: 'Arithmetic and Logical Operators',
          body: 'Short-circuit logical operators (&&, ||) stop evaluating once outcome is determined.',
          code: `int x = 100 + 50;
int sum1 = 100 + 50;
int sum2 = sum1 + 250;

// Integer division truncates decimals:
int result = 5 / 2; // 2 (Not 2.5!)
double accurate = 5.0 / 2; // 2.5

// Logical operators:
boolean canVote = (age >= 18) && isCitizen;`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Integer Division Quirk</h3>
  <p><code>5 / 2</code> in Java evaluates to <b>2</b> because both operands are integers.</p>
</body>
</html>`,
          tips: [
            'Always use at least one double operand (5.0 / 2) if you need decimal precision from division.'
          ]
        }
      ]
    }
  },

  // 10. Java Strings
  {
    id: 'java-strings',
    title: 'Java Strings',
    slug: 'java-strings',
    summary: 'Strings are used for storing text. A String variable contains a collection of characters surrounded by double quotes.',
    readTime: '5 min',
    category: 'Java Tutorial',
    content: {
      overview: 'A String in Java is actually an Object, which contain methods that can perform certain operations on strings (for example: length(), toUpperCase(), toLowerCase(), indexOf()).',
      sections: [
        {
          heading: 'String Methods and Immutability',
          body: 'Strings in Java are immutable; their values cannot be changed after creation. String methods return new String objects.',
          code: `String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
System.out.println("Length: " + txt.length()); // 26

String greeting = "Hello World";
System.out.println(greeting.toUpperCase());   // "HELLO WORLD"
System.out.println(greeting.indexOf("World"));// 6

// Comparing Strings (ALWAYS use .equals(), NEVER ==):
String s1 = new String("Java");
String s2 = "Java";
boolean match = s1.equals(s2); // true! (s1 == s2 is false because references differ)`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>String Equality Rule in Java</h3>
  <div style="background:#fee2e2; border:1px solid #f87171; padding:12px; border-radius:6px; color:#991b1b;">
    <b>Critical:</b> In Java, ALWAYS use <code>str1.equals(str2)</code> to compare string content. <code>==</code> compares memory pointers!
  </div>
</body>
</html>`,
          tips: [
            'Never use == to compare Strings in Java; always use .equals() or .equalsIgnoreCase().'
          ]
        }
      ]
    }
  },

  // 11. Java Math
  {
    id: 'java-math',
    title: 'Java Math',
    slug: 'java-math',
    summary: 'The Java Math class has many methods that allows you to perform mathematical tasks on numbers.',
    readTime: '4 min',
    category: 'Java Tutorial',
    content: {
      overview: 'The Java Math class has many methods that allows you to perform mathematical tasks on numbers without creating an object instance: Math.max(), Math.min(), Math.sqrt(), Math.abs(), and Math.random().',
      sections: [
        {
          heading: 'Static Math Methods',
          body: 'Common static methods in the java.lang.Math class:',
          code: `Math.max(5, 10);  // 10
Math.min(5, 10);  // 5
Math.sqrt(64);    // 8.0
Math.abs(-4.7);   // 4.7

// Random number between 0 and 100:
int randomNum = (int)(Math.random() * 101);`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Math.random() Evaluation</h3>
  <p><code>(int)(Math.random() * 101)</code> generates a pseudo-random integer from 0 to 100.</p>
</body>
</html>`,
          tips: [
            'Math is part of java.lang, which is automatically imported into every Java file.'
          ]
        }
      ]
    }
  },

  // 12. Java Booleans
  {
    id: 'java-booleans',
    title: 'Java Booleans',
    slug: 'java-booleans',
    summary: 'A boolean type is declared with the boolean keyword and can only take the values true or false.',
    readTime: '4 min',
    category: 'Java Tutorial',
    content: {
      overview: 'Very often, in programming, you will need a data type that can only have one of two values, like: YES / NO, ON / OFF, TRUE / FALSE. For this, Java has a boolean data type, which can take the values true or false.',
      sections: [
        {
          heading: 'Boolean Expressions',
          body: 'A Boolean expression returns a boolean value: true or false.',
          code: `boolean isJavaFun = true;
boolean isFishTasty = false;

int x = 10;
int y = 9;
System.out.println(x > y); // returns true, because 10 is higher than 9
System.out.println(x == 10); // returns true`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Boolean Condition</h3>
  <p><code>10 &gt; 9</code> evaluates to <b>true</b>.</p>
</body>
</html>`,
          tips: [
            'In Java, 1 and 0 cannot be used as booleans (unlike C/C++); only true and false are legal.'
          ]
        }
      ]
    }
  },

  // 13. Java If...Else
  {
    id: 'java-if-else',
    title: 'Java If...Else',
    slug: 'java-if-else',
    summary: 'Java has the following conditional statements: if, else, else if, and ternary (?:).',
    readTime: '5 min',
    category: 'Java Tutorial',
    content: {
      overview: 'Use if to specify a block of Java code to be executed if a condition is true. Use else to specify a block of code to be executed if the same condition is false. Use else if to specify a new condition to test, if the first condition is false.',
      sections: [
        {
          heading: 'If, Else If, and Ternary Operator',
          body: 'Short hand if...else syntax: variable = (condition) ? expressionTrue : expressionFalse;',
          code: `int time = 20;

if (time < 12) {
  System.out.println("Good morning.");
} else if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}

// Ternary Operator:
String result = (time < 18) ? "Daytime" : "Evening";`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Ternary Operator in Java</h3>
  <p><code>String msg = (age &gt;= 18) ? "Adult" : "Minor";</code></p>
</body>
</html>`,
          tips: [
            'Always use curly brackets {} even for single-line if statements to prevent dangling else bugs.'
          ]
        }
      ]
    }
  },

  // 14. Java Switch
  {
    id: 'java-switch',
    title: 'Java Switch',
    slug: 'java-switch',
    summary: 'The switch statement selects one of many code blocks to be executed.',
    readTime: '5 min',
    category: 'Java Tutorial',
    content: {
      overview: 'Instead of writing many if..else statements, you can use the switch statement. The switch expression is evaluated once. The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed. The break keyword breaks out of the switch block.',
      sections: [
        {
          heading: 'Switch Statements and Strings',
          body: 'Java allows switching on integers, characters, and Strings.',
          code: `int day = 4;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  case 4:
    System.out.println("Thursday");
    break;
  default:
    System.out.println("Looking forward to the Weekend");
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Switch Case Execution</h3>
  <p>Matches <code>case 4:</code> and prints <b>"Thursday"</b>.</p>
</body>
</html>`,
          tips: [
            'In Java 14+, switch expressions allow concise arrow syntax: case 1 -> "Monday";'
          ]
        }
      ]
    }
  },

  // 15. Java While Loop
  {
    id: 'java-while-loop',
    title: 'Java While Loop',
    slug: 'java-while-loop',
    summary: 'Loops can execute a block of code as long as a specified condition is reached: while and do...while.',
    readTime: '4 min',
    category: 'Java Tutorial',
    content: {
      overview: 'The while loop loops through a block of code as long as a specified condition is true. The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.',
      sections: [
        {
          heading: 'While and Do/While Syntax',
          body: 'Ensure the loop counter increments inside the block to avoid an infinite loop.',
          code: `int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}

// do-while:
int j = 10;
do {
  System.out.println("Executes at least once");
} while (j < 5);`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>While Loop Execution</h3>
  <p>Prints numbers 0, 1, 2, 3, 4 sequentially.</p>
</body>
</html>`,
          tips: [
            'do-while is ideal for CLI menu loops that must present options at least once.'
          ]
        }
      ]
    }
  },

  // 16. Java For Loop
  {
    id: 'java-for-loop',
    title: 'Java For Loop',
    slug: 'java-for-loop',
    summary: 'When you know exactly how many times you want to loop through a block of code, use the for loop or for-each loop.',
    readTime: '5 min',
    category: 'Java Tutorial',
    content: {
      overview: 'When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop. Java also has a "for-each" loop, which is used exclusively to loop through elements in an array or collection.',
      sections: [
        {
          heading: 'Standard For Loop vs. Enhanced For-Each Loop',
          body: 'The enhanced for-each loop provides clean, index-free iteration.',
          code: `// Standard for loop:
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

// Enhanced for-each loop over array:
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String car : cars) {
  System.out.println(car);
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Enhanced For-Each Loop</h3>
  <p><code>for (String car : cars)</code> iterates over every element cleanly without index math.</p>
</body>
</html>`,
          tips: [
            'Use the enhanced for-each loop whenever you do not need to modify the array or track index numbers.'
          ]
        }
      ]
    }
  },

  // 17. Java Break and Continue
  {
    id: 'java-break-continue',
    title: 'Java Break and Continue',
    slug: 'java-break-continue',
    summary: 'The break statement jumps out of a loop. The continue statement breaks one iteration in the loop.',
    readTime: '4 min',
    category: 'Java Tutorial',
    content: {
      overview: 'The break statement can also be used to jump out of a loop. The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.',
      sections: [
        {
          heading: 'Break and Continue Examples',
          body: 'break terminates loop execution; continue skips to the next increment.',
          code: `// break:
for (int i = 0; i < 10; i++) {
  if (i == 4) break;
  System.out.println(i); // 0, 1, 2, 3
}

// continue:
for (int i = 0; i < 10; i++) {
  if (i == 4) continue;
  System.out.println(i); // Skips 4
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Break &amp; Continue</h3>
  <p><code>break;</code> exits loop immediately.</p>
  <p><code>continue;</code> skips directly to next step.</p>
</body>
</html>`,
          tips: [
            'Java supports labeled breaks (break myLabel;) to escape deeply nested loops.'
          ]
        }
      ]
    }
  },

  // 18. Java Arrays
  {
    id: 'java-arrays',
    title: 'Java Arrays',
    slug: 'java-arrays',
    summary: 'Arrays are used to store multiple values in a single variable, instead of declaring separate variables.',
    readTime: '5 min',
    category: 'Java Tutorial',
    content: {
      overview: 'To declare an array, define the variable type with square brackets []. In Java, arrays have a fixed size once allocated. To insert values to it, you can place the values in a comma-separated list, inside curly braces. You access an array element by referring to the index number.',
      sections: [
        {
          heading: 'Array Declaration, Length, and Multidimensional Arrays',
          body: 'Arrays use 0-indexed positioning and have a .length property (not a method!).',
          code: `// Array Literal:
String[] cars = {"Volvo", "BMW", "Ford"};
System.out.println(cars[0]); // "Volvo"
System.out.println(cars.length); // 3

// Instantiating with fixed size:
int[] scores = new int[5]; // Fixed 5 integers initialized to 0

// Multidimensional 2D Array:
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
System.out.println(myNumbers[1][2]); // 7`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Java Fixed Array</h3>
  <p><code>String[] cars = {"Volvo", "BMW"};</code></p>
  <p>cars.length = <b>2</b></p>
</body>
</html>`,
          tips: [
            'Array size in Java cannot be altered once created; use ArrayList if you need dynamic resizing.'
          ]
        }
      ]
    }
  },

  // 19. Java Methods
  {
    id: 'java-methods',
    title: 'Java Methods',
    slug: 'java-methods',
    summary: 'A method is a block of code which only runs when it is called. You can pass data (parameters) into a method.',
    readTime: '5 min',
    category: 'Java Methods',
    content: {
      overview: 'A method must be declared within a class. It is defined with the name of the method, followed by parentheses (). To call a method in Java, write the method name followed by two parentheses () and a semicolon ;.',
      sections: [
        {
          heading: 'Creating and Calling Methods',
          body: 'static means that the method belongs to the Main class and not an object of the Main class.',
          code: `public class Main {
  // Method definition:
  static void myMethod() {
    System.out.println("I just got executed!");
  }

  public static void main(String[] args) {
    myMethod(); // Calling method
    myMethod();
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Method Invocation</h3>
  <p><code>myMethod();</code> executes the reusable block of code.</p>
</body>
</html>`,
          tips: [
            'Method names in Java should follow lowerCamelCase (e.g. calculateBonusPayment).'
          ]
        }
      ]
    }
  },

  // 20. Java Method Parameters
  {
    id: 'java-method-parameters',
    title: 'Java Method Parameters & Return Values',
    slug: 'java-method-parameters',
    summary: 'Pass data into methods as parameters. Use the return keyword if you want the method to return a value.',
    readTime: '5 min',
    category: 'Java Methods',
    content: {
      overview: 'Parameters act as variables inside the method. Parameters are specified after the method name, inside the parentheses. You can add as many parameters as you want, just separate them with a comma. If you want the method to return a value, specify the data type (like int or double) instead of void.',
      sections: [
        {
          heading: 'Parameters and Return Values',
          body: 'Replace void with the return type to send data back to the caller.',
          code: `public class Main {
  // Method with parameters & return value:
  static int addNumbers(int x, int y) {
    return x + y;
  }

  // Method with parameter & void (no return):
  static void checkAge(int age) {
    if (age < 18) {
      System.out.println("Access denied");
    } else {
      System.out.println("Access granted");
    }
  }

  public static void main(String[] args) {
    int sum = addNumbers(5, 3); // 8
    checkAge(20);
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Method Return Output</h3>
  <p><code>addNumbers(5, 3)</code> returns <b>8</b>.</p>
</body>
</html>`,
          tips: [
            'Java is strictly pass-by-value; object references are passed by value of the pointer.'
          ]
        }
      ]
    }
  },

  // 21. Java Method Overloading
  {
    id: 'java-method-overloading',
    title: 'Java Method Overloading',
    slug: 'java-method-overloading',
    summary: 'With method overloading, multiple methods can have the same name with different parameters.',
    readTime: '5 min',
    category: 'Java Methods',
    content: {
      overview: 'With method overloading, multiple methods can have the same name with different parameters: PlusMethod(int, int) and PlusMethod(double, double). Multiple methods can have the same name as long as the number and/or type of parameters are different.',
      sections: [
        {
          heading: 'Overloading Syntax',
          body: 'The compiler selects the appropriate method signature based on arguments provided.',
          code: `public class Main {
  static int plusMethod(int x, int y) {
    return x + y;
  }

  static double plusMethod(double x, double y) {
    return x + y;
  }

  public static void main(String[] args) {
    int myNum1 = plusMethod(8, 5);       // Calls int version (13)
    double myNum2 = plusMethod(4.3, 6.26); // Calls double version (10.56)
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Method Overloading</h3>
  <p>Compiler resolves <code>plusMethod(8, 5)</code> &rarr; int version; <code>plusMethod(4.3, 6.26)</code> &rarr; double version.</p>
</body>
</html>`,
          tips: [
            'Overloading is determined by parameter list (types and count), NOT by return type alone.'
          ]
        }
      ]
    }
  },

  // 22. Java Scope
  {
    id: 'java-scope',
    title: 'Java Scope',
    slug: 'java-scope',
    summary: 'In Java, variables are only accessible inside the region they are created: Method Scope and Block Scope.',
    readTime: '4 min',
    category: 'Java Methods',
    content: {
      overview: 'In Java, variables are only accessible inside the region they are created. This is called scope: Method Scope (variables declared directly inside a method are available anywhere in the method following the line of code in which they were declared) and Block Scope (variables declared inside a block {} of code are only accessible inside that block).',
      sections: [
        {
          heading: 'Block Scope and Visibility',
          body: 'A block of code refers to all of the code between curly braces {}.',
          code: `public class Main {
  public static void main(String[] args) {
    // Code here CANNOT use x

    { // This is a block
      int x = 100;
      System.out.println(x); // Works!
    } // The block ends here

    // Code here CANNOT use x
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Block Scope</h3>
  <p>Variables declared inside <code>{ ... }</code> cannot be accessed outside the braces.</p>
</body>
</html>`,
          tips: [
            'Loop counters declared in for (int i = 0; ...) go out of scope as soon as the loop finishes.'
          ]
        }
      ]
    }
  },

  // 23. Java Recursion
  {
    id: 'java-recursion',
    title: 'Java Recursion',
    slug: 'java-recursion',
    summary: 'Recursion is the technique of making a function call itself. Learn base cases and halting conditions.',
    readTime: '5 min',
    category: 'Java Methods',
    content: {
      overview: 'Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve. Every recursive function must have a halting condition (base case) to prevent infinite loops and StackOverflowError.',
      sections: [
        {
          heading: 'Summing Numbers with Recursion',
          body: 'The function calls itself with a decremented value until reaching base case k == 0.',
          code: `public class Main {
  public static int sum(int k) {
    if (k > 0) {
      return k + sum(k - 1); // Recursive call
    } else {
      return 0; // Base halting condition
    }
  }

  public static void main(String[] args) {
    int result = sum(10); // 10 + 9 + 8 + ... + 1 = 55
    System.out.println(result);
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Recursion Call Stack</h3>
  <p><code>sum(10)</code> &rarr; 10 + sum(9) &rarr; ... &rarr; <b>55</b></p>
</body>
</html>`,
          tips: [
            'Without a proper base case, recursive calls consume stack memory until throwing a StackOverflowError.'
          ]
        }
      ]
    }
  },

  // 24. Java OOP Intro
  {
    id: 'java-oop',
    title: 'Java OOP Concepts',
    slug: 'java-oop',
    summary: 'Object-Oriented Programming (OOP) is about creating objects that contain both data and methods.',
    readTime: '5 min',
    category: 'Java OOP',
    content: {
      overview: 'Procedural programming is about writing procedures or methods that perform operations on the data, while object-oriented programming is about creating objects that contain both data and methods. The four core pillars of OOP are: Encapsulation, Inheritance, Polymorphism, and Abstraction.',
      sections: [
        {
          heading: 'Why Use OOP?',
          body: 'OOP is faster and easier to execute, provides a clear structure for the programs, helps to keep the Java code DRY ("Don\'t Repeat Yourself"), and makes the code easier to maintain, modify and debug.',
          code: `// Class is a template for objects
// Object is an instance of a class
// E.g.: Class = Fruit, Objects = Apple, Banana, Mango
// E.g.: Class = Car, Objects = Volvo, Audi, Toyota`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Class vs Object</h3>
  <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:12px; border-radius:6px;">
    <b>Class:</b> Blueprint (e.g. <code>Car</code>)<br>
    <b>Object:</b> Concrete instance with state (e.g. <code>myCar = new Car("Red")</code>)
  </div>
</body>
</html>`,
          tips: [
            'Remember the DRY principle: Don\'t Repeat Yourself; extract repeated code into reusable classes.'
          ]
        }
      ]
    }
  }
];
