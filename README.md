# Enterprise Prompt Engineering Portal 2025

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/yourusername/prompt-portal)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.3-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Gemini](https://img.shields.io/badge/Gemini-1.5%20Pro-orange.svg)](https://ai.google.dev/)

</div>

## 📖 Overview

The **Enterprise Prompt Engineering Portal 2025** is a comprehensive, AI-powered interactive manual for modern prompt engineering. It features structured frameworks, super-prompts, real-time model benchmarking, and AI-powered prompt refinement capabilities using Google's Gemini API.

### Key Features

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
- **Gemini API Key** from [Google AI Studio](https://aistudio.google.com)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/enterprise-prompt-portal.git
   cd enterprise-prompt-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   GEMINI_API_KEY=your_api_key_here
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
│   ├── Layout.tsx           # Main layout with sidebar navigation
│   ├── BenchmarkChart.tsx   # Interactive benchmark visualization
│   └── Manual.tsx           # Comprehensive AI resources guide
├── services/
│   └── geminiService.ts     # Gemini API integration
├── constants.ts             # Data constants and configurations
├── types.ts                 # TypeScript type definitions
├── App.tsx                  # Main application component
├── index.tsx                # Application entry point
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

---

## 🔧 Configuration

### Vite Configuration

The project uses Vite for fast development and optimized production builds. Key configurations:

- **Port**: 3000
- **Host**: 0.0.0.0 (accessible from network)
- **Environment Variables**: Exposed via `define` config
- **Path Aliases**: `@/` maps to project root

### TypeScript Configuration

- **Target**: ES2022
- **Module**: ESNext with bundler resolution
- **JSX**: React JSX transform
- **Strict Mode**: Enabled for type safety

---

## 🐛 Version 2.0.0 - Bug Fixes & Improvements

### Major Fixes Applied

#### 1. **Gemini API Integration** ✅
- **Issue**: Incorrect API initialization and response handling
- **Fix**: 
  - Changed from `GoogleGenAI` to `GoogleGenerativeAI`
  - Fixed model initialization with proper configuration
  - Implemented correct response parsing with `response.text()`
  - Added robust error handling with try-catch blocks
  - Cleaned up JSON responses (removed markdown code blocks)

#### 2. **Type System** ✅
- **Issue**: Missing `OptimizationTechnique` type definition
- **Fix**:
  - Added `OptimizationCategory` type
  - Properly defined `OptimizationTechnique` interface
  - Removed redundant constant mapping (`OPTIMIZATION_TECHNIQUE_INTERFACE`)
  - Added proper type exports

#### 3. **Code Quality** ✅
- **Issue**: Inconsistent formatting and code organization
- **Fix**:
  - Standardized indentation (2 spaces)
  - Organized imports alphabetically
  - Added proper JSDoc comments where needed
  - Removed unused variables and imports
  - Consistent naming conventions

#### 4. **Error Handling** ✅
- **Issue**: Insufficient error handling in async operations
- **Fix**:
  - Added comprehensive try-catch blocks
  - Implemented user-friendly error messages
  - Added console error logging for debugging
  - Graceful fallbacks for failed API calls

#### 5. **Environment Variables** ✅
- **Issue**: Potential undefined API key
- **Fix**:
  - Added validation in `getClient()` method
  - Clear error messages for missing API keys
  - Support for both `GEMINI_API_KEY` and `API_KEY` variables

#### 6. **Component Structure** ✅
- **Issue**: Inconsistent component patterns
- **Fix**:
  - Proper TypeScript interfaces for all props
  - Consistent event handler naming
  - Proper React hooks usage
  - Memoization for filtered resources

---

## 📦 Dependencies

### Core Dependencies
- **react** ^19.2.3 - UI library
- **react-dom** ^19.2.3 - React DOM renderer
- **@google/genai** ^1.34.0 - Google Generative AI SDK
- **recharts** ^3.6.0 - Chart library for benchmarks
- **lucide-react** ^0.474.0 - Icon library

### Dev Dependencies
- **@vitejs/plugin-react** ^5.0.0 - Vite React plugin
- **typescript** ~5.8.2 - TypeScript compiler
- **vite** ^6.2.0 - Build tool
- **@types/node** ^22.14.0 - Node.js type definitions

---

## 🎨 Features Deep Dive

### 1. Prompt Frameworks
Learn and apply industry-standard prompting frameworks:
- **RISEN**: Role, Instructions, Steps, End Goal, Narrowing
- **COSTAR**: Context, Objective, Style, Tone, Audience, Response
- **APE**: Action, Purpose, Expectation
- And more...

### 2. AI-Powered Prompt Refinement
- Input draft prompts
- Get professionally refined outputs
- Powered by Gemini 1.5 Pro
- Applies COSTAR/RISEN frameworks automatically

### 3. System Prompts Library
Pre-configured system prompts for:
- Google Gemini 3 Pro/Flash
- Anthropic Claude 4.5
- OpenAI GPT-5.2

### 4. Interactive Benchmarks
Real-time visualization of:
- GPQA scores (Graduate-level reasoning)
- SWE-bench scores (Software engineering)
- AIME scores (Mathematical problem-solving)
- Context window comparisons

### 5. Resource Hub
Curated links to:
- Official documentation (OpenAI, Anthropic, Google)
- Cookbooks and tutorials
- Community resources
- Learning materials

---

## 🔐 Security Considerations

1. **API Key Protection**: Never commit API keys to version control
2. **Environment Variables**: Use `.env.local` for sensitive data
3. **CORS**: API calls are made server-side to protect credentials
4. **Input Validation**: All user inputs are sanitized

---

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to AI Studio
View your deployed app: [AI Studio Link](https://ai.studio/apps/drive/1Bl5nuWJjHhv0OVluoWsCjYYVQEW1KCHS)

---

## 📈 Performance Optimizations

- **Code Splitting**: Vite handles automatic code splitting
- **Lazy Loading**: React lazy loading for heavy components
- **Memoization**: useMemo for expensive computations
- **Debouncing**: Input debouncing for API calls
- **Tree Shaking**: Unused code elimination in production

---

## 🧪 Testing

### Run Tests (Coming Soon)
```bash
npm test
```

### Type Check
```bash
npm run type-check
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

## 📝 Changelog

### Version 2.0.0 (December 2025)
- ✅ Fixed Gemini API integration
- ✅ Corrected type definitions
- ✅ Enhanced error handling
- ✅ Improved code formatting
- ✅ Added comprehensive documentation
- ✅ Standardized component structure

### Version 1.0.0 (November 2025)
- Initial release
- Core features implementation
- Basic UI/UX design

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Google DeepMind for Gemini API
- OpenAI for GPT models
- Anthropic for Claude models
- The open-source community for tools and libraries

---

## 📞 Support

For support, please:
- Open an issue on GitHub
- Contact: support@example.com
- Visit: [Documentation](https://docs.example.com)

---

## 🗺️ Roadmap

### Q1 2026
- [ ] Add multi-language support
- [ ] Implement user authentication
- [ ] Add prompt history tracking
- [ ] Integrate Claude API

### Q2 2026
- [ ] Add collaborative features
- [ ] Implement prompt versioning
- [ ] Add advanced analytics
- [ ] Mobile app development

---

<div align="center">

**Built with ❤️ by Darshil**

[Website](https://example.com) • [Documentation](https://docs.example.com) • [Community](https://community.example.com)

</div>
