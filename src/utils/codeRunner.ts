// Mock sample database for SQL execution
export const sampleDb = {
  customers: [
    { CustomerID: 1, CustomerName: 'Alfreds Futterkiste', ContactName: 'Maria Anders', City: 'Berlin', Country: 'Germany' },
    { CustomerID: 2, CustomerName: 'Ana Trujillo Emparedados', ContactName: 'Ana Trujillo', City: 'México D.F.', Country: 'Mexico' },
    { CustomerID: 3, CustomerName: 'Antonio Moreno Taquería', ContactName: 'Antonio Moreno', City: 'México D.F.', Country: 'Mexico' },
    { CustomerID: 4, CustomerName: 'Around the Horn', ContactName: 'Thomas Hardy', City: 'London', Country: 'UK' },
    { CustomerID: 5, CustomerName: 'Berglunds snabbköp', ContactName: 'Christina Berglund', City: 'Luleå', Country: 'Sweden' },
    { CustomerID: 6, CustomerName: 'Blauer See Delikatessen', ContactName: 'Hanna Moos', City: 'Mannheim', Country: 'Germany' },
    { CustomerID: 7, CustomerName: 'Blondel père et fils', ContactName: 'Frédérique Citeaux', City: 'Strasbourg', Country: 'France' }
  ],
  orders: [
    { OrderID: 10248, CustomerID: 1, OrderDate: '2026-07-04', Amount: 440.00 },
    { OrderID: 10249, CustomerID: 2, OrderDate: '2026-07-05', Amount: 1860.50 },
    { OrderID: 10250, CustomerID: 4, OrderDate: '2026-07-08', Amount: 650.25 },
    { OrderID: 10251, CustomerID: 6, OrderDate: '2026-07-08', Amount: 320.00 },
    { OrderID: 10252, CustomerID: 7, OrderDate: '2026-07-09', Amount: 2450.00 }
  ],
  products: [
    { ProductID: 1, ProductName: 'Aura Cloud Pro', Price: 99.00, InStock: 45 },
    { ProductID: 2, ProductName: 'Aura Terminal Kit', Price: 49.00, InStock: 120 },
    { ProductID: 3, ProductName: 'Modern Code Suite', Price: 149.00, InStock: 22 },
    { ProductID: 4, ProductName: 'DevAura Pro Badge', Price: 19.00, InStock: 500 }
  ]
};

export interface SqlResult {
  columns: string[];
  rows: any[][];
  rowCount: number;
  message?: string;
  error?: string;
}

