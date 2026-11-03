import { TutorialChapter } from '../../types';

export const typescriptChapters: TutorialChapter[] = [
  // 1. TypeScript HOME
  {
    id: 'ts-home',
    title: 'TypeScript HOME',
    slug: 'ts-home',
    summary: 'TypeScript is JavaScript with syntax for types. It compiles down to standard, clean, cross-browser JavaScript.',
    readTime: '3 min',
    category: 'TypeScript Tutorial',
    content: {
      overview: 'TypeScript is an open-source syntactic superset of JavaScript developed and maintained by Microsoft. By adding static type definitions at development time, it catches errors early in your editor before your code ever runs in production.',
      sections: [
        {
          heading: 'Your First TypeScript Code',
          body: 'Assigning a type annotation to a variable and compiling:',
          code: `let greeting: string = "Hello, DevAura TypeScript!";
console.log(greeting);`,
          codeLanguage: 'typescript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">TypeScript Compiler Output</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">[tsc 5.5] Compiled successfully.
Output: "Hello, DevAura TypeScript!"</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. TypeScript Intro
  {
    id: 'ts-intro',
    title: 'TypeScript Introduction',
    slug: 'ts-intro',
    summary: 'Why TypeScript? Understand static type checking, self-documenting code, and tooling support.',
    readTime: '4 min',
    category: 'TypeScript Tutorial',
    content: {
      overview: 'JavaScript is dynamically typed: variable types are calculated at runtime, leading to common TypeError exceptions. TypeScript performs static type analysis at compile time, eliminating an entire class of runtime bugs.',
      sections: [
        {
          heading: 'JavaScript vs TypeScript',
          body: 'Comparison between dynamic and static typing:',
          code: `// In JavaScript:
// function multiply(a, b) { return a * b; }
// multiply("5", 2); // returns 10, but multiply("hello", 2) returns NaN!

// In TypeScript:
function multiply(a: number, b: number): number {
  return a * b;
}
// multiply("hello", 2);
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 3. TypeScript Get Started
  {
    id: 'ts-getstarted',
    title: 'TypeScript Get Started',
    slug: 'ts-getstarted',
    summary: 'Installing the TypeScript compiler (tsc) via npm and initializing tsconfig.json.',
    readTime: '4 min',
    category: 'TypeScript Tutorial',
    content: {
      overview: 'TypeScript files end with the .ts extension (.tsx for React JSX). The tsc compiler transpiles TypeScript source code into browser-compatible JavaScript.',
      sections: [
        {
          heading: 'Installation & tsconfig.json',
          body: 'CLI commands to initialize and run TypeScript projects:',
          code: `# Install TypeScript globally or as dev dependency:
npm install -D typescript

# Initialize default tsconfig.json configuration file:
npx tsc --init

# Compile a file:
npx tsc index.ts

# Watch mode (automatically recompiles on file save):
npx tsc --watch`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 4. TypeScript Simple Types
  {
    id: 'ts-simple-types',
    title: 'TypeScript Simple Types',
    slug: 'ts-simple-types',
    summary: 'Primitive types: boolean, number, string, plus explicit vs implicit type assignments.',
    readTime: '4 min',
    category: 'TypeScript Basics',
    content: {
      overview: 'TypeScript has three fundamental primitive types: boolean, number, and string. Types can be written explicitly or inferred implicitly.',
      sections: [
        {
          heading: 'Explicit vs Inferred (Implicit) Typing',
          body: 'How TypeScript assigns and checks types:',
          code: `// Explicit type assignment:
let firstName: string = "DevAura";
let year: number = 2026;
let isProd: boolean = true;

// Implicit type assignment (TypeScript infers type from value):
let framework = "React"; // Inferred as string
// framework = 42;       // Error: Type 'number' is not assignable to type 'string'`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 5. TypeScript Special Types
  {
    id: 'ts-special-types',
    title: 'TypeScript Special Types: any, unknown, never',
    slug: 'ts-special-types',
    summary: 'Escape hatches and safe alternatives: any, unknown type guards, and unreachable never types.',
    readTime: '5 min',
    category: 'TypeScript Basics',
    content: {
      overview: 'TypeScript provides special types for cases where a value’s shape is dynamic or unknown at authoring time.',
      sections: [
        {
          heading: 'any vs unknown vs never',
          body: 'Choosing the right special type:',
          code: `// 1. any: Disables type-checking entirely (avoid where possible)
let vAny: any = true;
vAny = "string"; // No error

// 2. unknown: Type-safe counterpart to any (requires type narrowing before use)
let vUnknown: unknown = 10;
if (typeof vUnknown === "number") {
  console.log(vUnknown * 2); // Valid because narrowed!
}

// 3. never: Represents values that never occur (e.g. infinite loops or functions that throw)
function throwError(msg: string): never {
  throw new Error(msg);
}`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 6. TypeScript Arrays
  {
    id: 'ts-arrays',
    title: 'TypeScript Arrays',
    slug: 'ts-arrays',
    summary: 'Typed arrays with type[], Array<type>, and immutable ReadonlyArray.',
    readTime: '4 min',
    category: 'TypeScript Basics',
    content: {
      overview: 'Arrays can be typed to hold elements of a specific type. ReadonlyArray prevents mutation methods like push or pop.',
      sections: [
        {
          heading: 'Array Syntax & readonly modifier',
          body: 'Declaring arrays in TypeScript:',
          code: `// Standard typed array:
const skills: string[] = ["TypeScript", "React", "Node.js"];
skills.push("PostgreSQL");

// Readonly array prevents mutations:
const immutableCodes: readonly number[] = [200, 201, 204];
// immutableCodes.push(404); // Error: Property 'push' does not exist on type 'readonly number[]'`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 7. TypeScript Tuples
  {
    id: 'ts-tuples',
    title: 'TypeScript Tuples',
    slug: 'ts-tuples',
    summary: 'Fixed-length arrays where each index position has a defined, predetermined data type.',
    readTime: '4 min',
    category: 'TypeScript Basics',
    content: {
      overview: 'A tuple is a typed array with a predefined length and specific types for each index position.',
      sections: [
        {
          heading: 'Defining and Destructuring Tuples',
          body: 'Named tuples and readonly tuples:',
          code: `// Tuple with [string, number, boolean]:
let httpStatus: [string, number, boolean] = ["OK", 200, true];

// Named tuple elements (great for documentation):
type GeoCoordinate = [latitude: number, longitude: number];
const location: GeoCoordinate = [37.7749, -122.4194];

// Destructuring:
const [lat, lng] = location;
console.log(lat, lng);`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 8. TypeScript Object Types
  {
    id: 'ts-object-types',
    title: 'TypeScript Object Types',
    slug: 'ts-object-types',
    summary: 'Explicit object property contracts, optional properties (?), and dynamic index signatures.',
    readTime: '4 min',
    category: 'TypeScript Basics',
    content: {
      overview: 'TypeScript objects have typed properties. Properties marked with a question mark ? are optional.',
      sections: [
        {
          heading: 'Object Properties & Index Signatures',
          body: 'Working with object schemas:',
          code: `const car: { type: string; model: string; year?: number } = {
  type: "Toyota",
  model: "Corolla"
  // year is optional!
};

// Index Signatures for dynamic dictionary keys:
const nameAges: { [index: string]: number } = {};
nameAges["Abhay"] = 22;
nameAges["Rahul"] = 25;`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 9. TypeScript Enums
  {
    id: 'ts-enums',
    title: 'TypeScript Enums',
    slug: 'ts-enums',
    summary: 'Numeric and string enums for defining named sets of distinct constants.',
    readTime: '4 min',
    category: 'TypeScript Basics',
    content: {
      overview: 'Enums allow developers to define a collection of related values. By default, enums are numeric and start at 0.',
      sections: [
        {
          heading: 'Numeric vs String Enums',
          body: 'Enum declarations:',
          code: `// Numeric enum (auto-increments 0, 1, 2, 3)
enum CardinalDirections {
  North, // 0
  East,  // 1
  South, // 2
  West   // 3
}

// String enum (preferred for clarity and debugging):
enum HttpStatus {
  Success = "200_OK",
  NotFound = "404_NOT_FOUND",
  ServerError = "500_SERVER_ERROR"
}

const res = HttpStatus.Success;
console.log(res); // "200_OK"`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 10. Type Aliases vs Interfaces
  {
    id: 'ts-aliases-interfaces',
    title: 'TypeScript Type Aliases vs Interfaces',
    slug: 'ts-aliases-interfaces',
    summary: 'When to use type alias vs interface, extending interfaces, declaration merging, and union types.',
    readTime: '5 min',
    category: 'TypeScript Types',
    content: {
      overview: 'Both type and interface can define object shapes. Interfaces can be extended with extends and reopened for declaration merging; types support unions and primitives.',
      sections: [
        {
          heading: 'Interface Extension and Intersection Types',
          body: 'Code comparison:',
          code: `// Interface (extensible with 'extends'):
interface BaseEntity {
  id: string;
  createdAt: Date;
}

interface UserProfile extends BaseEntity {
  name: string;
  email: string;
}

// Type Alias with Intersection (&) and Unions (|):
type Status = "pending" | "approved" | "rejected";
type AdminProfile = UserProfile & { role: "admin"; permissions: string[] };`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 11. TypeScript Union Types
  {
    id: 'ts-union-types',
    title: 'TypeScript Union Types',
    slug: 'ts-union-types',
    summary: 'Allow variables to hold one of several types using pipe (|), and narrow types using typeof and in.',
    readTime: '4 min',
    category: 'TypeScript Types',
    content: {
      overview: 'Union types express a value that can be one of several types. The pipe operator | separates each type.',
      sections: [
        {
          heading: 'Type Narrowing with Unions',
          body: 'Safely inspecting the exact type with typeof:',
          code: `function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toFixed(2);
}

console.log(formatId("usr-9104")); // "USR-9104"
console.log(formatId(42.5));       // "42.50"`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 12. TypeScript Functions
  {
    id: 'ts-functions',
    title: 'TypeScript Functions',
    slug: 'ts-functions',
    summary: 'Typed parameters, return types, void, optional parameters (?), default parameters, and rest parameters.',
    readTime: '4 min',
    category: 'TypeScript Basics',
    content: {
      overview: 'TypeScript allows you to specify the types of both the parameters and the return value of a function.',
      sections: [
        {
          heading: 'Function Signatures and Defaults',
          body: 'Function examples:',
          code: `// Optional param 'c' and default param 'multiplier':
function computeTotal(a: number, b: number, multiplier: number = 1, c?: number): number {
  const base = a + b + (c ?? 0);
  return base * multiplier;
}

// Rest parameters typed as array:
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 13. TypeScript Casting
  {
    id: 'ts-casting',
    title: 'TypeScript Casting (Type Assertions)',
    slug: 'ts-casting',
    summary: 'Override type inference safely using the "as" keyword or angle-bracket syntax.',
    readTime: '3 min',
    category: 'TypeScript Basics',
    content: {
      overview: 'Type assertions tell the compiler: "Trust me, I know the exact shape of this object." It does not perform runtime data conversion.',
      sections: [
        {
          heading: 'Casting with "as" keyword',
          body: 'Casting DOM elements and unknown types:',
          code: `// Casting unknown to string:
let val: unknown = "DevAura Platform";
let strLength: number = (val as string).length;

// Casting DOM elements:
const input = document.getElementById("search-input") as HTMLInputElement;
if (input) {
  console.log(input.value);
}`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 14. TypeScript Classes
  {
    id: 'ts-classes',
    title: 'TypeScript Classes & Access Modifiers',
    slug: 'ts-classes',
    summary: 'Encapsulation with public, private, protected, readonly, parameter properties, and abstract classes.',
    readTime: '5 min',
    category: 'TypeScript OOP',
    content: {
      overview: 'TypeScript extends ES6 classes with access modifiers and parameter property constructor shortcuts.',
      sections: [
        {
          heading: 'Parameter Properties & Access Modifiers',
          body: 'Clean class design:',
          code: `class Employee {
  // Parameter property: declaring modifier automatically creates and assigns field!
  constructor(
    public readonly id: number,
    public name: string,
    private salary: number,
    protected department: string
  ) {}

  public getCompensation(): string {
    return "Confidential";
  }
}

const emp = new Employee(101, "Abhay", 95000, "Engineering");
// emp.salary; // Error: Property 'salary' is private!`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 15. TypeScript Generics
  {
    id: 'ts-generics',
    title: 'TypeScript Generics',
    slug: 'ts-generics',
    summary: 'Create reusable components and functions that work across multiple data types with type parameters (<T>).',
    readTime: '6 min',
    category: 'TypeScript Advanced',
    content: {
      overview: 'Generics introduce type variables (typically denoted as <T>) so algorithms can operate over variety of types rather than a single one, while retaining full type safety.',
      sections: [
        {
          heading: 'Generic Functions and Constraints',
          body: 'Using type constraints with extends:',
          code: `// Generic function returning the same type passed in:
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface with constraint:
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log("Length is:", item.length);
}

logLength("Hello TypeScript"); // valid: string has length
logLength([1, 2, 3, 4]);       // valid: array has length
// logLength(42);              // Error: number does not have length property!`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 16. TypeScript Utility Types
  {
    id: 'ts-utility-types',
    title: 'TypeScript Utility Types',
    slug: 'ts-utility-types',
    summary: 'Transform existing types with Partial, Required, Readonly, Record, Pick, Omit, and Exclude.',
    readTime: '6 min',
    category: 'TypeScript Advanced',
    content: {
      overview: 'TypeScript includes built-in global utility types to facilitate common type transformations.',
      sections: [
        {
          heading: 'Essential Utility Types Examples',
          body: 'Transforming interface definitions:',
          code: `interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
}

// 1. Partial<T>: Makes all properties optional (great for update APIs)
type UpdateUserDto = Partial<User>;

// 2. Pick<T, K>: Creates type by picking specific properties
type UserCredentials = Pick<User, "email" | "name">;

// 3. Omit<T, K>: Creates type by removing specific properties
type PublicUser = Omit<User, "id">;

// 4. Record<Keys, Type>: Constructs an object type with specified key/value pairs
type RolePermissions = Record<"admin" | "editor" | "viewer", string[]>;`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 17. TypeScript Keyof Operator
  {
    id: 'ts-keyof',
    title: 'TypeScript Keyof Operator',
    slug: 'ts-keyof',
    summary: 'Extract the keys of an object type as a union of string or numeric literal types.',
    readTime: '4 min',
    category: 'TypeScript Advanced',
    content: {
      overview: 'The keyof operator takes an object type and produces a string or numeric literal union of its keys.',
      sections: [
        {
          heading: 'Keyof in Generic Getters',
          body: 'Type-safe property access:',
          code: `interface Device {
  manufacturer: string;
  price: number;
  inStock: boolean;
}

// DeviceKey is: "manufacturer" | "price" | "inStock"
type DeviceKey = keyof Device;

// Type-safe property getter:
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const laptop: Device = { manufacturer: "Apple", price: 1999, inStock: true };
const price = getProperty(laptop, "price"); // Inferred as number!`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 18. Null & Undefined Handling
  {
    id: 'ts-null-undefined',
    title: 'TypeScript Null & Undefined',
    slug: 'ts-null-undefined',
    summary: 'strictNullChecks, optional chaining (?.), nullish coalescing (??), and non-null assertion (!).',
    readTime: '4 min',
    category: 'TypeScript Advanced',
    content: {
      overview: 'With strictNullChecks enabled, null and undefined are not assignable to other types, eliminating accidental runtime errors.',
      sections: [
        {
          heading: 'Safe Navigation Operators',
          body: 'Using ?., ??, and ! operators:',
          code: `type UserAccount = {
  profile?: {
    bio?: string;
  };
};

function getBio(user: UserAccount): string {
  // Optional chaining (?.) safely returns undefined if chain breaks:
  // Nullish coalescing (??) provides fallback only for null/undefined:
  return user.profile?.bio ?? "No biography provided.";
}`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 19. Definitely Typed & @types
  {
    id: 'ts-definitely-typed',
    title: 'TypeScript Definitely Typed & Declarations',
    slug: 'ts-definitely-typed',
    summary: 'Consume vanilla JavaScript libraries using community @types declaration packages.',
    readTime: '4 min',
    category: 'TypeScript Tooling',
    content: {
      overview: 'The Definitely Typed repository hosts high-quality TypeScript declaration files (.d.ts) for libraries that do not bundle their own types.',
      sections: [
        {
          heading: 'Installing @types Packages',
          body: 'Adding types to npm packages:',
          code: `# Installing types for lodash or express:
npm install lodash
npm install -D @types/lodash

# Custom ambient declaration file (types/global.d.ts):
declare module "legacy-library" {
  export function processData(input: string): boolean;
}`,
          codeLanguage: 'typescript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">TypeScript Language Server Active</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Found 0 errors across 19 modules.
Strict null checks: ENABLED
Types resolved via @types/node and @types/react.</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
