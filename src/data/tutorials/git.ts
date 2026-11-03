import { TutorialChapter } from '../../types';

export const gitChapters: TutorialChapter[] = [
  // 1. Git HOME
  {
    id: 'git-home',
    title: 'Git HOME',
    slug: 'git-home',
    summary: 'Git is the world’s most popular open-source distributed version control system.',
    readTime: '3 min',
    category: 'Git Tutorial',
    content: {
      overview: 'Git allows developers to track code changes, collaborate seamlessly in teams, and revert to previous project snapshots without risking production code integrity.',
      sections: [
        {
          heading: 'Your First Git Commands',
          body: 'Check installed version and status of local working tree:',
          code: `git --version
git status`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Git Terminal Console</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">$ git --version
git version 2.45.2.windows.1

$ git status
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Git Intro
  {
    id: 'git-intro',
    title: 'Git Introduction',
    slug: 'git-intro',
    summary: 'Understand distributed version control, commit snapshots, and repository staging lifecycles.',
    readTime: '4 min',
    category: 'Git Tutorial',
    content: {
      overview: 'Created by Linus Torvalds in 2005 to maintain the Linux kernel, Git stores data as a series of snapshots rather than file difference deltas. Every developer’s machine contains the complete history of the repository.',
      sections: [
        {
          heading: 'The Three Stages of Git',
          body: '1. Working Directory: Modified files on disk.\n2. Staging Area (Index): Snapshot marked to go into the next commit.\n3. Repository (.git directory): Safely stored permanent snapshots in your local database.',
          code: `# The workflow:
# 1. Edit file in Working Directory
# 2. Stage changes:
git add index.html
# 3. Commit snapshot to Repository:
git commit -m "feat: add landing page hero section"`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 3. Git Get Started
  {
    id: 'git-getstarted',
    title: 'Git Get Started & Configuration',
    slug: 'git-getstarted',
    summary: 'Install Git and configure your global developer identity (user.name and user.email).',
    readTime: '3 min',
    category: 'Git Tutorial',
    content: {
      overview: 'Before making commits, you must identify yourself with your name and email. This metadata is permanently stamped into every commit you create.',
      sections: [
        {
          heading: 'Setting Global Identity',
          body: 'Run these commands once on your computer:',
          code: `# Configure username:
git config --global user.name "Your Name"

# Configure email address (matches your GitHub account):
git config --global user.email "you@example.com"

# Set default initial branch name to main:
git config --global init.defaultBranch main

# Verify settings:
git config --list`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 4. Git New Files & Init
  {
    id: 'git-new-files',
    title: 'Git Initializing a Repository',
    slug: 'git-new-files',
    summary: 'Turn any project directory into a tracked Git repository using git init.',
    readTime: '4 min',
    category: 'Git Basics',
    content: {
      overview: 'git init creates an invisible .git subdirectory that contains all metadata and object databases for version control.',
      sections: [
        {
          heading: 'Initializing a Project',
          body: 'Creating a new repository:',
          code: `# Navigate to project folder:
cd my-project

# Initialize Git:
git init

# Output:
# Initialized empty Git repository in /my-project/.git/`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 5. Staging & Committing
  {
    id: 'git-staging-commit',
    title: 'Git Staging & Commits',
    slug: 'git-staging-commit',
    summary: 'Stage files with git add, inspect status with git status, and commit snapshots with git commit.',
    readTime: '5 min',
    category: 'Git Basics',
    content: {
      overview: 'Staging files with git add allows you to craft focused, atomic commits rather than dumping all modifications into one giant commit.',
      sections: [
        {
          heading: 'Staging and Committing Workflow',
          body: 'Typical commit cycle:',
          code: `# Check file status:
git status

# Stage a specific file:
git add app.js

# Stage all modified and new files:
git add .

# Create permanent commit snapshot with descriptive message:
git commit -m "feat(auth): implement JWT login verification"`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 6. Commit History & Logs
  {
    id: 'git-commit-log',
    title: 'Git Commit History & Log',
    slug: 'git-commit-log',
    summary: 'Inspect project history using git log, one-line graphs, and inspect line differences with git diff.',
    readTime: '4 min',
    category: 'Git Basics',
    content: {
      overview: 'git log displays the chronological record of commits including SHA-1/SHA-256 commit hashes, authors, timestamps, and commit messages.',
      sections: [
        {
          heading: 'Log Formatting & Diffs',
          body: 'Viewing commit records:',
          code: `# View compact one-line log:
git log --oneline

# View graphical branch history:
git log --oneline --graph --all

# View unstaged changes vs staged changes:
git diff

# View changes staged for the next commit:
git diff --staged`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 7. Git Branching
  {
    id: 'git-branch',
    title: 'Git Branching',
    slug: 'git-branch',
    summary: 'Isolate feature development using lightweight pointers with git branch and git switch.',
    readTime: '4 min',
    category: 'Git Branching',
    content: {
      overview: 'In Git, branches are simply lightweight movable pointers to commits. Creating and switching branches is virtually instantaneous.',
      sections: [
        {
          heading: 'Creating and Switching Branches',
          body: 'Branch management commands:',
          code: `# List all local branches (* indicates active branch):
git branch

# Create a new branch:
git branch feature/payment

# Switch to the new branch:
git switch feature/payment
# (or legacy: git checkout feature/payment)

# Create and switch in a single command:
git switch -c feature/dark-mode`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 8. Merging & Conflict Resolution
  {
    id: 'git-branch-merge',
    title: 'Git Merging & Conflict Resolution',
    slug: 'git-branch-merge',
    summary: 'Combine branch work into main with Fast-Forward or 3-way merges and resolve conflict markers.',
    readTime: '5 min',
    category: 'Git Branching',
    content: {
      overview: 'When changes in two branches touch different files or different lines, Git merges them automatically. When both branches edit the same lines, a merge conflict occurs and requires human resolution.',
      sections: [
        {
          heading: 'Resolving Merge Conflicts',
          body: 'Git inserts conflict markers into conflicting files:',
          code: `<<<<<<< HEAD
const apiUrl = "https://production.devaura.dev";
=======
const apiUrl = "https://staging.devaura.dev";
>>>>>>> feature/staging-endpoint

# 1. Edit the file to keep the desired code
# 2. Stage the resolved file:
git add api.config.js
# 3. Finalize merge commit:
git commit -m "merge: resolve API endpoint collision"`,
          codeLanguage: 'text',
          interactive: true
        }
      ]
    }
  },

  // 9. GitHub Intro
  {
    id: 'git-github-intro',
    title: 'GitHub & Remote Collaboration',
    slug: 'git-github-intro',
    summary: 'Host remote repositories in the cloud, collaborate with teams, and configure secure SSH key authentication.',
    readTime: '4 min',
    category: 'GitHub',
    content: {
      overview: 'GitHub is a cloud platform built on top of Git. It hosts remote code repositories and provides pull requests, issue tracking, CI/CD actions, and project wikis.',
      sections: [
        {
          heading: 'Generating SSH Keys for GitHub',
          body: 'Secure passwordless authentication:',
          code: `# Generate an Ed25519 SSH key pair:
ssh-keygen -t ed25519 -C "you@example.com"

# Copy public key to clipboard:
cat ~/.ssh/id_ed25519.pub

# Paste into GitHub: Settings -> SSH and GPG keys -> New SSH Key`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 10. Git Remote Setup
  {
    id: 'git-remote',
    title: 'Git Remote Repositories',
    slug: 'git-remote',
    summary: 'Connect your local repository to cloud remotes using git remote add.',
    readTime: '4 min',
    category: 'GitHub',
    content: {
      overview: 'Remote repositories are versions of your project that are hosted on the internet or network. You can configure multiple remotes (such as origin and upstream).',
      sections: [
        {
          heading: 'Managing Remotes',
          body: 'Adding and verifying remote URLs:',
          code: `# Add remote origin:
git remote add origin git@github.com:username/repository.git

# List configured remotes and URLs:
git remote -v

# Rename a remote:
git remote rename origin upstream`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 11. Git Push & Pull
  {
    id: 'git-push-pull',
    title: 'Git Push, Fetch & Pull',
    slug: 'git-push-pull',
    summary: 'Upload commits to remotes with git push, and download team updates with git pull and git fetch.',
    readTime: '4 min',
    category: 'GitHub',
    content: {
      overview: 'git push uploads your local branch commits to the remote repository. git pull downloads and integrates changes from the remote tracking branch.',
      sections: [
        {
          heading: 'Push and Pull Commands',
          body: 'Synchronizing with remote:',
          code: `# First push with upstream tracking (-u):
git push -u origin main

# Subsequent pushes on tracked branch:
git push

# Fetch remote metadata without merging:
git fetch origin

# Fetch and merge in one step:
git pull origin main`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 12. Git Clone & Forking
  {
    id: 'git-clone',
    title: 'Git Clone & Open Source Forking',
    slug: 'git-clone',
    summary: 'Download an existing online repository with full commit history using git clone.',
    readTime: '4 min',
    category: 'GitHub',
    content: {
      overview: 'git clone copies an entire remote repository, sets up origin tracking automatically, and checks out the default branch into a local folder.',
      sections: [
        {
          heading: 'Cloning Repositories',
          body: 'Cloning via HTTPS or SSH:',
          code: `# Clone public repository via HTTPS:
git clone https://github.com/facebook/react.git

# Clone into specific directory:
git clone git@github.com:username/project.git my-local-folder`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 13. Git Rebasing
  {
    id: 'git-rebase',
    title: 'Git Rebase & Linear History',
    slug: 'git-rebase',
    summary: 'Reapply commits on top of another base branch for a clean, linear git log without merge bubbles.',
    readTime: '5 min',
    category: 'Git Advanced',
    content: {
      overview: 'Rebasing rewinds the commits on your current branch, pulls the latest commits from the target branch, and reapplies your commits sequentially on top.',
      sections: [
        {
          heading: 'Interactive Rebasing (Squashing)',
          body: 'Cleaning up commit history with git rebase -i:',
          code: `# Rebase current feature branch onto updated main:
git switch feature/login
git rebase main

# Interactive rebase to squash the last 3 commits into 1:
git rebase -i HEAD~3

# The Golden Rule of Rebase:
# Never rebase commits that have already been pushed to a public/shared branch!`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 14. Git Stash
  {
    id: 'git-stash',
    title: 'Git Stash Temporary Work',
    slug: 'git-stash',
    summary: 'Save dirty uncommitted changes onto a temporary shelf to switch branches cleanly without committing.',
    readTime: '4 min',
    category: 'Git Advanced',
    content: {
      overview: 'When you need to switch branches urgently to fix a bug but your current work is half-done, git stash saves your dirty working directory state and leaves you with a clean working copy.',
      sections: [
        {
          heading: 'Stashing and Popping Changes',
          body: 'Stash operations:',
          code: `# Stash modifications with a message:
git stash save "WIP: partial payment refactor"

# List all stashed changes:
git stash list

# Reapply the most recent stash and remove it from shelf:
git stash pop

# Discard stashed work:
git stash drop`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 15. Undoing Changes & Reset
  {
    id: 'git-undo-reset',
    title: 'Git Undo, Restore & Reset',
    slug: 'git-undo-reset',
    summary: 'Safely undo mistakes with git restore, git reset (--soft, --mixed, --hard), and git revert.',
    readTime: '5 min',
    category: 'Git Advanced',
    content: {
      overview: 'Git offers multiple ways to roll back changes depending on whether the changes are uncommitted, staged, or already pushed to a remote branch.',
      sections: [
        {
          heading: 'Reset vs Revert',
          body: '1. git restore: Discards uncommitted modifications.\n2. git reset --soft HEAD~1: Undoes the last commit but keeps all code staged.\n3. git reset --hard HEAD~1: PERMANENTLY discards all changes from the last commit.\n4. git revert <commit>: Creates a new commit that safely inverts changes (safe for shared branches).',
          code: `# Discard local edits to a file:
git restore app.js

# Unstage a file:
git restore --staged app.js

# Revert a pushed bad commit safely:
git revert a1b2c3d`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 16. Git Tags & Releases
  {
    id: 'git-tags',
    title: 'Git Tags & Semantic Versioning',
    slug: 'git-tags',
    summary: 'Mark specific historical points as releases (e.g. v1.0.0, v2.1.0) with annotated tags.',
    readTime: '4 min',
    category: 'Git Advanced',
    content: {
      overview: 'Tags are permanently anchored pointers to specific release commits, typically formatted according to Semantic Versioning (Major.Minor.Patch).',
      sections: [
        {
          heading: 'Creating and Pushing Tags',
          body: 'Annotated tagging syntax:',
          code: `# Create annotated tag with message:
git tag -a v1.0.0 -m "Release version 1.0.0 Production"

# List tags:
git tag

# Push tags to remote repository:
git push origin v1.0.0
# (or push all tags: git push origin --tags)`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 17. The .gitignore File
  {
    id: 'git-gitignore',
    title: 'The .gitignore File',
    slug: 'git-gitignore',
    summary: 'Prevent sensitive secrets (.env), build artifacts (dist), and heavy dependencies (node_modules) from tracking.',
    readTime: '4 min',
    category: 'Git Best Practices',
    content: {
      overview: 'A .gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.',
      sections: [
        {
          heading: 'Example .gitignore Patterns',
          body: 'Standard ignore rules:',
          code: `# Dependencies:
node_modules/
vendor/

# Environment variables & secrets (NEVER COMMIT!):
.env
.env.local
*.pem

# Build output:
dist/
build/
*.log

# Operating system files:
.DS_Store
Thumbs.db`,
          codeLanguage: 'text',
          interactive: true
        }
      ]
    }
  },

  // 18. Pull Requests & GitHub Flow
  {
    id: 'git-workflow',
    title: 'GitHub Flow & Pull Requests',
    slug: 'git-workflow',
    summary: 'Industry branch workflows: Feature branches, Pull Requests, code reviews, and automated CI/CD.',
    readTime: '4 min',
    category: 'Git Best Practices',
    content: {
      overview: 'GitHub Flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly.',
      sections: [
        {
          heading: 'The 5-Step GitHub Flow',
          body: '1. Create branch from main.\n2. Add commits with descriptive commit messages.\n3. Open a Pull Request on GitHub for peer code review.\n4. Address feedback and verify automated CI tests pass.\n5. Merge Pull Request into main and deploy to production.',
          code: `# Step 1:
git switch -c feature/oauth2-login
# Step 2:
git commit -am "feat: add Google OAuth2 provider"
# Step 3:
git push -u origin feature/oauth2-login
# Then open Pull Request on github.com!`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Pull Request #142 Merged</h3>
    <pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:6px; font-family:monospace;">Status: MERGED into main
CI Checks: 14 passing (0 failed)
Review: Approved by 2 senior reviewers
Deploy: dev-aurora.vercel.app [READY]</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
