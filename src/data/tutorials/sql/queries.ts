import { TutorialChapter } from '../../../types';

export const sqlQueriesChapters: TutorialChapter[] = [
  // 1. SQL HOME
  {
    id: 'sql-home',
    title: 'SQL HOME',
    slug: 'sql-home',
    summary: 'SQL is a standard language for storing, manipulating and retrieving data in databases.',
    readTime: '4 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'SQL stands for Structured Query Language. SQL lets you access and manipulate databases. SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987.',
      sections: [
        {
          heading: 'What Can SQL do?',
          body: 'SQL can execute queries against a database, retrieve data, insert records, update records, delete records, create new databases, create new tables, and set permissions on tables and procedures.',
          code: `-- Basic SQL Query:
SELECT CustomerName, City, Country 
FROM Customers 
WHERE Country = 'Germany';`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    th, td { padding: 8px 12px; border: 1px solid #e2e8f0; text-align: left; }
    th { background: #4f46e5; color: white; }
    tr:nth-child(even) { background: #f8fafc; }
  </style>
</head>
<body>
  <h3>Query Result: Customers in Germany</h3>
  <table>
    <thead><tr><th>CustomerName</th><th>City</th><th>Country</th></tr></thead>
    <tbody>
      <tr><td>Alfreds Futterkiste</td><td>Berlin</td><td>Germany</td></tr>
      <tr><td>Blauer See Delikatessen</td><td>Mannheim</td><td>Germany</td></tr>
      <tr><td>Königlich Essen</td><td>Brandenburg</td><td>Germany</td></tr>
    </tbody>
  </table>
</body>
</html>`,
          tips: [
            'SQL keywords are NOT case-sensitive: select is the same as SELECT, but uppercase is industry standard.'
          ]
        }
      ]
    }
  },

  // 2. SQL Intro
  {
    id: 'sql-intro',
    title: 'SQL Introduction',
    slug: 'sql-intro',
    summary: 'Understand RDBMS, database tables, fields, records, and primary relational concepts.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'RDBMS stands for Relational Database Management System. RDBMS is the basis for SQL, and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL, and Microsoft Access. The data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns and rows.',
      sections: [
        {
          heading: 'Tables, Records, and Fields',
          body: 'A table contains vertical columns called Fields (e.g., CustomerID, City) and horizontal rows called Records or Tuples.',
          code: `-- Structure of Customers Table:
-- CustomerID (Field) | CustomerName (Field) | Country (Field)
-- 1                  | Alfreds Futterkiste  | Germany (Record)`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>RDBMS Table Anatomy</h3>
  <div style="background: #eff6ff; border: 2px solid #3b82f6; padding: 16px; border-radius: 8px;">
    <p><b>Fields (Columns):</b> Specific attributes like CustomerID, Email, Balance.</p>
    <p><b>Records (Rows):</b> Individual data entities (one user per row).</p>
    <p><b>Primary Key:</b> A unique identifier ensuring zero duplicate rows.</p>
  </div>
</body>
</html>`,
          tips: [
            'Every table in a relational database should have a Primary Key column to uniquely identify each row.'
          ]
        }
      ]
    }
  },

  // 3. SQL Syntax
  {
    id: 'sql-syntax',
    title: 'SQL Syntax',
    slug: 'sql-syntax',
    summary: 'Database tables, clauses, statements, and semicolon terminator conventions.',
    readTime: '4 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'Most of the actions you need to perform on a database are done with SQL statements. Semicolons are the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call to the server.',
      sections: [
        {
          heading: 'Core SQL DML and DDL Commands',
          body: 'Common SQL keywords: SELECT, UPDATE, DELETE, INSERT INTO, CREATE DATABASE, ALTER DATABASE, CREATE TABLE, ALTER TABLE, DROP TABLE, CREATE INDEX, DROP INDEX.',
          code: `SELECT * FROM Customers;

SELECT DISTINCT Country FROM Customers;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>SQL Statement Anatomy</h3>
  <code style="background: #f1f5f9; padding: 8px 12px; border-radius: 6px; display: inline-block;">
    <b>SELECT</b> column1, column2 <b>FROM</b> table_name <b>WHERE</b> condition;
  </code>
</body>
</html>`,
          tips: [
            'Some database systems (like Oracle) require a semicolon at the end of each SQL statement.'
          ]
        }
      ]
    }
  },

  // 4. SQL SELECT
  {
    id: 'sql-select',
    title: 'SQL SELECT',
    slug: 'sql-select',
    summary: 'The SELECT statement is used to select data from a database. Learn SELECT * and SELECT DISTINCT.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set. The SELECT DISTINCT statement is used to return only distinct (different) values, eliminating duplicates.',
      sections: [
        {
          heading: 'Selecting Columns vs SELECT *',
          body: 'While SELECT * fetches all columns, specifying column names explicitly is much faster and reduces network transfer.',
          code: `-- Fetch specific columns (Best practice)
SELECT CustomerName, City, PostalCode FROM Customers;

-- Fetch all columns:
SELECT * FROM Customers;

-- Fetch unique countries:
SELECT DISTINCT Country FROM Customers;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 6px 10px; border: 1px solid #cbd5e1; text-align: left; }
    th { background: #4f46e5; color: white; }
  </style>
</head>
<body>
  <h3>SELECT DISTINCT Country Results</h3>
  <table>
    <thead><tr><th>Country</th></tr></thead>
    <tbody>
      <tr><td>Brazil</td></tr>
      <tr><td>Germany</td></tr>
      <tr><td>Japan</td></tr>
      <tr><td>USA</td></tr>
    </tbody>
  </table>
</body>
</html>`,
          tips: [
            'Avoid using SELECT * in production queries to keep payloads lightweight.'
          ]
        }
      ]
    }
  },

  // 5. SQL WHERE
  {
    id: 'sql-where',
    title: 'SQL WHERE',
    slug: 'sql-where',
    summary: 'The WHERE clause is used to filter records that fulfill a specified condition.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The WHERE clause is used to filter records. It is used to extract only those records that fulfill a specified condition. The WHERE clause is not only used in SELECT statements, it is also used in UPDATE, DELETE, etc.!',
      sections: [
        {
          heading: 'Text Fields vs. Numeric Fields',
          body: 'SQL requires single quotes around text values. Most database systems will also accept double quotes. Numeric fields should not be enclosed in quotes.',
          code: `-- Numeric condition (No quotes)
SELECT * FROM Customers 
WHERE CustomerID = 1;

-- Text condition (Single quotes required)
SELECT * FROM Customers 
WHERE City = 'London';

-- Operators: =, >, <, >=, <=, <>, BETWEEN, LIKE, IN
SELECT * FROM Products 
WHERE Price >= 50 AND Price <= 100;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 6px 10px; border: 1px solid #cbd5e1; text-align: left; }
    th { background: #0284c7; color: white; }
  </style>
</head>
<body>
  <h3>WHERE Price &gt;= 50 Filter</h3>
  <table>
    <thead><tr><th>ProductName</th><th>Price</th></tr></thead>
    <tbody>
      <tr><td>Carnarvon Tigers</td><td>$62.50</td></tr>
      <tr><td>Sir Rodney's Marmalade</td><td>$81.00</td></tr>
      <tr><td>Côte de Blaye</td><td>$263.50</td></tr>
    </tbody>
  </table>
</body>
</html>`,
          tips: [
            'In some versions of SQL the "not equal" operator may be written as != instead of <>.'
          ]
        }
      ]
    }
  },

  // 6. SQL ORDER BY
  {
    id: 'sql-order-by',
    title: 'SQL ORDER BY',
    slug: 'sql-order-by',
    summary: 'The ORDER BY keyword is used to sort the result-set in ascending or descending order.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The ORDER BY keyword is used to sort the result-set in ascending or descending order. The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.',
      sections: [
        {
          heading: 'Ordering by Multiple Columns',
          body: 'You can sort by multiple columns where subsequent columns break ties.',
          code: `-- Sort ascending (default)
SELECT * FROM Customers 
ORDER BY Country;

-- Sort descending
SELECT * FROM Products 
ORDER BY Price DESC;

-- Multi-column sort:
-- First by Country ASC, then by CustomerName DESC:
SELECT * FROM Customers 
ORDER BY Country ASC, CustomerName DESC;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 6px 10px; border: 1px solid #cbd5e1; text-align: left; }
    th { background: #4f46e5; color: white; }
  </style>
</head>
<body>
  <h3>ORDER BY Price DESC</h3>
  <table>
    <thead><tr><th>Product</th><th>Price</th></tr></thead>
    <tbody>
      <tr><td>Côte de Blaye</td><td>$263.50</td></tr>
      <tr><td>Thüringer Rostbratwurst</td><td>$123.79</td></tr>
      <tr><td>Mishi Kobe Niku</td><td>$97.00</td></tr>
    </tbody>
  </table>
</body>
</html>`,
          tips: [
            'Use ORDER BY 1, 2 to sort by the 1st and 2nd columns in your SELECT clause.'
          ]
        }
      ]
    }
  },

  // 7. SQL AND, OR, NOT
  {
    id: 'sql-and-or-not',
    title: 'SQL AND, OR, NOT',
    slug: 'sql-and-or-not',
    summary: 'Combine multiple conditions in WHERE clauses using AND, OR, and NOT operators.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The WHERE clause can be combined with AND, OR, and NOT operators. The AND and OR operators are used to filter records based on more than one condition: AND displays a record if all conditions are true; OR displays a record if any condition is true; NOT displays a record if the condition is NOT true.',
      sections: [
        {
          heading: 'Combining AND, OR, and NOT with Parentheses',
          body: 'Always use parentheses to ensure the desired operator precedence when mixing AND and OR.',
          code: `-- AND: Both must be true
SELECT * FROM Customers 
WHERE Country = 'Germany' AND City = 'Berlin';

-- OR: At least one must be true
SELECT * FROM Customers 
WHERE City = 'Berlin' OR City = 'München';

-- NOT: Negation
SELECT * FROM Customers 
WHERE NOT Country = 'Germany';

-- Complex combinations with parentheses:
SELECT * FROM Customers 
WHERE Country = 'Germany' AND (City = 'Berlin' OR City = 'München');`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Logical Precedence Demo</h3>
  <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:16px; border-radius:6px;">
    <code>WHERE Country = 'Germany' AND (City = 'Berlin' OR City = 'Stuttgart');</code>
    <p style="color:#475569; margin-top:8px;">Parentheses guarantee that OR conditions evaluate together before the AND requirement.</p>
  </div>
</body>
</html>`,
          tips: [
            'Without parentheses, AND has higher precedence than OR, which can lead to unexpected query results.'
          ]
        }
      ]
    }
  },

  // 8. SQL INSERT INTO
  {
    id: 'sql-insert-into',
    title: 'SQL INSERT INTO',
    slug: 'sql-insert-into',
    summary: 'The INSERT INTO statement is used to insert new records in a table.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'It is possible to write the INSERT INTO statement in two ways: 1. Specify both the column names and the values to be inserted, or 2. If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query.',
      sections: [
        {
          heading: 'Inserting New Records',
          body: 'Specifying column names is recommended to protect your queries if columns are added to the schema later.',
          code: `-- Specify columns & values (Recommended)
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

-- Insert into specific columns only (other columns receive default/NULL):
INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Greentech', 'Tokyo', 'Japan');`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>INSERT INTO Confirmation</h3>
  <p style="color: #16a34a; font-weight: bold;">Query OK, 1 row affected (0.01 sec)</p>
  <code>INSERT INTO Customers (CustomerName, Country) VALUES ('Cardinal', 'Norway');</code>
</body>
</html>`,
          tips: [
            'Auto-increment primary key columns (like CustomerID) do not need to be specified in INSERT statements.'
          ]
        }
      ]
    }
  },

  // 9. SQL NULL Values
  {
    id: 'sql-null-values',
    title: 'SQL NULL Values',
    slug: 'sql-null-values',
    summary: 'A field with a NULL value is a field with no value. Test for NULL using IS NULL and IS NOT NULL.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'A field with a NULL value is a field with no value. If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value. Note: NULL is different from zero or empty spaces.',
      sections: [
        {
          heading: 'IS NULL and IS NOT NULL Operators',
          body: 'It is not possible to test for NULL values with comparison operators, such as =, <, or <>. We have to use the IS NULL and IS NOT NULL operators instead.',
          code: `-- Finding missing data:
SELECT CustomerName, ContactName, Address 
FROM Customers 
WHERE Address IS NULL;

-- Finding populated records:
SELECT CustomerName, ContactName, Address 
FROM Customers 
WHERE Address IS NOT NULL;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>IS NULL vs = NULL</h3>
  <p><b>Correct:</b> <code>WHERE PostalCode IS NULL;</code></p>
  <p><b>Incorrect:</b> <code>WHERE PostalCode = NULL;</code> (Always returns empty set because NULL cannot equal NULL!)</p>
</body>
</html>`,
          tips: [
            'Never write column = NULL; in SQL three-valued logic, NULL = NULL evaluates to UNKNOWN, not TRUE.'
          ]
        }
      ]
    }
  },

  // 10. SQL UPDATE
  {
    id: 'sql-update',
    title: 'SQL UPDATE',
    slug: 'sql-update',
    summary: 'The UPDATE statement is used to modify the existing records in a table. Always include WHERE!',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The UPDATE statement is used to modify the existing records in a table. Be careful when updating records in a table! Notice the WHERE clause in the UPDATE statement. The WHERE clause specifies which record(s) that should be updated. If you omit the WHERE clause, ALL records in the table will be updated!',
      sections: [
        {
          heading: 'Updating Multiple Columns & The Safety Warning',
          body: 'Separate multiple column assignments with commas.',
          code: `-- Update a single customer record:
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
WHERE CustomerID = 1;

-- DANGER: Omitting WHERE updates ALL rows!
-- UPDATE Customers SET City = 'Berlin'; -- ALL customers will become Berlin!`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>UPDATE Execution Result</h3>
  <p style="color: #4f46e5; font-weight: bold;">Rows matched: 1  Changed: 1  Warnings: 0</p>
  <p>CustomerID 1 now has City = 'Frankfurt'.</p>
</body>
</html>`,
          tips: [
            'Before running an UPDATE, run a SELECT with the exact same WHERE clause to verify which records will be affected.'
          ]
        }
      ]
    }
  },

  // 11. SQL DELETE
  {
    id: 'sql-delete',
    title: 'SQL DELETE',
    slug: 'sql-delete',
    summary: 'The DELETE statement is used to delete existing records in a table. Understand DELETE vs TRUNCATE.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The DELETE statement is used to delete existing records in a table. Notice the WHERE clause in the DELETE statement. The WHERE clause specifies which record(s) should be deleted. If you omit the WHERE clause, all records in the table will be deleted!',
      sections: [
        {
          heading: 'Deleting Specific Records and Table Truncation',
          body: 'DELETE FROM table WHERE ... removes specific rows. TRUNCATE TABLE table removes all rows instantly while preserving schema structure.',
          code: `-- Delete specific record:
DELETE FROM Customers 
WHERE CustomerName = 'Alfreds Futterkiste';

-- Delete ALL records (slow, logs each row):
DELETE FROM Customers;

-- Truncate Table (fast, resets auto-increment):
TRUNCATE TABLE Customers;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>DELETE Confirmation</h3>
  <p style="color: #dc2626; font-weight: bold;">Query OK, 1 row affected.</p>
  <code>DELETE FROM Customers WHERE CustomerID = 15;</code>
</body>
</html>`,
          tips: [
            'Always wrap critical DELETE operations in a transaction (BEGIN TRANSACTION ... ROLLBACK/COMMIT) when executing manually in production.'
          ]
        }
      ]
    }
  },

  // 12. SQL TOP / LIMIT
  {
    id: 'sql-top',
    title: 'SQL TOP / LIMIT / FETCH FIRST',
    slug: 'sql-top',
    summary: 'The SELECT TOP / LIMIT clause specifies the number of records to return, useful on large tables.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The SELECT TOP clause is used to specify the number of records to return. The SELECT TOP clause is useful on large tables with thousands of records. Returning a large number of records can impact performance. Different RDBMS engines use different syntax (LIMIT in MySQL/PostgreSQL, TOP in SQL Server, FETCH FIRST in modern ISO).',
      sections: [
        {
          heading: 'RDBMS Syntax Differences for Pagination',
          body: 'Pagination combines LIMIT and OFFSET to fetch pages of records.',
          code: `-- MySQL / PostgreSQL / SQLite:
SELECT * FROM Customers 
LIMIT 5;

-- Pagination: 10 items per page, skipping first 20 (Page 3):
SELECT * FROM Customers 
LIMIT 10 OFFSET 20;

-- SQL Server / MS Access:
SELECT TOP 5 * FROM Customers;

-- Modern ANSI Standard:
SELECT * FROM Customers 
ORDER BY CustomerID 
OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 6px 10px; border: 1px solid #cbd5e1; text-align: left; }
    th { background: #4f46e5; color: white; }
  </style>
</head>
<body>
  <h3>LIMIT 3 Result</h3>
  <table>
    <thead><tr><th>ID</th><th>Customer</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Alfreds Futterkiste</td></tr>
      <tr><td>2</td><td>Ana Trujillo Emparedados</td></tr>
      <tr><td>3</td><td>Antonio Moreno Taquería</td></tr>
    </tbody>
  </table>
</body>
</html>`,
          tips: [
            'Always pair LIMIT or TOP with an ORDER BY clause for deterministic pagination.'
          ]
        }
      ]
    }
  },

  // 13. SQL MIN and MAX
  {
    id: 'sql-min-max',
    title: 'SQL MIN() and MAX()',
    slug: 'sql-min-max',
    summary: 'The MIN() function returns the smallest value. The MAX() function returns the largest value.',
    readTime: '4 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The MIN() function returns the smallest value of the selected column. The MAX() function returns the largest value of the selected column. Both ignore NULL values.',
      sections: [
        {
          heading: 'Using MIN() and MAX() with Aliases',
          body: 'Assign an alias with AS to give the calculated result a readable column header.',
          code: `-- Smallest price:
SELECT MIN(Price) AS SmallestPrice 
FROM Products;

-- Largest price in specific category:
SELECT MAX(Price) AS MostExpensiveInCategory 
FROM Products 
WHERE CategoryID = 1;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>MIN and MAX Results</h3>
  <p>Lowest Price: <b>$2.50</b></p>
  <p>Highest Price: <b>$263.50</b></p>
</body>
</html>`,
          tips: [
            'MIN() and MAX() work on text strings too, returning alphabetical first and last values.'
          ]
        }
      ]
    }
  },

  // 14. SQL COUNT, AVG, SUM
  {
    id: 'sql-count-sum-avg',
    title: 'SQL COUNT(), AVG(), SUM()',
    slug: 'sql-count-sum-avg',
    summary: 'Aggregate functions: COUNT() counts rows, AVG() calculates average, and SUM() calculates totals.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The COUNT() function returns the number of rows that matches a specified criterion. The AVG() function returns the average value of a numeric column. The SUM() function returns the total sum of a numeric column.',
      sections: [
        {
          heading: 'COUNT(*) vs COUNT(column)',
          body: 'COUNT(*) counts all rows including NULLs. COUNT(column) counts only rows where the specified column is NOT NULL.',
          code: `-- Total number of products:
SELECT COUNT(ProductID) FROM Products;

-- Average price of products:
SELECT AVG(Price) AS AveragePrice FROM Products;

-- Total inventory quantity:
SELECT SUM(Quantity) AS TotalUnitsSold FROM OrderDetails;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Aggregate Metrics</h3>
  <div style="display:flex; gap:16px;">
    <div style="background:#e0e7ff; padding:12px; border-radius:6px; flex:1; text-align:center;">
      <div style="font-size:22px; font-weight:bold; color:#4338ca;">77</div>
      <div style="font-size:12px; color:#64748b;">COUNT(ProductID)</div>
    </div>
    <div style="background:#e0f2fe; padding:12px; border-radius:6px; flex:1; text-align:center;">
      <div style="font-size:22px; font-weight:bold; color:#0369a1;">$28.86</div>
      <div style="font-size:12px; color:#64748b;">AVG(Price)</div>
    </div>
  </div>
</body>
</html>`,
          tips: [
            'AVG() automatically ignores NULL values; it does not treat NULL as zero.'
          ]
        }
      ]
    }
  },

  // 15. SQL LIKE
  {
    id: 'sql-like',
    title: 'SQL LIKE',
    slug: 'sql-like',
    summary: 'The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'There are two wildcards often used in conjunction with the LIKE operator: The percent sign (%) represents zero, one, or multiple characters; The underscore sign (_) represents one, single character.',
      sections: [
        {
          heading: 'Pattern Matching Rules',
          body: 'Examples of patterns with % and _:',
          code: `-- Starts with 'a':
SELECT * FROM Customers WHERE CustomerName LIKE 'a%';

-- Ends with 'a':
SELECT * FROM Customers WHERE CustomerName LIKE '%a';

-- Has 'or' in any position:
SELECT * FROM Customers WHERE CustomerName LIKE '%or%';

-- Has 'r' in the second position:
SELECT * FROM Customers WHERE CustomerName LIKE '_r%';

-- Starts with 'a' and is at least 3 characters in length:
SELECT * FROM Customers WHERE CustomerName LIKE 'a__%';`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>LIKE 'a%' Result</h3>
  <ul>
    <li><b>A</b>lfreds Futterkiste</li>
    <li><b>A</b>na Trujillo Emparedados</li>
    <li><b>A</b>ntonio Moreno Taquería</li>
  </ul>
</body>
</html>`,
          tips: [
            'In SQLite and MS Access, LIKE is case-insensitive by default. In PostgreSQL, use ILIKE for case-insensitive matching.'
          ]
        }
      ]
    }
  },

  // 16. SQL IN
  {
    id: 'sql-in',
    title: 'SQL IN',
    slug: 'sql-in',
    summary: 'The IN operator allows you to specify multiple values in a WHERE clause as shorthand for multiple OR conditions.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The IN operator allows you to specify multiple values in a WHERE clause. The IN operator is a shorthand for multiple OR conditions. You can also use IN with subqueries to match against the results of another SELECT query.',
      sections: [
        {
          heading: 'IN Operator with Values and Subqueries',
          body: 'Using IN makes queries dramatically cleaner than chaining 10 OR conditions.',
          code: `-- IN with literal list:
SELECT * FROM Customers 
WHERE Country IN ('Germany', 'France', 'UK');

-- NOT IN:
SELECT * FROM Customers 
WHERE Country NOT IN ('Germany', 'France', 'UK');

-- IN with Subquery:
SELECT * FROM Customers 
WHERE CustomerID IN (SELECT CustomerID FROM Orders WHERE OrderDate >= '2026-01-01');`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>IN Operator Filter</h3>
  <code>SELECT * FROM Customers WHERE Country IN ('Germany', 'France', 'UK');</code>
  <p style="color:#16a34a; font-weight:bold; margin-top:8px;">Matches 29 records across 3 countries.</p>
</body>
</html>`,
          tips: [
            'Be careful with NOT IN if the subquery returns any NULL values, as the entire expression will evaluate to UNKNOWN and return zero rows.'
          ]
        }
      ]
    }
  },

  // 17. SQL BETWEEN
  {
    id: 'sql-between',
    title: 'SQL BETWEEN',
    slug: 'sql-between',
    summary: 'The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates. The BETWEEN operator is inclusive: begin and end values are included.',
      sections: [
        {
          heading: 'Numeric and Date Ranges',
          body: 'BETWEEN is inclusive of both boundary endpoints.',
          code: `-- Numeric range:
SELECT * FROM Products 
WHERE Price BETWEEN 10 AND 20;

-- NOT BETWEEN:
SELECT * FROM Products 
WHERE Price NOT BETWEEN 10 AND 20;

-- Date range:
SELECT * FROM Orders 
WHERE OrderDate BETWEEN '2026-01-01' AND '2026-06-30';`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>BETWEEN 10 AND 20</h3>
  <p>Fetches all products where <code>Price &gt;= 10 AND Price &lt;= 20</code> (both 10 and 20 are included).</p>
</body>
</html>`,
          tips: [
            'When using BETWEEN on DATETIME columns with timestamps, ensure the end boundary includes time (e.g. 23:59:59).'
          ]
        }
      ]
    }
  },

  // 18. SQL Aliases
  {
    id: 'sql-aliases',
    title: 'SQL Aliases',
    slug: 'sql-aliases',
    summary: 'SQL aliases are used to give a table, or a column in a table, a temporary name with the AS keyword.',
    readTime: '4 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'SQL aliases are used to give a table, or a column in a table, a temporary name. Aliases are often used to make column names more readable. An alias only exists for the duration of that query. An alias is created with the AS keyword.',
      sections: [
        {
          heading: 'Column Aliases and Table Aliases',
          body: 'Table aliases are critical when joining multiple tables together to prevent ambiguous column names.',
          code: `-- Column alias:
SELECT CustomerID AS ID, CustomerName AS Customer 
FROM Customers;

-- Concatenating with alias:
SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City AS FullAddress
FROM Customers;

-- Table alias:
SELECT o.OrderID, o.OrderDate, c.CustomerName 
FROM Orders AS o, Customers AS c 
WHERE o.CustomerID = c.CustomerID;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 6px 10px; border: 1px solid #cbd5e1; }
    th { background: #4f46e5; color: white; }
  </style>
</head>
<body>
  <h3>Aliased Columns: ID &amp; Customer</h3>
  <table>
    <thead><tr><th>ID</th><th>Customer</th></tr></thead>
    <tbody><tr><td>1</td><td>Alfreds Futterkiste</td></tr></tbody>
  </table>
</body>
</html>`,
          tips: [
            'The AS keyword is optional in many SQL dialects, but including it makes code much easier to read.'
          ]
        }
      ]
    }
  },

  // 19. SQL Joins
  {
    id: 'sql-joins',
    title: 'SQL Joins',
    slug: 'sql-joins',
    summary: 'Combine rows from two or more tables based on a related column: INNER, LEFT, RIGHT, FULL OUTER.',
    readTime: '7 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'A JOIN clause is used to combine rows from two or more tables, based on a related column between them. The 4 primary types of SQL Joins are: (INNER) JOIN (returns matching rows), LEFT (OUTER) JOIN (all from left + matched right), RIGHT (OUTER) JOIN (all from right + matched left), and FULL (OUTER) JOIN (all records with match on either side).',
      sections: [
        {
          heading: 'INNER JOIN vs. LEFT JOIN',
          body: 'INNER JOIN only returns rows that have matching values in both tables. LEFT JOIN returns all rows from the left table even if no match exists in the right table (filling right fields with NULL).',
          code: `-- INNER JOIN:
SELECT Orders.OrderID, Customers.CustomerName 
FROM Orders 
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;

-- LEFT JOIN (Includes customers with 0 orders):
SELECT Customers.CustomerName, Orders.OrderID 
FROM Customers 
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID 
ORDER BY Customers.CustomerName;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 8px 12px; border: 1px solid #cbd5e1; text-align: left; }
    th { background: #4f46e5; color: white; }
  </style>
</head>
<body>
  <h3>INNER JOIN Result-Set</h3>
  <table>
    <thead><tr><th>OrderID</th><th>CustomerName</th></tr></thead>
    <tbody>
      <tr><td>10248</td><td>Vins et alcools Chevalier</td></tr>
      <tr><td>10249</td><td>Toms Spezialitäten</td></tr>
      <tr><td>10250</td><td>Hanari Carnes</td></tr>
    </tbody>
  </table>
</body>
</html>`,
          tips: [
            'Always join on indexed columns (like primary and foreign keys) for optimal query execution performance.'
          ]
        }
      ]
    }
  },

  // 20. SQL UNION
  {
    id: 'sql-union',
    title: 'SQL UNION',
    slug: 'sql-union',
    summary: 'The UNION operator is used to combine the result-set of two or more SELECT statements.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The UNION operator is used to combine the result-set of two or more SELECT statements. Every SELECT statement within UNION must have the same number of columns, columns must have similar data types, and columns must be in the same order.',
      sections: [
        {
          heading: 'UNION vs. UNION ALL',
          body: 'UNION selects only distinct values. UNION ALL allows duplicate values and executes faster because it skips the deduplication sort step.',
          code: `-- Distinct cities from both tables:
SELECT City FROM Customers 
UNION 
SELECT City FROM Suppliers 
ORDER BY City;

-- All cities (including duplicates):
SELECT City FROM Customers 
UNION ALL 
SELECT City FROM Suppliers;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>UNION vs UNION ALL Performance</h3>
  <p><b>UNION:</b> Eliminates duplicates (triggers internal sorting pass).</p>
  <p><b>UNION ALL:</b> Retains duplicates (instant concatenation, best performance).</p>
</body>
</html>`,
          tips: [
            'If you know there are no duplicates between two queries, always use UNION ALL for maximum performance.'
          ]
        }
      ]
    }
  },

  // 21. SQL GROUP BY
  {
    id: 'sql-group-by',
    title: 'SQL GROUP BY',
    slug: 'sql-group-by',
    summary: 'The GROUP BY statement groups rows that have the same values into summary rows (like finding counts per country).',
    readTime: '6 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The GROUP BY statement groups rows that have the same values into summary rows, like "find the number of customers in each country". The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns.',
      sections: [
        {
          heading: 'Grouping with Aggregations',
          body: 'All non-aggregate columns in the SELECT clause must be listed in the GROUP BY clause.',
          code: `-- Count customers per country:
SELECT COUNT(CustomerID) AS TotalCustomers, Country 
FROM Customers 
GROUP BY Country 
ORDER BY TotalCustomers DESC;

-- Total sales per category:
SELECT Categories.CategoryName, SUM(OrderDetails.Quantity) AS UnitsSold 
FROM OrderDetails 
JOIN Products ON OrderDetails.ProductID = Products.ProductID 
JOIN Categories ON Products.CategoryID = Categories.CategoryID 
GROUP BY Categories.CategoryName;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 8px 12px; border: 1px solid #cbd5e1; text-align: left; }
    th { background: #0284c7; color: white; }
  </style>
</head>
<body>
  <h3>GROUP BY Country Results</h3>
  <table>
    <thead><tr><th>Country</th><th>TotalCustomers</th></tr></thead>
    <tbody>
      <tr><td>USA</td><td>13</td></tr>
      <tr><td>Germany</td><td>11</td></tr>
      <tr><td>France</td><td>11</td></tr>
      <tr><td>Brazil</td><td>9</td></tr>
    </tbody>
  </table>
</body>
</html>`,
          tips: [
            'Any column in SELECT that is not wrapped in an aggregate function MUST appear in the GROUP BY clause.'
          ]
        }
      ]
    }
  },

  // 22. SQL HAVING
  {
    id: 'sql-having',
    title: 'SQL HAVING',
    slug: 'sql-having',
    summary: 'The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions. WHERE filters rows BEFORE aggregation; HAVING filters groups AFTER aggregation.',
      sections: [
        {
          heading: 'WHERE vs. HAVING',
          body: 'Use WHERE to filter individual records. Use HAVING to filter aggregate group totals.',
          code: `-- Find countries with more than 5 customers:
SELECT COUNT(CustomerID), Country 
FROM Customers 
GROUP BY Country 
HAVING COUNT(CustomerID) > 5;

-- Combining WHERE and HAVING:
SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders 
FROM Orders 
INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID 
WHERE LastName = 'Davolio' OR LastName = 'Fuller' 
GROUP BY LastName 
HAVING COUNT(Orders.OrderID) > 25;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>HAVING COUNT(CustomerID) &gt; 5</h3>
  <p>Filters out all countries with 5 or fewer customers, returning only high-volume regions.</p>
</body>
</html>`,
          tips: [
            'Order of SQL execution: FROM &rarr; WHERE &rarr; GROUP BY &rarr; HAVING &rarr; SELECT &rarr; ORDER BY &rarr; LIMIT.'
          ]
        }
      ]
    }
  },

  // 23. SQL EXISTS
  {
    id: 'sql-exists',
    title: 'SQL EXISTS',
    slug: 'sql-exists',
    summary: 'The EXISTS operator tests for the existence of any record in a subquery, returning true if subquery finds rows.',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The EXISTS operator is used to test for the existence of any record in a subquery. The EXISTS operator returns TRUE if the subquery returns one or more records. It short-circuits as soon as a single match is found.',
      sections: [
        {
          heading: 'Correlated Subqueries with EXISTS',
          body: 'EXISTS is highly optimized because the database engine does not scan the full table once the first matching row is found.',
          code: `-- Return suppliers who have products with price < 20:
SELECT SupplierName 
FROM Suppliers 
WHERE EXISTS (
  SELECT ProductName 
  FROM Products 
  WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>EXISTS Operator Subquery</h3>
  <p>Returns only suppliers where matching items exist in Products.</p>
</body>
</html>`,
          tips: [
            'EXISTS is generally faster than IN when the subquery dataset is very large.'
          ]
        }
      ]
    }
  },

  // 24. SQL CASE
  {
    id: 'sql-case',
    title: 'SQL CASE',
    slug: 'sql-case',
    summary: 'The CASE expression goes through conditions and returns a value when the first condition is met (like if-then-else).',
    readTime: '5 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'The CASE expression goes through conditions and returns a value when the first condition is met (like an if-then-else statement). So, once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the ELSE clause.',
      sections: [
        {
          heading: 'Conditional Logic in Queries',
          body: 'CASE expressions can be placed inside SELECT, ORDER BY, and GROUP BY clauses.',
          code: `SELECT OrderID, Quantity,
CASE
  WHEN Quantity > 30 THEN 'The quantity is greater than 30'
  WHEN Quantity = 30 THEN 'The quantity is 30'
  ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 6px 10px; border: 1px solid #cbd5e1; }
    th { background: #4f46e5; color: white; }
  </style>
</head>
<body>
  <h3>CASE Result Column</h3>
  <table>
    <thead><tr><th>OrderID</th><th>Quantity</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>10248</td><td>12</td><td>Under 30</td></tr>
      <tr><td>10250</td><td>35</td><td>High Volume (&gt;30)</td></tr>
    </tbody>
  </table>
</body>
</html>`,
          tips: [
            'If there is no ELSE part and no conditions are true, CASE returns NULL.'
          ]
        }
      ]
    }
  },

  // 25. SQL NULL Functions
  {
    id: 'sql-null-functions',
    title: 'SQL NULL Functions',
    slug: 'sql-null-functions',
    summary: 'Replace NULL values with default values using COALESCE(), IFNULL(), ISNULL(), and NVL().',
    readTime: '4 min',
    category: 'SQL Tutorial',
    content: {
      overview: 'If any column value in an arithmetic expression is NULL, the result becomes NULL (e.g. Price * (UnitsInStock + UnitsOnOrder) becomes NULL if UnitsOnOrder is NULL). SQL provides functions like COALESCE() to substitute a default value.',
      sections: [
        {
          heading: 'COALESCE() Standard Function',
          body: 'COALESCE() is the ANSI standard function supported across MySQL, PostgreSQL, Oracle, SQLite, and SQL Server.',
          code: `-- COALESCE returns the first non-null argument:
SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0)) AS TotalInventoryValue
FROM Products;

-- Dialect specifics:
-- MySQL: IFNULL(val, 0)
-- SQL Server: ISNULL(val, 0)
-- Oracle: NVL(val, 0)
-- Universal ANSI: COALESCE(val, 0)`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>COALESCE Protection</h3>
  <p>COALESCE(UnitsOnOrder, 0) replaces NULL with 0, ensuring arithmetic sums never evaluate to NULL.</p>
</body>
</html>`,
          tips: [
            'Always use COALESCE() instead of engine-specific IFNULL or ISNULL for portable SQL.'
          ]
        }
      ]
    }
  }
];
