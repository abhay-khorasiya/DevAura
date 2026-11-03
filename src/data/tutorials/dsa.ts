import { TutorialChapter } from '../../types';

export const dsaChapters: TutorialChapter[] = [
  // 1. DSA HOME
  {
    id: 'dsa-home',
    title: 'DSA HOME',
    slug: 'dsa-home',
    summary: 'Data Structures and Algorithms (DSA) form the foundation of efficient software engineering and technical interview mastery.',
    readTime: '3 min',
    category: 'DSA Tutorial',
    content: {
      overview: 'Data Structures are specialized formats for organizing, processing, retrieving, and storing data. Algorithms are finite sequences of well-defined computer-implementable instructions to solve classes of problems or perform computations.',
      sections: [
        {
          heading: 'Why Learn DSA?',
          body: 'Writing code that works is only step one. Writing code that scales to billions of records with minimal CPU cycles and memory footprint requires DSA.',
          code: `// Linear search O(n) vs Binary search O(log n)
// For 1,000,000 items:
// Linear: up to 1,000,000 comparisons
// Binary: at most 20 comparisons!`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">DSA Performance Comparison</h3>
    <table style="width:100%; border-collapse:collapse; font-size:14px; background:white;">
      <tr style="background:#f1f5f9; text-align:left;"><th style="padding:8px; border:1px solid #cbd5e1;">Input Size (N)</th><th style="padding:8px; border:1px solid #cbd5e1;">O(N) Steps</th><th style="padding:8px; border:1px solid #cbd5e1; color:#4f46e5;">O(log N) Steps</th></tr>
      <tr><td style="padding:8px; border:1px solid #cbd5e1;">1,000</td><td style="padding:8px; border:1px solid #cbd5e1;">1,000</td><td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#4f46e5;">10</td></tr>
      <tr><td style="padding:8px; border:1px solid #cbd5e1;">1,000,000</td><td style="padding:8px; border:1px solid #cbd5e1;">1,000,000</td><td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#4f46e5;">20</td></tr>
      <tr><td style="padding:8px; border:1px solid #cbd5e1;">1,000,000,000</td><td style="padding:8px; border:1px solid #cbd5e1;">1,000,000,000</td><td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#4f46e5;">30</td></tr>
    </table>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. DSA Intro
  {
    id: 'dsa-intro',
    title: 'DSA Introduction',
    slug: 'dsa-intro',
    summary: 'Classifying data structures into Primitive, Linear, and Non-Linear categories.',
    readTime: '4 min',
    category: 'DSA Tutorial',
    content: {
      overview: 'Data structures determine how memory addresses are structured. Choosing the right data structure directly impacts CPU cache locality and computational overhead.',
      sections: [
        {
          heading: 'Taxonomy of Data Structures',
          body: 'Data structures are categorized as:\n1. Primitive: Integer, Float, Character, Boolean, Pointer.\n2. Non-Primitive Linear: Arrays, Linked Lists, Stacks, Queues (elements form a single sequence).\n3. Non-Primitive Non-Linear: Trees, Binary Search Trees, Heaps, Graphs (multilevel hierarchical or interconnected networks).',
          code: `// Linear: elements sequenced in succession
const array = [10, 20, 30, 40];

// Non-linear: nodes with parent-child relationships
const treeNode = {
  value: "Root",
  left: { value: "Left Child", left: null, right: null },
  right: { value: "Right Child", left: null, right: null }
};`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 3. Time & Space Complexity (Big-O)
  {
    id: 'dsa-complexity-big-o',
    title: 'DSA Asymptotic Analysis & Big-O Notation',
    slug: 'dsa-complexity-big-o',
    summary: 'Evaluating algorithm efficiency with Big-O (Worst-Case), Omega (Best-Case), and Theta (Average-Case).',
    readTime: '6 min',
    category: 'DSA Theory',
    content: {
      overview: 'Asymptotic notation describes how the runtime or memory requirement of an algorithm grows as the input size n approaches infinity.',
      sections: [
        {
          heading: 'Common Big-O Orders of Growth',
          body: 'Ordered from fastest to slowest:\n1. O(1) Constant Time (e.g. hash map lookup, array index access)\n2. O(log n) Logarithmic Time (e.g. binary search in sorted array)\n3. O(n) Linear Time (e.g. single pass loop over array)\n4. O(n log n) Linearithmic Time (e.g. merge sort, quick sort)\n5. O(n²) Quadratic Time (e.g. nested loops, bubble sort)\n6. O(2ⁿ) Exponential Time (e.g. naive recursive Fibonacci)\n7. O(n!) Factorial Time (e.g. traveling salesperson brute force)',
          code: `// O(1) Constant Time
function getFirstElement(arr) {
  return arr[0];
}

// O(n) Linear Time
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// O(n^2) Quadratic Time
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 4. Arrays
  {
    id: 'dsa-arrays',
    title: 'DSA Arrays & Memory Addressing',
    slug: 'dsa-arrays',
    summary: 'Contiguous memory layout, O(1) index calculation formula, insertion, deletion, and dynamic array resizing.',
    readTime: '5 min',
    category: 'DSA Data Structures',
    content: {
      overview: 'An array stores elements of identical types in contiguous sequential memory locations. Indexing is O(1) because memory address is calculated instantly: Address(i) = BaseAddress + (i * ElementSize).',
      sections: [
        {
          heading: 'Array Operations & Complexities',
          body: '- Access by index: O(1)\n- Search unsorted: O(n)\n- Search sorted: O(log n)\n- Insertion at end: O(1) amortized\n- Insertion at beginning/middle: O(n) (requires shifting elements right)\n- Deletion: O(n) (requires shifting elements left)',
          code: `// Static vs Dynamic Array Resizing (doubling strategy)
class DynamicArray {
  constructor() {
    this.capacity = 2;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  push(val) {
    if (this.length === this.capacity) {
      this._resize(this.capacity * 2);
    }
    this.data[this.length++] = val;
  }

  _resize(newCap) {
    const next = new Array(newCap);
    for (let i = 0; i < this.length; i++) next[i] = this.data[i];
    this.data = next;
    this.capacity = newCap;
  }
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 5. Bubble Sort
  {
    id: 'dsa-bubble-sort',
    title: 'DSA Bubble Sort',
    slug: 'dsa-bubble-sort',
    summary: 'Repeatedly swap adjacent elements if they are in the wrong order. O(n²) time complexity.',
    readTime: '4 min',
    category: 'DSA Sorting',
    content: {
      overview: 'Bubble sort steps through the list, compares adjacent elements, and swaps them if they are in descending order. The largest unsorted element "bubbles" up to the end with each pass.',
      sections: [
        {
          heading: 'Optimized Bubble Sort Implementation',
          body: 'With a swapped boolean flag, best-case runtime on sorted data improves to O(n):',
          code: `function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // Array is already sorted
  }
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// [11, 12, 22, 25, 34, 64, 90]`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 6. Selection Sort
  {
    id: 'dsa-selection-sort',
    title: 'DSA Selection Sort',
    slug: 'dsa-selection-sort',
    summary: 'Find the minimum element from the unsorted sub-array and place it at the beginning. O(n²) comparisons, O(n) swaps.',
    readTime: '4 min',
    category: 'DSA Sorting',
    content: {
      overview: 'Selection sort divides the input list into two parts: a sorted sublist built up from left to right and a remaining unsorted sublist. It makes at most n swaps, which is useful when write operations are expensive.',
      sections: [
        {
          heading: 'Selection Sort Implementation',
          body: 'Finding the minimum element and placing it into position:',
          code: `function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 7. Insertion Sort
  {
    id: 'dsa-insertion-sort',
    title: 'DSA Insertion Sort',
    slug: 'dsa-insertion-sort',
    summary: 'Build the final sorted array one item at a time by inserting elements into their correct position.',
    readTime: '4 min',
    category: 'DSA Sorting',
    content: {
      overview: 'Insertion sort is an efficient sorting algorithm for small or nearly-sorted datasets. It functions similarly to how cards are sorted in a person’s hand.',
      sections: [
        {
          heading: 'Insertion Sort Implementation',
          body: 'Shifting greater elements to the right to make room:',
          code: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 8. Quick Sort
  {
    id: 'dsa-quick-sort',
    title: 'DSA Quick Sort',
    slug: 'dsa-quick-sort',
    summary: 'Divide and conquer using pivot partitioning. O(n log n) average time complexity, in-place sorting.',
    readTime: '5 min',
    category: 'DSA Sorting',
    content: {
      overview: 'QuickSort picks an element as a pivot and partitions the array around the picked pivot so that elements smaller than the pivot are placed before it and greater elements after it.',
      sections: [
        {
          heading: 'Lomuto Partitioning Quick Sort',
          body: 'Recursive in-place partition implementation:',
          code: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIdx = partition(arr, low, high);
    quickSort(arr, low, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 9. Merge Sort
  {
    id: 'dsa-merge-sort',
    title: 'DSA Merge Sort',
    slug: 'dsa-merge-sort',
    summary: 'Divide and conquer guaranteed O(n log n) sorting with stable order preservation.',
    readTime: '5 min',
    category: 'DSA Sorting',
    content: {
      overview: 'Merge Sort continually halves the array until single-element arrays remain, then merges sorted pairs back together. It has guaranteed O(n log n) worst-case time at the cost of O(n) auxiliary memory.',
      sections: [
        {
          heading: 'Merge Sort Implementation',
          body: 'Recursive division and merging:',
          code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 10. Counting Sort & Radix Sort
  {
    id: 'dsa-counting-sort',
    title: 'DSA Counting Sort & Non-Comparison Sorting',
    slug: 'dsa-counting-sort',
    summary: 'Sort integers in linear O(n + k) time by counting frequency occurrences, bypassing comparison limits.',
    readTime: '5 min',
    category: 'DSA Sorting',
    content: {
      overview: 'Comparison-based sorting has a mathematical lower bound of Ω(n log n). Non-comparison sorts like Counting Sort and Radix Sort achieve O(n + k) linear performance for integers with bounded ranges.',
      sections: [
        {
          heading: 'Counting Sort Implementation',
          body: 'Creating frequency tally arrays:',
          code: `function countingSort(arr) {
  if (arr.length <= 1) return arr;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const count = new Array(max - min + 1).fill(0);

  for (const num of arr) count[num - min]++;
  
  let idx = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[idx++] = i + min;
      count[i]--;
    }
  }
  return arr;
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 11. Linear Search
  {
    id: 'dsa-linear-search',
    title: 'DSA Linear Search',
    slug: 'dsa-linear-search',
    summary: 'Sequentially scan elements until a target matches or the array terminates. O(n) time, works on unsorted collections.',
    readTime: '3 min',
    category: 'DSA Searching',
    content: {
      overview: 'Linear search traverses elements one by one from beginning to end. It is suitable for small datasets or completely unsorted arrays.',
      sections: [
        {
          heading: 'Linear Search Code',
          body: 'Iterative check:',
          code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i; // Return index of target
  }
  return -1; // Target not found
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 12. Binary Search
  {
    id: 'dsa-binary-search',
    title: 'DSA Binary Search',
    slug: 'dsa-binary-search',
    summary: 'Halve the search space on each iteration over a sorted array. Blazingly fast O(log n) time.',
    readTime: '5 min',
    category: 'DSA Searching',
    content: {
      overview: 'Binary search compares the target against the middle element of a sorted collection. If target is lower, it eliminates the right half; if higher, it eliminates the left half.',
      sections: [
        {
          heading: 'Iterative Binary Search Implementation',
          body: 'Pointer maintenance with low, mid, and high:',
          code: `function binarySearch(sortedArr, target) {
  let low = 0;
  let high = sortedArr.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2); // Avoid overflow
    if (sortedArr[mid] === target) return mid;
    if (sortedArr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

const numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(binarySearch(numbers, 23)); // 5`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 13. Singly Linked Lists
  {
    id: 'dsa-linked-lists-singly',
    title: 'DSA Singly Linked Lists',
    slug: 'dsa-linked-lists-singly',
    summary: 'Nodes with value and next pointers. Constant time O(1) head insertion/deletion without array shifting.',
    readTime: '5 min',
    category: 'DSA Data Structures',
    content: {
      overview: 'Unlike arrays, linked list elements are not stored at contiguous memory locations. Each node contains data and a pointer pointing to the address of the next node.',
      sections: [
        {
          heading: 'Singly Linked List Implementation',
          body: 'Node and LinkedList classes with append, prepend, and traversal:',
          code: `class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(val) {
    this.head = new ListNode(val, this.head);
    this.size++;
  }

  toArray() {
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 14. Doubly & Circular Linked Lists
  {
    id: 'dsa-linked-lists-doubly',
    title: 'DSA Doubly & Circular Linked Lists',
    slug: 'dsa-linked-lists-doubly',
    summary: 'Bidirectional navigation with prev and next pointers, and cyclic rings where tail points to head.',
    readTime: '5 min',
    category: 'DSA Data Structures',
    content: {
      overview: 'A Doubly Linked List node maintains references to both the next and previous nodes. A Circular Linked List wraps the last node’s next pointer back to the head node.',
      sections: [
        {
          heading: 'Doubly Linked Node Structure',
          body: 'Bidirectional pointers:',
          code: `class DoublyNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

// In doubly linked list, deletion of a given node is O(1)
// if pointer to that node is already known:
function removeNode(node) {
  if (node.prev) node.prev.next = node.next;
  if (node.next) node.next.prev = node.prev;
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 15. Stacks
  {
    id: 'dsa-stacks',
    title: 'DSA Stacks (LIFO)',
    slug: 'dsa-stacks',
    summary: 'Last-In First-Out data structure. Operations: push, pop, peek/top, and isEmpty in O(1) time.',
    readTime: '4 min',
    category: 'DSA Data Structures',
    content: {
      overview: 'A stack is a linear data structure following the LIFO (Last In First Out) principle. Applications include function call call-stacks, undo/redo mechanisms, and parentheses matching.',
      sections: [
        {
          heading: 'Stack Implementation & Valid Parentheses',
          body: 'Solving the classic Valid Parentheses interview problem with a Stack:',
          code: `function isValidParentheses(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };

  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (map[char]) {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}

console.log(isValidParentheses("({[]})")); // true
console.log(isValidParentheses("({[}])")); // false`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 16. Queues
  {
    id: 'dsa-queues',
    title: 'DSA Queues (FIFO)',
    slug: 'dsa-queues',
    summary: 'First-In First-Out structure. Enqueue, dequeue, circular queues, and double-ended deques.',
    readTime: '4 min',
    category: 'DSA Data Structures',
    content: {
      overview: 'A queue follows the FIFO (First In First Out) principle. Elements enter at the rear (enqueue) and exit at the front (dequeue). Applications include CPU task scheduling and breadth-first search (BFS).',
      sections: [
        {
          heading: 'Linked List Based Queue',
          body: 'O(1) enqueue and dequeue operations:',
          code: `class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const node = { val, next: null };
    if (!this.tail) this.head = this.tail = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) return null;
    const val = this.head.val;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.length--;
    return val;
  }
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 17. Hash Tables
  {
    id: 'dsa-hash-tables',
    title: 'DSA Hash Tables & Collisions',
    slug: 'dsa-hash-tables',
    summary: 'Hash functions, bucket arrays, collision handling via separate chaining and open addressing.',
    readTime: '5 min',
    category: 'DSA Data Structures',
    content: {
      overview: 'A hash table maps keys to values using a mathematical hash function that computes an index into an array of buckets. Average lookup, insertion, and deletion is O(1).',
      sections: [
        {
          heading: 'Separate Chaining Hash Table',
          body: 'Handling hash collisions with linked buckets:',
          code: `class HashTable {
  constructor(size = 53) {
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      total = (total * PRIME + key.charCodeAt(i)) % this.buckets.length;
    }
    return total;
  }

  set(key, val) {
    const idx = this._hash(key);
    const bucket = this.buckets[idx];
    const found = bucket.find(pair => pair[0] === key);
    if (found) found[1] = val;
    else bucket.push([key, val]);
  }

  get(key) {
    const idx = this._hash(key);
    const found = this.buckets[idx].find(pair => pair[0] === key);
    return found ? found[1] : undefined;
  }
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 18. Trees Terminology
  {
    id: 'dsa-trees-intro',
    title: 'DSA Trees & Hierarchy',
    slug: 'dsa-trees-intro',
    summary: 'Tree terminology: Root, edge, child, sibling, leaf, height, depth, and degree.',
    readTime: '4 min',
    category: 'DSA Trees',
    content: {
      overview: 'A tree is a non-linear hierarchical data structure consisting of nodes connected by edges, with exactly one root node and zero cycles.',
      sections: [
        {
          heading: 'Essential Tree Definitions',
          body: '1. Root: The top node with no parent.\n2. Leaf: A node with no children.\n3. Depth: Number of edges from root to the node.\n4. Height: Maximum number of edges from node down to a leaf.\n5. Subtree: Any node and all of its descendants.',
          code: `// Node representation in a Binary Tree
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 19. Binary Tree Traversals
  {
    id: 'dsa-binary-trees',
    title: 'DSA Binary Tree Traversals',
    slug: 'dsa-binary-trees',
    summary: 'Depth-first traversals: In-Order (L-N-R), Pre-Order (N-L-R), and Post-Order (L-R-N).',
    readTime: '5 min',
    category: 'DSA Trees',
    content: {
      overview: 'Traversal visits every node in a tree systematically. In a Binary Search Tree, In-Order traversal visits all elements in strictly sorted ascending order.',
      sections: [
        {
          heading: 'In-Order, Pre-Order & Post-Order',
          body: 'Recursive traversal functions:',
          code: `// In-Order: Left -> Node -> Right (Sorted order in BST!)
function inOrder(node, result = []) {
  if (node) {
    inOrder(node.left, result);
    result.push(node.val);
    inOrder(node.right, result);
  }
  return result;
}

// Pre-Order: Node -> Left -> Right (Serialization)
function preOrder(node, result = []) {
  if (node) {
    result.push(node.val);
    preOrder(node.left, result);
    preOrder(node.right, result);
  }
  return result;
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 20. Binary Search Trees (BST)
  {
    id: 'dsa-binary-search-trees',
    title: 'DSA Binary Search Trees (BST)',
    slug: 'dsa-binary-search-trees',
    summary: 'BST property: Left < Node < Right. Fast O(log n) average search, insertion, and deletion.',
    readTime: '6 min',
    category: 'DSA Trees',
    content: {
      overview: 'For every node in a BST, all keys in its left subtree are strictly less than the node’s key, and all keys in its right subtree are strictly greater.',
      sections: [
        {
          heading: 'BST Search & Insertion',
          body: 'Recursive BST implementation:',
          code: `class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new TreeNode(val);
    if (!this.root) { this.root = newNode; return; }
    let curr = this.root;
    while (true) {
      if (val === curr.val) return;
      if (val < curr.val) {
        if (!curr.left) { curr.left = newNode; return; }
        curr = curr.left;
      } else {
        if (!curr.right) { curr.right = newNode; return; }
        curr = curr.right;
      }
    }
  }

  contains(val) {
    let curr = this.root;
    while (curr) {
      if (val === curr.val) return true;
      curr = val < curr.val ? curr.left : curr.right;
    }
    return false;
  }
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 21. Balanced Trees: AVL & Red-Black
  {
    id: 'dsa-avl-trees',
    title: 'DSA Balanced Trees (AVL & Red-Black)',
    slug: 'dsa-avl-trees',
    summary: 'Prevent degenerate linked lists using self-balancing rotations. Strict O(log n) guaranteed search.',
    readTime: '5 min',
    category: 'DSA Trees',
    content: {
      overview: 'Unbalanced BSTs degrade to O(n) linked lists when sorted values are inserted. AVL trees maintain balance factor |Height(L) - Height(R)| <= 1 via Single and Double Rotations.',
      sections: [
        {
          heading: 'Tree Rotations',
          body: 'Right and Left rotations re-balance subtrees in O(1) time without violating BST sorting rules.',
          code: `// Right Rotation (LL Imbalance)
function rotateRight(y) {
  const x = y.left;
  const T2 = x.right;

  // Perform rotation
  x.right = y;
  y.left = T2;

  // Return new root of subtree
  return x;
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 22. Heaps & Priority Queues
  {
    id: 'dsa-heaps',
    title: 'DSA Heaps & Priority Queues',
    slug: 'dsa-heaps',
    summary: 'Complete binary tree stored as an array. Min-Heap, Max-Heap, heapify, and Heapsort.',
    readTime: '5 min',
    category: 'DSA Advanced',
    content: {
      overview: 'A Binary Heap is a complete binary tree where parent keys satisfy the heap-order property (parent >= children in Max-Heap). Stored cleanly as an array where child indices are 2i+1 and 2i+2.',
      sections: [
        {
          heading: 'Max-Heap Implementation',
          body: 'Insert and extractMax with bubble-up and bubble-down:',
          code: `class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  _bubbleUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx] <= this.heap[parentIdx]) break;
      [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._sinkDown(0);
    }
    return max;
  }
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 23. Graphs Introduction
  {
    id: 'dsa-graphs-intro',
    title: 'DSA Graphs: Representation',
    slug: 'dsa-graphs-intro',
    summary: 'Vertices and edges: Directed vs Undirected, Weighted vs Unweighted, Adjacency Matrix vs Adjacency List.',
    readTime: '5 min',
    category: 'DSA Graphs',
    content: {
      overview: 'A graph G = (V, E) is a network of vertices (nodes) connected by edges. Graphs represent social networks, maps, internet routing, and dependency graphs.',
      sections: [
        {
          heading: 'Adjacency List Graph',
          body: 'Representing graphs with Maps/Objects:',
          code: `class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) this.adjList.set(vertex, []);
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1); // For undirected graph
  }
}

const g = new Graph();
["A", "B", "C", "D"].forEach(v => g.addVertex(v));
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("A", "D");`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 24. Graph BFS
  {
    id: 'dsa-graphs-bfs',
    title: 'DSA Graph Breadth-First Search (BFS)',
    slug: 'dsa-graphs-bfs',
    summary: 'Level-by-level shortest path traversal using a FIFO Queue and visited Set.',
    readTime: '5 min',
    category: 'DSA Graphs',
    content: {
      overview: 'BFS explores neighbor vertices before moving to the next level. In unweighted graphs, BFS is guaranteed to discover the shortest path from the start vertex.',
      sections: [
        {
          heading: 'BFS Algorithm',
          body: 'Queue and visited set implementation:',
          code: `function bfs(graph, startVertex) {
  const queue = [startVertex];
  const visited = new Set([startVertex]);
  const traversalOrder = [];

  while (queue.length > 0) {
    const current = queue.shift();
    traversalOrder.push(current);

    for (const neighbor of graph.adjList.get(current) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return traversalOrder;
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 25. Graph DFS
  {
    id: 'dsa-graphs-dfs',
    title: 'DSA Graph Depth-First Search (DFS)',
    slug: 'dsa-graphs-dfs',
    summary: 'Explore as deep as possible along each branch before backtracking. Cycle detection and topological sorting.',
    readTime: '5 min',
    category: 'DSA Graphs',
    content: {
      overview: 'DFS visits child nodes recursively or using an explicit Stack before backtracking. It is used for topological sorting in build systems and cycle detection.',
      sections: [
        {
          heading: 'Recursive DFS Algorithm',
          body: 'Deep traversal with visited Set:',
          code: `function dfs(graph, startVertex, visited = new Set(), result = []) {
  visited.add(startVertex);
  result.push(startVertex);

  for (const neighbor of graph.adjList.get(startVertex) || []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, result);
    }
  }
  return result;
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 26. Dynamic Programming
  {
    id: 'dsa-dynamic-programming',
    title: 'DSA Dynamic Programming',
    slug: 'dsa-dynamic-programming',
    summary: 'Solve complex problems by breaking them into overlapping subproblems with Memoization and Tabulation.',
    readTime: '6 min',
    category: 'DSA Advanced',
    content: {
      overview: 'Dynamic Programming (DP) applies when a problem exhibits Overlapping Subproblems and Optimal Substructure. It avoids redundant recalculation by caching intermediate solutions.',
      sections: [
        {
          heading: 'Memoization (Top-Down) vs Tabulation (Bottom-Up)',
          body: 'Optimizing Fibonacci from O(2ⁿ) down to O(n):',
          code: `// Memoization (Top-Down)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
}

// Tabulation (Bottom-Up, O(1) space)
function fibTab(n) {
  if (n <= 1) return n;
  let prev2 = 0, prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

console.log(fibTab(50)); // 12586269025 in milliseconds!`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Dynamic Programming Execution</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">fib(50) = 12,586,269,025
Computed in 0.04 milliseconds using O(n) tabulation.</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
