import { TutorialChapter } from '../../../types';

export const sqlDatabaseAndDdlChapters: TutorialChapter[] = [
  // 26. SQL CREATE DATABASE
  {
    id: 'sql-create-db',
    title: 'SQL CREATE DATABASE',
    slug: 'sql-create-db',
    summary: 'The CREATE DATABASE statement is used to create a new SQL database schema.',
    readTime: '4 min',
    category: 'SQL Database',
    content: {
      overview: 'The CREATE DATABASE statement is used to create a new SQL database. You must have admin/CREATE privileges in the RDBMS to execute this command.',
      sections: [
        {
          heading: 'Creating and Dropping Databases',
          body: 'Use DROP DATABASE to delete an existing database schema and all tables within it.',
          code: `-- Create a new database:
CREATE DATABASE myEcommerceDB;

-- Select active database (MySQL/SQL Server):
USE myEcommerceDB;

-- Drop database (Warning: Deletes all tables & data!):
DROP DATABASE myEcommerceDB;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>CREATE DATABASE Execution</h3>
  <p style="color: #16a34a; font-weight: bold;">Database "devaura_production" created successfully.</p>
</body>
</html>`,
          tips: [
            'Make sure you have administrative privileges before creating a database.'
          ]
        }
      ]
    }
  },

  // 27. SQL CREATE TABLE
  {
    id: 'sql-create-table',
    title: 'SQL CREATE TABLE',
    slug: 'sql-create-table',
    summary: 'The CREATE TABLE statement is used to create a new table in a database.',
    readTime: '5 min',
    category: 'SQL Database',
    content: {
      overview: 'The CREATE TABLE statement is used to create a new table in a database. The column parameters specify the names of the columns of the table, and the datatype parameter specifies what type of data the column can hold (e.g. varchar, integer, date).',
      sections: [
        {
          heading: 'Creating Tables with Constraints',
          body: 'Standard table creation with primary key, not null, and default constraints.',
          code: `CREATE TABLE Persons (
  PersonID int PRIMARY KEY,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255) DEFAULT 'New York',
  CreatedAt timestamp DEFAULT CURRENT_TIMESTAMP
);`,
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
  <h3>Table Schema Definition</h3>
  <table>
    <thead><tr><th>Column</th><th>Type</th><th>Null</th><th>Key</th></tr></thead>
    <tbody>
      <tr><td>PersonID</td><td>INT</td><td>NO</td><td>PRI</td></tr>
      <tr><td>LastName</td><td>VARCHAR(255)</td><td>NO</td><td></td></tr>
      <tr><td>City</td><td>VARCHAR(255)</td><td>YES</td><td></td></tr>
    </tbody>
  </table>
</body>
</html>`,
          tips: [
            'Create a table using another existing table: CREATE TABLE NewTable AS SELECT * FROM OldTable;'
          ]
        }
      ]
    }
  },

  // 28. SQL DROP TABLE
  {
    id: 'sql-drop-table',
    title: 'SQL DROP TABLE',
    slug: 'sql-drop-table',
    summary: 'The DROP TABLE statement is used to drop an existing table in a database. Contrast with TRUNCATE.',
    readTime: '4 min',
    category: 'SQL Database',
    content: {
      overview: 'The DROP TABLE statement is used to drop an existing table in a database. Be careful before dropping a table! Deleting a table will result in loss of complete information stored in the table! TRUNCATE TABLE deletes the data inside a table, but not the table itself.',
      sections: [
        {
          heading: 'DROP TABLE vs. TRUNCATE TABLE',
          body: 'DROP TABLE removes both table structure and data. TRUNCATE deletes rows while leaving the table structure intact.',
          code: `-- Drop table completely:
DROP TABLE Shippers;

-- Safe drop if table exists:
DROP TABLE IF EXISTS Shippers;

-- Truncate rows (Resets identity/auto-increment):
TRUNCATE TABLE Shippers;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>DROP TABLE IF EXISTS</h3>
  <p>Using <code>IF EXISTS</code> prevents query failure scripts when re-running database migrations.</p>
</body>
</html>`,
          tips: [
            'TRUNCATE is much faster than DELETE FROM table; because it does not scan each row or generate individual transaction rollback logs.'
          ]
        }
      ]
    }
  },

  // 29. SQL ALTER TABLE
  {
    id: 'sql-alter-table',
    title: 'SQL ALTER TABLE',
    slug: 'sql-alter-table',
    summary: 'The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.',
    readTime: '5 min',
    category: 'SQL Database',
    content: {
      overview: 'The ALTER TABLE statement is used to add, delete, or modify columns in an existing table. It is also used to add and drop various constraints on an existing table without rebuilding it from scratch.',
      sections: [
        {
          heading: 'Adding, Dropping, and Modifying Columns',
          body: 'Common ALTER TABLE commands:',
          code: `-- Add a new column:
ALTER TABLE Customers
ADD Email varchar(255);

-- Drop a column:
ALTER TABLE Customers
DROP COLUMN Email;

-- Modify column data type (MySQL/Oracle):
ALTER TABLE Customers
MODIFY COLUMN Email varchar(100);

-- SQL Server syntax:
-- ALTER TABLE Customers ALTER COLUMN Email varchar(100);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>ALTER TABLE Confirmation</h3>
  <p style="color: #16a34a; font-weight: bold;">Table 'Customers' altered successfully. Column 'Email' added.</p>
</body>
</html>`,
          tips: [
            'Some database systems do not allow dropping a column if it is referenced by a Foreign Key or Index.'
          ]
        }
      ]
    }
  },

  // 30. SQL Constraints
  {
    id: 'sql-constraints',
    title: 'SQL Constraints',
    slug: 'sql-constraints',
    summary: 'SQL constraints are used to specify rules for the data in a table: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT.',
    readTime: '5 min',
    category: 'SQL Database',
    content: {
      overview: 'SQL constraints are used to specify rules for data in a table. Constraints can be specified when the table is created with the CREATE TABLE statement, or after the table is created with the ALTER TABLE statement. Constraints ensure the accuracy and reliability of the data in the table.',
      sections: [
        {
          heading: 'The 6 Major SQL Constraints',
          body: '1. NOT NULL: Cannot have a NULL value. 2. UNIQUE: All values are distinct. 3. PRIMARY KEY: NOT NULL and UNIQUE combined. 4. FOREIGN KEY: Enforces referential integrity. 5. CHECK: Value satisfies a boolean predicate. 6. DEFAULT: Sets a fallback value.',
          code: `CREATE TABLE Users (
  ID int NOT NULL,
  Email varchar(255) UNIQUE,
  Age int CHECK (Age >= 18),
  Status varchar(50) DEFAULT 'Pending',
  PRIMARY KEY (ID)
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Constraint Enforcement</h3>
  <p>If an INSERT or UPDATE violates a constraint, the database engine aborts the transaction with an integrity violation error.</p>
</body>
</html>`,
          tips: [
            'Constraints are enforced at the database layer, protecting your data integrity regardless of backend bugs.'
          ]
        }
      ]
    }
  },

  // 31. SQL NOT NULL Constraint
  {
    id: 'sql-not-null',
    title: 'SQL NOT NULL Constraint',
    slug: 'sql-not-null',
    summary: 'The NOT NULL constraint enforces a column to NOT accept NULL values, ensuring required fields.',
    readTime: '4 min',
    category: 'SQL Database',
    content: {
      overview: 'By default, a column can hold NULL values. The NOT NULL constraint enforces a column to NOT accept NULL values. This enforces a field to always contain a value, which means that you cannot insert a new record, or update a record without adding a value to this field.',
      sections: [
        {
          heading: 'Applying NOT NULL',
          body: 'Declare NOT NULL alongside the column data type definition.',
          code: `CREATE TABLE Employees (
  ID int NOT NULL,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255) NOT NULL,
  Age int
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>NOT NULL Rejection Demo</h3>
  <code style="color:red;">ERROR 1048 (23000): Column 'LastName' cannot be null</code>
</body>
</html>`,
          tips: [
            'An empty string "" is NOT considered a NULL value in most database systems (except Oracle).'
          ]
        }
      ]
    }
  },

  // 32. SQL UNIQUE Constraint
  {
    id: 'sql-unique',
    title: 'SQL UNIQUE Constraint',
    slug: 'sql-unique',
    summary: 'The UNIQUE constraint ensures that all values in a column are distinct. You can have many UNIQUE constraints per table.',
    readTime: '4 min',
    category: 'SQL Database',
    content: {
      overview: 'The UNIQUE constraint ensures that all values in a column are different. Both the UNIQUE and PRIMARY KEY constraints provide a guarantee for uniqueness for a column or set of columns. A PRIMARY KEY constraint automatically has a UNIQUE constraint. However, you can have many UNIQUE constraints per table, but only ONE PRIMARY KEY constraint per table.',
      sections: [
        {
          heading: 'UNIQUE on Columns and Multi-Column UNIQUE',
          body: 'You can define named unique constraints spanning multiple columns.',
          code: `CREATE TABLE Accounts (
  AccountID int NOT NULL,
  Email varchar(255) NOT NULL,
  Username varchar(50) NOT NULL,
  PRIMARY KEY (AccountID),
  CONSTRAINT UC_Account UNIQUE (Email, Username)
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>UNIQUE Constraint Protection</h3>
  <code style="color:red;">ERROR 1062 (23000): Duplicate entry 'john@example.com' for key 'Email'</code>
</body>
</html>`,
          tips: [
            'Unlike PRIMARY KEY, a UNIQUE constraint column can contain one NULL value (or multiple NULLs in PostgreSQL/MySQL).'
          ]
        }
      ]
    }
  },

  // 33. SQL PRIMARY KEY Constraint
  {
    id: 'sql-primary-key',
    title: 'SQL PRIMARY KEY Constraint',
    slug: 'sql-primary-key',
    summary: 'The PRIMARY KEY constraint uniquely identifies each record in a table. It must contain UNIQUE values and cannot contain NULL.',
    readTime: '5 min',
    category: 'SQL Database',
    content: {
      overview: 'The PRIMARY KEY constraint uniquely identifies each record in a table. Primary keys must contain UNIQUE values, and cannot contain NULL values. A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields).',
      sections: [
        {
          heading: 'Single Column vs. Composite Primary Keys',
          body: 'A composite primary key is formed by combining multiple columns.',
          code: `-- Single Primary Key:
CREATE TABLE Orders (
  OrderID int PRIMARY KEY,
  OrderNumber int NOT NULL
);

-- Composite Primary Key (OrderDetails junction table):
CREATE TABLE OrderItems (
  OrderID int NOT NULL,
  ProductID int NOT NULL,
  Quantity int DEFAULT 1,
  PRIMARY KEY (OrderID, ProductID)
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Composite Primary Key (OrderID + ProductID)</h3>
  <p>Ensures a product can only appear once per order line; duplicate product additions update Quantity instead.</p>
</body>
</html>`,
          tips: [
            'Databases automatically build a Clustered Index on the Primary Key column for ultra-fast searches.'
          ]
        }
      ]
    }
  },

  // 34. SQL FOREIGN KEY Constraint
  {
    id: 'sql-foreign-key',
    title: 'SQL FOREIGN KEY Constraint',
    slug: 'sql-foreign-key',
    summary: 'A FOREIGN KEY is a field in one table that refers to the PRIMARY KEY in another table, preventing orphan records.',
    readTime: '6 min',
    category: 'SQL Database',
    content: {
      overview: 'The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables. A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table. The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.',
      sections: [
        {
          heading: 'Foreign Key Definition and ON DELETE CASCADE',
          body: 'ON DELETE CASCADE automatically deletes child records when the referenced parent record is deleted.',
          code: `CREATE TABLE Orders (
  OrderID int NOT NULL PRIMARY KEY,
  OrderNumber int NOT NULL,
  CustomerID int,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Referential Integrity Demo</h3>
  <div style="background:#fef2f2; border:1px solid #fecdd3; padding:12px; border-radius:6px; color:#991b1b;">
    Cannot insert CustomerID 999 into Orders because CustomerID 999 does not exist in Customers table!
  </div>
</body>
</html>`,
          tips: [
            'Use ON DELETE SET NULL instead of CASCADE if you want to preserve orders even if the user profile is deleted.'
          ]
        }
      ]
    }
  },

  // 35. SQL CHECK Constraint
  {
    id: 'sql-check',
    title: 'SQL CHECK Constraint',
    slug: 'sql-check',
    summary: 'The CHECK constraint is used to limit the value range that can be placed in a column.',
    readTime: '4 min',
    category: 'SQL Database',
    content: {
      overview: 'The CHECK constraint is used to limit the value range that can be placed in a column. If you define a CHECK constraint on a column it will allow only certain values for this column. If you define a CHECK constraint on a table it can limit the values in certain columns based on values in other columns in the row.',
      sections: [
        {
          heading: 'Writing CHECK Constraints',
          body: 'You can test ranges, boolean flags, or compare dates.',
          code: `CREATE TABLE Accounts (
  AccountID int PRIMARY KEY,
  Balance decimal(10, 2) CHECK (Balance >= 0),
  Age int CHECK (Age >= 18),
  City varchar(255) CHECK (City IN ('New York', 'London', 'Tokyo'))
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>CHECK Constraint Error</h3>
  <code style="color:red;">ERROR 3819 (HY000): Check constraint 'Accounts_chk_1' is violated. (Balance &lt; 0)</code>
</body>
</html>`,
          tips: [
            'CHECK constraints enforce business logic (e.g. EndDate > StartDate) directly inside the database.'
          ]
        }
      ]
    }
  },

  // 36. SQL DEFAULT Constraint
  {
    id: 'sql-default',
    title: 'SQL DEFAULT Constraint',
    slug: 'sql-default',
    summary: 'The DEFAULT constraint is used to set a default value for a column when no value is specified.',
    readTime: '4 min',
    category: 'SQL Database',
    content: {
      overview: 'The DEFAULT constraint is used to set a default value for a column. The default value will be added to all new records, if no other value is specified. It can also use system values like CURRENT_TIMESTAMP or NOW().',
      sections: [
        {
          heading: 'Default Values and System Dates',
          body: 'Set default literal strings, numbers, or system date functions.',
          code: `CREATE TABLE Orders (
  ID int NOT NULL PRIMARY KEY,
  OrderNumber int NOT NULL,
  City varchar(255) DEFAULT 'Sandnes',
  OrderDate date DEFAULT CURRENT_DATE
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>DEFAULT Value Insertion</h3>
  <code>INSERT INTO Orders (ID, OrderNumber) VALUES (1, 7701);</code>
  <p style="margin-top:8px;">City defaults to 'Sandnes' and OrderDate defaults to today's date automatically.</p>
</body>
</html>`,
          tips: [
            'Use CURRENT_TIMESTAMP for audit tracking columns like created_at and updated_at.'
          ]
        }
      ]
    }
  },

  // 37. SQL CREATE INDEX
  {
    id: 'sql-create-index',
    title: 'SQL CREATE INDEX',
    slug: 'sql-create-index',
    summary: 'The CREATE INDEX statement is used to create indexes in tables to search data much faster.',
    readTime: '5 min',
    category: 'SQL Database',
    content: {
      overview: 'Indexes are used to retrieve data from the database more quickly than otherwise. The users cannot see the indexes, they are just used to speed up searches/queries. Updating a table with indexes takes more time than updating a table without, so only create indexes on columns that will be frequently searched against.',
      sections: [
        {
          heading: 'B-Tree Indexes and Composite Indexes',
          body: 'Indexes speed up SELECT queries with WHERE and JOIN clauses, but add overhead to INSERT and UPDATE.',
          code: `-- Create an index on a single column:
CREATE INDEX idx_lastname 
ON Persons (LastName);

-- Create a UNIQUE index (Duplicate values prohibited):
CREATE UNIQUE INDEX idx_email 
ON Users (Email);

-- Composite Index (Ordered query matching):
CREATE INDEX idx_name 
ON Persons (LastName, FirstName);

-- Drop index:
DROP INDEX idx_lastname ON Persons;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Index Performance Gain</h3>
  <p><b>Without Index:</b> Full table scan over 1,000,000 rows (Execution: 850ms).</p>
  <p><b>With B-Tree Index:</b> Binary search over index tree (Execution: <b>2ms</b>!)</p>
</body>
</html>`,
          tips: [
            'Index columns used frequently in WHERE clauses and JOIN conditions, but avoid indexing small tables or rarely queried columns.'
          ]
        }
      ]
    }
  },

  // 38. SQL Auto Increment
  {
    id: 'sql-auto-increment',
    title: 'SQL Auto Increment',
    slug: 'sql-auto-increment',
    summary: 'Auto-increment allows a unique number to be generated automatically when a new record is inserted.',
    readTime: '5 min',
    category: 'SQL Database',
    content: {
      overview: 'Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table. Often this is the primary key field that we would like to be created automatically every time a new record is inserted.',
      sections: [
        {
          heading: 'Syntax Across Major RDBMS Engines',
          body: 'MySQL uses AUTO_INCREMENT, SQL Server uses IDENTITY(1,1), and PostgreSQL uses SERIAL or IDENTITY.',
          code: `-- MySQL:
CREATE TABLE Persons (
  PersonID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Name varchar(255)
);

-- PostgreSQL (Modern Standard):
CREATE TABLE Persons (
  PersonID int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  Name varchar(255)
);

-- SQL Server:
CREATE TABLE Persons (
  PersonID int IDENTITY(1,1) PRIMARY KEY,
  Name varchar(255)
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Auto-Increment in Action</h3>
  <p><code>INSERT INTO Persons (Name) VALUES ('Lars');</code> &rarr; PersonID is automatically assigned 1, 2, 3...</p>
</body>
</html>`,
          tips: [
            'In MySQL, you can change the starting value with: ALTER TABLE Persons AUTO_INCREMENT=100;'
          ]
        }
      ]
    }
  },

  // 39. SQL Dates
  {
    id: 'sql-dates',
    title: 'SQL Dates',
    slug: 'sql-dates',
    summary: 'Working with dates in SQL: DATE, DATETIME, TIMESTAMP, NOW(), CURDATE(), DATEDIFF().',
    readTime: '5 min',
    category: 'SQL Database',
    content: {
      overview: 'The most difficult part when working with dates is to be sure that the format of the date you are trying to insert matches the format of the date column in the database. The standard SQL date format is YYYY-MM-DD.',
      sections: [
        {
          heading: 'Common SQL Date Data Types & Functions',
          body: 'Standard types: DATE (YYYY-MM-DD), DATETIME (YYYY-MM-DD hh:mm:ss), TIMESTAMP (UTC unix milliseconds), and TIME (hh:mm:ss).',
          code: `-- MySQL Date functions:
SELECT NOW();               -- Current date and time
SELECT CURDATE();           -- Current date
SELECT DATEDIFF('2026-12-31', '2026-01-01'); -- Difference in days (364)
SELECT DATE_ADD(NOW(), INTERVAL 30 DAY);    -- Add 30 days

-- Filtering by Date:
SELECT * FROM Orders 
WHERE OrderDate >= '2026-01-01' AND OrderDate <= '2026-12-31';`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>DATEDIFF Result</h3>
  <p>Days remaining in subscription: <b>30 days</b></p>
</body>
</html>`,
          tips: [
            'Always store timestamps in UTC time in the database and convert to the user local timezone on display.'
          ]
        }
      ]
    }
  },

  // 40. SQL Views
  {
    id: 'sql-views',
    title: 'SQL Views',
    slug: 'sql-views',
    summary: 'A view is a virtual table based on the result-set of an SQL statement: CREATE VIEW, DROP VIEW.',
    readTime: '5 min',
    category: 'SQL Database',
    content: {
      overview: 'In SQL, a view is a virtual table based on the result-set of an SQL statement. A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database. You can add SQL functions, WHERE, and JOIN statements to a view and present the data as if the data were coming from one single table.',
      sections: [
        {
          heading: 'Creating and Querying Views',
          body: 'Views simplify complex queries, encapsulate business logic, and restrict direct access to sensitive columns (like passwords or credit card numbers).',
          code: `-- Create a view encapsulating active customers:
CREATE VIEW BrazilianCustomers AS
SELECT CustomerName, ContactName, City 
FROM Customers 
WHERE Country = 'Brazil';

-- Query the view as if it were a physical table:
SELECT * FROM BrazilianCustomers 
WHERE City = 'Rio de Janeiro';

-- Drop view:
DROP VIEW BrazilianCustomers;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Querying Virtual View</h3>
  <code>SELECT * FROM BrazilianCustomers;</code>
  <p style="color:#4f46e5; margin-top:8px;">Executes underlying query transparently without storing duplicate data.</p>
</body>
</html>`,
          tips: [
            'Views take up zero disk storage space (except Materialized Views which cache results).'
          ]
        }
      ]
    }
  },

  // 41. SQL Injection
  {
    id: 'sql-injection',
    title: 'SQL Injection',
    slug: 'sql-injection',
    summary: 'SQL Injection is a code injection technique that might destroy your database. Use Parameterized Queries!',
    readTime: '6 min',
    category: 'SQL Database',
    content: {
      overview: 'SQL injection is a code injection technique that might destroy your database. SQL injection is one of the most common web hacking techniques. SQL injection occurs when malicious users input SQL statements into web entry fields that get concatenated directly into dynamic SQL queries.',
      sections: [
        {
          heading: 'The Vulnerability and Parameterized Solutions',
          body: 'Never concatenate user input directly into SQL strings. Always use Parameterized Queries (Prepared Statements).',
          code: `-- Vulnerable Dynamic SQL (NEVER DO THIS!):
-- "SELECT * FROM Users WHERE UserId = " + txtUserId;
-- If hacker inputs: 105 OR 1=1
-- The query becomes: SELECT * FROM Users WHERE UserId = 105 OR 1=1; (Returns ALL users!)

-- Safe Parameterized Query (Node.js pg / PDO / PreparedStatement):
-- SELECT * FROM Users WHERE UserId = $1;
-- db.query("SELECT * FROM Users WHERE UserId = $1", [txtUserId]);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>SQL Injection Defense</h3>
  <div style="background:#f0fdf4; border:1px solid #86efac; padding:12px; border-radius:6px; color:#166534;">
    <b>Safe Architecture:</b> Prepared statements treat user input strictly as literals, making SQL injection impossible.
  </div>
</body>
</html>`,
          tips: [
            'All modern ORMs (Prisma, TypeORM, Hibernate, Entity Framework) use prepared statements under the hood.'
          ]
        }
      ]
    }
  },

  // 42. SQL Hosting & References
  {
    id: 'sql-hosting',
    title: 'SQL Hosting & References',
    slug: 'sql-hosting',
    summary: 'Overview of relational database systems: PostgreSQL, MySQL, SQLite, and SQL Server.',
    readTime: '5 min',
    category: 'SQL Database',
    content: {
      overview: 'If you want your web site to be able to store and retrieve data from a database, your web server should have access to a database-system that uses the SQL language. Common RDBMS engines: MySQL (open source, powering WordPress), PostgreSQL (advanced open-source object-relational), SQLite (serverless file database for mobile/desktop apps), and Microsoft SQL Server.',
      sections: [
        {
          heading: 'Comparing Popular RDBMS Engines',
          body: 'PostgreSQL is the developer favorite for modern SaaS applications due to native JSONB support and extensibility.',
          code: `/* PostgreSQL: Advanced types & JSONB */
CREATE TABLE logs (
  id serial PRIMARY KEY,
  metadata jsonb
);

/* SQLite: Zero-configuration embedded database */
-- Single file on disk (mydb.sqlite)`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Popular Relational Engines</h3>
  <ul>
    <li><b>PostgreSQL:</b> Best for complex analytical queries, JSON, and geo-data.</li>
    <li><b>MySQL:</b> World's most deployed open-source web database.</li>
    <li><b>SQLite:</b> Serverless, embedded in mobile phones, browsers, and CLI tools.</li>
  </ul>
</body>
</html>`,
          tips: [
            'SQLite requires zero server configuration and runs entirely inside your application process.'
          ]
        }
      ]
    }
  },

  // 43. SQL Window Functions
  {
    id: 'sql-window-functions',
    title: 'SQL Window Functions',
    slug: 'sql-window-functions',
    summary: 'Perform calculations across a set of table rows that are related to the current row using OVER() and PARTITION BY.',
    readTime: '6 min',
    category: 'SQL Database',
    content: {
      overview: 'A window function performs a calculation across a set of table rows that are somehow related to the current row. This is comparable to the type of calculation that can be done with an aggregate function. But unlike regular aggregate functions, use of a window function does not cause rows to become grouped into a single output row; the rows retain their separate identities.',
      sections: [
        {
          heading: 'ROW_NUMBER(), RANK(), and DENSE_RANK()',
          body: 'The OVER (PARTITION BY ... ORDER BY ...) clause defines the window partition and ordering.',
          code: `-- Assign ranking to employees by salary within each department:
SELECT 
  EmployeeID, 
  DepartmentID, 
  Salary,
  ROW_NUMBER() OVER(PARTITION BY DepartmentID ORDER BY Salary DESC) AS DeptRank,
  AVG(Salary) OVER(PARTITION BY DepartmentID) AS DeptAvgSalary
FROM Employees;`,
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
  <h3>Window Function Ranking</h3>
  <table>
    <thead><tr><th>Dept</th><th>Salary</th><th>DeptRank</th></tr></thead>
    <tbody>
      <tr><td>Engineering</td><td>$150,000</td><td>1</td></tr>
      <tr><td>Engineering</td><td>$120,000</td><td>2</td></tr>
      <tr><td>Sales</td><td>$95,000</td><td>1</td></tr>
    </tbody>
  </table>
</body>
</html>`,
          tips: [
            'LAG() and LEAD() allow you to inspect values from preceding or succeeding rows without self-joins.'
          ]
        }
      ]
    }
  },

  // 44. SQL CTE
  {
    id: 'sql-cte',
    title: 'SQL Common Table Expressions (CTE)',
    slug: 'sql-cte',
    summary: 'Common Table Expressions (WITH cte AS (...)) simplify complex joins and support recursion.',
    readTime: '6 min',
    category: 'SQL Database',
    content: {
      overview: 'A Common Table Expression (CTE) is a temporary named result set that you can reference within a SELECT, INSERT, UPDATE, or DELETE statement. CTEs make complex queries much easier to read and maintain compared to nested subqueries.',
      sections: [
        {
          heading: 'Writing Clean CTEs with WITH',
          body: 'Multiple CTEs can be defined separated by commas.',
          code: `WITH HighValueOrders AS (
  SELECT OrderID, CustomerID, SUM(Quantity * UnitPrice) AS TotalAmount
  FROM OrderDetails
  GROUP BY OrderID, CustomerID
  HAVING SUM(Quantity * UnitPrice) > 1000
)
SELECT c.CustomerName, h.OrderID, h.TotalAmount
FROM HighValueOrders h
JOIN Customers c ON h.CustomerID = c.CustomerID
ORDER BY h.TotalAmount DESC;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>CTE Readability Gain</h3>
  <p>WITH clauses isolate data transformations into clean, named steps that execute in sequence.</p>
</body>
</html>`,
          tips: [
            'Recursive CTEs (WITH RECURSIVE) allow querying hierarchical tree data like organization charts and file systems.'
          ]
        }
      ]
    }
  },

  // 45. SQL Transactions
  {
    id: 'sql-transactions',
    title: 'SQL Transactions & ACID',
    slug: 'sql-transactions',
    summary: 'Ensure data integrity with transactions: BEGIN, COMMIT, ROLLBACK, and the ACID principles.',
    readTime: '6 min',
    category: 'SQL Database',
    content: {
      overview: 'A transaction is a unit of work that is performed against a database. Transactions are units or sequences of work accomplished in a logical order, whether in a manual fashion by a user or automatically by some sort of a database program. Transactions satisfy ACID properties: Atomicity, Consistency, Isolation, and Durability.',
      sections: [
        {
          heading: 'COMMIT and ROLLBACK',
          body: 'If any statement in a transaction fails, ROLLBACK restores the database to its initial clean state.',
          code: `-- Banking transfer transaction:
BEGIN TRANSACTION;

UPDATE Accounts 
SET Balance = Balance - 500 
WHERE AccountID = 101;

UPDATE Accounts 
SET Balance = Balance + 500 
WHERE AccountID = 202;

-- If both succeeded:
COMMIT;
-- If any error occurred:
-- ROLLBACK;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>ACID Guarantees</h3>
  <p><b>Atomicity:</b> All changes succeed together, or all fail completely (All-or-Nothing).</p>
</body>
</html>`,
          tips: [
            'Always set appropriate transaction isolation levels (e.g. READ COMMITTED vs SERIALIZABLE) based on concurrency requirements.'
          ]
        }
      ]
    }
  },

  // 46. SQL Stored Procedures
  {
    id: 'sql-stored-procedures',
    title: 'SQL Stored Procedures & Triggers',
    slug: 'sql-stored-procedures',
    summary: 'Stored procedures are prepared SQL code that you can save and reuse: CREATE PROCEDURE, EXEC.',
    readTime: '5 min',
    category: 'SQL Database',
    content: {
      overview: 'A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again. So if you have an SQL query that you write over and over again, save it as a stored procedure, and then just call it to execute it. You can also pass parameters to a stored procedure.',
      sections: [
        {
          heading: 'Creating and Calling Stored Procedures',
          body: 'Stored procedures reduce network latency by executing directly on the database engine.',
          code: `-- Create Procedure with Parameter:
CREATE PROCEDURE SelectAllCustomers @City nvarchar(30)
AS
SELECT * FROM Customers WHERE City = @City;

-- Execute Procedure:
EXEC SelectAllCustomers @City = 'London';`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Procedure Call Result</h3>
  <code>EXEC SelectAllCustomers @City = 'London';</code>
  <p style="color:#16a34a; font-weight:bold; margin-top:8px;">Returns 6 London customers.</p>
</body>
</html>`,
          tips: [
            'Database Triggers automatically execute when an INSERT, UPDATE, or DELETE happens on a table.'
          ]
        }
      ]
    }
  },

  // 47. SQL Data Types Reference
  {
    id: 'sql-data-types-ref',
    title: 'SQL Data Types Reference',
    slug: 'sql-data-types-ref',
    summary: 'Complete reference of SQL data types: String, Numeric, Date and Time, and Binary types.',
    readTime: '5 min',
    category: 'SQL References',
    content: {
      overview: 'Each column in a database table is required to have a name and a data type. An SQL developer must decide what type of data that will be stored inside each column when creating a table. Common categories: String types (CHAR, VARCHAR, TEXT), Numeric types (INT, BIGINT, DECIMAL, FLOAT), Date and Time (DATE, DATETIME, TIMESTAMP), Binary (BLOB).',
      sections: [
        {
          heading: 'VARCHAR vs. CHAR vs. TEXT',
          body: 'CHAR is fixed length (padded with spaces). VARCHAR is variable length up to limit. TEXT stores large unstructured prose.',
          code: `/* String Types */
CHAR(size)         Fixed length string (0 - 255)
VARCHAR(size)      Variable length string (0 - 65,535)
TEXT               Large text string (up to 65,535 bytes)

/* Numeric Types */
INT                Integer (-2147483648 to 2147483647)
BIGINT             Large integer
DECIMAL(size, d)   Exact fixed-point (Ideal for currency: DECIMAL(10, 2))
BOOLEAN            true / false (Stored as TINYINT(1) in MySQL)`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>Financial Data Recommendation</h3>
  <p>Always use <code>DECIMAL(12, 2)</code> instead of FLOAT or DOUBLE for prices and account balances to prevent rounding errors.</p>
</body>
</html>`,
          tips: [
            'Never use FLOAT or DOUBLE for currency because binary floating point cannot represent numbers like 0.10 exactly.'
          ]
        }
      ]
    }
  },

  // 48. SQL Keywords Reference
  {
    id: 'sql-keywords-ref',
    title: 'SQL Keywords Reference',
    slug: 'sql-keywords-ref',
    summary: 'Alphabetical reference guide of all SQL reserved words, commands, and clauses.',
    readTime: '5 min',
    category: 'SQL References',
    content: {
      overview: 'SQL has many reserved words that have special meaning to the SQL database engine and cannot be used as table or column names without quotation.',
      sections: [
        {
          heading: 'Alphabetical Quick Reference',
          body: 'Essential SQL reserved keywords:',
          code: `ADD, ALTER, AND, ANY, AS, ASC, 
BACKUP, BETWEEN, CASE, CHECK, COLUMN, CONSTRAINT, CREATE, 
DATABASE, DEFAULT, DELETE, DESC, DISTINCT, DROP, 
EXEC, EXISTS, FOREIGN KEY, FROM, FULL OUTER JOIN, GROUP BY, 
HAVING, IN, INDEX, INNER JOIN, INSERT INTO, IS NULL, IS NOT NULL, 
JOIN, LEFT JOIN, LIKE, LIMIT, NOT, NOT NULL, OR, ORDER BY, 
PRIMARY KEY, RIGHT JOIN, ROWNUM, SELECT, SELECT DISTINCT, 
SELECT INTO, SET, TABLE, TOP, TRUNCATE, UNION, UNION ALL, 
UNIQUE, UPDATE, VALUES, VIEW, WHERE, WITH;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <h3>SQL Keywords Summary</h3>
  <div style="background:#f1f5f9; padding:12px; border-radius:6px;">
    <code>SELECT &bull; FROM &bull; WHERE &bull; GROUP BY &bull; HAVING &bull; ORDER BY</code>
    <p style="margin-top:6px; color:#475569;">The foundational 6 clauses of SQL query structure.</p>
  </div>
</body>
</html>`,
          tips: [
            'If you must name a column using a reserved word (like "order" or "date"), wrap it in backticks (`order` in MySQL) or double quotes ("order" in PostgreSQL).'
          ]
        }
      ]
    }
  }
];
