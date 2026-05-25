# 🎭 Playwright Automation Framework

[![Playwright](https://img.shields.io/badge/Playwright-1.40%2B-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Gherkin](https://img.shields.io/badge/Gherkin-Cucumber-5E9B3A?logo=cucumber&logoColor=white)](https://cucumber.io/docs/gherkin/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Overview

As my first hands-on project with Playwright, this test automation framework implements core E2E testing concepts using TypeScript and Gherkin (BDD). While it's a learning journey, the structure follows professional standards to be scalable and maintainable


## ✨ Key Features

- **⚡ Blazing Fast E2E Testing:** Leverages Playwright's auto-wait, tracing, and parallel execution capabilities.
- **🛡️ Type-Safe Code:** Written entirely in **TypeScript** to reduce runtime errors and improve code maintainability.
- **📖 Behavior-Driven Development (BDD):** Uses **Gherkin** syntax (`.feature` files) to write human-readable test scenarios, bridging the gap between technical and non-technical stakeholders.
- **🧹 Clean Architecture:** Project structure is organized for separation of concerns (locators, page objects, features, steps).
- **📊 Automatic Reporting:** Generates detailed HTML test reports with screenshots and videos for failed tests (Playwright's built-in reporter).
- **🔧 Cross-Browser & Mobile:** Can be configured to run tests on Chromium, Firefox, WebKit, and simulated mobile devices.
- **🌐 Azure DevOps / GitHub Actions Ready:** Includes a base configuration for Continuous Integration (CI).

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Playwright** | E2E test runner and automation library |
| **TypeScript** | Primary programming language |
| **Gherkin (Cucumber)** | BDD syntax for writing test scenarios |
| **Node.js** | Runtime environment |
| **Git/GitHub** | Version control and project hosting |

## 📁 Project Structure

playwright/<br>
├── .features-gen/ # Auto-generated step definitions from .feature files<br>
│ └── tests/features/<br>
├── .idea/ # IntelliJ/WebStorm project settings<br>
├── .vscode/ # VS Code workspace settings<br>
├── env/ # Environment configuration files (.env.staging, etc.)<br>
├── tests/ # Main test folder<br>
│ ├── features/ # Gherkin feature files (.feature)<br>
│ │ ├── changeName.feature<br>
│ │ └── ecomlogin.feature<br>
│ ├── steps/ # Step definitions mapping Gherkin to Playwright actions<br>
│ │ ├── changeNamesteps.js<br>
│ │ └── ecomloginsteps.js<br>
│ └── fixtures/ # Custom Playwright fixtures<br>
│ ├── fixtures.js<br>
│ └── pages.js<br>
├── .gitignore # Files ignored by Git<br>
├── package.json # Project metadata and scripts<br>
├── package-lock.json # Dependency lockfile<br>
└── playwright.config.js # Central Playwright configuration<br>



## 💡 Key Best Practices Applied

- Page Object Model (POM): Reduces code duplication by encapsulating UI elements and behaviors inside modular classes within the pages/ directory.

- Web-First Assertions: Validations automatically wait asynchronously for specific conditions to be met, eliminating the need for flaky hardcoded sleeps (sleep).

- Strict Typing: Developed completely over TypeScript to catch syntax, selector, and parameter errors during development before the code ever runs.


## 📦 Installation

### Prerequisites

1. **Node.js** (v18 or higher)
   Download from [Node.js official website](https://nodejs.org/)

2. **Git** (for cloning the repository)
   Download from [Git official website](https://git-scm.com/)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/playwright.git
cd playwright

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Generate feature files from existing tests (optional)
npm run bddgen

# Run tests with HTML reporter
npm test

# View test report
npm run report
