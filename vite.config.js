import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
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
      '^/headless/.*': {
        target: 'https://jsonplaceholder.typicode.com/photos/',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/headless/, ''),
      },
      '^/media/.*': {
        target: 'https://via.placeholder.com/',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/media/, ''),
      },
    },
  },
});
