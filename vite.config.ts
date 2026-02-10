import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const rootDir = fileURLToPath(new URL('.', import.meta.url));
    return {
      root: rootDir,
      server: {
        port: 3000,
        host: '0.0.0.0',
        fs: {
          allow: [rootDir]
        },
        watch: {
          usePolling: true
        }
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        preserveSymlinks: true,
        alias: {
          '@': rootDir,
        }
      }
    };
});
