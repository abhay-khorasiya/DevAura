import { QuizQuestion } from '../../types';

export const csSecurityQuizzes: QuizQuestion[] = [
  // ==================== DSA (Data Structures & Algorithms) ====================
  {
    id: 'q-dsa-1',
    language: 'dsa',
    question: 'What is the average time complexity of searching an element in a balanced Binary Search Tree (BST)?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswerIndex: 1,
    explanation: 'A balanced BST eliminates half the remaining nodes at each level, giving O(log n) average search time.'
  },
  {
    id: 'q-dsa-2',
    language: 'dsa',
    question: 'Which data structure operates on a Last-In, First-Out (LIFO) basis?',
    options: ['Queue', 'Stack', 'Linked List', 'Binary Tree'],
    correctAnswerIndex: 1,
    explanation: 'A Stack follows the LIFO principle, where elements are pushed and popped from the top.'
  },
  {
    id: 'q-dsa-3',
    language: 'dsa',
    question: 'Which sorting algorithm has a worst-case time complexity of O(n log n) and is based on divide-and-conquer?',
    options: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Insertion Sort'],
    correctAnswerIndex: 2,
    explanation: 'Merge Sort guarantees O(n log n) worst-case running time by recursively splitting arrays in half and merging sorted halves.'
  },
  {
    id: 'q-dsa-4',
    language: 'dsa',
    question: 'What is the average lookup time complexity in a Hash Table with a good hash function?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
    correctAnswerIndex: 0,
    explanation: 'Hash tables compute bucket indexes directly from key hashes, achieving constant O(1) average lookup.'
  },
  {
    id: 'q-dsa-5',
    language: 'dsa',
    question: 'Which graph traversal algorithm explores nodes level by level using a Queue?',
    options: ['Depth-First Search (DFS)', 'Breadth-First Search (BFS)', 'Dijkstra\'s only', 'Topological Sort only'],
    correctAnswerIndex: 1,
    explanation: 'BFS uses a FIFO queue to visit all neighbors at current depth before proceeding to nodes at the next depth.'
  },
  {
    id: 'q-dsa-6',
    language: 'dsa',
    question: 'What is the space complexity of an in-place algorithm that uses only a constant amount of auxiliary memory?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n!)'],
    correctAnswerIndex: 0,
    explanation: 'In-place algorithms modify input structures using a constant O(1) number of extra pointers or counters.'
  },

  // ==================== CYBER SECURITY ====================
  {
    id: 'q-sec-1',
    language: 'cybersecurity',
    question: 'What is the fundamental difference between Authentication and Authorization?',
    options: [
      'They are identical terms used interchangeably',
      'Authentication verifies identity (who you are); Authorization verifies access permissions (what you are allowed to do)',
      'Authorization is for passwords; Authentication is for firewalls',
      'Authentication is client-side; Authorization is only for databases'
    ],
    correctAnswerIndex: 1,
    explanation: 'Authentication verifies user identity (e.g. login credentials); Authorization decides the resources the authenticated identity can access.'
  },
  {
    id: 'q-sec-2',
    language: 'cybersecurity',
    question: 'Which security vulnerability occurs when unvalidated user input is executed directly in a database query?',
    options: ['Cross-Site Scripting (XSS)', 'SQL Injection (SQLi)', 'Cross-Site Request Forgery (CSRF)', 'Buffer Overflow'],
    correctAnswerIndex: 1,
    explanation: 'SQL Injection happens when untrusted strings are concatenated into raw SQL statements rather than using prepared parameterization.'
  },
  {
    id: 'q-sec-3',
    language: 'cybersecurity',
    question: 'What attack involves tricking an authenticated user into executing unwanted actions on a trusted web application?',
    options: ['CSRF (Cross-Site Request Forgery)', 'DDoS', 'Man-in-the-Middle', 'Port Scanning'],
    correctAnswerIndex: 0,
    explanation: 'CSRF exploits the browser’s automatic inclusion of credentials (like session cookies) with forged cross-origin requests.'
  },
  {
    id: 'q-sec-4',
    language: 'cybersecurity',
    question: 'Why should passwords be hashed using salted, slow algorithms like bcrypt or Argon2 rather than MD5 or SHA-256?',
    options: [
      'To make database files smaller',
      'To resist brute-force and rainbow table attacks by adding random salt and computational work factors',
      'Because MD5 was not designed for computers',
      'Bcrypt decrypts passwords faster'
    ],
    correctAnswerIndex: 1,
    explanation: 'MD5/SHA-256 are too fast and easily cracked by GPUs. Salted, adaptive functions like bcrypt make offline brute-forcing computationally prohibitive.'
  },
  {
    id: 'q-sec-5',
    language: 'cybersecurity',
    question: 'What type of attack floods a target server, network, or service with a deluge of internet traffic to cause an outage?',
    options: ['Phishing', 'DDoS (Distributed Denial of Service)', 'Ransomware', 'Keylogging'],
    correctAnswerIndex: 1,
    explanation: 'DDoS orchestrates distributed networks of compromised machines (botnets) to overwhelm target capacity.'
  },
  {
    id: 'q-sec-6',
    language: 'cybersecurity',
    question: 'What security attack injects malicious client-side scripts into web pages viewed by other users?',
    options: ['XSS (Cross-Site Scripting)', 'SQL Injection', 'Privilege Escalation', 'Session Hijacking only'],
    correctAnswerIndex: 0,
    explanation: 'XSS occurs when malicious scripts are injected into benign websites and executed in unsuspecting victim browsers.'
  }
];