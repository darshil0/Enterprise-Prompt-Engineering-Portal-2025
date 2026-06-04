# Changelog

All notable changes to this project will be documented in this file.

## [2.0.2] - 2026-06-03

### Added
- Implemented missing sections in the Enterprise Manual:
    - Prompt Engineering (COSTAR, RISEN)
    - Testing & Quality Assurance (Promptfoo, LangSmith, Arize Phoenix)
    - Compliance & Security (Prompt Injection, PII Defense)
    - Learning Resources (DeepLearning.AI, Research Papers)
    - API Quick Reference (Gemini, OpenAI)
    - Community & Support
    - Status & Monitoring

### Changed
- Updated core and dev dependencies.
- Modernized ESLint configuration to flat config (`eslint.config.js`).
- Updated `tsconfig.json` for modern TypeScript compatibility.
- Fixed `vite.config.ts` for better ESM compatibility and path aliasing.

### Fixed
- Resolved TypeScript errors in `BenchmarkChart.tsx` related to Recharts Tooltip types.
- Fixed Linting errors in `geminiService.ts` and `vite.config.ts`.
- Corrected various build and runtime configuration issues.

## [2.0.1] - 2025-12-24

### Fixed
- Streamlined folder structure (moved source code to `src/`).
- Updated `index.html` entry point to `/src/index.tsx`.
- Fixed variable naming bug in `App.tsx`.
- Switched to proper frontend SDK `@google/generative-ai`.

## [2.0.0] - 2025-12-23

### Added
- Interactive, AI-powered manual for modern prompt engineering.
- Industry-standard frameworks (RISEN, COSTAR, APE).
- AI-powered prompt refinement via Gemini API.
- Real-time model benchmarking visualization.
- System architecture templates for Claude/GPT/Gemini.
- Curated resource hub.
