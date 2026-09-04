# Enterprise Prompt Engineering Portal 2025

[![Version](https://img.shields.io/badge/version-2.0.2-blue.svg)](https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-10+-CB3837.svg)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/React-19.2.3-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.0-3178c6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-06B6D4.svg)](https://tailwindcss.com/)
[![Gemini](https://img.shields.io/badge/Gemini-2.0%20Flash-orange.svg)](https://ai.google.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3.svg)](https://eslint.org/)
[![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025/blob/main/CONTRIBUTING.md)
[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025)

## 📖 Overview

The **Enterprise Prompt Engineering Portal 2025** is a comprehensive, AI-powered interactive manual for modern prompt engineering. It features structured frameworks, super-prompts, real-time model benchmarking, and AI-powered prompt refinement capabilities using a secure Edge Function with Google's Gemini API.

### ✨ Key Features

- **🧩 Prompt Frameworks (2026 Edition)**: RISEN, COSTAR, RACEF, SPEAR, QUEST, APE, and RODES—use these structured approaches to improve prompt quality by 30-40%
- **⚡ AI-Powered Refinement**: Input raw prompts → get professionally optimized versions instantly using Gemini 2.0 Flash via a Bolt Database Edge Function
- **⚙️ System Prompts Library**: Pre-tested system prompts for Claude 4.5 Opus, GPT-5, Gemini 3 Pro/Flash, and DeepSeek R1 with configuration guidance
- **📊 Model Benchmarking**: Real-time, interactive visualization of GPQA, SWE-bench, AIME, and context window metrics across top LLMs
- **🔒 Security & Compliance**: Deep-dive into prompt injection defense, PII protection, and enterprise guardrails
- **📚 Comprehensive Knowledge Base**: Curated resources and best practices from OpenAI, Anthropic, Google, DeepSeek, and Meta
- **🛠️ Advanced Optimization**: Chain-of-Thought (CoT), Chain-of-Verification (CoVe), Few-Shot examples, Self-Critique, and Automated Prompt Optimization (APO) techniques
- **📈 Observability Integration**: Setup guides for LangSmith, Promptfoo, and Arize Phoenix

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/app/apikey) (configured on server-side Edge Function)

### Installation & Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025.git
   cd Enterprise-Prompt-Engineering-Portal-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000`

---

## 🏗️ Project Structure

```
enterprise-prompt-portal/
├── src/
│   ├── components/               # Reusable React components
│   │   ├── Layout.tsx            # Main layout with sidebar navigation
│   │   ├── ErrorBoundary.tsx     # Error boundary for graceful error handling
│   │   ├── BenchmarkChart.tsx    # Interactive recharts visualization
│   │   └── Manual.tsx            # Comprehensive AI resources & best practices guide
│   ├── services/                 # External API integrations
│   │   └── geminiService.ts      # Client service invoking Edge Function
│   ├── constants/                # Specialized constant modules
│   │   ├── benchmarks.ts         # Performance metrics for models
│   │   ├── frameworks.ts         # Prompt engineering frameworks
│   │   ├── prompts.ts            # System and super prompts
│   │   └── index.ts              # Constants entry point
│   ├── types.ts                  # TypeScript interfaces & types
│   ├── App.tsx                   # Main application component & routing
│   ├── index.tsx                 # React DOM render entry point
│   └── vite-env.d.ts             # Vite environment type definitions
├── supabase/
│   └── functions/
│       └── refine-prompt/        # Bolt Database Edge Function (Deno)
│           └── index.ts          # Server-side prompt refinement endpoint
├── public/                       # Static assets
├── index.html                    # HTML entry point with CSP
├── vite.config.ts                # Vite build configuration
├── tsconfig.json                 # TypeScript compiler options
├── eslint.config.js              # ESLint flat config
├── package.json                  # Dependencies & npm scripts
├── .env.example                  # Environment template
├── .gitignore                    # Git ignore rules
└── README.md                     # Documentation
```

---

## ⚡ Bolt Edge Function Architecture

Prompt refinement is handled by the `refine-prompt` Bolt Database Edge Function.

- **Edge Function Name**: `refine-prompt`
- **Location**: `supabase/functions/refine-prompt/index.ts`
- **Purpose**: Accepts raw user prompts, applies input sanitization, and calls Gemini 2.0 Flash server-side.
- **Frontend Invocation**: `geminiService.ts` makes a POST request to `https://refine-prompt.supabase.co/functions/v1/refine-prompt`.
- **Request Format**:
  ```json
  {
    "prompt": "Your draft prompt here"
  }
  ```
- **Response Format**:
  ```json
  {
    "text": "Refined and structured prompt output"
  }
  ```
- **Server-Side Secret**:
  - `GEMINI_API_KEY`: Required only in the Edge Function environment. Never exposed to browser code, Vite client environment, or bundle outputs.

---

## 🔧 Available Scripts

### Development & Build
```bash
npm run dev          # Start Vite dev server with HMR (opens browser at http://localhost:3000)
npm run build        # Production build (output to dist/)
npm run preview      # Preview production build locally
```

### Code Quality & Testing
```bash
npm run test         # Run unit tests with Vitest
npm run lint         # Run ESLint
```

---

## 🔐 Environment & Security

| Variable | Scope | Description |
|----------|-------|-------------|
| `GEMINI_API_KEY` | Server-Only (Edge Function) | Gemini API credentials for prompt refinement |

**Security Guarantee**:
- No API keys or credentials exist in frontend code or client bundles.
- Content Security Policy (CSP) restricts network connections exclusively to authorized endpoints including `https://refine-prompt.supabase.co`.

---

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.MD) for guidelines.

---

## 📝 License

MIT License – see [LICENSE](LICENSE) for details.
