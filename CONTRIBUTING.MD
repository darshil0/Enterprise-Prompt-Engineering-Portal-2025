# Contributing Guidelines

Thank you for contributing to the Enterprise Prompt Engineering Portal!

## 🚀 Getting Started

1. Fork and clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 🔒 Security Guidelines

- **Never** expose API keys or secrets in client code, HTML files, or documentation.
- All AI API integrations must go through server-side Edge Functions (`supabase/functions/refine-prompt`).
- Server secrets such as `GEMINI_API_KEY` are kept strictly in the Edge Function environment.

## 🧪 Testing and Quality

Before submitting a pull request, run:
```bash
npm run test
npm run lint
npm run build
```
