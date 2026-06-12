# Changelog

All notable changes to this project will be documented in this file.

## [2.0.2] - 2026-06-12

### Added
- Implemented missing sections in the Enterprise Manual:
    - Prompt Engineering (detailed frameworks: RACEF, SPEAR, RISEN, COSTAR, QUEST, APE, RODES)
    - Testing & Quality Assurance (Promptfoo, LangSmith, Arize Phoenix)
    - Compliance & Security (Prompt Injection, PII Defense)
    - Learning Resources (DeepLearning.AI, Research Papers)
    - API Quick Reference (Gemini, OpenAI)
    - Community & Support
    - Status & Monitoring
- Introduced Express-based Backend-for-Frontend (BFF) proxy for secure Gemini API integration.
- Added comprehensive formal documentation in `/docs` directory (Architecture, Frameworks).

### Changed
- Updated core and dev dependencies (Vite 6.3, Gemini SDK 0.24, React 19).
- Modernized ESLint configuration to flat config (`eslint.config.js`).
- Updated `tsconfig.json` for modern TypeScript compatibility.
- Fixed `vite.config.ts` for better ESM compatibility, path aliasing, and SWC integration.
- Refactored constants into specialized modules in `src/constants/`.

### Fixed
- Resolved TypeScript errors in `BenchmarkChart.tsx` related to Recharts Tooltip types.
- Fixed Linting errors in `geminiService.ts` and `vite.config.ts`.
- Corrected various build and runtime configuration issues.
- Fixed Gemini API integration to use server-side proxy for better security.

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
