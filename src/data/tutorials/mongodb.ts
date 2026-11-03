import { TutorialChapter } from '../../types';

export const mongodbChapters: TutorialChapter[] = [
  // 1. MongoDB HOME
  {
    id: 'mongo-home',
    title: 'MongoDB HOME',
    slug: 'mongo-home',
    summary: 'MongoDB is the world’s leading document-oriented NoSQL database system, designed for modern cloud-native applications.',
    readTime: '3 min',
    category: 'MongoDB Tutorial',
    content: {
      overview: 'MongoDB stores data in flexible, JSON-like BSON documents, meaning fields can vary from document to document and data structure can change over time. The document model maps directly to objects in your application code, making data extremely intuitive to work with.',
      sections: [
        {
          heading: 'Your First MongoDB Document Query',
          body: 'Querying documents in the mongosh shell with find():',
          code: `db.customers.find({ status: "active" }).limit(5);`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">MongoDB Shell (mongosh)</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">[
  {
    _id: ObjectId("665a12f9b87c1e0012ab34cd"),
    name: "Acme Corp",
    plan: "Enterprise",
    status: "active",
    seats: 48
  }
]</pre>
    <p style="color:#64748b; font-size:13px; margin-bottom:0;">Output returned 1 document matching { status: "active" }</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. MongoDB Intro
  {
    id: 'mongo-intro',
    title: 'MongoDB Introduction',
    slug: 'mongo-intro',
    summary: 'Understand the difference between relational SQL tables and MongoDB NoSQL document collections.',
    readTime: '4 min',
    category: 'MongoDB Tutorial',
    content: {
      overview: 'Traditional relational databases enforce strict tabular schemas (tables, rows, and columns) with rigid relationships via foreign keys. MongoDB is a document database where records are stored as BSON (Binary JSON) documents. Collections contain sets of documents, and documents can contain embedded nested subdocuments and arrays.',
      sections: [
        {
          heading: 'SQL vs MongoDB Terminology Comparison',
          body: 'Key architectural mappings between RDBMS and MongoDB:',
          code: `// Relational Database  ->  MongoDB Database
// Table                ->  Collection
// Row / Record         ->  Document (BSON)
// Column               ->  Field
// Primary Key (id)     ->  _id field (ObjectId)
// JOIN                 ->  Embedded Docs or $lookup aggregation`,
          codeLanguage: 'javascript',
          interactive: true,
          tips: [
            'Documents can store nested arrays and objects natively without requiring multi-table joins.',
            'MongoDB scales horizontally across clusters using automated sharding.'
          ]
        }
      ]
    }
  },

  // 3. MongoDB Get Started
  {
    id: 'mongo-getstarted',
    title: 'MongoDB Get Started',
    slug: 'mongo-getstarted',
    summary: 'Install mongosh shell or connect to MongoDB Atlas cloud database cluster.',
    readTime: '4 min',
    category: 'MongoDB Tutorial',
    content: {
      overview: 'You can run MongoDB locally using Docker or the Community Server, or connect to a free managed MongoDB Atlas cloud cluster via connection string.',
      sections: [
        {
          heading: 'Connecting via mongosh',
          body: 'Using the modern MongoDB Shell (mongosh):',
          code: `mongosh "mongodb+srv://cluster0.example.mongodb.net/devdb" --apiVersion 1 --username myUser`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">mongosh Connection Established</h3>
    <pre style="background:#0f172a; color:#a5f3fc; padding:12px; border-radius:6px; font-family:monospace;">Atlas atlas-xyz-shard-0 [primary] devdb> show dbs
admin   324.00 KiB
config  108.00 KiB
devdb     1.24 MiB
local     4.89 GiB</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 4. Databases & Collections
  {
    id: 'mongo-databases-collections',
    title: 'MongoDB Databases & Collections',
    slug: 'mongo-databases-collections',
    summary: 'Creating databases dynamically and defining explicit or capped collections.',
    readTime: '4 min',
    category: 'MongoDB Tutorial',
    content: {
      overview: 'In MongoDB, databases and collections are created automatically when you first store data into them. You can also explicitly create collections with validation rules or capped limits.',
      sections: [
        {
          heading: 'Switching DB and Creating Collections',
          body: 'Common database commands:',
          code: `// Switch or create database:
use storeDB

// Show current database:
db

// Explicitly create a collection:
db.createCollection("products")

// List all collections:
show collections`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 5. Insert Documents
  {
    id: 'mongo-insert',
    title: 'MongoDB Insert Documents',
    slug: 'mongo-insert',
    summary: 'Add single or multiple BSON documents into collections using insertOne() and insertMany().',
    readTime: '5 min',
    category: 'MongoDB CRUD',
    content: {
      overview: 'MongoDB provides insertOne() to write a single record and insertMany() to batch insert multiple documents efficiently.',
      sections: [
        {
          heading: 'insertOne and insertMany Examples',
          body: 'Inserting single and array of documents:',
          code: `// Insert one document
db.products.insertOne({
  name: "Pro Mechanical Keyboard",
  price: 129.99,
  category: "Electronics",
  tags: ["wireless", "rgb", "hot-swap"],
  inStock: true
});

// Insert multiple documents
db.products.insertMany([
  { name: "Gaming Mouse", price: 59.99, inStock: true },
  { name: "Desk Mat XL", price: 29.99, inStock: false }
]);`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 6. Find Documents
  {
    id: 'mongo-find',
    title: 'MongoDB Find Documents',
    slug: 'mongo-find',
    summary: 'Query documents with find() and findOne(), filtering fields with projection.',
    readTime: '5 min',
    category: 'MongoDB CRUD',
    content: {
      overview: 'The find() method retrieves all documents matching a query filter. If passed an empty query object {}, it returns all documents in the collection.',
      sections: [
        {
          heading: 'Query Filtering & Projection',
          body: 'Use projection to include or exclude specific fields:',
          code: `// Return all documents
db.products.find();

// Return documents matching category
db.products.find({ category: "Electronics" });

// Projection: 1 = include, 0 = exclude
// Returns only name and price, suppresses default _id
db.products.find(
  { inStock: true },
  { name: 1, price: 1, _id: 0 }
);`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 7. Query Operators
  {
    id: 'mongo-query-operators',
    title: 'MongoDB Query Operators',
    slug: 'mongo-query-operators',
    summary: 'Compare values with $eq, $ne, $gt, $gte, $lt, $lte, and $in operators.',
    readTime: '5 min',
    category: 'MongoDB Operators',
    content: {
      overview: 'Comparison operators provide powerful filtering expressions for range queries, membership checks, and inequality comparisons.',
      sections: [
        {
          heading: 'Comparison Operators in Action',
          body: 'Syntax for operators:',
          code: `// Products with price greater than 50 and less than or equal to 150
db.products.find({
  price: { $gt: 50, $lte: 150 }
});

// Products belonging to specific categories ($in)
db.products.find({
  category: { $in: ["Electronics", "Computers", "Audio"] }
});

// Find products not equal to category ($ne)
db.products.find({
  category: { $ne: "Discontinued" }
});`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 8. Logical Operators
  {
    id: 'mongo-logical-operators',
    title: 'MongoDB Logical Operators',
    slug: 'mongo-logical-operators',
    summary: 'Combine multiple query conditions with $and, $or, $nor, and $not.',
    readTime: '4 min',
    category: 'MongoDB Operators',
    content: {
      overview: 'Logical operators join clause conditions together. Although MongoDB implicitly uses AND between root fields, $or and $nor require explicit array clauses.',
      sections: [
        {
          heading: 'Using $or and $and',
          body: 'Combining multiple criteria:',
          code: `// Find products that are either out of stock OR price under $20
db.products.find({
  $or: [
    { inStock: false },
    { price: { $lt: 20 } }
  ]
});

// Combining AND with OR:
db.products.find({
  category: "Electronics",
  $or: [
    { price: { $lt: 100 } },
    { tags: "clearance" }
  ]
});`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 9. Evaluation Operators ($regex, $expr)
  {
    id: 'mongo-evaluation-operators',
    title: 'MongoDB Evaluation Operators ($regex, $expr)',
    slug: 'mongo-evaluation-operators',
    summary: 'Perform pattern matching with $regex and compare fields within the same document using $expr.',
    readTime: '4 min',
    category: 'MongoDB Operators',
    content: {
      overview: 'Evaluation operators evaluate document data dynamically, enabling regular expression searches and intra-document field comparisons.',
      sections: [
        {
          heading: 'Regular Expressions & Field Comparisons',
          body: 'Searching with regex patterns and $expr:',
          code: `// Search products where name contains 'Pro' (case-insensitive):
db.products.find({ name: { $regex: /pro/i } });

// $expr: Find orders where shippingCost was greater than taxAmount:
db.orders.find({
  $expr: { $gt: ["$shippingCost", "$taxAmount"] }
});`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 10. Update Documents
  {
    id: 'mongo-update',
    title: 'MongoDB Update Documents',
    slug: 'mongo-update',
    summary: 'Modify existing documents using updateOne(), updateMany(), $set, $inc, and upsert.',
    readTime: '5 min',
    category: 'MongoDB CRUD',
    content: {
      overview: 'Updates in MongoDB use atomic field update operators such as $set (modifies or adds fields), $inc (increments numbers), and $unset (removes fields).',
      sections: [
        {
          heading: 'Atomic Update Operators',
          body: 'Updating single and multiple documents:',
          code: `// Update a single document:
db.products.updateOne(
  { name: "Gaming Mouse" },
  { 
    $set: { price: 49.99 },
    $inc: { views: 1 }
  }
);

// Update all matching documents:
db.products.updateMany(
  { inStock: false },
  { $set: { status: "Backorder" } }
);

// Upsert (insert if not found):
db.analytics.updateOne(
  { page: "/checkout" },
  { $inc: { visits: 1 } },
  { upsert: true }
);`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 11. Delete Documents
  {
    id: 'mongo-delete',
    title: 'MongoDB Delete Documents',
    slug: 'mongo-delete',
    summary: 'Remove documents cleanly using deleteOne() and deleteMany().',
    readTime: '3 min',
    category: 'MongoDB CRUD',
    content: {
      overview: 'Deleting documents deletes the specified records permanently. Always test the query criteria with find() before running deleteMany()!',
      sections: [
        {
          heading: 'deleteOne and deleteMany Syntax',
          body: 'Removing documents by filter:',
          code: `// Delete the first document matching filter:
db.products.deleteOne({ _id: ObjectId("6727a81b2e106df9a149c001") });

// Delete all documents matching criteria:
db.products.deleteMany({ inStock: false, views: 0 });`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 12. Aggregation Pipeline
  {
    id: 'mongo-aggregation',
    title: 'MongoDB Aggregation Pipeline',
    slug: 'mongo-aggregation',
    summary: 'Transform, filter, and calculate metrics through multi-stage pipelines with $match, $group, and $sort.',
    readTime: '6 min',
    category: 'MongoDB Advanced',
    content: {
      overview: 'The aggregation pipeline is MongoDB’s framework for data transformations. Documents enter a multi-stage pipeline where each stage transforms the documents as they pass through.',
      sections: [
        {
          heading: 'Pipeline Stages Example',
          body: 'Calculate average order value per customer category:',
          code: `db.orders.aggregate([
  // Stage 1: Filter completed orders
  { $match: { status: "completed" } },

  // Stage 2: Group by customer region & calculate totals
  {
    $group: {
      _id: "$customerRegion",
      totalRevenue: { $sum: "$totalAmount" },
      avgOrderValue: { $avg: "$totalAmount" },
      orderCount: { $sum: 1 }
    }
  },

  // Stage 3: Sort by totalRevenue descending
  { $sort: { totalRevenue: -1 } }
]);`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 13. Indexing
  {
    id: 'mongo-indexing',
    title: 'MongoDB Indexing & Performance',
    slug: 'mongo-indexing',
    summary: 'Accelerate query performance with single field, compound, and text indexes using createIndex().',
    readTime: '5 min',
    category: 'MongoDB Advanced',
    content: {
      overview: 'Without indexes, MongoDB must perform a collection scan (COLLSCAN) examining every document. Indexes store a small portion of the collection’s data in an ordered B-tree structure.',
      sections: [
        {
          heading: 'Creating and Inspecting Indexes',
          body: 'Index creation syntax:',
          code: `// Create single field index:
db.users.createIndex({ email: 1 }, { unique: true });

// Create compound index:
db.orders.createIndex({ customerId: 1, orderDate: -1 });

// Inspect index performance with explain():
db.orders.find({ customerId: "u123" }).explain("executionStats");`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 14. Schema Validation
  {
    id: 'mongo-schema-validation',
    title: 'MongoDB Schema Validation',
    slug: 'mongo-schema-validation',
    summary: 'Enforce structural consistency and data types on flexible collections using $jsonSchema rules.',
    readTime: '5 min',
    category: 'MongoDB Advanced',
    content: {
      overview: 'Although MongoDB has a dynamic schema, you can enforce strict schema validation rules using $jsonSchema to guarantee that documents adhere to type and required field constraints.',
      sections: [
        {
          heading: 'Creating Collections with $jsonSchema',
          body: 'Enforcing required fields and data types:',
          code: `db.createCollection("contacts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "phone"],
      properties: {
        name: {
          bsonType: "string",
          description: "Must be a string and is required"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+$",
          description: "Must be a valid email format"
        },
        phone: {
          bsonType: "string"
        }
      }
    }
  }
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Schema Validation Active</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Collection: contacts
Schema: $jsonSchema validator active
Enforcement: STRICT (Rejects documents missing required fields)</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
