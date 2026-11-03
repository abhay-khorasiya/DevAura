import { TutorialChapter } from '../../types';

export const pandasChapters: TutorialChapter[] = [
  // 1. Pandas HOME
  {
    id: 'pandas-home',
    title: 'Pandas HOME',
    slug: 'pandas-home',
    summary: 'Pandas is a Python library used for working with data sets, analyzing, cleaning, exploring, and manipulating data.',
    readTime: '3 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'Pandas is a fast, powerful, flexible and easy-to-use open-source data analysis and manipulation tool, built on top of the Python programming language and NumPy. The name "Pandas" has a reference to both "Panel Data", and "Python Data Analysis" and was created by Wes McKinney in 2008.',
      sections: [
        {
          heading: 'Your First Pandas DataFrame',
          body: 'Creating a DataFrame from a Python dictionary:',
          code: `import pandas as pd

dataset = {
  'cars': ["BMW", "Volvo", "Ford"],
  'passings': [3, 7, 2]
}

df = pd.DataFrame(dataset)
print(df)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Pandas DataFrame Output</h3>
    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:14px;">
      <tr style="background:#0284c7; color:#fff; text-align:left;">
        <th style="padding:6px 12px;"></th><th style="padding:6px 12px;">cars</th><th style="padding:6px 12px;">passings</th>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 12px; font-weight:bold;">0</td><td style="padding:6px 12px;">BMW</td><td style="padding:6px 12px;">3</td></tr>
      <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 12px; font-weight:bold;">1</td><td style="padding:6px 12px;">Volvo</td><td style="padding:6px 12px;">7</td></tr>
      <tr><td style="padding:6px 12px; font-weight:bold;">2</td><td style="padding:6px 12px;">Ford</td><td style="padding:6px 12px;">2</td></tr>
    </table>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Pandas Intro
  {
    id: 'pandas-intro',
    title: 'Pandas Introduction (Why Pandas?)',
    slug: 'pandas-intro',
    summary: 'Why use Pandas? Handling big tabular data, missing values, fast reshaping, and CSV/SQL ingestion.',
    readTime: '4 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'Pandas allows us to analyze big data and make conclusions based on statistical theories. Pandas can clean messy data sets, and make them readable and relevant. Relevant data is very important in Data Science and Machine Learning.',
      sections: [
        {
          heading: 'Questions Pandas Can Answer',
          body: '1. What is the average value? 2. Is there a correlation between columns? 3. What are the maximum and minimum values? 4. Are there missing values or duplicate records?',
          code: `import pandas as pd

# Load 1,000,000 rows in seconds
df = pd.read_csv('massive_data.csv')
print("Dimensions:", df.shape)
print("Statistical summary:\\n", df.describe())`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Why Pandas Powers Data Science:</h4>
    <ul style="color:#334155; line-height:1.7;">
      <li>Fast and efficient <strong>DataFrame object</strong> with default and customized indexing.</li>
      <li>Tools for <strong>loading data into memory</strong> from CSV, Excel, SQL, JSON, and HDF5.</li>
      <li>Flexible handling of <strong>missing data (NaN)</strong>.</li>
      <li>Intuitive <strong>merge, join, and groupby</strong> operations.</li>
    </ul>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 3. Pandas Getting Started
  {
    id: 'pandas-getstarted',
    title: 'Pandas Getting Started',
    slug: 'pandas-getstarted',
    summary: 'Installing Pandas via pip and checking version.',
    readTime: '3 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'To install Pandas on your computer, use PIP in your terminal: pip install pandas. Once installed, import it into your code using import pandas as pd.',
      sections: [
        {
          heading: 'Installation & Import Convention',
          body: 'Verify installation from terminal:',
          code: `$ pip install pandas

# Check version in Python:
import pandas as pd
print(pd.__version__)`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    $ python -c "import pandas as pd; print(pd.__version__)"<br>
    2.2.2
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 4. Pandas Series
  {
    id: 'pandas-series',
    title: 'Pandas Series',
    slug: 'pandas-series',
    summary: 'A Pandas Series is like a column in a table: a one-dimensional array holding data of any type.',
    readTime: '4 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'A Pandas Series is like a column in a table. It is a one-dimensional array holding data of any type. If nothing else is specified, the values are labeled with their index number (0, 1, 2...).',
      sections: [
        {
          heading: 'Custom Index Labels',
          body: 'Create custom index labels to access elements by key:',
          code: `import pandas as pd

calories = {"day1": 420, "day2": 380, "day3": 390}
my_series = pd.Series(calories)

print(my_series)
print("Day 2 Calories:", my_series["day2"]) # 380`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    day1 &nbsp;&nbsp;420<br>
    day2 &nbsp;&nbsp;380<br>
    day3 &nbsp;&nbsp;390<br>
    dtype: int64<br><br>
    Day 2 Calories: 380
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 5. Pandas DataFrames
  {
    id: 'pandas-dataframes',
    title: 'Pandas DataFrames (loc & iloc)',
    slug: 'pandas-dataframes',
    summary: 'A Pandas DataFrame is a 2-dimensional data structure like a 2-dimensional array or a table with rows and columns.',
    readTime: '5 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'A Pandas DataFrame is a 2-dimensional data structure, like a 2-dimensional array, or a table with rows and columns. Use the loc attribute to return one or more specified rows by label, or iloc by integer position.',
      sections: [
        {
          heading: 'Locating Rows with .loc and .iloc',
          body: 'Accessing rows by label vs integer index:',
          code: `import pandas as pd

data = {
  "calories": [420, 380, 390],
  "duration": [50, 40, 45]
}

df = pd.DataFrame(data, index=["day1", "day2", "day3"])

# Return row by label:
print(df.loc["day2"])

# Return row by integer position (first row):
print(df.iloc[0])`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    calories &nbsp;&nbsp;380<br>
    duration &nbsp;&nbsp;&nbsp;40<br>
    Name: day2, dtype: int64
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 6. Pandas Read CSV
  {
    id: 'pandas-read-csv',
    title: 'Pandas Read CSV',
    slug: 'pandas-read-csv',
    summary: 'Loading CSV (Comma Separated Values) files into DataFrames with pd.read_csv().',
    readTime: '4 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'A simple way to store big data sets is to use CSV files (comma separated files). CSV files contain plain text and is a well known format that can be read by everyone including Pandas.',
      sections: [
        {
          heading: 'read_csv() and to_string()',
          body: 'Use to_string() to print the entire DataFrame without ellipsis truncation:',
          code: `import pandas as pd

# Load CSV
df = pd.read_csv('data.csv')

# Print first 5 rows:
print(df.head())

# Increase max display rows in terminal:
pd.options.display.max_rows = 999`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">CSV Ingestion:</h4>
    <p>Loaded <code>data.csv</code> (169 rows, 4 columns) in 1.8 milliseconds.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 7. Pandas Read JSON
  {
    id: 'pandas-read-json',
    title: 'Pandas Read JSON',
    slug: 'pandas-read-json',
    summary: 'Loading JSON files and Python dictionary payloads into DataFrames.',
    readTime: '4 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'Big data sets are often stored, or extracted as JSON. JSON is plain text, but has the format of an object, and is well known in the world of programming, including Pandas.',
      sections: [
        {
          heading: 'read_json() Example',
          body: 'Reading JSON file into a DataFrame:',
          code: `import pandas as pd

df = pd.read_json('data.json')
print(df.info())`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    &lt;class 'pandas.core.frame.DataFrame'&gt;<br>
    Index: 169 entries, 0 to 168<br>
    Data columns (total 4 columns):<br>
    &nbsp;# &nbsp;Column &nbsp;&nbsp;Non-Null Count &nbsp;Dtype<br>
    --- &nbsp;------ &nbsp;&nbsp;-------------- &nbsp;-----<br>
    &nbsp;0 &nbsp;Duration &nbsp;169 non-null &nbsp;&nbsp;int64<br>
    &nbsp;1 &nbsp;Pulse &nbsp;&nbsp;&nbsp;&nbsp;169 non-null &nbsp;&nbsp;int64<br>
    &nbsp;2 &nbsp;Maxpulse &nbsp;169 non-null &nbsp;&nbsp;int64<br>
    &nbsp;3 &nbsp;Calories &nbsp;164 non-null &nbsp;&nbsp;float64
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 8. Pandas Analyzing Data
  {
    id: 'pandas-analyzing-data',
    title: 'Pandas Analyzing Data (head, tail, info, describe)',
    slug: 'pandas-analyzing-data',
    summary: 'Quick overview of datasets: head(), tail(), info(), and statistical summary describe().',
    readTime: '4 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'One of the most used method for getting a quick overview of the DataFrame, is the head() method. The head() method returns the headers and a specified number of rows, starting from the top.',
      sections: [
        {
          heading: 'Inspection Utilities',
          body: 'head(n), tail(n), and describe():',
          code: `import pandas as pd

df = pd.read_csv('data.csv')

print(df.head(10))    # First 10 rows
print(df.tail(5))     # Last 5 rows
print(df.describe())  # Mean, std, min, 25%, 50%, 75%, max
print(df.shape)       # (rows, columns) tuple`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Shape: (169, 4)<br>
    Calories Mean: 375.79<br>
    Calories Min: 50.30<br>
    Calories Max: 1860.40
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 9. Pandas Cleaning Empty Cells
  {
    id: 'pandas-cleaning-empty-cells',
    title: 'Pandas Cleaning Empty Cells (dropna & fillna)',
    slug: 'pandas-cleaning-empty-cells',
    summary: 'Handling missing data (NaN): dropping empty rows with dropna() or imputing with Mean, Median, or Mode using fillna().',
    readTime: '5 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'Empty cells can potentially give you a wrong result when you analyze data. You can either remove rows that contain empty cells with dropna(), or replace empty cells with a calculated value (like mean, median, or mode) using fillna().',
      sections: [
        {
          heading: 'Imputing with Mean Value',
          body: 'Calculate the column mean and fill empty cells without discarding rows:',
          code: `import pandas as pd

df = pd.read_csv('data.csv')

# Method 1: Drop empty rows
# df.dropna(inplace=True)

# Method 2: Calculate Mean and Impute
x = df["Calories"].mean()
df["Calories"].fillna(x, inplace=True)
print("Missing values after imputation:", df["Calories"].isnull().sum()) # 0`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Data Cleaning Result:</h4>
    <p>5 empty cells in column <code>Calories</code> replaced with column mean <strong>375.8</strong>.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 10. Pandas Cleaning Wrong Format
  {
    id: 'pandas-cleaning-wrong-format',
    title: 'Pandas Cleaning Wrong Format (to_datetime)',
    slug: 'pandas-cleaning-wrong-format',
    summary: 'Converting dates and formats into standard ISO types using pd.to_datetime().',
    readTime: '4 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'Cells with data of wrong format can make it difficult, or even impossible, to analyze data. To fix it, you have two options: remove the rows, or convert all cells in the columns into the same format.',
      sections: [
        {
          heading: 'Converting Strings to DateTime Objects',
          body: 'Using to_datetime() and dropping invalid NaT records:',
          code: `import pandas as pd

df = pd.read_csv('data.csv')

# Convert Date column to datetime
df['Date'] = pd.to_datetime(df['Date'], format='mixed')

# Drop any rows where date could not be parsed (NaT)
df.dropna(subset=['Date'], inplace=True)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Dates standardized into ISO format: 2026-11-03<br>
    Non-parseable corrupt rows safely removed.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 11. Pandas Removing Duplicates
  {
    id: 'pandas-removing-duplicates',
    title: 'Pandas Removing Duplicates (drop_duplicates)',
    slug: 'pandas-removing-duplicates',
    summary: 'Detecting identical rows with duplicated() and stripping them with drop_duplicates().',
    readTime: '4 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'Duplicate rows are rows that have been registered more than one time. To discover duplicates, we can use the duplicated() method. To remove duplicates, use the drop_duplicates() method.',
      sections: [
        {
          heading: 'Detecting and Dropping Duplicate Rows',
          body: 'Maintaining data integrity:',
          code: `import pandas as pd

df = pd.read_csv('data.csv')

# Returns True for every duplicate row
print("Duplicate count:", df.duplicated().sum())

# Remove duplicate rows in place
df.drop_duplicates(inplace=True)
print("Rows remaining:", len(df))`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Deduplication Summary:</h4>
    <p>Found 7 duplicate rows &rarr; <strong>Removed cleanly</strong>.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 12. Pandas Correlations
  {
    id: 'pandas-correlations',
    title: 'Pandas Data Correlations (corr)',
    slug: 'pandas-correlations',
    summary: 'Calculating Pearson correlation coefficients between numeric columns using df.corr().',
    readTime: '5 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'A great aspect of the Pandas module is the corr() method. The corr() method calculates the relationship between each column in your data set. The correlation coefficient is always a number between -1 and 1.',
      sections: [
        {
          heading: 'Interpreting Correlation Matrix',
          body: '1 means perfect direct positive correlation; 0 means no relationship; -1 means perfect inverse correlation:',
          code: `import pandas as pd

df = pd.read_csv('data.csv')
print(df.corr(numeric_only=True))`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duration &nbsp;&nbsp;&nbsp;&nbsp;Pulse &nbsp;Maxpulse &nbsp;Calories<br>
    Duration &nbsp;1.000000 &nbsp;-0.15540 &nbsp;0.009403 &nbsp;0.922717<br>
    Pulse &nbsp;&nbsp;&nbsp;-0.155403 &nbsp;1.00000 &nbsp;0.786997 &nbsp;0.025121<br>
    Calories &nbsp;0.922717 &nbsp;0.02512 &nbsp;0.203814 &nbsp;1.000000
  </div>
  <p style="color:#64748b; font-size:13px; margin-top:8px;">Notice <strong>0.92</strong> correlation between Duration and Calories: the longer you workout, the more calories burned!</p>
</body>
</html>`
        }
      ]
    }
  },

  // 13. Pandas Plotting
  {
    id: 'pandas-plotting',
    title: 'Pandas Plotting (df.plot)',
    slug: 'pandas-plotting',
    summary: 'Visualizing DataFrames with line, scatter, and histogram plots via Matplotlib.',
    readTime: '4 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'Pandas uses the plot() method to create diagrams. We can use Pyplot, a submodule of the Matplotlib library to visualize the diagram on the screen.',
      sections: [
        {
          heading: 'Scatter Plot Example',
          body: 'Plotting Duration vs Calories:',
          code: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('data.csv')
df.plot(kind='scatter', x='Duration', y='Calories')
plt.show()`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Chart Generation:</h4>
    <p>Scatter plot rendered: X="Duration", Y="Calories". Clear upward linear slope visualizes strong positive correlation.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 14. Pandas GroupBy
  {
    id: 'pandas-groupby',
    title: 'Pandas GroupBy & Aggregations',
    slug: 'pandas-groupby',
    summary: 'Split-Apply-Combine workflow: grouping by categorical columns and computing aggregate metrics.',
    readTime: '5 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'A groupby operation involves some combination of splitting the object, applying a function, and combining the results. This can be used to group large amounts of data and compute operations on these groups.',
      sections: [
        {
          heading: 'Grouping and Aggregating',
          body: 'Calculating mean sales and order count per department:',
          code: `import pandas as pd

df = pd.DataFrame({
    'Department': ['Tech', 'Tech', 'HR', 'HR', 'Marketing'],
    'Salary': [95000, 110000, 65000, 70000, 80000]
})

grouped = df.groupby('Department')['Salary'].agg(['mean', 'count'])
print(grouped)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mean &nbsp;count<br>
    Department &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
    HR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;67500.0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2<br>
    Marketing &nbsp;80000.0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1<br>
    Tech &nbsp;&nbsp;&nbsp;&nbsp;102500.0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 15. Pandas Merging & Joining
  {
    id: 'pandas-merging',
    title: 'Pandas Merging & Joining (merge & concat)',
    slug: 'pandas-merging',
    summary: 'Combining DataFrames using SQL-like joins (inner, outer, left, right) and stacking with concat.',
    readTime: '5 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'Pandas provides various facilities for easily combining together Series or DataFrame with various kinds of set logic for the indexes and relational algebra functionality in the case of join / merge-type operations.',
      sections: [
        {
          heading: 'pd.merge() Example',
          body: 'Joining two tables on a common key:',
          code: `import pandas as pd

users = pd.DataFrame({'id': [1, 2], 'name': ['Alice', 'Bob']})
orders = pd.DataFrame({'user_id': [1, 2], 'amount': [150, 200]})

merged = pd.merge(users, orders, left_on='id', right_on='user_id', how='inner')
print(merged)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    &nbsp;&nbsp;id &nbsp;&nbsp;name &nbsp;user_id &nbsp;amount<br>
    0 &nbsp;1 &nbsp;Alice &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 &nbsp;&nbsp;&nbsp;&nbsp;150<br>
    1 &nbsp;2 &nbsp;&nbsp;&nbsp;Bob &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 &nbsp;&nbsp;&nbsp;&nbsp;200
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 16. Pandas Reshaping & Pivot Tables
  {
    id: 'pandas-pivoting',
    title: 'Pandas Pivot Tables & Melt',
    slug: 'pandas-pivoting',
    summary: 'Creating spreadsheet-style pivot tables with pivot_table() and unpivoting with melt().',
    readTime: '5 min',
    category: 'Pandas Tutorial',
    content: {
      overview: 'Pivot tables in Pandas work similarly to Excel pivot tables: they aggregate and summarize multi-dimensional tabular data based on chosen index rows, columns, and numeric value metrics.',
      sections: [
        {
          heading: 'pivot_table() Example',
          body: 'Summarizing sales across regions and quarters:',
          code: `import pandas as pd

df = pd.DataFrame({
    'Region': ['East', 'East', 'West', 'West'],
    'Quarter': ['Q1', 'Q2', 'Q1', 'Q2'],
    'Sales': [1000, 1500, 800, 1200]
})

pt = df.pivot_table(index='Region', columns='Quarter', values='Sales', aggfunc='sum')
print(pt)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Quarter &nbsp;&nbsp;&nbsp;&nbsp;Q1 &nbsp;&nbsp;&nbsp;Q2<br>
    Region &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
    East &nbsp;&nbsp;&nbsp;&nbsp;1000 &nbsp;1500<br>
    West &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;800 &nbsp;1200
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
