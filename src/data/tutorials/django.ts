import { TutorialChapter } from '../../types';

export const djangoChapters: TutorialChapter[] = [
  // 1. Django HOME
  {
    id: 'django-home',
    title: 'Django HOME',
    slug: 'django-home',
    summary: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    readTime: '3 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Django is a Python framework that makes it easier to build web applications. Django follows the "Batteries Included" philosophy, providing an ORM, authentication system, templating engine, admin interface, and robust security out of the box.',
      sections: [
        {
          heading: 'Your First Django View',
          body: 'A basic HTTP response in Django:',
          code: `# members/views.py
from django.http import HttpResponse

def my_view(request):
    return HttpResponse("Welcome to DevAura Django!")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Django Development Server (Port 8000)</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Watching for file changes with StatReloader
Performing system checks...
System check identified no issues (0 silenced).
Django version 5.0.4, using settings 'myproject.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Django Intro
  {
    id: 'django-intro',
    title: 'Django Introduction & MTV Architecture',
    slug: 'django-intro',
    summary: 'Model-Template-View (MTV) pattern: how Django processes web requests and separates concerns.',
    readTime: '5 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Django was created in 2003 by Adrian Holovaty and Simon Willison at the Lawrence Journal-World newspaper. It is designed to handle high-traffic web applications with minimal configuration.',
      sections: [
        {
          heading: 'The MTV Pattern',
          body: 'Django adapts the traditional MVC pattern into MTV:',
          code: `// Django MTV Architecture:
// 1. Model: Manages data and database structure (ORM).
// 2. Template: The presentation layer (HTML with Django Template Language).
// 3. View: Handles business logic, queries Models, and renders Templates.
// * URLconf: Matches requested URLs to the appropriate View.`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Request-Response Cycle:</h4>
    <p>User Browser &rarr; <code>urls.py</code> &rarr; <code>views.py</code> &harr; <code>models.py (Database)</code> &rarr; Renders <code>template.html</code> &rarr; HTTP Response</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 3. Django Get Started
  {
    id: 'django-getstarted',
    title: 'Django Get Started',
    slug: 'django-getstarted',
    summary: 'Setting up Python virtual environments and installing Django via pip.',
    readTime: '4 min',
    category: 'Django Tutorial',
    content: {
      overview: 'To install Django, you must have Python installed. It is recommended to install Django in a dedicated virtual environment so package dependencies remain isolated.',
      sections: [
        {
          heading: 'Creating Virtual Environment and Installing Django',
          body: 'Run the following commands in your terminal:',
          code: `# 1. Create virtual environment
$ python -m venv myworld

# 2. Activate virtual environment
# Windows:
$ myworld\\Scripts\\activate
# macOS/Linux:
$ source myworld/bin/activate

# 3. Install Django
$ pip install django

# 4. Verify installation
$ django-admin --version
5.0.4`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    (myworld) $ django-admin --version<br>
    5.0.4
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 4. Django Create Project
  {
    id: 'django-create-project',
    title: 'Django Create Project',
    slug: 'django-create-project',
    summary: 'Scaffolding a project with django-admin startproject and inspecting file structure.',
    readTime: '4 min',
    category: 'Django Tutorial',
    content: {
      overview: 'A Django project is a Python package containing the database configuration, Django-specific options, and application-specific settings for a website.',
      sections: [
        {
          heading: 'django-admin startproject',
          body: 'Running the scaffolding command creates the standard project tree:',
          code: `$ django-admin startproject my_tennis_club
$ cd my_tennis_club

Project Structure:
my_tennis_club/
    manage.py
    my_tennis_club/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Files Explained:</h4>
    <p><code>manage.py</code>: Command-line utility to run migrations and start servers.</p>
    <p><code>settings.py</code>: Master configurations, installed apps, and database connections.</p>
    <p><code>urls.py</code>: Top-level routing declarations.</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 5. Django Create App
  {
    id: 'django-create-app',
    title: 'Django Create App',
    slug: 'django-create-app',
    summary: 'A project is a collection of apps; creating modular apps with python manage.py startapp.',
    readTime: '4 min',
    category: 'Django Tutorial',
    content: {
      overview: 'An app is a web application that does something – e.g., a blog system, a database of public records or a simple poll app. A project is a collection of configuration and apps for a particular website.',
      sections: [
        {
          heading: 'Creating an App and Registering in settings.py',
          body: 'Generate the app and register it in INSTALLED_APPS:',
          code: `$ python manage.py startapp members

# my_tennis_club/settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'members',  # Register your newly created app!
]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Created app "members" containing models.py, views.py, admin.py, and apps.py.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 6. Django Views
  {
    id: 'django-views',
    title: 'Django Views',
    slug: 'django-views',
    summary: 'Writing view functions that take HttpRequest and return HttpResponse objects.',
    readTime: '4 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Django views are Python functions that take a web request and return a web response. The response can be the HTML contents of a Web page, or a redirect, or a 404 error, or an XML document, or an image.',
      sections: [
        {
          heading: 'View Function Example',
          body: 'Creating views in views.py:',
          code: `# members/views.py
from django.http import HttpResponse

def members(request):
    return HttpResponse("Hello from the members view!")`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">HTTP Response:</h4>
    <p style="color:#4f46e5; font-weight:bold;">Hello from the members view!</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 7. Django URLs
  {
    id: 'django-urls',
    title: 'Django URLs & Routing',
    slug: 'django-urls',
    summary: 'Mapping web addresses to views using path() and include().',
    readTime: '4 min',
    category: 'Django Tutorial',
    content: {
      overview: 'To route incoming URLs to specific views, Django uses URLconf (URL configuration). We define URL patterns in urls.py.',
      sections: [
        {
          heading: 'Connecting App URLs to Project URLs',
          body: 'Using include() to keep app routing modular:',
          code: `# members/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('members/', views.members, name='members'),
]

# my_tennis_club/urls.py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('members.urls')),
]`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    GET http://127.0.0.1:8000/members/<br>
    Status: 200 OK<br>
    Routed to: members.views.members
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 8. Django Templates
  {
    id: 'django-templates',
    title: 'Django Templates',
    slug: 'django-templates',
    summary: 'Rendering dynamic HTML files from template directories using loader or render().',
    readTime: '5 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Instead of returning raw text strings, views typically render HTML templates. Django searches for templates in a templates/ directory inside each installed app.',
      sections: [
        {
          heading: 'Rendering Templates with render()',
          body: 'Passing dynamic context dictionaries to HTML:',
          code: `# members/views.py
from django.shortcuts import render

def members(request):
    context = {
        'club_name': 'DevAura Tennis Club',
        'members_count': 142
    }
    return render(request, 'all_members.html', context)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h3 style="color:#4f46e5; margin-top:0;">DevAura Tennis Club</h3>
    <p>Active Members: <strong>142</strong></p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 9. Django Models
  {
    id: 'django-models',
    title: 'Django Models (ORM)',
    slug: 'django-models',
    summary: 'Defining database tables as Python classes inheriting from models.Model.',
    readTime: '5 min',
    category: 'Django Tutorial',
    content: {
      overview: 'A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you\'re storing. Django uses an Object-Relational Mapper (ORM) so you don\'t write raw SQL.',
      sections: [
        {
          heading: 'Defining a Model Class',
          body: 'Creating table columns with model fields:',
          code: `# members/models.py
from django.db import models

class Member(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    phone = models.IntegerField(null=True)
    joined_date = models.DateField(null=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Model 'Member' defined.<br>
    Fields: id (Auto-created PK), firstname, lastname, phone, joined_date
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 10. Django Migrations
  {
    id: 'django-migrations',
    title: 'Django Migrations (makemigrations & migrate)',
    slug: 'django-migrations',
    summary: 'Propagating changes made to models into the database schema.',
    readTime: '4 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Migrations are Django\'s way of propagating changes you make to your models (adding a field, deleting a model, etc.) into your database schema.',
      sections: [
        {
          heading: 'Running Migrations',
          body: 'Two-step migration process:',
          code: `# 1. Create migration files based on model changes:
$ python manage.py makemigrations members
Migrations for 'members':
  members/migrations/0001_initial.py
    - Create model Member

# 2. Apply migrations to the database:
$ python manage.py migrate
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, members, sessions
Running migrations:
  Applying members.0001_initial... OK`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Applying members.0001_initial... <span style="color:#4ade80;">OK</span>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 11. Django Shell & CRUD
  {
    id: 'django-crud',
    title: 'Django CRUD via Python Shell',
    slug: 'django-crud',
    summary: 'Creating, reading, updating, and deleting records using the Django ORM shell.',
    readTime: '5 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Django provides an interactive Python shell pre-loaded with your project settings and models. You launch it using python manage.py shell.',
      sections: [
        {
          heading: 'ORM Operations',
          body: 'Creating and saving records:',
          code: `$ python manage.py shell
>>> from members.models import Member

# CREATE:
>>> m = Member(firstname='Emil', lastname='Refsnes')
>>> m.save()

# READ:
>>> Member.objects.all()
<QuerySet [<Member: Emil Refsnes>]>

# UPDATE:
>>> m.firstname = 'Emily'
>>> m.save()

# DELETE:
>>> m.delete()`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    &gt;&gt;&gt; Member.objects.count()<br>
    1<br>
    &gt;&gt;&gt; Member.objects.values()<br>
    &lt;QuerySet [{'id': 1, 'firstname': 'Emily', 'lastname': 'Refsnes'}]&gt;
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 12. Django Admin
  {
    id: 'django-admin',
    title: 'Django Admin Interface',
    slug: 'django-admin',
    summary: 'The built-in production-ready CRUD dashboard and creating superusers.',
    readTime: '5 min',
    category: 'Django Tutorial',
    content: {
      overview: 'One of the most powerful parts of Django is the automatic admin interface. It reads metadata from your models to provide a quick, model-centric interface where trusted site administrators can manage content.',
      sections: [
        {
          heading: 'Creating Superuser & Registering Models',
          body: 'Registering Member in admin.py:',
          code: `# 1. Create superuser from terminal:
$ python manage.py createsuperuser
Username: admin
Email: admin@devaura.dev
Password: *********

# 2. Register model in members/admin.py:
from django.contrib import admin
from .models import Member

class MemberAdmin(admin.ModelAdmin):
    list_display = ("firstname", "lastname", "joined_date",)

admin.site.register(Member, MemberAdmin)`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Django Administration Panel:</h4>
    <p>Navigate to: <code>http://127.0.0.1:8000/admin/</code></p>
    <p style="color:#4f46e5; font-weight:bold;">Full graphical interface to search, filter, edit, and export records!</p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 13. Django Template Language (DTL)
  {
    id: 'django-dtl',
    title: 'Django Template Language (Variables, Tags, Filters)',
    slug: 'django-dtl',
    summary: 'Variables {{ var }}, logic tags {% tag %}, and transformation filters {{ var|filter }}.',
    readTime: '5 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Django templates are HTML files rendered with the Django Template Language (DTL). DTL uses double curly braces {{ }} for variables and curly-percentage {% %} for logic tags.',
      sections: [
        {
          heading: 'Variables and Filters',
          body: 'Transforming text with filters:',
          code: `<!-- Output variable -->
<h1>Welcome, {{ user_name }}!</h1>

<!-- Filters with pipe (|) -->
<p>{{ user_name|upper }}</p>
<p>Today is: {{ current_date|date:"F j, Y" }}</p>
<p>Bio length: {{ bio|length }} characters</p>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Welcome, ALEX!<br>
    Today is: November 3, 2026<br>
    Bio length: 85 characters
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 14. Django Template Tags
  {
    id: 'django-template-tags',
    title: 'Django Template Tags ({% for %}, {% if %})',
    slug: 'django-template-tags',
    summary: 'Loops and conditional branching inside HTML templates.',
    readTime: '5 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Template tags allow you to control flow inside your templates. Unlike Python code, template tags require explicit closing tags (e.g. {% endfor %}, {% endif %}).',
      sections: [
        {
          heading: 'For Loop and Empty Block',
          body: 'Iterating through querysets in templates:',
          code: `<ul>
  {% for member in members %}
    <li>{{ member.firstname }} {{ member.lastname }}</li>
  {% empty %}
    <li>No members found in club.</li>
  {% endfor %}
</ul>

{% if user.is_authenticated %}
  <p>Logged in as: {{ user.username }}</p>
{% else %}
  <a href="/login/">Please log in</a>
{% endif %}`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Rendered Output:</h4>
    <ul>
      <li>Elena Vance</li>
      <li>Gordon Freeman</li>
      <li>Barney Calhoun</li>
    </ul>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 15. Django Template Inheritance
  {
    id: 'django-template-inheritance',
    title: 'Django Template Inheritance ({% extends %})',
    slug: 'django-template-inheritance',
    summary: 'DRY principle: building base layout master templates with overrideable blocks.',
    readTime: '5 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Template inheritance allows you to build a base "skeleton" template that contains all the common elements of your site (navigation, header, footer) and defines blocks that child templates can override.',
      sections: [
        {
          heading: 'Base and Child Templates',
          body: 'Master template and extended child template:',
          code: `<!-- master.html -->
<!DOCTYPE html>
<html>
<head>
  <title>{% block title %}DevAura Club{% endblock %}</title>
</head>
<body>
  <nav><a href="/">Home</a> | <a href="/members/">Members</a></nav>
  <main>
    {% block content %}
    {% endblock %}
  </main>
</body>
</html>

<!-- members.html -->
{% extends "master.html" %}

{% block title %}Members List{% endblock %}

{% block content %}
  <h1>Our Club Members</h1>
  <p>List of all verified members...</p>
{% endblock %}`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    Master template wrapper injected around child block content.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 16. Django QuerySets
  {
    id: 'django-querysets',
    title: 'Django QuerySets',
    slug: 'django-querysets',
    summary: 'Querying databases using .all(), .filter(), .exclude(), and .values().',
    readTime: '5 min',
    category: 'Django Tutorial',
    content: {
      overview: 'A QuerySet is a collection of data from a database. A QuerySet is built up as a list of objects. QuerySets are lazy: the query to the database is only executed when you evaluate the queryset (e.g., iterating or slicing).',
      sections: [
        {
          heading: 'QuerySet Methods',
          body: 'Filtering and extracting data:',
          code: `# All records
members = Member.objects.all()

# Filter by field
nordic_members = Member.objects.filter(country='Sweden')

# Exclude records
non_admins = Member.objects.exclude(is_admin=True)

# Return as dictionary values
data = Member.objects.values('firstname', 'phone')`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">QuerySet Evaluation:</h4>
    <p><code>Member.objects.filter(firstname='Emil')</code></p>
    <p>SQL generated behind the scenes: <code>SELECT ... FROM members WHERE firstname = 'Emil';</code></p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 17. Django Field Lookups
  {
    id: 'django-field-lookups',
    title: 'Django Field Lookups (__icontains, __gt, __startswith)',
    slug: 'django-field-lookups',
    summary: 'Specifying WHERE clause nuances with double-underscore (__).',
    readTime: '4 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Field lookups are how you specify the meat of an SQL WHERE clause. They\'re specified as keyword arguments to QuerySet methods like filter(), exclude(), and get(). Double underscores (__) are used to separate field name and lookup type.',
      sections: [
        {
          heading: 'Common Field Lookups',
          body: 'Case-insensitive searches and numeric comparisons:',
          code: `# Case-insensitive containment
Member.objects.filter(firstname__icontains='em')

# Greater than (gt) and Greater than or equal (gte)
Product.objects.filter(price__gt=50.00)

# Date lookups
Member.objects.filter(joined_date__year=2026)

# Starts with
Member.objects.filter(lastname__startswith='S')`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    price__gt=50 &rarr; WHERE price &gt; 50<br>
    name__icontains='dev' &rarr; WHERE LOWER(name) LIKE '%dev%'
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 18. Django Static Files
  {
    id: 'django-static-files',
    title: 'Django Static Files (CSS, JS, Images)',
    slug: 'django-static-files',
    summary: 'Managing static assets with {% load static %}, STATIC_URL, and collectstatic.',
    readTime: '4 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Web applications generally need to serve additional files such as images, JavaScript, or CSS. In Django, we refer to these files as "static files".',
      sections: [
        {
          heading: 'Loading Static Files in Templates',
          body: 'Include {% load static %} at the top of your HTML:',
          code: `{% load static %}
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="{% static 'myfirst.css' %}">
</head>
<body>
  <img src="{% static 'logo.png' %}" alt="DevAura Logo">
  <script src="{% static 'app.js' %}"></script>
</body>
</html>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#0284c7; margin-top:0;">Static URL Resolution:</h4>
    <p><code>{% static 'logo.png' %}</code> &rarr; <code>/static/logo.png</code></p>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 19. Django Forms & CSRF
  {
    id: 'django-forms',
    title: 'Django Forms & CSRF Tokens',
    slug: 'django-forms',
    summary: 'Form generation, automated validation, and protecting submissions with {% csrf_token %}.',
    readTime: '5 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Django handles three distinct parts of the work involved in forms: preparing and restructuring data to make it ready for rendering, creating HTML forms for the data, and processing submitted forms and user input.',
      sections: [
        {
          heading: 'ModelForm and CSRF Verification',
          body: 'Always include {% csrf_token %} in POST forms to prevent Cross-Site Request Forgery attacks:',
          code: `# members/forms.py
from django import forms
from .models import Member

class MemberForm(forms.ModelForm):
    class Meta:
        model = Member
        fields = ['firstname', 'lastname', 'phone']

<!-- template.html -->
<form method="POST">
  {% csrf_token %}
  {{ form.as_p }}
  <button type="submit">Save Member</button>
</form>`,
          codeLanguage: 'html',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#0f172a; color:#38bdf8; padding:16px; border-radius:8px; font-family:monospace;">
    &lt;input type="hidden" name="csrfmiddlewaretoken" value="dZ84kL9..."&gt;<br>
    CSRF Protection Verified: Secure Form Submission.
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 20. Django Authentication
  {
    id: 'django-auth',
    title: 'Django Authentication & User System',
    slug: 'django-auth',
    summary: 'User login, logout, password hashing, and the @login_required view decorator.',
    readTime: '5 min',
    category: 'Django Tutorial',
    content: {
      overview: 'Django comes with a user authentication system. It handles user accounts, groups, permissions and cookie-based user sessions.',
      sections: [
        {
          heading: 'Protecting Views with @login_required',
          body: 'Restricting view access to authenticated users only:',
          code: `from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required(login_url='/login/')
def member_dashboard(request):
    current_user = request.user
    return render(request, 'dashboard.html', {'user': current_user})`,
          codeLanguage: 'python',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:16px; border-radius:8px;">
    <h4 style="color:#4f46e5; margin-top:0;">Authentication State:</h4>
    <p>User: <strong>sarah_connor</strong> (Authenticated: <code>True</code>)</p>
    <p>Session Cookie: Verified via PBKDF2 SHA-256 password hash</p>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
