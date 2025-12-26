# Enterprise Prompt Engineering Portal 2025

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.3-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Gemini](https://img.shields.io/badge/Gemini-1.5%20Pro-orange.svg)](https://ai.google.dev/)

## 📖 Overview

The **Enterprise Prompt Engineering Portal 2025** is a comprehensive, AI-powered interactive manual for modern prompt engineering. It features structured frameworks, super-prompts, real-time model benchmarking, and AI-powered prompt refinement capabilities using Google's Gemini API.

### ✨ Key Features

- 🧩 **Logical Frameworks**: RISEN, COSTAR, APE, CARE, TAG, and RODES frameworks for structured prompting
- ⚡ **Super-Input Logic**: Pre-built prompt templates for QA, development, and strategic planning
- ⚙️ **System Architecture**: Foundational system prompts for Claude, GPT, and Gemini models
- 📊 **Signal Performance**: Real-time model benchmarking with interactive charts
- 💎 **Google AI Ecosystem**: Integration with Gemini API for prompt refinement
- 📚 **Knowledge Base**: Curated resources from OpenAI, Anthropic, Google, and the community
- ✨ **Studio Optimization**: Expert-level configuration guidance for LLM parameters
- 📈 **Verification Loops**: Advanced optimization techniques (CoT, CoVe, Few-Shot)

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
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

---

## 🏗️ Project Structure

```
enterprise-prompt-portal/
├── components/
│   ├── Layout.tsx              # Main layout with sidebar navigation
│   ├── ErrorBoundary.tsx       # Error boundary for React errors
│   ├── BenchmarkChart.tsx      # Interactive benchmark visualization
│   └── Manual.tsx              # Comprehensive AI resources guide
├── services/
│   └── geminiService.ts        # Gemini API integration with retry logic
├── constants.ts                # Data constants and configurations
├── types.ts                    # TypeScript type definitions
├── App.tsx                     # Main application component
├── index.tsx                   # Application entry point
├── index.html                  # HTML template
├── index.css                   # Global styles with Tailwind
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies and scripts
├── .env.example                # Environment variables template
└── README.md                   # This file
```

---

## 🔧 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run type-check   # Run TypeScript type checking
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

---

## 🌟 Features Deep Dive

### 1. Prompt Frameworks

Learn and apply industry-standard prompting frameworks:

- **RISEN**: Role, Instructions, Steps, End Goal, Narrowing
- **COSTAR**: Context, Objective, Style, Tone, Audience, Response
- **APE**: Action, Purpose, Expectation
- **CARE**: Context, Action, Result, Example
- **TAG**: Task, Action, Goal
- **RODES**: Role, Objective, Details, Examples, Sense Check

### 2. AI-Powered Prompt Refinement

- Input draft prompts
- Get professionally refined outputs
- Powered by Gemini 1.5 Pro
- Applies COSTAR/RISEN frameworks automatically
- Real-time processing with error handling

### 3. System Prompts Library

Pre-configured system prompts for:
- Google Gemini 1.5 Pro/Flash
- Anthropic Claude 4.5 Sonnet
- OpenAI GPT-4.5 Turbo

### 4. Interactive Benchmarks

Real-time visualization of:
- **GPQA scores**: Graduate-level reasoning
- **SWE-bench scores**: Software engineering tasks
- **AIME scores**: Mathematical problem-solving
- **Context window**: Input capacity comparisons

### 5. Resource Hub

Curated links to:
- Official documentation (OpenAI, Anthropic, Google)
- Cookbooks and tutorials
- Community resources
- Academic papers

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Your Gemini API key from Google AI Studio | Yes |
| `VITE_API_KEY` | Alternative API key variable name | No |

Get your API key: https://aistudio.google.com/app/apikey

---

## 🐛 Version 2.0.1 - What's Fixed

### Critical Fixes

✅ **Configuration & Build**
- Corrected `tsconfig.json` to look for files in root directory (`./`) instead of non-existent `src`
- Fixed `vite.config.ts` path resolution for ESM compatibility (replaced `__dirname`)
- Added `vite-env.d.ts` for proper `import.meta.env` typing
- Added missing entry script tag in `index.html`

✅ **Logic & Runtime**
- Fixed variable naming bug (`idx` vs `index`) in `App.tsx` preventing component rendering
- Switched from backend-only `@google/genai` to proper frontend SDK `@google/generative-ai`
- Cleaned up import paths in `App.tsx` (removed `.tsx` extensions)

✅ **Environment**
- Added `.env.example` guidance
- Unified environment variable handling for Vite (`import.meta.env`)

---

## 📦 Dependencies

### Core
- **react** ^19.2.3 - UI library
- **react-dom** ^19.2.3 - React DOM renderer
- **@google/generative-ai** ^0.21.0 - Google Generative AI SDK (Web)
- **recharts** ^3.6.0 - Chart library
- **lucide-react** ^0.474.0 - Icon library

### Dev
- **@vitejs/plugin-react** ^5.0.0 - Vite React plugin
- **typescript** ~5.8.2 - TypeScript compiler
- **vite** ^6.2.0 - Build tool
- **tailwindcss** ^3.4.1 - CSS framework

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Google DeepMind for Gemini API
- OpenAI for GPT models
- Anthropic for Claude models
- The open-source community

---

## 📞 Support

For support:
- Open an issue on [GitHub](https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025/issues)
- Check the [documentation](https://github.com/darshil0/Enterprise-Prompt-Engineering-Portal-2025)

---

**Built with ❤️ by Darshil Shah**
