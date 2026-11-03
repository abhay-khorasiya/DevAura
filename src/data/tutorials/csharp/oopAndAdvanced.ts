import { TutorialChapter } from '../../../types';

export const csharpOopAndAdvancedChapters: TutorialChapter[] = [
  // 19. C# Arrays
  {
    id: 'cs-arrays',
    title: 'C# Arrays, Multi-dimensional & System.Linq',
    slug: 'cs-arrays',
    summary: 'Single-dimensional, 2D rectangular [,], jagged arrays [][], and LINQ extensions (Max, Min, Sum).',
    readTime: '5 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Arrays are used to store multiple values in a single variable. C# provides single-dimensional arrays, 2D multidimensional arrays [ , ], and jagged arrays (arrays of arrays [ ][ ]).',
      sections: [
        {
          heading: 'Array Methods & LINQ Operations',
          body: 'System.Array.Sort() and System.Linq provide built-in methods:',
          code: `using System;
using System.Linq;

class Program {
    static void Main() {
        int[] numbers = { 42, 12, 89, 5, 67 };

        Array.Sort(numbers);
        Console.WriteLine($"Smallest: {numbers.Min()}");
        Console.WriteLine($"Largest: {numbers.Max()}");
        Console.WriteLine($"Sum: {numbers.Sum()}");

        // 2D Rectangular Array
        int[,] grid = { {1, 2}, {3, 4} };
        Console.WriteLine($"Grid[1,1] = {grid[1,1]}"); // 4
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Smallest: 5<br>
    Largest: 89<br>
    Sum: 215<br>
    Grid[1,1] = 4
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 20. C# Methods
  {
    id: 'cs-methods',
    title: 'C# Methods',
    slug: 'cs-methods',
    summary: 'Creating reusable methods, void vs return types, and method invocation.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'A method is a code block containing a series of statements. A program causes the statements to be executed by calling the method and specifying any required arguments.',
      sections: [
        {
          heading: 'Creating and Calling Methods',
          body: 'Defining methods with return values:',
          code: `using System;

class Program {
    static int CalculateTotal(int quantity, int price) {
        return quantity * price;
    }

    static void Main() {
        int total = CalculateTotal(4, 25);
        Console.WriteLine($"Order Total: {total}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Order Total: $100
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 21. C# Method Parameters
  {
    id: 'cs-method-parameters',
    title: 'C# Method Parameters (Default, Named, ref, out)',
    slug: 'cs-method-parameters',
    summary: 'Optional parameters, named arguments, out parameters, and ref references.',
    readTime: '5 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Information can be passed to methods as parameter. Parameters act as variables inside the method. C# supports optional default values, named parameters, and ref/out modifiers.',
      sections: [
        {
          heading: 'out and ref Parameters',
          body: 'out parameters allow a method to return multiple values:',
          code: `using System;

class Program {
    // out parameter example
    static void Divide(int a, int b, out int quotient, out int remainder) {
        quotient = a / b;
        remainder = a % b;
    }

    static void Main() {
        Divide(27, 4, out int q, out int r);
        Console.WriteLine($"27 / 4 = {q} with remainder {r}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    27 / 4 = 6 with remainder 3
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 22. C# Method Overloading
  {
    id: 'cs-method-overloading',
    title: 'C# Method Overloading',
    slug: 'cs-method-overloading',
    summary: 'Multiple methods having the same name with different signatures.',
    readTime: '3 min',
    category: 'C# Tutorial',
    content: {
      overview: 'With method overloading, multiple methods can have the same name with different parameters.',
      sections: [
        {
          heading: 'Method Overloading Example',
          body: 'Overloading for integer and double inputs:',
          code: `using System;

class Program {
    static int PlusMethod(int x, int y) => x + y;
    static double PlusMethod(double x, double y) => x + y;

    static void Main() {
        Console.WriteLine($"Int: {PlusMethod(5, 7)}");
        Console.WriteLine($"Double: {PlusMethod(4.3, 6.2)}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Int: 12<br>
    Double: 10.5
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 23. C# OOP Intro
  {
    id: 'cs-oop',
    title: 'C# OOP (Classes & Objects)',
    slug: 'cs-oop',
    summary: 'Object-Oriented Programming principles: Classes as templates, Objects as instances.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'OOP stands for Object-Oriented Programming. Procedural programming is about writing procedures or methods that perform operations on the data, while OOP is about creating objects that contain both data and methods.',
      sections: [
        {
          heading: 'Classes and Objects',
          body: 'A class is a blueprint; an object is an instantiated instance of that blueprint.',
          code: `using System;

class Car {
    public string brand = "Tesla";
    public int maxSpeed = 250;
}

class Program {
    static void Main() {
        Car myObj = new Car();
        Console.WriteLine($"{myObj.brand} tops at {myObj.maxSpeed} km/h");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Tesla tops at 250 km/h
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 24. C# Class Members
  {
    id: 'cs-class-members',
    title: 'C# Class Members',
    slug: 'cs-class-members',
    summary: 'Fields, methods, constants, and multiple object instances.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Fields and methods inside classes are often referred to as "Class Members". You can create multiple instances of a class, each with its own independent field values.',
      sections: [
        {
          heading: 'Multiple Objects with Distinct States',
          body: 'Instantiating two separate instances of the same class:',
          code: `using System;

class Employee {
    public string name;
    public int id;

    public void PrintBadge() {
        Console.WriteLine($"Badge: {name} [#{id}]");
    }
}

class Program {
    static void Main() {
        Employee e1 = new Employee { name = "Alice", id = 101 };
        Employee e2 = new Employee { name = "Bob", id = 102 };

        e1.PrintBadge();
        e2.PrintBadge();
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Badge: Alice [#101]<br>
    Badge: Bob [#102]
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 25. C# Constructors
  {
    id: 'cs-constructors',
    title: 'C# Constructors',
    slug: 'cs-constructors',
    summary: 'Special methods invoked when an object is instantiated, and primary constructors in C# 12.',
    readTime: '5 min',
    category: 'C# Tutorial',
    content: {
      overview: 'A constructor is a special method that is used to initialize objects. The advantage of a constructor is that it is called automatically when an object of the class is created.',
      sections: [
        {
          heading: 'Parameterized Constructor Example',
          body: 'Passing values directly into constructor:',
          code: `using System;

class Product {
    public string Name;
    public double Price;

    // Constructor
    public Product(string name, double price) {
        Name = name;
        Price = price;
    }
}

class Program {
    static void Main() {
        Product p = new Product("DevAura Cloud", 199.99);
        Console.WriteLine($"Product: {p.Name}, Price: {p.Price}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Product: DevAura Cloud, Price: $199.99
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 26. C# Access Modifiers
  {
    id: 'cs-access-modifiers',
    title: 'C# Access Modifiers',
    slug: 'cs-access-modifiers',
    summary: 'public, private, protected, and internal modifier boundaries.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Access modifiers are keywords used to specify the declared accessibility (or visibility) of a member or a type.',
      sections: [
        {
          heading: 'Modifier Overview',
          body: 'Visibility rules in C#:',
          code: `public class SecurityRules {
    public int PublicData = 1;     // Accessible by any code in any assembly
    private int SecretKey = 99;    // Accessible only within this class
    protected int FamilyOnly = 42; // Accessible by this class or derived classes
    internal int AssemblyWide = 5; // Accessible within the same assembly (.dll/.exe)
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Access Modifiers Summary</h4>
    <ul>
      <li><strong>public:</strong> The code is accessible for all classes.</li>
      <li><strong>private:</strong> The code is only accessible within the same class.</li>
      <li><strong>protected:</strong> The code is accessible within the same class, or in a class that is inherited from that class.</li>
      <li><strong>internal:</strong> The code is only accessible within its own assembly.</li>
    </ul>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 27. C# Properties
  {
    id: 'cs-properties',
    title: 'C# Properties & Auto-Properties ({ get; set; })',
    slug: 'cs-properties',
    summary: 'Encapsulation with properties, validation logic, and auto-implemented getters and setters.',
    readTime: '5 min',
    category: 'C# Tutorial',
    content: {
      overview: 'A property is like a combination of a variable and a method, and it has two methods: a get method and a set method. C# auto-implemented properties make declaring properties clean and fast.',
      sections: [
        {
          heading: 'Auto-Properties & Validation',
          body: 'Declaring automatic properties and custom setters with validation:',
          code: `using System;

class Person {
    // Auto-implemented property
    public string Name { get; set; }

    private int _age;
    // Property with validation
    public int Age {
        get => _age;
        set {
            if (value >= 0) _age = value;
        }
    }
}

class Program {
    static void Main() {
        Person p = new Person();
        p.Name = "Liam";
        p.Age = 32;
        Console.WriteLine($"{p.Name} is {p.Age} years old");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Liam is 32 years old
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 28. C# Inheritance
  {
    id: 'cs-inheritance',
    title: 'C# Inheritance (:)',
    slug: 'cs-inheritance',
    summary: 'Inheriting fields and methods from a base class using the colon (:) operator.',
    readTime: '5 min',
    category: 'C# Tutorial',
    content: {
      overview: 'In C#, it is possible to inherit fields and methods from one class to another. Derived Class (child) inherits from Base Class (parent).',
      sections: [
        {
          heading: 'Inheritance with base Keyword',
          body: 'The child class inherits vehicle capabilities:',
          code: `using System;

class Vehicle {
    public string brand = "Ford";
    public void Honk() {
        Console.WriteLine("Tuut, tuut!");
    }
}

class Car : Vehicle {
    public string modelName = "Mustang";
}

class Program {
    static void Main() {
        Car myCar = new Car();
        myCar.Honk();
        Console.WriteLine($"{myCar.brand} {myCar.modelName}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Tuut, tuut!<br>
    Ford Mustang
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 29. C# Polymorphism
  {
    id: 'cs-polymorphism',
    title: 'C# Polymorphism (virtual & override)',
    slug: 'cs-polymorphism',
    summary: 'Method overriding using virtual in the base class and override in the derived class.',
    readTime: '5 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance. In C#, virtual methods allow derived classes to provide their own implementation using override.',
      sections: [
        {
          heading: 'Virtual and Override Example',
          body: 'Polymorphic dispatch:',
          code: `using System;

class Animal {
    public virtual void MakeSound() {
        Console.WriteLine("Animal sound");
    }
}

class Pig : Animal {
    public override void MakeSound() {
        Console.WriteLine("The pig says: wee wee");
    }
}

class Dog : Animal {
    public override void MakeSound() {
        Console.WriteLine("The dog says: bow wow");
    }
}

class Program {
    static void Main() {
        Animal myAnimal = new Animal();
        Animal myPig = new Pig();
        Animal myDog = new Dog();

        myAnimal.MakeSound();
        myPig.MakeSound();
        myDog.MakeSound();
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Animal sound<br>
    The pig says: wee wee<br>
    The dog says: bow wow
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 30. C# Abstraction
  {
    id: 'cs-abstraction',
    title: 'C# Abstraction (abstract classes & methods)',
    slug: 'cs-abstraction',
    summary: 'Data abstraction hiding complex details and showing only essential features.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'An abstract class cannot be used to create objects directly. An abstract method can only be used in an abstract class, and it does not have a body — the body is provided by the derived class.',
      sections: [
        {
          heading: 'Abstract Class Example',
          body: 'Enforcing required contracts on derived types:',
          code: `using System;

abstract class Shape {
    public abstract double GetArea();
    public void Display() => Console.WriteLine("Rendering shape...");
}

class Circle : Shape {
    private double _radius;
    public Circle(double r) => _radius = r;

    public override double GetArea() => Math.PI * _radius * _radius;
}

class Program {
    static void Main() {
        Shape c = new Circle(5);
        c.Display();
        Console.WriteLine($"Circle Area: {c.GetArea():F2}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Rendering shape...<br>
    Circle Area: 78.54
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 31. C# Interfaces
  {
    id: 'cs-interfaces',
    title: 'C# Interfaces',
    slug: 'cs-interfaces',
    summary: 'Contractual specifications using interface and implementing multiple interfaces.',
    readTime: '5 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Another way to achieve abstraction in C# is with interfaces. An interface is a completely "abstract class", which can only contain abstract methods and properties.',
      sections: [
        {
          heading: 'Multiple Interface Implementation',
          body: 'A single class can implement multiple interfaces separated by commas:',
          code: `using System;

interface IFirstInterface {
    void FirstMethod();
}

interface ISecondInterface {
    void SecondMethod();
}

class DemoClass : IFirstInterface, ISecondInterface {
    public void FirstMethod() => Console.WriteLine("Executed First Method.");
    public void SecondMethod() => Console.WriteLine("Executed Second Method.");
}

class Program {
    static void Main() {
        DemoClass demo = new DemoClass();
        demo.FirstMethod();
        demo.SecondMethod();
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Executed First Method.<br>
    Executed Second Method.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 32. C# Enums
  {
    id: 'cs-enums',
    title: 'C# Enums',
    slug: 'cs-enums',
    summary: 'Enumerations of named integer constants.',
    readTime: '3 min',
    category: 'C# Tutorial',
    content: {
      overview: 'An enum is a special "class" that represents a group of constants (unchangeable/read-only variables).',
      sections: [
        {
          heading: 'Enum with Switch',
          body: 'Using enums to represent discrete states:',
          code: `using System;

enum Level {
    Low,
    Medium,
    High
}

class Program {
    static void Main() {
        Level myVar = Level.Medium;
        Console.WriteLine($"Selected Level: {myVar} (Numeric value: {(int)myVar})");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Selected Level: Medium (Numeric value: 1)
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 33. C# Files
  {
    id: 'cs-files',
    title: 'C# Files (System.IO.File)',
    slug: 'cs-files',
    summary: 'Reading and writing files with File.WriteAllText and File.ReadAllText.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'The File class from the System.IO namespace allows us to work with the files on your computer. It provides static helper methods to read and write entire text files in a single line of code.',
      sections: [
        {
          heading: 'Writing and Reading with File Class',
          body: 'File operations:',
          code: `using System;
using System.IO;

class Program {
    static void Main() {
        string path = "notes.txt";
        File.WriteAllText(path, "DevAura C# File Stream System");

        string readText = File.ReadAllText(path);
        Console.WriteLine($"File Content: {readText}");
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    File Content: DevAura C# File Stream System
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 34. C# Exceptions
  {
    id: 'cs-exceptions',
    title: 'C# Exceptions (try, catch, finally, throw)',
    slug: 'cs-exceptions',
    summary: 'Graceful error handling using try...catch...finally blocks.',
    readTime: '4 min',
    category: 'C# Tutorial',
    content: {
      overview: 'When executing C# code, different errors can occur: coding errors made by the programmer, errors due to wrong input, or other unforeseeable things. Exception handling prevents application crashes.',
      sections: [
        {
          heading: 'Try, Catch, and Finally',
          body: 'The finally block executes regardless of whether an exception was thrown:',
          code: `using System;

class Program {
    static void Main() {
        try {
            int[] myNumbers = {1, 2, 3};
            Console.WriteLine(myNumbers[10]); // Throws IndexOutOfRangeException
        } catch (Exception e) {
            Console.WriteLine($"Error caught: {e.Message}");
        } finally {
            Console.WriteLine("The 'try catch' block has finished.");
        }
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Error caught: Index was outside the bounds of the array.<br>
    The 'try catch' block has finished.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 35. C# LINQ
  {
    id: 'cs-linq',
    title: 'C# LINQ (Language Integrated Query)',
    slug: 'cs-linq',
    summary: 'Querying and transforming collections declaratively using LINQ and lambda expressions.',
    readTime: '6 min',
    category: 'C# Tutorial',
    content: {
      overview: 'Language Integrated Query (LINQ) is one of C#\'s most celebrated features. It provides SQL-like querying capabilities directly inside C# collections, databases (Entity Framework), and XML/JSON.',
      sections: [
        {
          heading: 'LINQ Method Syntax vs Query Syntax',
          body: 'Filtering, ordering, and selecting with lambdas:',
          code: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        int[] scores = { 97, 92, 81, 60, 75, 88 };

        // LINQ Method Syntax with Lambdas
        var honorRoll = scores
            .Where(s => s >= 85)
            .OrderByDescending(s => s)
            .ToList();

        Console.WriteLine("Honor Roll: " + string.Join(", ", honorRoll));
    }
}`,
          codeLanguage: 'csharp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Honor Roll: 97, 92, 88
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
