import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  test: {
    globals: true
  },
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, './lib'),
      '@components': path.resolve(__dirname, './components')
    }
  }
});