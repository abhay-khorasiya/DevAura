import { TutorialChapter } from '../../types';

export const rChapters: TutorialChapter[] = [
  // 1. R HOME
  {
    id: 'r-home',
    title: 'R HOME',
    slug: 'r-home',
    summary: 'R is a leading programming language and software environment for statistical computing, data analysis, and scientific visualization.',
    readTime: '3 min',
    category: 'R Tutorial',
    content: {
      overview: 'R is widely used by statisticians, data scientists, and researchers in academia and industry to manipulate datasets, perform statistical modeling, and generate publication-quality figures.',
      sections: [
        {
          heading: 'Your First R Code',
          body: 'Assigning a value using R’s signature left-arrow operator and printing:',
          code: `greeting <- "Hello, DevAura Data Science!"
print(greeting)`,
          codeLanguage: 'r',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">R Console Output</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">[1] "Hello, DevAura Data Science!"</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. R Intro
  {
    id: 'r-intro',
    title: 'R Introduction',
    slug: 'r-intro',
    summary: 'Discover why R is the standard in statistical analysis, machine learning, and bioinformatics.',
    readTime: '4 min',
    category: 'R Tutorial',
    content: {
      overview: 'Developed by Ross Ihaka and Robert Gentleman in 1993, R is an implementation of the S programming language. It possesses an extensive ecosystem of over 20,000 packages on CRAN (Comprehensive R Archive Network) including ggplot2, dplyr, and tidyr.',
      sections: [
        {
          heading: 'Why Learn R?',
          body: '1. First-class statistical test support (t-tests, ANOVA, linear regression).\n2. Unmatched plotting capabilities with base graphics and ggplot2.\n3. Native vectorization: operations apply to entire datasets without explicit loops.',
          code: `# Vectorized addition in R
prices <- c(10, 25, 50)
taxed_prices <- prices * 1.15
print(taxed_prices) # Output: 11.5 28.75 57.5`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 3. R Get Started
  {
    id: 'r-getstarted',
    title: 'R Get Started',
    slug: 'r-getstarted',
    summary: 'Set up R and the Posit RStudio IDE on Windows, macOS, or Linux.',
    readTime: '3 min',
    category: 'R Tutorial',
    content: {
      overview: 'To start developing in R, download the base R binary from CRAN (cran.r-project.org) and install the RStudio IDE from Posit (posit.co).',
      sections: [
        {
          heading: 'Running R Scripts from Terminal',
          body: 'You can execute R scripts directly from your command line:',
          code: `# Save script as script.R
# Execute using Rscript:
Rscript script.R`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 4. R Syntax
  {
    id: 'r-syntax',
    title: 'R Syntax & Comments',
    slug: 'r-syntax',
    summary: 'R syntax rules, comments (#), and the assignment operator <- vs =.',
    readTime: '4 min',
    category: 'R Basics',
    content: {
      overview: 'In R, statements do not require semicolons. Comments start with #. The standard idiomatic assignment operator is <-, although = is also supported.',
      sections: [
        {
          heading: 'Writing R Statements',
          body: 'Basic syntax structure:',
          code: `# This is a comment
x <- 100
y <- 25
sum_result <- x + y

# Outputting to the console:
print(sum_result)
cat("The sum is:", sum_result, "\\n")`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 5. R Variables
  {
    id: 'r-variables',
    title: 'R Variables',
    slug: 'r-variables',
    summary: 'Naming rules, case sensitivity, and multiple variable assignments.',
    readTime: '4 min',
    category: 'R Basics',
    content: {
      overview: 'Variable names in R can contain letters, numbers, dot (.), and underscore (_). They must start with a letter or a dot not followed by a number.',
      sections: [
        {
          heading: 'Variable Assignment in R',
          body: 'Assigning values and chaining:',
          code: `# Valid variable names:
my_var <- "DevAura"
my.var <- 42
.my_hidden_var <- TRUE

# Assign multiple variables at once:
var1 <- var2 <- var3 <- "Orange"`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 6. R Data Types
  {
    id: 'r-data-types',
    title: 'R Data Types',
    slug: 'r-data-types',
    summary: 'Explore R’s fundamental classes: numeric, integer (L), complex (i), character, and logical.',
    readTime: '4 min',
    category: 'R Basics',
    content: {
      overview: 'R does not require variable type declarations. It dynamically infers data types. The class() function checks a variable’s type.',
      sections: [
        {
          heading: 'Core Data Types in R',
          body: 'Every value in R belongs to a class:',
          code: `my_num <- 42.5        # numeric (floating point)
my_int <- 42L         # integer (denoted by trailing L)
my_char <- "DevAura"  # character (string)
my_logical <- TRUE    # logical (TRUE or FALSE)
my_complex <- 3 + 2i  # complex number

cat("Type of my_num:", class(my_num), "\\n")
cat("Type of my_int:", class(my_int), "\\n")
cat("Type of my_logical:", class(my_logical), "\\n")`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 7. R Numbers & Conversions
  {
    id: 'r-numbers',
    title: 'R Numbers & Type Conversions',
    slug: 'r-numbers',
    summary: 'Convert between numeric, integer, and character representations using as.numeric() and as.integer().',
    readTime: '3 min',
    category: 'R Basics',
    content: {
      overview: 'You can convert between types using as.numeric(), as.integer(), and as.character().',
      sections: [
        {
          heading: 'Type Conversions',
          body: 'Explicit coercion functions:',
          code: `x <- 1L # integer
y <- 2   # numeric

a <- as.numeric(x)    # converts integer to numeric
b <- as.integer(y)    # converts numeric to integer
c <- as.character(42) # converts number to string "42"`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 8. R Math
  {
    id: 'r-math',
    title: 'R Math Functions',
    slug: 'r-math',
    summary: 'Built-in mathematical operations: sqrt, abs, ceiling, floor, min, and max.',
    readTime: '4 min',
    category: 'R Basics',
    content: {
      overview: 'R includes rich built-in mathematical functions for scientific calculations without requiring external libraries.',
      sections: [
        {
          heading: 'Common Math Functions',
          body: 'Math functions operating on scalars and vectors:',
          code: `sqrt(144)         # 12
abs(-45.8)        # 45.8
ceiling(4.1)      # 5
floor(4.9)        # 4
round(3.14159, 2) # 3.14
max(5, 10, 15)    # 15
min(5, 10, 15)    # 5`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 9. R Strings
  {
    id: 'r-strings',
    title: 'R Strings',
    slug: 'r-strings',
    summary: 'Manipulate text strings with nchar(), paste(), grepl(), and toupper().',
    readTime: '4 min',
    category: 'R Basics',
    content: {
      overview: 'Strings in R can be enclosed in single or double quotes. Functions like paste() concatenate strings with separators.',
      sections: [
        {
          heading: 'String Functions in R',
          body: 'Working with text data:',
          code: `txt <- "R Statistical Computing"

# String length:
nchar(txt) # 27

# Check if pattern exists:
grepl("Computing", txt) # TRUE

# Concatenate strings:
paste("Data", "Science", "Track", sep = " - ")
# "Data - Science - Track"

# Upper and lowercase:
toupper(txt) # "R STATISTICAL COMPUTING"`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 10. R Booleans
  {
    id: 'r-booleans',
    title: 'R Booleans & Comparison Operators',
    slug: 'r-booleans',
    summary: 'Logical evaluations (TRUE / FALSE or T / F) and comparison checks (==, !=, >, <, >=, <=).',
    readTime: '3 min',
    category: 'R Basics',
    content: {
      overview: 'Booleans represent one of two values: TRUE or FALSE. In R, you can also use shorthand T and F.',
      sections: [
        {
          heading: 'Logical Comparisons',
          body: 'Testing conditions:',
          code: `10 > 9    # TRUE
10 == 9   # FALSE
10 < 9    # FALSE

# Logical operators: & (AND), | (OR), ! (NOT)
x <- 7
x > 5 & x < 10 # TRUE`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 11. R Conditions: If...Else
  {
    id: 'r-conditions',
    title: 'R Conditions: If...Else & ifelse()',
    slug: 'r-conditions',
    summary: 'Branching execution with if, else if, else, and the vectorized ifelse() function.',
    readTime: '4 min',
    category: 'R Control Flow',
    content: {
      overview: 'Conditional statements execute code blocks based on logical boolean evaluations (TRUE or FALSE).',
      sections: [
        {
          heading: 'If...Else & Vectorized ifelse()',
          body: 'Conditional syntax in R:',
          code: `score <- 85

if (score >= 90) {
  print("Grade: A")
} else if (score >= 80) {
  print("Grade: B")
} else {
  print("Grade: C")
}

# Vectorized ifelse() over entire arrays:
scores <- c(95, 72, 88, 60)
results <- ifelse(scores >= 75, "Pass", "Retest")
print(results) # "Pass" "Retest" "Pass" "Retest"`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 12. R While Loops
  {
    id: 'r-loops-while',
    title: 'R While Loops',
    slug: 'r-loops-while',
    summary: 'Execute code while condition remains TRUE, with break and next control keywords.',
    readTime: '4 min',
    category: 'R Control Flow',
    content: {
      overview: 'A while loop executes a block of code as long as a specified condition evaluates to TRUE.',
      sections: [
        {
          heading: 'While Loop with break and next',
          body: 'Loop control in R (next is equivalent to continue in C/JS):',
          code: `i <- 1
while (i < 6) {
  if (i == 3) {
    i <- i + 1
    next # Skip 3
  }
  print(i)
  if (i == 5) {
    break # Terminate loop
  }
  i <- i + 1
}`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 13. R For Loops
  {
    id: 'r-loops-for',
    title: 'R For Loops',
    slug: 'r-loops-for',
    summary: 'Iterate over ranges, sequences, and vectors with for (variable in sequence).',
    readTime: '4 min',
    category: 'R Control Flow',
    content: {
      overview: 'A for loop is used for iterating over a sequence (such as a range or a vector).',
      sections: [
        {
          heading: 'For Loop Examples',
          body: 'Iterating through sequences:',
          code: `# Loop through range:
for (x in 1:5) {
  print(x)
}

# Loop through character vector:
fruits <- c("Apple", "Banana", "Cherry")
for (f in fruits) {
  print(f)
}`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 14. R Functions
  {
    id: 'r-functions',
    title: 'R Functions',
    slug: 'r-functions',
    summary: 'Define reusable functions, assign default argument values, and understand global assignment (<<-).',
    readTime: '4 min',
    category: 'R Functions',
    content: {
      overview: 'A function in R is defined using the function() keyword and assigned to a variable name. By default, the value of the last evaluated expression is returned automatically.',
      sections: [
        {
          heading: 'Defining and Calling Functions',
          body: 'Function syntax:',
          code: `# Function with default parameter
calculate_bmi <- function(weight_kg, height_m = 1.75) {
  bmi <- weight_kg / (height_m^2)
  return(round(bmi, 1))
}

# Calling by positional and named arguments:
print(calculate_bmi(70, 1.75)) # 22.9
print(calculate_bmi(weight_kg = 82)) # uses default height`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 15. R Vectors
  {
    id: 'r-vectors',
    title: 'R Vectors',
    slug: 'r-vectors',
    summary: 'Master R’s fundamental vector data structure: c(), slicing, 1-based indexing, and sequences.',
    readTime: '5 min',
    category: 'R Data Structures',
    content: {
      overview: 'A vector is the most basic data structure in R. It holds elements of the same type. Note that R uses 1-based indexing, NOT 0-based indexing!',
      sections: [
        {
          heading: 'Vector Creation & Indexing',
          body: 'Using c() combine function:',
          code: `# Create vector:
primes <- c(2, 3, 5, 7, 11, 13)

# 1-based indexing:
primes[1]      # 2
primes[3]      # 5

# Slicing ranges:
primes[2:4]    # 3, 5, 7

# Negative indexing excludes elements:
primes[-1]     # 3, 5, 7, 11, 13 (all except first)

# Vector sequence generator:
seq_vec <- seq(from = 0, to = 20, by = 5) # 0 5 10 15 20`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 16. R Lists
  {
    id: 'r-lists',
    title: 'R Lists',
    slug: 'r-lists',
    summary: 'Store heterogeneous data types (numbers, strings, vectors, other lists) within a single list using list().',
    readTime: '4 min',
    category: 'R Data Structures',
    content: {
      overview: 'Unlike vectors which require all elements to be the same data type, lists in R can hold elements of different types.',
      sections: [
        {
          heading: 'Creating and Indexing Lists',
          body: 'Single bracket [ ] vs double bracket [[ ]]:',
          code: `my_list <- list(
  name = "Abhay",
  age = 22,
  scores = c(95, 88, 92),
  active = TRUE
)

# Single bracket returns a sub-list:
my_list[1]

# Double bracket returns the actual value:
my_list[[1]]      # "Abhay"
my_list$scores    # c(95, 88, 92)`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 17. R Matrices
  {
    id: 'r-matrices',
    title: 'R Matrices',
    slug: 'r-matrices',
    summary: 'Two-dimensional homogenous rectangular layouts created with matrix(data, nrow, ncol).',
    readTime: '4 min',
    category: 'R Data Structures',
    content: {
      overview: 'A matrix is a two-dimensional grid of data elements of the same type.',
      sections: [
        {
          heading: 'Matrix Creation and Slicing',
          body: 'Rows and columns indexing [row, col]:',
          code: `# Create a 2x3 matrix:
mat <- matrix(c(1, 2, 3, 4, 5, 6), nrow = 2, ncol = 3)

# Access row 1, col 2:
mat[1, 2] # 3

# Access entire first row:
mat[1, ]

# Access entire second column:
mat[, 2]`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 18. R Arrays
  {
    id: 'r-arrays',
    title: 'R Arrays',
    slug: 'r-arrays',
    summary: 'Multi-dimensional data structures created with array(data, dim = c(rows, cols, matrices)).',
    readTime: '4 min',
    category: 'R Data Structures',
    content: {
      overview: 'While matrices are 2-dimensional, arrays in R can have any number of dimensions.',
      sections: [
        {
          heading: '3D Arrays in R',
          body: 'Defining multi-dimensional arrays:',
          code: `# Create array with two 2x3 matrices:
multi_array <- array(1:12, dim = c(2, 3, 2))

# Access row 1, col 2 in 2nd matrix:
multi_array[1, 2, 2]`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 19. R Data Frames
  {
    id: 'r-data-frames',
    title: 'R Data Frames',
    slug: 'r-data-frames',
    summary: 'Tabular data analysis with data.frame(), summary(), dim(), and column extraction with $.',
    readTime: '5 min',
    category: 'R Data Structures',
    content: {
      overview: 'A data frame is a 2-dimensional tabular structure where each column can contain a different data type. It is the primary structure for data analysis in R.',
      sections: [
        {
          heading: 'Creating and Inspecting Data Frames',
          body: 'Working with tabular datasets:',
          code: `students <- data.frame(
  Name = c("Alice", "Bob", "Charlie", "Diana"),
  Age = c(22, 24, 23, 21),
  Score = c(92.5, 84.0, 78.5, 96.0)
)

# Print summary statistics:
summary(students)

# Access column using $:
mean(students$Score) # 87.75

# Filter rows:
high_scorers <- students[students$Score > 85, ]`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 20. R Factors
  {
    id: 'r-factors',
    title: 'R Factors',
    slug: 'r-factors',
    summary: 'Model categorical data with defined levels using factor(data, levels).',
    readTime: '4 min',
    category: 'R Data Structures',
    content: {
      overview: 'Factors are used to represent categorical data and can be ordered or unordered. They are stored as integers with corresponding string labels.',
      sections: [
        {
          heading: 'Working with Factors',
          body: 'Creating factor levels:',
          code: `sizes <- factor(c("M", "L", "S", "M", "XL", "L"))
print(sizes)
print(levels(sizes)) # "L" "M" "S" "XL"`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 21. R Graphics & Plotting
  {
    id: 'r-plots',
    title: 'R Graphics & Plotting',
    slug: 'r-plots',
    summary: 'Generate scatter plots, line charts, bar plots, and histograms using base graphics.',
    readTime: '5 min',
    category: 'R Graphics',
    content: {
      overview: 'R is famous for its built-in graphics engine. The plot() function draws scatter plots, line diagrams, and custom visual charts.',
      sections: [
        {
          heading: 'Base Graphics Examples',
          body: 'Drawing scatter plots and bar charts:',
          code: `# Scatter plot:
x <- c(1, 2, 3, 4, 5, 6, 7)
y <- c(10, 15, 13, 22, 28, 25, 36)

plot(x, y, 
     main = "Revenue Growth Over Time",
     xlab = "Month",
     ylab = "Revenue ($K)",
     col = "#4f46e5",
     pch = 19,
     type = "b") # "b" for both points and lines

# Bar plot:
sales <- c(30, 45, 65, 80)
barplot(sales, names.arg = c("Q1", "Q2", "Q3", "Q4"), col = "#0284c7")`,
          codeLanguage: 'r',
          interactive: true
        }
      ]
    }
  },

  // 22. R Statistics
  {
    id: 'r-statistics',
    title: 'R Statistical Analysis & Datasets',
    slug: 'r-statistics',
    summary: 'Mean, median, mode, quantile, and analyzing R’s built-in datasets like mtcars.',
    readTime: '5 min',
    category: 'R Statistics',
    content: {
      overview: 'R comes bundled with classic datasets (like mtcars and iris) to practice statistical formulas immediately.',
      sections: [
        {
          heading: 'Statistical Analysis on mtcars',
          body: 'Inspecting built-in datasets:',
          code: `# Built-in dataset mtcars:
data(mtcars)
head(mtcars)

# Calculate summary stats:
mean(mtcars$mpg)     # 20.09
median(mtcars$hp)    # 123
quantile(mtcars$wt)  # percentiles 0%, 25%, 50%, 75%, 100%`,
          codeLanguage: 'r',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">R mtcars Summary Statistics</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">        mpg              hp              wt       
 Min.   :10.40    Min.   : 52.0    Min.   :1.513  
 1st Qu.:15.43    1st Qu.: 96.5    1st Qu.:2.581  
 Median :19.20    Median :123.0    Median :3.325  
 Mean   :20.09    Mean   :146.7    Mean   :3.217  
 3rd Qu.:22.80    3rd Qu.:180.0    3rd Qu.:3.610  
 Max.   :33.90    Max.   :335.0    Max.   :5.424</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
