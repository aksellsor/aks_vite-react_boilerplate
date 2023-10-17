import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    manifest: true,
    outDir: 'build',
    sourcemap: true,
  },
  server: {
    port: 1337,
    proxy: {
      '/headless': {
        target: 'https://sorsport.no',
        changeOrigin: true,
        secure: true,
      },
      '/media': {
        target: 'https://sorsport.no',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
