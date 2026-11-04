import { QuizQuestion } from '../../types';

export const databaseQuizzes: QuizQuestion[] = [
  // ==================== SQL ====================
  {
    id: 'q-sql-1',
    language: 'sql',
    question: 'Which SQL statement is used to extract data from a database?',
    options: ['GET', 'OPEN', 'EXTRACT', 'SELECT'],
    correctAnswerIndex: 3,
    explanation: 'The `SELECT` statement is the core ANSI SQL keyword used to query data from database tables.'
  },
  {
    id: 'q-sql-2',
    language: 'sql',
    question: 'Which SQL clause is used to filter the result of aggregate functions like SUM or COUNT?',
    options: ['WHERE', 'HAVING', 'GROUP BY', 'FILTER'],
    correctAnswerIndex: 1,
    explanation: '`HAVING` filters aggregated groups after `GROUP BY`. `WHERE` cannot be used with aggregate functions.'
  },
  {
    id: 'q-sql-3',
    language: 'sql',
    question: 'Which SQL keyword is used to sort the result-set?',
    options: ['ORDER BY', 'SORT BY', 'ARRANGE BY', 'GROUP BY'],
    correctAnswerIndex: 0,
    explanation: '`ORDER BY column_name [ASC|DESC]` orders queried records.'
  },
  {
    id: 'q-sql-4',
    language: 'sql',
    question: 'Which JOIN returns all records when there is a match in either the left or right table?',
    options: ['INNER JOIN', 'LEFT JOIN', 'FULL OUTER JOIN', 'CROSS JOIN'],
    correctAnswerIndex: 2,
    explanation: '`FULL OUTER JOIN` combines the results of both left and right outer joins.'
  },
  {
    id: 'q-sql-5',
    language: 'sql',
    question: 'Which SQL constraint uniquely identifies each record in a database table?',
    options: ['NOT NULL', 'FOREIGN KEY', 'PRIMARY KEY', 'CHECK'],
    correctAnswerIndex: 2,
    explanation: 'A `PRIMARY KEY` enforces uniqueness and prohibits null values for the key columns.'
  },
  {
    id: 'q-sql-6',
    language: 'sql',
    question: 'How do you insert a new record into a table named `Users`?',
    options: [
      'INSERT INTO Users VALUES (...)',
      'ADD RECORD TO Users (...)',
      'INSERT ROW Users (...)',
      'APPEND INTO Users (...)'
    ],
    correctAnswerIndex: 0,
    explanation: '`INSERT INTO TableName (col1, col2) VALUES (val1, val2)` adds new tuples.'
  },

  // ==================== MYSQL ====================
  {
    id: 'q-mysql-1',
    language: 'mysql',
    question: 'What is the default storage engine for MySQL 5.5 and later?',
    options: ['MyISAM', 'InnoDB', 'Memory', 'CSV'],
    correctAnswerIndex: 1,
    explanation: 'InnoDB is the default ACID-compliant transactional storage engine in MySQL.'
  },
  {
    id: 'q-mysql-2',
    language: 'mysql',
    question: 'Which keyword automatically generates a unique sequential integer for a column when a new row is inserted in MySQL?',
    options: ['SEQUENCE', 'AUTO_INCREMENT', 'IDENTITY', 'SERIAL'],
    correctAnswerIndex: 1,
    explanation: '`AUTO_INCREMENT` produces sequential integer keys automatically upon insertion in MySQL.'
  },
  {
    id: 'q-mysql-3',
    language: 'mysql',
    question: 'Which MySQL clause limits the number of rows returned in a query?',
    options: ['TOP', 'LIMIT', 'FETCH FIRST', 'ROWNUM'],
    correctAnswerIndex: 1,
    explanation: '`LIMIT count [OFFSET offset]` specifies the maximum rows returned in MySQL.'
  },
  {
    id: 'q-mysql-4',
    language: 'mysql',
    question: 'Which command displays the execution plan of a query to optimize performance in MySQL?',
    options: ['ANALYZE', 'EXPLAIN', 'PROFILE', 'OPTIMIZE'],
    correctAnswerIndex: 1,
    explanation: '`EXPLAIN SELECT ...` provides information about how MySQL executes the query, including indexes used.'
  },
  {
    id: 'q-mysql-5',
    language: 'mysql',
    question: 'Which command shows all databases currently available on the MySQL server?',
    options: ['SHOW DATABASES;', 'LIST DATABASES;', 'GET ALL DATABASES;', 'DISPLAY DATABASES;'],
    correctAnswerIndex: 0,
    explanation: '`SHOW DATABASES;` lists the schemas/databases managed by the MySQL instance.'
  },
  {
    id: 'q-mysql-6',
    language: 'mysql',
    question: 'Which command switches the active database context in MySQL CLI?',
    options: ['CONNECT db_name;', 'USE db_name;', 'SELECT db_name;', 'OPEN db_name;'],
    correctAnswerIndex: 1,
    explanation: '`USE db_name;` selects the default database for subsequent SQL queries.'
  },

  // ==================== POSTGRESQL ====================
  {
    id: 'q-postgres-1',
    language: 'postgresql',
    question: 'What data type in PostgreSQL provides binary, indexed storage for JSON data?',
    options: ['JSON', 'JSONB', 'BSON', 'RAW_JSON'],
    correctAnswerIndex: 1,
    explanation: '`JSONB` stores decomposed binary JSON that supports GIN indexing and fast querying.'
  },
  {
    id: 'q-postgres-2',
    language: 'postgresql',
    question: 'What command-line terminal client is commonly used with PostgreSQL?',
    options: ['mysql', 'psql', 'pgcli_only', 'pgadmin_cmd'],
    correctAnswerIndex: 1,
    explanation: '`psql` is the interactive terminal client for querying PostgreSQL databases.'
  },
  {
    id: 'q-postgres-3',
    language: 'postgresql',
    question: 'Which clause introduced in PostgreSQL returns data from rows modified by INSERT, UPDATE, or DELETE?',
    options: ['OUTPUT', 'RETURNING', 'YIELD', 'FETCH'],
    correctAnswerIndex: 1,
    explanation: '`RETURNING column_name` produces the newly created or updated values directly without extra queries.'
  },
  {
    id: 'q-postgres-4',
    language: 'postgresql',
    question: 'What is the popular PostgreSQL extension for geospatial objects and GIS queries?',
    options: ['PostGeo', 'PostGIS', 'GeoSQL', 'SpatialPG'],
    correctAnswerIndex: 1,
    explanation: 'PostGIS adds support for geographic objects allowing location queries to be run in SQL.'
  },
  {
    id: 'q-postgres-5',
    language: 'postgresql',
    question: 'What construct uses `WITH ... AS (...)` to create Common Table Expressions (CTEs)?',
    options: ['Subqueries', 'Views', 'Common Table Expressions (CTEs)', 'Stored Procedures'],
    correctAnswerIndex: 2,
    explanation: 'The `WITH` query clause creates temporary result sets (CTEs) that exist only during the execution of a statement.'
  },
  {
    id: 'q-postgres-6',
    language: 'postgresql',
    question: 'Which index type in PostgreSQL is best suited for indexing text documents and JSONB keys?',
    options: ['B-Tree', 'Hash', 'GIN (Generalized Inverted Index)', 'BRIN'],
    correctAnswerIndex: 2,
    explanation: 'GIN indexes are inverted indexes designed for handling composite values like arrays, full-text, and JSONB.'
  },

  // ==================== MONGODB ====================
  {
    id: 'q-mongo-1',
    language: 'mongodb',
    question: 'What format does MongoDB use internally to store documents?',
    options: ['XML', 'JSON text', 'BSON (Binary JSON)', 'Protobuf'],
    correctAnswerIndex: 2,
    explanation: 'MongoDB stores records as BSON (Binary JSON), extending JSON with datatypes like Date and BinData.'
  },
  {
    id: 'q-mongo-2',
    language: 'mongodb',
    question: 'In MongoDB, what is the equivalent of a relational database table?',
    options: ['Document', 'Collection', 'Database', 'Bucket'],
    correctAnswerIndex: 1,
    explanation: 'MongoDB stores BSON documents inside Collections, analogous to tables in SQL.'
  },
  {
    id: 'q-mongo-3',
    language: 'mongodb',
    question: 'What unique 12-byte identifier field is automatically added to each MongoDB document?',
    options: ['_uid', '_id', '_key', 'id'],
    correctAnswerIndex: 1,
    explanation: '`_id` serves as the primary key for every document, typically populated with an `ObjectId`.'
  },
  {
    id: 'q-mongo-4',
    language: 'mongodb',
    question: 'Which method queries and retrieves documents matching a filter in MongoDB?',
    options: ['db.collection.search()', 'db.collection.find()', 'db.collection.query()', 'db.collection.get()'],
    correctAnswerIndex: 1,
    explanation: '`db.collection.find(query)` returns a cursor to documents matching the query conditions.'
  },
  {
    id: 'q-mongo-5',
    language: 'mongodb',
    question: 'Which framework in MongoDB is used to process data through multi-stage pipelines?',
    options: ['MapReduce', 'Aggregation Framework', 'Stream Engine', 'Transform Pipeline'],
    correctAnswerIndex: 1,
    explanation: 'The Aggregation Pipeline (`db.collection.aggregate([ ... ])`) transforms and groups documents.'
  },
  {
    id: 'q-mongo-6',
    language: 'mongodb',
    question: 'Which update operator is used to modify specific field values without overwriting the entire document?',
    options: ['$change', '$update', '$set', '$modify'],
    correctAnswerIndex: 2,
    explanation: '`$set` updates the value of the specified field while leaving all other fields intact.'
  },

  // ==================== AWS CLOUD ====================
  {
    id: 'q-aws-1',
    language: 'aws',
    question: 'What does AWS stand for?',
    options: ['Advanced Web Solutions', 'Amazon Web Services', 'Apex Worldwide Servers', 'Automated Web Storage'],
    correctAnswerIndex: 1,
    explanation: 'AWS stands for Amazon Web Services, Amazon’s comprehensive cloud computing platform.'
  },
  {
    id: 'q-aws-2',
    language: 'aws',
    question: 'Which AWS service provides resizable virtual compute capacity (virtual machines) in the cloud?',
    options: ['Amazon S3', 'Amazon EC2', 'AWS Lambda', 'Amazon RDS'],
    correctAnswerIndex: 1,
    explanation: 'Amazon EC2 (Elastic Compute Cloud) provides secure and resizable virtual servers.'
  },
  {
    id: 'q-aws-3',
    language: 'aws',
    question: 'Which AWS service provides highly scalable object storage accessible via HTTP?',
    options: ['Amazon EBS', 'Amazon S3', 'Amazon EFS', 'Amazon Glacier'],
    correctAnswerIndex: 1,
    explanation: 'Amazon S3 (Simple Storage Service) stores files and unstructured media as objects within buckets.'
  },
  {
    id: 'q-aws-4',
    language: 'aws',
    question: 'Which serverless compute service runs code in response to events without provisioning servers?',
    options: ['AWS ECS', 'AWS Fargate', 'AWS Lambda', 'AWS Elastic Beanstalk'],
    correctAnswerIndex: 2,
    explanation: 'AWS Lambda executes functions triggered by events, automatically scaling compute resources.'
  },
  {
    id: 'q-aws-5',
    language: 'aws',
    question: 'Which AWS service securely controls access and permissions to AWS services and resources?',
    options: ['AWS Shield', 'AWS IAM (Identity and Access Management)', 'AWS WAF', 'AWS KMS'],
    correctAnswerIndex: 1,
    explanation: 'AWS IAM manages users, roles, groups, and policies to control access permissions.'
  },
  {
    id: 'q-aws-6',
    language: 'aws',
    question: 'Which AWS service is a managed relational database service supporting MySQL, Postgres, and Oracle?',
    options: ['Amazon DynamoDB', 'Amazon Redshift', 'Amazon RDS', 'Amazon DocumentDB'],
    correctAnswerIndex: 2,
    explanation: 'Amazon RDS (Relational Database Service) automates database setup, patching, backups, and failover.'
  }
];