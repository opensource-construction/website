import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    // Other test configuration...
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
      '@lib': resolve(__dirname, './lib')
    }
  }
});