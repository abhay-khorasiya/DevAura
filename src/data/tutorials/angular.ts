import { TutorialChapter } from '../../types';

export const angularChapters: TutorialChapter[] = [
  // 1. Angular HOME
  {
    id: 'ng-home',
    title: 'Angular HOME',
    slug: 'ng-home',
    summary: 'Angular is Google’s modern, enterprise-grade, component-driven web application platform built entirely in TypeScript.',
    readTime: '3 min',
    category: 'Angular Tutorial',
    content: {
      overview: 'Angular provides a comprehensive suite of tools including routing, forms, client-server communication, built-in signals reactivity, and an optimized build pipeline out of the box.',
      sections: [
        {
          heading: 'Your First Modern Angular Component',
          body: 'A standalone component in modern Angular:',
          code: `import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  template: \`
    <div class="card">
      <h2>Welcome to {{ title() }}</h2>
      <button (click)="increment()">Clicks: {{ count() }}</button>
    </div>
  \`
})
export class WelcomeComponent {
  title = signal('DevAura Angular');
  count = signal(0);

  increment() {
    this.count.update(n => n + 1);
  }
}`,
          codeLanguage: 'typescript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Angular Standalone Component Live</h3>
    <button onclick="let c = document.getElementById('count'); c.innerText = parseInt(c.innerText)+1" style="background:#4f46e5; color:white; border:none; padding:8px 16px; border-radius:6px; font-weight:bold; cursor:pointer;">
      Clicks: <span id="count">0</span>
    </button>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Angular Intro
  {
    id: 'ng-intro',
    title: 'Angular Introduction',
    slug: 'ng-intro',
    summary: 'Architecture overview: Standalone components, Zoneless reactivity, Signals, and Ahead-of-Time (AOT) compilation.',
    readTime: '4 min',
    category: 'Angular Tutorial',
    content: {
      overview: 'Modern Angular has evolved far beyond legacy NgModule boilerplate. Applications now use lightweight Standalone Components, fine-grained Signals reactivity, and native Vite build tooling.',
      sections: [
        {
          heading: 'Key Modern Angular Capabilities',
          body: '1. Standalone Components: No NgModules required.\n2. Built-in Signals: Fine-grained reactivity without Zone.js overhead.\n3. Built-in Control Flow: Cleaner `@if` and `@for` syntax directly in HTML templates.',
          code: `// Modern Application Bootstrap in main.ts:
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig);`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 3. Angular Get Started & CLI
  {
    id: 'ng-getstarted',
    title: 'Angular Get Started & CLI',
    slug: 'ng-getstarted',
    summary: 'Install the Angular CLI, generate components with ng generate, and serve local dev servers with ng serve.',
    readTime: '4 min',
    category: 'Angular Tutorial',
    content: {
      overview: 'The Angular CLI (@angular/cli) is the official tool for initializing, developing, scaffolding, and maintaining Angular applications.',
      sections: [
        {
          heading: 'Angular CLI Commands',
          body: 'Common workflow commands:',
          code: `# Install CLI globally:
npm install -g @angular/cli

# Create a new project with standalone defaults:
ng new my-angular-app

# Start the development server (powered by Vite):
ng serve

# Generate a new component:
ng generate component components/user-card`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 4. Standalone Components
  {
    id: 'ng-components',
    title: 'Angular Standalone Components',
    slug: 'ng-components',
    summary: 'The building blocks of UI: @Component decorator, selector, inline/external templates, and styles.',
    readTime: '5 min',
    category: 'Angular Components',
    content: {
      overview: 'Components are the main UI building blocks in Angular. Each component contains a TypeScript class with data and logic, accompanied by an HTML template and CSS styles.',
      sections: [
        {
          heading: 'Component Structure',
          body: 'Defining inputs and outputs:',
          code: `import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: \`
    <div class="product">
      <h3>{{ title() }}</h3>
      <p>Price: \${{ price() }}</p>
      <button (click)="buy.emit(title())">Add to Cart</button>
    </div>
  \`
})
export class ProductCardComponent {
  title = input.required<string>();
  price = input<number>(0);
  buy = output<string>();
}`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 5. Template Syntax & Data Binding
  {
    id: 'ng-templates',
    title: 'Angular Template Syntax & Binding',
    slug: 'ng-templates',
    summary: 'Interpolation ({{ }}), property binding ([property]), event binding ((event)), and two-way binding ([(ngModel)]).',
    readTime: '5 min',
    category: 'Angular Templates',
    content: {
      overview: 'Angular templates combine HTML with Angular markup to render dynamic data into the DOM and respond to user events.',
      sections: [
        {
          heading: 'Binding Syntax Matrix',
          body: '1. Interpolation: `{{ expression }}` inserts text.\n2. Property Binding: `[src]="heroImageUrl"` sets element properties.\n3. Event Binding: `(click)="onSave()"` listens to user interactions.\n4. Two-Way Binding: `[(ngModel)]="name"` synchronizes both ways.',
          code: `<!-- Property Binding -->
<img [src]="userAvatar" [alt]="userName">

<!-- Event Binding -->
<button (click)="handleSave($event)">Save Record</button>

<!-- Two-Way Binding (Banana in a box) -->
<input [(ngModel)]="searchQuery">`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 6. Modern Control Flow (@if, @for, @switch)
  {
    id: 'ng-control-flow',
    title: 'Angular Control Flow (@if, @for, @switch)',
    slug: 'ng-control-flow',
    summary: 'Angular’s modern built-in control flow syntax replacing legacy *ngIf and *ngFor directives.',
    readTime: '5 min',
    category: 'Angular Templates',
    content: {
      overview: 'Introduced in Angular 17, the new built-in control flow provides intuitive `@if`, `@else`, `@for`, and `@switch` blocks with mandatory tracking and zero imports required.',
      sections: [
        {
          heading: '@if and @for Blocks',
          body: 'Clean template logic:',
          code: `@if (isLoggedIn()) {
  <p>Welcome back, {{ userName() }}!</p>
} @else {
  <button (click)="login()">Sign In</button>
}

<ul>
  @for (item of items(); track item.id) {
    <li>{{ item.name }} - \${{ item.price }}</li>
  } @empty {
    <li>Your shopping cart is empty.</li>
  }
</ul>`,
          codeLanguage: 'html',
          interactive: true
        }
      ]
    }
  },

  // 7. Angular Signals Reactivity
  {
    id: 'ng-signals',
    title: 'Angular Signals Reactivity',
    slug: 'ng-signals',
    summary: 'Fine-grained reactive state tracking with signal(), computed(), and effect().',
    readTime: '5 min',
    category: 'Angular Reactivity',
    content: {
      overview: 'A Signal is a wrapper around a value that notifies interested consumers when that value changes. Signals are the foundation of modern zoneless Angular performance.',
      sections: [
        {
          heading: 'Signals, Computed, and Effects',
          body: 'Creating reactive values and derived calculations:',
          code: `import { signal, computed, effect } from '@angular/core';

export class CartState {
  quantity = signal(2);
  unitPrice = signal(49.99);

  // Automatically recalculates whenever quantity or unitPrice changes:
  subtotal = computed(() => this.quantity() * this.unitPrice());

  constructor() {
    effect(() => {
      console.log('Cart subtotal updated:', this.subtotal());
    });
  }
}`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 8. Services & Dependency Injection
  {
    id: 'ng-services-di',
    title: 'Angular Services & Dependency Injection',
    slug: 'ng-services-di',
    summary: 'Share business logic with @Injectable services and the modern inject() function.',
    readTime: '5 min',
    category: 'Angular Architecture',
    content: {
      overview: 'Services are singletons that encapsulate data access, external API calls, and business rules. Dependency Injection (DI) wires services into components on demand.',
      sections: [
        {
          heading: 'Injecting Services with inject()',
          body: 'Modern functional dependency injection in Angular:',
          code: `import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private http = inject(HttpClient);

  trackPageView(url: string) {
    return this.http.post('/api/analytics', { url });
  }
}`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 9. HTTP Client & Observables
  {
    id: 'ng-http-client',
    title: 'Angular HTTP Client & RxJS',
    slug: 'ng-http-client',
    summary: 'Fetching data from REST APIs with HttpClient, RxJS pipes, and provideHttpClient().',
    readTime: '5 min',
    category: 'Angular Services',
    content: {
      overview: 'The HttpClient service provides typed HTTP communication returning RxJS Observables, supporting interceptors and error handling.',
      sections: [
        {
          heading: 'Fetching Data with HttpClient',
          body: 'Consuming REST APIs:',
          code: `import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 10. Angular Forms
  {
    id: 'ng-forms',
    title: 'Angular Forms: Reactive & Template-Driven',
    slug: 'ng-forms',
    summary: 'Build robust forms with FormGroup, FormControl, ReactiveFormsModule, and custom validators.',
    readTime: '5 min',
    category: 'Angular Forms',
    content: {
      overview: 'Angular provides two form-handling strategies: Template-Driven forms (simple, two-way bound) and Reactive forms (scalable, immutable, explicitly typed).',
      sections: [
        {
          heading: 'Typed Reactive Forms',
          body: 'Form validation and controls:',
          code: `import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input formControlName="email" type="email" placeholder="Email">
      <input formControlName="password" type="password" placeholder="Password">
      <button [disabled]="loginForm.invalid">Sign In</button>
    </form>
  \`
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 11. Angular Routing
  {
    id: 'ng-routing',
    title: 'Angular Routing & Navigation',
    slug: 'ng-routing',
    summary: 'Single-page app routing with provideRouter(), routerLink, router-outlet, and lazy loading.',
    readTime: '5 min',
    category: 'Angular Routing',
    content: {
      overview: 'The Angular Router enables navigation among views, mapping browser URL paths to components and supporting lazy chunk loading.',
      sections: [
        {
          heading: 'Route Configuration with Lazy Loading',
          body: 'Configuring routes in app.routes.ts:',
          code: `import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: '**', redirectTo: '' }
];`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 12. Component Lifecycle Hooks
  {
    id: 'ng-lifecycle',
    title: 'Angular Lifecycle Hooks',
    slug: 'ng-lifecycle',
    summary: 'Manage component lifecycle with ngOnInit, ngOnChanges, ngOnDestroy, and modern afterRender.',
    readTime: '4 min',
    category: 'Angular Components',
    content: {
      overview: 'Angular manages the lifecycle of components: from creation, rendering, change detection, down to destruction.',
      sections: [
        {
          heading: 'Common Lifecycle Hooks',
          body: 'Implementing lifecycle interfaces:',
          code: `import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({ selector: 'app-timer', standalone: true, template: '<p>Timer Active</p>' })
export class TimerComponent implements OnInit, OnDestroy {
  private timerId: any;

  ngOnInit() {
    this.timerId = setInterval(() => console.log('Tick'), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerId); // Cleanup memory
  }
}`,
          codeLanguage: 'typescript',
          interactive: true
        }
      ]
    }
  },

  // 13. Angular Pipes
  {
    id: 'ng-pipes',
    title: 'Angular Built-in & Custom Pipes',
    slug: 'ng-pipes',
    summary: 'Format values in templates with DatePipe, CurrencyPipe, AsyncPipe, and custom @Pipe classes.',
    readTime: '4 min',
    category: 'Angular Templates',
    content: {
      overview: 'Pipes transform displayed values within template expressions using the pipe | symbol.',
      sections: [
        {
          heading: 'Built-in and Custom Pipe Example',
          body: 'Formatting outputs:',
          code: `<!-- Built-in Pipes -->
<p>Joined: {{ user.joinedAt | date:'mediumDate' }}</p>
<p>Balance: {{ user.balance | currency:'EUR':'symbol' }}</p>

<!-- Custom Pipe: -->
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate', standalone: true })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}`,
          codeLanguage: 'typescript',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Angular Pipe Output</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Joined: Nov 3, 2026
Balance: €1,245.50
Truncate: DevAura Enterprise Plat...</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
