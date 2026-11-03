import { TutorialChapter } from '../../../types';

export const mysqlQueriesAndAdvancedChapters: TutorialChapter[] = [
  // 19. MySQL MIN and MAX
  {
    id: 'mysql-min-max',
    title: 'MySQL MIN() and MAX() Functions',
    slug: 'mysql-min-max',
    summary: 'Returning the smallest and largest values in a selected column.',
    readTime: '3 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The MIN() function returns the smallest value of the selected column. The MAX() function returns the largest value of the selected column.',
      sections: [
        {
          heading: 'Finding Price Boundaries',
          body: 'Using MIN and MAX with column aliases:',
          code: `SELECT 
    MIN(price) AS lowest_price,
    MAX(price) AS highest_price
FROM products;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    +--------------+---------------+<br>
    | lowest_price | highest_price |<br>
    +--------------+---------------+<br>
    | 9.99         | 899.00        |<br>
    +--------------+---------------+
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 20. MySQL COUNT, AVG, SUM
  {
    id: 'mysql-count-avg-sum',
    title: 'MySQL COUNT(), AVG() and SUM()',
    slug: 'mysql-count-avg-sum',
    summary: 'Aggregate functions: counting matching rows, calculating numerical averages, and totaling amounts.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The COUNT() function returns the number of rows that matches a specified criterion. The AVG() function returns the average value of a numeric column. The SUM() function returns the total sum of a numeric column.',
      sections: [
        {
          heading: 'Aggregating Order Statistics',
          body: 'Computing totals, counts, and averages:',
          code: `SELECT 
    COUNT(order_id) AS total_orders,
    ROUND(AVG(total_amount), 2) AS average_order_value,
    SUM(total_amount) AS total_revenue
FROM orders;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    +--------------+---------------------+---------------+<br>
    | total_orders | average_order_value | total_revenue |<br>
    +--------------+---------------------+---------------+<br>
    | 1240         | 84.50               | 104780.00     |<br>
    +--------------+---------------------+---------------+
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 21. MySQL LIKE
  {
    id: 'mysql-like',
    title: 'MySQL LIKE Operator & Wildcards (% and _)',
    slug: 'mysql-like',
    summary: 'Pattern matching strings where % matches any characters and _ matches exactly one character.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The LIKE operator is used in a WHERE clause to search for a specified pattern in a column. There are two wildcards often used in conjunction with the LIKE operator: % represents zero, one, or multiple characters; _ represents a single character.',
      sections: [
        {
          heading: 'Wildcard Pattern Matching Examples',
          body: 'Searching customer names:',
          code: `-- Starts with 'a'
SELECT * FROM customers WHERE customer_name LIKE 'a%';

-- Ends with 'son'
SELECT * FROM customers WHERE customer_name LIKE '%son';

-- Contains 'dev' anywhere
SELECT * FROM customers WHERE customer_name LIKE '%dev%';

-- Has 'r' in the second position (e.g., Eric)
SELECT * FROM customers WHERE customer_name LIKE '_r%';`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Pattern Match:</h4>
    <p><code>customer_name LIKE '%son'</code> matched: <strong>Johnson, Anderson, Wilson</strong></p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 22. MySQL IN
  {
    id: 'mysql-in',
    title: 'MySQL IN & NOT IN Operators',
    slug: 'mysql-in',
    summary: 'Specifying multiple values in a WHERE clause, and subquery matching.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The IN operator allows you to specify multiple values in a WHERE clause. The IN operator is a shorthand for multiple OR conditions.',
      sections: [
        {
          heading: 'IN with Value List and Subquery',
          body: 'Matching against lists and dynamic subqueries:',
          code: `-- Match specific countries
SELECT * FROM customers 
WHERE country IN ('Germany', 'France', 'UK');

-- Match customers who have placed at least one order
SELECT * FROM customers 
WHERE customer_id IN (SELECT DISTINCT customer_id FROM orders);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Returned 18 customers located in Germany, France, or UK.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 23. MySQL BETWEEN
  {
    id: 'mysql-between',
    title: 'MySQL BETWEEN Operator',
    slug: 'mysql-between',
    summary: 'Filtering values within an inclusive range: numbers, text, or dates.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates. The BETWEEN operator is inclusive: begin and end values are included.',
      sections: [
        {
          heading: 'Numeric and Date Ranges',
          body: 'Filtering products by price and orders by date:',
          code: `-- Products between $50 and $150
SELECT * FROM products 
WHERE price BETWEEN 50.00 AND 150.00;

-- Orders between two dates
SELECT * FROM orders 
WHERE order_date BETWEEN '2026-01-01' AND '2026-06-30';`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Range Filtered:</h4>
    <p>Selected 32 products priced inclusively between \$50 and \$150.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 24. MySQL Aliases
  {
    id: 'mysql-aliases',
    title: 'MySQL Aliases (AS)',
    slug: 'mysql-aliases',
    summary: 'Giving tables or columns a temporary alias name to improve query readability.',
    readTime: '3 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'SQL aliases are used to give a table, or a column in a table, a temporary name. Aliases are often used to make column names more readable. An alias only exists for the duration of that query.',
      sections: [
        {
          heading: 'Column and Table Aliases',
          body: 'Concatenating names and shortening table references:',
          code: `SELECT 
    c.customer_name AS client,
    CONCAT(c.address, ', ', c.postal_code, ', ', c.city) AS full_address
FROM customers AS c;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    client: John Doe<br>
    full_address: 42 Wallaby Way, 2000, Sydney
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 25. MySQL INNER JOIN
  {
    id: 'mysql-inner-join',
    title: 'MySQL Joins & INNER JOIN',
    slug: 'mysql-inner-join',
    summary: 'Combining records from multiple tables where matching values exist in both tables.',
    readTime: '5 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'A JOIN clause is used to combine rows from two or more tables, based on a related column between them. The INNER JOIN keyword selects records that have matching values in both tables.',
      sections: [
        {
          heading: 'Joining Orders to Customers',
          body: 'Retrieving order IDs alongside the corresponding customer names:',
          code: `SELECT 
    orders.order_id, 
    customers.customer_name, 
    orders.order_date,
    orders.total_amount
FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    +----------+-----------------+------------+--------------+<br>
    | order_id | customer_name   | order_date | total_amount |<br>
    +----------+-----------------+------------+--------------+<br>
    | 10248    | Wilman Kala     | 2026-07-04 | 440.00       |<br>
    | 10249    | Toms Spezial    | 2026-07-05 | 1863.40      |<br>
    +----------+-----------------+------------+--------------+
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 26. MySQL LEFT JOIN
  {
    id: 'mysql-left-join',
    title: 'MySQL LEFT JOIN',
    slug: 'mysql-left-join',
    summary: 'Returning all records from the left table, and the matched records from the right table.',
    readTime: '5 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The LEFT JOIN keyword returns all records from the left table (table1), and the matching records from the right table (table2). The result is 0 records from the right side if there is no match (fields appear as NULL).',
      sections: [
        {
          heading: 'Finding Customers With Zero Orders',
          body: 'LEFT JOIN helps find unmatched parent records where right fields are NULL:',
          code: `SELECT 
    c.customer_name, 
    o.order_id
FROM customers AS c
LEFT JOIN orders AS o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Unmatched Records Identified:</h4>
    <p>Customer: <strong>Parisian Boutique</strong> &rarr; <code>order_id: NULL</code></p>
    <p style="color:#64748b; font-size:13px;">Indicates customers who signed up but have not completed an order.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 27. MySQL RIGHT JOIN
  {
    id: 'mysql-right-join',
    title: 'MySQL RIGHT JOIN',
    slug: 'mysql-right-join',
    summary: 'Returning all records from the right table, and the matched records from the left table.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The RIGHT JOIN keyword returns all records from the right table (table2), and the matching records from the left table (table1). The result is 0 records from the left side if there is no match.',
      sections: [
        {
          heading: 'RIGHT JOIN Syntax',
          body: 'Querying all orders and matching employees:',
          code: `SELECT 
    orders.order_id, 
    employees.last_name, 
    employees.first_name
FROM orders
RIGHT JOIN employees ON orders.employee_id = employees.employee_id
ORDER BY orders.order_id;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    All employee rows preserved even if they haven't processed any orders.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 28. MySQL CROSS JOIN
  {
    id: 'mysql-cross-join',
    title: 'MySQL CROSS JOIN & Self Joins',
    slug: 'mysql-cross-join',
    summary: 'Cartesian product of rows from both tables, and joining a table to itself.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The CROSS JOIN keyword returns all records from both tables (Cartesian product: N x M rows). A Self Join is a regular join, but the table is joined with itself (useful for employee-manager hierarchies).',
      sections: [
        {
          heading: 'Self Join for Manager Hierarchies',
          body: 'Mapping employees to their managers inside the same table:',
          code: `SELECT 
    A.customer_name AS CustomerName1, 
    B.customer_name AS CustomerName2, 
    A.city
FROM customers A, customers B
WHERE A.customer_id <> B.customer_id
  AND A.city = B.city
ORDER BY A.city;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    CustomerName1: Bólido Comidas | CustomerName2: Romero y tomillo | City: Madrid
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 29. MySQL GROUP BY
  {
    id: 'mysql-group-by',
    title: 'MySQL GROUP BY',
    slug: 'mysql-group-by',
    summary: 'Grouping rows that have the same values into summary rows with aggregate functions.',
    readTime: '5 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The GROUP BY statement groups rows that have the same values into summary rows, like "find the number of customers in each country". The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()).',
      sections: [
        {
          heading: 'Count Customers Per Country',
          body: 'Aggregating by country and sorting by highest count:',
          code: `SELECT 
    country, 
    COUNT(customer_id) AS total_customers
FROM customers
GROUP BY country
ORDER BY total_customers DESC;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    +-------------+-----------------+<br>
    | country     | total_customers |<br>
    +-------------+-----------------+<br>
    | USA         | 13              |<br>
    | Germany     | 11              |<br>
    | France      | 11              |<br>
    | Brazil      | 9               |<br>
    +-------------+-----------------+
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 30. MySQL HAVING
  {
    id: 'mysql-having',
    title: 'MySQL HAVING Clause',
    slug: 'mysql-having',
    summary: 'Filtering aggregated groups because the WHERE keyword cannot be used with aggregate functions.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions. WHERE filters rows before grouping; HAVING filters groups after aggregation.',
      sections: [
        {
          heading: 'HAVING Example',
          body: 'Filter only countries that have more than 5 customers:',
          code: `SELECT 
    country, 
    COUNT(customer_id) AS total_customers
FROM customers
GROUP BY country
HAVING COUNT(customer_id) > 5
ORDER BY total_customers DESC;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">HAVING Result:</h4>
    <p>Countries with 5 or fewer customers were excluded from the final output.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 31. MySQL EXISTS
  {
    id: 'mysql-exists',
    title: 'MySQL EXISTS & Subqueries',
    slug: 'mysql-exists',
    summary: 'Testing for the existence of any record in a subquery.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The EXISTS operator is used to test for the existence of any record in a subquery. The EXISTS operator returns TRUE if the subquery returns one or more records.',
      sections: [
        {
          heading: 'Correlated Subquery with EXISTS',
          body: 'Find suppliers that provide products priced below $20:',
          code: `SELECT supplier_name
FROM suppliers
WHERE EXISTS (
    SELECT product_name 
    FROM products 
    WHERE products.supplier_id = suppliers.supplier_id 
      AND price < 20.00
);`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Suppliers Found: Tokyo Traders, Pavlova Ltd., Exotic Liquids
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 32. MySQL CASE
  {
    id: 'mysql-case',
    title: 'MySQL CASE Statement',
    slug: 'mysql-case',
    summary: 'Conditional if-then-else logic directly inside SELECT queries.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'The CASE statement goes through conditions and returns a value when the first condition is met (like an if-then-else statement). So, once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the ELSE clause.',
      sections: [
        {
          heading: 'Categorizing Order Volumes with CASE',
          body: 'Mapping quantities into discrete categories:',
          code: `SELECT 
    order_id, 
    quantity,
    CASE
        WHEN quantity > 30 THEN 'Large Bulk Order'
        WHEN quantity >= 10 THEN 'Standard Medium Order'
        ELSE 'Small Retail Order'
    END AS order_classification
FROM order_details;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    +----------+----------+-----------------------+<br>
    | order_id | quantity | order_classification  |<br>
    +----------+----------+-----------------------+<br>
    | 10248    | 12       | Standard Medium Order |<br>
    | 10249    | 40       | Large Bulk Order      |<br>
    | 10250    | 5        | Small Retail Order    |<br>
    +----------+----------+-----------------------+
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 33. MySQL IFNULL & COALESCE
  {
    id: 'mysql-ifnull',
    title: 'MySQL IFNULL() & COALESCE() Functions',
    slug: 'mysql-ifnull',
    summary: 'Returning an alternative fallback value if an expression evaluates to NULL.',
    readTime: '4 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'In MySQL, if any component of a mathematical calculation is NULL, the result is NULL. The IFNULL() and COALESCE() functions allow you to substitute a fallback value if a column is NULL.',
      sections: [
        {
          heading: 'Preventing NULL Propagation',
          body: 'Calculating total compensation where bonus may be NULL:',
          code: `-- If bonus is NULL, treat as 0
SELECT 
    employee_name, 
    salary + IFNULL(bonus, 0) AS total_compensation
FROM employees;

-- COALESCE takes multiple fallbacks:
SELECT COALESCE(phone, mobile, office_phone, 'No Phone') AS contact_number FROM contacts;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Fallback Applied:</h4>
    <p>Salary: \$5,000 + Bonus (NULL &rarr; 0) = <strong>Total: \$5,000</strong></p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 34. MySQL Views
  {
    id: 'mysql-views',
    title: 'MySQL Views (CREATE VIEW)',
    slug: 'mysql-views',
    summary: 'Virtual tables based on the result-set of an SQL statement.',
    readTime: '5 min',
    category: 'MySQL Tutorial',
    content: {
      overview: 'In MySQL, a view is a virtual table based on the result-set of an SQL statement. A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.',
      sections: [
        {
          heading: 'Creating and Querying a View',
          body: 'Encapsulating complex JOIN logic into a reusable virtual table:',
          code: `-- Create view
CREATE VIEW vw_customer_orders AS
SELECT 
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.order_date,
    o.total_amount
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id;

-- Query the view just like a regular table!
SELECT * FROM vw_customer_orders WHERE total_amount > 500;`,
          codeLanguage: 'sql',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    View "vw_customer_orders" queried successfully.<br>
    Fetched 45 orders exceeding $500.
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
