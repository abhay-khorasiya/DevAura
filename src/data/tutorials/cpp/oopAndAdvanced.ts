import { TutorialChapter } from '../../../types';

export const cppOopAndAdvancedChapters: TutorialChapter[] = [
  // 19. C++ Arrays
  {
    id: 'cpp-arrays',
    title: 'C++ Arrays & Multidimensional Arrays',
    slug: 'cpp-arrays',
    summary: 'Fixed-size arrays, finding element count with sizeof, and 2D matrices.',
    readTime: '5 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Arrays are used to store multiple values in a single variable. In C++, raw arrays have a fixed size determined at compile time.',
      sections: [
        {
          heading: 'Calculating Array Length and 2D Arrays',
          body: 'sizeof(arr) / sizeof(arr[0]) calculates the number of elements:',
          code: `#include <iostream>
using namespace std;

int main() {
    int nums[5] = {10, 20, 30, 40, 50};
    int length = sizeof(nums) / sizeof(nums[0]);
    cout << "Array has " << length << " elements." << endl;

    // 2D Array
    int letters[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    cout << "letters[0][2] = " << letters[0][2] << endl; // 3
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Array has 5 elements.<br>
    letters[0][2] = 3
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 20. C++ Structures
  {
    id: 'cpp-structures',
    title: 'C++ Structures (struct)',
    slug: 'cpp-structures',
    summary: 'Grouping different data types together under a single custom type name.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Structures (also called structs) are a way to group several related variables into one place. In C++, structs can even contain member functions and constructors.',
      sections: [
        {
          heading: 'Named Structures',
          body: 'Create a named struct and instantiate instances:',
          code: `#include <iostream>
#include <string>
using namespace std;

struct Car {
    string brand;
    string model;
    int year;
};

int main() {
    Car car1 = {"Tesla", "Model S", 2024};
    Car car2 = {"Porsche", "Taycan", 2025};

    cout << car1.brand << " " << car1.model << " (" << car1.year << ")" << endl;
    cout << car2.brand << " " << car2.model << " (" << car2.year << ")" << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Tesla Model S (2024)<br>
    Porsche Taycan (2025)
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 21. C++ References
  {
    id: 'cpp-references',
    title: 'C++ References (&)',
    slug: 'cpp-references',
    summary: 'A reference variable is an alias (another name) for an existing variable.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'A reference variable is a "reference" to an existing variable, and it is created with the & operator. Unlike pointers, references cannot be null and cannot be reseated to refer to another object after initialization.',
      sections: [
        {
          heading: 'Reference Alias Example',
          body: 'Modifying the reference directly modifies the original variable:',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string food = "Pizza";
    string &meal = food; // reference to food

    cout << "Original: " << food << endl;
    cout << "Reference: " << meal << endl;

    meal = "Burger"; // modifies food
    cout << "After modifying reference: " << food << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Original: Pizza<br>
    Reference: Pizza<br>
    After modifying reference: Burger
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 22. C++ Pointers
  {
    id: 'cpp-pointers',
    title: 'C++ Pointers & Dereferencing (*)',
    slug: 'cpp-pointers',
    summary: 'Variables storing memory addresses, dereferencing with *, and pointer mutation.',
    readTime: '5 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'A pointer is a variable that stores the memory address of another variable as its value. Pointers are created with the * operator.',
      sections: [
        {
          heading: 'Creating and Dereferencing Pointers',
          body: 'Use & to get address; use * to dereference:',
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string food = "Pizza";
    string* ptr = &food;

    cout << "Memory Address: " << ptr << endl;
    cout << "Dereferenced Value: " << *ptr << endl;

    *ptr = "Pasta";
    cout << "Updated Value: " << food << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Memory Address: 0x7ffd98<br>
    Dereferenced Value: Pizza<br>
    Updated Value: Pasta
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 23. C++ Functions
  {
    id: 'cpp-functions',
    title: 'C++ Functions',
    slug: 'cpp-functions',
    summary: 'Creating modular functions, prototypes, and return values.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.',
      sections: [
        {
          heading: 'Function Definition and Calling',
          body: 'Functions should return a value corresponding to their declared return type:',
          code: `#include <iostream>
using namespace std;

int calculateArea(int width, int height) {
    return width * height;
}

int main() {
    int area = calculateArea(5, 8);
    cout << "Calculated area: " << area << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Calculated area: 40
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 24. C++ Function Parameters
  {
    id: 'cpp-function-parameters',
    title: 'C++ Function Parameters & Pass by Reference',
    slug: 'cpp-function-parameters',
    summary: 'Default parameters, multiple parameters, and pass by reference (&).',
    readTime: '5 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Parameters act as variables inside the function. Passing parameters by reference using & avoids expensive copying of large data structures and allows modifying the caller\'s variables.',
      sections: [
        {
          heading: 'Pass by Reference Swapping',
          body: 'Using & in function parameters:',
          code: `#include <iostream>
using namespace std;

void swapNums(int &x, int &y) {
    int temp = x;
    x = y;
    y = temp;
}

int main() {
    int first = 10, second = 20;
    cout << "Before swap: " << first << ", " << second << endl;

    swapNums(first, second);
    cout << "After swap: " << first << ", " << second << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Before swap: 10, 20<br>
    After swap: 20, 10
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 25. C++ Function Overloading
  {
    id: 'cpp-function-overloading',
    title: 'C++ Function Overloading',
    slug: 'cpp-function-overloading',
    summary: 'Multiple functions can have the same name with different parameter counts or types.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'With function overloading, multiple functions can have the same name as long as the number and/or type of parameters are different.',
      sections: [
        {
          heading: 'Overloaded plusFunc Example',
          body: 'The compiler picks the correct function based on argument types:',
          code: `#include <iostream>
using namespace std;

int plusFunc(int x, int y) {
    return x + y;
}

double plusFunc(double x, double y) {
    return x + y;
}

int main() {
    cout << "Int addition: " << plusFunc(8, 5) << endl;
    cout << "Double addition: " << plusFunc(4.3, 6.26) << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Int addition: 13<br>
    Double addition: 10.56
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 26. C++ Recursion
  {
    id: 'cpp-recursion',
    title: 'C++ Recursion',
    slug: 'cpp-recursion',
    summary: 'Functions calling themselves to solve recursive algorithms.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Recursion is the technique of making a function call itself. This provides a clean way to solve mathematical and tree-traversal algorithms.',
      sections: [
        {
          heading: 'Sum of Numbers with Recursion',
          body: 'Recursive sum calculation:',
          code: `#include <iostream>
using namespace std;

int sum(int k) {
    if (k > 0) {
        return k + sum(k - 1);
    }
    return 0;
}

int main() {
    int result = sum(10);
    cout << "Sum from 1 to 10: " << result << endl; // 55
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Sum from 1 to 10: 55
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 27. C++ Classes and Objects
  {
    id: 'cpp-classes-objects',
    title: 'C++ Classes and Objects',
    slug: 'cpp-classes-objects',
    summary: 'Object-Oriented Programming (OOP): blueprints (classes) and instances (objects).',
    readTime: '5 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'OOP is about creating objects that contain both data and functions. A class is a template or blueprint for objects, and an object is an instance of a class.',
      sections: [
        {
          heading: 'Defining a Class and Instantiating Objects',
          body: 'Attributes and methods are declared inside the class body:',
          code: `#include <iostream>
#include <string>
using namespace std;

class MyClass {
  public:             // Access specifier
    int myNum;        // Attribute (int variable)
    string myString;  // Attribute (string variable)
};

int main() {
    MyClass myObj;
    myObj.myNum = 15;
    myObj.myString = "DevAura Object";

    cout << myObj.myString << " with ID " << myObj.myNum << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    DevAura Object with ID 15
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 28. C++ Class Methods
  {
    id: 'cpp-class-methods',
    title: 'C++ Class Methods (Inside & Outside Definitions)',
    slug: 'cpp-class-methods',
    summary: 'Methods belonging to classes, defined inline or outside using scope resolution ::.',
    readTime: '5 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Methods are functions that belong to the class. There are two ways to define methods that belong to a class: inside the class definition, or outside using the scope resolution operator ::.',
      sections: [
        {
          heading: 'Scope Resolution Operator (::)',
          body: 'Declaring method inside and defining outside:',
          code: `#include <iostream>
using namespace std;

class Car {
  public:
    int speed(int maxSpeed); // Method declaration
};

// Method definition outside the class
int Car::speed(int maxSpeed) {
    return maxSpeed;
}

int main() {
    Car myCar;
    cout << "Top speed: " << myCar.speed(240) << " km/h" << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Top speed: 240 km/h
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 29. C++ Constructors
  {
    id: 'cpp-constructors',
    title: 'C++ Constructors',
    slug: 'cpp-constructors',
    summary: 'Special member functions called automatically when an object is instantiated.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'A constructor in C++ is a special method that is automatically called when an object of a class is created. It has the exact same name as the class and no return type.',
      sections: [
        {
          heading: 'Parameterized Constructor',
          body: 'Constructors initialize member variables during instantiation:',
          code: `#include <iostream>
#include <string>
using namespace std;

class Car {
  public:
    string brand;
    int year;

    // Constructor with parameters
    Car(string b, int y) {
        brand = b;
        year = y;
    }
};

int main() {
    Car carObj("BMW", 2026);
    cout << carObj.brand << " (" << carObj.year << ")" << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    BMW (2026)
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 30. C++ Access Specifiers
  {
    id: 'cpp-access-specifiers',
    title: 'C++ Access Specifiers (public, private, protected)',
    slug: 'cpp-access-specifiers',
    summary: 'Data-hiding and encapsulation boundaries with public, private, and protected.',
    readTime: '4 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Access specifiers define how the members (attributes and methods) of a class can be accessed: public members are accessible outside the class, private members cannot be accessed from outside.',
      sections: [
        {
          heading: 'Public vs Private',
          body: 'By default, all members of a class are private if you do not specify an access specifier.',
          code: `#include <iostream>
using namespace std;

class BankAccount {
  public:
    int accountNumber; // Accessible anywhere
  private:
    double balance;    // Only accessible inside BankAccount
};

int main() {
    BankAccount acc;
    acc.accountNumber = 10098;
    // acc.balance = 50000; // COMPILATION ERROR: balance is private!
    cout << "Account: " << acc.accountNumber << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Access Specifiers Guide:</h4>
    <p><strong>public:</strong> Members are accessible from outside the class.</p>
    <p><strong>private:</strong> Members cannot be accessed (or viewed) from outside the class.</p>
    <p><strong>protected:</strong> Members cannot be accessed from outside, but can be accessed in inherited classes.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 31. C++ Encapsulation
  {
    id: 'cpp-encapsulation',
    title: 'C++ Encapsulation (Getters and Setters)',
    slug: 'cpp-encapsulation',
    summary: 'Protecting sensitive data by providing controlled access through get and set methods.',
    readTime: '5 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'The meaning of Encapsulation is to make sure that "sensitive" data is hidden from users. To achieve this, you must declare class variables/attributes as private and provide public get and set methods.',
      sections: [
        {
          heading: 'Getter and Setter Example',
          body: 'Setters allow validation before saving sensitive attributes:',
          code: `#include <iostream>
using namespace std;

class Employee {
  private:
    int salary;

  public:
    // Setter with validation
    void setSalary(int s) {
        if (s > 0) salary = s;
    }
    // Getter
    int getSalary() {
        return salary;
    }
};

int main() {
    Employee emp;
    emp.setSalary(75000);
    cout << "Employee Salary: $" << emp.getSalary() << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Employee Salary: $75000
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 32. C++ Inheritance
  {
    id: 'cpp-inheritance',
    title: 'C++ Inheritance & Multiple Inheritance',
    slug: 'cpp-inheritance',
    summary: 'Deriving classes from base classes using : public Base, and inheriting from multiple parents.',
    readTime: '5 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'In C++, it is possible to inherit attributes and methods from one class to another. Derived Class (child) inherits from Base Class (parent). C++ also uniquely supports multiple inheritance.',
      sections: [
        {
          heading: 'Single and Multiple Inheritance',
          body: 'Inheriting functionality across class hierarchies:',
          code: `#include <iostream>
using namespace std;

// Base class
class Vehicle {
  public:
    void honk() { cout << "Tuut, tuut!\\n"; }
};

// Derived class
class Car: public Vehicle {
  public:
    string model = "Mustang";
};

int main() {
    Car myCar;
    myCar.honk();
    cout << "Vehicle: " << myCar.model << endl;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Tuut, tuut!<br>
    Vehicle: Mustang
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 33. C++ Polymorphism
  {
    id: 'cpp-polymorphism',
    title: 'C++ Polymorphism & Virtual Functions',
    slug: 'cpp-polymorphism',
    summary: 'Polymorphism occurs when classes are related by inheritance: virtual methods and override.',
    readTime: '6 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance. Using the virtual keyword enables runtime dynamic dispatch through base pointers.',
      sections: [
        {
          heading: 'Virtual Functions and Overriding',
          body: 'Base class pointer executing derived behavior dynamically:',
          code: `#include <iostream>
using namespace std;

class Animal {
  public:
    virtual void animalSound() {
        cout << "The animal makes a sound\\n";
    }
};

class Pig : public Animal {
  public:
    void animalSound() override {
        cout << "The pig says: wee wee\\n";
    }
};

class Dog : public Animal {
  public:
    void animalSound() override {
        cout << "The dog says: bow wow\\n";
    }
};

int main() {
    Animal* a1 = new Pig();
    Animal* a2 = new Dog();

    a1->animalSound();
    a2->animalSound();

    delete a1;
    delete a2;
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    The pig says: wee wee<br>
    The dog says: bow wow
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 34. C++ Files
  {
    id: 'cpp-files',
    title: 'C++ Files (<fstream>)',
    slug: 'cpp-files',
    summary: 'Reading and writing files with ofstream, ifstream, and fstream.',
    readTime: '5 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'The <fstream> library allows us to work with files: ofstream creates and writes files, ifstream reads from files, and fstream combines both.',
      sections: [
        {
          heading: 'Writing and Reading with Streams',
          body: 'File streams use insertion (<<) and getline() operators:',
          code: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // 1. Create and write to file
    ofstream outFile("filename.txt");
    outFile << "C++ File Handling is clean and object-oriented!";
    outFile.close();

    // 2. Read back from file
    ifstream inFile("filename.txt");
    string content;
    getline(inFile, content);
    cout << "Read from file: " << content << endl;
    inFile.close();
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Read from file: C++ File Handling is clean and object-oriented!
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 35. C++ Exceptions
  {
    id: 'cpp-exceptions',
    title: 'C++ Exceptions (try, catch, throw)',
    slug: 'cpp-exceptions',
    summary: 'Handling runtime errors gracefully using try, catch, and custom throws.',
    readTime: '5 min',
    category: 'C++ Tutorial',
    content: {
      overview: 'Exception handling in C++ consists of three keywords: try, throw, and catch. The try statement allows you to define a block of code to be tested for errors while it is being executed.',
      sections: [
        {
          heading: 'Try, Catch, and Throwing Custom Exceptions',
          body: 'Preventing program crashes:',
          code: `#include <iostream>
#include <stdexcept>
using namespace std;

double divide(double a, double b) {
    if (b == 0) {
        throw runtime_error("Division by zero error!");
    }
    return a / b;
}

int main() {
    try {
        cout << "10 / 2 = " << divide(10, 2) << endl;
        cout << "10 / 0 = " << divide(10, 0) << endl;
    } catch (const exception& e) {
        cout << "Exception Caught: " << e.what() << endl;
    }
    return 0;
}`,
          codeLanguage: 'cpp',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    10 / 2 = 5<br>
    Exception Caught: Division by zero error!
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
