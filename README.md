# Enterprise Prompt Engineering Portal 2025

[![Version](https://img.shields.io/badge/version-2.0.2-blue.svg)](https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-10+-CB3837.svg)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/React-19.2.3-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4.svg)](https://tailwindcss.com/)
[![Gemini](https://img.shields.io/badge/Gemini-1.5%20Pro-orange.svg)](https://ai.google.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3.svg)](https://eslint.org/)
[![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025/blob/main/CONTRIBUTING.md)
[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025)

## 📖 Overview

The **Enterprise Prompt Engineering Portal 2025** is a comprehensive, AI-powered interactive manual for modern prompt engineering. It features structured frameworks, super-prompts, real-time model benchmarking, and AI-powered prompt refinement capabilities using Google's Gemini API.

### ✨ Key Features

- **🧩 Prompt Frameworks (2025 Edition)**: RISEN, COSTAR, RACEF, SPEAR, QUEST, and RODES—use these structured approaches to improve prompt quality by 30-40%
- **⚡ AI-Powered Refinement**: Input raw prompts → get professionally optimized versions instantly using Gemini 1.5 Pro with automatic framework application
- **⚙️ System Prompts Library**: Pre-tested system prompts for Claude 4.5 Opus, GPT-5, Gemini 3 Pro, and DeepSeek R1 with configuration guidance
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
- **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/app/apikey)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025.git
   cd Enterprise-Prompt-Engineering-Portal-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
   ```
   
   ⚠️ **Security**: Never commit `.env` to version control. It's already listed in `.gitignore`.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000` (or the port shown in terminal)

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
│   │   └── geminiService.ts      # Gemini API wrapper with error handling
│   ├── constants.ts              # Framework definitions, prompts, benchmarks
│   ├── types.ts                  # TypeScript interfaces & types
│   ├── App.tsx                   # Main application component & routing
│   ├── index.tsx                 # React DOM render entry point
│   └── vite-env.d.ts             # Vite environment type definitions
├── public/                       # Static assets (if any)
├── index.html                    # HTML entry point
├── index.css                     # Global styles & Tailwind imports
├── vite.config.ts                # Vite build configuration
├── tsconfig.json                 # TypeScript compiler options
├── tailwind.config.js            # Tailwind CSS customization
├── postcss.config.js             # PostCSS config for Tailwind
├── .eslintrc.config.js           # ESLint flat config
├── package.json                  # Dependencies & npm scripts
├── .env.example                  # Environment template (safe to commit)
├── .gitignore                    # Git ignore rules (includes .env)
└── README.md                     # This file
```

---

## 🔧 Available Scripts

### Development & Build
```bash
npm run dev          # Start Vite dev server with HMR
npm run build        # Production build (output to dist/)
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run type-check   # TypeScript type checking
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

---

## 🌟 Features Deep Dive

### 1. Prompt Frameworks

Six industry-standard frameworks to structure your prompts for clarity and consistency:

| Framework | Use Case | Example |
|-----------|----------|---------|
| **RISEN** | General-purpose prompting | Define Role, Instructions, Steps, End Goal, then Narrow scope |
| **COSTAR** | Content creation & analysis | Context → Objective → Style → Tone → Audience → Response format |
| **RACEF** | Iterative refinement | Rephrase → Append context → Contextualize → Examples → Follow-up |
| **SPEAR** | Dialogue & interactive tasks | Start topic → Provide info → Explain reasoning → Ask questions → Repeat |
| **QUEST** | Requirement gathering | Question → Understanding → Expectation → Scope → Time constraints |
| **RODES** | Verification-heavy tasks | Role → Objective → Details → Examples → Sense check |

**Recommendation**: Use COSTAR for content work, RISEN for technical tasks, QUEST for requirements.

### 2. AI-Powered Prompt Refinement

1. Input your draft prompt
2. Optionally select a framework (COSTAR/RISEN applied by default)
3. Gemini 1.5 Pro refines it in real-time
4. Get professional output with reasoning transparency
5. Copy, iterate, or deploy

**Error Handling**: If API fails, you'll see a clear error message with retry options. Check your API key in `.env`.

### 3. System Prompts Library

Pre-configured, production-tested system prompts optimized for:
- **Google Gemini 3 Pro**: High-reasoning, complex multi-step tasks
- **Google Gemini 3 Deep Think**: Extended chain-of-thought for math, code, reasoning
- **Anthropic Claude 4.5 Opus**: Balanced reasoning and accuracy, best for enterprise
- **OpenAI GPT-5**: Faster inference, good for high-volume applications
- **DeepSeek R1**: Cost-effective reasoning alternative

Each includes parameter recommendations (temperature, top_p, max_tokens).

### 4. Interactive Benchmarks

Compare LLM performance across critical metrics:
- **GPQA**: Graduate-level reasoning (hard science/math questions)
- **SWE-bench**: Real-world software engineering tasks (code generation, debugging)
- **AIME**: American Invitational Mathematics Exam (olympiad-level math)
- **Context Window**: Maximum tokens supported (important for long documents/conversations)

Charts update with model selection. Data is sourced from official model cards (Jan 2025).

### 5. Security & Compliance

Deep-dives into:
- **Prompt Injection Defense**: Detecting and mitigating adversarial inputs
- **PII Protection**: Anonymization strategies and detection patterns
- **Enterprise Guardrails**: Rate limiting, content filtering, audit logging
- **Compliance Frameworks**: HIPAA, SOC2, ISO 27001 considerations for LLM deployment

### 6. Resource Hub

Curated, vetted links to:
- **Official Docs**: OpenAI, Anthropic, Google, DeepSeek, Meta documentation
- **Cookbooks & Tutorials**: Prompt engineering best practices
- **Community Resources**: GitHub repos, blogs, papers
- **Tools**: LangSmith, Promptfoo, Arize Phoenix for observability

---

## 🔐 Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `VITE_GEMINI_API_KEY` | Your Gemini API key from Google AI Studio | ✅ Yes | `AIza...` |

**How to get your API key:**
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy and paste into `.env`

**Troubleshooting:**
- If you see "API key invalid" → Check `.env` file exists and key is copied correctly
- If you see "Quota exceeded" → Your API has rate limits; contact Google Cloud support
- Key won't work in production? → You'll need a Google Cloud project with billing enabled

---

## 📦 Dependencies

### Core (Production)
```json
{
  "react": "^19.2.3",              // UI framework
  "react-dom": "^19.2.3",          // DOM rendering
  "@google/generative-ai": "^0.21.0", // Gemini API (web SDK)
  "recharts": "^3.6.0",            // Charts for benchmarks
  "lucide-react": "^0.474.0"       // Icons
}
```

### Dev
```json
{
  "@vitejs/plugin-react": "^5.0.0", // Vite React integration
  "typescript": "~5.8.2",            // Type checking
  "vite": "^6.2.0",                  // Build tool & dev server
  "tailwindcss": "^3.4.1",           // CSS framework
  "eslint": "^9.x.x"                 // Linting
}
```

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output: `dist/` directory ready for deployment.

### Deploy to Vercel

```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Deploy
vercel
```

Vercel will auto-detect Vite and handle environment variables via dashboard.

### Deploy to Netlify

```bash
# Install Netlify CLI (one-time)
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Important**: Set `VITE_GEMINI_API_KEY` in the platform's environment variable settings (never in code).

### Deploy to Self-Hosted (Docker)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 🐛 Version History

### v2.0.2 (Current)

**Enterprise Manual Implementation**
- ✅ All missing sections completed: Security, Compliance, Observability, Advanced Optimization
- ✅ Added 360-degree view of prompt engineering operations
- ✅ Prompt Injection defense strategies documented
- ✅ PII protection patterns with examples

**Tech Stack Modernization**
- ✅ TypeScript 5.8.2 with strict mode
- ✅ ESLint migrated to flat config (future-proof)
- ✅ Vite 6.2 with optimized chunking
- ✅ All deprecation warnings resolved

**Model & Framework Enhancements**
- ✅ Added Gemini 3 Deep Think benchmarks
- ✅ New frameworks: RACEF, SPEAR, QUEST
- ✅ System prompts for GPT-5 and DeepSeek R1
- ✅ Chain-of-Density (CoD) and APO techniques documented

### v2.0.1 (Previous)

**Critical Fixes**
- ✅ Moved source code to standard `src/` directory
- ✅ Fixed `vite.config.ts` ESM compatibility
- ✅ Corrected variable naming bug (`idx` → `index`) in App.tsx
- ✅ Switched from backend SDK to frontend `@google/generative-ai`

---

## 🤝 Contributing

Contributions welcome! Process:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/YourFeature`
3. Commit: `git commit -m 'Add YourFeature'`
4. Push: `git push origin feature/YourFeature`
5. Open Pull Request with description

**Guidelines**: Keep PRs focused, include tests if applicable, follow TypeScript/ESLint rules.

---

## 📝 License

MIT License – see [LICENSE](LICENSE) for details. Use freely in commercial and personal projects.

---

## 🙏 Acknowledgments

- Google DeepMind for Gemini API
- OpenAI for GPT models and best practices
- Anthropic for Claude and prompt engineering guidance
- Open-source community (Vite, React, Tailwind teams)

---

## 📞 Support & Issues

- **GitHub Issues**: [Report bugs or request features](https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025/issues)
- **Documentation**: Full docs at [/docs](./docs) (if available)
- **API Issues**: Check [Google AI Studio status](https://status.cloud.google.com/)

---

**Built with ❤️ by Darshil Shah**

*Last Updated: January 2026*
