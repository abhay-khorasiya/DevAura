import { TutorialChapter } from '../../types';

export const angularJsChapters: TutorialChapter[] = [
  // 1. AngularJS HOME
  {
    id: 'ngjs-home',
    title: 'AngularJS HOME',
    slug: 'ngjs-home',
    summary: 'AngularJS (1.x) extends HTML with new attributes, delivering classic two-way data binding and client-side MVC architecture.',
    readTime: '3 min',
    category: 'AngularJS Tutorial',
    content: {
      overview: 'AngularJS is a JavaScript-based open-source front-end web framework developed by Google. It extends HTML with Directives, and binds data to HTML with Expressions.',
      sections: [
        {
          heading: 'Your First AngularJS Application',
          body: 'An interactive AngularJS application requires ng-app and ng-model:',
          code: `<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
<body>

<div ng-app="" ng-init="name='World'">
  <p>Enter your name: <input type="text" ng-model="name"></p>
  <h1>Hello {{name}}!</h1>
</div>

</body>
</html>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">AngularJS Two-Way Data Binding</h3>
    <input type="text" id="demoInput" value="DevAura Student" style="padding:8px 12px; border:1px solid #cbd5e1; border-radius:6px; font-size:14px; width:220px;" oninput="document.getElementById('demoOut').textContent = this.value">
    <h2 style="color:#0f172a; margin-top:12px;">Hello <span id="demoOut" style="color:#4f46e5;">DevAura Student</span>!</h2>
    <p style="color:#64748b; font-size:13px; margin-bottom:0;">Type in the input above to experience instant two-way binding without writing manual event handlers.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. AngularJS Intro
  {
    id: 'ngjs-intro',
    title: 'AngularJS Introduction',
    slug: 'ngjs-intro',
    summary: 'Discover directives (ng-app, ng-model, ng-bind) and declarative HTML templating.',
    readTime: '4 min',
    category: 'AngularJS Tutorial',
    content: {
      overview: 'AngularJS was designed on the belief that declarative code is best for building UIs and wiring software components together, while imperative code is best for business logic.',
      sections: [
        {
          heading: 'Core AngularJS Directives',
          body: 'The three foundational directives:\n1. ng-app: Defines the root element of an AngularJS application.\n2. ng-model: Binds the value of HTML controls (input, select, textarea) to application data.\n3. ng-bind: Binds the innerHTML of an element to application data (alternative to {{ }}).',
          code: `<div ng-app="">
  <input type="text" ng-model="city">
  <p>You live in: <span ng-bind="city"></span></p>
</div>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 3. AngularJS Expressions
  {
    id: 'ngjs-expressions',
    title: 'AngularJS Expressions',
    slug: 'ngjs-expressions',
    summary: 'Bind application data inside double braces {{ expression }} with numbers, strings, objects, and arrays.',
    readTime: '4 min',
    category: 'AngularJS Basics',
    content: {
      overview: 'AngularJS expressions are written inside double braces: {{ expression }}. They resolve data and output the result exactly where the expression is written.',
      sections: [
        {
          heading: 'Expressions with Types',
          body: 'Evaluating numbers, strings, and arrays inside templates:',
          code: `<div ng-app="" ng-init="quantity=5; cost=24; person={firstName:'Abhay', lastName:'Patel'}; points=[10, 25, 50]">
  <!-- Numeric arithmetic expression: -->
  <p>Total cost: {{ quantity * cost }}</p>

  <!-- String concatenation: -->
  <p>Full name: {{ person.firstName + " " + person.lastName }}</p>

  <!-- Array access: -->
  <p>High score: {{ points[2] }}</p>
</div>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 4. AngularJS Modules
  {
    id: 'ngjs-modules',
    title: 'AngularJS Modules',
    slug: 'ngjs-modules',
    summary: 'Define application containers using angular.module(name, [dependencies]).',
    readTime: '4 min',
    category: 'AngularJS Basics',
    content: {
      overview: 'A module defines an application. The module container holds different components like controllers, directives, filters, and services.',
      sections: [
        {
          heading: 'Creating and Linking Modules',
          body: 'JavaScript module definition and HTML ng-app connection:',
          code: `<!-- HTML container -->
<div ng-app="storeApp" ng-controller="storeCtrl">
  <h2>{{ storeName }}</h2>
</div>

<!-- JavaScript file -->
<script>
var app = angular.module("storeApp", []);

app.controller("storeCtrl", function($scope) {
  $scope.storeName = "DevAura Marketplace";
});
</script>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 5. AngularJS Directives
  {
    id: 'ngjs-directives',
    title: 'AngularJS Directives',
    slug: 'ngjs-directives',
    summary: 'Extend HTML with built-in directives (ng-init, ng-repeat, ng-show, ng-hide) and custom directives.',
    readTime: '5 min',
    category: 'AngularJS Directives',
    content: {
      overview: 'Directives are markers on a DOM element (such as an attribute, element name, or CSS class) that tell AngularJS to attach specified behavior.',
      sections: [
        {
          heading: 'Custom Directives with app.directive',
          body: 'Defining reusable HTML elements:',
          code: `app.directive("userCard", function() {
  return {
    restrict: "E", // E = Element name (<user-card>)
    template: "<div class='card'><h3>{{ user.name }}</h3><p>{{ user.role }}</p></div>"
  };
});`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 6. AngularJS Model
  {
    id: 'ngjs-model',
    title: 'AngularJS Model (ng-model)',
    slug: 'ngjs-model',
    summary: 'Two-way binding, user input tracking, validation states, and dynamic CSS styling.',
    readTime: '4 min',
    category: 'AngularJS Directives',
    content: {
      overview: 'The ng-model directive provides two-way binding between the view and model. It also tracks input validation states such as valid, dirty, and touched.',
      sections: [
        {
          heading: 'ng-model Input Validation States',
          body: 'AngularJS automatically adds CSS classes based on input state:\n- ng-valid / ng-invalid\n- ng-pristine (not yet modified) / ng-dirty\n- ng-touched (lost focus) / ng-untouched',
          code: `<form name="myForm">
  <input type="email" name="userEmail" ng-model="email" required>
  <span ng-show="myForm.userEmail.$touched && myForm.userEmail.$invalid" style="color:red;">
    A valid email address is required.
  </span>
</form>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 7. AngularJS Data Binding
  {
    id: 'ngjs-databinding',
    title: 'AngularJS Data Binding',
    slug: 'ngjs-databinding',
    summary: 'The Digest Cycle, $watch expressions, $apply, and automatic synchronization between View and Model.',
    readTime: '5 min',
    category: 'AngularJS Architecture',
    content: {
      overview: 'In traditional web applications, the developer writes manual event listeners to update the DOM when data changes. AngularJS automates this through the $digest cycle, tracking changes and updating the DOM automatically.',
      sections: [
        {
          heading: 'How Data Binding Works',
          body: 'Whenever a user interacts with an input bound via ng-model, AngularJS runs a digest cycle to notify all $watch listeners and update corresponding expressions.',
          code: `// Manual $apply when updating state from non-Angular events (e.g. native setTimeout):
setTimeout(function() {
  $scope.$apply(function() {
    $scope.status = "Updated after 2 seconds";
  });
}, 2000);`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 8. AngularJS Controllers
  {
    id: 'ngjs-controllers',
    title: 'AngularJS Controllers ($scope)',
    slug: 'ngjs-controllers',
    summary: 'Controllers manage application data flow and bind model properties to the $scope view context.',
    readTime: '4 min',
    category: 'AngularJS Controllers',
    content: {
      overview: 'Controllers are JavaScript constructor functions that control the data of AngularJS applications. The $scope parameter connects controller logic directly to HTML views.',
      sections: [
        {
          heading: 'Adding Methods to $scope',
          body: 'Controllers can expose properties and methods to views:',
          code: `app.controller("cartCtrl", function($scope) {
  $scope.items = [
    { title: "Mechanical Keyboard", price: 129 },
    { title: "Ergonomic Mouse", price: 69 }
  ];

  $scope.getTotal = function() {
    return $scope.items.reduce(function(total, item) {
      return total + item.price;
    }, 0);
  };
});`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 9. AngularJS Scopes
  {
    id: 'ngjs-scopes',
    title: 'AngularJS Scopes ($rootScope vs $scope)',
    slug: 'ngjs-scopes',
    summary: 'Hierarchical scope tree: $rootScope global availability and nested controller inheritance.',
    readTime: '4 min',
    category: 'AngularJS Controllers',
    content: {
      overview: 'The scope is the binding part between the HTML (view) and the JavaScript (controller). All applications have a single $rootScope created on the ng-app element.',
      sections: [
        {
          heading: '$rootScope vs Local $scope',
          body: 'Global properties set on $rootScope are inherited by all child scopes:',
          code: `app.run(function($rootScope) {
  $rootScope.appName = "DevAura Learning Suite"; // Available across all controllers
});

app.controller("localCtrl", function($scope) {
  $scope.moduleName = "AngularJS Fundamentals";
});`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 10. AngularJS Filters
  {
    id: 'ngjs-filters',
    title: 'AngularJS Filters',
    slug: 'ngjs-filters',
    summary: 'Transform formatted output using pipe (|): currency, uppercase, lowercase, orderBy, and filter.',
    readTime: '4 min',
    category: 'AngularJS Filters',
    content: {
      overview: 'Filters can be added to expressions and directives using the pipe symbol | followed by the filter name.',
      sections: [
        {
          heading: 'Common Built-in Filters',
          body: 'Examples of pipe transformations:',
          code: `<!-- Currency filter with symbol -->
<p>Cost: {{ 49.99 | currency:"USD $" }}</p>

<!-- Uppercase / Lowercase: -->
<p>Name: {{ 'developer' | uppercase }}</p>

<!-- Filter array by search substring and sort by field: -->
<ul>
  <li ng-repeat="x in names | filter:searchQuery | orderBy:'country'">
    {{ x.name + ', ' + x.country }}
  </li>
</ul>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 11. AngularJS Services
  {
    id: 'ngjs-services',
    title: 'AngularJS Services ($location, $timeout, $interval)',
    slug: 'ngjs-services',
    summary: 'Built-in singleton utility services and custom factory/service definitions.',
    readTime: '4 min',
    category: 'AngularJS Services',
    content: {
      overview: 'In AngularJS, services are substitutable objects that are wired together using dependency injection (DI). Services are singletons: only one instance exists per application.',
      sections: [
        {
          heading: 'Using $location and $interval',
          body: 'Injecting services into controller functions:',
          code: `app.controller("timeCtrl", function($scope, $location, $interval) {
  $scope.currentUrl = $location.absUrl();
  $scope.timeString = new Date().toLocaleTimeString();

  // $interval triggers $digest automatically (unlike native setInterval)
  $interval(function() {
    $scope.timeString = new Date().toLocaleTimeString();
  }, 1000);
});`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 12. AngularJS $http Service
  {
    id: 'ngjs-http',
    title: 'AngularJS $http Service',
    slug: 'ngjs-http',
    summary: 'Make asynchronous HTTP GET, POST, PUT, DELETE requests to remote REST APIs.',
    readTime: '5 min',
    category: 'AngularJS Services',
    content: {
      overview: 'The $http service communicates with remote HTTP servers via XMLHttpRequest or JSONP, returning standard Promise objects (.then / .catch).',
      sections: [
        {
          heading: 'Fetching API Data with $http.get',
          body: 'Asynchronous API call example:',
          code: `app.controller("customersCtrl", function($scope, $http) {
  $scope.loading = true;
  $http.get("https://api.example.com/customers")
    .then(function(response) {
      $scope.customers = response.data;
      $scope.loading = false;
    })
    .catch(function(error) {
      $scope.errorMessage = "Failed to load customers";
      $scope.loading = false;
    });
});`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 13. AngularJS Tables & ng-repeat
  {
    id: 'ngjs-tables',
    title: 'AngularJS Tables & ng-repeat',
    slug: 'ngjs-tables',
    summary: 'Render responsive data grids using ng-repeat, $index, $even, and $odd.',
    readTime: '4 min',
    category: 'AngularJS Directives',
    content: {
      overview: 'The ng-repeat directive iterates over a collection, instantiating a template once per item. It exposes special variables like $index, $first, $middle, $last, $even, and $odd.',
      sections: [
        {
          heading: 'Styling Alternating Rows with $even and $odd',
          body: 'Rendering structured tables:',
          code: `<table>
  <thead>
    <tr><th>#</th><th>Name</th><th>Country</th></tr>
  </thead>
  <tbody>
    <tr ng-repeat="user in users" ng-class="{'bg-slate-100': $even, 'bg-white': $odd}">
      <td>{{ $index + 1 }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.country }}</td>
    </tr>
  </tbody>
</table>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 14. AngularJS Select & ng-options
  {
    id: 'ngjs-select',
    title: 'AngularJS Select & ng-options',
    slug: 'ngjs-select',
    summary: 'Populate HTML dropdown menus bound to objects or primitive values using ng-options.',
    readTime: '4 min',
    category: 'AngularJS Directives',
    content: {
      overview: 'While you can use ng-repeat inside <option> elements, the ng-options directive is preferred because it binds directly to entire objects rather than just strings.',
      sections: [
        {
          heading: 'ng-options Syntax',
          body: 'Binding dropdowns to object collections:',
          code: `<select ng-model="selectedCar" ng-options="car.brand for car in cars">
</select>

<p>Selected car color: {{ selectedCar.color }}</p>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 15. AngularJS DOM Manipulation
  {
    id: 'ngjs-dom',
    title: 'AngularJS DOM Directives',
    slug: 'ngjs-dom',
    summary: 'Control element visibility and attributes with ng-disabled, ng-show, ng-hide, and ng-if.',
    readTime: '4 min',
    category: 'AngularJS Directives',
    content: {
      overview: 'AngularJS manages DOM state without requiring imperative document.getElementById() queries.',
      sections: [
        {
          heading: 'ng-show vs ng-if',
          body: 'ng-show toggles CSS display:none; ng-if completely removes or re-inserts the DOM node into the document tree:',
          code: `<!-- Toggle button disabled based on checkbox -->
<button ng-disabled="!termsAccepted">Submit Registration</button>

<!-- ng-show hides with display:none -->
<div ng-show="hasNotifications">You have pending alerts.</div>

<!-- ng-if removes node from DOM entirely -->
<div ng-if="isAdmin">Administrator Panel</div>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 16. AngularJS Events
  {
    id: 'ngjs-events',
    title: 'AngularJS Events',
    slug: 'ngjs-events',
    summary: 'Handle user interactions with ng-click, ng-dblclick, ng-mouseenter, ng-change, and $event.',
    readTime: '4 min',
    category: 'AngularJS Events',
    content: {
      overview: 'AngularJS event directives execute expressions or invoke controller methods when specific DOM events fire, passing the native event object via $event.',
      sections: [
        {
          heading: 'Event Handlers in AngularJS',
          body: 'Handling clicks and mouse events:',
          code: `<button ng-click="count = count + 1">Click Count: {{ count }}</button>

<!-- Pass $event parameter to controller function -->
<div ng-mousemove="trackCoordinates($event)">
  Mouse at X: {{ coordX }}, Y: {{ coordY }}
</div>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 17. AngularJS Forms & Validation
  {
    id: 'ngjs-forms',
    title: 'AngularJS Forms & Validation',
    slug: 'ngjs-forms',
    summary: 'Form controllers, dirty checking, $submitted flag, and custom input validators.',
    readTime: '5 min',
    category: 'AngularJS Forms',
    content: {
      overview: 'AngularJS offers client-side form validation. It tracks the state of the form and input fields, permitting custom validation feedback before form submission.',
      sections: [
        {
          heading: 'Form Validation Example',
          body: 'Validating form submissions with novalidate:',
          code: `<form name="regForm" ng-submit="submitForm()" novalidate>
  <label>Username (min 4 chars):</label>
  <input type="text" name="user" ng-model="user" ng-minlength="4" required>
  <p ng-show="regForm.user.$dirty && regForm.user.$invalid" style="color:red;">
    Please enter at least 4 characters.
  </p>

  <button type="submit" ng-disabled="regForm.$invalid">Create Account</button>
</form>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 18. AngularJS Routing (ngRoute)
  {
    id: 'ngjs-routing',
    title: 'AngularJS Single Page Routing (ngRoute)',
    slug: 'ngjs-routing',
    summary: 'Build Single Page Applications (SPAs) with ngRoute, $routeProvider, and <div ng-view>.',
    readTime: '5 min',
    category: 'AngularJS Advanced',
    content: {
      overview: 'The ngRoute module allows navigating between different views and HTML partial templates without reloading the entire web page.',
      sections: [
        {
          heading: 'Configuring $routeProvider',
          body: 'Routing configuration syntax:',
          code: `var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: "homeCtrl"
    })
    .when("/about", {
      templateUrl: "about.html"
    })
    .otherwise({
      redirectTo: "/"
    });
});`,
          codeLanguage: 'javascript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">AngularJS SPA Route Rendered</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Route matched: /about
Controller: aboutCtrl initialized
Template injected into &lt;ng-view&gt; container.</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
