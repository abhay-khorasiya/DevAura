import { TutorialChapter } from '../../../types';

export const pythonControlFlowAndOopChapters: TutorialChapter[] = [
  // 35. Python If...Else
  {
    id: 'py-if-else',
    title: 'Python If...Else',
    slug: 'py-if-else',
    summary: 'Python supports the usual logical conditions from mathematics: if, elif, else, and short hand ternary.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Python supports the usual logical conditions: Equals (a == b), Not Equals (a != b), Less than (a < b), Less than or equal to (a <= b), Greater than (a > b), Greater than or equal to (a >= b). Indentation defines code blocks.',
      sections: [
        {
          heading: 'elif, else, and Ternary Operator',
          body: 'Short hand if...else (ternary) syntax: value_if_true if condition else value_if_false.',
          code: `a = 200
b = 33

if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")

# Short hand if...else (Ternary Operator):
status = "Pass" if a >= 100 else "Fail"

# The pass statement (Placeholder for empty blocks):
if a > b:
    pass # Todo: implement logic later without IndentationError`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Python Ternary Expression</h3>
  <p><code>"Adult" if age &gt;= 18 else "Minor"</code></p>
</body>
</html>`,
          tips: [
            'Use pass when developing a skeleton architecture to avoid IndentationError on empty blocks.'
          ]
        }
      ]
    }
  },

  // 36. Python While Loops
  {
    id: 'py-while-loops',
    title: 'Python While Loops',
    slug: 'py-while-loops',
    summary: 'With the while loop we can execute a set of statements as long as a condition is true.',
    readTime: '4 min',
    category: 'Python Tutorial',
    content: {
      overview: 'With the while loop we can execute a set of statements as long as a condition is true. The break statement can stop the loop even if the while condition is true. The continue statement can stop the current iteration, and continue with the next.',
      sections: [
        {
          heading: 'While Loop with else Clause',
          body: 'With the else statement we can run a block of code once when the condition no longer is true (unless broken by break).',
          code: `i = 1
while i < 6:
    print(i)
    i += 1
else:
    print("i is no longer less than 6")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>While Loop Countdown</h3>
  <p>1, 2, 3, 4, 5 &rarr; "i is no longer less than 6"</p>
</body>
</html>`,
          tips: [
            'Remember to increment i, or else the loop will continue forever.'
          ]
        }
      ]
    }
  },

  // 37. Python For Loops
  {
    id: 'py-for-loops',
    title: 'Python For Loops',
    slug: 'py-for-loops',
    summary: 'A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'A for loop is used for iterating over a sequence. This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages. The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1.',
      sections: [
        {
          heading: 'The range() Function and For...Else',
          body: 'range(start, stop, step) generates numeric sequences without allocating full arrays in memory.',
          code: `# range(start, stop, step):
for x in range(2, 30, 3):
    print(x) # 2, 5, 8, 11, 14, 17, 20, 23, 26, 29

# for...else (Executes when loop finishes without break):
for n in [1, 2, 3]:
    if n == 5:
        break
else:
    print("Loop finished without encountering break!")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>range() Step Generator</h3>
  <p><code>range(0, 10, 2)</code> generates 0, 2, 4, 6, 8.</p>
</body>
</html>`,
          tips: [
            'The else block on a for loop only runs if the loop completed naturally without hitting a break.'
          ]
        }
      ]
    }
  },

  // 38. Python Functions
  {
    id: 'py-functions',
    title: 'Python Functions',
    slug: 'py-functions',
    summary: 'A function is a block of code which only runs when it is called: def, *args, and **kwargs.',
    readTime: '6 min',
    category: 'Python Tutorial',
    content: {
      overview: 'In Python a function is defined using the def keyword. Information can be passed into functions as arguments. Python supports Arbitrary Arguments (*args) and Arbitrary Keyword Arguments (**kwargs), default parameter values, and positional-only arguments.',
      sections: [
        {
          heading: '*args and **kwargs Explained',
          body: '*args receives arguments as a Tuple. **kwargs receives keyword arguments as a Dictionary.',
          code: `# Arbitrary Arguments (*args):
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3, 4, 5)) # 15

# Arbitrary Keyword Arguments (**kwargs):
def build_profile(first, last, **user_info):
    user_info['first_name'] = first
    user_info['last_name'] = last
    return user_info

profile = build_profile("John", "Doe", location="London", field="Tech")

# Default Parameter Value:
def greet(name="Friend"):
    return f"Hello, {name}!"`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>*args &amp; **kwargs</h3>
  <p><code>*args</code> packs extra positional args into a tuple.</p>
  <p><code>**kwargs</code> packs named keyword args into a dictionary.</p>
</body>
</html>`,
          tips: [
            'In Python 3.8+, you can specify Positional-Only parameters using / and Keyword-Only parameters using *.'
          ]
        }
      ]
    }
  },

  // 39. Python Lambda
  {
    id: 'py-lambda',
    title: 'Python Lambda',
    slug: 'py-lambda',
    summary: 'A lambda function is a small anonymous function that can take any number of arguments, but can only have one expression.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'A lambda function is a small anonymous function. A lambda function can take any number of arguments, but can only have one expression. Syntax: lambda arguments : expression. The expression is executed and the result is returned.',
      sections: [
        {
          heading: 'Using Lambda with map(), filter(), and sort()',
          body: 'The power of lambda is better shown when you use them as an anonymous function inside another function.',
          code: `# Lambda expression:
multiply = lambda a, b : a * b
print(multiply(5, 6)) # 30

# With map():
numbers = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, numbers)) # [2, 4, 6, 8]

# With filter():
evens = list(filter(lambda x: x % 2 == 0, numbers)) # [2, 4]

# With sorting:
pairs = [(1, 'one'), (3, 'three'), (2, 'two')]
pairs.sort(key=lambda p: p[0])`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Lambda One-Liner</h3>
  <p><code>(lambda x: x * 3)(10)</code> &rarr; <b>30</b></p>
</body>
</html>`,
          tips: [
            'Use lambda functions when an anonymous function is required for a short period of time.'
          ]
        }
      ]
    }
  },

  // 40. Python Classes and Objects
  {
    id: 'py-classes',
    title: 'Python Classes and Objects',
    slug: 'py-classes',
    summary: 'Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods.',
    readTime: '6 min',
    category: 'Python Tutorial',
    content: {
      overview: 'To create a class, use the keyword class. All classes have a function called __init__(), which is always executed when the class is being initiated. Use the __init__() function to assign values to object properties, or other operations that are necessary to do when the object is being created.',
      sections: [
        {
          heading: 'The self Parameter and __str__() Method',
          body: 'The self parameter is a reference to the current instance of the class. The __str__() method controls what should be returned when the class object is represented as a string.',
          code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} ({self.age} years old)"

    def celebrate_birthday(self):
        self.age += 1
        print(f"Happy Birthday {self.name}! You are now {self.age}.")

p1 = Person("Alice", 28)
print(p1) # Calls __str__: "Alice (28 years old)"
p1.celebrate_birthday()`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Python OOP Instantiation</h3>
  <p><code>p1 = Person("Alice", 28)</code> creates an instance of class Person.</p>
</body>
</html>`,
          tips: [
            'The self parameter does not have to be named self by Python, but it is the universal convention.'
          ]
        }
      ]
    }
  },

  // 41. Python Inheritance
  {
    id: 'py-inheritance',
    title: 'Python Inheritance',
    slug: 'py-inheritance',
    summary: 'Inheritance allows us to define a class that inherits all the methods and properties from another class: super().',
    readTime: '6 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Inheritance allows us to define a class that inherits all the methods and properties from another class. Parent class is the class being inherited from, also called base class. Child class is the class that inherits from another class, also called derived class. Python has a super() function that makes the child class inherit all the methods and properties from its parent.',
      sections: [
        {
          heading: 'The super() Function',
          body: 'By using the super() function, you do not have to use the name of the parent element, and it automatically inherits the methods and properties.',
          code: `class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

class Student(Person):
    def __init__(self, fname, lname, graduation_year):
        super().__init__(fname, lname) # Delegate to parent constructor
        self.graduation_year = graduation_year

    def welcome(self):
        print(f"Welcome {self.firstname} to the class of {self.graduation_year}!")

s = Student("Mike", "Olsen", 2026)
s.welcome()`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Inheritance Structure</h3>
  <p>Student inherits <code>printname()</code> from Person and adds <code>welcome()</code>.</p>
</body>
</html>`,
          tips: [
            'Python supports multiple inheritance: class Child(Parent1, Parent2):'
          ]
        }
      ]
    }
  },

  // 42. Python Iterators
  {
    id: 'py-iterators',
    title: 'Python Iterators',
    slug: 'py-iterators',
    summary: 'An iterator is an object that contains a countable number of values. Learn __iter__() and __next__().',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'An iterator is an object that contains a countable number of values. Technically, in Python, an iterator is an object which implements the iterator protocol, which consist of the methods __iter__() and __next__(). Lists, tuples, dictionaries, and sets are all iterable objects.',
      sections: [
        {
          heading: 'Building a Custom Iterator Class',
          body: 'StopIteration prevents the iterator from continuing forever.',
          code: `class MyNumbers:
    def __iter__(self):
        self.a = 1
        return self

    def __next__(self):
        if self.a <= 5:
            x = self.a
            self.a += 1
            return x
        else:
            raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)

for x in myiter:
    print(x) # Prints 1, 2, 3, 4, 5`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Custom Iterator</h3>
  <p>Iteration halts automatically when <code>StopIteration</code> is raised.</p>
</body>
</html>`,
          tips: [
            'Python generators (yield keyword) provide a much shorter way to build iterators without manual __iter__ and __next__ code.'
          ]
        }
      ]
    }
  },

  // 43. Python Polymorphism
  {
    id: 'py-polymorphism',
    title: 'Python Polymorphism',
    slug: 'py-polymorphism',
    summary: 'Polymorphism means "many forms", and it refers to methods/functions/operators with the same name that can be executed on many objects.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'The word "polymorphism" means "many forms", and in programming it refers to methods/functions/operators with the same name that can be executed on many objects or classes. A good example is the built-in len() function, which works polymorphically on strings, lists, tuples, and dictionaries.',
      sections: [
        {
          heading: 'Class Polymorphism',
          body: 'Different classes can implement methods with identical names (Duck Typing).',
          code: `class Car:
    def move(self):
        print("Drive!")

class Boat:
    def move(self):
        print("Sail!")

class Plane:
    def move(self):
        print("Fly!")

# Polymorphic loop:
vehicles = [Car(), Boat(), Plane()]
for v in vehicles:
    v.move() # Calls appropriate move() method automatically`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Duck Typing in Python</h3>
  <p><i>"If it walks like a duck and quacks like a duck, it's a duck."</i> Python calls methods without requiring shared abstract base classes.</p>
</body>
</html>`,
          tips: [
            'Python achieves polymorphism naturally through Duck Typing.'
          ]
        }
      ]
    }
  },

  // 44. Python Scope
  {
    id: 'py-scope',
    title: 'Python Scope',
    slug: 'py-scope',
    summary: 'A variable is only available from inside the region it is created. Understand LEGB rule and nonlocal.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'A variable is only available from inside the region it is created. This is called scope. Python resolves variable names using the LEGB Rule: Local &rarr; Enclosing &rarr; Global &rarr; Built-in.',
      sections: [
        {
          heading: 'The nonlocal Keyword',
          body: 'The nonlocal keyword is used to work with variables inside nested functions, where the variable should not belong to the inner function.',
          code: `def myfunc1():
    x = "Jane"
    def myfunc2():
        nonlocal x
        x = "hello" # Modifies x in myfunc1's enclosing scope!
    myfunc2()
    return x

print(myfunc1()) # "hello"`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>LEGB Scope Rule</h3>
  <ol>
    <li><b>L</b>ocal: Inside current function</li>
    <li><b>E</b>nclosing: Inside enclosing functions</li>
    <li><b>G</b>lobal: At top-level module</li>
    <li><b>B</b>uilt-in: Python built-in namespace</li>
  </ol>
</body>
</html>`,
          tips: [
            'Use nonlocal for closure state management and global for module-level state.'
          ]
        }
      ]
    }
  },

  // 45. Python Match Case
  {
    id: 'py-match-case',
    title: 'Python Match Case',
    slug: 'py-match-case',
    summary: 'Structural Pattern Matching introduced in Python 3.10: match ... case statements.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Structural Pattern Matching was introduced in Python 3.10 via the match...case statement. It works like a switch statement in C/Java/JavaScript, but can also unpack and match patterns in sequences, dictionaries, and classes.',
      sections: [
        {
          heading: 'Pattern Matching with match and case',
          body: 'Use _ as the wildcard default case. Add if guards for refined pattern validation.',
          code: `def http_status(status):
    match status:
        case 200:
            return "OK"
        case 404:
            return "Not Found"
        case 500 | 502 | 503:
            return "Server Error"
        case _:
            return "Unknown Status"`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Python 3.10+ Pattern Matching</h3>
  <p><code>match status: case 200: ... case _: ...</code></p>
</body>
</html>`,
          tips: [
            'Match case statements do not require break statements; execution stops after the matched case.'
          ]
        }
      ]
    }
  }
];
