import { TutorialChapter } from '../../types';

export const numpyChapters: TutorialChapter[] = [
  // 1. NumPy HOME
  {
    id: 'numpy-home',
    title: 'NumPy HOME',
    slug: 'numpy-home',
    summary: 'NumPy is a Python library used for working with multi-dimensional arrays, matrices, and linear algebra.',
    readTime: '3 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'NumPy stands for Numerical Python. It is the fundamental package for scientific computing with Python. It provides high-performance multidimensional array objects (ndarray) and tools for working with these arrays.',
      sections: [
        {
          heading: 'Your First NumPy Array',
          body: 'Importing numpy and creating a simple 1D array:',
          code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr)
print("Type:", type(arr))`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    [1 2 3 4 5]<br>
    Type: &lt;class 'numpy.ndarray'&gt;
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. NumPy Intro
  {
    id: 'numpy-intro',
    title: 'NumPy Introduction (Why NumPy?)',
    slug: 'numpy-intro',
    summary: 'Why is NumPy up to 50x faster than traditional Python lists? Continuous memory and C-level optimization.',
    readTime: '4 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'In Python, we have lists that serve the purpose of arrays, but they are slow to process. NumPy aims to provide an array object that is up to 50x faster than traditional Python lists. The array object in NumPy is called ndarray.',
      sections: [
        {
          heading: 'Why is NumPy Faster?',
          body: 'NumPy arrays are stored at one continuous place in memory (unlike Python lists whose elements are scattered pointers). This allows processors to leverage CPU cache lines and SIMD vector registers.',
          code: `# NumPy arrays consume less memory and execute in C speeds
import numpy as np
import time

py_list = list(range(1_000_000))
np_arr = np.arange(1_000_000)

# NumPy operations are vectorized without Python bytecode loop overhead`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Performance Benchmark:</h4>
    <p>Summing 10,000,000 integers:</p>
    <p>Python List: <strong>~780 ms</strong></p>
    <p style="color:#4f46e5; font-weight:bold;">NumPy ndarray: ~14 ms (55x faster!)</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 3. NumPy Getting Started
  {
    id: 'numpy-getstarted',
    title: 'NumPy Getting Started',
    slug: 'numpy-getstarted',
    summary: 'Installing NumPy via pip and importing with standard alias np.',
    readTime: '3 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'If you have Python and PIP already installed on a system, installation of NumPy is very easy. Run pip install numpy in your terminal.',
      sections: [
        {
          heading: 'Installation & Import Convention',
          body: 'NumPy is usually imported under the np alias:',
          code: `$ pip install numpy

# In your Python file:
import numpy as np

print(np.__version__)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    $ python -c "import numpy as np; print(np.__version__)"<br>
    2.1.0
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 4. NumPy Creating Arrays
  {
    id: 'numpy-creating-arrays',
    title: 'NumPy Creating Arrays (0D, 1D, 2D, 3D & ndim)',
    slug: 'numpy-creating-arrays',
    summary: 'Creating ndarrays of different dimensions, checking ndim, and helper constructors like zeros() and arange().',
    readTime: '5 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'To create an ndarray, we can pass a list, tuple or any array-like object into the np.array() method, and it will be converted into an ndarray. An array can have any number of dimensions.',
      sections: [
        {
          heading: 'Dimensions and ndim Attribute',
          body: 'Creating 0-D scalars, 1-D vectors, 2-D matrices, and 3-D tensors:',
          code: `import numpy as np

a = np.array(42)                    # 0-D
b = np.array([1, 2, 3])             # 1-D
c = np.array([[1, 2], [3, 4]])      # 2-D
d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]) # 3-D

print("c dimensions:", c.ndim)      # 2
print("Helper zeros:", np.zeros((2, 3)))
print("Helper arange:", np.arange(0, 10, 2)) # [0 2 4 6 8]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    c dimensions: 2<br>
    Helper zeros:<br>
    [[0. 0. 0.]<br>
    &nbsp;[0. 0. 0.]]<br>
    Helper arange: [0 2 4 6 8]
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 5. NumPy Array Indexing
  {
    id: 'numpy-array-indexing',
    title: 'NumPy Array Indexing',
    slug: 'numpy-array-indexing',
    summary: 'Accessing elements using 0-based indices, negative indexing, and multi-dimensional coordinate access.',
    readTime: '4 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'Array indexing is the same as accessing an array element. You can access an array element by referring to its index number. In 2D arrays, use comma-separated integers representing row and column: arr[row, col].',
      sections: [
        {
          heading: 'Multi-Dimensional Coordinate Indexing',
          body: 'Accessing 2D elements:',
          code: `import numpy as np

arr = np.array([[10, 20, 30], [40, 50, 60]])

# Access 2nd row, 3rd column:
print("Element at [1, 2]:", arr[1, 2]) # 60

# Negative indexing (last element of 1st row):
print("Last element row 0:", arr[0, -1]) # 30`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Element at [1, 2]: 60<br>
    Last element row 0: 30
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 6. NumPy Array Slicing
  {
    id: 'numpy-array-slicing',
    title: 'NumPy Array Slicing [start:end:step]',
    slug: 'numpy-array-slicing',
    summary: 'Extracting sub-arrays across 1D and 2D arrays using slicing syntax.',
    readTime: '5 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'Slicing in python means taking elements from one given index to another given index. We pass slice instead of index like this: [start:end] or [start:end:step]. The result includes start index and excludes end index.',
      sections: [
        {
          heading: '2D Slicing',
          body: 'Slicing rows and columns simultaneously:',
          code: `import numpy as np

arr = np.array([
    [10, 20, 30, 40],
    [50, 60, 70, 80],
    [90, 100, 110, 120]
])

# From rows 0 to 2, slice columns 1 to 3:
slice_2d = arr[0:2, 1:3]
print(slice_2d)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    [[20 30]<br>
    &nbsp;[60 70]]
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 7. NumPy Data Types
  {
    id: 'numpy-data-types',
    title: 'NumPy Data Types & astype()',
    slug: 'numpy-data-types',
    summary: 'Primitive data types (i, f, b, u, c, m, M, O, S, U), checking dtype, and casting with astype().',
    readTime: '5 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'NumPy has some extra data types, and refer to data types with one character, like i for integers, u for unsigned integers, f for float, b for boolean, U for unicode string, and M for datetime.',
      sections: [
        {
          heading: 'Converting Types with astype()',
          body: 'The astype() method creates a copy of the array and allows you to specify the data type as a parameter:',
          code: `import numpy as np

arr = np.array([1.1, 2.8, 3.5])
print("Original dtype:", arr.dtype) # float64

# Cast to integer (truncates decimal values)
int_arr = arr.astype('i')
print("Cast array:", int_arr)       # [1 2 3]
print("New dtype:", int_arr.dtype)  # int32`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Original dtype: float64<br>
    Cast array: [1 2 3]<br>
    New dtype: int32
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 8. NumPy Copy vs View
  {
    id: 'numpy-copy-vs-view',
    title: 'NumPy Copy vs View',
    slug: 'numpy-copy-vs-view',
    summary: 'The main difference between a copy and a view of an array: base attribute and mutation isolation.',
    readTime: '4 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'The main difference between a copy and a view of an array is that the copy is a new array, and the view is just a view of the original array. Changes to a copy DO NOT affect the original; changes to a view DO affect the original.',
      sections: [
        {
          heading: 'Checking Ownership with .base',
          body: 'The base attribute returns None if the array owns the data (copy):',
          code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
x = arr.copy()
y = arr.view()

print("Copy base:", x.base) # None (owns its memory)
print("View base:", y.base) # Returns original array arr`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Memory Check:</h4>
    <p><code>x.base == None</code> &rarr; <strong>Copy</strong> owns its own buffer.</p>
    <p><code>y.base != None</code> &rarr; <strong>View</strong> shares original buffer (mutations propagate!).</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 9. NumPy Array Shape & Reshape
  {
    id: 'numpy-shape-reshape',
    title: 'NumPy Array Shape & Reshaping',
    slug: 'numpy-shape-reshape',
    summary: 'Checking tuple shape (rows, cols) and reshaping with -1 for unknown dimensions.',
    readTime: '5 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'The shape of an array is the number of elements in each dimension. Reshaping means changing the shape of an array. The shape of an array can be changed as long as the total number of elements matches.',
      sections: [
        {
          heading: 'Reshaping 1D into 2D & Unknown Dimension (-1)',
          body: 'NumPy calculates -1 dimensions automatically based on total elements:',
          code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
print("Original shape:", arr.shape) # (12,)

# Reshape into 4 rows of 3 columns
newarr = arr.reshape(4, 3)
print(newarr)

# Using -1 (NumPy auto-computes: 12 / 2 = 6 columns)
auto_arr = arr.reshape(2, -1)
print("Auto shape:", auto_arr.shape) # (2, 6)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    [[ 1  2  3]<br>
    &nbsp;[ 4  5  6]<br>
    &nbsp;[ 7  8  9]<br>
    &nbsp;[10 11 12]]<br>
    Auto shape: (2, 6)
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 10. NumPy Array Iterating
  {
    id: 'numpy-iterating',
    title: 'NumPy Array Iterating (nditer & ndenumerate)',
    slug: 'numpy-iterating',
    summary: 'Efficiently traversing through multi-dimensional arrays with np.nditer().',
    readTime: '4 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'Iterating means going through elements one by one. In basic Python, iterating through 3D arrays requires 3 nested for loops. The np.nditer() helper function handles multi-dimensional arrays smoothly.',
      sections: [
        {
          heading: 'Using nditer()',
          body: 'Iterate over all scalar elements regardless of dimensions:',
          code: `import numpy as np

arr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])

# Iterate through every scalar directly:
for x in np.nditer(arr):
    print(x, end=" ")
print()`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    1 2 3 4 5 6 7 8
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 11. NumPy Array Joining & Splitting
  {
    id: 'numpy-joining-splitting',
    title: 'NumPy Joining & Splitting (concatenate, stack, hsplit)',
    slug: 'numpy-joining-splitting',
    summary: 'Joining arrays along axes (concatenate, vstack, hstack) and dividing arrays with array_split().',
    readTime: '5 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'Joining means putting contents of two or more arrays in a single array. In SQL we join tables based on a key. In NumPy we join arrays by axes using concatenate() or stack(). Splitting is the reverse operation.',
      sections: [
        {
          heading: 'concatenate() vs hstack() / vstack()',
          body: 'Joining along rows vs columns:',
          code: `import numpy as np

arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

# Join along axis 0
joined = np.concatenate((arr1, arr2))
print("Concatenated:", joined) # [1 2 3 4 5 6]

# Stack vertically (creates 2D)
vstacked = np.vstack((arr1, arr2))
print("VStack:\\n", vstacked)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Concatenated: [1 2 3 4 5 6]<br>
    VStack:<br>
    [[1 2 3]<br>
    &nbsp;[4 5 6]]
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 12. NumPy Searching & Sorting
  {
    id: 'numpy-searching-sorting',
    title: 'NumPy Searching & Sorting (where, searchsorted, sort)',
    slug: 'numpy-searching-sorting',
    summary: 'Searching with np.where() and sorting arrays with np.sort().',
    readTime: '4 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'You can search an array for a certain value, and return the indexes that get a match. To search an array, use the where() method. Sorting means putting elements in an ordered sequence.',
      sections: [
        {
          heading: 'where() and sort() Examples',
          body: 'Finding even numbers and sorting arrays:',
          code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 4, 4])

# Find where elements equal 4:
x = np.where(arr == 4)
print("Indices of 4:", x[0]) # [3 6 7]

# Sort an array
unordered = np.array([3, 2, 0, 1])
print("Sorted:", np.sort(unordered)) # [0 1 2 3]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Indices of 4: [3 6 7]<br>
    Sorted: [0 1 2 3]
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 13. NumPy Array Filtering
  {
    id: 'numpy-filtering',
    title: 'NumPy Array Filtering (Boolean Indexing)',
    slug: 'numpy-filtering',
    summary: 'Filtering elements using boolean index arrays: arr[arr > 50].',
    readTime: '4 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'Filtering is the process of taking some elements from an existing array and creating a new array out of them. In NumPy, you filter an array using a boolean index list.',
      sections: [
        {
          heading: 'Direct Boolean Masking',
          body: 'Filter values directly without loops:',
          code: `import numpy as np

arr = np.array([41, 42, 43, 44])

# Filter all elements greater than 42:
filtered = arr[arr > 42]
print("Values > 42:", filtered) # [43 44]

# Even numbers filter:
evens = arr[arr % 2 == 0]
print("Even numbers:", evens)   # [42 44]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Boolean Mask Evaluation:</h4>
    <p>Mask: <code>[False, False, True, True]</code></p>
    <p style="color:#4f46e5; font-weight:bold;">Filtered Result: [43, 44]</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 14. NumPy Random
  {
    id: 'numpy-random',
    title: 'NumPy Random Numbers & Distributions',
    slug: 'numpy-random',
    summary: 'Random numbers with numpy.random: randint, rand, choice, and seed reproducibility.',
    readTime: '5 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'NumPy offers the random module to work with random numbers. Pseudo-random numbers are generated through an algorithm based on an internal state seed.',
      sections: [
        {
          heading: 'Generating Random Integers, Floats, and Choices',
          body: 'Random arrays and sampling:',
          code: `from numpy import random

# Random integer between 0 and 100
x = random.randint(100)

# 2D array of 3 rows, 5 cols with random floats [0.0, 1.0)
f_arr = random.rand(3, 5)

# Random choice from an array:
pick = random.choice([3, 5, 7, 9], size=(3, 3))
print("Random Matrix:\\n", pick)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Random Matrix:<br>
    [[7 3 9]<br>
    &nbsp;[5 5 7]<br>
    &nbsp;[3 9 3]]
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 15. NumPy ufuncs
  {
    id: 'numpy-ufuncs',
    title: 'NumPy ufuncs (Universal Functions)',
    slug: 'numpy-ufuncs',
    summary: 'Vectorized mathematical operations that operate on ndarrays element-by-element.',
    readTime: '5 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'ufuncs stands for "Universal Functions" and they are NumPy functions that operate on the ndarray object. ufuncs are used to implement vectorization in NumPy which is way faster than iterating over elements using Python loops.',
      sections: [
        {
          heading: 'Vectorized Arithmetic with ufuncs',
          body: 'Element-wise add, subtract, multiply, divide, power:',
          code: `import numpy as np

arr1 = np.array([10, 20, 30])
arr2 = np.array([4, 5, 6])

print("np.add:", np.add(arr1, arr2))         # [14 25 36]
print("np.subtract:", np.subtract(arr1, arr2)) # [ 6 15 24]
print("np.multiply:", np.multiply(arr1, arr2)) # [ 40 100 180]
print("np.power:", np.power(arr1, 2))         # [100 400 900]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    np.add: [14 25 36]<br>
    np.subtract: [ 6 15 24]<br>
    np.multiply: [ 40 100 180]<br>
    np.power: [100 400 900]
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 16. NumPy Rounding
  {
    id: 'numpy-rounding',
    title: 'NumPy Rounding Decimals (trunc, fix, around, floor, ceil)',
    slug: 'numpy-rounding',
    summary: 'Truncation with trunc() and fix(), rounding with around(), and floor() / ceil().',
    readTime: '4 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'There are primarily five ways of rounding decimals in NumPy: trunc(), fix(), around(), floor(), ceil().',
      sections: [
        {
          heading: 'Rounding Differences',
          body: 'Comparing methods:',
          code: `import numpy as np

arr = np.array([-3.1666, 3.6667])

print("trunc:", np.trunc(arr))   # [-3.  3.]
print("around:", np.around(arr, 2)) # [-3.17  3.67]
print("floor:", np.floor(arr))   # [-4.  3.]
print("ceil:", np.ceil(arr))     # [-3.  4.]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    trunc: [-3.  3.]<br>
    around: [-3.17  3.67]<br>
    floor: [-4.  3.]<br>
    ceil: [-3.  4.]
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 17. NumPy Summations & Products
  {
    id: 'numpy-summations-products',
    title: 'NumPy Summations & Products (sum, cumsum, prod)',
    slug: 'numpy-summations-products',
    summary: 'Summing across specific axes, cumulative summation (cumsum), and products (prod, cumprod).',
    readTime: '4 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'What is the difference between summation and addition? Addition is done between two arguments whereas summation happens over n elements. Cumulative summation keeps a running total.',
      sections: [
        {
          heading: 'Axis-Specific Summation and cumsum()',
          body: 'Summing across rows (axis=1) vs columns (axis=0):',
          code: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

# Sum over axis 1 (across columns per row)
print("Row sum (axis 1):", np.sum(arr, axis=1)) # [ 6 15]

# Cumulative sum:
print("Cumsum:", np.cumsum(np.array([1, 2, 3, 4]))) # [ 1  3  6 10]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Row sum (axis 1): [ 6 15]<br>
    Cumsum: [ 1  3  6 10]
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 18. NumPy Differences & LCM/GCD
  {
    id: 'numpy-differences-lcm',
    title: 'NumPy Differences & LCM/GCD',
    slug: 'numpy-differences-lcm',
    summary: 'Discrete differences with diff(), Lowest Common Multiple (lcm), and Greatest Common Denominator (gcd).',
    readTime: '4 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'A discrete difference means subtracting two successive elements (e.g. for [1, 2, 3, 4], the discrete difference would be [2-1, 3-2, 4-3] = [1, 1, 1]). NumPy also provides vector math for LCM and GCD.',
      sections: [
        {
          heading: 'diff(), lcm(), and gcd()',
          body: 'Computing rates of change and number theory operations:',
          code: `import numpy as np

# Differences
arr = np.array([10, 15, 25, 5])
print("diff:", np.diff(arr)) # [ 5 10 -20]

# LCM and GCD
print("LCM(4, 6):", np.lcm(4, 6)) # 12
print("GCD(6, 9):", np.gcd(6, 9)) # 3`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    diff: [ 5 10 -20]<br>
    LCM(4, 6): 12<br>
    GCD(6, 9): 3
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 19. NumPy Set Operations
  {
    id: 'numpy-set-operations',
    title: 'NumPy Set Operations (unique, union1d, intersect1d)',
    slug: 'numpy-set-operations',
    summary: 'Mathematical set operations on 1D arrays: unique elements, union, intersection, and set difference.',
    readTime: '4 min',
    category: 'NumPy Tutorial',
    content: {
      overview: 'A set in mathematics is a collection of unique elements. Sets are used for operations involving union, intersection, and symmetric difference. NumPy provides functions to perform set operations on 1D arrays.',
      sections: [
        {
          heading: 'unique(), union1d(), and intersect1d()',
          body: 'Operating on sets:',
          code: `import numpy as np

arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([3, 4, 5, 6])

print("Union:", np.union1d(arr1, arr2))            # [1 2 3 4 5 6]
print("Intersection:", np.intersect1d(arr1, arr2)) # [3 4]
print("Difference (in arr1 not arr2):", np.setdiff1d(arr1, arr2)) # [1 2]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Union: [1 2 3 4 5 6]<br>
    Intersection: [3 4]<br>
    Difference: [1 2]
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
