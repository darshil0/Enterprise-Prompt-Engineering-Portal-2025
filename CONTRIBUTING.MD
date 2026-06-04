# Contributing to Enterprise Prompt Engineering Portal 2025

Thank you for your interest in contributing! This project welcomes contributions from developers, QA engineers, and prompt engineering experts. This document outlines how to contribute effectively.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Standards](#commit-standards)
- [Code Style Guide](#code-style-guide)
- [Testing Requirements](#testing-requirements)
- [Pull Request Process](#pull-request-process)
- [Documentation Standards](#documentation-standards)
- [Security & Compliance](#security--compliance)
- [Questions or Need Help?](#questions-or-need-help)

---

## Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read and adhere to our principles:

- **Respect**: Treat all contributors with respect regardless of experience level, background, or identity.
- **Inclusivity**: Welcome diverse perspectives and foster an inclusive environment.
- **Professionalism**: Keep discussions focused, constructive, and professional.
- **Safety**: Report harassment or violations to the maintainers immediately.

**Unacceptable behavior** includes harassment, discrimination, abuse, and unwelcome sexual content. Violations will result in removal and potential ban from the project.

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v10 or higher (or **yarn**)
- **Git** (for version control)
- **A GitHub account**

### Fork & Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Enterprise-Prompt-Engineering-Portal-2025.git
   cd Enterprise-Prompt-Engineering-Portal-2025
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025.git
   ```

### Install Dependencies

```bash
npm install
```

### Set Up Environment

Copy `.env.example` to `.env` and add your Gemini API key:
```bash
cp .env.example .env
# Edit .env and add VITE_GEMINI_API_KEY=your_key_here
```

### Verify Setup

Run the development server:
```bash
npm run dev
```

Navigate to `http://localhost:3000` and confirm the app loads without errors.

---

## Development Workflow

### 1. Create a Feature Branch

Use descriptive branch names following this convention:

```
feature/add-new-framework        # New feature
fix/api-timeout-issue            # Bug fix
docs/update-readme               # Documentation
refactor/simplify-gemini-service # Code refactoring
test/add-error-boundary-tests    # Testing
chore/update-dependencies        # Maintenance
```

**Create and switch to your branch:**
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes

- Keep changes focused and atomic (one feature per branch)
- Test locally before committing (see [Testing Requirements](#testing-requirements))
- Follow the code style guide (see below)

### 3. Keep Your Branch Updated

Before pushing, sync with upstream:
```bash
git fetch upstream
git rebase upstream/main
```

If conflicts occur, resolve them and continue:
```bash
git add .
git rebase --continue
```

### 4. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

---

## Commit Standards

### Commit Message Format

Follow the Conventional Commits specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Type (required)
- `feat` – New feature
- `fix` – Bug fix
- `docs` – Documentation changes
- `style` – Code style (formatting, semicolons, etc.)
- `refactor` – Code refactoring without feature/fix changes
- `perf` – Performance improvements
- `test` – Adding or updating tests
- `chore` – Build, dependency, or tooling changes

#### Scope (optional)
Component or area affected: `components`, `services`, `types`, `constants`

#### Subject (required)
- Use imperative mood: "add" not "added" or "adds"
- Don't capitalize first letter
- No period at the end
- Limit to 50 characters

#### Body (optional)
- Explain **what** and **why**, not how
- Wrap at 72 characters
- Separate from subject by blank line

#### Footer (optional)
Reference issues: `Fixes #123` or `Closes #456`

### Examples

**Good commit:**
```
feat(components): add framework comparison table

Add interactive table showing when to use each prompting framework.
Includes use case, example, and recommended scenarios.

Fixes #42
```

**Also good:**
```
fix(services): handle gemini api timeout gracefully

Wrap geminiService.ts calls in try-catch with 5s timeout.
Display user-friendly error message if API unavailable.
```

---

## Code Style Guide

### TypeScript

- **Use strict mode** – `strict: true` in `tsconfig.json`
- **Type everything** – Avoid `any` unless justified with a comment
- **Use interfaces** for object shapes, `type` for unions/primitives
- **No implicit any** – Always provide explicit types

**Good:**
```typescript
interface FrameworkProps {
  name: string;
  description: string;
  onSelect: (framework: string) => void;
}

const Framework: React.FC<FrameworkProps> = ({ name, description, onSelect }) => {
  return <div onClick={() => onSelect(name)}>{name}</div>;
};
```

**Avoid:**
```typescript
const Framework = ({ name, description, onSelect }: any) => {
  // ...
};
```

### React Components

- **Use functional components** with hooks (no class components)
- **Memoize expensive components** – `React.memo()` for props-heavy components
- **Extract custom hooks** for reusable logic
- **Keep components small** – Under 150 lines of JSX preferably

**Good:**
```typescript
interface BenchmarkChartProps {
  data: BenchmarkData[];
  selectedModel: string;
}

export const BenchmarkChart: React.FC<BenchmarkChartProps> = React.memo(
  ({ data, selectedModel }) => {
    const chartData = useMemo(() => filterData(data, selectedModel), [data, selectedModel]);
    
    return (
      <LineChart data={chartData}>
        {/* chart content */}
      </LineChart>
    );
  }
);
```

### File Organization

```
components/
├── FrameworkSelector.tsx      # Component file
├── FrameworkSelector.test.tsx # Test file (if exists)
└── index.ts                   # Named exports

services/
└── geminiService.ts           # Utility/API service

types.ts                       # All TypeScript interfaces
constants.ts                   # Hardcoded data, config
```

### Naming Conventions

- **Components**: PascalCase (`BenchmarkChart.tsx`)
- **Functions/variables**: camelCase (`calculateScore()`)
- **Constants**: UPPER_SNAKE_CASE (`API_TIMEOUT = 5000`)
- **Files**: kebab-case or match component name (`benchmark-chart.tsx` or `BenchmarkChart.tsx`)
- **Interfaces**: PrefixedPascalCase (`I<Name>` or `<Name>Props`)

### Imports

- Group imports: React → external libraries → internal modules → types
- Use path aliases (`@/`) instead of relative paths
- Sort alphabetically within groups

**Good:**
```typescript
import React, { useState, useMemo } from 'react';
import { LineChart } from 'recharts';
import { BenchmarkChart } from '@/components/BenchmarkChart';
import { BENCHMARK_DATA } from '@/constants';
import type { BenchmarkData } from '@/types';
```

### Formatting

- **Indentation**: 2 spaces
- **Line length**: 100 characters (soft limit)
- **Semicolons**: Required
- **Quotes**: Double quotes for JSX/strings, backticks for templates

Run Prettier before committing:
```bash
npm run format
```

---

## Testing Requirements

### Pre-Commit Testing

Run before every commit:

```bash
npm run type-check   # TypeScript type checking
npm run lint         # ESLint
npm run format       # Prettier (auto-fix)
```

### Writing Tests

- Tests go in same directory as component: `ComponentName.test.tsx`
- Use descriptive test names
- Follow **Arrange → Act → Assert** pattern

**Example:**
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { BenchmarkChart } from './BenchmarkChart';

describe('BenchmarkChart', () => {
  it('should render chart with data', () => {
    // Arrange
    const mockData = [{ model: 'GPT-5', gpqa: 92 }];
    
    // Act
    render(<BenchmarkChart data={mockData} selectedModel="GPT-5" />);
    
    // Assert
    expect(screen.getByText('GPT-5')).toBeInTheDocument();
  });

  it('should handle empty data gracefully', () => {
    render(<BenchmarkChart data={[]} selectedModel="" />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });
});
```

### API Testing

For Gemini API integration changes:

1. **Test with mock API** using Jest mocks
2. **Test error scenarios**: timeout, invalid key, quota exceeded
3. **Document API changes** if you modify `geminiService.ts`

**Example:**
```typescript
jest.mock('@google/generative-ai');

describe('geminiService', () => {
  it('should handle API timeout', async () => {
    // Mock timeout error
    jest.spyOn(GoogleGenerativeAI.prototype, 'generateContent')
      .mockRejectedValue(new Error('Timeout'));
    
    await expect(refinePrompt('test')).rejects.toThrow('Timeout');
  });
});
```

---

## Pull Request Process

### Before Submitting

1. **Sync with upstream**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run all checks**
   ```bash
   npm run type-check
   npm run lint
   npm run format
   npm run build
   ```

3. **Test locally**
   ```bash
   npm run dev
   # Manual testing in browser
   ```

### Creating a Pull Request

1. Push your branch to your fork
2. Go to GitHub and click "New Pull Request"
3. Set base branch to `main` and compare to your branch

### PR Title & Description

**Title format:**
```
<type>: Brief description

Examples:
feat: Add QUEST framework to portal
fix: Resolve Gemini API timeout handling
docs: Update deployment guide for Netlify
```

**Description template:**
```markdown
## Description
Brief explanation of what this PR does.

## Related Issue
Fixes #123 (if applicable)

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation
- [ ] Refactoring
- [ ] Performance improvement

## Changes Made
- Bullet point 1
- Bullet point 2
- Bullet point 3

## Testing Done
- [ ] Local testing completed
- [ ] Test cases added/updated
- [ ] No breaking changes

## Checklist
- [ ] Code follows style guide
- [ ] TypeScript strict mode passes
- [ ] ESLint passes without warnings
- [ ] No console.log() statements remain
- [ ] Documentation updated
- [ ] Commit messages follow conventions
```

### PR Review Process

Maintainers will:
1. Review code for quality and standards
2. Check TypeScript/ESLint compliance
3. Request changes if needed
4. Approve and merge when ready

**Respond to feedback promptly:**
- Address all comments
- Push additional commits (don't force-push during review)
- Mark conversations as resolved once addressed

### After Merge

- Your branch will be deleted automatically
- Monitor merged PR for any deployment issues
- Help with additional fixes if problems arise

---

## Documentation Standards

### Code Comments

Comment **why**, not **what**. Code should be self-explanatory for what it does.

**Good:**
```typescript
// Debounce prompt refinement to avoid excessive API calls
const debouncedRefine = useMemo(
  () => debounce((prompt: string) => refinePrompt(prompt), 500),
  []
);
```

**Avoid:**
```typescript
// Set debounced refinement
const debouncedRefine = useMemo(
  () => debounce((prompt: string) => refinePrompt(prompt), 500),
  []
);
```

### README Updates

If your change affects users:
- Update relevant section in `README.md`
- Keep installation/setup instructions current
- Update feature descriptions if behavior changed

### Type Definitions

- Document complex types with JSDoc comments
- Export all public types from `types.ts`

**Good:**
```typescript
/**
 * Configuration for prompt refinement via Gemini API.
 * @property temperature - Randomness of response (0-2)
 * @property maxTokens - Maximum output length (default: 1000)
 * @property topP - Nucleus sampling parameter (0-1)
 */
export interface RefinementConfig {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
}
```

---

## Security & Compliance

### API Key Handling

- ⛔ Never commit `.env` file
- ✅ Always use `VITE_GEMINI_API_KEY` from environment
- ✅ Strip keys from error messages/logs
- ✅ Document API key scope in comments if service adds new endpoints

### Dependencies

Before adding a new package:
1. Check for security vulnerabilities: `npm audit`
2. Verify package maintenance status
3. Prefer smaller, focused packages
4. Update `package.json` and document the reason in commit message

### Error Handling

- Never expose raw API responses to users
- Log full errors in console only (dev environment)
- Display user-friendly error messages in UI
- Include retry mechanisms for transient failures

**Good:**
```typescript
try {
  const result = await refinePrompt(prompt);
  return result;
} catch (error) {
  console.error('Full error for debugging:', error);
  if (error.message.includes('timeout')) {
    throw new Error('Refinement service is temporarily unavailable. Please try again.');
  }
  throw new Error('Unable to refine prompt at this time.');
}
```

---

## Questions or Need Help?

- **GitHub Issues**: [Report bugs or ask questions](https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025/issues)
- **Email**: Contact the maintainer (if provided)
- **Discussions**: Use GitHub Discussions for general questions
- **Security Issues**: Report privately to maintainer (do not open public issues)

---

## Recognition

Contributors will be recognized in:
- Commit history
- CHANGELOG.md (for significant contributions)
- README.md acknowledgments section (for major features)

---

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you for contributing to making Enterprise Prompt Engineering Portal better! 🚀
