import { QuizQuestion } from '../../types';

export const dataScienceQuizzes: QuizQuestion[] = [
  // ==================== NUMPY ====================
  {
    id: 'q-numpy-1',
    language: 'numpy',
    question: 'What is the core multi-dimensional array object provided by NumPy?',
    options: ['std_array', 'ndarray', 'matrix_obj', 'nplist'],
    correctAnswerIndex: 1,
    explanation: '`ndarray` (N-dimensional array) is NumPy\'s central homogeneous array data structure.'
  },
  {
    id: 'q-numpy-2',
    language: 'numpy',
    question: 'Which NumPy function generates an array of evenly spaced values within a given interval?',
    options: ['np.range()', 'np.arange()', 'np.sequence()', 'np.series()'],
    correctAnswerIndex: 1,
    explanation: '`np.arange([start,] stop[, step])` returns evenly spaced values within a half-open interval.'
  },
  {
    id: 'q-numpy-3',
    language: 'numpy',
    question: 'What is the property that returns a tuple representing the dimensions of a NumPy array?',
    options: ['size', 'length', 'shape', 'dim'],
    correctAnswerIndex: 2,
    explanation: '`arr.shape` returns a tuple of integers indicating the size of the array along each dimension.'
  },
  {
    id: 'q-numpy-4',
    language: 'numpy',
    question: 'What NumPy capability allows arithmetic operations between arrays of different shapes?',
    options: ['Vector casting', 'Broadcasting', 'Array dilation', 'Polymorphic arithmetic'],
    correctAnswerIndex: 1,
    explanation: 'Broadcasting describes how NumPy treats arrays with different shapes during arithmetic operations.'
  },
  {
    id: 'q-numpy-5',
    language: 'numpy',
    question: 'Which function creates an array filled entirely with zeros of specified shape?',
    options: ['np.empty()', 'np.zeros()', 'np.fill(0)', 'np.nulls()'],
    correctAnswerIndex: 1,
    explanation: '`np.zeros(shape)` creates a new array of given shape and type, filled with zeros.'
  },
  {
    id: 'q-numpy-6',
    language: 'numpy',
    question: 'How do you compute the matrix dot product of two 2D arrays `A` and `B` in modern Python?',
    options: ['A * B', 'A @ B (or np.dot(A, B))', 'A.dot_cross(B)', 'A.multiply_matrix(B)'],
    correctAnswerIndex: 1,
    explanation: 'The `@` infix operator in Python (or `np.dot` / `np.matmul`) calculates the matrix product.'
  },

  // ==================== PANDAS ====================
  {
    id: 'q-pandas-1',
    language: 'pandas',
    question: 'What is the primary two-dimensional, size-mutable tabular data structure in pandas?',
    options: ['Series', 'DataFrame', 'Panel', 'DataTable'],
    correctAnswerIndex: 1,
    explanation: 'A `DataFrame` is a 2-dimensional labeled data structure with columns of potentially different types.'
  },
  {
    id: 'q-pandas-2',
    language: 'pandas',
    question: 'Which pandas function reads a CSV file into a DataFrame?',
    options: ['pd.import_csv()', 'pd.read_csv()', 'pd.load_csv()', 'pd.csv_reader()'],
    correctAnswerIndex: 1,
    explanation: '`pd.read_csv("filename.csv")` parses a comma-separated values file into a DataFrame.'
  },
  {
    id: 'q-pandas-3',
    language: 'pandas',
    question: 'What is the difference between `.loc` and `.iloc` in pandas?',
    options: [
      '`.loc` uses label-based indexing; `.iloc` uses integer position-based indexing',
      '`.loc` is for columns only; `.iloc` is for rows only',
      '`.iloc` is deprecated in pandas 2.0',
      'There is no difference'
    ],
    correctAnswerIndex: 0,
    explanation: '`.loc` accesses rows/columns by label/index name; `.iloc` accesses elements by numerical integer offsets.'
  },
  {
    id: 'q-pandas-4',
    language: 'pandas',
    question: 'Which method drops rows that contain missing (NaN) values in a DataFrame?',
    options: ['df.clean()', 'df.dropna()', 'df.remove_nan()', 'df.strip_empty()'],
    correctAnswerIndex: 1,
    explanation: '`df.dropna()` removes missing values along the specified axis (default: rows).'
  },
  {
    id: 'q-pandas-5',
    language: 'pandas',
    question: 'Which method groups data by one or more columns for aggregation in pandas?',
    options: ['df.aggregate()', 'df.groupby()', 'df.cluster()', 'df.categorize()'],
    correctAnswerIndex: 1,
    explanation: '`df.groupby("col").mean()` performs split-apply-combine aggregations on groups.'
  },
  {
    id: 'q-pandas-6',
    language: 'pandas',
    question: 'Which method fills missing `NaN` values with a specified default value in pandas?',
    options: ['df.fill()', 'df.fillna()', 'df.replace_null()', 'df.populate()'],
    correctAnswerIndex: 1,
    explanation: '`df.fillna(value)` replaces missing `NaN` entries with the provided scalar or series value.'
  },

  // ==================== DATA SCIENCE & AI ====================
  {
    id: 'q-ds-1',
    language: 'datascience',
    question: 'What type of machine learning uses labeled datasets to train algorithms to classify data or predict outcomes?',
    options: ['Unsupervised Learning', 'Supervised Learning', 'Reinforcement Learning', 'Zero-shot Learning'],
    correctAnswerIndex: 1,
    explanation: 'Supervised learning trains models on labeled input-output pairs to learn predictive mapping functions.'
  },
  {
    id: 'q-ds-2',
    language: 'datascience',
    question: 'What problem occurs when a model learns noise in the training data too well, failing to generalize to new data?',
    options: ['Underfitting', 'Overfitting', 'Regularization', 'Gradient Descent'],
    correctAnswerIndex: 1,
    explanation: 'Overfitting happens when a model fits the training set excessively closely, performing poorly on unseen validation sets.'
  },
  {
    id: 'q-ds-3',
    language: 'datascience',
    question: 'Why is a dataset partitioned into Training and Testing sets before modeling?',
    options: [
      'To reduce disk memory usage',
      'To evaluate how well the trained model generalizes to unseen real-world data',
      'To prevent the computer from overheating',
      'Testing sets are required by GPU drivers'
    ],
    correctAnswerIndex: 1,
    explanation: 'Evaluating models on an independent test set prevents data leakage and gives an unbiased estimate of generalization error.'
  },
  {
    id: 'q-ds-4',
    language: 'datascience',
    question: 'Which table layout compares predicted classifications against actual true labels?',
    options: ['Correlation Matrix', 'Confusion Matrix', 'Loss Curve', 'ROC Histogram'],
    correctAnswerIndex: 1,
    explanation: 'A Confusion Matrix cross-tabulates True Positives, False Positives, True Negatives, and False Negatives.'
  },
  {
    id: 'q-ds-5',
    language: 'datascience',
    question: 'Which fundamental optimization algorithm iteratively updates model parameters to minimize a loss function?',
    options: ['K-Means', 'Gradient Descent', 'Apriori Algorithm', 'Decision Tree Pruning'],
    correctAnswerIndex: 1,
    explanation: 'Gradient Descent moves parameter weights in the opposite direction of the gradient of the loss function.'
  },
  {
    id: 'q-ds-6',
    language: 'datascience',
    question: 'What is the purpose of Normalization or Standardization in feature preprocessing?',
    options: [
      'To remove all string variables',
      'To scale numerical features to a comparable range so large values do not dominate the learning algorithm',
      'To convert regression tasks into classification tasks',
      'To encrypt private user columns'
    ],
    correctAnswerIndex: 1,
    explanation: 'Feature scaling ensures gradient descent converges efficiently and distance-based models treat features equitably.'
  },

  // ==================== EXCEL ====================
  {
    id: 'q-excel-1',
    language: 'excel',
    question: 'All formulas in Microsoft Excel must start with which character?',
    options: ['#', '=', '$', '@'],
    correctAnswerIndex: 1,
    explanation: 'An equal sign `=` tells Excel that the cell contents should be interpreted and evaluated as a formula.'
  },
  {
    id: 'q-excel-2',
    language: 'excel',
    question: 'Which modern Excel function searches a range or array and returns the corresponding matching item in any direction?',
    options: ['VLOOKUP', 'HLOOKUP', 'XLOOKUP', 'SEARCH'],
    correctAnswerIndex: 2,
    explanation: '`XLOOKUP` is the modern successor to VLOOKUP/HLOOKUP, supporting lookups to the left and right without column index numbers.'
  },
  {
    id: 'q-excel-3',
    language: 'excel',
    question: 'What does the `$` symbol represent in an Excel cell reference like `$A$1`?',
    options: ['Currency formatting', 'Absolute (locked) cell reference', 'String text type', 'Error code'],
    correctAnswerIndex: 1,
    explanation: 'The `$` locks the column and/or row so the reference does not shift when copied across cells.'
  },
  {
    id: 'q-excel-4',
    language: 'excel',
    question: 'Which interactive Excel tool is used to quickly summarize, reorganize, and analyze large datasets without complex formulas?',
    options: ['PivotTable', 'Data Validation', 'Goal Seek', 'Text to Columns'],
    correctAnswerIndex: 0,
    explanation: 'PivotTables allow rapid multidimensional slicing, pivoting, and aggregation of tabular records.'
  },
  {
    id: 'q-excel-5',
    language: 'excel',
    question: 'Which formula adds the values in cells A1 through A10 in Excel?',
    options: ['=TOTAL(A1:A10)', '=SUM(A1:A10)', '=ADD(A1..A10)', '=PLUS(A1, A10)'],
    correctAnswerIndex: 1,
    explanation: '`=SUM(A1:A10)` calculates the total sum of all numerical values in the range.'
  },
  {
    id: 'q-excel-6',
    language: 'excel',
    question: 'Which function conditionally sums numbers based on multiple criteria in Excel?',
    options: ['SUMIF', 'SUMIFS', 'COND_SUM', 'MULTISUM'],
    correctAnswerIndex: 1,
    explanation: '`SUMIFS(sum_range, criteria_range1, criteria1, ...)` evaluates multiple criteria across ranges.'
  }
];