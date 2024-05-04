/// <reference types="vitest" />
// Imports
// =================================
import { defineConfig } from "vitest/config";

// Main Config
// =================================
export default defineConfig({
  test: {
    // ...
    coverage: {
      provider: 'v8'
    },
    alias: {
      '@': '/src'
    }
  },
});