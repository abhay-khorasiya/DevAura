import { TutorialChapter } from '../../types';

export const dataScienceChapters: TutorialChapter[] = [
  // 1. Data Science HOME
  {
    id: 'ds-home',
    title: 'Data Science HOME',
    slug: 'ds-home',
    summary: 'Data Science combines computer science, statistics, and domain expertise to extract meaningful insights from raw datasets.',
    readTime: '3 min',
    category: 'Data Science Tutorial',
    content: {
      overview: 'Data science is the interdisciplinary discipline that transforms raw operational data into actionable intelligence through scientific methods, algorithms, and automated analytics pipelines.',
      sections: [
        {
          heading: 'The Data Science Lifecycle',
          body: 'The standard 5-stage lifecycle of data science projects:',
          code: `# 1. Data Ingestion & Extraction (SQL, APIs, Web Scraping)
# 2. Data Cleaning & Preprocessing (Handling missing values, outlier detection)
# 3. Exploratory Data Analysis (EDA) (Summary statistics, distribution plotting)
# 4. Statistical Modeling & Machine Learning (Linear regression, Random Forest)
# 5. Deployment & Storytelling (Interactive dashboards, automated reports)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">DevAura Data Insights Dashboard</h3>
    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; margin-top:12px;">
      <div style="background:white; padding:12px; border-radius:6px; border:1px solid #cbd5e1; text-align:center;">
        <span style="font-size:12px; color:#64748b;">Dataset Size</span>
        <div style="font-size:20px; font-weight:bold; color:#0f172a;">1.2M rows</div>
      </div>
      <div style="background:white; padding:12px; border-radius:6px; border:1px solid #cbd5e1; text-align:center;">
        <span style="font-size:12px; color:#64748b;">Model Accuracy</span>
        <div style="font-size:20px; font-weight:bold; color:#4f46e5;">94.8%</div>
      </div>
      <div style="background:white; padding:12px; border-radius:6px; border:1px solid #cbd5e1; text-align:center;">
        <span style="font-size:12px; color:#64748b;">Inference Latency</span>
        <div style="font-size:20px; font-weight:bold; color:#0284c7;">14 ms</div>
      </div>
    </div>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Data Science Intro
  {
    id: 'ds-intro',
    title: 'Data Science Introduction',
    slug: 'ds-intro',
    summary: 'Understand the intersection of Computer Science, Mathematics & Statistics, and Business Domain knowledge.',
    readTime: '4 min',
    category: 'Data Science Tutorial',
    content: {
      overview: 'Drew Conway’s famous Data Science Venn Diagram places data science at the exact intersection of Hacking Skills (programming), Math & Statistics Knowledge, and Substantive Expertise.',
      sections: [
        {
          heading: 'Core Disciplines of Data Science',
          body: 'What makes up modern data science practice:',
          code: `# Key pillars:
1. Programming Languages: Python, R, SQL, Julia
2. Data Manipulation: Pandas, Polars, NumPy, Dask
3. Visualization: Matplotlib, Seaborn, Plotly, ggplot2
4. Machine Learning: Scikit-Learn, PyTorch, TensorFlow, XGBoost
5. Big Data & Cloud: Apache Spark, Snowflake, BigQuery`,
          codeLanguage: 'text',
          interactive: true
        }
      ]
    }
  },

  // 3. What is Data?
  {
    id: 'ds-what-is-data',
    title: 'What is Data?',
    slug: 'ds-what-is-data',
    summary: 'Categorizing data: Quantitative (numerical, discrete/continuous) vs Qualitative (categorical, nominal/ordinal).',
    readTime: '4 min',
    category: 'Data Science Basics',
    content: {
      overview: 'Data is a collection of facts, figures, and measurements. Proper data classification is critical because statistical tests and machine learning algorithms require specific mathematical data representations.',
      sections: [
        {
          heading: 'Data Classifications',
          body: 'How data types are categorized in data science:',
          code: `# 1. Quantitative (Numerical):
#    - Discrete: Countable values (e.g., number of students: 1, 2, 3)
#    - Continuous: Measurable continuous scale (e.g., height: 175.4 cm, temperature: 98.6 F)

# 2. Qualitative (Categorical):
#    - Nominal: Categories with no inherent order (e.g., colors: Red, Blue, Green)
#    - Ordinal: Categories with clear relative ranking (e.g., satisfaction: Low, Medium, High)`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 4. Database Table
  {
    id: 'ds-database-table',
    title: 'Data Science - Database Tables',
    slug: 'ds-database-table',
    summary: 'Structuring datasets in relational grids: columns (features), rows (observations), and data dictionaries.',
    readTime: '4 min',
    category: 'Data Science Basics',
    content: {
      overview: 'In data science, a database table is a collection of related data held in a structured format within a database. It consists of columns and rows.',
      sections: [
        {
          heading: 'Structure of Tabular Datasets',
          body: 'Rows vs Columns:',
          code: `# Columns: Features / Attributes / Independent Variables (X)
# Rows: Records / Observations / Samples (N)
# Target Column: Dependent Variable / Ground Truth (y)

# Example Health Dataset Table:
# Duration | Pulse | MaxPulse | CaloriesBurned (Target)
# 60       | 110   | 130      | 409.1
# 60       | 117   | 145      | 479.0`,
          codeLanguage: 'text',
          interactive: true
        }
      ]
    }
  },

  // 5. Python for Data Science
  {
    id: 'ds-python',
    title: 'Python for Data Science',
    slug: 'ds-python',
    summary: 'Why Python is the lingua franca of data analysis: syntax, ecosystem, and integration libraries.',
    readTime: '4 min',
    category: 'Data Science Basics',
    content: {
      overview: 'Python has become the dominant programming language for data science due to its clean syntax, rich package ecosystem, and extensive scientific computing libraries.',
      sections: [
        {
          heading: 'Essential Python Data Libraries',
          body: 'The standard data science stack in Python:',
          code: `import numpy as np         # Numerical array computing
import pandas as pd        # Tabular data manipulation
import matplotlib.pyplot as plt # Charting & plotting
import seaborn as sns      # Statistical data visualization
from sklearn import linear_model # Machine learning modeling`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 6. DataFrames & Series
  {
    id: 'ds-dataframe',
    title: 'Data Science - DataFrame',
    slug: 'ds-dataframe',
    summary: 'Working with rows, columns, features, and target labels using Pandas DataFrames.',
    readTime: '4 min',
    category: 'Data Science Basics',
    content: {
      overview: 'In data science, datasets are structured into 2-dimensional grids where rows represent observations (samples) and columns represent features (attributes).',
      sections: [
        {
          heading: 'Inspecting Datasets with Pandas',
          body: 'Loading and analyzing tabular data in Python:',
          code: `import pandas as pd

# Load dataset
df = pd.read_csv("health_data.csv")

# Quick inspection methods:
print(df.head())       # Display first 5 rows
print(df.info())       # Column types and null count
print(df.describe())   # Summary statistics (mean, std, percentiles)`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 7. Linear Functions
  {
    id: 'ds-linear-functions',
    title: 'Data Science - Linear Functions',
    slug: 'ds-linear-functions',
    summary: 'Understanding the fundamental linear equation y = mx + c (or y = ax + b), slope, and intercept.',
    readTime: '5 min',
    category: 'Data Science Mathematics',
    content: {
      overview: 'A linear function represents a straight-line relationship between two variables. In data science, linear equations form the baseline for regression modeling.',
      sections: [
        {
          heading: 'Slope (m) and Intercept (c)',
          body: 'In y = mx + c, m is the slope (change in y divided by change in x), and c is the intercept (value of y when x = 0):',
          code: `# Predicting calorie burn based on workout duration:
# Slope (m) = 8 calories per minute
# Intercept (c) = 50 baseline calories burned

def predict_calories(duration_minutes, m=8, c=50):
    return (m * duration_minutes) + c

print("30 min workout calories:", predict_calories(30)) # 290 calories
print("60 min workout calories:", predict_calories(60)) # 530 calories`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 8. Data Plotting
  {
    id: 'ds-plotting',
    title: 'Data Science - Plotting Data',
    slug: 'ds-plotting',
    summary: 'Visualizing data relationships with scatter plots and regression trendlines using Matplotlib.',
    readTime: '4 min',
    category: 'Data Science Mathematics',
    content: {
      overview: 'Data visualization is the graphical representation of data. It helps identify patterns, trends, and correlations that summary tables cannot convey.',
      sections: [
        {
          heading: 'Plotting Scatter Plots in Python',
          body: 'Visualizing feature correlation:',
          code: `import matplotlib.pyplot as plt

# Workout duration (x) vs Calories burned (y):
duration = [10, 20, 30, 40, 50, 60]
calories = [130, 210, 290, 370, 450, 530]

plt.scatter(duration, calories, color='#4f46e5')
plt.plot(duration, calories, color='#0284c7', linestyle='--')
plt.title("Workout Duration vs Calories Burned")
plt.xlabel("Duration (Minutes)")
plt.ylabel("Calories")
plt.grid(True)
plt.show()`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 9. Slope & Intercept Calculation
  {
    id: 'ds-slope-intercept',
    title: 'Data Science - Slope and Intercept Calculation',
    slug: 'ds-slope-intercept',
    summary: 'Mathematically deriving the slope m = (y2 - y1) / (x2 - x1) and finding the intercept c = y - mx.',
    readTime: '4 min',
    category: 'Data Science Mathematics',
    content: {
      overview: 'Slope measures the steepness and direction of a line. Intercept is the point where the line crosses the vertical y-axis.',
      sections: [
        {
          heading: 'Mathematical Formulas',
          body: 'Slope formula: m = (y2 - y1) / (x2 - x1)\nIntercept formula: c = y1 - (m * x1)',
          code: `# Coordinates: Point 1 (x1=30, y1=240), Point 2 (x2=60, y2=450)
x1, y1 = 30, 240
x2, y2 = 60, 450

slope = (y2 - y1) / (x2 - x1) # 210 / 30 = 7.0
intercept = y1 - (slope * x1)  # 240 - (7 * 30) = 30.0

print(f"Linear Formula: y = {slope} * x + {intercept}")`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 10. Descriptive Statistics
  {
    id: 'ds-statistics',
    title: 'Data Science - Statistics',
    slug: 'ds-statistics',
    summary: 'Measure central tendency (mean, median, mode) and dispersion (range, variance, standard deviation).',
    readTime: '5 min',
    category: 'Data Science Mathematics',
    content: {
      overview: 'Descriptive statistics summarize and characterize the main features of a dataset quantitatively without making predictions.',
      sections: [
        {
          heading: 'Calculating Summary Statistics',
          body: 'Python implementation of central measures and dispersion:',
          code: `import numpy as np
from scipy import stats

data = [12, 15, 18, 19, 21, 21, 24, 28, 35, 95] # 95 is an outlier

mean_val = np.mean(data)       # 28.8 (distorted by 95)
median_val = np.median(data)   # 21.0 (robust to outliers!)
mode_val = stats.mode(data)    # 21
std_dev = np.std(data)         # 22.86
variance = np.var(data)        # 522.56

print(f"Mean: {mean_val:.2f}, Median: {median_val}, Std Dev: {std_dev:.2f}")`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 11. Probability & Normal Distribution
  {
    id: 'ds-probability',
    title: 'Data Science - Probability & Normal Distribution',
    slug: 'ds-probability',
    summary: 'The bell curve, Gaussian distribution, empirical rule (68-95-99.7%), and standard Z-scores.',
    readTime: '5 min',
    category: 'Data Science Mathematics',
    content: {
      overview: 'Many natural phenomena follow a normal (Gaussian) distribution, where observations cluster symmetrically around the central mean value in a bell curve.',
      sections: [
        {
          heading: 'The 68-95-99.7% Empirical Rule',
          body: 'Key properties of normal distributions:',
          code: `# In any normal distribution:
# ~68.2% of data points fall within 1 standard deviation (μ ± 1σ)
# ~95.4% of data points fall within 2 standard deviations (μ ± 2σ)
# ~99.7% of data points fall within 3 standard deviations (μ ± 3σ)

# Z-score formula: Z = (X - μ) / σ
# A Z-score greater than +3 or less than -3 indicates a statistical outlier.`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 12. Percentiles & Outliers
  {
    id: 'ds-percentiles',
    title: 'Data Science - Percentiles & Quartiles',
    slug: 'ds-percentiles',
    summary: 'Calculate percentiles, 25th/50th/75th quartiles, Interquartile Range (IQR), and detect anomalies.',
    readTime: '4 min',
    category: 'Data Science Mathematics',
    content: {
      overview: 'A percentile is a measure used in statistics indicating the value below which a given percentage of observations in a group of observations falls.',
      sections: [
        {
          heading: 'IQR Outlier Detection in Python',
          body: 'Calculating boundaries for outliers:',
          code: `import numpy as np

ages = [18, 22, 23, 25, 26, 28, 29, 32, 35, 78]

q25 = np.percentile(ages, 25) # First quartile (Q1)
q75 = np.percentile(ages, 75) # Third quartile (Q3)
iqr = q75 - q25

lower_bound = q25 - (1.5 * iqr)
upper_bound = q75 + (1.5 * iqr)

outliers = [x for x in ages if x < lower_bound or x > upper_bound]
print("Detected outliers:", outliers) # [78]`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 13. Correlation vs Causality
  {
    id: 'ds-correlation',
    title: 'Data Science - Correlation vs Causality',
    slug: 'ds-correlation',
    summary: 'Pearson correlation coefficient r (-1 to +1), correlation matrices, and understanding that correlation does not imply causality.',
    readTime: '5 min',
    category: 'Data Science Analytics',
    content: {
      overview: 'Correlation measures the statistical relationship between two variables. Correlation ranges from -1 (perfect negative linear relationship) to +1 (perfect positive linear relationship). Zero indicates no linear correlation.',
      sections: [
        {
          heading: 'Correlation Matrix in Pandas',
          body: 'Computing correlation between features:',
          code: `import pandas as pd

df = pd.DataFrame({
    'HoursStudied': [2, 3, 5, 7, 8],
    'PracticeTests': [1, 2, 4, 6, 7],
    'ExamScore': [60, 68, 80, 92, 98]
})

corr_matrix = df.corr()
print(corr_matrix)
# HoursStudied vs ExamScore has r = 0.998 (very strong positive correlation)`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 14. Linear Regression
  {
    id: 'ds-linear-regression',
    title: 'Data Science - Linear Regression',
    slug: 'ds-linear-regression',
    summary: 'Train ordinary least squares (OLS) linear regression models with Scikit-Learn to forecast continuous numeric targets.',
    readTime: '5 min',
    category: 'Data Science Modeling',
    content: {
      overview: 'Linear regression estimates the linear mathematical relationship between one or more independent variables (features X) and a dependent target (y).',
      sections: [
        {
          heading: 'Training a Linear Regression Model',
          body: 'Using Python and scikit-learn:',
          code: `from sklearn.linear_model import LinearRegression
import numpy as np

# Training features (Hours Studied) and Targets (Exam Scores):
X = np.array([[1], [2], [3], [4], [5], [6]])
y = np.array([45, 52, 60, 68, 77, 85])

# Initialize and fit model:
model = LinearRegression()
model.fit(X, y)

# Predict score for 7 hours of study:
predicted_score = model.predict([[7]])
print(f"Predicted score: {predicted_score[0]:.1f}") # ~93.1
print(f"Slope (Coefficient): {model.coef_[0]:.2f}")
print(f"Intercept: {model.intercept_:.2f}")`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 15. Regression Table & Metrics
  {
    id: 'ds-regression-table',
    title: 'Data Science - Regression Table & R-Squared',
    slug: 'ds-regression-table',
    summary: 'Interpret regression summaries: R-squared ($R^2$), adjusted $R^2$, p-values, and statistical significance.',
    readTime: '5 min',
    category: 'Data Science Modeling',
    content: {
      overview: 'R-squared ($R^2$) represents the proportion of variance in the dependent variable that can be explained by the independent variables. Values range from 0 to 1 (or 0% to 100%).',
      sections: [
        {
          heading: 'Inspecting OLS Regression Results',
          body: 'Using statsmodels for in-depth statistical tables:',
          code: `import statsmodels.api as sm
import numpy as np

X = np.array([1, 2, 3, 4, 5, 6])
y = np.array([45, 52, 60, 68, 77, 85])

X_with_const = sm.add_constant(X)
model = sm.OLS(y, X_with_const).fit()

print(model.summary())
# Key indicators:
# R-squared: 0.998
# P > |t| (p-value): < 0.001 (statistically highly significant)`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 16. Logistic Regression
  {
    id: 'ds-logistic-regression',
    title: 'Data Science - Logistic Regression',
    slug: 'ds-logistic-regression',
    summary: 'Predict discrete categorical probabilities using the sigmoid function and binary classification thresholds.',
    readTime: '5 min',
    category: 'Data Science Modeling',
    content: {
      overview: 'Despite the name, logistic regression is a classification algorithm. It maps linear combinations of features to a probability value between 0 and 1 using the Sigmoid curve.',
      sections: [
        {
          heading: 'Binary Classification with Logistic Regression',
          body: 'Predicting class probabilities in Python:',
          code: `from sklearn.linear_model import LogisticRegression
import numpy as np

# Features: [Account Age Months, Support Tickets]
X = np.array([[2, 8], [5, 6], [24, 1], [36, 0]])
y = np.array([1, 1, 0, 0]) # 1 = Churn, 0 = Retained

clf = LogisticRegression()
clf.fit(X, y)

# Predict probability of churn for a new customer [3 months, 7 tickets]:
prob = clf.predict_proba([[3, 7]])[0][1]
print(f"Probability of churn: {prob * 100:.1f}%")`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 17. Model Evaluation & Confusion Matrix
  {
    id: 'ds-evaluation',
    title: 'Data Science - Confusion Matrix & Evaluation',
    slug: 'ds-evaluation',
    summary: 'Evaluate model performance with train/test splits, confusion matrices, accuracy, precision, recall, and F1-score.',
    readTime: '5 min',
    category: 'Data Science Validation',
    content: {
      overview: 'Evaluating a model on unseen test data prevents overfitting and verifies whether the algorithm generalizes accurately to production data.',
      sections: [
        {
          heading: 'Confusion Matrix & Metrics',
          body: 'Calculating precision, recall, and classification report:',
          code: `from sklearn.metrics import classification_report, confusion_matrix
from sklearn.model_selection import train_test_split

# Split dataset into 80% train and 20% test:
# Precision = TP / (TP + FP)  (avoiding false alarms)
# Recall    = TP / (TP + FN)  (avoiding missed detections)
# F1-Score  = 2 * (Precision * Recall) / (Precision + Recall)

print("Evaluation framework: 80/20 train-test split")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Confusion Matrix Heatmap</h3>
    <table style="width:100%; border-collapse:collapse; background:white; font-size:14px; text-align:center;">
      <tr style="background:#f1f5f9;"><th style="padding:8px; border:1px solid #cbd5e1;">Actual \\ Predicted</th><th style="padding:8px; border:1px solid #cbd5e1; color:#4f46e5;">Pred: Positive</th><th style="padding:8px; border:1px solid #cbd5e1;">Pred: Negative</th></tr>
      <tr><td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold;">Actual: Positive</td><td style="padding:8px; border:1px solid #cbd5e1; background:#dbeafe; font-weight:bold; color:#1e40af;">True Positive: 95</td><td style="padding:8px; border:1px solid #cbd5e1; color:#dc2626;">False Negative: 5</td></tr>
      <tr><td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold;">Actual: Negative</td><td style="padding:8px; border:1px solid #cbd5e1; color:#dc2626;">False Positive: 3</td><td style="padding:8px; border:1px solid #cbd5e1; background:#dbeafe; font-weight:bold; color:#1e40af;">True Negative: 97</td></tr>
    </table>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
