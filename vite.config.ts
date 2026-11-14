import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

function githubPagesBase(): string {
  const fromEnv = process.env.BASE_PATH;
  if (!fromEnv || fromEnv === '/') return '/';
  return fromEnv.endsWith('/') ? fromEnv : `${fromEnv}/`;
}

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? githubPagesBase() : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': rootDir,
    },
  },
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    hmr: process.env.DISABLE_HMR !== 'true',
    // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
