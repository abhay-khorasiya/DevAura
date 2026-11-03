import { TutorialChapter } from '../../types';

export const postgresqlChapters: TutorialChapter[] = [
  // 1. PostgreSQL HOME
  {
    id: 'pg-home',
    title: 'PostgreSQL HOME',
    slug: 'pg-home',
    summary: 'PostgreSQL is a powerful, open-source object-relational database system with over 35 years of active development.',
    readTime: '3 min',
    category: 'PostgreSQL Tutorial',
    content: {
      overview: 'PostgreSQL (often referred to simply as "Postgres") is an enterprise-class, advanced open-source relational database. It has earned a strong reputation for proven architecture, reliability, data integrity, robust feature set, and extensibility.',
      sections: [
        {
          heading: 'Your First PostgreSQL Query',
          body: 'Checking the version and server timestamp:',
          code: `SELECT version(), current_timestamp;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">PostgreSQL Query Results</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">version: PostgreSQL 16.3 on x86_64-pc-linux-gnu
current_timestamp: 2026-11-03 16:00:00.124567+00</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. PostgreSQL Intro
  {
    id: 'pg-intro',
    title: 'PostgreSQL Introduction',
    slug: 'pg-intro',
    summary: 'What makes PostgreSQL special? Native JSONB, ACID compliance, GIN indexing, and object-relational features.',
    readTime: '4 min',
    category: 'PostgreSQL Tutorial',
    content: {
      overview: 'PostgreSQL originated from the POSTGRES project at the University of California, Berkeley in 1986. Unlike traditional RDBMS that focus primarily on rigid tables, PostgreSQL is an Object-Relational Database Management System (ORDBMS) supporting table inheritance, complex types, and native JSON documents.',
      sections: [
        {
          heading: 'Key PostgreSQL Advantages',
          body: '1. Native JSONB for document storage with indexing.\n2. Full ACID compliance with Multi-Version Concurrency Control (MVCC).\n3. Advanced extensions like PostGIS (geospatial) and pgvector (AI embeddings).',
          code: `-- Verifying installed extensions:
SELECT * FROM pg_available_extensions WHERE installed_version IS NOT NULL;`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 3. PostgreSQL Get Started & psql
  {
    id: 'pg-getstarted',
    title: 'PostgreSQL Get Started & psql',
    slug: 'pg-getstarted',
    summary: 'Connect to Postgres using the interactive terminal client (psql) or pgAdmin 4 GUI.',
    readTime: '4 min',
    category: 'PostgreSQL Tutorial',
    content: {
      overview: 'PostgreSQL server runs as a background daemon (default port 5432). You interact with it using the psql command-line interface or graphical tools like pgAdmin or DBeaver.',
      sections: [
        {
          heading: 'psql Meta-Commands',
          body: 'Common backslash commands in psql:',
          code: `# Connect via terminal:
psql -U postgres -d my_database -h localhost -p 5432

-- Common psql meta commands:
\\l       -- List all databases
\\c dbname-- Connect to database
\\dt      -- List all tables in current database
\\d tablename -- Describe columns and indexes of table
\\q       -- Quit psql`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 4. PostgreSQL Syntax
  {
    id: 'pg-syntax',
    title: 'PostgreSQL Syntax & Rules',
    slug: 'pg-syntax',
    summary: 'Case sensitivity rules, semicolons, single vs double quotes, and comments.',
    readTime: '3 min',
    category: 'PostgreSQL Basics',
    content: {
      overview: 'PostgreSQL SQL keywords are case-insensitive. Identifiers (table and column names) are converted to lowercase by default unless enclosed in double quotes ("ColumnName"). Text literals MUST be enclosed in single quotes (\'text\').',
      sections: [
        {
          heading: 'Syntax Conventions',
          body: 'Writing clean PostgreSQL queries:',
          code: `-- Single-line comment
/* Multi-line
   comment */

-- Identifiers: double quotes preserve exact case
-- String values: single quotes
SELECT "firstName", "lastName" 
FROM users 
WHERE status = 'active';`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 5. CREATE TABLE & Data Types
  {
    id: 'pg-create-table',
    title: 'PostgreSQL CREATE TABLE & Data Types',
    slug: 'pg-create-table',
    summary: 'SERIAL, UUID, VARCHAR, NUMERIC, TIMESTAMP, and table constraints (PRIMARY KEY, NOT NULL, UNIQUE, CHECK).',
    readTime: '5 min',
    category: 'PostgreSQL DDL',
    content: {
      overview: 'Tables store relational data. PostgreSQL has one of the richest sets of native data types, including auto-incrementing SERIAL/BIGSERIAL, arbitrary-precision NUMERIC, and UUIDs.',
      sections: [
        {
          heading: 'Creating Tables with Constraints',
          body: 'DDL script defining users and orders:',
          code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  balance NUMERIC(12, 2) DEFAULT 0.00 CHECK (balance >= 0),
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 6. INSERT INTO & RETURNING
  {
    id: 'pg-insert-into',
    title: 'PostgreSQL INSERT INTO & RETURNING',
    slug: 'pg-insert-into',
    summary: 'Insert single or batch records and return generated IDs instantly using the signature RETURNING clause.',
    readTime: '4 min',
    category: 'PostgreSQL CRUD',
    content: {
      overview: 'The RETURNING clause is a signature PostgreSQL superpower. Instead of making a separate query to find out what auto-increment ID was generated, append RETURNING to fetch values immediately.',
      sections: [
        {
          heading: 'Using RETURNING in INSERT',
          body: 'Inserting records and fetching generated keys:',
          code: `INSERT INTO users (username, email, balance, is_verified)
VALUES ('abhay_dev', 'abhay@example.com', 250.00, TRUE)
RETURNING id, created_at;

-- Multi-row batch insert:
INSERT INTO users (username, email)
VALUES 
  ('alice', 'alice@test.com'),
  ('bob', 'bob@test.com')
RETURNING id, username;`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 7. SELECT & WHERE Filtering
  {
    id: 'pg-select-where',
    title: 'PostgreSQL SELECT & WHERE Filtering',
    slug: 'pg-select-where',
    summary: 'Retrieve columns, filter rows with WHERE, and use comparison operators (=, !=, <>, <, >, BETWEEN, IN).',
    readTime: '5 min',
    category: 'PostgreSQL Queries',
    content: {
      overview: 'The SELECT statement retrieves rows from tables. The WHERE clause filters records based on boolean conditions.',
      sections: [
        {
          heading: 'Filtering Rows with WHERE',
          body: 'Conditional queries:',
          code: `-- Select specific columns with conditions:
SELECT username, balance, created_at 
FROM users 
WHERE balance >= 100.00 AND is_verified = TRUE;

-- Using IN and BETWEEN:
SELECT * FROM users 
WHERE id IN (1, 3, 5, 7, 9);

SELECT * FROM users 
WHERE created_at BETWEEN '2026-01-01' AND '2026-12-31';`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 8. ORDER BY & LIMIT / OFFSET
  {
    id: 'pg-orderby-limit',
    title: 'PostgreSQL ORDER BY, LIMIT & OFFSET',
    slug: 'pg-orderby-limit',
    summary: 'Sort results with ASC/DESC, NULLS FIRST/LAST, and paginate datasets with LIMIT and OFFSET.',
    readTime: '4 min',
    category: 'PostgreSQL Queries',
    content: {
      overview: 'ORDER BY sorts query results. LIMIT restricts the number of rows returned, and OFFSET skips a specific number of rows for pagination.',
      sections: [
        {
          heading: 'Pagination Pattern',
          body: 'Fetching page 2 of records (items 11 to 20):',
          code: `SELECT id, username, balance 
FROM users 
ORDER BY balance DESC NULLS LAST 
LIMIT 10 OFFSET 10;`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 9. Aggregate Functions
  {
    id: 'pg-min-max-count',
    title: 'PostgreSQL Aggregate Functions',
    slug: 'pg-min-max-count',
    summary: 'Calculate summary metrics with COUNT(), SUM(), AVG(), MIN(), and MAX().',
    readTime: '4 min',
    category: 'PostgreSQL Queries',
    content: {
      overview: 'Aggregate functions compute a single summary value across a set of column values.',
      sections: [
        {
          heading: 'Calculating Aggregates',
          body: 'Aggregate queries:',
          code: `SELECT 
  COUNT(*) AS total_users,
  COUNT(CASE WHEN is_verified THEN 1 END) AS verified_users,
  SUM(balance) AS total_vault_balance,
  ROUND(AVG(balance), 2) AS average_balance,
  MIN(balance) AS min_balance,
  MAX(balance) AS max_balance
FROM users;`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 10. LIKE vs ILIKE Operators
  {
    id: 'pg-like-ilike',
    title: 'PostgreSQL LIKE vs ILIKE Wildcards',
    slug: 'pg-like-ilike',
    summary: 'Case-sensitive LIKE versus PostgreSQL’s signature case-insensitive ILIKE operator with % and _ wildcards.',
    readTime: '4 min',
    category: 'PostgreSQL Queries',
    content: {
      overview: 'While standard SQL uses LIKE (case-sensitive in Postgres), PostgreSQL introduces ILIKE to perform fast, case-insensitive pattern matching.',
      sections: [
        {
          heading: 'ILIKE vs LIKE',
          body: 'Matching search strings:',
          code: `-- LIKE is case-sensitive:
SELECT * FROM users WHERE email LIKE '%@gmail.com'; -- Won't match @GMAIL.COM

-- ILIKE is case-insensitive in PostgreSQL:
SELECT * FROM users WHERE username ILIKE 'dev%'; -- Matches 'developer', 'DevAura', 'DEV1'

-- Single character wildcard (_):
SELECT * FROM users WHERE username ILIKE 'u_er'; -- Matches 'user', 'uber'`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 11. Joins
  {
    id: 'pg-joins',
    title: 'PostgreSQL Table Joins',
    slug: 'pg-joins',
    summary: 'Combine related tables with INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, and CROSS JOIN.',
    readTime: '5 min',
    category: 'PostgreSQL Relational',
    content: {
      overview: 'JOIN clauses link data across multiple tables using foreign key relationships.',
      sections: [
        {
          heading: 'INNER vs LEFT vs FULL JOIN',
          body: 'Joining orders with customer records:',
          code: `-- INNER JOIN: Returns rows when match exists in BOTH tables
SELECT o.id AS order_id, u.username, o.amount
FROM orders o
INNER JOIN users u ON o.user_id = u.id;

-- LEFT JOIN: Returns ALL users, even if they have zero orders
SELECT u.username, COUNT(o.id) AS total_orders, COALESCE(SUM(o.amount), 0) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username;`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 12. GROUP BY, HAVING & UNION
  {
    id: 'pg-union-groupby',
    title: 'PostgreSQL GROUP BY, HAVING & UNION',
    slug: 'pg-union-groupby',
    summary: 'Aggregate rows by categories, filter groups using HAVING, and combine distinct result sets with UNION.',
    readTime: '5 min',
    category: 'PostgreSQL Relational',
    content: {
      overview: 'GROUP BY groups rows that share common column values into summary rows. HAVING filters groups based on aggregate results (unlike WHERE, which filters individual rows).',
      sections: [
        {
          heading: 'GROUP BY with HAVING Filter',
          body: 'Filter customer segments with order totals exceeding $500:',
          code: `SELECT user_id, COUNT(*) AS order_count, SUM(amount) AS total_spent
FROM orders
GROUP BY user_id
HAVING SUM(amount) > 500.00
ORDER BY total_spent DESC;

-- UNION combines query sets (UNION removes duplicates, UNION ALL keeps duplicates):
SELECT email FROM customers
UNION
SELECT email FROM suppliers;`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 13. UPDATE & DELETE
  {
    id: 'pg-update-delete',
    title: 'PostgreSQL UPDATE & DELETE',
    slug: 'pg-update-delete',
    summary: 'Modify existing records with UPDATE, remove rows with DELETE, and use RETURNING to inspect affected rows.',
    readTime: '4 min',
    category: 'PostgreSQL CRUD',
    content: {
      overview: 'UPDATE modifies existing table data. DELETE removes rows matching criteria. Always provide a WHERE clause to prevent accidental modifications to all table rows!',
      sections: [
        {
          heading: 'UPDATE and DELETE with RETURNING',
          body: 'Applying atomic data changes:',
          code: `-- Update user balance and return updated row:
UPDATE users
SET balance = balance + 50.00
WHERE id = 1
RETURNING id, username, balance;

-- Delete inactive accounts:
DELETE FROM users
WHERE is_verified = FALSE AND created_at < NOW() - INTERVAL '30 days'
RETURNING id, email;`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 14. ALTER TABLE & DROP TABLE
  {
    id: 'pg-alter-drop-table',
    title: 'PostgreSQL ALTER TABLE & DROP TABLE',
    slug: 'pg-alter-drop-table',
    summary: 'Migrate schemas with ADD COLUMN, DROP COLUMN, ALTER COLUMN TYPE, and remove tables with DROP TABLE IF EXISTS.',
    readTime: '4 min',
    category: 'PostgreSQL DDL',
    content: {
      overview: 'ALTER TABLE modifies the structure of an existing table without losing stored data.',
      sections: [
        {
          heading: 'Schema Migration Statements',
          body: 'Modifying table columns:',
          code: `-- Add new column with default:
ALTER TABLE users ADD COLUMN phone VARCHAR(20) DEFAULT NULL;

-- Change column type:
ALTER TABLE users ALTER COLUMN phone TYPE VARCHAR(30);

-- Drop column:
ALTER TABLE users DROP COLUMN phone;

-- Safely drop table:
DROP TABLE IF EXISTS archived_logs CASCADE;`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 15. JSONB Documents & GIN Indexes
  {
    id: 'pg-jsonb-documents',
    title: 'PostgreSQL JSONB Documents & GIN Indexes',
    slug: 'pg-jsonb-documents',
    summary: 'Store schema-less JSON documents natively and query them with operators (->, ->>, @>) at indexed speed.',
    readTime: '6 min',
    category: 'PostgreSQL Advanced',
    content: {
      overview: 'PostgreSQL’s JSONB stores decomposed binary JSON. It provides document database flexibility (like MongoDB) while maintaining relational ACID guarantees.',
      sections: [
        {
          heading: 'Querying and Indexing JSONB',
          body: 'Using the arrow operators and containment checks (@>):',
          code: `CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  attributes JSONB
);

INSERT INTO products (name, attributes)
VALUES ('Laptop Pro', '{"brand": "Apple", "ram_gb": 32, "storage": "1TB", "tags": ["m3", "retina"]}');

-- -> returns JSON object, ->> returns text:
SELECT name, attributes->>'brand' AS brand
FROM products
WHERE (attributes->>'ram_gb')::INT >= 16;

-- Create GIN index for ultra-fast JSON containment searches:
CREATE INDEX idx_products_attributes ON products USING GIN (attributes);

-- Containment query (@>):
SELECT * FROM products WHERE attributes @> '{"brand": "Apple"}';`,
          codeLanguage: 'sql',
          interactive: true
        }
      ]
    }
  },

  // 16. ACID Transactions
  {
    id: 'pg-transactions-acid',
    title: 'PostgreSQL Transactions & ACID Guarantees',
    slug: 'pg-transactions-acid',
    summary: 'Execute all-or-nothing operations with BEGIN, COMMIT, ROLLBACK, and SAVEPOINT.',
    readTime: '5 min',
    category: 'PostgreSQL Advanced',
    content: {
      overview: 'A transaction bundles multiple steps into a single, all-or-nothing operation. If any statement fails, the entire transaction is rolled back.',
      sections: [
        {
          heading: 'Transferring Funds with Transactions',
          body: 'Ensuring atomic balance transfer:',
          code: `BEGIN;

-- Deduct funds from Alice:
UPDATE accounts 
SET balance = balance - 100.00 
WHERE account_id = 'A100';

-- Add funds to Bob:
UPDATE accounts 
SET balance = balance + 100.00 
WHERE account_id = 'B200';

-- Commit all changes atomically:
COMMIT;

-- If an error happens, rollback cleanly:
-- ROLLBACK;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">PostgreSQL ACID Transaction Status</h3>
    <pre style="background:#0f172a; color:#86efac; padding:12px; border-radius:6px; font-family:monospace;">BEGIN
UPDATE 1
UPDATE 1
COMMIT
Transaction committed: 2 rows updated atomically with MVCC isolation.</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
