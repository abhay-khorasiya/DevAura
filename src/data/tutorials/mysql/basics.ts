import { TutorialChapter } from '../../../types';

export const mysqlBasicsChapters: TutorialChapter[] = [
  // 1. MySQL HOME
  {
    id: 'mysql-home',
    title: 'MySQL HOME',
    slug: 'mysql-home',
    summary: 'MySQL is a widely used relational database management system (RDBMS) that is fast, reliable, and easy to use.',
    readTime: '3 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'MySQL is the world\'s most popular open-source relational database management system. It powers applications from massive web platforms (Facebook, Twitter/X, YouTube, Netflix) to CMS systems like WordPress and eCommerce engines like Shopify.',
      sections: [
        {
          heading: 'Your First MySQL Query',
          body: 'Queries are structured statements sent to the MySQL server engine:',
          code: `SELECT 'Welcome to DevAura MySQL!' AS greeting, NOW() AS current_time;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">MySQL Query Results</h3>
    <table style="width:100%; border-collapse:collapse; background:#fff; border-radius:6px; overflow:hidden;">
      <tr style="background:#0284c7; color:#fff; text-align:left;">
        <th style="padding:8px 12px;">greeting</th>
        <th style="padding:8px 12px;">current_time</th>
      </tr>
      <tr>
        <td style="padding:8px 12px; border-bottom:1px solid #e2e8f0;">Welcome to DevAura MySQL!</td>
        <td style="padding:8px 12px; border-bottom:1px solid #e2e8f0;">2026-11-03 15:30:00</td>
      </tr>
    </table>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. MySQL Intro
  {
    id: 'mysql-intro',
    title: 'MySQL Introduction',
    slug: 'mysql-intro',
    summary: 'What is MySQL? Client-server architecture, SQL language, and ACID compliance.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'MySQL is a relational database management system developed by MySQL AB (now owned by Oracle Corporation). It stores data in tables consisting of rows and columns, optimized for blazing read speeds and high concurrency.',
      sections: [
        {
          heading: 'Why Use MySQL?',
          body: 'MySQL is open-source, proven at hyperscale, supports ACID transactions via the InnoDB storage engine, and integrates with nearly every programming language.',
          code: `# Connect to MySQL from Terminal:
$ mysql -u root -p -h localhost
Enter password: *********
Welcome to the MySQL monitor. Commands end with ; or \\g.
Server version: 8.4.0 MySQL Community Server`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    mysql&gt; SELECT VERSION();<br>
    +-----------+<br>
    | VERSION() |<br>
    +-----------+<br>
    | 8.4.0     |<br>
    +-----------+<br>
    1 row in set (0.00 sec)
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 3. MySQL RDBMS
  {
    id: 'mysql-rdbms',
    title: 'MySQL RDBMS Concepts',
    slug: 'mysql-rdbms',
    summary: 'Tables, records (rows), fields (columns), schema definitions, and relational integrity.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'RDBMS stands for Relational Database Management System. RDBMS is the basis for SQL, and for all modern database systems such as MySQL, MS Access, Oracle, and PostgreSQL.',
      sections: [
        {
          heading: 'Relational Model Fundamentals',
          body: 'A database contains one or more tables. Each table has a unique name and is identified by columns (fields) and rows (records).',
          code: `-- Structure of a relational table:
-- Table: Customers
-- Columns: CustomerID (PK), CustomerName, ContactEmail, Country
-- Rows: Each customer is a separate record row in the table.`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Table Terminology:</h4>
    <p><strong>Field (Column):</strong> A vertical entity in a table containing specific category data (e.g. <code>Country</code>).</p>
    <p><strong>Record (Row):</strong> A horizontal individual entry that exists in a table representing a single entity.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 4. MySQL CREATE DATABASE
  {
    id: 'mysql-create-db',
    title: 'MySQL CREATE & DROP DATABASE',
    slug: 'mysql-create-db',
    summary: 'Creating schemas, listing databases, character sets, and dropping databases.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The CREATE DATABASE statement is used to create a new SQL database. The DROP DATABASE statement is used to completely remove an existing SQL database.',
      sections: [
        {
          heading: 'Database Management Commands',
          body: 'Creating a UTF-8 Unicode database and selecting it with USE:',
          code: `-- Create a new database with standard UTF8MB4 charset
CREATE DATABASE devaura_store 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

-- Switch to the new database
USE devaura_store;

-- Delete database (caution: removes all tables and data!)
-- DROP DATABASE devaura_store;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    mysql&gt; CREATE DATABASE devaura_store;<br>
    Query OK, 1 row affected (0.01 sec)<br><br>
    mysql&gt; USE devaura_store;<br>
    Database changed
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 5. MySQL CREATE TABLE
  {
    id: 'mysql-create-table',
    title: 'MySQL CREATE & DROP TABLE',
    slug: 'mysql-create-table',
    summary: 'Defining columns, data types, table engines, and dropping tables.',
    readTime: '5 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The CREATE TABLE statement is used to create a new table in a database. The column parameters specify the names of the columns of the table and their data types.',
      sections: [
        {
          heading: 'Creating an Orders Table',
          body: 'Specifying column types and primary keys:',
          code: `CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending'
) ENGINE=InnoDB;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    mysql&gt; CREATE TABLE orders (...);<br>
    Query OK, 0 rows affected (0.02 sec)<br><br>
    mysql&gt; DESCRIBE orders;<br>
    +--------------+---------------+------+-----+---------+----------------+<br>
    | Field        | Type          | Null | Key | Default | Extra          |<br>
    +--------------+---------------+------+-----+---------+----------------+<br>
    | order_id     | int           | NO   | PRI | NULL    | auto_increment |<br>
    | customer_id  | int           | NO   |     | NULL    |                |<br>
    | total_amount | decimal(10,2) | NO   |     | NULL    |                |<br>
    +--------------+---------------+------+-----+---------+----------------+
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 6. MySQL ALTER TABLE
  {
    id: 'mysql-alter-table',
    title: 'MySQL ALTER TABLE (ADD, DROP, MODIFY COLUMN)',
    slug: 'mysql-alter-table',
    summary: 'Modifying table structures after creation without losing stored data.',
    readTime: '5 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The ALTER TABLE statement is used to add, delete, or modify columns in an existing table. It is also used to add and drop various constraints on an existing table.',
      sections: [
        {
          heading: 'ALTER TABLE Examples',
          body: 'Adding a column, dropping a column, and changing data types:',
          code: `-- 1. Add a new column
ALTER TABLE orders ADD COLUMN shipping_tracking_code VARCHAR(100);

-- 2. Modify column data type
ALTER TABLE orders MODIFY COLUMN shipping_tracking_code VARCHAR(150) NOT NULL;

-- 3. Drop a column
ALTER TABLE orders DROP COLUMN shipping_tracking_code;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Schema Mutation Result:</h4>
    <p>Column <code>shipping_tracking_code</code> added to table <code>orders</code>.</p>
    <p style="color:#4f46e5; font-weight:bold;">Query OK, 0 rows affected. Records: 0  Duplicates: 0  Warnings: 0</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 7. MySQL Constraints
  {
    id: 'mysql-constraints',
    title: 'MySQL Constraints (NOT NULL, UNIQUE, CHECK)',
    slug: 'mysql-constraints',
    summary: 'Enforcing data integrity and business rules at the database engine level.',
    readTime: '5 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'Constraints are used to specify rules for the data in a table. If there is any violation between the constraint and the data action, the action is aborted.',
      sections: [
        {
          heading: 'Enforcing NOT NULL and UNIQUE',
          body: 'Preventing duplicate emails or empty required fields:',
          code: `CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT CHECK (age >= 18)
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Constraint Protection</h4>
    <p>Attempting: <code>INSERT INTO users (username, email, age) VALUES ('test', 'e@e.com', 15);</code></p>
    <p style="color:#ef4444; font-family:monospace;">ERROR 3819 (HY000): Check constraint 'users_chk_1' is violated.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 8. MySQL PRIMARY & FOREIGN KEY
  {
    id: 'mysql-keys',
    title: 'MySQL PRIMARY KEY & FOREIGN KEY',
    slug: 'mysql-keys',
    summary: 'Unique row identifiers and establishing parent-child relationships with ON DELETE CASCADE.',
    readTime: '6 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The PRIMARY KEY constraint uniquely identifies each record in a table. Primary keys must contain UNIQUE values, and cannot contain NULL values. A FOREIGN KEY is a field that refers to the PRIMARY KEY in another table.',
      sections: [
        {
          heading: 'Establishing Foreign Key with Cascading Deletes',
          body: 'Linking parent Customers to child Orders:',
          code: `CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_total DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Parent Table: customers (customer_id PK)<br>
    Child Table: orders (customer_id FK references customers)<br>
    Referential integrity active: Cascades deletion automatically.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 9. MySQL AUTO_INCREMENT
  {
    id: 'mysql-auto-increment',
    title: 'MySQL AUTO_INCREMENT',
    slug: 'mysql-auto-increment',
    summary: 'Generating unique surrogate identity numbers automatically when a new record is inserted.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table. Often this is the primary key field that we would like to be created automatically every time a new record is inserted.',
      sections: [
        {
          heading: 'Using AUTO_INCREMENT',
          body: 'By default, the starting value for AUTO_INCREMENT is 1, and it will increment by 1 for each new record:',
          code: `CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(8, 2) NOT NULL
);

-- When inserting, omit the auto_increment column:
INSERT INTO products (product_name, price) VALUES ('DevAura Laptop Stand', 49.99);
-- product_id automatically becomes 1!`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    mysql&gt; SELECT LAST_INSERT_ID();<br>
    +------------------+<br>
    | LAST_INSERT_ID() |<br>
    +------------------+<br>
    | 1                |<br>
    +------------------+
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 10. MySQL INSERT INTO
  {
    id: 'mysql-insert',
    title: 'MySQL INSERT INTO',
    slug: 'mysql-insert',
    summary: 'Inserting single and multiple rows of data into tables.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The INSERT INTO statement is used to insert new records in a table.',
      sections: [
        {
          heading: 'Multi-Row Batch Inserts',
          body: 'Inserting multiple rows in a single query is significantly faster than multiple single-row queries:',
          code: `INSERT INTO products (product_name, price) VALUES
    ('Wireless Mechanical Keyboard', 129.99),
    ('Ergonomic Gaming Mouse', 79.99),
    ('Ultra-wide 4K Monitor', 499.00);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Batch Insert Execution:</h4>
    <p>Query OK, 3 rows affected (0.01 sec)<br>Records: 3  Duplicates: 0  Warnings: 0</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 11. MySQL NULL Values
  {
    id: 'mysql-null-values',
    title: 'MySQL NULL Values (IS NULL & IS NOT NULL)',
    slug: 'mysql-null-values',
    summary: 'A field with a NULL value is a field with no value. Testing with IS NULL and IS NOT NULL.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'A field with a NULL value is a field with no value. It is very important to understand that a NULL value is different from a zero value or a field that contains spaces.',
      sections: [
        {
          heading: 'Testing NULL Values',
          body: 'You cannot use comparison operators such as =, <, or <> to test for NULL values. You must use IS NULL and IS NOT NULL:',
          code: `-- Find customers without a phone number
SELECT customer_name, email FROM customers WHERE phone IS NULL;

-- Find customers that DO have a phone number
SELECT customer_name, phone FROM customers WHERE phone IS NOT NULL;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border-left:4px solid #4f46e5; padding:12px;">
    <strong>SQL Rule:</strong> <code>column = NULL</code> always evaluates to UNKNOWN (false). Always use <code>column IS NULL</code>!
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 12. MySQL UPDATE
  {
    id: 'mysql-update',
    title: 'MySQL UPDATE',
    slug: 'mysql-update',
    summary: 'Modifying existing records in a table, and the critical importance of the WHERE clause.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The UPDATE statement is used to modify the existing records in a table. Be careful when updating records in a table! Notice the WHERE clause in the UPDATE statement: if you omit the WHERE clause, ALL records will be updated!',
      sections: [
        {
          heading: 'Safe Updates with WHERE',
          body: 'Updating contact info for a specific customer ID:',
          code: `UPDATE customers
SET contact_name = 'Alfred Schmidt', city = 'Frankfurt'
WHERE customer_id = 1;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Query OK, 1 row affected (0.01 sec)<br>
    Rows matched: 1  Changed: 1  Warnings: 0
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 13. MySQL DELETE
  {
    id: 'mysql-delete',
    title: 'MySQL DELETE & TRUNCATE TABLE',
    slug: 'mysql-delete',
    summary: 'Deleting specific records with DELETE WHERE, vs wiping entire tables with TRUNCATE.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The DELETE statement is used to delete existing records in a table. The TRUNCATE TABLE command drops and recreates the table, which is faster and resets auto-increment counters.',
      sections: [
        {
          heading: 'DELETE vs TRUNCATE',
          body: 'Filtering deletions with WHERE:',
          code: `-- Delete cancelled orders older than 30 days
DELETE FROM orders 
WHERE status = 'cancelled' AND order_date < DATE_SUB(NOW(), INTERVAL 30 DAY);

-- Fast table wipe
-- TRUNCATE TABLE temp_sessions;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Deletion Result:</h4>
    <p>Query OK, 14 rows affected (0.03 sec)</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 14. MySQL SELECT
  {
    id: 'mysql-select',
    title: 'MySQL SELECT & SELECT DISTINCT',
    slug: 'mysql-select',
    summary: 'Querying columns, selecting all (*), and filtering duplicates with DISTINCT.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set. SELECT DISTINCT eliminates duplicate rows.',
      sections: [
        {
          heading: 'Selecting Columns & Distinct Countries',
          body: 'Querying table fields:',
          code: `-- Select specific fields
SELECT customer_name, city, country FROM customers;

-- Select unique list of countries
SELECT DISTINCT country FROM customers;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    +-------------+<br>
    | country     |<br>
    +-------------+<br>
    | Germany     |<br>
    | France      |<br>
    | Japan       |<br>
    | Canada      |<br>
    +-------------+<br>
    4 rows in set (0.00 sec)
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 15. MySQL WHERE
  {
    id: 'mysql-where',
    title: 'MySQL WHERE Clause',
    slug: 'mysql-where',
    summary: 'Filtering rows based on criteria with =, !=, <, >, <=, >=, and LIKE.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The WHERE clause is used to filter records. It is used to extract only those records that fulfill a specified condition.',
      sections: [
        {
          heading: 'Filtering Records',
          body: 'Text values require quotes; numeric values do not:',
          code: `-- Filter by text
SELECT * FROM customers WHERE country = 'Mexico';

-- Filter by number
SELECT * FROM products WHERE price > 100.00;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Filtered Output:</h4>
    <p>Returned 5 products with <code>price &gt; 100.00</code>.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 16. MySQL ORDER BY
  {
    id: 'mysql-order-by',
    title: 'MySQL ORDER BY (ASC & DESC)',
    slug: 'mysql-order-by',
    summary: 'Sorting query results in ascending (ASC) or descending (DESC) order across multiple columns.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The ORDER BY keyword is used to sort the result-set in ascending or descending order. The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.',
      sections: [
        {
          heading: 'Multi-Column Sorting',
          body: 'Sort by Country ascending, then by CustomerName descending:',
          code: `SELECT * FROM customers
ORDER BY country ASC, customer_name DESC;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    1. Australia &rarr; Zara Tech<br>
    2. Australia &rarr; Apex Corp<br>
    3. Brazil &rarr; Rio Logistics
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 17. MySQL AND, OR, NOT
  {
    id: 'mysql-and-or-not',
    title: 'MySQL AND, OR and NOT Operators',
    slug: 'mysql-and-or-not',
    summary: 'Combining multiple conditions in WHERE clauses with boolean logic.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The WHERE clause can be combined with AND, OR, and NOT operators. The AND and OR operators are used to filter records based on more than one condition.',
      sections: [
        {
          heading: 'Combining AND & OR with Parentheses',
          body: 'Use parentheses to ensure the correct order of evaluation:',
          code: `SELECT * FROM customers
WHERE country = 'Germany' AND (city = 'Berlin' OR city = 'Stuttgart');

-- NOT operator
SELECT * FROM customers WHERE NOT country = 'Germany';`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Logic Evaluator:</h4>
    <p>Matches records where <code>country == 'Germany'</code> AND city is either Berlin or Stuttgart.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 18. MySQL LIMIT & OFFSET
  {
    id: 'mysql-limit',
    title: 'MySQL LIMIT & OFFSET (Pagination)',
    slug: 'mysql-limit',
    summary: 'Constraining the number of rows returned, and paginating large data sets with OFFSET.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The LIMIT clause is used to specify the number of records to return. The LIMIT clause is vast and helpful on large tables with thousands of records, returning only a small subset.',
      sections: [
        {
          heading: 'Pagination Formula: LIMIT x OFFSET y',
          body: 'Page 1 is LIMIT 10 OFFSET 0; Page 2 is LIMIT 10 OFFSET 10; Page 3 is LIMIT 10 OFFSET 20:',
          code: `-- Fetch Page 2 (items 11 to 20)
SELECT product_id, product_name, price 
FROM products 
ORDER BY product_id 
LIMIT 10 OFFSET 10;

-- Shorthand syntax: LIMIT offset, count
SELECT * FROM products LIMIT 10, 10;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Showing 10 rows (Page 2 of 14) [Offset 10]
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
