import { TutorialChapter } from '../../types';

export const excelChapters: TutorialChapter[] = [
  // 1. Excel HOME
  {
    id: 'excel-home',
    title: 'Excel HOME',
    slug: 'excel-home',
    summary: 'Microsoft Excel is the world standard spreadsheet program for organizing, calculating, and analyzing data.',
    readTime: '3 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'Microsoft Excel is a powerful electronic spreadsheet software used for storing, organizing, calculating, and visualizing data. From Fortune 500 financial models to personal budgets, Excel is the universal tool for data management.',
      sections: [
        {
          heading: 'Your First Excel Formula',
          body: 'All Excel formulas begin with an equal sign (=):',
          code: `=SUM(B2:B10)`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Spreadsheet Simulation</h3>
    <table style="width:100%; border-collapse:collapse; background:#fff; font-size:14px;">
      <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1; text-align:left;">
        <th style="padding:6px; border:1px solid #cbd5e1;"></th>
        <th style="padding:6px; border:1px solid #cbd5e1;">A</th>
        <th style="padding:6px; border:1px solid #cbd5e1;">B</th>
      </tr>
      <tr>
        <td style="background:#f1f5f9; padding:6px; border:1px solid #cbd5e1; font-weight:bold;">1</td>
        <td style="padding:6px; border:1px solid #cbd5e1;">Q1 Revenue</td>
        <td style="padding:6px; border:1px solid #cbd5e1; text-align:right;">\$15,000</td>
      </tr>
      <tr>
        <td style="background:#f1f5f9; padding:6px; border:1px solid #cbd5e1; font-weight:bold;">2</td>
        <td style="padding:6px; border:1px solid #cbd5e1;">Q2 Revenue</td>
        <td style="padding:6px; border:1px solid #cbd5e1; text-align:right;">\$22,500</td>
      </tr>
      <tr style="background:#e0e7ff; font-weight:bold;">
        <td style="background:#f1f5f9; padding:6px; border:1px solid #cbd5e1;">3</td>
        <td style="padding:6px; border:1px solid #cbd5e1; color:#4338ca;">Total (=SUM(B1:B2))</td>
        <td style="padding:6px; border:1px solid #cbd5e1; text-align:right; color:#4338ca;">\$37,500</td>
      </tr>
    </table>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Excel Intro & Interface
  {
    id: 'excel-intro',
    title: 'Excel Introduction & The Ribbon Interface',
    slug: 'excel-intro',
    summary: 'The Excel workspace: Ribbon tabs, Quick Access Toolbar, Formula Bar, Name Box, and Sheet Tabs.',
    readTime: '4 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'Understanding the Excel window layout is essential. The workspace is structured into rows (numbered 1, 2, 3...) and columns (lettered A, B, C...). The intersection of a row and a column is called a cell.',
      sections: [
        {
          heading: 'Core Interface Components',
          body: 'The Ribbon hosts primary tool tabs: Home, Insert, Page Layout, Formulas, Data, Review, and View.',
          code: `Interface Breakdown:
1. Ribbon: The command bar containing tabs and grouped buttons.
2. Name Box: Displays the address of the currently active cell (e.g. A1).
3. Formula Bar: Displays the actual formula or text value behind the selected cell.
4. Sheet Tabs: Switch between worksheets at the bottom left.`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Interface Anatomy:</h4>
    <div style="background:#fff; border:1px solid #cbd5e1; padding:8px 12px; border-radius:4px; font-family:monospace; margin-bottom:8px;">
      Name Box: [ C4 ] &nbsp;|&nbsp; Formula Bar: [ =SUM(A1:B3) ]
    </div>
    <p style="color:#64748b; font-size:13px;">Selected Cell is located at Column C, Row 4.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 3. Excel Cells & Ranges
  {
    id: 'excel-cells-ranges',
    title: 'Excel Cells and Ranges',
    slug: 'excel-cells-ranges',
    summary: 'Cell addresses (e.g., B4), contiguous ranges (A1:C10), non-contiguous selections, and navigation shortcuts.',
    readTime: '4 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'A cell is the smallest unit in a worksheet. A cell address is formed by combining its column letter and row number (e.g., C5). A range is a collection of two or more cells, written with a colon (e.g. A1:D10).',
      sections: [
        {
          heading: 'Selecting Ranges and Ranges in Formulas',
          body: 'A contiguous rectangular block of cells from top-left to bottom-right is written as A1:B5:',
          code: `=AVERAGE(A1:A5)       -- Single column range
=SUM(A1:D1)           -- Single row range
=COUNT(A1:C10)        -- 2D block containing 30 cells (3 columns x 10 rows)`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Range Cell Count Calculation:</h4>
    <p>Range: <code>B2:D6</code></p>
    <p>Columns: B, C, D (3 columns) &times; Rows: 2, 3, 4, 5, 6 (5 rows) = <strong>15 Cells</strong></p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 4. Excel AutoFill & Flash Fill
  {
    id: 'excel-autofill',
    title: 'Excel AutoFill & Flash Fill',
    slug: 'excel-autofill',
    summary: 'Generating sequences, days of the week, months, and AI pattern recognition with Flash Fill (Ctrl+E).',
    readTime: '4 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'AutoFill is one of Excel\'s greatest productivity features. By dragging the small green square (Fill Handle) at the bottom-right corner of a cell, Excel intelligently completes series of dates, numbers, formulas, and text patterns.',
      sections: [
        {
          heading: 'Flash Fill (Ctrl + E)',
          body: 'Flash Fill automatically senses patterns in your typing and extracts or merges data instantly:',
          code: `Column A: "John Doe"    -> Column B: "John"
Column A: "Sarah Connor" -> Press Ctrl+E -> Column B automatically fills "Sarah"!`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    AutoFill Series Examples:<br>
    - Jan, Feb, Mar &rarr; Apr, May, Jun...<br>
    - Monday, Tuesday &rarr; Wednesday, Thursday...<br>
    - 1, 2, 3 &rarr; 4, 5, 6, 7...
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 5. Excel Formatting
  {
    id: 'excel-formatting',
    title: 'Excel Cell Formatting',
    slug: 'excel-formatting',
    summary: 'Number styles (Currency, Accounting, Percent, Date, Decimals), font styling, and border controls.',
    readTime: '4 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'Formatting changes the appearance of data without modifying the underlying numeric value stored in the cell. For example, 0.25 can be formatted to display as 25.0% or \$0.25.',
      sections: [
        {
          heading: 'Formatting Codes',
          body: 'Common format styles in Excel:',
          code: `Standard Formats:
- General: 1250.5
- Number (2 decimals): 1,250.50
- Currency: $1,250.50
- Short Date: 03/11/2026
- Percentage: 75.0%`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <table style="width:100%; border-collapse:collapse; text-align:left;">
    <tr style="background:#f1f5f9; border-bottom:2px solid #cbd5e1;"><th style="padding:6px;">Raw Value</th><th style="padding:6px;">Format Type</th><th style="padding:6px;">Display</th></tr>
    <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px;">45000</td><td style="padding:6px;">Currency</td><td style="padding:6px; color:#4f46e5; font-weight:bold;">\$45,000.00</td></tr>
    <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px;">0.0825</td><td style="padding:6px;">Percentage</td><td style="padding:6px; color:#4f46e5; font-weight:bold;">8.25%</td></tr>
    <tr><td style="padding:6px;">46330</td><td style="padding:6px;">Date</td><td style="padding:6px; color:#4f46e5; font-weight:bold;">11/03/2026</td></tr>
  </table>
</body>
</html>`
        }
      ]
    }
  },

  // 6. Excel Basic Formulas
  {
    id: 'excel-arithmetic',
    title: 'Excel Basic Arithmetic & Formulas',
    slug: 'excel-arithmetic',
    summary: 'Addition (+), Subtraction (-), Multiplication (*), Division (/), Exponents (^), and Order of Operations (PEMDAS).',
    readTime: '4 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'Formulas are mathematical equations that perform calculations on values in your worksheet. Every formula must start with an equal sign (=). Excel follows the standard mathematical order of operations (PEMDAS).',
      sections: [
        {
          heading: 'Order of Operations',
          body: 'Parentheses take highest precedence:',
          code: `=5 + 2 * 3      -- Result: 11 (multiplication before addition)
=(5 + 2) * 3    -- Result: 21 (parentheses evaluated first)
=A1 * (1 - B1)  -- Net price after discount percentage in B1`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Formula: =100 * (1 - 0.20)<br>
    Evaluated: 100 * 0.80<br>
    Final Cell Value: 80
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 7. Excel Relative vs Absolute References
  {
    id: 'excel-cell-references',
    title: 'Excel Relative vs Absolute References ($)',
    slug: 'excel-cell-references',
    summary: 'The dollar sign ($) locks column and row coordinates ($A$1) when copying formulas across cells.',
    readTime: '5 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'By default, cell references are relative (e.g. A1). When you copy a formula across rows, the references shift automatically. An absolute reference ($A$1) locks the cell so it stays fixed no matter where the formula is copied. Press F4 to toggle.',
      sections: [
        {
          heading: 'Reference Modes Breakdown',
          body: 'Relative, absolute, and mixed references:',
          code: `A1   -- Relative: Both column and row change when copied.
$A$1 -- Absolute: Neither column nor row changes.
A$1  -- Mixed: Column changes, row is locked.
$A1  -- Mixed: Column is locked, row changes.`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Tax Rate Lookup Example:</h4>
    <p>Formula in C2: <code>=B2 * $E$1</code></p>
    <p>When copied down to C3: <code>=B3 * $E$1</code></p>
    <p style="color:#64748b; font-size:13px;">B2 moves to B3, but \$E\$1 remains anchored to the tax rate cell!</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 8. Excel SUM Function
  {
    id: 'excel-sum',
    title: 'Excel SUM Function',
    slug: 'excel-sum',
    summary: 'Adding up values across individual cells, continuous ranges, and multiple non-adjacent blocks.',
    readTime: '3 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'The Excel SUM function adds numbers, cell references, or ranges together. It is by far the most commonly used function in spreadsheet engineering.',
      sections: [
        {
          heading: 'SUM Syntax and Shortcuts',
          body: 'Press Alt + = (or Cmd + Shift + T on Mac) to automatically insert AutoSum:',
          code: `=SUM(A1:A10)            -- Sum continuous range
=SUM(A1, B5, C12)       -- Sum individual discrete cells
=SUM(A1:A5, C1:C5)      -- Sum multiple separate ranges`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    =SUM(10, 20, 30, 40)<br>
    Result: 100
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 9. Excel AVERAGE Function
  {
    id: 'excel-average',
    title: 'Excel AVERAGE Function',
    slug: 'excel-average',
    summary: 'Calculating the arithmetic mean of a range, ignoring blank cells and text strings.',
    readTime: '3 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'The AVERAGE function returns the average (arithmetic mean) of the arguments. It divides the sum of all numeric cells by the total count of numeric cells, ignoring blank and non-numeric entries.',
      sections: [
        {
          heading: 'AVERAGE Example',
          body: 'Computing test score averages:',
          code: `=AVERAGE(B2:B30)
=AVERAGE(A1:A5, C1:C5)`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <p>Values: 80, 90, 100</p>
    <p>Formula: <code>=AVERAGE(80, 90, 100)</code></p>
    <p style="color:#4f46e5; font-weight:bold;">Result: 90</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 10. Excel COUNT, COUNTA, COUNTBLANK
  {
    id: 'excel-count',
    title: 'Excel COUNT, COUNTA and COUNTBLANK',
    slug: 'excel-count',
    summary: 'COUNT counts numbers, COUNTA counts non-empty cells, and COUNTBLANK counts empty cells.',
    readTime: '4 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'Excel provides three primary counting functions depending on the data type you need to quantify.',
      sections: [
        {
          heading: 'Choosing the Right Counting Function',
          body: 'Differences between COUNT, COUNTA, and COUNTBLANK:',
          code: `=COUNT(A1:A10)       -- Counts cells containing NUMBERS only
=COUNTA(A1:A10)      -- Counts non-empty cells (numbers, text, errors, booleans)
=COUNTBLANK(A1:A10)   -- Counts strictly empty cells`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Sample Range: [ 10, "Apple", "", 45, "" ]<br>
    - COUNT: 2 (only 10, 45)<br>
    - COUNTA: 3 (10, "Apple", 45)<br>
    - COUNTBLANK: 2 (the two empty cells)
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 11. Excel MIN and MAX
  {
    id: 'excel-min-max',
    title: 'Excel MIN and MAX Functions',
    slug: 'excel-min-max',
    summary: 'Extracting the lowest and highest values from numeric data ranges.',
    readTime: '3 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'The MIN function returns the smallest number in a set of values. The MAX function returns the largest number in a set of values.',
      sections: [
        {
          heading: 'Finding Extremes',
          body: 'Syntax for range extremes:',
          code: `=MIN(C2:C100) -- Returns lowest sale amount
=MAX(C2:C100) -- Returns peak sale amount`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <p>Range: <code>{ 14, 88, 5, 92, 45 }</code></p>
    <p>MIN: <strong>5</strong> | MAX: <strong>92</strong></p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 12. Excel IF Function
  {
    id: 'excel-if',
    title: 'Excel Logical IF Function',
    slug: 'excel-if',
    summary: 'Branching decisions: =IF(logical_test, value_if_true, value_if_false), and nested IFs.',
    readTime: '5 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'The IF function is one of the most popular functions in Excel. It allows you to make logical comparisons between a value and what you expect. An IF statement has two results: if your comparison is True, or if your comparison is False.',
      sections: [
        {
          heading: 'IF Syntax and Nested IFs',
          body: 'Grading scores with IF statements:',
          code: `=IF(B2 >= 60, "Pass", "Fail")

-- Nested IF for letter grading:
=IF(B2 >= 90, "A", IF(B2 >= 80, "B", IF(B2 >= 70, "C", "F")))`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Score: 84<br>
    Formula: =IF(84 &gt;= 60, "Pass", "Fail")<br>
    Output: "Pass"
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 13. Excel AND, OR, NOT
  {
    id: 'excel-and-or',
    title: 'Excel AND, OR, and NOT Logical Functions',
    slug: 'excel-and-or',
    summary: 'Evaluating compound multi-criteria conditions inside IF statements.',
    readTime: '4 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'Use AND, OR, and NOT when you need to test multiple conditions simultaneously. AND returns TRUE only if all arguments evaluate to TRUE. OR returns TRUE if at least one argument evaluates to TRUE.',
      sections: [
        {
          heading: 'Combining IF with AND / OR',
          body: 'Checking bonus eligibility across sales and tenure:',
          code: `-- Both conditions must be met:
=IF(AND(B2 >= 100000, C2 >= 3), "Eligible for Bonus", "Not Eligible")

-- At least one condition met:
=IF(OR(D2 = "Senior", E2 = "Director"), 25, 15)`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Compound Evaluation:</h4>
    <p>Sales: \$120,000 (&ge; 100k: <strong>TRUE</strong>)</p>
    <p>Years: 4 (&ge; 3: <strong>TRUE</strong>)</p>
    <p style="color:#4f46e5; font-weight:bold;">AND(TRUE, TRUE) &rarr; "Eligible for Bonus"</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 14. Excel COUNTIF and SUMIF
  {
    id: 'excel-countif-sumif',
    title: 'Excel COUNTIF & SUMIF Functions',
    slug: 'excel-countif-sumif',
    summary: 'Counting and summing only the cells that fulfill a specified condition.',
    readTime: '5 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'COUNTIF counts the number of cells that meet a criterion. SUMIF adds the values in a specified range of cells that meet a specific condition.',
      sections: [
        {
          heading: 'COUNTIF and SUMIF Syntax',
          body: 'Counting items and summing sales by region:',
          code: `-- Count orders from "Europe"
=COUNTIF(A2:A100, "Europe")

-- Sum sales where region is "USA"
=SUMIF(A2:A100, "USA", C2:C100)`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    =SUMIF(RegionRange, "West", SalesRange)<br>
    Sum of sales in West region: $48,250
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 15. Excel VLOOKUP
  {
    id: 'excel-vlookup',
    title: 'Excel VLOOKUP Function',
    slug: 'excel-vlookup',
    summary: 'Vertical table search: =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]).',
    readTime: '5 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'VLOOKUP stands for \'Vertical Lookup\'. It is used to search for a value in the first column of a table, and then return a value in the same row from a column you specify. The 4th argument should almost always be FALSE (or 0) for exact match.',
      sections: [
        {
          heading: 'VLOOKUP Anatomy',
          body: 'Looking up a price based on Product ID in column A:',
          code: `=VLOOKUP(E2, A2:C50, 3, FALSE)
-- E2: The ID to find
-- A2:C50: Table range (lookup column MUST be the first column, A)
-- 3: Return value from the 3rd column (Price)
-- FALSE: Exact match only`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">VLOOKUP Lookup Simulation:</h4>
    <p>Searching for Product ID <code>#104</code> in Column A...</p>
    <p>Found row 5 &rarr; Retrieved Column 3 (Price): <strong style="color:#0284c7;">\$89.99</strong></p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 16. Excel XLOOKUP
  {
    id: 'excel-xlookup',
    title: 'Excel XLOOKUP Function (Modern Standard)',
    slug: 'excel-xlookup',
    summary: 'The modern, powerful successor to VLOOKUP: look left, exact match by default, and custom not-found handling.',
    readTime: '5 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'XLOOKUP is the modern replacement for VLOOKUP and HLOOKUP in Excel 365 and Excel 2021. It can look up in any direction (left or right), defaults to an exact match, and doesn\'t break when columns are added or deleted.',
      sections: [
        {
          heading: 'XLOOKUP Syntax Advantage',
          body: '=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found]):',
          code: `=XLOOKUP(E2, A2:A50, C2:C50, "Not Found")
-- 1. E2: Lookup value
-- 2. A2:A50: Column to search in
-- 3. C2:C50: Column to return from (can be left or right!)
-- 4. "Not Found": Clean fallback value without needing #N/A`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    =XLOOKUP("EMP-99", EmpID_Col, Salary_Col, "No Record")<br>
    Returned: $92,000 (Exact match, zero column count fragility)
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 17. Excel INDEX & MATCH
  {
    id: 'excel-index-match',
    title: 'Excel INDEX & MATCH (Dynamic Two-Way Lookup)',
    slug: 'excel-index-match',
    summary: 'The legendary pairing for flexible lookups across older Excel versions and two-way matrix lookups.',
    readTime: '5 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'INDEX and MATCH is the most flexible alternative to VLOOKUP for older versions of Excel. INDEX returns a value at a given row and column coordinate. MATCH returns the row number where a lookup value is found.',
      sections: [
        {
          heading: 'Combining INDEX and MATCH',
          body: 'Dynamic lookup looking to the left:',
          code: `=INDEX(A2:A50, MATCH(E2, B2:B50, 0))
-- MATCH finds what row E2 is located in within B2:B50
-- INDEX fetches the name from column A at that row index`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">INDEX/MATCH Advantage:</h4>
    <p>Unlike VLOOKUP, INDEX/MATCH can look up values to the <strong>left</strong> of the search column without rearranging table structure.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 18. Excel Text Functions
  {
    id: 'excel-text-functions',
    title: 'Excel Text Functions (CONCAT, TEXTJOIN, LEFT, RIGHT, MID, TRIM)',
    slug: 'excel-text-functions',
    summary: 'Cleaning and manipulating strings, removing unwanted whitespace, and string extraction.',
    readTime: '5 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'Text functions allow you to parse, format, concatenate, and clean text fields in Excel.',
      sections: [
        {
          heading: 'Common Text Functions',
          body: 'Concatenating and extracting parts of strings:',
          code: `=CONCAT(A2, " ", B2)             -- Combines First and Last Name
=TEXTJOIN(", ", TRUE, A2:D2)     -- Combines with delimiter, ignoring blanks
=LEFT(A2, 3)                     -- First 3 characters
=RIGHT(A2, 4)                    -- Last 4 characters (e.g. last 4 digits of SSN)
=TRIM(A2)                        -- Removes extra leading/trailing whitespace
=UPPER(A2)                       -- Converts to UPPERCASE`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    =TEXTJOIN(", ", TRUE, "Apple", "Banana", "Cherry")<br>
    Output: "Apple, Banana, Cherry"
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 19. Excel Date Functions
  {
    id: 'excel-date-functions',
    title: 'Excel Date & Time Functions (TODAY, NOW, DATEDIF)',
    slug: 'excel-date-functions',
    summary: 'Date arithmetic, calculating elapsed years/months with DATEDIF, and dynamic timestamps.',
    readTime: '4 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'In Excel, dates are stored internally as serial numbers (starting with January 1, 1900 as number 1). This makes date subtraction and arithmetic seamless.',
      sections: [
        {
          heading: 'Date Formulas',
          body: 'Dynamic dates and age calculations:',
          code: `=TODAY()                      -- Returns current system date
=NOW()                        -- Returns current date and time
=YEAR(TODAY())                -- Returns 2026
=DATEDIF(B2, TODAY(), "Y")    -- Calculates complete years elapsed (Age)`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <p>Birthdate: <code>1998-05-15</code></p>
    <p>Formula: <code>=DATEDIF(B2, TODAY(), "Y")</code></p>
    <p style="color:#4f46e5; font-weight:bold;">Calculated Age: 28 Years</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 20. Excel Sorting and Filtering
  {
    id: 'excel-sort-filter',
    title: 'Excel Sorting & Filtering Data',
    slug: 'excel-sort-filter',
    summary: 'AutoFilters, multi-level sorting (by department, then salary), and filter criteria.',
    readTime: '4 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'Sorting and filtering data lets you manipulate data so that you can see and organize only what is required. Sort arranges data alphabetically or numerically; Filter hides irrelevant rows temporarily.',
      sections: [
        {
          heading: 'AutoFilter Shortcut',
          body: 'Press Ctrl + Shift + L to toggle AutoFilters across your table header columns:',
          code: `Shortcut: Ctrl + Shift + L (Windows) / Cmd + Shift + F (Mac)
- Text Filter: Contains, Begins with, Equals
- Number Filter: Greater than, Top 10, Above Average
- Date Filter: This Month, Last Quarter, Next Year`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Filter Active:</h4>
    <p>Filter criteria: <code>Department = "Engineering" AND Salary &gt; 80000</code></p>
    <p>Displaying 18 of 240 records.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 21. Excel Conditional Formatting
  {
    id: 'excel-conditional-formatting',
    title: 'Excel Conditional Formatting',
    slug: 'excel-conditional-formatting',
    summary: 'Highlighting cells dynamically with rules, color scales, data bars, and formula conditions.',
    readTime: '4 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'Conditional formatting provides visual cues that help you understand your data at a glance. It allows you to automatically apply cell formatting (like background color or text styling) based on cell values.',
      sections: [
        {
          heading: 'Highlight Rules & Data Bars',
          body: 'Visualizing outliers and high-performers:',
          code: `Preset Rules:
- Highlight Cells > $10,000 (Light Green Fill)
- Highlight Cells < 0 (Light Red Fill with Dark Red Text)
- Duplicate Values (Highlight duplicates instantly)
- Data Bars (Mini in-cell bar charts representing relative magnitude)`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="display:flex; flex-direction:column; gap:6px;">
    <div style="background:#dcfce7; color:#166534; padding:6px 12px; border-radius:4px; font-weight:bold;">\$124,500 (Top 10% - Green)</div>
    <div style="background:#eff6ff; color:#1e40af; padding:6px 12px; border-radius:4px;">\$64,200 (Average)</div>
    <div style="background:#fee2e2; color:#991b1b; padding:6px 12px; border-radius:4px; font-weight:bold;">-\$12,400 (Negative Loss - Red)</div>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 22. Excel Pivot Tables
  {
    id: 'excel-pivot-tables',
    title: 'Excel Pivot Tables',
    slug: 'excel-pivot-tables',
    summary: 'Creating interactive summary tables from raw data: Rows, Columns, Values, and Filters.',
    readTime: '6 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'A Pivot Table is an interactive way to quickly summarize large amounts of data. You can use a Pivot Table to analyze numerical data in detail, and answer unanticipated questions about your data in seconds without writing a single formula.',
      sections: [
        {
          heading: 'The 4 Pivot Table Quadrants',
          body: 'Dragging fields into the Field List areas:',
          code: `1. Rows: Categorical values listed down the side (e.g., Sales Rep, Region).
2. Columns: Values listed across the top headers (e.g., Quarter, Year).
3. Values: The numeric metric to aggregate (e.g., Sum of Sales, Count of Orders).
4. Filters: Global report filters (e.g., Store Location).`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <table style="width:100%; border-collapse:collapse; font-size:14px;">
    <tr style="background:#4f46e5; color:#fff; text-align:left;">
      <th style="padding:6px;">Region</th><th style="padding:6px;">Q1</th><th style="padding:6px;">Q2</th><th style="padding:6px;">Total</th>
    </tr>
    <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px; font-weight:bold;">East</td><td style="padding:6px;">\$45,000</td><td style="padding:6px;">\$52,000</td><td style="padding:6px; font-weight:bold;">\$97,000</td></tr>
    <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px; font-weight:bold;">West</td><td style="padding:6px;">\$38,000</td><td style="padding:6px;">\$41,000</td><td style="padding:6px; font-weight:bold;">\$79,000</td></tr>
    <tr style="background:#f1f5f9; font-weight:bold;"><td style="padding:6px;">Grand Total</td><td style="padding:6px;">\$83,000</td><td style="padding:6px;">\$93,000</td><td style="padding:6px; color:#4f46e5;">\$176,000</td></tr>
  </table>
</body>
</html>`
        }
      ]
    }
  },

  // 23. Excel Charts
  {
    id: 'excel-charts',
    title: 'Excel Charts and Visualizations',
    slug: 'excel-charts',
    summary: 'Column, Bar, Line, Pie, and Combo charts, plus customizing titles, legends, and data labels.',
    readTime: '5 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'Charts allow you to visualize your data graphically. Choosing the right chart type is essential: Column/Bar for comparing items, Line for trends over time, and Pie for portions of a whole.',
      sections: [
        {
          heading: 'Selecting the Optimal Chart Type',
          body: 'Guidelines for business reports:',
          code: `- Column Chart: Compare values across discrete categories (e.g. Sales by Product)
- Line Chart: Show continuous trends over time (e.g. Monthly Revenue growth)
- Pie Chart: Show percentage breakdown of a single total (best with <= 5 slices)
- Scatter Plot: Show correlation between two numerical variables (e.g. Ad Spend vs Conversions)`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Chart Recommendation Engine:</h4>
    <p>Analyzing: <strong>Revenue across 12 months</strong></p>
    <p style="color:#4f46e5; font-weight:bold;">Recommended: Line Chart with Data Markers</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 24. Excel Data Validation
  {
    id: 'excel-data-validation',
    title: 'Excel Data Validation (Dropdown Lists)',
    slug: 'excel-data-validation',
    summary: 'Restricting user inputs to prevent errors, creating in-cell dropdown lists, and custom input alerts.',
    readTime: '4 min',
    category: 'Excel Tutorial',
    content: {
      overview: 'Data validation is a feature in Excel that you can use to define restrictions on what data can (or should) be entered in a cell. The most popular use case is creating an in-cell dropdown list.',
      sections: [
        {
          heading: 'Creating an In-Cell Dropdown List',
          body: 'Data Tab &rarr; Data Validation &rarr; Allow: List &rarr; Source: =DepartmentList:',
          code: `Validation Settings:
- Allow: List
- Source: In Progress, Completed, Blocked, Cancelled
- Error Alert: Stop ("Invalid status selected. Choose an option from the dropdown.")`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Interactive In-Cell Dropdown Simulator:</h4>
    <label style="font-size:14px; font-weight:bold; color:#334155;">Task Status: </label>
    <select style="padding:6px 12px; border:1px solid #cbd5e1; border-radius:4px; font-size:14px;">
      <option>In Progress</option>
      <option>Completed</option>
      <option>Blocked</option>
      <option>Cancelled</option>
    </select>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
