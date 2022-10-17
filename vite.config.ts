/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    reporters: 'verbose',
    coverage: {
      all: true,
      include: ['src']
    }
  }
})
