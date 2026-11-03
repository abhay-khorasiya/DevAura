import { TutorialChapter } from '../../../types';

export const pythonCollectionsChapters: TutorialChapter[] = [
  // 22. Python Add and Remove List Items
  {
    id: 'py-add-remove-lists',
    title: 'Python Add & Remove List Items',
    slug: 'py-add-remove-lists',
    summary: 'Add items using append(), insert(), extend(). Remove items using remove(), pop(), del, clear().',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Python provides methods to add and remove items from a list. append() adds to the end, insert() adds at a specified index, extend() appends elements from any iterable. remove() removes by value, pop() removes by index, del deletes items or the entire list, clear() empties the list.',
      sections: [
        {
          heading: 'Adding and Removing Methods',
          body: 'pop() removes the specified index (or the last item if index is omitted) and returns the removed item.',
          code: `fruits = ["apple", "banana", "cherry"]

# Adding items:
fruits.append("orange")         # Adds to the end
fruits.insert(1, "blueberry")   # Inserts at index 1
fruits.extend(["mango", "kiwi"])# Appends iterable

# Removing items:
fruits.remove("banana")         # Removes first occurrence
popped_item = fruits.pop()      # Removes and returns last item
del fruits[0]                   # Deletes item at index 0
# fruits.clear()                # Empties the list`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>List Methods in Action</h3>
  <p><code>fruits.append("kiwi")</code> adds to end of list in O(1) time.</p>
  <p><code>fruits.pop()</code> removes and returns the last item.</p>
</body>
</html>`,
          tips: [
            'Using remove() on a value that does not exist in the list raises a ValueError; check with in first.'
          ]
        }
      ]
    }
  },

  // 23. Python Loop Lists
  {
    id: 'py-loop-lists',
    title: 'Python Loop Lists',
    slug: 'py-loop-lists',
    summary: 'Iterate through list items using for loops, index numbers, enumerate(), and while loops.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'You can loop through the list items by using a for loop, by referring to the index numbers (using range() and len()), using a while loop, or using the built-in enumerate() function to get both index and value simultaneously.',
      sections: [
        {
          heading: 'Using enumerate() for Index & Value',
          body: 'enumerate() is the most idiomatic Python way to loop through items while tracking the index.',
          code: `thislist = ["apple", "banana", "cherry"]

# 1. Direct iteration:
for x in thislist:
    print(x)

# 2. Iteration with index using enumerate():
for index, fruit in enumerate(thislist):
    print(f"{index}: {fruit}")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>enumerate() Output</h3>
  <p>0: apple<br>1: banana<br>2: cherry</p>
</body>
</html>`,
          tips: [
            'Avoid writing for i in range(len(items)) when enumerate(items) provides cleaner code.'
          ]
        }
      ]
    }
  },

  // 24. Python List Comprehension
  {
    id: 'py-list-comprehension',
    title: 'Python List Comprehension',
    slug: 'py-list-comprehension',
    summary: 'List comprehension offers a shorter syntax when you want to create a new list based on existing collections.',
    readTime: '6 min',
    category: 'Python Tutorial',
    content: {
      overview: 'List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list. Syntax: [expression for item in iterable if condition == True].',
      sections: [
        {
          heading: 'Transforming and Filtering Lists in 1 Line',
          body: 'Replaces 4-line for loops with a compact, performant expression.',
          code: `fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

# Traditional loop:
# newlist = []
# for x in fruits:
#     if "a" in x:
#         newlist.append(x)

# List Comprehension:
newlist = [x for x in fruits if "a" in x]

# Calculations and transformations:
squares = [x**2 for x in range(10)] # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
upper_fruits = [x.upper() for x in fruits]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>List Comprehension</h3>
  <p><code>[x**2 for x in range(6)]</code> &rarr; <b>[0, 1, 4, 9, 16, 25]</b></p>
</body>
</html>`,
          tips: [
            'List comprehensions run in C-level bytecode loops, making them faster than traditional Python for loops.'
          ]
        }
      ]
    }
  },

  // 25. Python Sort Lists
  {
    id: 'py-sort-lists',
    title: 'Python Sort Lists',
    slug: 'py-sort-lists',
    summary: 'Sort lists alphabetically and numerically using sort(), reverse(), and custom key functions.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'List objects have a sort() method that will sort the list alphanumerically, ascending, by default. The sorted() built-in function returns a new sorted list without mutating the original list.',
      sections: [
        {
          heading: 'Custom Sort with key Function',
          body: 'You can customize your own function by using the keyword argument key = function.',
          code: `# Ascending & Descending:
numbers = [100, 50, 65, 82, 23]
numbers.sort()                # [23, 50, 65, 82, 100]
numbers.sort(reverse=True)    # [100, 82, 65, 50, 23]

# Case-insensitive sorting:
fruits = ["banana", "Orange", "Kiwi", "cherry"]
fruits.sort(key=str.lower)    # ['banana', 'cherry', 'Kiwi', 'Orange']

# Custom key function (Sort by closeness to 50):
def myfunc(n):
    return abs(n - 50)
numbers.sort(key=myfunc)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Case-Insensitive Sort</h3>
  <p>Without <code>key=str.lower</code>, all uppercase letters come before lowercase letters in ASCII order!</p>
</body>
</html>`,
          tips: [
            'Use sorted(my_list) when you want a new sorted copy without modifying the original list.'
          ]
        }
      ]
    }
  },

  // 26. Python Copy and Join Lists
  {
    id: 'py-copy-join-lists',
    title: 'Python Copy and Join Lists',
    slug: 'py-copy-join-lists',
    summary: 'Copy lists safely using copy() or list(), and join lists using +, extend(), or unpacking.',
    readTime: '4 min',
    category: 'Python Tutorial',
    content: {
      overview: 'You cannot copy a list simply by typing list2 = list1, because list2 will only be a reference to list1, and changes made in list1 will automatically also be made in list2. There are ways to make a copy, one way is to use the built-in List method copy().',
      sections: [
        {
          heading: 'Shallow Copies and Joining Lists',
          body: 'Use copy(), list(), or slice notation [:] to create independent list copies.',
          code: `# Copying:
original = ["apple", "banana"]
my_copy = original.copy()
slice_copy = original[:] # Equivalent shallow copy

# Joining lists:
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

# Method 1: + operator
combined = list1 + list2

# Method 2: Unpacking
joined = [*list1, *list2]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Unpacking List Join</h3>
  <p><code>[*['a'], *['b']]</code> &rarr; <b>['a', 'b']</b></p>
</body>
</html>`,
          tips: [
            'For lists containing nested objects or sublists, use copy.deepcopy() to duplicate nested items.'
          ]
        }
      ]
    }
  },

  // 27. Python Tuples
  {
    id: 'py-tuples',
    title: 'Python Tuples',
    slug: 'py-tuples',
    summary: 'Tuples are used to store multiple items in a single variable: ordered, unchangeable, and allow duplicates.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'A tuple is a collection which is ordered and unchangeable (immutable). Tuples are written with round brackets (). Tuple items are indexed, the first item has index [0]. Once a tuple is created, you cannot change, add, or remove items.',
      sections: [
        {
          heading: 'Single Item Tuples and Unpacking',
          body: 'To create a tuple with only one item, you MUST add a trailing comma after the item: ("apple",).',
          code: `# Single item tuple (Comma required!):
single_tuple = ("apple",)
not_a_tuple = ("apple") # Evaluates to string!

# Unpacking a tuple:
fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")
(green, yellow, *red) = fruits
# green = "apple", yellow = "banana", red = ["cherry", "strawberry", "raspberry"]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Tuple Asterisk Unpacking</h3>
  <p><code>(first, *rest) = (1, 2, 3, 4)</code></p>
  <p>first = 1, rest = [2, 3, 4]</p>
</body>
</html>`,
          tips: [
            'Tuples use less memory and execute faster than lists, making them ideal for read-only constant collections.'
          ]
        }
      ]
    }
  },

  // 28. Python Sets
  {
    id: 'py-sets',
    title: 'Python Sets',
    slug: 'py-sets',
    summary: 'Sets are unordered, unchangeable*, and unindexed collections of unique items: {item1, item2}.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'A set is a collection which is unordered, unchangeable*, and unindexed. Sets are written with curly brackets {}. Set items are unique (duplicates are ignored). Note: Set items are unchangeable, but you can remove items and add new items.',
      sections: [
        {
          heading: 'Adding and Removing Set Items',
          body: 'Use add() for single items, update() for iterables, and discard() to safely remove without raising errors.',
          code: `thisset = {"apple", "banana", "cherry"}

# Adding items:
thisset.add("orange")
thisset.update(["mango", "grapes"])

# Removing items:
thisset.remove("banana")  # Raises KeyError if not found!
thisset.discard("banana") # Safe! Does NOT raise error if missing`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Duplicate Elimination in Sets</h3>
  <p><code>{"a", "b", "a", "c"}</code> &rarr; <b>{'a', 'b', 'c'}</b></p>
</body>
</html>`,
          tips: [
            'To create an empty set, you must use set(), NOT {} (which creates an empty dictionary).'
          ]
        }
      ]
    }
  },

  // 29. Python Set Operations
  {
    id: 'py-set-operations',
    title: 'Python Set Operations',
    slug: 'py-set-operations',
    summary: 'Mathematical set operations: union (|), intersection (&), difference (-), and symmetric difference (^).',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Python sets provide native mathematical set operations: Union (all elements from both), Intersection (elements present in both), Difference (elements in first but not second), and Symmetric Difference (elements in either set, but not both).',
      sections: [
        {
          heading: 'Set Operators & Methods',
          body: 'Operators (| , &, -, ^) require both operands to be sets, while methods (.union()) accept any iterable.',
          code: `set1 = {"a", "b", "c"}
set2 = {"b", "c", "d"}

# Union (All unique items):
print(set1 | set2)              # {'a', 'b', 'c', 'd'}

# Intersection (Present in both):
print(set1 & set2)              # {'b', 'c'}

# Difference (In set1, but not set2):
print(set1 - set2)              # {'a'}

# Symmetric Difference (In either, but not both):
print(set1 ^ set2)              # {'a', 'd'}`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Set Intersection (&amp;)</h3>
  <p><code>{1, 2, 3} &amp; {2, 3, 4}</code> &rarr; <b>{2, 3}</b></p>
</body>
</html>`,
          tips: [
            'Set operations are implemented in optimized C hash tables, providing instant mathematical set logic.'
          ]
        }
      ]
    }
  },

  // 30. Python Dictionaries
  {
    id: 'py-dictionaries',
    title: 'Python Dictionaries',
    slug: 'py-dictionaries',
    summary: 'Dictionaries are used to store data values in key:value pairs. Dictionaries are ordered and changeable.',
    readTime: '6 min',
    category: 'Python Tutorial',
    content: {
      overview: 'Dictionaries are used to store data values in key:value pairs. A dictionary is a collection which is ordered (as of Python 3.7), changeable and does not allow duplicates. Dictionaries are written with curly brackets, and have keys and values.',
      sections: [
        {
          heading: 'Creating Dictionaries',
          body: 'Keys must be immutable types (strings, numbers, tuples). Values can be any datatype.',
          code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
print(thisdict["brand"]) # "Ford"
print(len(thisdict))      # 4`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Dictionary Key Access</h3>
  <p><code>thisdict["model"]</code> &rarr; <b>"Mustang"</b></p>
</body>
</html>`,
          tips: [
            'As of Python 3.7, dictionaries are officially guaranteed to preserve insertion order.'
          ]
        }
      ]
    }
  },

  // 31. Python Access and Change Dict Items
  {
    id: 'py-dict-access',
    title: 'Python Access & Change Dict Items',
    slug: 'py-dict-access',
    summary: 'Access items with get(), keys(), values(), items(). Update dictionary values and add new entries.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'You can access the items of a dictionary by referring to its key name inside square brackets, or using get(). The get() method returns None (or a custom default) if the key does not exist, avoiding KeyError crashes.',
      sections: [
        {
          heading: 'get(), keys(), values(), and items()',
          body: 'items() returns key-value tuples, perfect for looping.',
          code: `user = {"name": "Alex", "role": "Admin"}

# Safe retrieval with get():
role = user.get("role")
salary = user.get("salary", 0) # Returns 0 instead of KeyError!

# View objects:
print(user.keys())    # dict_keys(['name', 'role'])
print(user.values())  # dict_values(['Alex', 'Admin'])
print(user.items())   # dict_items([('name', 'Alex'), ('role', 'Admin')])

# Updating & Adding items:
user["city"] = "Berlin"       # Adds new key
user.update({"role": "Owner"}) # Updates existing key`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>dict.get() Default Fallback</h3>
  <p><code>user.get("status", "Active")</code> returns "Active" when key is missing.</p>
</body>
</html>`,
          tips: [
            'Always use dict.get(key, default) when parsing external JSON payloads to guard against missing keys.'
          ]
        }
      ]
    }
  },

  // 32. Python Remove and Loop Dict Items
  {
    id: 'py-dict-remove-loop',
    title: 'Python Remove & Loop Dict Items',
    slug: 'py-dict-remove-loop',
    summary: 'Remove items with pop(), popitem(), del, clear(). Loop keys, values, and key-value items.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'There are several methods to remove items from a dictionary: pop() removes item with specified key, popitem() removes the last inserted item, del removes item or entire dict, and clear() empties the dictionary.',
      sections: [
        {
          heading: 'Looping Through Dictionaries',
          body: 'Iterate over keys and values cleanly using for key, value in dict.items().',
          code: `thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}

# Removing:
thisdict.pop("model")    # Removes "model"
thisdict.popitem()       # Removes last inserted item ("year")

# Looping:
for key, value in thisdict.items():
    print(f"{key}: {value}")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Looping with .items()</h3>
  <p><code>for k, v in user.items():</code> allows unpacking key and value simultaneously.</p>
</body>
</html>`,
          tips: [
            'In Python 3.8+, dict union operator (dict1 | dict2) merges two dictionaries cleanly.'
          ]
        }
      ]
    }
  },

  // 33. Python Nested Dictionaries
  {
    id: 'py-nested-dicts',
    title: 'Python Nested Dictionaries',
    slug: 'py-nested-dicts',
    summary: 'A dictionary can contain dictionaries, this is called nested dictionaries.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'A dictionary can contain dictionaries, this is called nested dictionaries. Nested dictionaries are the direct Python equivalent of JSON objects used in REST APIs and configurations.',
      sections: [
        {
          heading: 'Accessing Nested Dictionary Items',
          body: 'Chain square brackets or get() calls to navigate deeper hierarchy levels.',
          code: `myfamily = {
  "child1": {
    "name": "Emil",
    "year": 2004
  },
  "child2": {
    "name": "Tobias",
    "year": 2007
  }
}

print(myfamily["child1"]["name"]) # "Emil"`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Nested Dictionary Access</h3>
  <p><code>api_response["data"]["user"]["id"]</code></p>
</body>
</html>`,
          tips: [
            'In Python 3.10+, dictionary pattern matching can inspect complex nested structures.'
          ]
        }
      ]
    }
  },

  // 34. Python Collections Summary
  {
    id: 'py-collections-summary',
    title: 'Python Collections Summary',
    slug: 'py-collections-summary',
    summary: 'Comparing List, Tuple, Set, and Dictionary: When to choose which collection data type.',
    readTime: '5 min',
    category: 'Python Tutorial',
    content: {
      overview: 'There are four collection data types in the Python programming language: List (ordered, changeable, duplicate members), Tuple (ordered, unchangeable, duplicate members), Set (unordered, unchangeable*, unindexed, no duplicates), Dictionary (ordered, changeable, no duplicate keys).',
      sections: [
        {
          heading: 'Decision Matrix: Choosing the Right Collection',
          body: 'Summary rules for selecting collection types:',
          code: `# 1. Need an ordered sequence of changeable items? -> list []
# 2. Need fixed constant coordinates or return values? -> tuple ()
# 3. Need unique values and fast membership testing? -> set {}
# 4. Need key-value mapping lookups? -> dict {}`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 6px 10px; border: 1px solid #cbd5e1; text-align: center; }
    th { background: #4f46e5; color: white; }
  </style>
</head>
<body>
  <h3>Collections Matrix</h3>
  <table>
    <thead><tr><th>Type</th><th>Ordered</th><th>Mutable</th><th>Duplicates</th></tr></thead>
    <tbody>
      <tr><td>List</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
      <tr><td>Tuple</td><td>Yes</td><td>No</td><td>Yes</td></tr>
      <tr><td>Set</td><td>No</td><td>No*</td><td>No</td></tr>
      <tr><td>Dict</td><td>Yes</td><td>Yes</td><td>No keys</td></tr>
    </tbody>
  </table>
</body>
</html>`,
          tips: [
            'Choosing the right collection type improves code clarity, enforces constraints, and boosts execution performance.'
          ]
        }
      ]
    }
  }
];
