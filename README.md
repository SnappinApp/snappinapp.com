# Snappin

**Snappin** is an AI-powered automation tool that pulls, organizes, and syncs receipts, bills, and invoices directly from your email into your accounting system.

---

## Features

- Inbox scanning  
- WhatsApp upload  
- Bank statement reconciliation  
- Integration with Xero, QuickBooks, and other accounting platforms  

---

## Tech Stack

**Frontend:** React, Next.js, Tailwind CSS, Iconify  
**Backend:** Node.js, Express, PostgreSQL, Gemini, Flash Lite, AWS Textract, Expense API, Clerk, Firebase Storage  
**Infrastructure:** Vercel  
**CI/CD:** Coming soon  

---

## Getting Started

### Prerequisites

- Node.js v20 or above  
- npm or Yarn  

### Installation

```bash
git clone https://github.com/your-username/snappin.git
cd snappin
npm install
# or
yarn install

## Development & Contribution

- **Contributions:** Not currently accepting external contributions  
- **Branching Strategy:**  
  - `main` – primary development branch  
  - `prod-staging`, `prod-current` – deployment branches  
  - `features/*`, `bugfix/*` – derived from `main`  
- **Commit Policy:** All commits must be reviewed before merging  
- **Issues:** Open for bug reports and feature requests  
- **Pull Request Titles:** Follow conventional commit guidelines  
  - `feat:` – New feature  
  - `fix:` – Bug fix  
  - `docs:` – Documentation updates  
  - `chore:` – Minor tasks or maintenance  
  - `refactor:` – Code restructuring without functional change  
  - `test:` – Adding or updating tests  
  - `ci:` – CI/CD related changes  
  - `build:` – Build tool or dependency updates  
  - `style:` – Formatting or stylistic changes (no logic updates)
