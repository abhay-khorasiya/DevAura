import { TutorialChapter } from '../../../types';

export const htmlFormsChapters: TutorialChapter[] = [
  // 40. HTML Forms
  {
    id: 'html-forms',
    title: 'HTML Forms',
    slug: 'html-forms',
    summary: 'An HTML form is used to collect user input. The user input is most often sent to a server for processing.',
    readTime: '7 min',
    category: 'HTML Forms',
    content: {
      overview: 'The HTML <form> element is used to create an HTML form for user input: <form action="action_page.php" method="POST">...</form>. The form element is a container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons, and more.',
      sections: [
        {
          heading: '1. What is an HTML Form & The <form> Element',
          body: `An HTML form is an interactive section of a webpage that collects user input and sends it to a server for processing (e.g. logging in, registering, or checking out).

• **Container:** The \`<form>\` tag acts as a container for all interactive controls (inputs, checkboxes, buttons).
• **Action:** Specifies where to send data when the user clicks submit.
• **Method:** Specifies how to send data (usually \`GET\` or \`POST\`).`,
          code: `<form action="/submit-account" method="POST">
  <!-- Interactive form controls go here -->
  <p>Form content container</p>
</form>`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'All input fields that should be sent to the server must have a name attribute.',
            'Never place a form inside another form—nested forms are invalid in HTML5.'
          ]
        },
        {
          heading: '2. Text Input Fields & The <label> Element',
          body: `The \`<input type="text">\` defines a single-line text input field.

The \`<label>\` tag is essential for accessibility:
• Clicking the label text automatically focuses the associated input field.
• Screen readers announce the label text when the input receives focus.
• The \`for\` attribute of \`<label>\` must match the \`id\` attribute of the \`<input>\`.`,
          code: `<label for="fname">First name:</label><br>
<input type="text" id="fname" name="fname" placeholder="Alex"><br><br>

<label for="lname">Last name:</label><br>
<input type="text" id="lname" name="lname" placeholder="Miller">`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;padding:20px;">
  <h3>Accessible Form Inputs</h3>
  <form>
    <label for="username" style="font-weight:bold;color:#4f46e5;">Username:</label><br>
    <input type="text" id="username" name="username" placeholder="developer" style="padding:8px;border:1px solid #cbd5e1;border-radius:6px;width:250px;margin-top:4px;"><br><br>
    <p style="font-size:12px;color:#64748b;">Click on the label "Username" above to see the input focus automatically!</p>
  </form>
</body>
</html>`,
          tips: [
            'Always link <label for="..."> with <input id="..."> for WCAG accessibility compliance.',
            'Use placeholder="" to provide temporary hints to visitors.'
          ]
        },
        {
          heading: '3. The Submit Button (<input type="submit">)',
          body: `The \`<input type="submit">\` defines a button for submitting the form data to the server endpoint specified in the form's \`action\` attribute:`,
          code: `<form action="/register" method="POST">
  <label for="email">Email Address:</label><br>
  <input type="email" id="email" name="email" required><br><br>

  <input type="submit" value="Register Now">
</form>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'You can also use <button type="submit">Submit</button> which allows HTML icons inside the button.',
            'If you omit the type attribute on a <button> inside a form, it defaults to type="submit".'
          ]
        }
      ]
    }
  },

  // 41. HTML Form Attributes
  {
    id: 'html-form-attributes',
    title: 'HTML Form Attributes (action, target, method, autocomplete, novalidate)',
    slug: 'html-form-attributes',
    summary: 'The action attribute defines where to send data. Method defines GET or POST. Target, autocomplete, and novalidate.',
    readTime: '7 min',
    category: 'HTML Forms',
    content: {
      overview: 'This chapter describes the different attributes for the HTML <form> element: action, target, method, autocomplete, and novalidate.',
      sections: [
        {
          heading: '1. The action and target Attributes',
          body: `• **The \`action\` Attribute:** Defines the URL where form data is submitted (e.g. \`/api/login\` or \`process.php\`). If omitted, the form submits to the current page URL.
• **The \`target\` Attribute:** Specifies where to display the response received after submitting the form (\`_blank\` opens in new tab, \`_self\` in current window).`,
          code: `<!-- Submit to endpoint and open confirmation in a new tab -->
<form action="/api/subscribe" method="POST" target="_blank">
  <input type="email" name="newsletter_email" placeholder="Enter email">
  <input type="submit" value="Subscribe">
</form>`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'Use action="/" or a relative path when building single-page applications.',
            'target="_blank" is helpful for PDF generators or invoice downloads from forms.'
          ]
        },
        {
          heading: '2. The method Attribute: GET vs POST',
          body: `The HTTP method specifies how the data is sent to the web server:

• **GET (Default):**
  - Form data is appended directly to the URL as query parameters: \`/search?q=javascript&page=1\`.
  - **Never** use GET for passwords, credit cards, or sensitive data!
  - Good for search forms, filters, and shareable bookmarked URLs.
  - Has URL length limitations (~2048 characters).

• **POST:**
  - Form data is sent inside the HTTP request body.
  - Data is invisible in the browser address bar.
  - Has no size limitations; required for file uploads and password forms.`,
          code: `<!-- 1. Search Form using GET -->
<form action="/search" method="GET">
  <input type="text" name="query" placeholder="Search courses...">
  <input type="submit" value="Search">
</form>

<!-- 2. Secure Login Form using POST -->
<form action="/login" method="POST">
  <input type="text" name="username">
  <input type="password" name="password">
  <input type="submit" value="Sign In">
</form>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Always use method="POST" when creating or modifying records in a database.',
            'GET requests can be cached and remain in browser history.'
          ]
        },
        {
          heading: '3. autocomplete and novalidate Attributes',
          body: `• **\`autocomplete="on|off"\`:** Specifies whether the browser can automatically complete form inputs based on the user's past entries.
• **\`novalidate\`:** A boolean attribute. When present, it specifies that the form should NOT be validated when submitted (useful for testing server-side validation).`,
          code: `<form action="/checkout" method="POST" autocomplete="on" novalidate>
  <label for="cc">Cardholder Name:</label>
  <input type="text" id="cc" name="cardholder" autocomplete="name">
  <input type="submit" value="Pay Now">
</form>`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'Set autocomplete="off" on sensitive fields like one-time passwords (OTP).',
            'novalidate is helpful when designing custom JavaScript form validators.'
          ]
        }
      ]
    }
  },

  // 42. HTML Form Elements
  {
    id: 'html-form-elements',
    title: 'HTML Form Elements (label, select, textarea, button, fieldset, datalist)',
    slug: 'html-form-elements',
    summary: 'The form elements: input, label, select, option, optgroup, textarea, button, fieldset, legend, datalist, and output.',
    readTime: '8 min',
    category: 'HTML Forms',
    content: {
      overview: 'The HTML <form> element can contain one or more of the following form elements: <input>, <label>, <select>, <textarea>, <button>, <fieldset>, <legend>, <datalist>, <output>, and <optgroup>.',
      sections: [
        {
          heading: '1. Dropdown Menus (<select>, <option> & <optgroup>)',
          body: `The \`<select>\` element defines a drop-down list of choices:

• \`<option>\` defines each choice in the menu.
• \`<optgroup>\` groups related choices under an unselectable category header.
• Add the \`selected\` attribute to define the default choice.`,
          code: `<label for="course">Select Course:</label>
<select id="course" name="course">
  <optgroup label="Frontend">
    <option value="html">HTML5 Masterclass</option>
    <option value="react" selected>React 19 Foundations</option>
  </optgroup>
  <optgroup label="Backend">
    <option value="node">Node.js Runtimes</option>
    <option value="python">Python 3</option>
  </optgroup>
</select>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Add the multiple attribute to allow visitors to pick more than one option.',
            'Always provide a value="" attribute for each option tag.'
          ]
        },
        {
          heading: '2. Multi-Line Text Inputs (<textarea>)',
          body: `The \`<textarea>\` element defines a multi-line text input field (often used for comments, reviews, or messages):

• \`rows\` specifies the visible number of lines.
• \`cols\` specifies the visible width of the text area.`,
          code: `<label for="bio">Developer Bio:</label><br>
<textarea id="bio" name="bio" rows="4" cols="40" placeholder="Tell us about yourself...">
I am a passionate software engineer building with DevAura!
</textarea>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Users can resize textareas in modern browsers by dragging the bottom-right corner.',
            'Use CSS resize: vertical or resize: none to control textarea resizing.'
          ]
        },
        {
          heading: '3. Form Grouping (<fieldset> & <legend>)',
          body: `The \`<fieldset>\` element is used to group related data in a form, drawing a visible box around them.

The \`<legend>\` element defines a caption for the \`<fieldset>\` box:`,
          code: `<fieldset style="border:1px solid #cbd5e1; border-radius:8px; padding:16px;">
  <legend style="font-weight:bold; color:#4f46e5; padding:0 8px;">Personal Information</legend>
  
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name"><br><br>
  
  <label for="birth">Date of Birth:</label><br>
  <input type="date" id="birth" name="birth">
</fieldset>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Fieldsets are ideal for long checkout, registration, or tax forms.',
            'Great for screen-reader users navigating multi-step forms.'
          ]
        },
        {
          heading: '4. Autocomplete Input Lists (<datalist>)',
          body: `The \`<datalist>\` element specifies a list of pre-defined options for an \`<input>\` element. 

As the user types in the input field, the browser provides an autocomplete dropdown while still allowing custom text!`,
          code: `<label for="browser">Choose your preferred browser:</label>
<input list="browsers" id="browser" name="browser" placeholder="Type or select...">

<datalist id="browsers">
  <option value="Google Chrome">
  <option value="Mozilla Firefox">
  <option value="Apple Safari">
  <option value="Microsoft Edge">
  <option value="Brave">
</datalist>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'The input tag must have list="datalist-id" pointing to the datalist id.',
            'Unlike <select>, visitors can either choose from the list OR type custom text.'
          ]
        }
      ]
    }
  },

  // 43. HTML Input Types
  {
    id: 'html-input-types',
    title: 'HTML Input Types',
    slug: 'html-input-types',
    summary: 'text, password, submit, reset, radio, checkbox, button, color, date, datetime-local, email, file, month, number, range, search, tel, time, url, week.',
    readTime: '8 min',
    category: 'HTML Forms',
    content: {
      overview: 'The <input> element is the most important form element. An <input> element can have more than 20 different types depending on the type attribute.',
      sections: [
        {
          heading: '1. Password, Email, Tel & URL Inputs',
          body: `Modern input types provide built-in validation and mobile-optimized software keyboards:

• \`type="password"\` — Masks characters with bullets or asterisks.
• \`type="email"\` — Validates email syntax and opens email keyboard on smartphones (@ button).
• \`type="tel"\` — Opens numeric telephone keypad on mobile devices.
• \`type="url"\` — Validates full URL format (http/https).`,
          code: `<form>
  <!-- Password Field (Masked) -->
  <label for="pwd">Password:</label><br>
  <input type="password" id="pwd" name="pwd" required><br><br>

  <!-- Email with native @ keypad -->
  <label for="em">Email Address:</label><br>
  <input type="email" id="em" name="email" required><br><br>

  <!-- Telephone -->
  <label for="phone">Phone Number:</label><br>
  <input type="tel" id="phone" name="phone" placeholder="123-456-7890">
</form>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'HTML5 validates type="email" automatically before the form can submit.',
            'Always use HTTPS when transmitting type="password" data over the internet.'
          ]
        },
        {
          heading: '2. Radio Buttons vs Checkboxes',
          body: `• **Radio Buttons (\`type="radio"\`):** Allows a user to select **only one** option from a defined set. All radio buttons in the same group must share the exact same \`name\` attribute.
• **Checkboxes (\`type="checkbox"\`):** Allows a user to select **zero, one, or multiple** options from a set.`,
          code: `<!-- Radio Group (Pick One) -->
<p>Select your favorite track:</p>
<input type="radio" id="html" name="track" value="HTML" checked>
<label for="html">HTML</label><br>
<input type="radio" id="css" name="track" value="CSS">
<label for="css">CSS</label><br>
<input type="radio" id="js" name="track" value="JavaScript">
<label for="js">JavaScript</label>

<!-- Checkboxes (Pick Multiple) -->
<p>Select your skills:</p>
<input type="checkbox" id="skill1" name="skills" value="git">
<label for="skill1">Git Version Control</label><br>
<input type="checkbox" id="skill2" name="skills" value="sql">
<label for="skill2">SQL Database Querying</label>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Use checked to make an option selected by default when the page loads.',
            'If radio buttons have different name attributes, they will not be grouped together!'
          ]
        },
        {
          heading: '3. Sliders, Color Pickers & Date Pickers',
          body: `HTML5 includes specialized native picker widgets:

• \`type="color"\` — Native visual color picker dialog.
• \`type="range"\` — Horizontal slider control (use \`min\`, \`max\`, and \`step\`).
• \`type="date"\` — Native interactive calendar date picker.`,
          code: `<!-- Color Picker Dialog -->
<label for="favcolor">Select your theme color:</label>
<input type="color" id="favcolor" name="favcolor" value="#4f46e5"><br><br>

<!-- Range Slider (0 to 100) -->
<label for="vol">Volume (between 0 and 100):</label>
<input type="range" id="vol" name="vol" min="0" max="100" value="75"><br><br>

<!-- Calendar Date Picker -->
<label for="birthday">Birthday:</label>
<input type="date" id="birthday" name="birthday">`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'type="date" automatically formats according to the user\'s local operating system settings.',
            'type="range" returns a number string between min and max.'
          ]
        }
      ]
    }
  },

  // 44. HTML Input Attributes
  {
    id: 'html-input-attributes',
    title: 'HTML Input Attributes',
    slug: 'html-input-attributes',
    summary: 'value, readonly, disabled, size, maxlength, min, max, multiple, pattern, placeholder, required, step, autofocus.',
    readTime: '8 min',
    category: 'HTML Forms',
    content: {
      overview: 'This chapter describes the different attributes for the HTML <input> element: value, readonly, disabled, size, maxlength, min, max, multiple, pattern, placeholder, required, step, and autofocus.',
      sections: [
        {
          heading: '1. Value, Readonly & Disabled Attributes',
          body: `• \`value\` — Specifies an initial or current value for an input field.
• \`readonly\` — The input cannot be modified by the user, but its value **is** sent upon form submission.
• \`disabled\` — The input is unusable and grayed out, and its value is **not** sent upon form submission.`,
          code: `<!-- Normal with pre-filled value -->
<input type="text" name="user" value="JohnDoe"><br><br>

<!-- Readonly (Cannot edit, but submits to server) -->
<input type="text" name="country" value="United States" readonly><br><br>

<!-- Disabled (Cannot edit, does NOT submit) -->
<input type="text" name="role" value="SuperAdmin" disabled>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Use readonly when displaying non-editable account numbers or reference IDs that must submit.',
            'Use disabled for fields that only unlock after a user checks a terms box.'
          ]
        },
        {
          heading: '2. Required, Placeholder, Pattern & Autofocus',
          body: `Form validation and ergonomic attributes:

• \`required\` — Form cannot submit if this field is empty.
• \`placeholder\` — Displays a helpful hint inside the input when empty.
• \`pattern\` — Regular expression (RegEx) that the input value must match.
• \`autofocus\` — Automatically gives keyboard focus to this element on page load.`,
          code: `<form>
  <!-- Automatically focused on page load, required -->
  <label for="user">Username (Required):</label><br>
  <input type="text" id="user" name="username" placeholder="john_doe" required autofocus><br><br>

  <!-- RegEx Pattern: Exactly 3 letters followed by 4 digits (e.g. ABC1234) -->
  <label for="code">Promo Code (3 letters + 4 numbers):</label><br>
  <input type="text" id="code" name="code" pattern="[A-Za-z]{3}[0-9]{4}" title="Three letters followed by four numbers"><br><br>

  <input type="submit" value="Submit Form">
</form>`,
          codeLanguage: 'html',
          interactive: true,
          tips: [
            'Always provide a title attribute when using pattern to explain the expected format on error.',
            'Only one element on a page can have the autofocus attribute.'
          ]
        }
      ]
    }
  },

  // 45. HTML Input Form Attributes
  {
    id: 'html-form-attributes-input',
    title: 'HTML Input Form Attributes',
    slug: 'html-form-attributes-input',
    summary: 'The input form attributes: formaction, formmethod, formtarget, formnovalidate, formenctype.',
    readTime: '6 min',
    category: 'HTML Forms',
    content: {
      overview: 'The input form attributes allow submit buttons to override the attributes of the <form> element: formaction, formenctype, formmethod, formnovalidate, and formtarget.',
      sections: [
        {
          heading: '1. Overriding Form Submission with formaction',
          body: `The \`formaction\` attribute specifies the URL of the file that will process the input when the form is submitted. 

This allows you to have **multiple submit buttons** in a single form that submit to different server endpoints:`,
          code: `<form action="/action_page.php" method="POST">
  <label for="email">Email Address:</label>
  <input type="email" id="email" name="email"><br><br>

  <!-- Submits to default action_page.php -->
  <input type="submit" value="Submit Standard">

  <!-- Overrides and submits to /admin_verify.php -->
  <input type="submit" formaction="/admin_verify.php" value="Submit as Admin">
</form>`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'formaction works on <input type="submit"> and <button type="submit">.',
            'Useful for having "Save as Draft" and "Publish Now" buttons in the same form.'
          ]
        },
        {
          heading: '2. Overriding Method & Target (formmethod & formtarget)',
          body: `• \`formmethod\` — Overrides the form's HTTP method (\`GET\` or \`POST\`).
• \`formtarget\` — Overrides the form's target destination (\`_blank\`, \`_self\`).`,
          code: `<form action="/reports" method="POST">
  <input type="submit" value="Save Report (POST in current tab)">
  <input type="submit" formmethod="GET" formtarget="_blank" value="Preview Report (GET in new tab)">
</form>`,
          codeLanguage: 'html',
          interactive: false,
          tips: [
            'formtarget="_blank" is great for previewing a blog post draft in a new tab.',
            'formmethod is only supported on submit buttons.'
          ]
        }
      ]
    }
  }
];