// Executes client-side SQL-like queries
export function executeSql(query: string): SqlResult {
  const trimmed = query.trim().replace(/;$/, '');
  const lower = trimmed.toLowerCase();

  try {
    if (!lower.startsWith('select')) {
      return {
        columns: ['Status'],
        rows: [['Only SELECT statements are currently simulated in DevAura Live SQL.']],
        rowCount: 1,
        message: 'Query parsed in read-only sandbox mode.'
      };
    }

    // Determine target table
    let tableData: any[] = [];
    let tableName = 'Customers';

    if (lower.includes('from orders')) {
      tableData = [...sampleDb.orders];
      tableName = 'Orders';
    } else if (lower.includes('from products')) {
      tableData = [...sampleDb.products];
      tableName = 'Products';
    } else {
      tableData = [...sampleDb.customers];
      tableName = 'Customers';
    }

    // Handle INNER JOIN between Orders and Customers
    if (lower.includes('inner join customers') || lower.includes('join customers')) {
      const joined: any[] = [];
      sampleDb.orders.forEach(order => {
        const customer = sampleDb.customers.find(c => c.CustomerID === order.CustomerID);
        if (customer) {
          joined.push({
            OrderID: order.OrderID,
            CustomerID: order.CustomerID,
            CustomerName: customer.CustomerName,
            City: customer.City,
            Country: customer.Country,
            OrderDate: order.OrderDate,
            Amount: '$' + order.Amount.toFixed(2)
          });
        }
      });
      tableData = joined;
    }

    // Filter WHERE
    if (lower.includes('where')) {
      if (lower.includes("country = 'germany'") && lower.includes("country = 'mexico'")) {
        tableData = tableData.filter(r => r.Country === 'Germany' || r.Country === 'Mexico');
      } else if (lower.includes("country = 'germany'")) {
        tableData = tableData.filter(r => r.Country === 'Germany');
      } else if (lower.includes("country = 'mexico'")) {
        tableData = tableData.filter(r => r.Country === 'Mexico');
      } else if (lower.includes("country = 'uk'")) {
        tableData = tableData.filter(r => r.Country === 'UK');
      } else if (lower.includes("country = 'france'")) {
        tableData = tableData.filter(r => r.Country === 'France');
      } else if (lower.includes("amount > 500")) {
        tableData = tableData.filter(r => (typeof r.Amount === 'number' ? r.Amount : parseFloat(r.Amount.replace('$', ''))) > 500);
      }
    }

    // ORDER BY
    if (lower.includes('order by')) {
      if (lower.includes('desc')) {
        tableData.reverse();
      }
    }

    if (tableData.length === 0) {
      return {
        columns: ['Notice'],
        rows: [['0 rows returned matching the query criteria.']],
        rowCount: 0
      };
    }

    // Determine columns
    const allCols = Object.keys(tableData[0]);
    let selectedCols = allCols;

    if (!trimmed.includes('*')) {
      const selectPart = trimmed.substring(6, trimmed.toLowerCase().indexOf('from')).trim();
      const requested = selectPart.split(',').map(c => {
        const cleaned = c.trim().split('.').pop() || c.trim();
        return cleaned;
      });
      const validRequested = requested.filter(c => allCols.some(col => col.toLowerCase() === c.toLowerCase()));
      if (validRequested.length > 0) {
        selectedCols = validRequested.map(r => allCols.find(col => col.toLowerCase() === r.toLowerCase()) || r);
      }
    }

    const rows = tableData.map(row => selectedCols.map(col => row[col] !== undefined ? String(row[col]) : 'NULL'));

    return {
      columns: selectedCols,
      rows,
      rowCount: rows.length,
      message: `Executed successfully on ${tableName}. ${rows.length} record(s) returned.`
    };
  } catch (err: any) {
    return {
      columns: ['Error'],
      rows: [[err.message || 'Syntax error in SQL query']],
      rowCount: 0,
      error: err.message
    };
  }
}

// Client-side Python script interpreter simulation
export function runPythonSimulation(code: string): string[] {
  const outputs: string[] = [];
  const lines = code.split('\n');

  try {
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;

      // Handle print(...)
      if (trimmed.startsWith('print(') && trimmed.endsWith(')')) {
        const inner = trimmed.substring(6, trimmed.length - 1).trim();
        // Check for f-string
        if (inner.startsWith('f"') || inner.startsWith("f'")) {
          let str = inner.slice(2, -1);
          // Simple interpolation for known variables
          str = str.replace(/\{user\}/g, 'Alex')
                   .replace(/\{name\}/g, 'Aura Dev')
                   .replace(/\{rank\}/g, 'Architect Level 🚀')
                   .replace(/\{k\}: \{v\}/g, 'total_languages: 5\nprimary: Python\nfavorites: [\'Rust\', \'Go\']')
                   .replace(/\{[a-zA-Z0-9_]+\}/g, 'DevAura');
          outputs.push(str);
        } else if ((inner.startsWith('"') && inner.endsWith('"')) || (inner.startsWith("'") && inner.endsWith("'"))) {
          outputs.push(inner.slice(1, -1));
        } else if (inner.includes(',')) {
          // print("Total:", len(x))
          outputs.push(inner.replace(/['"]/g, '').split(',').join(' '));
        } else {
          outputs.push(inner);
        }
      }
    }

    if (outputs.length === 0) {
      outputs.push("Program executed successfully. (No stdout generated)");
    }
  } catch (err: any) {
    outputs.push(`Traceback (most recent call last):\n  Error: ${err.message}`);
  }

  return outputs;
}
