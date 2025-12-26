import path from 'path';
import url from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from .env files
  const env = loadEnv(mode, '.', '');

  return {
    // Development server configuration
    server: {
      port: 3000,
      host: '0.0.0.0', // Allows network access
      open: true, // Auto-open browser on start
      strictPort: false, // Try next port if 3000 is busy
    },

    // Preview server (for production build testing)
    preview: {
      port: 4173,
      host: '0.0.0.0',
      strictPort: false,
    },

    // Plugins
    plugins: [
      react({
        // Enable Fast Refresh for better DX
        fastRefresh: true,
        // Babel configuration for React
        babel: {
          plugins: [],
        },
      }),
    ],

    // Environment variable injection
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    // Path resolution
    alias: {
      '@': path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'src'),
    },
  },

    // Build optimization
    build: {
    outDir: 'dist',
      sourcemap: mode === 'development', // Sourcemaps only in dev
        minify: 'esbuild', // Fast minification
          target: 'es2015', // Browser compatibility
            cssCodeSplit: true, // Split CSS for better caching
              rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
            'recharts-vendor': ['recharts'],
          },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    },

  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'recharts',
      '@google/generative-ai',
    ],
    },

  // CSS configuration
  css: {
    devSourcemap: true, // CSS sourcemaps in dev
    },
};
});
