import { TutorialChapter } from '../../../types';

export const javaOopAndCollectionsChapters: TutorialChapter[] = [
  // 25. Java Classes and Objects
  {
    id: 'java-classes-objects',
    title: 'Java Classes and Objects',
    slug: 'java-classes-objects',
    summary: 'A Class is like an object constructor, or a "blueprint" for creating objects: MyClass myObj = new MyClass();.',
    readTime: '5 min',
    category: 'Java OOP',
    content: {
      overview: 'Java is an Object-Oriented Programming language. Everything in Java is associated with classes and objects, along with its attributes and methods. To create a class, use the keyword class. To create an object of MyClass, specify the class name, followed by the object name, and use the keyword new.',
      sections: [
        {
          heading: 'Instantiating Objects with new',
          body: 'Multiple objects can be instantiated from a single class blueprint.',
          code: `public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj1 = new Main(); // Object 1
    Main myObj2 = new Main(); // Object 2
    System.out.println(myObj1.x); // 5
    System.out.println(myObj2.x); // 5
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Class Instantiation</h3>
  <p><code>Car myCar = new Car();</code> creates a concrete instance of Car in heap memory.</p>
</body>
</html>`,
          tips: [
            'Classes are reference types; myObj holds a pointer reference to the object in heap memory.'
          ]
        }
      ]
    }
  },

  // 26. Java Class Attributes
  {
    id: 'java-class-attributes',
    title: 'Java Class Attributes',
    slug: 'java-class-attributes',
    summary: 'Class attributes are variables within a class (also called fields): accessing and modifying.',
    readTime: '4 min',
    category: 'Java OOP',
    content: {
      overview: 'Class attributes are variables within a class. You can access attributes by creating an object of the class, and by using the dot syntax (.). You can also modify attribute values, or declare them as final if you do not want to allow changes.',
      sections: [
        {
          heading: 'Accessing and Overriding Attributes',
          body: 'Use final to prevent overriding attribute values.',
          code: `public class Main {
  int x;
  final double PI = 3.14; // Unchangeable

  public static void main(String[] args) {
    Main myObj = new Main();
    myObj.x = 40; // Set value
    System.out.println(myObj.x); // 40
    // myObj.PI = 25; // Error: cannot assign a value to a final variable
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Class Field Modification</h3>
  <p><code>myObj.x = 40;</code> updates instance variable x for that specific object.</p>
</body>
</html>`,
          tips: [
            'If you modify an attribute of an object, it does not affect the same attribute in other instances.'
          ]
        }
      ]
    }
  },

  // 27. Java Class Methods
  {
    id: 'java-class-methods',
    title: 'Java Class Methods',
    slug: 'java-class-methods',
    summary: 'Methods are declared within a class: static methods vs. public/instance methods.',
    readTime: '5 min',
    category: 'Java OOP',
    content: {
      overview: 'You learned that methods are declared within a class, and that they are used to perform certain actions. static method means that it can be accessed without creating an object of the class, unlike public, which can only be accessed by objects.',
      sections: [
        {
          heading: 'static vs. public Methods',
          body: 'Static methods belong to the class; public instance methods belong to objects.',
          code: `public class Main {
  // Static method (Called directly on class)
  static void myStaticMethod() {
    System.out.println("Static methods can be called without creating objects");
  }

  // Public method (Called on instance)
  public void myPublicMethod() {
    System.out.println("Public methods must be called by creating objects");
  }

  public static void main(String[] args) {
    myStaticMethod(); // Call without object!

    Main myObj = new Main();
    myObj.myPublicMethod(); // Call with object
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Static vs Instance Methods</h3>
  <p><b>static:</b> <code>Math.sqrt(25);</code> (No object needed)</p>
  <p><b>instance:</b> <code>myScanner.nextLine();</code> (Requires object)</p>
</body>
</html>`,
          tips: [
            'Inside static methods, you cannot directly access non-static instance fields.'
          ]
        }
      ]
    }
  },

  // 28. Java Constructors
  {
    id: 'java-constructors',
    title: 'Java Constructors',
    slug: 'java-constructors',
    summary: 'A constructor in Java is a special method that is used to initialize objects when created with new.',
    readTime: '5 min',
    category: 'Java OOP',
    content: {
      overview: 'A constructor in Java is a special method that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes. Note that the constructor name MUST match the class name, and it cannot have a return type (like void).',
      sections: [
        {
          heading: 'Constructor Parameters',
          body: 'Constructors accept arguments to set initial state upon instantiation.',
          code: `public class Car {
  int modelYear;
  String modelName;

  // Constructor with parameters:
  public Car(int year, String name) {
    this.modelYear = year;
    this.modelName = name;
  }

  public static void main(String[] args) {
    Car myCar = new Car(1969, "Mustang");
    System.out.println(myCar.modelYear + " " + myCar.modelName);
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Constructor Execution</h3>
  <p><code>new Car(1969, "Mustang")</code> runs the constructor to initialize fields.</p>
</body>
</html>`,
          tips: [
            'If you don\'t define a constructor, Java provides a default zero-argument constructor automatically.'
          ]
        }
      ]
    }
  },

  // 29. Java Modifiers
  {
    id: 'java-modifiers',
    title: 'Java Modifiers',
    slug: 'java-modifiers',
    summary: 'Modifiers control access: public, private, protected, default, and non-access: final, static, abstract.',
    readTime: '6 min',
    category: 'Java OOP',
    content: {
      overview: 'By now, you are quite familiar with the public keyword that appears in almost all our examples. The public keyword is an access modifier, meaning that it is used to set the access level for classes, attributes, methods and constructors. Java divides modifiers into: Access Modifiers and Non-Access Modifiers.',
      sections: [
        {
          heading: 'Access Modifiers Hierarchy',
          body: 'public (accessible everywhere), private (accessible only within same class), protected (accessible in same package and subclasses), default (accessible only in same package).',
          code: `public class Account {
  private double balance; // Accessible ONLY within Account class
  public String accountId; // Accessible from any class

  // Non-access modifiers:
  // static: belongs to class
  // final: cannot be modified or overridden
  // abstract: must be implemented by subclass
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Access Modifier Visibility</h3>
  <ul>
    <li><code>private</code>: Within class only</li>
    <li><code>default</code>: Within package only</li>
    <li><code>protected</code>: Package + Subclasses</li>
    <li><code>public</code>: Universal access</li>
  </ul>
</body>
</html>`,
          tips: [
            'Always mark class fields as private and expose public getters/setters (Encapsulation).'
          ]
        }
      ]
    }
  },

  // 30. Java Encapsulation
  {
    id: 'java-encapsulation',
    title: 'Java Encapsulation',
    slug: 'java-encapsulation',
    summary: 'Encapsulation is to make sure that "sensitive" data is hidden from users: private fields, getters, setters.',
    readTime: '5 min',
    category: 'Java OOP',
    content: {
      overview: 'The meaning of Encapsulation, is to make sure that "sensitive" data is hidden from users. To achieve this, you must: declare class variables/attributes as private, provide public get and set methods to access and update the value of a private variable.',
      sections: [
        {
          heading: 'Getters and Setters with Validation',
          body: 'Setters allow validating inputs before storing them in private fields.',
          code: `public class Person {
  private String name; // Private field

  // Getter:
  public String getName() {
    return this.name;
  }

  // Setter with validation:
  public void setName(String newName) {
    if (newName != null && !newName.trim().isEmpty()) {
      this.name = newName;
    }
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Encapsulation Benefit</h3>
  <p>External code cannot set invalid names or negative balances directly because access is restricted via setters.</p>
</body>
</html>`,
          tips: [
            'Encapsulation allows you to make attributes read-only (by providing only getters).'
          ]
        }
      ]
    }
  },

  // 31. Java Packages
  {
    id: 'java-packages',
    title: 'Java Packages & API',
    slug: 'java-packages',
    summary: 'A package in Java is used to group related classes. Think of it as a folder in a file directory.',
    readTime: '5 min',
    category: 'Java OOP',
    content: {
      overview: 'A package in Java is used to group related classes. Think of it as a folder in a file directory. We use packages to avoid name conflicts, and to write a better maintainable code. Packages are divided into two categories: Built-in Packages (packages from the Java API) and User-defined Packages.',
      sections: [
        {
          heading: 'Importing Packages',
          body: 'Use import package.name.Class; to import a specific class, or import package.name.*; to import the whole package.',
          code: `// Import single class:
import java.util.Scanner;

// Import entire package:
import java.util.*;

package com.devaura.services;
public class PaymentService {
  // Class implementation
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Java Packages</h3>
  <p><code>java.util.ArrayList</code> lives in the <code>java.util</code> package.</p>
</body>
</html>`,
          tips: [
            'Reverse domain naming (e.g. com.company.project) is the global standard for Java package naming.'
          ]
        }
      ]
    }
  },

  // 32. Java Inheritance
  {
    id: 'java-inheritance',
    title: 'Java Inheritance',
    slug: 'java-inheritance',
    summary: 'Inherit attributes and methods from one class to another: extends keyword, subclass, and superclass.',
    readTime: '6 min',
    category: 'Java OOP',
    content: {
      overview: 'In Java, it is possible to inherit attributes and methods from one class to another. We group the "inheritance concept" into two categories: subclass (child) - the class that inherits from another class; superclass (parent) - the class being inherited from. To inherit from a class, use the extends keyword.',
      sections: [
        {
          heading: 'The extends Keyword',
          body: 'The child class inherits all non-private fields and methods from the parent class.',
          code: `class Vehicle {
  protected String brand = "Ford";
  public void honk() {
    System.out.println("Tuut, tuut!");
  }
}

class Car extends Vehicle {
  private String modelName = "Mustang";

  public static void main(String[] args) {
    Car myCar = new Car();
    myCar.honk(); // Call inherited method!
    System.out.println(myCar.brand + " " + myCar.modelName);
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Inheritance in Java</h3>
  <p><code>class Car extends Vehicle</code> reuses fields and methods from Vehicle.</p>
</body>
</html>`,
          tips: [
            'If you don\'t want other classes to inherit from a class, declare the class as final: final class MyClass { ... }'
          ]
        }
      ]
    }
  },

  // 33. Java Polymorphism
  {
    id: 'java-polymorphism',
    title: 'Java Polymorphism',
    slug: 'java-polymorphism',
    summary: 'Polymorphism uses inherited methods to perform different tasks, allowing dynamic method dispatch.',
    readTime: '5 min',
    category: 'Java OOP',
    content: {
      overview: 'Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance. Like we specified in the previous chapter; Inheritance lets us inherit attributes and methods from another class. Polymorphism uses those methods to perform different tasks.',
      sections: [
        {
          heading: 'Method Overriding (@Override)',
          body: 'A superclass reference can point to any subclass instance.',
          code: `class Animal {
  public void animalSound() {
    System.out.println("The animal makes a sound");
  }
}

class Pig extends Animal {
  @Override
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}

class Dog extends Animal {
  @Override
  public void animalSound() {
    System.out.println("The dog says: bow wow");
  }
}

// Polymorphic invocation:
Animal myAnimal = new Dog(); // Superclass reference!
myAnimal.animalSound();      // "The dog says: bow wow"`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Dynamic Method Dispatch</h3>
  <p>JVM determines at runtime which subclass method to execute based on the actual object instantiated.</p>
</body>
</html>`,
          tips: [
            'Always use the @Override annotation when overriding methods; it helps the compiler catch signature typos.'
          ]
        }
      ]
    }
  },

  // 34. Java Inner Classes
  {
    id: 'java-inner-classes',
    title: 'Java Inner Classes',
    slug: 'java-inner-classes',
    summary: 'In Java, it is also possible to nest classes (a class within a class).',
    readTime: '4 min',
    category: 'Java OOP',
    content: {
      overview: 'The purpose of nested classes is to group classes that belong together, which makes your code more readable and maintainable. To access the inner class, create an object of the outer class, and then create an object of the inner class.',
      sections: [
        {
          heading: 'Inner and Static Inner Classes',
          body: 'A static inner class does not require an instance of the outer class.',
          code: `class OuterClass {
  int x = 10;

  class InnerClass {
    int y = 5;
  }

  static class StaticInnerClass {
    int z = 15;
  }
}

public class Main {
  public static void main(String[] args) {
    OuterClass myOuter = new OuterClass();
    OuterClass.InnerClass myInner = myOuter.new InnerClass();
    System.out.println(myInner.y + myOuter.x); // 15
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Inner Class Scoping</h3>
  <p>Inner classes can access private attributes of the outer enclosing class.</p>
</body>
</html>`,
          tips: [
            'Inner classes can be declared private or protected, unlike top-level classes.'
          ]
        }
      ]
    }
  },

  // 35. Java Abstraction
  {
    id: 'java-abstraction',
    title: 'Java Abstraction',
    slug: 'java-abstraction',
    summary: 'Data abstraction is the process of hiding certain details and showing only essential information to the user.',
    readTime: '5 min',
    category: 'Java OOP',
    content: {
      overview: 'Abstraction can be achieved with either abstract classes or interfaces. The abstract keyword is a non-access modifier, used for classes and methods: Abstract class is a restricted class that cannot be used to create objects; Abstract method can only be used in an abstract class, and it does not have a body.',
      sections: [
        {
          heading: 'Abstract Classes and Methods',
          body: 'Subclasses must provide the body for all abstract methods.',
          code: `abstract class Animal {
  // Abstract method (no body):
  public abstract void animalSound();

  // Regular method:
  public void sleep() {
    System.out.println("Zzz");
  }
}

class Pig extends Animal {
  // Must implement abstract method:
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Abstraction Constraint</h3>
  <p><code>Animal myObj = new Animal();</code> throws an error: Animal is abstract; cannot be instantiated.</p>
</body>
</html>`,
          tips: [
            'Use abstract classes when related classes share common non-abstract methods and state.'
          ]
        }
      ]
    }
  },

  // 36. Java Interface
  {
    id: 'java-interfaces',
    title: 'Java Interfaces',
    slug: 'java-interfaces',
    summary: 'An interface is a completely "abstract class" that is used to group related methods with empty bodies.',
    readTime: '5 min',
    category: 'Java OOP',
    content: {
      overview: 'Another way to achieve abstraction in Java, is with interfaces. An interface is a completely "abstract class" that is used to group related methods with empty bodies. To access the interface methods, the interface must be "implemented" (like inherited) by another class with the implements keyword.',
      sections: [
        {
          heading: 'Multiple Interfaces Implementation',
          body: 'While Java does not support multiple class inheritance (extends), a class CAN implement multiple interfaces.',
          code: `interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void sleep(); // interface method
}

interface Flyable {
  public void fly();
}

// Implementing multiple interfaces:
class Bird implements Animal, Flyable {
  public void animalSound() { System.out.println("Tweet tweet"); }
  public void sleep() { System.out.println("Zzz"); }
  public void fly() { System.out.println("Flying high!"); }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Multiple Interface Implementation</h3>
  <p><code>class Bird implements Animal, Flyable</code> achieves multiple inheritance of contracts cleanly.</p>
</body>
</html>`,
          tips: [
            'All interface methods are public abstract by default, and attributes are public static final.'
          ]
        }
      ]
    }
  },

  // 37. Java Enums
  {
    id: 'java-enums',
    title: 'Java Enums',
    slug: 'java-enums',
    summary: 'An enum is a special "class" that represents a group of constants (unchangeable variables, like final variables).',
    readTime: '4 min',
    category: 'Java OOP',
    content: {
      overview: 'To create an enum, use the enum keyword, and separate the constants with a comma. Note that they should be in uppercase letters. Enums can be used inside switch statements and looped through using values().',
      sections: [
        {
          heading: 'Enum Declaration and Switch Usage',
          body: 'Enums provide type-safe constants compared to raw strings or integers.',
          code: `enum Level {
  LOW,
  MEDIUM,
  HIGH
}

public class Main {
  public static void main(String[] args) {
    Level myVar = Level.MEDIUM;

    switch(myVar) {
      case LOW:
        System.out.println("Low level");
        break;
      case MEDIUM:
        System.out.println("Medium level");
        break;
      case HIGH:
        System.out.println("High level");
        break;
    }
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Type-Safe Enums</h3>
  <p>You cannot assign an arbitrary string to an Enum; only defined constants (LOW, MEDIUM, HIGH) compile.</p>
</body>
</html>`,
          tips: [
            'Enums in Java can have fields, constructors, and methods like regular classes.'
          ]
        }
      ]
    }
  },

  // 38. Java User Input
  {
    id: 'java-user-input',
    title: 'Java User Input (Scanner)',
    slug: 'java-user-input',
    summary: 'The Scanner class is used to get user input, found in the java.util package.',
    readTime: '5 min',
    category: 'Java Methods',
    content: {
      overview: 'The Scanner class is used to get user input, and it is found in the java.util package. To use the Scanner class, create an object of the class and use any of the available methods found in the Scanner class documentation (nextLine(), nextInt(), nextDouble(), nextBoolean()).',
      sections: [
        {
          heading: 'Reading Input with Scanner',
          body: 'nextLine() reads a String; nextInt() reads an integer.',
          code: `import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    System.out.println("Enter username:");

    String userName = myObj.nextLine(); // Read user input
    System.out.println("Username is: " + userName);

    myObj.close(); // Clean up resource
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>CLI Scanner Interaction</h3>
  <div style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">
    Enter username:<br>
    Alex<br>
    Username is: Alex
  </div>
</body>
</html>`,
          tips: [
            'Remember to call scanner.close() when done reading to release system input streams.'
          ]
        }
      ]
    }
  },

  // 39. Java Date and Time
  {
    id: 'java-date',
    title: 'Java Date and Time',
    slug: 'java-date',
    summary: 'Working with dates in Java: LocalDate, LocalTime, LocalDateTime, and DateTimeFormatter.',
    readTime: '5 min',
    category: 'Java APIs',
    content: {
      overview: 'Java does not have a built-in Date class, but we can import the java.time package to work with the date and time API. Classes include: LocalDate (yyyy-MM-dd), LocalTime (HH-mm-ss-ns), LocalDateTime (yyyy-MM-dd-HH-mm-ss-ns), and DateTimeFormatter.',
      sections: [
        {
          heading: 'Formatting Dates with DateTimeFormatter',
          body: 'The java.time package (introduced in Java 8) is immutable and thread-safe.',
          code: `import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Main {
  public static void main(String[] args) {
    LocalDateTime myDateObj = LocalDateTime.now();

    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
    String formattedDate = myDateObj.format(myFormatObj);
    System.out.println("Formatted: " + formattedDate);
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Modern java.time API</h3>
  <p><code>LocalDate.now()</code> returns ISO date <b>2026-11-03</b>.</p>
</body>
</html>`,
          tips: [
            'Never use legacy java.util.Date or Calendar in new code; modern java.time is vastly superior.'
          ]
        }
      ]
    }
  },

  // 40. Java ArrayList
  {
    id: 'java-arraylist',
    title: 'Java ArrayList',
    slug: 'java-arraylist',
    summary: 'The ArrayList class is a resizable array, which can be found in the java.util package.',
    readTime: '6 min',
    category: 'Java Collections',
    content: {
      overview: 'The difference between a built-in array and an ArrayList in Java, is that the size of an array cannot be modified (if you want to add or remove elements to/from an array, you have to create a new one). While elements can be added and removed from an ArrayList whenever you want. Syntax: ArrayList<Type> list = new ArrayList<Type>();.',
      sections: [
        {
          heading: 'ArrayList Operations: add, get, set, remove',
          body: 'ArrayList requires Wrapper classes (like Integer, Double) instead of primitive types.',
          code: `import java.util.ArrayList;
import java.util.Collections;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");

    System.out.println(cars.get(0));    // "Volvo"
    cars.set(0, "Opel");                // Modify item
    cars.remove(0);                     // Remove item
    System.out.println(cars.size());    // 2

    // Sorting:
    Collections.sort(cars);
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Dynamic ArrayList</h3>
  <p><code>cars.add("Tesla");</code> dynamically resizes internal buffer as items expand.</p>
</body>
</html>`,
          tips: [
            'ArrayList uses an array under the hood; get(index) is O(1) fast, but insert/delete in middle is O(n).'
          ]
        }
      ]
    }
  },

  // 41. Java LinkedList
  {
    id: 'java-linkedlist',
    title: 'Java LinkedList',
    slug: 'java-linkedlist',
    summary: 'LinkedList stores elements in containers linked by pointers, ideal for fast queue operations.',
    readTime: '5 min',
    category: 'Java Collections',
    content: {
      overview: 'The LinkedList class is almost identical to ArrayList in usage, but is built completely differently under the hood: ArrayList has a regular array inside; LinkedList stores items in "containers" where each container has a link to the next and previous container. Use LinkedList when you need frequent addFirst(), removeFirst(), or queue operations.',
      sections: [
        {
          heading: 'ArrayList vs. LinkedList',
          body: 'ArrayList is best for frequent random access (get). LinkedList is best for queue/deque inserts and removals.',
          code: `import java.util.LinkedList;

LinkedList<String> cars = new LinkedList<String>();
cars.add("Volvo");
cars.add("BMW");

// LinkedList specific queue methods:
cars.addFirst("Mazda");
cars.addLast("Toyota");
cars.removeFirst();
cars.removeLast();`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>LinkedList Operations</h3>
  <p><code>addFirst()</code> and <code>removeFirst()</code> execute in O(1) constant time.</p>
</body>
</html>`,
          tips: [
            'LinkedList implements both List and Deque interfaces.'
          ]
        }
      ]
    }
  },

  // 42. Java HashMap
  {
    id: 'java-hashmap',
    title: 'Java HashMap',
    slug: 'java-hashmap',
    summary: 'HashMap stores items in "key/value" pairs: HashMap<String, String> capitalCities = new HashMap<>();.',
    readTime: '6 min',
    category: 'Java Collections',
    content: {
      overview: 'A HashMap store items in "key/value" pairs, and you can access them by an index of another type (e.g. a String). One object is used as a key (index) to another object (value). It can store different types: String keys and Integer values, or the same type, like: String keys and String values.',
      sections: [
        {
          heading: 'HashMap Operations: put, get, remove, loop',
          body: 'Use put() to insert, get(key) to retrieve, and keySet() to loop over keys.',
          code: `import java.util.HashMap;

HashMap<String, String> capitalCities = new HashMap<String, String>();

capitalCities.put("England", "London");
capitalCities.put("Germany", "Berlin");
capitalCities.put("Norway", "Oslo");

System.out.println(capitalCities.get("England")); // "London"
capitalCities.remove("England");
System.out.println(capitalCities.size()); // 2

// Looping through keys:
for (String i : capitalCities.keySet()) {
  System.out.println("key: " + i + " value: " + capitalCities.get(i));
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>HashMap Key-Value Retrieval</h3>
  <p><code>capitalCities.get("Germany")</code> &rarr; <b>"Berlin"</b> (O(1) hash lookup)</p>
</body>
</html>`,
          tips: [
            'Keys in a HashMap must be unique; inserting an existing key overwrites the previous value.'
          ]
        }
      ]
    }
  },

  // 43. Java HashSet
  {
    id: 'java-hashset',
    title: 'Java HashSet',
    slug: 'java-hashset',
    summary: 'A HashSet is a collection of items where every item is unique, found in the java.util package.',
    readTime: '5 min',
    category: 'Java Collections',
    content: {
      overview: 'A HashSet is a collection of items where every item is unique, and it is found in the java.util package. Items are stored using hash codes, providing fast constant-time performance for basic operations (add, remove, contains and size).',
      sections: [
        {
          heading: 'HashSet Methods: add, contains, remove',
          body: 'Duplicate additions are ignored automatically.',
          code: `import java.util.HashSet;

HashSet<String> cars = new HashSet<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
cars.add("BMW"); // Duplicate ignored!

System.out.println(cars); // ["Volvo", "BMW", "Ford"]
System.out.println(cars.contains("Mazda")); // false`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>HashSet Uniqueness</h3>
  <p><code>cars.contains("BMW")</code> checks membership in O(1) time without looping.</p>
</body>
</html>`,
          tips: [
            'Objects stored in a HashSet must properly implement hashCode() and equals().'
          ]
        }
      ]
    }
  },

  // 44. Java Iterator
  {
    id: 'java-iterator',
    title: 'Java Iterator',
    slug: 'java-iterator',
    summary: 'An Iterator is an object that can be used to loop through collections, like ArrayList and HashSet.',
    readTime: '4 min',
    category: 'Java Collections',
    content: {
      overview: 'An Iterator is an object that can be used to loop through collections, like ArrayList and HashSet. It is called an "iterator" because "iterating" is the technical term for looping. To use an Iterator, you must import it from the java.util package.',
      sections: [
        {
          heading: 'hasNext(), next(), and Safe Removal',
          body: 'The Iterator is the only safe way to remove elements from a collection during a loop without triggering ConcurrentModificationException.',
          code: `import java.util.ArrayList;
import java.util.Iterator;

public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<Integer>();
    numbers.add(12);
    numbers.add(8);
    numbers.add(2);
    numbers.add(23);

    Iterator<Integer> it = numbers.iterator();
    while(it.hasNext()) {
      Integer i = it.next();
      if(i < 10) {
        it.remove(); // Safe removal during iteration!
      }
    }
    System.out.println(numbers); // [12, 23]
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Safe Removal with Iterator</h3>
  <p><code>it.remove()</code> removes the current element safely during iteration.</p>
</body>
</html>`,
          tips: [
            'Removing items from a collection using a standard for-each loop will throw a ConcurrentModificationException.'
          ]
        }
      ]
    }
  },

  // 45. Java Wrapper Classes
  {
    id: 'java-wrapper-classes',
    title: 'Java Wrapper Classes',
    slug: 'java-wrapper-classes',
    summary: 'Wrapper classes provide a way to use primitive data types (int, boolean, etc..) as objects: Autoboxing.',
    readTime: '5 min',
    category: 'Java Collections',
    content: {
      overview: 'Wrapper classes provide a way to use primitive data types as objects. Sometimes you must use wrapper classes, for example when working with Collection objects, such as ArrayList, where primitive types cannot be used (the list can only store objects). Wrapper classes: Byte, Short, Integer, Long, Float, Double, Boolean, Character.',
      sections: [
        {
          heading: 'Autoboxing and Unboxing',
          body: 'Autoboxing is the automatic conversion the Java compiler makes between primitive types and their corresponding object wrapper classes.',
          code: `// Autoboxing (int to Integer):
Integer myInt = 5;

// Unboxing (Integer to int):
int num = myInt;

// Useful wrapper methods:
String myString = myInt.toString();
int parsed = Integer.parseInt("123");`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Wrapper Parsing</h3>
  <p><code>Integer.parseInt("456")</code> &rarr; <b>456</b> (primitive int)</p>
</body>
</html>`,
          tips: [
            'Be mindful of NullPointerException when unboxing wrapper objects that might be null.'
          ]
        }
      ]
    }
  },

  // 46. Java Exceptions
  {
    id: 'java-exceptions',
    title: 'Java Exceptions (Try...Catch)',
    slug: 'java-exceptions',
    summary: 'Handle runtime errors gracefully: try, catch, finally, throw, and throws.',
    readTime: '6 min',
    category: 'Java Advanced',
    content: {
      overview: 'When executing Java code, different errors can occur: coding errors made by the programmer, errors due to wrong input, or other unforeseeable things. When an error occurs, Java will normally stop and generate an error message (throw an exception).',
      sections: [
        {
          heading: 'try-catch-finally and Checked Exceptions',
          body: 'Java distinguishes between Checked Exceptions (must be caught or declared with throws) and Unchecked RuntimeExceptions.',
          code: `public class Main {
  static void checkAge(int age) {
    if (age < 18) {
      throw new ArithmeticException("Access denied - You must be at least 18 years old.");
    }
  }

  public static void main(String[] args) {
    try {
      int[] myNumbers = {1, 2, 3};
      System.out.println(myNumbers[10]); // ArrayIndexOutOfBoundsException!
    } catch (Exception e) {
      System.out.println("Something went wrong: " + e.getMessage());
    } finally {
      System.out.println("The 'try catch' is finished.");
    }
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Exception Recovery</h3>
  <p style="color:#16a34a; font-weight:bold;">Exception caught gracefully; application continues running!</p>
</body>
</html>`,
          tips: [
            'Use try-with-resources: try (FileReader fr = new FileReader("file")) { ... } to automatically close resources.'
          ]
        }
      ]
    }
  },

  // 47. Java RegEx
  {
    id: 'java-regex',
    title: 'Java RegEx',
    slug: 'java-regex',
    summary: 'A regular expression is a sequence of characters that forms a search pattern: java.util.regex package.',
    readTime: '5 min',
    category: 'Java Advanced',
    content: {
      overview: 'Java does not have a built-in Regular Expression class, but we can import the java.util.regex package to work with regular expressions. The package includes: Pattern (defines pattern), Matcher (used to search for pattern), and PatternSyntaxException.',
      sections: [
        {
          heading: 'Pattern and Matcher Classes',
          body: 'Compile a regex pattern once and apply it to multiple matchers.',
          code: `import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
  public static void main(String[] args) {
    Pattern pattern = Pattern.compile("devaura", Pattern.CASE_INSENSITIVE);
    Matcher matcher = pattern.matcher("Visit DevAura learning platform!");
    boolean matchFound = matcher.find();
    if(matchFound) {
      System.out.println("Match found");
    } else {
      System.out.println("Match not found");
    }
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Regex Matcher</h3>
  <p><code>matcher.find()</code> returns <b>true</b> when substring matches pattern.</p>
</body>
</html>`,
          tips: [
            'Pattern.CASE_INSENSITIVE enables case-insensitive matching.'
          ]
        }
      ]
    }
  },

  // 48. Java Threads
  {
    id: 'java-threads',
    title: 'Java Threads & Concurrency',
    slug: 'java-threads',
    summary: 'Threads allows a program to operate more efficiently by doing multiple things at the same time.',
    readTime: '6 min',
    category: 'Java Advanced',
    content: {
      overview: 'Threads can be used to perform complicated tasks in the background without interrupting the main program. There are two ways to create a thread: It can be created by extending the Thread class and overriding its run() method, or by implementing the Runnable interface.',
      sections: [
        {
          heading: 'Implementing Runnable vs. Extending Thread',
          body: 'Implementing Runnable is preferred because Java does not support multiple class inheritance.',
          code: `// Method 1: Implementing Runnable (Best practice)
public class Main implements Runnable {
  public static void main(String[] args) {
    Main obj = new Main();
    Thread thread = new Thread(obj);
    thread.start(); // Starts new thread
    System.out.println("This code is outside of the thread");
  }

  public void run() {
    System.out.println("This code is running in a thread");
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Thread Concurrency</h3>
  <p><code>thread.start()</code> spawns an OS thread to run <code>run()</code> asynchronously.</p>
</body>
</html>`,
          tips: [
            'Always call thread.start(), NOT thread.run(); calling run() executes synchronously on the current thread.'
          ]
        }
      ]
    }
  },

  // 49. Java Lambda Expressions
  {
    id: 'java-lambda',
    title: 'Java Lambda Expressions',
    slug: 'java-lambda',
    summary: 'A lambda expression is a short block of code which takes in parameters and returns a value: parameter -> expression.',
    readTime: '6 min',
    category: 'Java Advanced',
    content: {
      overview: 'Lambda Expressions were added in Java 8. A lambda expression is a short block of code which takes in parameters and returns a value. Lambda expressions are similar to methods, but they do not need a name and they can be implemented right in the body of a method.',
      sections: [
        {
          heading: 'Lambda Syntax with Collections & Streams',
          body: 'Lambda expressions implement Functional Interfaces (interfaces with a single abstract method).',
          code: `import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<Integer>();
    numbers.add(5);
    numbers.add(9);
    numbers.add(8);
    numbers.add(1);

    // Using Lambda expression in forEach:
    numbers.forEach((n) -> { System.out.println(n); });

    // Stream API filter with Lambda:
    long count = numbers.stream()
      .filter(n -> n > 5)
      .count(); // 2
  }
}`,
          codeLanguage: 'java',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Java 8+ Stream &amp; Lambda</h3>
  <p><code>numbers.stream().filter(n -&gt; n &gt; 5)</code> functional pipeline in modern Java.</p>
</body>
</html>`,
          tips: [
            'Method references (System.out::println) provide even shorter syntax for calling existing methods with lambdas.'
          ]
        }
      ]
    }
  }
];
